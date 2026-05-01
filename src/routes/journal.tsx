import { createFileRoute } from "@tanstack/react-router";
import sunsetField from "@/assets/sunset-field.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Nalane Fields" },
      { name: "description", content: "Notes from the early days of Nalane Fields — building an ethical sheep farming enterprise from the ground up." },
      { property: "og:title", content: "Journal — Nalane Fields" },
      { property: "og:description", content: "Reflections from a farming enterprise in the making." },
    ],
  }),
  component: Journal,
});

const entries = [
  {
    date: "2025",
    title: "On paper.",
    body: "The business plan is complete. It feels strange to see something so alive written in tables and projections — but every farm starts here.",
  },
  {
    date: "2025",
    title: "Why grass-fed.",
    body: "Grass-fed isn't a marketing line, it's a system. It means slower growth, healthier animals, and pasture that gives back what is taken. It is the only way we have ever wanted to do this.",
  },
  {
    date: "2025",
    title: "Why ethical.",
    body: "We believe a farm should be answerable — to the animals it raises, to the land it stands on, and to the people it feeds. Transparency is not a feature; it is the standard.",
  },
  {
    date: "2025",
    title: "Our brand.",
    body: "Nalane Fields is about building a lasting legacy through honest work, ethical farming, and a life that stays aligned with what is right.",
  },
];

function Journal() {
  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">Journal</div>
            <h1 className="mt-6 font-display text-6xl md:text-7xl text-ink max-w-3xl leading-[1.02]">
              Notes from the early days.
            </h1>
            <p className="mt-8 max-w-xl font-serif italic text-xl text-cocoa">
              Short reflections on building an ethical sheep farming enterprise — before the first sheep arrives.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 divide-y divide-cocoa/20 border-y border-cocoa/20">
          {entries.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <article className="py-14 grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-claret">{e.date}</div>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-display text-3xl text-ink">{e.title}</h2>
                  <p className="mt-4 text-cocoa text-lg leading-relaxed">{e.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <img src={sunsetField} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <Reveal>
          <p className="relative font-display text-3xl md:text-5xl text-cream text-center max-w-3xl mx-auto px-6 leading-snug">
            "Always turning toward the light."
          </p>
        </Reveal>
      </section>
    </>
  );
}
