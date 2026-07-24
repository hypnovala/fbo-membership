"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type TierChoice = "foundations" | "immersion";

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

export default function HomePage() {
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
        <span className="font-playfair text-[16px] text-amber">
          Brock<em className="italic text-gold">John</em>
        </span>
        <a
          href="#signup"
          className="bg-brown text-cream px-5 py-2.5 rounded-lg text-[11px] tracking-[0.18em] uppercase font-medium hover:opacity-85 transition-opacity"
        >
          Sign Up Now
        </a>
      </nav>

      {/* Course preview hero */}
      <section className="bg-soft px-6 py-14 border-b border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3">FBO Course</p>
          <h2 className="font-playfair text-[clamp(24px,4vw,32px)] font-bold text-brown leading-[1.15] mb-3">
            Start With The <em className="italic text-amber">35-Minute FBO Course</em>
          </h2>
          <p className="text-[14px] leading-[1.8] text-[rgba(107,76,42,0.75)] mb-6">
            A short guided preview of the course experience — free, before you go deeper into membership.
          </p>

          <div className="relative overflow-hidden rounded-2xl border border-[rgba(201,169,110,0.35)] bg-brown aspect-video mb-5">
            <Image
              src="/images/fbo-course-preview.jpg"
              alt="FBO course preview"
              fill
              className="object-cover opacity-90"
              sizes="(min-width: 1024px) 896px, 100vw"
              priority
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(201,169,110,0.18), transparent 70%)" }}
            />
            <span className="absolute top-3.5 left-3.5 text-[10px] tracking-[0.2em] uppercase text-brown bg-[#E4D2A8] px-3 py-1.5 rounded-full font-medium">
              Course Preview
            </span>
          </div>

          <a
            href="https://fbo-35min-course.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.1em] uppercase text-amber underline"
          >
            Preview the course →
          </a>
        </div>
      </section>

      {/* Membership hero */}
      <section className="bg-warm px-6 pt-14 pb-10 text-center relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[340px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(201,169,110,0.1) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3">Private Membership</p>
          <h1 className="font-playfair text-[clamp(32px,6vw,52px)] font-bold text-brown leading-[1.08] mb-5">
            Membership Details <em className="italic text-amber">+ 40% Off Your First Month</em>
          </h1>
          <p className="font-cormorant text-[18px] italic text-amber leading-[1.6] max-w-md mx-auto opacity-90 mb-8">
            A guided somatic experience designed to help you slow down, reconnect to your body, and feel more
            grounded, present, and alive.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#signup"
              className="bg-brown text-cream px-6 py-3.5 rounded-lg text-[12px] font-medium tracking-[0.18em] uppercase hover:opacity-85 transition-opacity"
            >
              Sign Up Now
            </a>
          </div>
          <p className="text-[12px] text-[rgba(107,76,42,0.55)] mt-5">
            Submit your email to receive membership information + your 40% off coupon.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-soft px-6 py-14 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-playfair text-[clamp(24px,4vw,32px)] font-bold text-brown leading-[1.15] mb-4">
            You&apos;re carrying more than you realize.
          </h2>
          <p className="text-[14px] leading-[1.8] text-[rgba(107,76,42,0.75)] mb-2">
            Long days. Constant output. Always needed. Always &ldquo;on.&rdquo;
          </p>
          <p className="text-[14px] leading-[1.8] text-[rgba(107,76,42,0.75)] mb-2">
            Your body holds tension long after your work ends. And even when you rest&hellip; your nervous system
            doesn&apos;t.
          </p>
          <p className="font-cormorant text-[19px] italic text-amber leading-[1.6] mt-4">
            This isn&apos;t burnout. It&apos;s disconnection from your body.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-warm px-6 py-14 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-playfair text-[clamp(24px,4vw,32px)] font-bold text-brown leading-[1.15] mb-4">
            This is where you come back <em className="italic text-amber">to yourself.</em>
          </h2>
          <p className="text-[14px] leading-[1.8] text-[rgba(107,76,42,0.75)] max-w-md mx-auto">
            The membership is a private, guided space where you learn how to slow your nervous system, feel your
            body again, expand your capacity for pleasure, calm, and presence, and reconnect to your feminine
            energy — without pressure or performance.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-soft px-6 py-14 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3 text-center">
            Choose Your Level Of Support
          </p>
          <h2 className="font-playfair text-[clamp(24px,4vw,34px)] font-bold text-brown leading-[1.15] mb-3 text-center">
            Two Ways To Begin
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
              <ul className="flex flex-col gap-2 mb-4">
                {tierOneIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13.5px] leading-[1.6] text-[#43321d]">
                    <span className="text-amber flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className="block text-center py-3 rounded-lg border-[1.5px] border-brown text-brown text-[11.5px] font-medium tracking-[0.16em] uppercase hover:bg-brown hover:text-cream transition-colors mb-2"
              >
                Sign Up Now
              </a>
              <a
                href="https://fbo-35min-course.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="block text-center text-[11px] tracking-[0.1em] uppercase text-[rgba(107,76,42,0.55)] underline"
              >
                Preview the course first
              </a>
            </div>

            {/* Tier 2 */}
            <div className="bg-brown rounded-2xl p-6 relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(70% 90% at 90% 0%, rgba(201,169,110,.22), transparent 60%)" }}
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
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13.5px] leading-[1.6] text-[rgba(245,238,216,0.85)]"
                    >
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11.5px] text-[rgba(245,238,216,0.45)] mb-4">
                  $89/month if you&apos;re also booking bodywork sessions separately.
                </p>
                <a
                  href="#signup"
                  className="block text-center py-3 rounded-lg bg-gold text-brown text-[11.5px] font-semibold tracking-[0.16em] uppercase hover:opacity-88 transition-opacity"
                >
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership benefits — deliberate break from the site's quiet theme:
          bold sans-serif, large type, plain white background, direct sales voice.
          Everything above and below this section stays in the established brand. */}
      <section className="bg-white px-6 py-20 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-2xl mx-auto">
          <p className="text-[12px] tracking-[0.3em] uppercase text-brown font-bold mb-4">Why Members Stay</p>
          <h2 className="font-jost text-[clamp(34px,7vw,58px)] font-black text-brown leading-[1.05] mb-5">
            Everything Your Membership Actually Gives You.
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#3a2a16] mb-14 max-w-xl">
            Not just a course. A complete system built to keep working for you, month after month.
          </p>

          <div className="flex flex-col gap-11">
            {[
              {
                title: "Come home to your body, on your own schedule.",
                body: "No commute, no waiting room. Your entire practice lives in your pocket, ready the moment you have five quiet minutes.",
              },
              {
                title: "Feel supported, not just informed.",
                body: "This isn't a course you finish alone. Brock is in your corner every month, guiding you as your body actually responds.",
              },
              {
                title: "Never wonder what to do next.",
                body: "Return to Her tells you exactly which practice fits tonight, so you spend your time feeling instead of figuring it out.",
              },
              {
                title: "Watch your own progress, in your own words.",
                body: "Every practice you complete becomes part of your private timeline — real proof, over weeks, that something is shifting.",
              },
              {
                title: "Go as deep as you're ready for, tonight.",
                body: "Every practice offers a gentler option and a deeper one. You choose, every single time, with zero pressure either way.",
              },
              {
                title: "Get real answers, not generic advice.",
                body: "Your Somatic Check-In App keeps a running pulse on your nervous system, so you always know where you actually stand.",
              },
              {
                title: "Build something that compounds.",
                body: "Each month unlocks another module — a full seven-part journey that keeps deepening instead of ending after one session.",
              },
              {
                title: "Save $59 the moment you join.",
                body: "Your first month includes the entire FBO Course at no extra cost — a full introduction to the method, included, not upsold.",
              },
            ].map((b, i) => (
              <div key={b.title} className="flex gap-5 items-start">
                <span className="font-jost text-[38px] font-black text-gold leading-none flex-shrink-0 w-14">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[23px] sm:text-[26px] font-black text-brown leading-tight mb-2">{b.title}</h3>
                  <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[#3a2a16]">{b.body}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#signup"
            className="mt-14 inline-flex bg-brown text-cream px-8 py-4 rounded-lg text-[13px] font-bold tracking-[0.18em] uppercase hover:opacity-88 transition-opacity"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* You've adapted so well */}
      <section className="bg-soft px-6 py-14 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-playfair text-[clamp(24px,4vw,32px)] font-bold text-brown leading-[1.15] mb-4">
            You&apos;ve adapted so well, you stopped noticing.
          </h2>
          <p className="text-[14px] leading-[1.8] text-[rgba(107,76,42,0.75)] mb-2">
            Being &ldquo;fine&rdquo; becomes its own skill. You learn to function through exhaustion, to keep
            giving when there&apos;s nothing left, to sound okay long after you stopped feeling it.
          </p>
          <p className="text-[14px] leading-[1.8] text-[rgba(107,76,42,0.75)] mb-2">
            But competence isn&apos;t the same as being well. Somewhere underneath it, your body is still
            waiting to be asked how it&apos;s actually doing.
          </p>
          <p className="font-cormorant text-[19px] italic text-amber leading-[1.6] mt-4">
            You don&apos;t have to keep proving you can handle it.
          </p>
        </div>
      </section>

      {/* Quote + permission to rest */}
      <section className="bg-warm px-6 py-16 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-cormorant text-[22px] sm:text-[25px] italic text-amber leading-[1.65] mb-5">
            &ldquo;Our body and mind have the capacity to heal themselves if we allow them to rest. Stopping,
            calming, and resting are preconditions for healing.&rdquo;
          </p>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[rgba(107,76,42,0.5)] mb-9">
            — Thich Nhat Hanh
          </p>
          <p className="text-[14px] leading-[1.8] text-[rgba(107,76,42,0.75)] max-w-md mx-auto">
            This membership exists to give you exactly that: permission to stop, a structure that makes rest
            possible, and a guide who understands that real healing happens in stillness — not in one more
            thing to accomplish.
          </p>
        </div>
      </section>

      {/* Email capture */}
      <section id="signup" className="bg-brown px-6 py-20 text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.07)" }}
        />
        <div className="relative z-10 max-w-sm mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[rgba(201,169,110,0.5)] mb-4">Explore The Membership</p>
          <h2 className="font-playfair text-[clamp(26px,4.5vw,36px)] font-bold text-cream leading-[1.1] mb-3">
            Get Your Welcome Package
          </h2>
          <p className="font-cormorant text-[17px] italic text-[rgba(245,238,216,0.6)] mb-7 leading-[1.6]">
            Submit your email and get your 40% off code, next steps, and payment link — no card needed yet.
          </p>

          <div className="bg-[rgba(245,238,216,0.06)] border border-[rgba(201,169,110,0.25)] rounded-2xl p-6 text-left">
            <p className="text-[10px] tracking-[0.15em] uppercase text-[rgba(201,169,110,0.6)] font-medium mb-2">
              Which path fits you?
            </p>
            <div className="flex gap-2 mb-5">
              <button
                type="button"
                onClick={() => setTier("foundations")}
                className={
                  "flex-1 text-center py-2.5 rounded-lg border-[1.5px] text-[12px] font-medium transition-colors " +
                  (tier === "foundations"
                    ? "border-gold bg-gold text-brown"
                    : "border-[rgba(245,238,216,0.25)] text-[rgba(245,238,216,0.6)]")
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
                    ? "border-gold bg-gold text-brown"
                    : "border-[rgba(245,238,216,0.25)] text-[rgba(245,238,216,0.6)]")
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
                className="w-full rounded-lg border border-[rgba(245,238,216,0.25)] bg-[rgba(245,238,216,0.08)] px-4 py-3 text-[13px] text-cream placeholder:text-[rgba(245,238,216,0.4)] focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gold text-brown rounded-lg font-jost text-[11.5px] font-semibold tracking-[0.15em] uppercase hover:opacity-88 transition-opacity disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Sign Up Now"}
              </button>
            </form>

            {isSuccess && (
              <p className="mt-3 text-[13px] text-[rgba(201,169,110,0.9)]">Check your email for your welcome package.</p>
            )}
            {error && <p className="mt-3 text-[13px] text-rose-300">{error}</p>}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link
              href="/membership-details"
              className="text-[11px] tracking-[0.1em] uppercase text-[rgba(201,169,110,0.6)] underline"
            >
              Full membership details →
            </Link>
          </div>
          <p className="mt-4 text-[11px] text-[rgba(245,238,216,0.35)]">Includes your 40% off first month coupon.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown border-t border-[rgba(201,169,110,0.12)] px-6 py-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-2 text-center">
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
