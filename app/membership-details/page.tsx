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

        <section id="capture" className="rounded-3xl border border-stone-800 bg-stone-900 p-8 space-y-5">
          <h2 className="text-3xl font-semibold">Get Membership Details + 40% Off</h2>
          <p className="text-stone-300">
            Enter your email below to receive full membership information and your 40% off first month coupon.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 placeholder:text-stone-500"
            />
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="rounded-full bg-rose-200 px-6 py-3 font-medium text-stone-900">
                Join Membership
              </button>
              <Link
                href="https://fbo-membership.vercel.app/"
                className="rounded-full border border-stone-600 px-6 py-3 font-medium text-stone-100"
              >
                Get Membership Details
              </Link>
            </div>
          </form>
          <p className="text-sm text-stone-400">You’ll receive your coupon and next steps instantly.</p>
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
