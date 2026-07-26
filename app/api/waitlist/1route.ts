import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getConfirmationEmailHtml(subject: string) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${subject}</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4ede9;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f4ede9; margin:0; padding:0;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px; background-color:#ffffff; border-radius:18px; overflow:hidden;">
            <tr>
              <td style="background:linear-gradient(135deg, #f1ded6 0%, #f6e7e1 100%); padding:40px 32px; text-align:center;">
                <div style="font-family:Georgia, 'Times New Roman', serif; font-size:32px; line-height:1.2; color:#2a2a2a; font-weight:700; margin:0 0 10px;">
                  Welcome to FBO
                </div>
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:1.6; color:#7a645c; margin:0;">
                  A slower, deeper relationship with your body.
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:36px 32px 8px 32px; font-family:Arial, Helvetica, sans-serif; color:#2a2a2a;">
                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">Hi,</p>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  You’re officially inside.
                </p>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  Before anything else, take one slow breath in… and a longer breath out.
                </p>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  That small shift matters. It’s often the first signal your body receives that it can begin to soften.
                </p>

                <div style="background-color:#fbf5f1; border-left:4px solid #d4b1a2; padding:18px 18px; border-radius:10px; margin:24px 0;">
                  <p style="margin:0; font-size:18px; line-height:1.7; color:#7a645c; font-weight:700;">
                    Your body isn’t numb.
                  </p>
                  <p style="margin:8px 0 0; font-size:16px; line-height:1.7; color:#2a2a2a;">
                    It’s been moving fast, holding tension, and protecting you for too long.
                  </p>
                </div>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  If you’ve been rushing through sensation, disconnected from your body, or feeling like something is missing…
                </p>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  this is where that begins to shift.
                </p>

                <h2 style="margin:30px 0 12px; font-size:24px; line-height:1.3; color:#7a645c; font-family:Georgia, 'Times New Roman', serif;">
                  What this experience helps you do
                </h2>

                <ul style="margin:0 0 24px 20px; padding:0; color:#2a2a2a; font-size:16px; line-height:1.8;">
                  <li>feel more sensation without forcing it</li>
                  <li>slow down and expand your awareness</li>
                  <li>shift from performance into presence</li>
                  <li>reconnect to your body in a deeper way</li>
                </ul>

                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 28px auto;">
                  <tr>
                    <td align="center" bgcolor="#2a2a2a" style="border-radius:999px;">
                      <a
                        href="https://fbo-35min-course.vercel.app"
                        style="display:inline-block; padding:15px 28px; font-size:16px; font-family:Arial, Helvetica, sans-serif; color:#ffffff; text-decoration:none; font-weight:700;"
                      >
                        Read the Guide
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="background-color:#fbf5f1; border-radius:14px; padding:22px; margin:0 0 28px;">
                  <h3 style="margin:0 0 12px; font-size:20px; line-height:1.3; color:#7a645c; font-family:Georgia, 'Times New Roman', serif;">
                    Try this now
                  </h3>
                  <p style="margin:0 0 10px; font-size:16px; line-height:1.7;">
                    Inhale slowly through your nose.
                  </p>
                  <p style="margin:0 0 10px; font-size:16px; line-height:1.7;">
                    Let your body soften instead of lift.
                  </p>
                  <p style="margin:0; font-size:16px; line-height:1.7;">
                    Exhale slowly… and notice where your body releases.
                  </p>
                </div>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  There’s nothing to rush here.
                </p>

                <p style="margin:0 0 8px; font-size:16px; line-height:1.7;">
                  — Brock
                </p>
                <p style="margin:0 0 30px; font-size:15px; line-height:1.7; color:#8a7b75;">
                  FBO
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 32px 36px 32px; border-top:1px solid #eee4de; text-align:center; font-family:Arial, Helvetica, sans-serif; color:#9b8e88; font-size:12px; line-height:1.7;">
                FBO • hello@brockjohn.com
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
    const subject = "You’re in. Your experience starts here.";

    const userSend = await resend.emails.send({
      from,
      to: email,
      subject,
      html: getConfirmationEmailHtml(subject),
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
