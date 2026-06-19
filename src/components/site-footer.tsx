import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/codebot-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-[#0A0A12]">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Code Bot Championship" className="h-8 w-8 object-contain" />
            <div className="font-display text-lg font-black gradient-text">CODE BOT 2026</div>
          </div>
          <p className="mt-3 text-sm text-white/55 leading-relaxed">India's Ultimate Robotics, AI & Coding Championship. Build. Code. Compete. Conquer.</p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/codebot26/" },
              { Icon: Youtube, href: "https://www.youtube.com/@codebot26" },
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "#" },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="h-9 w-9 grid place-items-center rounded-full border border-white/10 text-white/70 hover:text-[#FF7A2F] hover:border-[#FF7A2F] transition">
                <item.Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] text-[#00C2E0] mb-4">EXPLORE</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/events" className="hover:text-[#FF7A2F]">All Events</Link></li>
            <li><Link to="/exhibition" className="hover:text-[#FF7A2F]">Project Exhibition</Link></li>
            <li><Link to="/about" className="hover:text-[#FF7A2F]">About</Link></li>
            <li><Link to="/register" className="hover:text-[#FF7A2F]">Register</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] text-[#00C2E0] mb-4">EVENTS</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/events/$slug" params={{ slug: "robo-race" }} className="hover:text-[#FF7A2F]">Robo Race</Link></li>
            <li><Link to="/events/$slug" params={{ slug: "robo-soccer" }} className="hover:text-[#FF7A2F]">Robo Soccer</Link></li>
            <li><Link to="/events/$slug" params={{ slug: "line-follower" }} className="hover:text-[#FF7A2F]">Line Follower</Link></li>
            <li><Link to="/events/$slug" params={{ slug: "bot-combat" }} className="hover:text-[#FF7A2F]">Bot Combat</Link></li>
            <li><Link to="/events/$slug" params={{ slug: "drone-racing" }} className="hover:text-[#FF7A2F]">Drone Racing</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] text-[#00C2E0] mb-4">CONTACT</div>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[#FF7A2F]" /> SKD Academy, 2D/HS-1, Vrindavan Yojna, Lucknow – 226025</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#FF7A2F]" /> <a href="tel:+919219817505" className="hover:text-white">+91 92198 17505</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#FF7A2F]" /> <a href="mailto:codebot@gmail.com" className="hover:text-white">codebot@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">© 2026 Code Bot Championship · All rights reserved</div>
    </footer>
  );
}
