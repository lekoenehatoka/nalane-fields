import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-[10px] tracking-[0.4em] uppercase text-claret">Nalane Fields</div>
        <h1 className="mt-4 text-7xl font-display text-ink">404</h1>
        <h2 className="mt-4 text-xl text-ink/80">This path is not yet sown.</h2>
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center px-6 py-3 rounded-full bg-claret text-cream text-[11px] uppercase tracking-[0.3em] hover:bg-cocoa transition">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nalane Fields — Ethical Sheep Farming, Free State" },
      { name: "description", content: "Nalane Fields is a 100% Black woman-owned sheep farming enterprise in the Free State, founded on ethical, grass-fed practice, animal welfare, and sustainability." },
      { name: "author", content: "Nalane Fields" },
      { property: "og:title", content: "Nalane Fields — Ethical Sheep Farming" },
      { property: "og:description", content: "An ethical, grass-fed sheep farming enterprise from the Free State." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
