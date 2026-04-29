import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-claret text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Nalane Fields" className="h-16 w-16 rounded-full object-cover ring-1 ring-cream/30" />
              <div>
                <div style={{ fontFamily: "Forum, serif", letterSpacing: "0.22em" }} className="text-2xl">NALANE FIELDS</div>
                <div className="text-[10px] tracking-[0.4em] uppercase opacity-70">Ethical Farming · Est. 2025</div>
              </div>
            </div>
            <p className="mt-8 max-w-md font-serif italic text-cream/80 leading-relaxed text-lg">
              "To establish a thriving, ethical sheep farm that delivers premium livestock while promoting sustainable agriculture and empowering local communities."
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.32em] mb-5 opacity-80">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:opacity-70 transition">About</Link></li>
              <li><Link to="/vision" className="hover:opacity-70 transition">Vision</Link></li>
              <li><Link to="/philosophy" className="hover:opacity-70 transition">Philosophy</Link></li>
              <li><Link to="/journal" className="hover:opacity-70 transition">Journal</Link></li>
              <li><Link to="/contact" className="hover:opacity-70 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.32em] mb-5 opacity-80">Reach Us</h4>
            <ul className="space-y-3 text-sm">
              <li>Free State, South Africa</li>
              <li><a href="mailto:admin@nalanefields.co.za" className="underline-offset-4 hover:underline">admin@nalanefields.co.za</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-[0.3em] opacity-70">
          <span>© {new Date().getFullYear()} Nalane Fields (Pty) Ltd</span>
          <span>Reg. 2025 / 535868 / 07 · 100% Black Woman-Owned · BEE Compliant</span>
        </div>
      </div>
    </footer>
  );
}