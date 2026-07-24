"use client";

import { FormEvent, useState } from "react";

type TierChoice = "foundations" | "immersion";

const bundleIncludes = [
  {
    title: "The FBO Course",
    body: "Starting at your recommended module ($59 value), unfolding module by module.",
  },
  {
    title: "Return to Her",
    body: "Your private practice companion, matched to what you shared.",
  },
  {
    title: "Somatic Check-In App",
    body: "A running check-in with your own nervous system, anytime.",
  },
  {
    title: "Monthly Group Call With Brock",
    body: "A live space to ask questions and be guided in real time.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Your private intake",
    body: "Five minutes, once — completely private on your device.",
  },
  {
    step: "02",
    title: "Your matched practice",
    body: "A grounding practice and a deepening one — you choose what fits.",
  },
  {
    step: "03",
    title: "Your evolving record",
    body: "A few words after each practice becomes your own timeline.",
  },
  {
    step: "04",
    title: "Your course, module by module",
    body: "Unlocking at your pace — never a countdown.",
  },
];

const tierOneIncludes = [
  "Full FBO Course access ($59 value) included",
  "Return to Her — your private practice app",
  "Guided somatic reset practices",
  "Nervous system education",
  "Brock Somatic Check-In App access",
  "Monthly reset audio & video sessions",
  "One monthly call with Brock",
];

const tierTwoIncludes = [
  "Weekly 1:1 calls with Brock",
  "Everything in Somatic Foundations",
  "Personalized nervous system support",
  "Ongoing guidance for regulation & awareness",
];

