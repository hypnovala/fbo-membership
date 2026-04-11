"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const tierOneIncludes = [
  "Full FBO Course access",
  "Guided somatic reset practices",
  "Nervous system education",
  "Brock Somatic Check-In App access",
  "Monthly reset audio/video sessions",
  "1 monthly phone or FaceTime call with Brock",
];

const tierTwoIncludes = [
  "Weekly 1:1 calls with Brock",
  "Everything in Tier 1 (including the FBO Course)",
  "Personalized nervous system support",
  "Ongoing guidance for regulation and awareness practices",
];

export default function MembershipDetailsPage() {
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Email failed");
      }

      setIsSuccess(true);
      setEmail("");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to submit right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#120f10] text-stone-100">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 space-y-14">
        <section className="space-y-5 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-200/80">Membership Details</p>
          <h1 className="text-4xl font-semibold md:text-6xl">Your Nervous System Reset Starts Here</h1>
          <p className="mx-auto max-w-3xl text-lg text-stone-300">
            A private membership designed to help you regulate, reconnect, and expand your capacity to feel.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/bodywork-options"
              className="inline-flex rounded-full border border-amber-200/70 px-6 py-3 font-medium text-amber-100 transition hover:border-amber-100"
            >
              View Bodywork Options
            </Link>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-stone-800 bg-stone-900 p-8">
          <h2 className="text-3xl font-semibold">This isn&apos;t a course. It&apos;s a coming home.</h2>
          <p className="text-stone-300">To your body. To sensation. To yourself.</p>
          <p className="text-stone-300">One guided session at a time.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Membership Options</h2>
          <p className="rounded-2xl border border-rose-200/40 bg-rose-950/30 p-4 text-rose-100">
            All membership tiers include full FBO Course access and unlock access to private Houston bodywork sessions.
            Bodywork is booked separately and not included in monthly pricing.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-stone-800 bg-stone-900 p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Tier 1 — Digital Membership</h3>
              <p className="text-rose-200 text-lg font-medium">$39/month</p>
              <p className="text-stone-300">
                A foundational digital nervous system reset experience for women learning how to regulate, reconnect,
                and build awareness in their body.
              </p>
              <ul className="space-y-2 text-stone-200">
                {tierOneIncludes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <a
                href="https://fbo-35min-course.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-amber-200/70 px-5 py-2.5 text-sm font-medium text-amber-100 transition hover:border-amber-100"
              >
                Preview Course
              </a>
            </article>

            <article className="rounded-3xl border border-rose-300/40 bg-gradient-to-b from-rose-950/30 to-stone-900 p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Tier 2 — Coaching Membership</h3>
              <ul className="space-y-2 text-stone-200">
                <li>• $149/month (no bodywork)</li>
                <li>• $89/month (for members who plan to book bodywork sessions separately)</li>
              </ul>
              <p className="text-stone-300">A higher-touch coaching experience with consistent weekly support and guidance.</p>
              <ul className="space-y-2 text-stone-200">
                {tierTwoIncludes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">This is for you if…</h2>
          <ul className="grid gap-2 text-stone-300">
            <li>• You feel constantly “on” or overstimulated</li>
            <li>• You struggle to relax even when you try</li>
            <li>• You want to feel more connected to your body</li>
            <li>• You’re ready for a softer, more grounded way of living</li>
          </ul>
        </section>

        <section
          id="capture"
          className="mx-auto max-w-3xl space-y-5 rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0_16px_40px_rgba(17,24,39,0.08)]"
        >
          <h2 className="text-3xl font-bold text-[#1F2937]">Get Membership Details + 40% Off</h2>
          <p className="text-[#6B7280]">
            Enter your email below to receive full membership information and your 40% off first month coupon.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              required
              className="w-full rounded-2xl border border-[#D1D5DB] bg-white px-4 py-3 text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827]/10"
            />
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#E7C9C9] px-6 py-3 font-medium text-[#111111] transition hover:bg-[#DDBABA]"
              >
                {isSubmitting ? "Submitting..." : "Join Membership"}
              </button>
              <Link
                href="https://fbo-membership.vercel.app/"
                className="rounded-full border border-[#D1D5DB] bg-transparent px-6 py-3 font-medium text-[#374151] transition hover:bg-[#F9FAFB]"
              >
                Get Membership Details
              </Link>
            </div>
          </form>
          {isSuccess && <p className="text-sm text-[#047857]">Check your email for access + discount</p>}
          {error && <p className="text-sm text-[#B91C1C]">{error}</p>}
          <p className="text-sm text-[#9CA3AF]">You’ll receive your coupon and next steps instantly.</p>
        </section>

        <section className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold">Take your time.</h2>
          <p className="text-stone-300">There’s nothing to rush.</p>
          <p className="text-stone-300">This is about learning how to slow down… and feel again.</p>
        </section>

        <section className="rounded-2xl border border-rose-300/30 p-6 text-center text-rose-100">
          <h3 className="text-2xl font-semibold">Check your email</h3>
          <p>Your membership details and 40% off coupon are on the way.</p>
        </section>
      </div>
    </main>
  );
}
