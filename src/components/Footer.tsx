import { Mail, GraduationCap } from "lucide-react";
import { author, themes } from "@/data/themes";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <GraduationCap className="h-5 w-5 text-teal-400" />
              {author.curs}
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              Site de prezentare a temelor realizate la cursul de Competențe
              Digitale Avansate.
            </p>
            <a
              href={`mailto:${author.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {author.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            <div className="col-span-2 mb-1 font-medium text-slate-300">Teme</div>
            {themes.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="text-slate-400 transition-colors hover:text-white"
              >
                {t.numar}. {t.eyebrow}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {author.nume} · Grupa {author.grupa}
          </span>
          <span>{author.program}</span>
        </div>
      </div>
    </footer>
  );
}
