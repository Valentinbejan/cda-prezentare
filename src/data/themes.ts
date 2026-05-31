// Sursa unică de adevăr pentru conținutul site-ului de prezentare CDA.
// Toate secțiunile temelor se generează din acest fișier.

export type AnswerType =
  | "Răspuns scurt"
  | "Paragraf"
  | "O singură variantă"
  | "Casete de selectare"
  | "Listă derulantă"
  | "Scară liniară"
  | "Grilă variante";

export type DownloadItem = {
  label: string;
  href: string;
  kind: "PNG" | "PDF" | "XLSX" | "ACCDB" | "TXT" | "LINK";
};

export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export type QuizQuestion = {
  text: string;
  type: AnswerType;
  domain: string;
};

export type StatMetric = {
  name: string;
  formula: string;
  description: string;
};

export type DbTable = {
  name: string;
  role: string;
  fields: string[];
};

export type Theme = {
  id: string; // ancora din URL (#tema1 ...)
  numar: number;
  eyebrow: string;
  titlu: string;
  rezumat: string;
  accent: string; // culoare accent (hex)
  accentSoft: string; // variantă slabă pentru fundaluri
  tags: string[];
  screenshots?: Screenshot[];
  downloads: DownloadItem[];
  // Conținut specific pe temă
  quiz?: QuizQuestion[];
  formUrl?: string;
  stats?: StatMetric[];
  db?: {
    tables: DbTable[];
    relation: string;
    objects: { name: string; description: string }[];
  };
};

export const author = {
  nume: "Bejan Valentin",
  grupa: "TIA",
  curs: "Competențe Digitale Avansate (CDA)",
  program: "Master, Anul I — 2025–2026",
  email: "valentinbejan2001@gmail.com",
  github: "https://github.com/", // se completează cu URL-ul real al repo-ului
};

