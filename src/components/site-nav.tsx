import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/exhibition", label: "Exhibition" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  ];

export function SiteNav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { location } = useRouterState();

  useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
        <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-[#0B0B14]/75 border-b border-white/10" : "bg-transparent"}`}>
                <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
                        <Link to="/" className="group flex items-center gap-2.5">
                                  <img
                                                src="/codebot-logo.png"
                                                alt="Code Bot Championship"
                                                className="h-10 w-10 object-contain"
                                              />
                                  <div className="leading-tight">
                                              <div className="font-display text-[13px] font-black tracking-widest">CODE BOT</div>
                                              <div className="text-[9px] tracking-[0.3em] text-[#00C2E0]">CHAMPIONSHIP 2026</div>
                                  </div>
                        </Link>
                
                        <div className="hidden md:flex items-center gap-1">
                          {links.map((l) => {
                      const active = l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
                      return (
                                      <Link key={l.to} to={l.to} className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition ${active ? "text-[#FF7A2F]" : "text-white/70 hover:text-white"}`}>
                                        {l.label}
                                        {active && <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[#FF7A2F] to-transparent" />}
                                      </Link>
                                    );
        })}
                        </div>
                
                        <div className="hidden md:flex items-center">
                                  <Link to="/register" className="group relative inline-flex items-center gap-2 rounded-full bg-[#FF7A2F] px-5 py-2 text-[13px] font-bold text-black hover:shadow-[0_0_28px_rgba(255,122,47,0.7)] transition">
                                              REGISTER NOW
                                              <span className="block h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
                                  </Link>
                        </div>
                
                        <button onClick={() => setOpen((s) => !s)} className="md:hidden p-2 text-white" aria-label="menu">
                          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                </nav>
        
          {open && (
                  <div className="md:hidden border-t border-white/10 bg-[#0B0B14]/95 backdrop-blur-xl">
                            <div className="px-5 py-4 flex flex-col gap-1">
                              {links.map((l) => (
                                  <Link key={l.to} to={l.to} className="py-2.5 text-sm text-white/80 hover:text-[#FF7A2F]">{l.label}</Link>
                                ))}
                                        <Link to="/register" className="mt-2 inline-flex items-center justify-center rounded-full bg-[#FF7A2F] px-4 py-2.5 text-sm font-bold text-black">REGISTER NOW</Link>
                            </div>
                  </div>
              )}
        </header>
      );
}</nav>
