import Link from "next/link";

type DropdownItem = {
  title: string;
  content: string;
  examples: string[];
};

export default function BodyworkLandingPage() {
  const dropdownItems: DropdownItem[] = [
    {
      title: "1. Nervous System Sensation Training",
      content:
        "Most women have been conditioned to chase intensity — bigger, faster, louder. This practice reverses that. You'll train your nervous system to detect subtle erotic current, warmth, aliveness, and tingling that most people never notice because they've never slowed down enough to feel it.",
      examples: [
        "I used to need very specific stimulation — now I feel arousal just from breathing into my belly.",
        "My whole thighs started pulsing in a coaching call. I wasn't even doing anything 'sexy.'",
        "I felt sensation in my heart for the first time during pleasure. I didn't know that was possible.",
      ],
    },
    {
      title: "2. Breathwork for Orgasmic Activation & Regulation",
      content:
        "Breath is the fastest pathway between your mind and your body's erotic intelligence. You'll learn specific breathwork patterns used in somatic sex education to drop out of your head, soften your pelvis, and allow sensation to spread — rather than stay locked in one place.",
      examples: [
        "I had my first full-body orgasm through breathing alone — no touch.",
        "Breathwork stopped my anxiety spiral during intimacy. I actually stayed present.",
        "I use the belly breath now before sex. My partner noticed immediately that something had changed in me.",
      ],
    },
    {
      title: "3. Somatic Mapping — Know Your Own Body's Language",
      content:
        "Your body speaks in sensation, temperature, pressure, and pulse. In this work, you'll learn to read its signals — not just during sex, but in everyday life. You'll map where you hold tension, where you go numb, and where your aliveness lives, so you can consciously expand from there.",
      examples: [
        "I realized I completely shut down sensation in my chest. I didn't even know I'd been doing that for 10 years.",
        "I can now feel when I'm about to dissociate during intimacy — and I have tools to stay.",
        "Mapping my body showed me I was holding grief in my hips. Releasing that changed my pleasure completely.",
      ],
    },
    {
      title: "4. Release of Stored Tension & Emotional Charge",
      content:
        "The body stores what the mind tries to forget. Unprocessed stress, shame, past experiences, and unexpressed emotion all live in the tissues — and they block pleasure. Through guided somatic release, you'll safely move stored charge out of your body so sensation can finally flow freely.",
      examples: [
        "I started crying mid-session and then felt more pleasure than I ever had. It made sense.",
        "Something let go in my lower belly that I didn't even know was clenched. I felt warm and open for days.",
        "I shook during the session. Brock told me that was my body releasing — not something wrong with me.",
      ],
    },
    {
      title: "5. Deconditioning Performance Pressure",
      content:
        "The pressure to orgasm, to look right, to respond correctly — it is wired in. This work systematically dismantles performance anxiety and replaces it with something more powerful: genuine presence. You stop performing pleasure and start actually feeling it.",
      examples: [
        "I used to fake it. Now I can't — because I actually feel everything.",
        "The moment I stopped trying to orgasm, I had the best orgasm of my life.",
        "I realized I was watching myself during sex instead of being in my body. That's gone now.",
      ],
    },
    {
      title: "6. Guided Self-Pleasure & Body Awareness Practices",
      content:
        "This is somatic sex education at its most intimate — guided, step-by-step practices that help you build a truly loving and curious relationship with your own body. Not performance-based. Not goal-oriented. Just you, your breath, and the full landscape of your felt experience.",
      examples: [
        "I touched my body with no goal for the first time in my life. I cried. It was beautiful.",
        "I used to rush through self-pleasure. Now I spend an hour and barely move — and it's more than I ever had before.",
        "I actually looked at myself in the mirror during my practice. That was the hardest — and the most healing — thing I've done.",
      ],
    },
    {
      title: "7. The Power of Being Fully Seen",
      content:
        "One of the most erotic and healing experiences available is being truly witnessed — without judgment, without agenda, without having to perform. In this work, you'll practice receiving presence: being seen in your body, your sensation, and your truth. This alone transforms intimacy.",
      examples: [
        "Someone witnessed me cry, shake, and moan in one session — and didn't flinch. I felt safe in my body for the first time.",
        "Being seen without performing changed how I show up with my partner. I stopped hiding.",
        "I didn't realize how much I was bracing against being witnessed until I finally let myself be. The release was enormous.",
      ],
    },
    {
      title: "8. Weekly Somatic Reset Rituals",
      content:
        "Pleasure and regulation are not one-time events — they are practiced. You'll build a personal weekly ritual that keeps your nervous system calibrated, your body open, and your erotic energy circulating. Simple, consistent, and deeply effective.",
      examples: [
        "My Sunday ritual is 20 minutes of breath and body scan. I carry that openness into my whole week.",
        "I used to collapse into stress every week. Now I have a reset. My body knows what's coming and softens before I even begin.",
        "The ritual isn't about getting turned on. It's about staying connected to myself. The turn-on comes from that.",
      ],
    },
    {
      title: "9. Your Personalized Somatic Coaching Path",
      content:
        "No two nervous systems are the same. Your coaching is built around your specific patterns — where you go numb, where you contract, where sensation lives and where it's been shut out. This is precision somatic work mapped to your body, your history, and your goals.",
      examples: [
        "Brock noticed I always deflect with humor when sensation gets intense. No one had ever tracked that before — and naming it changed everything.",
        "My path was designed around my history of medical trauma. It felt completely safe and completely mine.",
        "I came in thinking I had one problem. The personalized work revealed it was something entirely different — and so much more treatable.",
      ],
    },
    {
      title: "10. In-Person Embodiment Coaching (No Contact)",
      content:
        "Live, in-person sessions where your coach guides your body through posture, breath, and movement patterns that shift your relationship to sensation in real time. No touch. Full somatic presence. You'll feel the difference between reading about embodiment and actually living inside your body.",
      examples: [
        "He watched me breathe and told me I was holding my diaphragm. I released it and felt a wave move through my whole pelvis.",
        "Being physically in the room while doing this work removed all dissociation. I couldn't hide from my body.",
        "I've done years of online work. The in-person sessions moved something that nothing else could reach.",
      ],
    },
    {
      title: "11. Professional Somatic Bodywork Sessions",
      content:
        "Hands-on, private somatic bodywork designed to release deeply held tension from the tissues — particularly tension that stores sexual shame, trauma, or unexpressed emotion. Conducted with full professionalism, clear consent, and a therapeutic framework rooted in somatic sex education.",
      examples: [
        "I had no idea my inner thighs were holding that much. When they released, I felt sensation return to my whole lower body.",
        "The bodywork wasn't sexual — it was profound. My body finally felt safe to open.",
        "I've been doing talk therapy for five years. One bodywork session moved more than most of that. The body doesn't lie.",
      ],
    },
    {
      title: "12. Full-Body Orgasmic Awareness Training",
      content:
        "Most people experience sensation in one or two places. This training expands your awareness — and eventually your pleasure — through your whole body: spine, chest, throat, hands, feet. The goal is not a bigger orgasm. It's a body fully alive, from crown to root.",
      examples: [
        "I felt pleasure in my hands during a session. My hands. I didn't even know that was a thing.",
        "My orgasms used to be localized. Now they move. My whole spine lights up.",
        "Full-body awareness changed my daily life — not just my sex life. I'm more present in everything.",
      ],
    },
  ];

  const tierBreakdown = [
    {
      name: "Level 1 — Online Coaching",
      format: "Virtual (Zoom)",
      support: "Private nervous system education, breathwork & sensation awareness",
    },
    {
      name: "Level 2 — In-Person Coaching (No Contact)",
      format: "Houston, TX — in-person",
      support: "Live embodiment coaching, somatic presence & real-time regulation",
    },
    {
      name: "Level 3 — Somatic Coaching + Bodywork",
      format: "Hybrid — online + private in-person sessions",
      support: "Deep somatic integration through coaching + professional bodywork",
    },
  ];

  return (
    <main className="bg-[#d9d0c6] text-neutral-900 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif leading-tight">Online & In-Person Somatic Coaching Options</h1>
        <p className="mt-4 max-w-3xl text-lg text-neutral-700">
          Choose the depth of support that calls to you — from private online guidance to hands-on somatic bodywork
          in Houston. Every level is designed to help you come home to your body.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid gap-6 lg:grid-cols-3 pb-16">
        <div className="bg-white p-6 rounded-2xl">
          <h2 className="font-serif text-xl mb-2">🥉 Level 1 — Online Coaching</h2>
          <p className="text-sm text-neutral-700">
            Private, guided sessions where you learn to feel your body from the inside — breath, sensation, and
            nervous system awareness at your own pace, from your own space.
          </p>
          <p className="mt-4 text-sm italic text-neutral-600">Discover what your body already knows.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl">
          <h2 className="font-serif text-xl mb-2">🥈 Level 2 — In-Person Coaching (No Contact)</h2>
          <p className="text-sm text-neutral-700">
            Live, in-person sessions that guide you into full-body presence — real-time nervous system regulation
            through breath, posture, and somatic awareness. No touch. Total support.
          </p>
          <p className="mt-4 text-sm italic text-neutral-600">Feel held without being handled.</p>
        </div>

        <div className="bg-[#0a0f3f] text-white p-6 rounded-2xl">
          <h2 className="font-serif text-xl mb-2">🥇 Level 3 — Somatic Coaching + Bodywork</h2>
          <p className="text-sm text-white/80">
            The deepest level of somatic integration — structured, professional bodywork sessions that unlock stored
            tension and awaken the body's natural capacity for pleasure, presence, and regulation.
          </p>
          <p className="mt-4 text-sm italic text-white/70">Where healing becomes felt, not just understood.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-serif mb-6">What You’ll Experience</h2>
        <div className="space-y-3">
          {dropdownItems.map((item) => (
            <details key={item.title} className="bg-white rounded-xl p-4 cursor-pointer">
              <summary className="font-medium">{item.title}</summary>
              <p className="mt-3 text-sm text-neutral-700">{item.content}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                {item.examples.map((example) => (
                  <li key={example}>&ldquo;{example}&rdquo;</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-serif mb-6">Tier Breakdown — Find Your Level</h2>
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
          Availability is limited and sessions are held in confidence. Reach out to learn more about pricing,
          scheduling, and which level is the right fit for where you are right now.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/membership-details#capture" className="px-6 py-3 bg-[#0a0f3f] text-white rounded-full">
            Get Session Details →
          </Link>
        </div>
      </section>
    </main>
  );
}