export default function MembershipDetailsPage() {
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState<TierChoice>("foundations");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, tier }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-warm font-jost">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-warm border-b border-[rgba(201,169,110,0.2)] px-6 h-16 flex items-center justify-between">
        <a href="https://course.brockjohn.com/" className="font-playfair text-[16px] text-amber">
          Brock<em className="italic text-gold">John</em>
        </a>
        <a
          href="#signup"
          className="bg-brown text-cream px-5 py-2.5 rounded-lg text-[11px] tracking-[0.18em] uppercase font-medium hover:opacity-85 transition-opacity"
        >
          Sign Up Now
        </a>
      </nav>

      {/* Hero */}
      <section className="bg-warm px-6 pt-14 pb-10 text-center relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[340px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(201,169,110,0.1) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3">Membership Details</p>
          <h1 className="font-playfair text-[clamp(32px,6vw,52px)] font-bold text-brown leading-[1.08] mb-5">
            Your Nervous System <em className="italic text-amber">Reset Starts Here.</em>
          </h1>
          <p className="font-cormorant text-[18px] italic text-amber leading-[1.6] max-w-md mx-auto opacity-90">
            A private membership designed to help you regulate, reconnect, and expand your capacity to feel.
          </p>
          <a
            href="https://course.brockjohn.com/"
            className="inline-block mt-8 w-full max-w-xs py-3 border border-[rgba(107,76,42,0.22)] text-brown rounded-xl font-jost text-[12px] font-medium tracking-[0.2em] uppercase hover:bg-[rgba(201,169,110,0.08)] transition-colors text-center"
          >
            Return to Course
          </a>
        </div>
      </section>

      {/* Not a course, a coming home */}
      <section className="bg-soft px-6 py-12 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-playfair text-[24px] font-bold text-brown leading-[1.15] mb-3">
            This isn&apos;t a course. It&apos;s a <em className="italic text-amber">coming home.</em>
          </h2>
          <p className="text-[14px] leading-[1.8] text-[rgba(107,76,42,0.75)]">
            To your body. To sensation. To yourself. One guided session at a time.
          </p>
        </div>
      </section>

      {/* Built From Your Answers — personalized bundle */}
      <section className="bg-warm px-6 py-14 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3">Built From Your Answers</p>
          <h2 className="font-playfair text-[clamp(24px,4vw,34px)] font-bold text-brown leading-[1.15] mb-4">
            Your Own <em className="italic text-amber">Personalized Bundle</em>
          </h2>
          <p className="text-[14px] leading-[1.8] text-[rgba(107,76,42,0.75)] mb-8 max-w-md">
            Your quiz answers already pointed to where your body wants to begin. Everything below arrives shaped
            around that starting point — included together, from day one.
          </p>

          <div className="bg-white border border-[rgba(201,169,110,0.25)] rounded-2xl p-6 mb-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-4">Included In Your Bundle</p>
            <div className="flex flex-col gap-4">
              {bundleIncludes.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[rgba(201,169,110,0.15)] flex items-center justify-center flex-shrink-0 text-amber text-[12px] font-bold">
                    ✦
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-brown leading-snug">{item.title}</p>
                    <p className="text-[12.5px] text-[rgba(107,76,42,0.65)] leading-[1.6]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The more you return */}
          <div className="bg-brown rounded-2xl p-6 relative overflow-hidden">
            <div
              className="absolute -right-10 -top-10 w-32 h-32 rounded-full pointer-events-none"
              style={{ border: "1px solid rgba(201,169,110,0.15)" }}
            />
            <p className="text-[10px] tracking-[0.2em] uppercase text-[rgba(201,169,110,0.6)] font-medium mb-2 relative z-10">
              The More You Return
            </p>
            <p className="font-playfair text-[17px] font-bold text-cream leading-snug mb-2 relative z-10">
              The clearer your next step becomes.
            </p>
            <p className="text-[13px] leading-[1.7] text-[rgba(245,238,216,0.75)] relative z-10">
              As your practice deepens, you may find yourself ready for closer support — weekly 1:1 calls and
              hands-on bodywork with Brock. That path opens naturally, whenever you are.
            </p>
          </div>
        </div>
      </section>

      {/* How Return to Her works — matches the bold white treatment used on the home page */}
      <section className="bg-white px-6 py-20 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-2xl mx-auto">
          <p className="text-[12px] tracking-[0.3em] uppercase text-brown font-bold mb-4">How Your Membership Works</p>
          <h2 className="font-jost text-[clamp(32px,6vw,50px)] font-black text-brown leading-[1.05] mb-5">
            Delivered Through &apos;Return to Her&apos; app by Brok John
          </h2>
          <p className="text-[17px] leading-[1.6] text-[#3a2a16] mb-12 max-w-xl">
            One private companion app, four simple steps, built to meet you exactly where you are each time you
            return.
          </p>
          <div className="flex flex-col gap-10">
            {howItWorks.map((s) => (
              <div key={s.step} className="flex gap-5 items-start">
                <span className="font-jost text-[38px] font-black text-gold leading-none flex-shrink-0">
                  {`Step ${s.step}`}
                </span>
                <div>
                  <h3 className="text-[22px] sm:text-[25px] font-black text-brown leading-tight mb-2">{s.title}</h3>
                  <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[#3a2a16]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* This is for you if */}
      <section className="bg-warm px-6 py-14 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3">Is This You?</p>
          <h2 className="font-playfair text-[clamp(22px,4vw,30px)] font-bold text-brown leading-[1.15] mb-6">
            This Is For You If<em className="italic text-amber">&hellip;</em>
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              "You feel constantly \u201con\u201d or overstimulated",
              "You struggle to relax even when you try",
              "You want to feel more connected to your body",
              "You\u2019re ready for a softer, more grounded way of living",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brown text-cream font-playfair text-[12px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-[14px] leading-[1.7] text-[#43321d]">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="bg-soft px-6 py-14 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3 text-center">Membership</p>
          <h2 className="font-playfair text-[clamp(24px,4vw,34px)] font-bold text-brown leading-[1.15] mb-3 text-center">
            Choose Your Path
          </h2>
          <p className="text-[13px] text-center text-[rgba(107,76,42,0.7)] mb-8 max-w-md mx-auto">
            Every tier includes full FBO Course access and unlocks private Houston bodywork sessions, booked
            separately.
          </p>

          <div className="flex flex-col gap-5">
            {/* Tier 1 */}
            <div className="bg-white border-[1.5px] border-gold rounded-2xl p-6">
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-1">Somatic Foundations</p>
              <p className="font-playfair text-[24px] font-bold text-brown mb-1">
                $39<span className="text-[13px] font-normal text-amber"> / month</span>
              </p>
              <p className="text-[13px] text-[rgba(107,76,42,0.75)] mb-4">
                A foundational digital nervous system reset for women learning to regulate, reconnect, and build
                awareness in their body.
              </p>
              <ul className="flex flex-col gap-2 mb-2">
                {tierOneIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13.5px] leading-[1.6] text-[#43321d]">
                    <span className="text-amber flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://fbo-35min-course.vercel.app/"
                className="text-[11px] tracking-[0.1em] uppercase text-[rgba(107,76,42,0.55)] underline"
              >
                Preview the course first
              </a>
            </div>

            {/* Tier 2 */}
            <div className="bg-brown rounded-2xl p-6 relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(70% 90% at 90% 0%, rgba(201,169,110,.22), transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[rgba(201,169,110,0.6)] font-medium mb-1">
                  Full Body Immersion
                </p>
                <p className="font-playfair text-[24px] font-bold text-cream mb-1">
                  $149<span className="text-[13px] font-normal text-[rgba(245,238,216,0.55)]"> / month</span>
                </p>
                <p className="text-[13px] text-[rgba(245,238,216,0.65)] mb-4">
                  A higher-touch coaching experience with consistent weekly support and guidance.
                </p>
                <ul className="flex flex-col gap-2 mb-4">
                  {tierTwoIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13.5px] leading-[1.6] text-[rgba(245,238,216,0.85)]">
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11.5px] text-[rgba(245,238,216,0.45)]">
                  $89/month if you&apos;re also booking bodywork sessions separately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email capture — Sign Up Now */}
      <section id="signup" className="bg-warm px-6 py-16 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-md mx-auto bg-white border border-[rgba(201,169,110,0.3)] rounded-2xl p-7 shadow-[0_18px_50px_-28px_rgba(46,31,14,0.45)]">
          <h2 className="font-playfair text-[22px] font-bold text-brown mb-2">Get Your Welcome Package</h2>
          <p className="text-[13px] leading-[1.7] text-[rgba(107,76,42,0.7)] mb-5">
            We&apos;ll email your coupon, next steps, and your payment link — no card needed yet.
          </p>

          <p className="text-[10px] tracking-[0.15em] uppercase text-gold font-medium mb-2">Which path fits you?</p>
          <div className="flex gap-2 mb-5">
            <button
              type="button"
              onClick={() => setTier("foundations")}
              className={
                "flex-1 text-center py-2.5 rounded-lg border-[1.5px] text-[12px] font-medium transition-colors " +
                (tier === "foundations"
                  ? "border-brown bg-brown text-cream"
                  : "border-[rgba(201,169,110,0.4)] text-[rgba(107,76,42,0.7)]")
              }
            >
              Somatic Foundations
            </button>
            <button
              type="button"
              onClick={() => setTier("immersion")}
              className={
                "flex-1 text-center py-2.5 rounded-lg border-[1.5px] text-[12px] font-medium transition-colors " +
                (tier === "immersion"
                  ? "border-brown bg-brown text-cream"
                  : "border-[rgba(201,169,110,0.4)] text-[rgba(107,76,42,0.7)]")
              }
            >
              Full Body Immersion
            </button>
          </div>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@email.com"
              required
              className="w-full rounded-lg border border-[rgba(201,169,110,0.4)] bg-white px-4 py-3 text-[13px] text-brown placeholder:text-[rgba(107,76,42,0.4)] focus:border-brown focus:outline-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-brown text-cream rounded-lg font-jost text-[11.5px] font-medium tracking-[0.15em] uppercase hover:opacity-85 transition-opacity disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Sign Up Now"}
            </button>
          </form>

          {isSuccess && (
            <p className="mt-3 text-[13px] text-amber">Check your email for your welcome package.</p>
          )}
          {error && <p className="mt-3 text-[13px] text-red-700">{error}</p>}

          <p className="mt-4 text-[11px] text-[rgba(107,76,42,0.5)] text-center leading-[1.5]">
            Your coupon and payment link arrive by email — begin whenever you&apos;re ready.
          </p>
        </div>
      </section>

      {/* Take your time */}
      <section className="bg-brown px-6 py-16 text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.1)" }}
        />
        <div className="relative z-10 max-w-sm mx-auto">
          <h2 className="font-playfair text-[clamp(26px,4.5vw,36px)] font-bold text-cream leading-[1.1] mb-3">
            Take your time.
          </h2>
          <p className="font-cormorant text-[17px] italic text-[rgba(245,238,216,0.6)] leading-[1.6]">
            There&apos;s nothing to rush. This is about learning how to slow down &amp; feel again.
          </p>
          <a
            href="https://course.brockjohn.com/"
            className="inline-block mt-8 w-full py-[15px] border border-[rgba(201,169,110,0.35)] text-cream rounded-xl font-jost text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-[rgba(201,169,110,0.08)] transition-colors"
          >
            Return to Course
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown border-t border-[rgba(201,169,110,0.12)] px-6 py-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-playfair text-[14px] italic text-[rgba(201,169,110,0.4)]">
            Brock John · Somatic Sex Education
          </span>
          <a
            href="mailto:contact@brockjohn.com"
            className="text-[11px] tracking-[0.08em] uppercase text-[rgba(245,238,216,0.4)] hover:text-[rgba(245,238,216,0.6)] transition-colors"
          >
            contact@brockjohn.com
          </a>
        </div>
      </footer>
    </main>
  );
}
