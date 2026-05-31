import {
  ExternalLink,
  Database,
  KeyRound,
  ListChecks,
  Sigma,
  ArrowRight,
} from "lucide-react";
import type { Theme, DbTable } from "@/data/themes";
import Reveal from "./Reveal";
import Gallery from "./Gallery";
import DownloadButton from "./DownloadButton";

export default function ThemeSection({ theme }: { theme: Theme }) {
  return (
    <section
      id={theme.id}
      className="relative scroll-mt-20 border-t border-white/[0.06] py-20"
    >
      {/* linie de accent în partea de sus a secțiunii */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.accent}55, transparent)`,
        }}
      />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="flex items-center gap-4">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-lg font-bold"
              style={{ backgroundColor: theme.accentSoft, color: theme.accent }}
            >
              {theme.numar}
            </span>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: theme.accent }}
              >
                Tema {theme.numar} · {theme.eyebrow}
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
                {theme.titlu}
              </h2>
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400">
            {theme.rezumat}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {theme.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Conținut specific pe temă */}
        {theme.screenshots && (
          <Reveal delay={0.1} className="mt-10">
            <Gallery screenshots={theme.screenshots} accent={theme.accent} />
          </Reveal>
        )}

        {theme.quiz && <QuizContent theme={theme} />}
        {theme.stats && <StatsContent theme={theme} />}
        {theme.db && <DbContent theme={theme} />}

        {/* Descărcări */}
        <Reveal delay={0.15} className="mt-10">
          <div className="flex flex-wrap gap-3">
            {theme.downloads.map((d) => (
              <DownloadButton key={d.href + d.label} item={d} accent={theme.accent} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function QuizContent({ theme }: { theme: Theme }) {
  if (!theme.quiz) return null;
  return (
    <Reveal delay={0.1} className="mt-10">
      {theme.formUrl && (
        <a
          href={theme.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[#0b0f1a] transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: theme.accent }}
        >
          <ExternalLink className="h-4 w-4" />
          Deschide chestionarul în Google Forms
        </a>
      )}
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-300">
          <ListChecks className="h-4 w-4" style={{ color: theme.accent }} />
          Cele 10 întrebări și tipurile de răspuns
        </div>
        <ol className="divide-y divide-white/[0.06]">
          {theme.quiz.map((q, i) => (
            <li
              key={i}
              className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="flex gap-3">
                <span className="text-sm font-semibold text-slate-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm leading-relaxed text-slate-200">{q.text}</p>
                  <p className="mt-1 text-xs text-slate-500">{q.domain}</p>
                </div>
              </div>
              <span
                className="h-fit shrink-0 self-start whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium sm:ml-4"
                style={{ backgroundColor: theme.accentSoft, color: theme.accent }}
              >
                {q.type}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}

function StatsContent({ theme }: { theme: Theme }) {
  if (!theme.stats) return null;
  return (
    <Reveal delay={0.1} className="mt-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {theme.stats.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
          >
            <div className="flex items-center gap-2">
              <Sigma className="h-4 w-4" style={{ color: theme.accent }} />
              <h3 className="font-semibold text-slate-100">{s.name}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {s.description}
            </p>
            <code
              className="mt-4 block rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-xs"
              style={{ color: theme.accent }}
            >
              {s.formula}
            </code>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function DbTableCard({ table, icon }: { table: DbTable; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-slate-100">{table.name}</h3>
      </div>
      <p className="mt-1 text-xs text-slate-500">{table.role}</p>
      <ul className="mt-4 space-y-1.5">
        {table.fields.map((f) => (
          <li
            key={f}
            className="rounded-lg border border-white/[0.06] bg-black/20 px-3 py-1.5 font-mono text-xs text-slate-300"
          >
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DbContent({ theme }: { theme: Theme }) {
  if (!theme.db) return null;
  const { tables, relation, objects } = theme.db;
  const [principal, secundar] = tables;
  return (
    <Reveal delay={0.1} className="mt-10">
      <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <DbTableCard
          table={principal}
          icon={<KeyRound className="h-4 w-4" style={{ color: theme.accent }} />}
        />
        <div className="flex items-center justify-center gap-2 lg:flex-col lg:gap-1">
          <span className="text-lg font-bold" style={{ color: theme.accent }}>
            1 : N
          </span>
          <ArrowRight className="h-5 w-5 text-slate-500 lg:rotate-90" />
        </div>
        <DbTableCard
          table={secundar}
          icon={<Database className="h-4 w-4" style={{ color: theme.accent }} />}
        />
      </div>

      <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-slate-400">
        <span className="font-medium text-slate-300">Relația 1:N — </span>
        {relation}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {objects.map((o) => (
          <div
            key={o.name}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
          >
            <h3 className="font-semibold text-slate-100">{o.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {o.description}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
