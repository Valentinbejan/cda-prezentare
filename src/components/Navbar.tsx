"use client";

import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";
import { themes } from "@/data/themes";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#060914]/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <GraduationCap className="h-5 w-5 text-teal-400" />
          <span>CDA</span>
          <span className="hidden text-slate-500 sm:inline">· Portofoliu</span>
        </a>
        <ul className="flex items-center gap-1 text-sm">
          {themes.map((t) => (
            <li key={t.id}>
              <a
                href={`#${t.id}`}
                className="rounded-lg px-2.5 py-1.5 text-slate-300 transition-colors hover:bg-white/5 hover:text-white sm:px-3"
              >
                <span className="sm:hidden">T{t.numar}</span>
                <span className="hidden sm:inline">Tema {t.numar}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
