export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const teamEmail = process.env.WAITLIST_TEAM_EMAIL;

    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ success: false, error: "A valid email is required." }), { status: 400 });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!isValidEmail) {
      return new Response(JSON.stringify({ success: false, error: "Please enter a valid email address." }), {
        status: 400,
      });
    }

    if (!apiKey || !fromEmail || !teamEmail) {
      console.error("Waitlist env configuration missing", {
        hasResendApiKey: Boolean(apiKey),
        hasResendFromEmail: Boolean(fromEmail),
        hasWaitlistTeamEmail: Boolean(teamEmail),
      });

      return new Response(
        JSON.stringify({
          success: false,
          error: "Email service is not configured. Please try again shortly.",
        }),
        { status: 500 },
      );
    }

    console.info("Sending waitlist onboarding email", { to: trimmedEmail, from: fromEmail });
    const userEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: trimmedEmail,
        subject: "Your Membership Access + 40% Off",
        html: `
        <div style="font-family: sans-serif; background:#ffffff; padding:40px;">
          <h2 style="color:#1F2937;">Welcome inside.</h2>

          <p style="color:#6B7280;">
            You now have access to the membership experience.
          </p>

          <a href="https://fbo-membership.vercel.app"
             style="display:inline-block;margin-top:20px;padding:12px 20px;background:#E7C9C9;color:#111;text-decoration:none;border-radius:8px;">
             Enter Membership
          </a>

          <p style="margin-top:20px;color:#6B7280;">
            Use your 40% off code at checkout:
          </p>

          <div style="font-size:20px;font-weight:bold;color:#111;margin-top:10px;">
            FBO40
          </div>

          <p style="margin-top:30px;color:#9CA3AF;font-size:12px;">
            Private options and next steps are available inside.
          </p>
        </div>
      `,
      }),
    });

    const userEmailJson = (await userEmailResponse.json().catch(() => null)) as
      | { id?: string; error?: { message?: string } }
      | null;

    if (!userEmailResponse.ok) {
      const resendMessage = userEmailJson?.error?.message ?? "Unknown Resend API error";
      console.error("Failed to send onboarding email", {
        status: userEmailResponse.status,
        resendMessage,
        response: userEmailJson,
        to: trimmedEmail,
      });

      return new Response(
        JSON.stringify({
          success: false,
          error: `Resend onboarding failed: ${resendMessage}`,
        }),
        { status: 502 },
      );
    }

    console.info("Onboarding email sent", {
      to: trimmedEmail,
      resendId: userEmailJson?.id,
    });

    console.info("Sending internal waitlist notification", {
      to: teamEmail,
      subscriberEmail: trimmedEmail,
    });
    const internalNotificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: teamEmail,
        subject: "New FBO Membership Waitlist Lead",
        html: `
        <div style="font-family: sans-serif; background:#ffffff; padding:32px;">
          <h2 style="color:#111827; margin:0 0 12px 0;">New waitlist submission</h2>
          <p style="color:#374151; margin:0 0 8px 0;">
            A new user requested membership access.
          </p>
          <p style="color:#111827; font-weight:700; margin:0;">
            ${trimmedEmail}
          </p>
        </div>
      `,
      }),
    });

    const internalNotificationJson = (await internalNotificationResponse.json().catch(() => null)) as
      | { id?: string; error?: { message?: string } }
      | null;

    if (!internalNotificationResponse.ok) {
      const resendMessage = internalNotificationJson?.error?.message ?? "Unknown Resend API error";
      console.error("Failed to send internal notification email", {
        status: internalNotificationResponse.status,
        resendMessage,
        response: internalNotificationJson,
        to: teamEmail,
        subscriberEmail: trimmedEmail,
      });

      return new Response(
        JSON.stringify({
          success: false,
          error: `Onboarding sent but internal notification failed: ${resendMessage}`,
        }),
        { status: 502 },
      );
    }

    console.info("Internal notification email sent", {
      to: teamEmail,
      resendId: internalNotificationJson?.id,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Waitlist emails sent successfully.",
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Unexpected waitlist route failure", error);
    const message = error instanceof Error ? error.message : "Unexpected server error";
    return new Response(JSON.stringify({ success: false, error: message }), { status: 500 });
  }
}
