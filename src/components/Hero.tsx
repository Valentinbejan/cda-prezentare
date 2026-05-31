"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { author, themes } from "@/data/themes";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 pt-24 pb-16"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-slate-300"
      >
        <span className="h-2 w-2 rounded-full bg-teal-400" />
        {author.curs}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl"
      >
        Portofoliul temelor de{" "}
        <span className="bg-gradient-to-r from-teal-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
          Competențe Digitale
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
      >
        O prezentare a celor patru teme realizate până în prezent — de la
        evaluarea competențelor digitale și un chestionar propriu, până la
        analiză statistică și o bază de date relațională.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18 }}
        className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400"
      >
        <span>
          <span className="text-slate-500">Autor:</span>{" "}
          <span className="font-medium text-slate-200">{author.nume}</span>
        </span>
        <span>
          <span className="text-slate-500">Grupa:</span>{" "}
          <span className="font-medium text-slate-200">{author.grupa}</span>
        </span>
        <span>
          <span className="text-slate-500">Program:</span>{" "}
          <span className="font-medium text-slate-200">{author.program}</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.24 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {themes.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition-colors hover:border-white/25 hover:bg-white/[0.07]"
          >
            <span
              className="grid h-5 w-5 place-items-center rounded-full text-[11px] font-bold"
              style={{ backgroundColor: t.accentSoft, color: t.accent }}
            >
              {t.numar}
            </span>
            {t.eyebrow}
          </a>
        ))}
      </motion.div>

      <motion.a
        href="#tema1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-14 inline-flex w-fit items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
        Derulează pentru detalii
      </motion.a>
    </section>
  );
}
