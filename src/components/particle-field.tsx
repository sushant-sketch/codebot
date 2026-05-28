import { useEffect, useRef } from "react";

/** Fixed full-viewport particle / grid background. GPU-friendly canvas. */
export function ParticleField() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * DPR; canvas.height = h * DPR; ctx.scale(DPR, DPR);

    const count = Math.min(90, Math.floor((w * h) / 22000));
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.4,
      c: Math.random() > 0.5 ? "#FF7A2F" : "#00C2E0",
    }));

    const onMove = (e: MouseEvent) => { mouse.current.x = e.clientX; mouse.current.y = e.clientY; };
    const onResize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * DPR; canvas.height = h * DPR;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(1,0,0,1,0,0); ctx.scale(DPR, DPR);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      // mouse glow
      const grd = ctx.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, 260);
      grd.addColorStop(0, "rgba(255,122,47,0.10)");
      grd.addColorStop(1, "rgba(255,122,47,0)");
      ctx.fillStyle = grd; ctx.fillRect(0, 0, w, h);

      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.current.x; const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 140) { p.x += dx / dist * 0.6; p.y += dy / dist * 0.6; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c; ctx.globalAlpha = 0.6; ctx.fill();
      }
      // connect
      ctx.globalAlpha = 1;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i], b = parts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < 120) {
            ctx.strokeStyle = `rgba(255,122,47,${(1 - d/120) * 0.15})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-40" />
      <div className="pointer-events-none fixed inset-0 -z-10 radial-orange" />
      <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10" style={{ width: "100vw", height: "100vh" }} />
    </>
  );
}
