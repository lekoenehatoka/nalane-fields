import { createFileRoute, Link } from "@tanstack/react-router";
import sheepStanding from "@/assets/sheep-standing.jpg";
import sheepPortrait from "@/assets/sheep-portrait.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nalane Fields" },
      { name: "description", content: "A 100% Black woman-owned, BEE-compliant sheep farming enterprise founded in 2025 by an Animal Health and Sheep & Wool Production student." },
      { property: "og:title", content: "About Nalane Fields" },
      { property: "og:description", content: "Who we are, what we believe, and where we are going." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">About</div>
            <h1 className="mt-6 font-display text-6xl md:text-7xl text-ink max-w-4xl leading-[1.02]">
              A young company with old values.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl font-serif italic text-2xl text-cocoa leading-relaxed">
              Nalane Fields (Pty) Ltd is a newly registered private company, dedicated
              to sustainable and ethical sheep farming in the Free State.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          <Reveal>
            <img src={sheepStanding} alt="" aria-hidden className="w-full aspect-[4/5] object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-end gap-6">
            <img src={sheepPortrait} alt="" aria-hidden className="w-full aspect-square object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-32 bg-secondary">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">— Who we are</div>
            <h2 className="mt-4 font-display text-4xl text-ink">A company, in full.</h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6 space-y-8 text-cocoa text-lg leading-relaxed">
            <Reveal><p>Nalane Fields is a private company, legally registered and fully compliant with all relevant South African business regulations. The company is 100% Black woman-owned, positioning it strongly for support and funding aligned with BEE initiatives.</p></Reveal>
            <Reveal delay={0.1}><p>As the sole owner, the founder oversees all strategic, operational, and financial aspects of the business — bringing dual qualifications in Animal Health and Sheep & Wool Production to the day-to-day care of the flock.</p></Reveal>
            <Reveal delay={0.15}>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-cocoa/20 text-sm">
                <div><dt className="text-[10px] uppercase tracking-[0.3em] text-claret">Registration</dt><dd className="mt-1 text-ink">2025 / 535868 / 07</dd></div>
                <div><dt className="text-[10px] uppercase tracking-[0.3em] text-claret">Founded</dt><dd className="mt-1 text-ink">2025</dd></div>
                <div><dt className="text-[10px] uppercase tracking-[0.3em] text-claret">Ownership</dt><dd className="mt-1 text-ink">100% Black woman-owned</dd></div>
                <div><dt className="text-[10px] uppercase tracking-[0.3em] text-claret">Status</dt><dd className="mt-1 text-ink">BEE compliant</dd></div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-32 bg-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">— Values</div>
            <h2 className="mt-4 font-display text-5xl text-ink max-w-2xl">What we hold to.</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {[
              ["Sustainability", "Employing farming practices that protect the environment and ensure long-term viability."],
              ["Animal welfare", "Prioritising humane treatment and well-being through grass-fed systems and ethical care."],
              ["Quality", "Delivering live sheep that meet the highest standards of health and condition."],
              ["Integrity", "Conducting all business operations with honesty, transparency, and accountability."],
              ["Empowerment", "Contributing to local economic development through job creation and skills transfer."],
              ["Patience", "Building slowly, growing on the farm's own terms, never at the cost of the land."],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="text-5xl font-display text-claret/40">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.32em] text-ink">{t}</div>
                <p className="mt-3 text-cocoa leading-relaxed">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink text-cream text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto px-6">
            Built on faith, growth, and quiet strength.
          </h2>
          <Link to="/vision" className="mt-10 inline-block px-8 py-4 rounded-full bg-claret text-cream text-[11px] uppercase tracking-[0.3em] hover:bg-cream hover:text-claret transition">
            See the vision
          </Link>
        </Reveal>
      </section>
    </>
  );
}
