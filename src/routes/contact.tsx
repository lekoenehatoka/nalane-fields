import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nalane Fields" },
      { name: "description", content: "Reach Nalane Fields — for grant funding, partnerships, future buyers, or simply to say hello." },
      { property: "og:title", content: "Contact — Nalane Fields" },
      { property: "og:description", content: "Get in touch with Nalane Fields." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-claret">Contact</div>
            <h1 className="mt-6 font-display text-6xl md:text-7xl text-ink max-w-4xl leading-[1.02]">
              We would love to hear from you.
            </h1>
            <p className="mt-8 max-w-xl font-serif italic text-xl text-cocoa">
              Whether you are a grant funder, a future buyer, a fellow farmer, or
              simply curious — write to us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 bg-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5 space-y-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-claret mb-3">Email</div>
              <a href="mailto:admin@nalanefields.co.za" className="font-display text-3xl text-ink hover:text-claret transition">
                admin@nalanefields.co.za
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-claret mb-3">Based in</div>
              <p className="text-ink text-lg leading-relaxed">
                Free State, South Africa
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-claret mb-3">For grant funders</div>
              <p className="text-cocoa leading-relaxed">
                Our full business plan and supporting documentation are
                available on request. Please reach out via email.
              </p>
            </div>
            <div className="pt-8 border-t border-cocoa/20 text-xs text-cocoa/70 space-y-1">
              <div>Nalane Fields (Pty) Ltd</div>
              <div>Reg. 2025 / 535868 / 07</div>
              <div>100% Black Woman-Owned · BEE compliant</div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-secondary p-8 md:p-12 space-y-6"
            >
              <div>
                <label className="text-[10px] uppercase tracking-[0.32em] text-claret">Name</label>
                <input required type="text" className="mt-2 w-full bg-transparent border-b border-cocoa/40 py-3 focus:outline-none focus:border-claret text-ink" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.32em] text-claret">Email</label>
                <input required type="email" className="mt-2 w-full bg-transparent border-b border-cocoa/40 py-3 focus:outline-none focus:border-claret text-ink" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.32em] text-claret">I am writing as</label>
                <select className="mt-2 w-full bg-transparent border-b border-cocoa/40 py-3 focus:outline-none focus:border-claret text-ink">
                  <option>A grant funder</option>
                  <option>A potential buyer</option>
                  <option>A partner or supplier</option>
                  <option>A fellow farmer</option>
                  <option>Just saying hello</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.32em] text-claret">Message</label>
                <textarea required rows={5} className="mt-2 w-full bg-transparent border-b border-cocoa/40 py-3 focus:outline-none focus:border-claret resize-none text-ink" />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-claret text-cream text-[11px] uppercase tracking-[0.3em] hover:bg-ink transition"
              >
                {sent ? "Thank you — we will be in touch" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
