import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { EVENTS } from "@/lib/events-data";
import { ArrowLeft, ArrowRight, Trophy, Users, Cpu, Timer, MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = EVENTS.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.event.name} · Code Bot Championship 2026` },
      { name: "description", content: loaderData?.event.description.slice(0, 160) },
    ],
  }),
  component: EventDetail,
});

function EventDetail() {
  const { event: e } = Route.useLoaderData();
  const c = e.color;

  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${c}33, transparent 55%)` }} />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 py-14 text-center">
          <Link to="/events" className="inline-flex items-center gap-1 text-xs tracking-[0.2em] text-white/50 hover:text-white">
            <ArrowLeft className="h-3.5 w-3.5" /> ALL EVENTS
          </Link>
          <div className="mt-4 text-[11px] tracking-[0.35em]" style={{ color: c }}>EVENT {e.no} / 06</div>
          <h1 className="font-display mt-3 text-5xl sm:text-7xl font-black" style={{ color: c, textShadow: `0 0 30px ${c}66` }}>
            {e.name}
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">{e.tagline}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[e.grades, e.team, e.format].map((p) => (
              <span key={p} className="px-3 py-1.5 rounded-full text-[11px] tracking-wider border" style={{ borderColor: `${c}66`, color: c, background: `${c}14` }}>{p}</span>
            ))}
          </div>
          <div className="mt-6 inline-flex items-center gap-4 text-xs text-white/55">
            <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />21–22 Aug 2026</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />Lucknow Arena</span>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="mx-auto max-w-6xl px-5 -mt-6">
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {[
            { l: "Arena", v: e.arena, i: MapPin },
            { l: "Rounds", v: e.rounds, i: Cpu },
            { l: "Time", v: e.time, i: Timer },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-5 text-center" style={{ boxShadow: `inset 0 0 0 1px ${c}33` }}>
              <s.i className="h-4 w-4 mx-auto mb-2" style={{ color: c }} />
              <div className="font-display text-xl sm:text-2xl font-black" style={{ color: c }}>{s.v}</div>
              <div className="text-[10px] tracking-[0.25em] text-white/45 mt-1">{s.l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-5 mt-12 grid lg:grid-cols-3 gap-5">
        <Card title="The Challenge" color={c} className="lg:col-span-2">
          <p className="text-white/75 leading-relaxed">{e.description}</p>
        </Card>

        <Card title="Robot Specs" color={c}>
          <ul className="divide-y divide-white/10">
            {e.specs.map((s) => (
              <li key={s.label} className="flex items-center justify-between py-2 text-sm">
                <span className="text-white/55">{s.label}</span>
                <span className="font-semibold" style={{ color: c }}>{s.value}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Game Rules" color={c} className="lg:col-span-2">
          <ol className="space-y-3">
            {e.rules.map((r, i) => (
              <li key={i} className="flex gap-3 text-sm text-white/75">
                <span className="font-display text-xs font-black tabular-nums shrink-0 w-6" style={{ color: c }}>{String(i + 1).padStart(2, "0")}</span>
                {r}
              </li>
            ))}
          </ol>
        </Card>

        <Card title="Your Squad" color={c}>
          <div className="space-y-3">
            {e.team_roles.map((r) => (
              <div key={r.role} className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg grid place-items-center text-lg shrink-0" style={{ background: `${c}1A`, boxShadow: `inset 0 0 0 1px ${c}55` }}>{r.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{r.role}</div>
                  <div className="text-xs text-white/55">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="How to Win 🏆" color={c} className="lg:col-span-3">
          <ul className="grid sm:grid-cols-2 gap-3">
            {e.winning.map((w, i) => (
              <li key={i} className="flex items-start gap-2 rounded-xl p-3 border border-white/10 bg-white/[0.02]">
                <Trophy className="h-4 w-4 mt-0.5 shrink-0" style={{ color: c }} />
                <span className="text-sm text-white/80">{w}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 mt-14">
        <div className="relative rounded-3xl overflow-hidden glass p-8 sm:p-12 text-center" style={{ boxShadow: `0 0 80px -20px ${c}88, inset 0 0 0 1px ${c}55` }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 50%, ${c}22, transparent 65%)` }} />
          <div className="relative">
            <Users className="h-6 w-6 mx-auto mb-3" style={{ color: c }} />
            <h3 className="font-display text-3xl sm:text-4xl font-black">Lock in your team for <span style={{ color: c }}>{e.name}</span></h3>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">Slots are filled school-by-school. Early bird closes 15 August 2026.</p>
            <Link to="/register" className="mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-black" style={{ background: c, boxShadow: `0 0 40px ${c}77` }}>
              REGISTER FOR {e.name.toUpperCase()} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ title, color, children, className = "" }: { title: string; color: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl glass p-6 ${className}`}>
      <div className="absolute top-0 left-6 right-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      <div className="text-[10px] tracking-[0.3em] mb-3" style={{ color }}>{title.toUpperCase()}</div>
      {children}
    </div>
  );
}
