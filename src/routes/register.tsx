import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EVENTS } from "@/lib/events-data";
import { CheckCircle2, QrCode, Sparkles, Trophy, Users, X } from "lucide-react";
import { PageFade, Reveal } from "@/components/reveal";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Register · Code Bot Championship 2026" }] }),
  component: Register,
});

function Register() {
  const [type, setType] = useState<"individual" | "team">("team");
  const [selected, setSelected] = useState<string[]>([EVENTS[0].slug]);
  const [done, setDone] = useState(false);

  const toggle = (slug: string) =>
    setSelected((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));

  return (
    <PageFade className="pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-5">
        {/* Early bird banner */}
        <Reveal className="relative overflow-hidden rounded-2xl glass mb-8 p-4 sm:p-5 flex items-center gap-3 flex-wrap" style={{ boxShadow: "inset 0 0 0 1px rgba(255,215,0,0.4)" }}>
          <Sparkles className="h-5 w-5 text-[#FFD700] animate-pulse" />
          <div className="text-sm">
            <span className="font-bold text-[#FFD700]">EARLY BIRD OPEN</span>
            <span className="text-white/65 ml-2">Save up to 20% on team fees · Ends 15 August 2026</span>
          </div>
          <div className="ml-auto text-[10px] tracking-[0.3em] text-white/40">LIMITED SEATS</div>
        </Reveal>

        <Reveal className="text-center mb-10" delay={0.05}>
          <div className="text-[11px] tracking-[0.35em] text-[#FF7A2F]">REGISTRATION</div>
          <h1 className="font-display mt-3 text-4xl sm:text-6xl font-black">Lock in your <span className="gradient-text">spot</span></h1>
          <p className="mt-4 text-white/65 max-w-xl mx-auto">A simple, 3-step process. Pay by UPI or card. Get instant confirmation.</p>
        </Reveal>

        <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-6">
          {/* Type */}
          <Section title="01 · Registration Type">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { v: "individual", t: "Individual", d: "Sign up as a solo participant (eligible events only)", icon: Users },
                { v: "team", t: "Team", d: "Most events — register 1 to 5 members", icon: Trophy },
              ].map((o) => (
                <button
                  key={o.v}
                  type="button"
                  onClick={() => setType(o.v as typeof type)}
                  className={`text-left rounded-xl p-5 border transition ${type === o.v ? "border-[#FF7A2F] bg-[#FF7A2F]/10 shadow-[0_0_30px_rgba(255,122,47,0.25)]" : "border-white/10 bg-white/[0.02] hover:border-white/30"}`}
                >
                  <o.icon className="h-5 w-5 mb-2" style={{ color: type === o.v ? "#FF7A2F" : "white" }} />
                  <div className="font-semibold">{o.t}</div>
                  <div className="text-xs text-white/55 mt-0.5">{o.d}</div>
                </button>
              ))}
            </div>
          </Section>

          {/* Participant info */}
          <Section title="02 · Participant Details">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label={type === "team" ? "Team Captain Name" : "Full Name"} required />
              <Input label="School / Institution" required />
              <Input label="Grade" required />
              <Input label="City" required />
              <Input label="Email" type="email" required />
              <Input label="Phone" type="tel" required />
            </div>
            {type === "team" && (
              <div className="mt-4">
                <Input label="Number of Team Members (1–5)" type="number" min={1} max={5} required defaultValue={3} />
              </div>
            )}
          </Section>

          {/* Events */}
          <Section title="03 · Select Events">
            <div className="grid sm:grid-cols-2 gap-3">
              {EVENTS.map((e) => {
                const on = selected.includes(e.slug);
                return (
                  <button
                    key={e.slug}
                    type="button"
                    onClick={() => toggle(e.slug)}
                    className={`text-left rounded-xl p-4 border transition flex items-center gap-3 ${on ? "bg-white/[0.05]" : "bg-white/[0.02] hover:bg-white/[0.04]"}`}
                    style={{ borderColor: on ? e.color : "rgba(255,255,255,0.1)", boxShadow: on ? `0 0 26px ${e.color}33` : "none" }}
                  >
                    <span className="h-10 w-10 rounded-lg grid place-items-center text-xl shrink-0" style={{ background: `${e.color}1A` }}>{e.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{e.name}</div>
                      <div className="text-[11px] text-white/50">{e.grades} · {e.team}</div>
                    </div>
                    <span className={`h-5 w-5 rounded-md border grid place-items-center ${on ? "" : "border-white/20"}`} style={{ background: on ? e.color : "transparent", borderColor: on ? e.color : undefined }}>
                      {on && <CheckCircle2 className="h-4 w-4 text-black" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </Section>

          {/* Payment */}
          <Section title="04 · Payment">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-xl p-5 bg-white/[0.03] border border-white/10">
                <div className="text-xs text-white/55 mb-2">Order summary</div>
                <div className="space-y-2 text-sm">
                  <Row k="Base fee" v="₹499" />
                  <Row k={`Events selected (${selected.length})`} v={`₹${selected.length * 299}`} />
                  <Row k="Early bird discount" v="-20%" c="#FFD700" />
                  <div className="border-t border-white/10 mt-3 pt-3">
                    <Row k="Total" v={`₹${Math.round((499 + selected.length * 299) * 0.8)}`} c="#FF7A2F" bold />
                  </div>
                </div>
              </div>
              <div className="rounded-xl p-5 bg-white/[0.03] border border-white/10 text-center">
                <div className="text-xs text-white/55 mb-3">Pay via UPI</div>
                <div className="mx-auto h-32 w-32 rounded-lg bg-white grid place-items-center">
                  <QrCode className="h-24 w-24 text-black" />
                </div>
                <div className="mt-3 text-xs text-white/55">UPI ID: <span className="text-white">codebot@upi</span></div>
              </div>
            </div>
          </Section>

          {/* Terms */}
          <label className="flex items-start gap-3 text-sm text-white/70">
            <input type="checkbox" required className="mt-1 accent-[#FF7A2F]" />
            <span>I agree to the <a className="text-[#00C2E0] hover:underline" href="#">Terms & Conditions</a>, code of conduct, and consent to event photography/videography for promotional use.</span>
          </label>

          <button type="submit" className="w-full rounded-full bg-[#FF7A2F] py-4 font-bold text-black text-sm hover:shadow-[0_0_50px_rgba(255,122,47,0.7)] transition">
            COMPLETE REGISTRATION
          </button>
        </form>
      </div>

      {/* Success modal */}
      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/70 backdrop-blur p-4"
            onClick={() => setDone(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 18, stiffness: 240 }}
              className="relative max-w-md w-full glass rounded-3xl p-8 text-center"
              style={{ boxShadow: "0 0 80px rgba(255,122,47,0.5)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setDone(false)} className="absolute top-4 right-4 h-8 w-8 grid place-items-center rounded-full bg-white/5 hover:bg-white/10"><X className="h-4 w-4" /></button>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", damping: 12 }}
                className="mx-auto h-16 w-16 rounded-full grid place-items-center bg-[#FF7A2F]/20"
                style={{ boxShadow: "0 0 30px rgba(255,122,47,0.6)" }}
              >
                <CheckCircle2 className="h-8 w-8 text-[#FF7A2F]" />
              </motion.div>
              <h3 className="font-display mt-5 text-2xl font-black">Welcome to <span className="gradient-text">the arena!</span></h3>
              <p className="mt-3 text-sm text-white/65">Your registration is confirmed. A confirmation email + hall ticket will reach you within 24 hours.</p>
              <button onClick={() => setDone(false)} className="mt-6 inline-flex rounded-full bg-[#FF7A2F] text-black px-6 py-3 font-bold text-sm hover:scale-105 transition">Got it</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageFade>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass gradient-border rounded-2xl p-6 sm:p-7">
      <div className="text-[11px] tracking-[0.3em] text-[#00C2E0] mb-4">{title}</div>
      {children}
    </div>
  );
}
function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-[0.25em] text-white/55 mb-1.5">{label.toUpperCase()}</span>
      <input {...rest} className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[#FF7A2F] focus:shadow-[0_0_24px_rgba(255,122,47,0.3)] transition" />
    </label>
  );
}
function Row({ k, v, c, bold }: { k: string; v: string; c?: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white/65">{k}</span>
      <span className={bold ? "font-display text-lg font-black" : "font-medium"} style={{ color: c || "white" }}>{v}</span>
    </div>
  );
}
