import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Countdown } from "@/components/countdown";
import { EventGrid } from "@/components/event-grid";
import { ArrowRight, Trophy, Users, Cpu, Sparkles, Calendar, MapPin, Quote, ShieldCheck, Rocket, Cog } from "lucide-react";
import logoAsset from "@/assets/codebot-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Code Bot Championship 2026 — India's Ultimate Robotics, AI & Coding Battle" },
      { name: "description", content: "22 August 2026 · ₹1.5 Lakh prize pool · 6 mega events for Grades III–XII. Robo Race, Robo Soccer, Line Follower, Bot Combat, Drone Racing, Innovation." },
    ],
  }),
  component: Home,
});

const stats = [
  { v: "₹1.5 L+", l: "Prize Pool", icon: Trophy, c: "#FFD700" },
  { v: "1000+", l: "Participants", icon: Users, c: "#00C2E0" },
  { v: "6", l: "Mega Events", icon: Cpu, c: "#FF7A2F" },
  { v: "National", l: "Championship", icon: Sparkles, c: "#B06EFF" },
];

const partners = ["SKD Academy", "Robotech", "CodeForge", "DroneIndia", "AI4Schools", "MakerLab", "EduBots", "FutureTech"];

const why = [
  { icon: Rocket, t: "National Stage", d: "Compete with India's brightest student innovators on one cinematic arena.", c: "#FF7A2F" },
  { icon: Trophy, t: "₹1.5 Lakh Prizes", d: "Cash, trophies, certificates and a rolling championship trophy for top schools.", c: "#FFD700" },
  { icon: Cog, t: "Real Engineering", d: "Build, code, race and battle — every event is hands-on, judge-evaluated.", c: "#00C2E0" },
  { icon: ShieldCheck, t: "School-safe", d: "Strict safety protocols, refereed matches and inclusive grade-based divisions.", c: "#2DC653" },
  { icon: Zap, t: "Industry Mentors", d: "Workshops & on-arena mentoring from roboticists, AI engineers and startup founders.", c: "#B06EFF" },
  { icon: Sparkles, t: "Launch Your Future", d: "Top innovators showcased at national tech summits and partner accelerators.", c: "#FF3D3D" },
];

