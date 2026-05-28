import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play, Star } from "lucide-react";

export const Route = createFileRoute("/exhibition")({
  head: () => ({ meta: [{ title: "Project Exhibition · Code Bot Championship 2026" }] }),
  component: Exhibition,
});

const cats = ["All", "AI Projects", "Robotics", "Student Models", "Smart Automation", "Startup Zone"] as const;

const projects = [
  { t: "Smart Crop Sentinel", cat: "AI Projects", d: "TensorFlow-Lite model that detects 14 crop diseases on a phone camera in real time.", c: "#00C2E0", img: "linear-gradient(135deg,#0c3a4d,#003355)" },
  { t: "Hex-Walker Bot", cat: "Robotics", d: "6-leg ROS-driven walker with terrain-aware gait switching.", c: "#FF7A2F", img: "linear-gradient(135deg,#3a1a06,#5c2a0a)" },
  { t: "AutoNova Home", cat: "Smart Automation", d: "Voice + gesture controlled home with Zigbee mesh and edge AI.", c: "#B06EFF", img: "linear-gradient(135deg,#2a1545,#421f6b)" },
  { t: "Pocket Insulin Reminder", cat: "Student Models", d: "Wearable BLE device that nudges patients and logs adherence.", c: "#2DC653", img: "linear-gradient(135deg,#0d3a1f,#1a5a30)" },
  { t: "DroneDrop Logistics", cat: "Startup Zone", d: "Last-mile delivery drone platform with hot-swap battery dock.", c: "#FFD700", img: "linear-gradient(135deg,#3a2e05,#5c4708)" },
  { t: "VoiceLens AAC", cat: "AI Projects", d: "Communication aid for non-verbal kids using on-device speech synthesis.", c: "#FF3D3D", img: "linear-gradient(135deg,#3a0d0d,#5c1414)" },
  { t: "Modular Reef Bot", cat: "Robotics", d: "Underwater bot monitoring artificial reefs with pH + temp sensing.", c: "#00C2E0", img: "linear-gradient(135deg,#062a3a,#0c4a5c)" },
  { t: "Solar Path Lights AI", cat: "Smart Automation", d: "Adaptive street lighting that learns pedestrian patterns.", c: "#FFD700", img: "linear-gradient(135deg,#3a2e05,#5c4708)" },
  { t: "EduRobo Kit", cat: "Startup Zone", d: "₹999 classroom robotics kit reaching 200+ schools.", c: "#B06EFF", img: "linear-gradient(135deg,#2a1545,#421f6b)" },
];

function Exhibition() {
  const [active, setActive] = useState<typeof cats[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-[11px] tracking-[0.35em] text-[#00C2E0]">PROJECT EXHIBITION</div>
          <h1 className="font-display mt-3 text-4xl sm:text-6xl font-black">Where Student <span className="gradient-text">Ideas</span> Become Real</h1>
          <p className="mt-5 text-white/65">AI projects, robotics innovations, smart automation, and startup-grade prototypes — all built by school students from across India.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition ${active === c ? "bg-[#FF7A2F] text-black shadow-[0_0_24px_rgba(255,122,47,0.6)]" : "border border-white/10 text-white/65 hover:text-white hover:border-white/30"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [grid-auto-flow:dense]">
          {filtered.map((p, i) => (
            <article key={p.t} className={`group relative rounded-2xl overflow-hidden glass glass-hover ${i % 5 === 0 ? "sm:row-span-2" : ""}`}>
              <div className={`relative ${i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`} style={{ background: p.img }}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 grid place-items-center">
                  <button className="h-14 w-14 rounded-full grid place-items-center bg-white/10 backdrop-blur border border-white/20 group-hover:scale-110 transition" style={{ boxShadow: `0 0 30px ${p.c}66` }}>
                    <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                  </button>
                </div>
                <div className="absolute top-3 left-3 text-[10px] tracking-[0.25em] px-2 py-1 rounded bg-black/40 backdrop-blur" style={{ color: p.c }}>{p.cat.toUpperCase()}</div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold" style={{ color: p.c }}>{p.t}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.d}</p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-white/40 inline-flex items-center gap-1"><Star className="h-3 w-3" fill="#FFD700" stroke="#FFD700" /> Audience pick</span>
                  <span className="text-white/60 group-hover:text-white">View →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
