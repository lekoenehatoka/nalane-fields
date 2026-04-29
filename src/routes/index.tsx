import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import sheepPortrait from "@/assets/sheep-portrait.jpg";
import sheepStanding from "@/assets/sheep-standing.jpg";
import sunsetField from "@/assets/sunset-field.jpg";
import hillsSheep from "@/assets/hills-sheep.jpg";
import logo from "@/assets/logo.png";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nalane Fields — Ethical Sheep Farming, Free State" },
      { name: "description", content: "A new chapter in South African agriculture. Ethically raised, grass-fed Dorper sheep. 100% Black woman-owned, BEE compliant." },
      { property: "og:title", content: "Nalane Fields — Ethical Sheep Farming" },
      { property: "og:description", content: "Ethically raised, grass-fed Dorper sheep from the Free State." },
    ],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] -mt-20 pt-20 overflow-hidden bg-cream">
        <motion.div style={{ y: y1 }} className="absolute inset-0" aria-hidden>
          <img src={sunsetField} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/40 to-cream" />
        </motion.div>

        <motion.div
          aria-hidden
          className="absolute right-[-80px] top-32 w-[420px] h-[420px] rounded-full bg-claret/10 blur-3xl"
          style={{ y: y2 }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-claret"
          >
            <span className="h-px w-10 bg-claret" />
            A new chapter in ethical farming
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mt-8 font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] text-ink text-balance max-w-5xl"
          >
            Of soil, sun, <em className="text-claret font-normal">and</em>
            <br />
            quiet devotion.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 grid md:grid-cols-2 gap-12 max-w-5xl"
          >
            <p className="font-serif italic text-xl text-cocoa leading-relaxed">
              Nalane Fields is a sheep farming enterprise being built around a single
              idea — that animals can be raised slowly, ethically, and well, and that
              business can be done the same way.
            </p>
            <div className="flex flex-col gap-5 md:items-end">
              <div className="text-sm text-ink/70 max-w-sm md:text-right">
                Founded 2025. Registered. BEE compliant.
                100% Black woman-owned. Currently in pre-operational
                phase, pursuing grant funding and partnerships.
              </div>
              <div className="flex gap-3">
                <Link to="/vision" className="px-7 py-3.5 rounded-full bg-claret text-cream text-[11px] uppercase tracking-[0.3em] hover:bg-ink transition-all">
                  Read the vision
                </Link>
                <Link to="/contact" className="px-7 py-3.5 rounded-full border border-ink/40 text-ink text-[11px] uppercase tracking-[0.3em] hover:border-claret hover:text-claret transition">
                  Funders & partners
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-ink/60">
          Scroll
          <span className="block h-10 w-px bg-ink/40 animate-pulse" />
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="bg-claret text-cream py-7 overflow-hidden border-y border-claret">
        <div className="flex marquee-track gap-16 whitespace-nowrap" style={{ fontFamily: "Forum, serif", letterSpacing: "0.3em" }}>
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 items-center text-lg">
              <span>GRASS-FED DORPER SHEEP</span>
              <span className="opacity-50">✦</span>
              <span>FREE STATE, SOUTH AFRICA</span>
              <span className="opacity-50">✦</span>
              <span>ETHICALLY RAISED</span>
              <span className="opacity-50">✦</span>
              <span>EST. 2025</span>
              <span className="opacity-50">✦</span>
              <span>100% BLACK WOMAN-OWNED</span>
              <span className="opacity-50">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="py-32 bg-cream relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">— I. Mission</div>
            <h2 className="mt-6 font-display text-5xl text-ink leading-tight">
              A small enterprise with a long view.
            </h2>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6 space-y-10">
            <Reveal>
              <p className="font-serif text-2xl text-cocoa leading-relaxed">
                To build a thriving, ethical sheep farming enterprise that delivers
                premium livestock while promoting sustainable agriculture and
                empowering local communities through job creation and education.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="hairline text-cocoa" />
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-10">
                {[
                  ["Sustainability", "Practices that protect the environment and ensure long-term viability."],
                  ["Animal welfare", "Humane treatment through grass-fed systems and ethical care."],
                  ["Quality", "A superior product, raised to the highest standards."],
                  ["Empowerment", "Local economic development through jobs and skills transfer."],
                ].map(([title, body]) => (
                  <div key={title}>
                    <div className="text-[11px] uppercase tracking-[0.32em] text-claret mb-2">{title}</div>
                    <p className="text-ink/80 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMAGE DUET — purely atmospheric */}
      <section className="bg-cream pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-6">
          <Reveal className="md:col-span-7">
            <div className="relative overflow-hidden rounded-[2px] aspect-[4/5] md:aspect-[5/6]">
              <img src={sheepStanding} alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div className="md:col-span-5 flex flex-col justify-end gap-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2px] aspect-square">
                <img src={sheepPortrait} alt="" aria-hidden className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="font-serif italic text-2xl text-cocoa leading-snug pl-6 border-l-2 border-claret">
                "Raised slowly. Treated kindly. Sold honestly."
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE WORK — no land specifics */}
      <section className="bg-ink text-cream py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25" aria-hidden>
          <img src={hillsSheep} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-cream/70">— II. The Work</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-6xl md:text-7xl max-w-4xl leading-[1.05]">
              <em className="text-claret/90 font-normal">Grass-fed</em> Dorper sheep, raised the long way.
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-3 gap-x-8 gap-y-12">
            {[
              ["Direct", "Live sheep sold directly to consumers — never on-farm slaughter."],
              ["Local", "Supplying shops and markets across the Free State with consistent quality."],
              ["Future", "Pursuing Halal and Kosher pathways toward international live export."],
            ].map(([n, d]) => (
              <Reveal key={n}>
                <div className="border-t border-cream/20 pt-6">
                  <div className="font-display text-3xl text-cream">{n}</div>
                  <div className="mt-2 text-sm text-cream/70 leading-relaxed">{d}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-20 flex justify-end">
              <Link to="/philosophy" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-cream hover:text-claret transition">
                Read our philosophy <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY / TIMELINE */}
      <section className="py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">— III. The Journey</div>
            <h2 className="mt-6 font-display text-6xl text-ink max-w-3xl">From paper to pasture.</h2>
          </Reveal>

          <div className="mt-20 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cocoa/25" />
            {[
              ["2025", "Foundation", "Company registered. Business plan completed. Brand and identity defined."],
              ["2026", "Groundwork", "Pursuit of grant funding and partnerships. Building the relationships and resources required to begin."],
              ["2027", "First Flock", "Establish an initial grass-fed Dorper flock under a focused breeding program. First hire."],
              ["2028+", "Growth", "Scale the flock with care. Pursue Halal and Kosher pathways. Explore international live export markets."],
            ].map(([year, title, body], i) => (
              <Reveal key={year} delay={i * 0.05}>
                <div className={`relative grid md:grid-cols-2 gap-8 mb-16 md:mb-20 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="font-display text-5xl text-claret">{year}</div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.32em] text-cocoa">{title}</div>
                  </div>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <p className="text-cocoa leading-relaxed text-lg">{body}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-claret ring-4 ring-cream" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-square overflow-hidden bg-cream flex items-center justify-center p-12">
              <img src={logo} alt="Nalane Fields logo" className="w-full h-full object-contain" />
              <div className="absolute bottom-6 left-6 right-6 bg-cream/90 backdrop-blur p-6 ring-1 ring-cocoa/10">
                <div className="text-[10px] uppercase tracking-[0.4em] text-claret">Founder</div>
                <div className="mt-2 font-display text-2xl text-ink">Tokelo Lekoeneha</div>
                <div className="text-sm text-cocoa mt-1">Animal Health · Sheep & Wool Production</div>
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">— IV. The Founder</div>
            <h2 className="mt-6 font-display text-5xl text-ink leading-tight">
              An agriculture student, building something meant to last.
            </h2>
            <p className="mt-8 text-lg text-cocoa leading-relaxed">
              Nalane Fields is the work of one woman with two specialisations —
              Animal Health, and Sheep & Wool Production — and a clear conviction
              that South African farming can be ethical, transparent, and proudly local.
            </p>
            <p className="mt-5 text-cocoa leading-relaxed">
              The enterprise will start small and grow on its own terms. No
              on-farm slaughter. No shortcuts. A real flock, sold to people who
              care where their livestock comes from.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-claret text-cream py-32 relative overflow-hidden grain">
        <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border border-cream/20 spin-slow" aria-hidden />
        <div className="absolute -right-20 -top-20 w-[300px] h-[300px] rounded-full border border-cream/10 spin-slow" style={{ animationDirection: "reverse" }} aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <img src={logo} alt="Nalane Fields" className="h-24 w-24 mx-auto rounded-full object-cover ring-1 ring-cream/40 float-slow" />
          <h2 className="mt-10 font-display text-5xl md:text-6xl leading-tight">
            We are at the beginning. <em className="font-normal opacity-80">Walk it with us.</em>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-cream/85 text-lg">
            Whether you are a grant funder, a future buyer, a fellow farmer, or simply
            curious — we would love to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-cream text-claret text-[11px] uppercase tracking-[0.3em] hover:bg-ink hover:text-cream transition">
              Get in touch
            </Link>
            <Link to="/vision" className="px-8 py-4 rounded-full border border-cream/50 text-cream text-[11px] uppercase tracking-[0.3em] hover:bg-cream/10 transition">
              Read the plan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
