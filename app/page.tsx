"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const membershipHighlights = {
  tier1: [
    "Full FBO Course access",
    "Guided somatic reset practices",
    "Nervous system education",
    "Brock Somatic Check-In App access",
    "Monthly reset audio/video sessions",
    "1 monthly phone or FaceTime call with Brock",
  ],
  tier2: [
    "Weekly 1:1 calls with Brock",
    "Everything in Tier 1 (including the FBO Course)",
    "Personalized nervous system support",
    "Ongoing guidance for regulation and awareness practices",
  ],
};

export default function HomePage() {
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
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 space-y-16">
        <section className="rounded-3xl border border-amber-300/30 bg-amber-950/20 p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">FBO Course</p>
            <h2 className="text-3xl font-semibold">Start with the 35-Minute FBO Course</h2>
            <p className="text-stone-300">
              Get a quick preview of the course experience before diving deeper into membership options.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-200/30 bg-stone-900/70 aspect-video">
            <Image
              src="/images/fbo-course-preview.jpg"
              alt="FBO course preview"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 896px, 100vw"
              priority
            />
          </div>

          <a
            href="https://fbo-35min-course.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-amber-200 px-6 py-3 font-medium text-stone-900 transition hover:bg-amber-100"
          >
            Course Preview
          </a>
        </section>

        <section className="space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-200/80">Private Membership</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Membership Details + 40% Off Your First Month
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-stone-300">
            A guided somatic experience designed to help you slow down, reconnect to your body, and feel more
            grounded, present, and alive.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/membership-details"
              className="rounded-full bg-rose-200 px-6 py-3 font-medium text-stone-900 transition hover:bg-rose-100"
            >
              Get Membership Details
            </Link>
            <Link
              href="/bodywork-options"
              className="rounded-full border border-amber-200/70 px-6 py-3 font-medium text-amber-100 transition hover:border-amber-100"
            >
              View Bodywork Options
            </Link>
          </div>
          <p className="text-sm text-stone-400">
            Submit your email to receive membership information + your 40% off coupon.
          </p>
        </section>

        <section className="rounded-3xl border border-stone-800 bg-stone-900/80 p-8 md:p-10 space-y-5">
          <h2 className="text-3xl font-semibold">You’re carrying more than you realize.</h2>
          <p className="text-stone-300">Long days. Constant output. Always needed. Always “on.”</p>
          <p className="text-stone-300">
            Your body holds tension long after your work ends. And even when you rest… your nervous system doesn’t.
          </p>
          <p className="text-stone-200">This isn’t burnout. It’s disconnection from your body.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">This is where you come back to yourself.</h2>
          <p className="text-stone-300">
            The membership is a private, guided space where you learn how to slow your nervous system, feel your body
            again, expand your capacity for pleasure, calm, and presence, and reconnect to your feminine energy
            without pressure or performance.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold">Choose your level of support</h2>
          <p className="rounded-2xl border border-rose-200/30 bg-rose-950/30 p-4 text-sm md:text-base text-rose-100">
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
                {membershipHighlights.tier1.map((item) => (
                  <li key={item}>✨ {item}</li>
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

            <article className="rounded-3xl border border-rose-200/30 bg-gradient-to-b from-rose-950/30 to-stone-900 p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Tier 2 — Coaching Membership</h3>
              <p className="text-rose-200 text-lg font-medium">$149/month or $89/month</p>
              <p className="text-stone-300">A higher-touch coaching experience with consistent weekly support and guidance.</p>
              <ul className="space-y-2 text-stone-200">
                <li>✨ $149/month (no bodywork)</li>
                <li>✨ $89/month (for members who plan to book bodywork sessions separately)</li>
                {membershipHighlights.tier2.map((item) => (
                  <li key={item}>✨ {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl bg-stone-900 p-8 md:p-10">
          <h2 className="text-3xl font-semibold">What changes over time</h2>
          <ul className="grid gap-2 text-stone-300 md:grid-cols-2">
            <li>• calmer in your body</li>
            <li>• less reactive, more grounded</li>
            <li>• more connected to sensation</li>
            <li>• more present in your life and relationships</li>
            <li>• more at ease in your femininity</li>
          </ul>
        </section>

        <section className="text-center space-y-5">
          <h2 className="text-3xl font-semibold">Explore the membership.</h2>
          <p className="text-stone-300">Submit your email and get immediate access + your 40% off code.</p>
          <form className="mx-auto max-w-xl space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              required
              className="w-full rounded-full border border-stone-600 bg-stone-900 px-5 py-3 text-stone-100 placeholder:text-stone-400 focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-200/20"
            />
            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-rose-200 px-6 py-3 font-medium text-stone-900 transition hover:bg-rose-100"
              >
                {isSubmitting ? "Submitting..." : "Join Membership"}
              </button>
              <Link
                href="/membership-details"
                className="rounded-full border border-stone-600 px-6 py-3 font-medium text-stone-100 transition hover:border-stone-400"
              >
                Get Membership Details
              </Link>
            </div>
          </form>
          {isSuccess && <p className="text-sm text-emerald-300">Check your email for access + discount</p>}
          {error && <p className="text-sm text-rose-300">{error}</p>}
          <p className="text-sm text-stone-400">Includes your 40% off first month coupon.</p>
        </section>
      </div>
    </main>
  );
}
