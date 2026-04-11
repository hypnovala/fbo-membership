import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const teamEmail = process.env.WAITLIST_TEAM_EMAIL;

    if (!apiKey) {
      return Response.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    }

    if (!from) {
      return Response.json({ error: "Missing RESEND_FROM_EMAIL" }, { status: 500 });
    }

    if (!teamEmail) {
      return Response.json({ error: "Missing WAITLIST_TEAM_EMAIL" }, { status: 500 });
    }

    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email || !isValidEmail(email)) {
      return Response.json({ error: "Valid email required" }, { status: 400 });
    }

    const resend = new Resend(apiKey);

    const userSend = await resend.emails.send({
      from,
      to: email,
      subject: "Your Membership Access + 40% Off",
      html: `
        <div style="font-family: Arial, sans-serif; background:#ffffff; padding:40px; color:#111827;">
          <h2 style="margin:0 0 12px;">Welcome inside.</h2>
          <p style="margin:0 0 16px; color:#6B7280;">
            Your membership details are ready.
          </p>
          <a href="https://fbo-membership.vercel.app"
             style="display:inline-block;padding:12px 20px;background:#E7C9C9;color:#111111;text-decoration:none;border-radius:10px;">
             Enter Membership
          </a>
          <p style="margin:20px 0 8px; color:#6B7280;">Use your 40% off code:</p>
          <div style="font-size:20px; font-weight:700; color:#111111;">FBO40</div>
        </div>
      `,
    });

    console.log("USER SEND RESULT:", JSON.stringify(userSend, null, 2));

    if (userSend.error) {
      console.error("USER SEND ERROR:", JSON.stringify(userSend.error, null, 2));
      return Response.json(
        { error: userSend.error.message || "Resend failed sending to user" },
        { status: 500 }
      );
    }

    const teamSend = await resend.emails.send({
      from,
      to: teamEmail,
      subject: "New FBO membership signup",
      html: `<p>New signup: ${email}</p>`,
    });

    console.log("TEAM SEND RESULT:", JSON.stringify(teamSend, null, 2));

    if (teamSend.error) {
      console.error("TEAM SEND ERROR:", JSON.stringify(teamSend.error, null, 2));
    }

    return Response.json({ success: true, id: userSend.data?.id ?? null }, { status: 200 });
  } catch (error: any) {
    console.error("WAITLIST ROUTE ERROR:", error);
    return Response.json(
      { error: error?.message || "Unexpected server error" },
      { status: 500 }
    );
  }
}
