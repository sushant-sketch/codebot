import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube, Twitter, Linkedin, Send, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageFade, Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact · Code Bot Championship 2026" }] }),
  component: Contact,
});

const faqs = [
  { q: "Who can participate?", a: "Open to all students from Grades III to XII from any recognised school in India. Teams of 1–5 members per event." },
  { q: "What's the registration fee?", a: "Per-event fees vary. Early bird (before 15 August 2026) gets up to 20% off. Visit the Register page for the full price list." },
  { q: "Can one school enter multiple teams?", a: "Yes — a school may enter multiple teams per event. There is no limit per institution." },
  { q: "Do you provide robot kits?", a: "No. Each team brings their own hardware. We provide arenas, power, networking, judges and on-site repair tools." },
  { q: "Is accommodation arranged?", a: "We provide curated stay options with partner hotels in Lucknow at student-friendly rates. Details shared after registration." },
  { q: "Will there be a live stream?", a: "Yes — both days will stream live on our YouTube channel with multi-arena commentary." },
];

function Contact() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageFade className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="text-center mb-14 max-w-3xl mx-auto">
          <div className="text-[11px] tracking-[0.35em] text-[#FF7A2F]">CONTACT US</div>
          <h1 className="font-display mt-3 text-4xl sm:text-6xl font-black">Let's <span className="gradient-text">talk</span>.</h1>
          <p className="mt-4 text-white/65">Questions about events, sponsorship or partnerships — we're one message away.</p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back to you within 24 hours."); }}
            className="glass gradient-border rounded-2xl p-7"
          >
            <div className="text-[11px] tracking-[0.3em] text-[#00C2E0] mb-5">DROP A MESSAGE</div>
            {["Full name", "Email address", "Phone (optional)"].map((p, i) => (
              <Field key={p} label={p} type={i === 1 ? "email" : "text"} required={i !== 2} />
            ))}
            <label className="block text-[11px] tracking-[0.25em] text-white/55 mb-1.5 mt-4">MESSAGE</label>
            <textarea required rows={4} className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[#FF7A2F] focus:shadow-[0_0_24px_rgba(255,122,47,0.3)] transition resize-none" placeholder="Tell us about your school, team or partnership idea..." />
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF7A2F] px-6 py-3 text-sm font-bold text-black hover:shadow-[0_0_30px_rgba(255,122,47,0.7)] transition">
              SEND MESSAGE <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Info */}
          <div className="space-y-5">
            {[
            { icon: Phone, t: "Phone", v: "+91 76076 50100", href: "tel:+917607650100", c: "#FF7A2F" },
              { icon: Mail, t: "Email", v: "codebot2k26@gmail.com", href: "mailto:codebot2k26@gmail.com", c: "#00C2E0" },
              { icon: MapPin, t: "Venue", v: "SKD Academy, 2D/HS-1, Vrindavan Yojna, Lucknow – 226025", href: "#map", c: "#B06EFF" },
            ].map((c) => (
              <a key={c.t} href={c.href} className="block glass glass-hover rounded-2xl p-5 group">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl grid place-items-center shrink-0" style={{ background: `${c.c}1A`, boxShadow: `inset 0 0 0 1px ${c.c}55` }}>
                    <c.icon className="h-5 w-5" style={{ color: c.c }} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.3em]" style={{ color: c.c }}>{c.t.toUpperCase()}</div>
                    <div className="mt-1 text-white">{c.v}</div>
                  </div>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5">
              <div className="text-[11px] tracking-[0.3em] text-[#00C2E0] mb-3">FOLLOW US</div>
              <div className="flex gap-2">
                {[Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full border border-white/10 text-white/70 hover:text-[#FF7A2F] hover:border-[#FF7A2F] hover:shadow-[0_0_18px_rgba(255,122,47,0.5)] transition">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div id="map" className="mt-14 rounded-2xl overflow-hidden border border-white/10 aspect-[16/8] glass">
          <iframe
            title="Venue map"
            src="https://www.google.com/maps?q=SKD%20Academy%20Vrindavan%20Yojna%20Lucknow&output=embed"
            className="w-full h-full grayscale-[40%] contrast-110"
            loading="lazy"
          />
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <div className="text-[11px] tracking-[0.35em] text-[#FF7A2F]">FAQ</div>
            <h2 className="font-display mt-2 text-3xl sm:text-5xl font-black">Got questions? <span className="gradient-text">We've got answers.</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="glass rounded-xl overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="font-semibold text-white">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#FF7A2F] transition ${open === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-white/70 leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageFade>
  );
}

function Field({ label, type, required }: { label: string; type: string; required?: boolean }) {
  return (
    <div className="mt-4">
      <label className="block text-[11px] tracking-[0.25em] text-white/55 mb-1.5">{label.toUpperCase()}</label>
      <input
        type={type}
        required={required}
        className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[#FF7A2F] focus:shadow-[0_0_24px_rgba(255,122,47,0.3)] transition"
        placeholder={label}
      />
    </div>
  );
}
