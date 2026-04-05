import Link from "next/link";

export default function BodyworkLandingPage() {
  const dropdownItems = [
    {
      title: "1. Nervous System Sensation Training",
      content:
        "Training your body to feel more awareness and subtle sensation instead of relying on intensity.",
    },
    {
      title: "2. Breathwork for Regulation",
      content:
        "Structured breathing techniques to regulate the nervous system and improve body awareness.",
    },
    {
      title: "3. Somatic Awareness & Mapping",
      content: "Learning how to track tension, stress, and sensation patterns in real time.",
    },
    {
      title: "4. Release of Stored Tension",
      content: "Guided processes to safely release built-up emotional and physical stress.",
    },
    {
      title: "5. Deconditioning Performance Pressure",
      content: "Rewiring the need to perform and replacing it with presence and awareness.",
    },
    {
      title: "6. Guided Self-Awareness Practices",
      content: "Step-by-step coaching to build a deeper relationship with your body.",
    },
    {
      title: "7. The Power of Being Seen",
      content: "Learning to be present and supported without pressure or judgment.",
    },
    {
      title: "8. Weekly Reset Rituals",
      content: "Simple structured practices to release stress consistently.",
    },
    {
      title: "9. Personalized Coaching Path",
      content: "Custom guidance based on your specific stress patterns and goals.",
    },
    {
      title: "10. In-Person Embodiment Coaching",
      content:
        "Live, guided sessions focused on posture, breath, and regulation without physical contact.",
    },
    {
      title: "11. Somatic Bodywork Sessions",
      content: "Hands-on sessions designed to release tension and support full-body relaxation.",
    },
    {
      title: "12. Full-Body Awareness Training",
      content: "Learning to expand awareness throughout the body for deeper calm and presence.",
    },
  ];

  const tierBreakdown = [
    {
      name: "Level 1 — Online Coaching",
      format: "Virtual",
      support: "Private guidance for breath, awareness, and regulation",
    },
    {
      name: "Level 2 — In-Person Coaching (No Contact)",
      format: "Houston, in-person",
      support: "Live coaching for embodiment and real-time regulation",
    },
    {
      name: "Level 3 — Somatic Coaching + Bodywork",
      format: "Hybrid",
      support: "Coaching plus bodywork sessions booked privately",
    },
  ];

  return (
    <main className="bg-[#d9d0c6] text-neutral-900 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif leading-tight">Online & In-Person Somatic Coaching Options</h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-700">
          Choose the level of support that fits your needs — from private online coaching to in-person somatic
          bodywork in Houston.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid gap-6 lg:grid-cols-3 pb-16">
        <div className="bg-white p-6 rounded-2xl">
          <h2 className="font-serif text-xl mb-2">🥉 Level 1 — Online Coaching</h2>
          <p className="text-sm text-neutral-700">
            Private, guided coaching sessions focused on awareness, breath, and nervous system regulation.
          </p>
          <p className="mt-4 text-sm italic text-neutral-600">Learn your body in privacy and safety.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl">
          <h2 className="font-serif text-xl mb-2">🥈 Level 2 — In-Person Coaching (No Contact)</h2>
          <p className="text-sm text-neutral-700">
            Live, guided sessions focused on embodiment, presence, and real-time nervous system regulation.
          </p>
          <p className="mt-4 text-sm italic text-neutral-600">Be guided, grounded, and supported.</p>
        </div>

        <div className="bg-[#0a0f3f] text-white p-6 rounded-2xl">
          <h2 className="font-serif text-xl mb-2">🥇 Level 3 — Somatic Coaching + Bodywork</h2>
          <p className="text-sm text-white/80">
            Full somatic integration through structured bodywork designed to release tension and support regulation.
          </p>
          <p className="mt-4 text-sm italic text-white/70">Experience deeper regulation through guided support.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-serif mb-6">What You’ll Experience</h2>
        <div className="space-y-3">
          {dropdownItems.map((item) => (
            <details key={item.title} className="bg-white rounded-xl p-4 cursor-pointer">
              <summary className="font-medium">{item.title}</summary>
              <p className="mt-3 text-sm text-neutral-700">{item.content}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-serif mb-6">Tier Breakdown Comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-[#0a0f3f]/20">
          <table className="min-w-full bg-white text-left text-sm">
            <thead>
              <tr className="bg-[#0a0f3f] text-white">
                <th className="px-4 py-3 font-medium">Tier</th>
                <th className="px-4 py-3 font-medium">Format</th>
                <th className="px-4 py-3 font-medium">Primary Focus</th>
              </tr>
            </thead>
            <tbody>
              {tierBreakdown.map((tier) => (
                <tr key={tier.name} className="border-t border-neutral-200">
                  <td className="px-4 py-3 font-medium">{tier.name}</td>
                  <td className="px-4 py-3 text-neutral-700">{tier.format}</td>
                  <td className="px-4 py-3 text-neutral-700">{tier.support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-serif">Request Private Session Details</h2>
        <p className="mt-4 text-neutral-700">
          Learn more about availability, pricing, and which option is best for you.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/membership-details" className="px-6 py-3 bg-[#0a0f3f] text-white rounded-full">
            Get Session Details
          </Link>
          <Link
            href="/membership-details#capture"
            className="px-6 py-3 bg-white border border-[#0a0f3f] text-[#0a0f3f] rounded-full"
          >
            Request Private Session Info
          </Link>
        </div>
      </section>
    </main>
  );
}
