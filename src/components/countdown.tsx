import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-22T09:00:00+05:30").getTime();

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  if (now === null) {
    return <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto" />;
  }
  const diff = Math.max(0, TARGET - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  const items = [
    { v: d, l: "DAYS" },
    { v: h, l: "HOURS" },
    { v: m, l: "MINUTES" },
    { v: s, l: "SECONDS" },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
      {items.map((it) => (
        <div key={it.l} className="glass gradient-border rounded-xl py-4 px-2 text-center relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF7A2F] to-transparent" />
          <div className="font-display text-3xl sm:text-5xl font-black tabular-nums text-white neon-text">{String(it.v).padStart(2, "0")}</div>
          <div className="mt-2 text-[10px] sm:text-xs tracking-[0.3em] text-[#00C2E0]">{it.l}</div>
        </div>
      ))}
    </div>
  );
}
