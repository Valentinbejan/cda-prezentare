import { Download, ExternalLink } from "lucide-react";
import type { DownloadItem } from "@/data/themes";

const labelKind: Record<DownloadItem["kind"], string> = {
  PNG: "PNG",
  PDF: "PDF",
  XLSX: "XLSX",
  ACCDB: "ACCDB",
  TXT: "TXT",
  LINK: "LINK",
};

export default function DownloadButton({
  item,
  accent,
}: {
  item: DownloadItem;
  accent: string;
}) {
  const isLink = item.kind === "LINK";
  return (
    <a
      href={item.href}
      download={!isLink}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/25 hover:bg-white/[0.07]"
    >
      {isLink ? (
        <ExternalLink className="h-4 w-4 shrink-0" style={{ color: accent }} />
      ) : (
        <Download className="h-4 w-4 shrink-0" style={{ color: accent }} />
      )}
      <span>{item.label}</span>
      <span
        className="ml-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold tracking-wide"
        style={{ backgroundColor: accent + "22", color: accent }}
      >
        {labelKind[item.kind]}
      </span>
    </a>
  );
}