const testimonials = [
  { n: "Aarav, Grade IX", s: "Best two days of my school life. The arena lights, the bots, the speed — it felt like a real championship.", e: "Lucknow" },
  { n: "Diya, Grade XI", s: "Our line-follower team won gold last year. The mentors helped me pick robotics for engineering.", e: "Delhi" },
  { n: "Mr. Singh, Coach", s: "Unmatched production value. Every student returned charged-up and ready to build more.", e: "Kanpur" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 radial-orange pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        {/* floating decorative robots */}
        <div className="pointer-events-none absolute top-32 left-6 sm:left-20 animate-float opacity-70" style={{ animationDelay: "-2s" }}>
          <RoboArm />
        </div>
        <div className="pointer-events-none absolute top-40 right-6 sm:right-20 animate-float opacity-70" style={{ animationDelay: "-4s" }}>
          <Drone />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF7A2F]/40 bg-[#FF7A2F]/10 px-4 py-1.5 text-[11px] tracking-[0.3em] text-[#FF7A2F]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A2F] animate-pulse" />
              INDIA'S BIGGEST STUDENT ROBOTICS BATTLE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display mt-6 text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight"
          >
            <span className="block neon-text text-white">CODE BOT</span>
            <span className="block mt-2 gradient-text">CHAMPIONSHIP <span className="text-[#FF7A2F]">2026</span></span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }} className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            India's Ultimate Robotics, AI & Coding Championship. <br className="hidden sm:block" />
            <span className="text-white">Build. Code. Compete. Conquer.</span>
          </motion.p>

          <div className="mt-6 inline-flex items-center gap-4 text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-[#FF7A2F]" /> 22 August 2026</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-[#00C2E0]" /> Lucknow, India</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/register" className="group relative inline-flex items-center gap-2 rounded-full bg-[#FF7A2F] px-7 py-3.5 text-sm font-bold text-black hover:shadow-[0_0_50px_rgba(255,122,47,0.7)] transition">
              REGISTER NOW
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              <span className="absolute inset-0 rounded-full ring-1 ring-white/30 group-hover:ring-white/60 transition" />
            </Link>
            <Link to="/events" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-[#00C2E0] hover:text-[#00C2E0] transition backdrop-blur">
              EXPLORE EVENTS
            </Link>
          </div>

          <div className="mt-12">
            <div className="text-[11px] tracking-[0.3em] text-white/40 mb-4">EVENT STARTS IN</div>
            <Countdown />
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass gradient-border rounded-2xl p-5 text-left relative overflow-hidden"
              >
                <s.icon className="h-5 w-5 mb-3" style={{ color: s.c }} />
                <div className="font-display text-2xl sm:text-3xl font-black" style={{ color: s.c, textShadow: `0 0 16px ${s.c}55` }}>{s.v}</div>
                <div className="text-[11px] tracking-[0.2em] text-white/50 mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee partners */}
      <section className="relative py-8 border-y border-white/10 overflow-hidden bg-[#0A0A12]">
        <div className="flex gap-12 animate-[shimmer_30s_linear_infinite] whitespace-nowrap" style={{ animation: "drift 40s linear infinite" }}>
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="text-xs sm:text-sm tracking-[0.4em] text-white/30 hover:text-[#00C2E0] transition">
              ◆ {p.toUpperCase()}
            </span>
          ))}
        </div>
      </section>

      {/* EVENTS preview */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-[11px] tracking-[0.35em] text-[#00C2E0]">6 CHAMPIONSHIP EVENTS</div>
              <h2 className="font-display mt-2 text-3xl sm:text-5xl font-black">
                Enter the <span className="gradient-text">Arena</span> of Innovation
              </h2>
            </div>
            <Link to="/events" className="text-sm text-white/70 hover:text-[#FF7A2F] inline-flex items-center gap-1">
              View all events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <EventGrid />
        </div>
      </section>

      {/* Why participate */}
      <section className="relative py-24 bg-[#0A0A12] border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[11px] tracking-[0.35em] text-[#FF7A2F]">WHY PARTICIPATE</div>
            <h2 className="font-display mt-2 text-3xl sm:text-5xl font-black">Where Future Innovators <br /> Become <span className="gradient-text">Champions</span></h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((w, i) => (
              <motion.div
                key={w.t}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group relative rounded-2xl glass glass-hover p-6"
              >
                <div className="h-12 w-12 rounded-xl grid place-items-center mb-4" style={{ background: `${w.c}1A`, boxShadow: `inset 0 0 0 1px ${w.c}55` }}>
                  <w.icon className="h-5 w-5" style={{ color: w.c }} />
                </div>
                <h3 className="font-display text-lg font-bold mb-1.5" style={{ color: w.c }}>{w.t}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{w.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / hologram */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 radial-cyan pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] tracking-[0.35em] text-[#00C2E0]">EVENT HIGHLIGHTS</div>
            <h2 className="font-display mt-2 text-3xl sm:text-5xl font-black">One Day. <br />Six arenas. <br /><span className="gradient-text">Many Champions.</span></h2>
            <p className="mt-5 text-white/65 max-w-lg leading-relaxed">From neon-lit drone gates to caged combat arenas, every event is engineered for spectacle. Live commentary, leaderboards, replay screens, and industry judges turn every minute into a moment.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/75">
              {["Cinematic LED-lit arenas", "Live leaderboards & jumbotron replays", "FPV drone feed on main stage", "Industry mentor pit-stops", "On-site code labs & repair stations"].map((x) => (
                <li key={x} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF7A2F] shadow-[0_0_10px_#FF7A2F]" />{x}</li>
              ))}
            </ul>
          </div>
          <HologramPanel />
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 border-y border-white/10 bg-[#0A0A12]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[0.35em] text-[#FF7A2F]">STUDENT VOICES</div>
            <h2 className="font-display mt-2 text-3xl sm:text-5xl font-black">The buzz from <span className="gradient-text">last year's</span> arena</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="glass rounded-2xl p-6 relative">
                <Quote className="h-5 w-5 text-[#FF7A2F] mb-3" />
                <p className="text-white/80 text-[15px] leading-relaxed">"{t.s}"</p>
                <div className="mt-5 text-xs text-white/50">
                  <div className="text-white/90 font-semibold">{t.n}</div>
                  <div>{t.e}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28">
        <div className="absolute inset-0 radial-orange pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <h2 className="font-display text-4xl sm:text-6xl font-black">READY TO <span className="gradient-text">COMPETE?</span></h2>
          <p className="mt-5 text-white/65 text-lg">Registrations open · Seats are limited · Early bird ends 15 August 2026</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/register" className="inline-flex items-center gap-2 rounded-full bg-[#FF7A2F] px-8 py-4 font-bold text-black hover:shadow-[0_0_60px_rgba(255,122,47,0.7)] transition">
              REGISTER YOUR TEAM <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold hover:border-[#00C2E0] hover:text-[#00C2E0] transition">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===== Decorative SVG visuals ===== */
function RoboArm() {
  return (
    <svg width="120" height="160" viewBox="0 0 120 160" className="opacity-90">
      <defs>
        <linearGradient id="ra" x1="0" x2="1">
          <stop offset="0" stopColor="#FF7A2F" />
          <stop offset="1" stopColor="#FF3D3D" />
        </linearGradient>
      </defs>
      <rect x="35" y="130" width="50" height="20" rx="3" fill="url(#ra)" />
      <rect x="55" y="60" width="10" height="75" fill="url(#ra)" />
      <rect x="40" y="40" width="40" height="14" rx="4" fill="url(#ra)" />
      <circle cx="60" cy="47" r="6" fill="#0B0B14" stroke="#00C2E0" strokeWidth="1.5" />
      <rect x="38" y="22" width="44" height="6" rx="2" fill="#00C2E0" opacity="0.7" />
      <circle cx="60" cy="25" r="2" fill="#FFD700">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
function Drone() {
  return (
    <svg width="130" height="100" viewBox="0 0 130 100" className="opacity-90">
      <defs>
        <linearGradient id="dr" x1="0" x2="1">
          <stop offset="0" stopColor="#00C2E0" />
          <stop offset="1" stopColor="#B06EFF" />
        </linearGradient>
      </defs>
      <ellipse cx="65" cy="55" rx="22" ry="10" fill="url(#dr)" />
      <line x1="35" y1="35" x2="95" y2="75" stroke="#666" strokeWidth="2" />
      <line x1="95" y1="35" x2="35" y2="75" stroke="#666" strokeWidth="2" />
      {[[30,30],[100,30],[30,80],[100,80]].map(([cx,cy],i)=>(
        <g key={i}><circle cx={cx} cy={cy} r="12" fill="none" stroke="#00C2E0" strokeOpacity="0.4" strokeWidth="1" /><ellipse cx={cx} cy={cy} rx="14" ry="2" fill="#00C2E0" opacity="0.6"><animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="0.4s" repeatCount="indefinite" /></ellipse></g>
      ))}
      <circle cx="65" cy="55" r="3" fill="#FFD700"><animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" /></circle>
    </svg>
  );
}
function HologramPanel() {
  return (
    <div className="relative aspect-[4/3] rounded-3xl glass cyan-border p-6 overflow-hidden scanlines">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] text-[#00C2E0]">◉ LIVE FEED · ARENA 03</div>
      <div className="absolute top-4 right-4 text-[10px] tracking-[0.2em] text-white/50 flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> REC</div>

      <div className="absolute inset-x-0 bottom-0 p-5 grid grid-cols-3 gap-3">
        {[
          { l: "LAP", v: "02 / 03", c: "#FF7A2F" },
          { l: "TIME", v: "00:47.32", c: "#00C2E0" },
          { l: "GAP", v: "+0.18s", c: "#FFD700" },
        ].map((s) => (
          <div key={s.l} className="rounded-lg border border-white/10 bg-black/40 p-3">
            <div className="text-[9px] tracking-[0.25em] text-white/40">{s.l}</div>
            <div className="font-display text-lg font-black mt-1" style={{ color: s.c }}>{s.v}</div>
          </div>
        ))}
      </div>

      {/* hologram bot */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative animate-float">
          <RoboArm />
          <div className="absolute inset-0 -z-10 rounded-full bg-[#00C2E0] blur-3xl opacity-40" />
        </div>
      </div>
      {/* corner ticks */}
      {["top-2 left-2","top-2 right-2","bottom-2 left-2","bottom-2 right-2"].map((p) => (
        <span key={p} className={`absolute ${p} h-3 w-3 border-[#00C2E0]`} style={{ borderTopWidth: p.includes("top")?"2px":0, borderBottomWidth: p.includes("bottom")?"2px":0, borderLeftWidth: p.includes("left")?"2px":0, borderRightWidth: p.includes("right")?"2px":0 }} />
      ))}
    </div>
  );
}
