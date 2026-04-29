import { createFileRoute, Link } from "@tanstack/react-router";
import hillsSheep from "@/assets/hills-sheep.jpg";
import lambsBarn from "@/assets/lambs-barn.jpg";
import cornField from "@/assets/corn-field.jpg";
import sheepStanding from "@/assets/sheep-standing.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/farm")({
  head: () => ({
    meta: [
      { title: "The Farm — Nalane Fields" },
      { name: "description", content: "71 hectares of mixed sweet grass plains in Bloemfontein Rural, Free State — the future home of Nalane Fields." },
      { property: "og:title", content: "The Farm — Nalane Fields" },
      { property: "og:description", content: "The land, the flock, and the practice of grass-fed Dorper sheep farming." },
      { property: "og:image", content: hillsSheep },
    ],
  }),
  component: Farm,
});

function Farm() {
  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">The Farm</div>
            <h1 className="mt-6 font-display text-6xl md:text-7xl text-ink max-w-4xl leading-[1.02]">
              Mixed sweet grass, a windmill, and a long road from town.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <Reveal>
          <img src={hillsSheep} alt="Rolling hills with sheep grazing" className="w-full h-[60svh] object-cover" />
        </Reveal>
      </section>

      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">— Location</div>
            <h2 className="mt-4 font-display text-4xl text-ink">Bloemfontein Rural, Free State.</h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6 text-cocoa text-lg leading-relaxed space-y-6">
            <Reveal><p>Operations will be established on a 71-hectare vacant land parcel in Bloemfontein Rural — strategically positioned for grass-fed livestock and accessible markets.</p></Reveal>
            <Reveal delay={0.05}>
              <ul className="space-y-3 text-base">
                {[
                  "Mixed sweet grass plains, ideal for grass-fed sheep",
                  "Favourable drag rate of 1 GVE per 6 hectares",
                  "Average annual rainfall of 550 mm",
                  "Existing water: 1 windmill, 1 dam, 1 water tank",
                  "Secure 2.1 m perimeter game fencing",
                  "25 km of tar road and 1 km of dirt road from Bloemfontein",
                ].map((line) => (
                  <li key={line} className="flex gap-3 border-b border-cocoa/15 pb-3"><span className="text-claret">✦</span> {line}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          <Reveal><img src={lambsBarn} alt="Lambs in a barn" className="w-full aspect-[4/5] object-cover" /></Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">— The Flock</div>
            <h2 className="mt-4 font-display text-5xl text-ink leading-tight">Fifty Dorpers to begin with.</h2>
            <p className="mt-6 text-cocoa text-lg leading-relaxed">
              The farm will commence with fifty grass-fed Dorper sheep — forty-eight ewes
              and two rams — chosen for hardiness, suitability to the local landscape,
              and a focused breeding program.
            </p>
            <p className="mt-4 text-cocoa leading-relaxed">
              From there, growth is gradual: roughly eighty sheep at maturity, optimised
              to the carrying capacity of the land. No rushing the pasture. No on-farm
              slaughter. Just healthy animals, raised slowly and well.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-8 items-center">
          <Reveal className="md:order-2"><img src={cornField} alt="Field at sunrise" className="w-full aspect-[4/5] object-cover" /></Reveal>
          <Reveal delay={0.1} className="md:order-1">
            <div className="text-[11px] uppercase tracking-[0.4em] text-cream/70">— Practice</div>
            <h2 className="mt-4 font-display text-5xl leading-tight">Grass-fed. Pasture-rotated. Solar-powered.</h2>
            <p className="mt-6 text-cream/80 text-lg leading-relaxed">
              The land currently has no power supply or buildings. Initial development will
              include a solar power system, a basic sheep barn and a farm home — all
              chosen for low impact and long life.
            </p>
            <p className="mt-4 text-cream/70 leading-relaxed">
              Robust quality control is integral to every part of the operation, from
              animal health to handling, transport and sale.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-cream text-center">
        <Reveal>
          <img src={sheepStanding} alt="" className="w-32 h-32 rounded-full object-cover mx-auto" />
          <h2 className="mt-10 font-display text-5xl text-ink max-w-2xl mx-auto px-6">
            A real farm, taking shape.
          </h2>
          <Link to="/contact" className="mt-10 inline-block px-8 py-4 rounded-full bg-claret text-cream text-[11px] uppercase tracking-[0.3em] hover:bg-ink transition">
            Visit · partner · fund
          </Link>
        </Reveal>
      </section>
    </>
  );
}
