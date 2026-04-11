export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const apiKey = process.env.RESEND_API_KEY;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email required" }), { status: 400 });
    }

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Email service unavailable" }), { status: 500 });
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FBO <hello@brockjohn.com>",
        to: email,
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

    if (!resendResponse.ok) {
      throw new Error("Email request failed");
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Resend email failed:", error);
    return new Response(JSON.stringify({ error: "Email failed" }), { status: 500 });
  }
}
