import { createFileRoute, Link } from "@tanstack/react-router";
import sunsetField from "@/assets/sunset-field.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision & Plan — Nalane Fields" },
      { name: "description", content: "The mission, business model and long-term vision of Nalane Fields — a sustainable sheep farming enterprise in the Free State." },
      { property: "og:title", content: "Vision & Plan — Nalane Fields" },
      { property: "og:description", content: "From a flock of 50 to international export — a long view of ethical farming." },
      { property: "og:image", content: sunsetField },
    ],
  }),
  component: Vision,
});

function Vision() {
  return (
    <>
      <section className="relative min-h-[70svh] flex items-end overflow-hidden">
        <img src={sunsetField} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-20 text-cream">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] opacity-80">Vision & Plan</div>
            <h1 className="mt-6 font-display text-6xl md:text-8xl max-w-4xl leading-[1.02]">
              A model for responsible, inclusive agribusiness.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-32 bg-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">Vision</div>
            <h2 className="mt-4 font-display text-4xl text-ink leading-tight">National roots, international reach.</h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={0.1}>
            <p className="font-serif italic text-2xl text-cocoa leading-relaxed">
              To become a leading, ethically driven sheep farm in South Africa —
              recognised for sustainable practice, superior product quality, animal
              welfare, and socio-economic empowerment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">— Business model</div>
            <h2 className="mt-4 font-display text-5xl text-ink">Live sheep, sold honestly.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              ["Direct to consumer", "Healthy grass-fed live sheep sold directly to individual consumers, with no on-farm slaughtering."],
              ["Local markets", "Supplying local shops and markets across the Free State with consistent, quality livestock."],
              ["Future export", "Pursuing Halal and Kosher certifications to access international live export markets in the long term."],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="bg-cream p-8 h-full">
                  <div className="font-display text-claret text-3xl">0{i + 1}</div>
                  <div className="mt-4 text-[11px] uppercase tracking-[0.32em] text-ink">{t}</div>
                  <p className="mt-3 text-cocoa leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">— Objectives</div>
            <h2 className="mt-4 font-display text-5xl text-ink max-w-3xl">What we are working toward.</h2>
          </Reveal>
          <div className="mt-14 divide-y divide-cocoa/15 border-y border-cocoa/15">
            {[
              ["Land acquisition", "Secure 71 hectares of mixed sweet grass farm in Bloemfontein Rural — listed at R1.9 million — with existing water infrastructure and game fencing."],
              ["Initial operations", "Begin with 50 grass-fed Dorper sheep (48 ewes and 2 rams), enabling a focused, healthy breeding program."],
              ["Gradual growth", "Expand the flock toward approximately 80 Dorper sheep, optimising for grazing efficiency and pasture health."],
              ["Product offering", "Specialise in the sale of live sheep to direct consumers and local markets — never on-farm slaughter."],
              ["Market expansion", "Explore international live export markets, supported by future Halal and Kosher certifications."],
              ["Employment", "Create meaningful local employment, beginning with one role and growing alongside the flock."],
              ["Funding", "Pursue grant funding of approximately R2,131,990 to cover key infrastructure and operational costs, alongside personal contribution."],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.04}>
                <div className="grid md:grid-cols-12 gap-6 py-8">
                  <div className="md:col-span-1 font-display text-3xl text-claret/60">{String(i + 1).padStart(2, "0")}</div>
                  <div className="md:col-span-3 text-[11px] uppercase tracking-[0.32em] text-ink pt-3">{t}</div>
                  <p className="md:col-span-8 text-cocoa leading-relaxed pt-2">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-claret text-cream text-center grain">
        <Reveal>
          <h2 className="font-display text-5xl max-w-3xl mx-auto px-6">For grant funders, partners and patient capital.</h2>
          <p className="mt-6 max-w-xl mx-auto text-cream/85">
            We are actively seeking grant funding aligned with empowerment and sustainable
            agriculture. The full business plan is available on request.
          </p>
          <Link to="/contact" className="mt-10 inline-block px-8 py-4 rounded-full bg-cream text-claret text-[11px] uppercase tracking-[0.3em] hover:bg-ink hover:text-cream transition">
            Request the business plan
          </Link>
        </Reveal>
      </section>
    </>
  );
}