export const themes: Theme[] = [
  {
    id: "tema1",
    numar: 1,
    eyebrow: "Evaluare",
    titlu: "Evaluarea competențelor digitale",
    rezumat:
      "Completarea testului și a chestionarelor din referatele de laborator, pe baza cadrului european DigComp. Rezultatul evaluării a fost un profil digital „Advanced”, sintetizat într-un raport cu diagrama radar a celor 16 subdomenii grupate în 5 arii de competență.",
    accent: "#2dd4bf", // teal
    accentSoft: "rgba(45, 212, 191, 0.12)",
    tags: ["DigComp", "Test de competențe", "Raport & feedback"],
    screenshots: [
      {
        src: "/tema1/result.png",
        alt: "Rezultatul testului de competențe digitale — profil Advanced",
        width: 654,
        height: 888,
        caption: "Rezultatul testului: profil digital „Advanced” pe toate ariile.",
      },
      {
        src: "/tema1/report.png",
        alt: "Raport cu diagrama radar a celor 16 subdomenii ale competențelor digitale",
        width: 874,
        height: 927,
        caption: "Raport personalizat cu diagrama radar a celor 16 subdomenii.",
      },
    ],
    downloads: [
      { label: "Rezultat test (PNG)", href: "/tema1/result.png", kind: "PNG" },
      { label: "Raport competențe (PNG)", href: "/tema1/report.png", kind: "PNG" },
    ],
  },
  {
    id: "tema2",
    numar: 2,
    eyebrow: "Chestionar",
    titlu: "Chestionar de evaluare a competențelor digitale",
    rezumat:
      "Chestionar propriu realizat în Google Forms, cu 10 întrebări din subdomenii reprezentative ale diagramei competențelor digitale. Acoperă toate tipurile de răspuns cerute (scurt, paragraf, o variantă, casete de selectare, listă derulantă, scară liniară, grilă), acordă câte un punct pentru răspunsul corect, afișează punctajul final și permite reluarea testului.",
    accent: "#fb923c", // orange
    accentSoft: "rgba(251, 146, 60, 0.12)",
    tags: ["Google Forms", "10 întrebări", "Auto-evaluare"],
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSeJ9859DJN8SvTPrw3cALDzZpVQbHP0L5URGLoKc1Xt0kUOSw/viewform",
    quiz: [
      {
        text: "Care este termenul general folosit pentru stocarea fișierelor pe servere externe accesibile prin internet?",
        type: "Răspuns scurt",
        domain: "Informații & date",
      },
      {
        text: "Descrieți, în 2-3 propoziții, ce reprezintă autentificarea în doi pași (2FA) și de ce este esențială.",
        type: "Paragraf",
        domain: "Siguranță",
      },
      {
        text: "Termenul care definește totalitatea informațiilor lăsate online de un utilizator se numește:",
        type: "O singură variantă",
        domain: "Identitate digitală",
      },
      {
        text: "Ce operator de căutare folosiți în Google pentru a găsi exact o frază specifică?",
        type: "O singură variantă",
        domain: "Informații & date",
      },
      {
        text: "Selectați platformele recunoscute pentru apeluri video și colaborare la distanță.",
        type: "Casete de selectare",
        domain: "Comunicare & colaborare",
      },
      {
        text: "Pe o scară de la 1 la 5, cât de mult vă afectează lumina albastră a ecranelor calitatea somnului?",
        type: "Scară liniară",
        domain: "Bunăstare digitală",
      },
      {
        text: "Asociați termenii legali din mediul digital (GDPR, Copyright, Licență Open-Source) cu definițiile lor.",
        type: "Grilă variante",
        domain: "Aspecte legale",
      },
      {
        text: "Bifați setările ce pot fi configurate în panoul de control al unui router Wi-Fi de acasă.",
        type: "Grilă variante",
        domain: "Configurare & rețele",
      },
      {
        text: "HTTPS și „lăcățelul închis” garantează 100% că un site nu publică informații false. Afirmația este:",
        type: "Listă derulantă",
        domain: "Gândire critică",
      },
      {
        text: "Cum se numește procesul prin care un soft execută sarcini digitale repetitive fără intervenție umană?",
        type: "Răspuns scurt",
        domain: "Automatizare",
      },
    ],
    downloads: [
      { label: "Deschide chestionarul", href: "https://docs.google.com/forms/d/e/1FAIpQLSeJ9859DJN8SvTPrw3cALDzZpVQbHP0L5URGLoKc1Xt0kUOSw/viewform", kind: "LINK" },
      { label: "Conținut chestionar (TXT)", href: "/tema2/chestionar.txt", kind: "TXT" },
    ],
  },
  {
    id: "tema3",
    numar: 3,
    eyebrow: "Statistică",
    titlu: "Calcule statistice pe datele grupei",
    rezumat:
      "Pornind de la graficul subdomeniilor aferent grupei, am implementat în Excel principalii indicatori statistici: media aritmetică, corelația, mediana, modul (valoarea cea mai frecventă) și deviația standard. Rezultatele oferă o imagine sintetică asupra distribuției competențelor în cadrul grupei.",
    accent: "#60a5fa", // blue
    accentSoft: "rgba(96, 165, 250, 0.12)",
    tags: ["Excel", "Statistică descriptivă", "Date grupă"],
    stats: [
      {
        name: "Media aritmetică",
        formula: "=AVERAGE(interval)",
        description: "Valoarea medie a scorurilor din grupă.",
      },
      {
        name: "Corelația",
        formula: "=CORREL(serie1; serie2)",
        description: "Gradul de asociere liniară între două serii de date.",
      },
      {
        name: "Mediana",
        formula: "=MEDIAN(interval)",
        description: "Valoarea de mijloc a setului de date ordonat.",
      },
      {
        name: "Modul",
        formula: "=MODE(interval)",
        description: "Valoarea care apare cel mai frecvent în listă.",
      },
      {
        name: "Deviația standard",
        formula: "=STDEV(interval)",
        description: "Cât de dispersate sunt valorile față de medie.",
      },
    ],
    downloads: [
      { label: "Fișier Excel cu calcule (XLSX)", href: "/tema3/statistici.xlsx", kind: "XLSX" },
    ],
  },
  {
    id: "tema4",
    numar: 4,
    eyebrow: "Baze de date",
    titlu: "Bază de date relațională în Access",
    rezumat:
      "Bază de date Microsoft Access construită conform referatului 4, cu două tabele legate printr-o relație de tip 1:N. Pe lângă structura tabelelor, am realizat o interogare, un raport și un formular pentru introducerea și vizualizarea datelor.",
    accent: "#a78bfa", // violet
    accentSoft: "rgba(167, 139, 250, 0.12)",
    tags: ["Microsoft Access", "Relație 1:N", "Interogare · Raport · Formular"],
    db: {
      relation:
        "Un înregistrare din tabelul principal poate avea mai multe înregistrări asociate în tabelul secundar (1:N), legate prin cheia externă.",
      tables: [
        {
          name: "Tabel principal (1)",
          role: "Partea „unu” a relației",
          fields: ["ID (cheie primară)", "Denumire", "Detalii"],
        },
        {
          name: "Tabel secundar (N)",
          role: "Partea „mulți” a relației",
          fields: ["ID (cheie primară)", "ID_principal (cheie externă)", "Valoare"],
        },
      ],
      objects: [
        { name: "Interogare", description: "Extrage și filtrează datele combinate din cele două tabele." },
        { name: "Raport", description: "Prezintă datele formatat, pregătite pentru tipărire." },
        { name: "Formular", description: "Interfață pentru introducerea și editarea înregistrărilor." },
      ],
    },
    downloads: [
      { label: "Bază de date (ACCDB)", href: "/tema4/baza-de-date.accdb", kind: "ACCDB" },
      { label: "Referat laborator 4 (PDF)", href: "/tema4/referat-laborator-4.pdf", kind: "PDF" },
    ],
  },
];
