import { createFileRoute, Link } from "@tanstack/react-router";
import sunsetField from "@/assets/sunset-field.jpg";
import cornField from "@/assets/corn-field.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "Philosophy — Nalane Fields" },
      { name: "description", content: "The principles behind Nalane Fields — ethical, grass-fed sheep farming, animal welfare, sustainability, and unhurried craft." },
      { property: "og:title", content: "Philosophy — Nalane Fields" },
      { property: "og:description", content: "How we intend to farm: slowly, kindly, transparently." },
    ],
  }),
  component: Philosophy,
});

function Philosophy() {
  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">Philosophy</div>
            <h1 className="mt-6 font-display text-6xl md:text-7xl text-ink max-w-4xl leading-[1.02]">
              Slowly. Kindly. Honestly.
            </h1>
            <p className="mt-10 max-w-2xl font-serif italic text-2xl text-cocoa leading-relaxed">
              How we intend to raise sheep, and how we intend to do business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative h-[50svh] overflow-hidden">
        <img src={sunsetField} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/0 to-cream" />
      </section>

      <section className="py-32 bg-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">— Our practice</div>
            <h2 className="mt-4 font-display text-4xl text-ink leading-tight">Grass-fed by conviction.</h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6 text-cocoa text-lg leading-relaxed space-y-6">
            <Reveal>
              <p>
                Grass-fed is not a marketing line — it is a system. It means slower
                growth, healthier animals, and pasture that gives back what is taken.
                It is the only way we have ever wanted to do this.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="space-y-3 text-base">
                {[
                  "Dorper sheep, chosen for hardiness and suitability to local landscapes",
                  "A focused breeding program — quality over quantity",
                  "No on-farm slaughter, ever",
                  "Live sheep, sold honestly to people who care where their livestock comes from",
                  "Robust quality control across animal health, handling, transport and sale",
                  "Low-impact infrastructure, designed for long life",
                ].map((line) => (
                  <li key={line} className="flex gap-3 border-b border-cocoa/15 pb-3"><span className="text-claret">✦</span> {line}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-32 bg-secondary">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">— What we hold to</div>
            <h2 className="mt-4 font-display text-5xl text-ink max-w-2xl">A handful of principles.</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {[
              ["Sustainability", "Practices that protect the environment and ensure long-term viability."],
              ["Animal welfare", "Humane treatment and well-being through grass-fed systems and ethical care."],
              ["Quality", "Healthy, well-conditioned livestock — held to the highest standards."],
              ["Integrity", "Honesty, transparency and accountability in every transaction."],
              ["Empowerment", "Local economic development through job creation and skills transfer."],
              ["Patience", "Building slowly, on the land's terms, never at the cost of the animal."],
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

      <section className="py-24 bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-8 items-center">
          <Reveal className="md:order-2">
            <img src={cornField} alt="" aria-hidden className="w-full aspect-[4/5] object-cover opacity-90" />
          </Reveal>
          <Reveal delay={0.1} className="md:order-1">
            <div className="text-[11px] uppercase tracking-[0.4em] text-cream/70">— A long view</div>
            <h2 className="mt-4 font-display text-5xl leading-tight">Premium livestock. Patient growth.</h2>
            <p className="mt-6 text-cream/80 text-lg leading-relaxed">
              We are setting out to build a small, ethical sheep farming enterprise
              that delivers premium grass-fed Dorper sheep to direct consumers and
              local markets in the Free State — with future ambitions toward Halal
              and Kosher certification and international live export.
            </p>
            <p className="mt-4 text-cream/70 leading-relaxed">
              Everything here is intentional. Nothing here is rushed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-cream text-center">
        <Reveal>
          <h2 className="font-display text-5xl text-ink max-w-2xl mx-auto px-6">
            A real company, taking shape.
          </h2>
          <Link to="/contact" className="mt-10 inline-block px-8 py-4 rounded-full bg-claret text-cream text-[11px] uppercase tracking-[0.3em] hover:bg-ink transition">
            Partner · fund · say hello
          </Link>
        </Reveal>
      </section>
    </>
  );
}