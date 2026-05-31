"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import type { Screenshot } from "@/data/themes";

// Galerie de screenshot-uri cu lightbox full-screen la click.
export default function Gallery({
  screenshots,
  accent,
}: {
  screenshots: Screenshot[];
  accent: string;
}) {
  const [active, setActive] = useState<Screenshot | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {screenshots.map((shot) => (
          <figure key={shot.src} className="group">
            <button
              type="button"
              onClick={() => setActive(shot)}
              className="relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] focus:outline-none focus-visible:ring-2"
              style={{ outlineColor: accent }}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-white"
                  style={{ backgroundColor: accent + "cc" }}
                >
                  <ZoomIn className="h-4 w-4" /> Mărește
                </span>
              </span>
            </button>
            <figcaption className="mt-2.5 text-sm text-slate-400">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Închide"
              className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[88vh] w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                className="max-h-[88vh] w-auto rounded-xl object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
