import { Resend } from "resend";

type TierChoice = "foundations" | "immersion";

const TIER_LABELS: Record<TierChoice, string> = {
  foundations: "Somatic Foundations",
  immersion: "Full Body Immersion",
};

// TODO: replace once the real Stripe checkout link is ready.
const PAYMENT_LINK = "PASTE_PAYMENT_LINK_HERE";
const COUPON_CODE = "40OFFBROCK";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeTier(value: unknown): TierChoice {
  return value === "immersion" ? "immersion" : "foundations";
}

function getConfirmationEmailHtml(subject: string, tierLabel: string, name: string) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${subject}</title>
  </head>
  <body style="margin:0; padding:0; background-color:#F5EED8;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#F5EED8; margin:0; padding:0;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px; background-color:#ffffff; border-radius:18px; overflow:hidden;">

            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg, #EFE6CC 0%, #F5EED8 100%); padding:40px 32px; text-align:center; border-bottom:1px solid rgba(201,169,110,0.3);">
                <div style="font-family:Georgia, 'Times New Roman', serif; font-size:32px; line-height:1.2; color:#2E1F0E; font-weight:700; margin:0 0 10px;">
                  Welcome to <em style="font-style:italic; color:#6B4C2A;">FBO</em>
                </div>
                <div style="font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.6; color:#6B4C2A; margin:0;">
                  A slower, deeper relationship with your body.
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:36px 32px 8px 32px; font-family:Arial, Helvetica, sans-serif; color:#2E1F0E;">
                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">Hi ${name},</p>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  You&rsquo;re officially inside.
                </p>

                <!-- Tier confirmation -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 22px;">
                  <tr>
                    <td style="background-color:#F5EED8; border:1px solid rgba(201,169,110,0.4); border-radius:10px; padding:14px 18px;">
                      <p style="margin:0; font-size:13px; line-height:1.6; color:#6B4C2A; font-family:Arial, Helvetica, sans-serif;">
                        You selected: <strong style="color:#2E1F0E;">${tierLabel}</strong>
                      </p>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  Before anything else, take one slow breath in&hellip; and a longer breath out.
                </p>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  That small shift matters. It&rsquo;s often the first signal your body receives that it can begin to soften.
                </p>

                <div style="background-color:#F5EED8; border-left:4px solid #C9A96E; padding:18px; border-radius:10px; margin:24px 0;">
                  <p style="margin:0; font-size:18px; line-height:1.7; color:#6B4C2A; font-weight:700;">
                    Your body isn&rsquo;t numb.
                  </p>
                  <p style="margin:8px 0 0; font-size:16px; line-height:1.7; color:#2E1F0E;">
                    It&rsquo;s been moving fast, holding tension, and protecting you for too long.
                  </p>
                </div>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  If you&rsquo;ve been rushing through sensation, disconnected from your body, or feeling like something is missing&hellip;
                </p>

                <p style="margin:0 0 24px; font-size:16px; line-height:1.7;">
                  this is where that begins to shift.
                </p>

                <!-- Getting started steps — bold, white background, large print -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 30px; background-color:#ffffff;">
                  <tr>
                    <td style="padding:8px 0 4px;">
                      <p style="margin:0 0 4px; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:#2E1F0E; font-weight:700; font-family:Arial, Helvetica, sans-serif;">
                        Your First Week
                      </p>
                      <h2 style="margin:0 0 20px; font-size:26px; line-height:1.2; color:#2E1F0E; font-weight:900; font-family:Arial, Helvetica, sans-serif;">
                        Here&rsquo;s Exactly What Happens Next.
                      </h2>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0; border-top:1px solid rgba(201,169,110,0.25);">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td width="44" valign="top" style="font-size:26px; font-weight:900; color:#C9A96E; font-family:Arial, Helvetica, sans-serif;">01</td>
                          <td style="font-size:19px; font-weight:700; color:#2E1F0E; line-height:1.4; font-family:Arial, Helvetica, sans-serif;">Pay for your monthly membership at MassageBook.com</td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0; border-top:1px solid rgba(201,169,110,0.25);">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td width="44" valign="top" style="font-size:26px; font-weight:900; color:#C9A96E; font-family:Arial, Helvetica, sans-serif;">02</td>
                          <td style="font-size:19px; font-weight:700; color:#2E1F0E; line-height:1.4; font-family:Arial, Helvetica, sans-serif;">Book your first call with Brock via the calendar link</td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0; border-top:1px solid rgba(201,169,110,0.25);">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td width="44" valign="top" style="font-size:26px; font-weight:900; color:#C9A96E; font-family:Arial, Helvetica, sans-serif;">03</td>
                          <td style="font-size:19px; font-weight:700; color:#2E1F0E; line-height:1.4; font-family:Arial, Helvetica, sans-serif;">Check your email for your Return to Her app link</td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0; border-top:1px solid rgba(201,169,110,0.25);">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td width="44" valign="top" style="font-size:26px; font-weight:900; color:#C9A96E; font-family:Arial, Helvetica, sans-serif;">04</td>
                          <td style="font-size:19px; font-weight:700; color:#2E1F0E; line-height:1.4; font-family:Arial, Helvetica, sans-serif;">All 7 modules are unlocked &mdash; explore whichever calls to you first</td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0; border-top:1px solid rgba(201,169,110,0.25);">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td width="44" valign="top" style="font-size:26px; font-weight:900; color:#C9A96E; font-family:Arial, Helvetica, sans-serif;">05</td>
                          <td style="font-size:19px; font-weight:700; color:#2E1F0E; line-height:1.4; font-family:Arial, Helvetica, sans-serif;">Review each module&rsquo;s attached links and materials</td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0; border-top:1px solid rgba(201,169,110,0.25);">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td width="44" valign="top" style="font-size:26px; font-weight:900; color:#C9A96E; font-family:Arial, Helvetica, sans-serif;">06</td>
                          <td style="font-size:19px; font-weight:700; color:#2E1F0E; line-height:1.4; font-family:Arial, Helvetica, sans-serif;">Do the recommended exercises at your own pace</td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 0 4px; border-top:1px solid rgba(201,169,110,0.25);">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td width="44" valign="top" style="font-size:26px; font-weight:900; color:#C9A96E; font-family:Arial, Helvetica, sans-serif;">07</td>
                          <td style="font-size:19px; font-weight:700; color:#2E1F0E; line-height:1.4; font-family:Arial, Helvetica, sans-serif;">Send Brock any progress, if you&rsquo;d like to share it</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- What's included -->
                <h2 style="margin:0 0 14px; font-size:22px; line-height:1.3; color:#6B4C2A; font-family:Georgia, 'Times New Roman', serif;">
                  What&rsquo;s waiting inside your membership
                </h2>

                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 26px;">
                  <tr>
                    <td style="background-color:#F5EED8; border:1px solid rgba(201,169,110,0.3); border-radius:12px; padding:20px;">
                      <p style="margin:0 0 10px; font-size:15px; line-height:1.6; color:#2E1F0E;">
                        <strong>The FBO Course</strong> &mdash; your recommended module, unfolding at your pace
                      </p>
                      <p style="margin:0 0 10px; font-size:15px; line-height:1.6; color:#2E1F0E;">
                        <strong>Return to Her</strong> &mdash; your private practice companion, matched to what you shared
                      </p>
                      <p style="margin:0 0 10px; font-size:15px; line-height:1.6; color:#2E1F0E;">
                        <strong>Somatic Check-In App</strong> &mdash; a running check-in with your own nervous system
                      </p>
                      <p style="margin:0; font-size:15px; line-height:1.6; color:#2E1F0E;">
                        <strong>Monthly call with Brock</strong> &mdash; real guidance, not just information
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- Coupon -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 26px;">
                  <tr>
                    <td style="background-color:#2E1F0E; border-radius:12px; padding:20px; text-align:center;">
                      <p style="margin:0 0 6px; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(201,169,110,0.7); font-family:Arial, Helvetica, sans-serif;">
                        Your Coupon
                      </p>
                      <p style="margin:0; font-size:22px; font-weight:700; color:#F5EED8; font-family:Georgia, 'Times New Roman', serif; letter-spacing:0.04em;">
                        ${COUPON_CODE}
                      </p>
                      <p style="margin:8px 0 0; font-size:13px; color:rgba(245,238,216,0.6); font-family:Arial, Helvetica, sans-serif;">
                        40% off your first month
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- Primary CTA -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 28px auto;">
                  <tr>
                    <td align="center" bgcolor="#2E1F0E" style="border-radius:999px;">
                      <a
                        href="${PAYMENT_LINK}"
                        style="display:inline-block; padding:16px 32px; font-size:16px; font-family:Arial, Helvetica, sans-serif; color:#F5EED8; text-decoration:none; font-weight:700;"
                      >
                        Enroll Here
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="background-color:#F5EED8; border-radius:14px; padding:22px; margin:0 0 28px;">
                  <h3 style="margin:0 0 12px; font-size:19px; line-height:1.3; color:#6B4C2A; font-family:Georgia, 'Times New Roman', serif;">
                    Try this now
                  </h3>
                  <p style="margin:0 0 10px; font-size:16px; line-height:1.7; color:#2E1F0E;">
                    Inhale slowly through your nose.
                  </p>
                  <p style="margin:0 0 10px; font-size:16px; line-height:1.7; color:#2E1F0E;">
                    Let your body soften instead of lift.
                  </p>
                  <p style="margin:0; font-size:16px; line-height:1.7; color:#2E1F0E;">
                    Exhale slowly&hellip; and notice where your body releases.
                  </p>
                </div>

                <p style="margin:0 0 18px; font-size:16px; line-height:1.7;">
                  There&rsquo;s nothing to rush here.
                </p>

                <p style="margin:0 0 4px; font-size:16px; line-height:1.7;">
                  &mdash; Brock
                </p>
                <p style="margin:0 0 30px; font-size:14px; line-height:1.7; color:#6B4C2A;">
                  FBO &middot; Somatic Sex Education
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 32px 36px 32px; background-color:#F5EED8; border-top:1px solid rgba(201,169,110,0.3); text-align:center; font-family:Arial, Helvetica, sans-serif; color:#6B4C2A; font-size:12px; line-height:1.7;">
                FBO &bull; contact@brockjohn.com
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
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const tier = normalizeTier(body?.tier);
    const tierLabel = TIER_LABELS[tier];

    if (!name) {
      return Response.json({ error: "Please enter your name." }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return Response.json({ error: "Valid email required" }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const subject = "You\u2019re in. Your experience starts here.";

    const userSend = await resend.emails.send({
      from,
      to: email,
      subject,
      html: getConfirmationEmailHtml(subject, tierLabel, name),
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
      html: `<p>New signup: ${name} (${email})</p><p>Interested in: <strong>${tierLabel}</strong></p>`,
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
