import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ParticleField } from "@/components/particle-field";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl neon-text text-[#FF7A2F]">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Signal lost</h2>
        <p className="mt-2 text-sm text-white/60">This sector of the arena doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-[#FF7A2F] px-5 py-2.5 text-sm font-semibold text-black hover:shadow-[0_0_30px_rgba(255,122,47,0.7)] transition">
            Return to base
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">System glitch detected</h1>
        <p className="mt-2 text-sm text-white/60">Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-[#FF7A2F] px-4 py-2 text-sm font-semibold text-black">Try again</button>
          <a href="/" className="rounded-md border border-white/15 px-4 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Code Bot Championship 2026 — India's Ultimate Robotics, AI & Coding Battle" },
      { name: "description", content: "Code Bot Championship 2026 · 21–22 August 2026 · ₹1.5 Lakh prize pool · 6 mega events for Grades III–XII. Robo Race, Robo Soccer, Line Follower, Bot Combat, Drone Racing, Innovation." },
      { property: "og:title", content: "Code Bot Championship 2026 — India's Ultimate Robotics, AI & Coding Battle" },
      { property: "og:description", content: "Code Bot Championship 2026 · 21–22 August 2026 · ₹1.5 Lakh prize pool · 6 mega events for Grades III–XII. Robo Race, Robo Soccer, Line Follower, Bot Combat, Drone Racing, Innovation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Code Bot Championship 2026 — India's Ultimate Robotics, AI & Coding Battle" },
      { name: "twitter:description", content: "Code Bot Championship 2026 · 21–22 August 2026 · ₹1.5 Lakh prize pool · 6 mega events for Grades III–XII. Robo Race, Robo Soccer, Line Follower, Bot Combat, Drone Racing, Innovation." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/19a4bd99-c4b8-4957-9c5e-773259c7635e/id-preview-d29c38ca--9cc78e19-8853-4756-ad7e-4069cc449dcd.lovable.app-1779965633623.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/19a4bd99-c4b8-4957-9c5e-773259c7635e/id-preview-d29c38ca--9cc78e19-8853-4756-ad7e-4069cc449dcd.lovable.app-1779965633623.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Exo+2:wght@400;600;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-[#0B0B14] text-[#F0F0FF]">
        <ParticleField />
        <SiteNav />
        <main className="relative z-10">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
