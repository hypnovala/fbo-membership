import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getConfirmationEmailHtml(fromEmail: string) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Membership Access</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f7f4f2; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f7f4f2; margin:0; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px; background:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 8px 30px rgba(17,24,39,0.08);">
            <tr>
              <td style="padding:48px 40px 24px 40px; text-align:center; background:linear-gradient(180deg, #fffaf8 0%, #ffffff 100%);">
                <div style="font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#9ca3af; margin-bottom:14px;">
                  FBO
                </div>
                <h1 style="margin:0; font-size:32px; line-height:1.2; font-weight:700; color:#111827;">
                  Welcome inside.
                </h1>
                <p style="margin:16px 0 0 0; font-size:16px; line-height:1.7; color:#6b7280;">
                  Your membership details are confirmed and your offer is ready below.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 40px 0 40px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#fcfcfc; border:1px solid #ece7e4; border-radius:20px;">
                  <tr>
                    <td style="padding:28px;">
                      <h2 style="margin:0 0 10px 0; font-size:20px; line-height:1.3; color:#111827;">
                        Your 40% off code
                      </h2>
                      <p style="margin:0 0 18px 0; font-size:15px; line-height:1.7; color:#6b7280;">
                        Use this code at checkout:
                      </p>
                      <div style="display:inline-block; padding:14px 20px; border-radius:14px; background:#f8f5f3; border:1px solid #ece7e4; font-size:24px; font-weight:700; letter-spacing:1px; color:#111827;">
                        FBO40
                      </div>
                      <div style="padding-top:24px;">
                        <a href="https://fbo-membership.vercel.app"
                           style="display:inline-block; background:#e7c9c9; color:#111111; text-decoration:none; font-size:15px; font-weight:600; padding:14px 26px; border-radius:999px;">
                          Enter Membership
                        </a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 40px 0 40px;">
                <p style="margin:0; font-size:15px; line-height:1.8; color:#4b5563;">
                  Thank you for joining. We’re excited to have you here.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 40px 40px 40px;">
                <div style="height:1px; background:#f0ece9; margin-bottom:24px;"></div>
                <p style="margin:0 0 8px 0; font-size:14px; line-height:1.6; color:#9ca3af;">
                  Sent by FBO &lt;${fromEmail}&gt;
                </p>
                <p style="margin:0; font-size:13px; line-height:1.6; color:#b0b7c3;">
                  If you did not request this, you can safely ignore this email.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
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
      html: getConfirmationEmailHtml(from),
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
