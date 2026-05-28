import { Link } from "@tanstack/react-router";
import { EVENTS } from "@/lib/events-data";
import { ArrowUpRight } from "lucide-react";

export function EventGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-5 ${compact ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {EVENTS.map((e, i) => (
        <Link
          key={e.slug}
          to="/events/$slug"
          params={{ slug: e.slug }}
          className="group relative block rounded-2xl glass glass-hover overflow-hidden p-6"
          style={{ "--c": e.color } as React.CSSProperties}
        >
          <div
            className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition"
            style={{ background: e.color }}
          />
          <div className="relative flex items-start justify-between">
            <span className="text-[10px] tracking-[0.3em] text-white/40">EVENT · {e.no}</span>
            <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white group-hover:rotate-45 transition" />
          </div>
          <div className="relative mt-6 flex items-center gap-4">
            <div
              className="h-14 w-14 rounded-xl grid place-items-center text-3xl"
              style={{ background: `${e.color}1A`, boxShadow: `inset 0 0 0 1px ${e.color}55` }}
            >
              {e.icon}
            </div>
            <div>
              <h3 className="font-display text-xl font-black" style={{ color: e.color, textShadow: `0 0 18px ${e.color}66` }}>{e.name}</h3>
              <div className="text-xs text-white/50 mt-0.5">{e.grades}</div>
            </div>
          </div>
          <p className="relative mt-4 text-sm text-white/65 line-clamp-2">{e.tagline}</p>
          <div className="relative mt-5 flex flex-wrap gap-1.5">
            {[e.team, e.format, e.arena].map((p) => (
              <span key={p} className="px-2.5 py-1 rounded-full text-[10px] tracking-wider border border-white/10 text-white/60">
                {p}
              </span>
            ))}
          </div>
          <div className="relative mt-6 flex items-center justify-between text-xs">
            <span className="text-white/40">{e.rounds} rounds · {e.time}</span>
            <span className="font-semibold" style={{ color: e.color }}>View Event →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
