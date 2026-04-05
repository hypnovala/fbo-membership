import Link from "next/link";

const curriculumItems = [
  {
    title: "Foundations of Nervous System Safety",
    detail:
      "Understand core autonomic states and how safety cues support steadiness, agency, and clear decision-making.",
  },
  {
    title: "Body Mapping and Signal Tracking",
    detail:
      "Build awareness of tension, breath patterns, and activation signals without judgment or urgency.",
  },
  {
    title: "Breath as a Regulation Tool",
    detail:
      "Apply practical breathing protocols for downshifting stress and improving recovery between demanding tasks.",
  },
  {
    title: "Grounding and Orientation Skills",
    detail:
      "Use orientation, posture, and sensory anchors to return to present-time awareness during stress spikes.",
  },
  {
    title: "Stress Cycle Completion",
    detail:
      "Learn simple movement and pacing strategies that help the body complete stress responses safely.",
  },
  {
    title: "Somatic Boundaries and Capacity",
    detail:
      "Identify limits early, communicate boundaries clearly, and expand capacity gradually over time.",
  },
  {
    title: "Co-Regulation and Relational Presence",
    detail:
      "Practice communication patterns that support nervous system regulation in personal and professional relationships.",
  },
  {
    title: "Embodiment in Daily Routines",
    detail:
      "Integrate short check-ins, transitions, and body-based habits that make regulation sustainable.",
  },
  {
    title: "In-Person Table Session Protocol",
    detail:
      "Review structure, consent process, and pacing of Houston-based bodywork sessions booked separately.",
  },
  {
    title: "Session Reflection and Integration",
    detail:
      "Turn insights into practical next steps with clear reflection prompts and integration planning.",
  },
  {
    title: "Acute Stress Response Plan",
    detail:
      "Create a personalized plan for high-pressure moments using repeatable regulation actions.",
  },
  {
    title: "Long-Term Resilience Framework",
    detail:
      "Measure progress across sleep, focus, emotional range, and recovery consistency.",
  },
];

const tierComparison = [
  {
    level: "Level 1 — Online Foundation",
    format: "Digital coaching",
    cadence: "Monthly",
    support: "Structured practices + one monthly check-in",
    bestFor: "Building baseline regulation skills",
  },
  {
    level: "Level 2 — Online Intensive",
    format: "Digital coaching",
    cadence: "Weekly",
    support: "Weekly 1:1 support with personalized protocols",
    bestFor: "Consistent accountability and faster skill integration",
  },
  {
    level: "Level 3 — Hybrid Private",
    format: "Online + Houston in-person options",
    cadence: "Weekly + optional in-person add-ons",
    support: "Comprehensive coaching with optional bodywork sessions",
    bestFor: "High-touch support and deeper nervous system training",
  },
];

export default function BodyworkOptionsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-stone-100">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-16">
        <section className="space-y-5 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200/90">Bodywork Options</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Online + In-Person Somatic Coaching</h1>
          <p className="mx-auto max-w-3xl text-lg text-stone-300">
            A calm, structured coaching model focused on nervous system education, safety, awareness, regulation, and
            embodied daily function.
          </p>
          <p className="mx-auto max-w-3xl rounded-2xl border border-amber-200/30 bg-slate-800/70 px-5 py-4 text-sm text-amber-100 md:text-base">
            All tiers include somatic coaching. Houston in-person bodywork access is available for members and booked
            separately.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Tier Structure</h2>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-700 bg-slate-800 p-6 space-y-3">
              <h3 className="text-xl font-semibold text-amber-100">Level 1</h3>
              <p className="text-stone-300">Online foundation program for core nervous system regulation skills.</p>
            </article>
            <article className="rounded-2xl border border-slate-700 bg-slate-800 p-6 space-y-3">
              <h3 className="text-xl font-semibold text-amber-100">Level 2</h3>
              <p className="text-stone-300">Online intensive with weekly coaching and personalized support plans.</p>
            </article>
            <article className="rounded-2xl border border-amber-200/50 bg-slate-800 p-6 space-y-3">
              <h3 className="text-xl font-semibold text-amber-100">Level 3</h3>
              <p className="text-stone-300">Hybrid private track with coaching plus optional in-person add-on sessions.</p>
            </article>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Program Modules</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {curriculumItems.map((item) => (
              <details key={item.title} className="group rounded-xl border border-slate-700 bg-slate-800 p-4">
                <summary className="cursor-pointer list-none font-medium text-amber-100 flex items-center justify-between gap-4">
                  <span>{item.title}</span>
                  <span className="text-xs uppercase tracking-wide text-stone-400 group-open:hidden">Open</span>
                  <span className="text-xs uppercase tracking-wide text-stone-400 hidden group-open:inline">Close</span>
                </summary>
                <p className="pt-3 text-sm text-stone-300">{item.detail}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Tier Breakdown Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full border-collapse bg-slate-800 text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-amber-100">
                  <th className="px-4 py-3 font-semibold">Tier</th>
                  <th className="px-4 py-3 font-semibold">Format</th>
                  <th className="px-4 py-3 font-semibold">Cadence</th>
                  <th className="px-4 py-3 font-semibold">Support</th>
                  <th className="px-4 py-3 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {tierComparison.map((tier) => (
                  <tr key={tier.level} className="border-b border-slate-700/80 align-top last:border-b-0">
                    <td className="px-4 py-3 font-medium text-stone-100">{tier.level}</td>
                    <td className="px-4 py-3 text-stone-300">{tier.format}</td>
                    <td className="px-4 py-3 text-stone-300">{tier.cadence}</td>
                    <td className="px-4 py-3 text-stone-300">{tier.support}</td>
                    <td className="px-4 py-3 text-stone-300">{tier.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-amber-200/40 bg-slate-800 p-8 text-center space-y-4">
          <h2 className="text-3xl font-semibold">Request Session Information</h2>
          <p className="mx-auto max-w-2xl text-stone-300">
            Share your email to receive program details, tier recommendations, and next steps for online or in-person
            support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/membership-details"
              className="rounded-full bg-amber-200 px-6 py-3 font-medium text-slate-900 transition hover:bg-amber-100"
            >
              Get Session Details
            </Link>
            <Link
              href="/membership-details#capture"
              className="rounded-full border border-amber-200/70 px-6 py-3 font-medium text-amber-100 transition hover:border-amber-100"
            >
              Request Private Session Info
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
