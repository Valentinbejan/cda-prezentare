import { themes } from "@/data/themes";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Privire de ansamblu
        </h2>
        <p className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-slate-100">
          Patru teme, patru competențe digitale puse în practică
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {themes.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.08}>
            <a
              href={`#${t.id}`}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span
                  className="grid h-9 w-9 place-items-center rounded-xl text-sm font-bold"
                  style={{ backgroundColor: t.accentSoft, color: t.accent }}
                >
                  {t.numar}
                </span>
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: t.accent }}
                >
                  {t.eyebrow}
                </span>
              </div>
              <h3 className="mt-4 font-semibold leading-snug text-slate-100">
                {t.titlu}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
                {t.rezumat}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
