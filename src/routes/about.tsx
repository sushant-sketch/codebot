import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Rocket, Target, Eye, GraduationCap, Globe2, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About · Code Bot Championship 2026" }] }),
  component: About,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setV(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
}


function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Intro */}
      <section className="mx-auto max-w-5xl px-5 text-center">
        <div className="text-[11px] tracking-[0.35em] text-[#FF7A2F]">ABOUT THE CHAMPIONSHIP</div>
        <h1 className="font-display mt-3 text-4xl sm:text-6xl font-black">India's Biggest <br /><span className="gradient-text">Student Robotics Battle</span></h1>
        <p className="mt-6 text-white/70 leading-relaxed max-w-3xl mx-auto">
          Code Bot Championship is a national-level platform built to unite the brightest student innovators in
          robotics, AI and coding. Two days, six arenas, one championship trophy — and a community that will
          shape the next decade of Indian engineering.
        </p>
      </section>

      {/* Counters */}
      <section className="mx-auto max-w-7xl px-5 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
        {[
          { v: 500, s: "+", l: "Participants", c: "#00C2E0" },
          { v: 100, s: "+", l: "Schools", c: "#FF7A2F" },
          { v: 25, s: "+", l: "Cities", c: "#B06EFF" },
          { v: 150000, s: "₹", l: "Prize Pool", c: "#FFD700", prefix: true },
        ].map((s) => (
          <div key={s.l} className="glass gradient-border rounded-2xl p-6 text-center">
            <div className="font-display text-3xl sm:text-5xl font-black" style={{ color: s.c, textShadow: `0 0 18px ${s.c}55` }}>
              {s.prefix ? <>{s.s}<Counter to={s.v} /></> : <><Counter to={s.v} />{s.s}</>}
            </div>
            <div className="mt-2 text-[11px] tracking-[0.25em] text-white/50">{s.l.toUpperCase()}</div>
          </div>
        ))}
      </section>

      {/* Vision/Mission */}
      <section className="mx-auto max-w-7xl px-5 mt-20 grid lg:grid-cols-3 gap-5">
        {[
          { icon: Eye, t: "Vision", d: "To build India's largest grassroots pipeline of robotics & AI talent — from Grade III to global stage.", c: "#00C2E0" },
          { icon: Target, t: "Mission", d: "Equip every school student with a real arena to compete, fail, iterate and master next-gen tech.", c: "#FF7A2F" },
          { icon: Rocket, t: "Why It Matters", d: "The next decade belongs to engineers who can build, code and decide together. The Championship trains that mindset early.", c: "#B06EFF" },
        ].map((x) => (
          <div key={x.t} className="glass gradient-border rounded-2xl p-7">
            <div className="h-12 w-12 rounded-xl grid place-items-center mb-4" style={{ background: `${x.c}1A`, boxShadow: `inset 0 0 0 1px ${x.c}55` }}>
              <x.icon className="h-5 w-5" style={{ color: x.c }} />
            </div>
            <h3 className="font-display text-xl font-bold" style={{ color: x.c }}>{x.t}</h3>
            <p className="mt-3 text-sm text-white/65 leading-relaxed">{x.d}</p>
          </div>
        ))}
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-5 mt-24">
        <div className="text-center mb-12">
          <div className="text-[11px] tracking-[0.35em] text-[#00C2E0]">JOURNEY</div>
          <h2 className="font-display mt-2 text-3xl sm:text-5xl font-black">From <span className="gradient-text">spark</span> to championship</h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#FF7A2F]/60 to-transparent" />
          {timeline.map((t, i) => (
            <div key={t.y} className={`relative grid sm:grid-cols-2 gap-6 mb-8 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}>
              <div className={`pl-10 sm:pl-0 ${i % 2 ? "sm:text-left sm:pl-10" : "sm:text-right sm:pr-10"}`}>
                <div className="font-display text-3xl font-black gradient-text">{t.y}</div>
              </div>
              <div className={`pl-10 sm:pl-0 ${i % 2 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                <div className="glass rounded-xl p-5 inline-block max-w-sm text-left">
                  <div className="font-display text-base font-bold text-[#FF7A2F]">{t.t}</div>
                  <div className="mt-1 text-sm text-white/65">{t.d}</div>
                </div>
              </div>
              <span className="absolute left-2.5 sm:left-1/2 sm:-translate-x-1/2 top-2 h-3 w-3 rounded-full bg-[#FF7A2F] shadow-[0_0_18px_#FF7A2F]" />
            </div>
          ))}
        </div>
      </section>

      {/* Organiser */}
      <section className="mx-auto max-w-5xl px-5 mt-20">
        <div className="glass rounded-3xl p-8 sm:p-12 text-center">
          <GraduationCap className="h-7 w-7 mx-auto mb-3 text-[#00C2E0]" />
          <div className="text-[11px] tracking-[0.35em] text-[#00C2E0]">ORGANISED BY</div>
          <h3 className="font-display mt-2 text-3xl font-black">SKD Academy</h3>
          <p className="mt-3 text-white/65 max-w-2xl mx-auto">A leading institution in Lucknow committed to STEM, innovation and future-forward education. Code Bot Championship is our flagship national initiative.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5"><Globe2 className="h-4 w-4 text-[#FF7A2F]" /> Pan-India outreach</span>
            <span className="inline-flex items-center gap-1.5"><Award className="h-4 w-4 text-[#FF7A2F]" /> 4 years of championships</span>
          </div>
        </div>
      </section>
    </div>
  );
}
