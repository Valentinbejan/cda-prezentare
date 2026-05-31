// Sursa unică de adevăr pentru conținutul site-ului de prezentare CDA.
// Toate secțiunile temelor se generează din acest fișier.

export type AnswerType =
  | "Răspuns scurt"
  | "Paragraf"
  | "O singură variantă"
  | "Casete de selectare"
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
  answer: string;
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
      "Chestionar propriu realizat în Google Forms, ca test cu punctaj (câte un punct pentru fiecare răspuns corect), cu 10 întrebări din subdomenii reprezentative ale diagramei competențelor digitale. Folosește tipuri variate de răspuns: scurt, paragraf, o singură variantă, casete de selectare, scară liniară și grilă.",
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
        answer: "Cloud (stocare în cloud).",
      },
      {
        text: "Descrieți, în 2-3 propoziții, ce reprezintă autentificarea în doi pași (2FA) și de ce este esențială.",
        type: "Paragraf",
        domain: "Siguranță",
        answer:
          "2FA este o metodă de securitate care cere două forme de verificare (ex. parolă + cod primit pe telefon/SMS sau aplicație). Este esențială pentru că, dacă parola este compromisă, contul rămâne protejat de al doilea factor.",
      },
      {
        text: "Termenul care definește totalitatea informațiilor lăsate online de un utilizator se numește:",
        type: "O singură variantă",
        domain: "Identitate digitală",
        answer: "Amprentă digitală (sau Identitate digitală).",
      },
      {
        text: "Ce operator de căutare folosiți în Google pentru a găsi exact o frază specifică?",
        type: "O singură variantă",
        domain: "Informații & date",
        answer: "Ghilimele (\" \") care încadrează fraza.",
      },
      {
        text: "Selectați platformele recunoscute pentru apeluri video și colaborare la distanță.",
        type: "Casete de selectare",
        domain: "Comunicare & colaborare",
        answer: "Microsoft Teams, Zoom și Google Meet.",
      },
      {
        text: "Pe o scară de la 1 la 5, cât de mult vă afectează lumina albastră a ecranelor calitatea somnului?",
        type: "Scară liniară",
        domain: "Bunăstare digitală",
        answer: "Evaluare subiectivă pe scara 1–5 (nu există un singur răspuns corect).",
      },
      {
        text: "Asociați termenii legali din mediul digital (GDPR, Copyright, Licență Open-Source) cu definițiile lor.",
        type: "Grilă variante",
        domain: "Aspecte legale",
        answer:
          "GDPR → reglementează protecția datelor personale în Europa; Copyright → protejează creațiile intelectuale și artistice; Licență Open-Source → permite utilizarea, modificarea și distribuirea gratuită a unui cod.",
      },
      {
        text: "Bifați setările ce pot fi configurate în panoul de control al unui router Wi-Fi de acasă.",
        type: "Grilă variante",
        domain: "Configurare & rețele",
        answer:
          "Numele rețelei (SSID), parola rețelei și filtrarea accesului anumitor dispozitive (NU volumul boxelor laptopului).",
      },
      {
        text: "HTTPS și „lăcățelul închis” garantează 100% că un site nu publică informații false. Afirmația este:",
        type: "O singură variantă",
        domain: "Gândire critică",
        answer: "Fals — HTTPS asigură doar conexiunea criptată, nu și veridicitatea conținutului.",
      },
      {
        text: "Cum se numește procesul prin care un soft execută sarcini digitale repetitive fără intervenție umană?",
        type: "Răspuns scurt",
        domain: "Automatizare",
        answer: "Automatizare.",
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
    screenshots: [
      {
        src: "/tema3/grafic.png",
        alt: "Foaie Excel cu indicatorii statistici și graficele pe subdomenii",
        width: 1497,
        height: 1017,
        caption:
          "Foaia Excel: media, corelația, mediana, modul și deviația standard, cu graficele aferente.",
      },
    ],
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
      "Bază de date Microsoft Access construită conform referatului 4, cu două tabele — Specializari și Studenti — legate printr-o relație de tip 1:N. Pe lângă structura tabelelor, am realizat o interogare, un raport și un formular pentru introducerea și vizualizarea datelor.",
    accent: "#a78bfa", // violet
    accentSoft: "rgba(167, 139, 250, 0.12)",
    tags: ["Microsoft Access", "Relație 1:N", "Interogare · Raport · Formular"],
    screenshots: [
      {
        src: "/tema4/tabel-specializari.png",
        alt: "Tabelul Specializari în Access",
        width: 1920,
        height: 1037,
        caption: "Tabelul Specializari — partea „unu” a relației (ID, Nume, Durata, Licenta, Master).",
      },
      {
        src: "/tema4/tabel-studenti.png",
        alt: "Tabelul Studenti în Access",
        width: 1920,
        height: 1043,
        caption: "Tabelul Studenti — partea „mulți”, cu scorurile pe cele 16 subdomenii.",
      },
      {
        src: "/tema4/interogare.png",
        alt: "Interogare care combină Specializari și Studenti",
        width: 1920,
        height: 1037,
        caption: "Interogarea Interogare1 — combină datele din cele două tabele relaționate.",
      },
      {
        src: "/tema4/formular.png",
        alt: "Formularul Studenti în Access",
        width: 1920,
        height: 1036,
        caption: "Formularul Studenti — pentru introducerea și editarea înregistrărilor.",
      },
      {
        src: "/tema4/raport.png",
        alt: "Raportul Specializari în Access",
        width: 1920,
        height: 1041,
        caption: "Raportul Specializari — datele grupate, pregătite pentru tipărire.",
      },
    ],
    db: {
      relation:
        "O specializare (Specializari) poate fi asociată cu mai mulți studenți (Studenti). Legătura se face prin cheia externă id_specializare din tabelul Studenti, care referă cheia primară ID din Specializari.",
      tables: [
        {
          name: "Specializari (1)",
          role: "Partea „unu” a relației",
          fields: ["ID (cheie primară)", "Nume", "Durata", "Licenta", "Master"],
        },
        {
          name: "Studenti (N)",
          role: "Partea „mulți” a relației",
          fields: [
            "user (cheie primară)",
            "id_specializare (cheie externă)",
            "subdomeniu",
            "+ 16 câmpuri scor (cauta, evaluare_critica, …)",
          ],
        },
      ],
      objects: [
        { name: "Interogare1", description: "Combină și filtrează datele din tabelele Specializari și Studenti." },
        { name: "Raport (Specializari)", description: "Prezintă datele grupate pe specializare, pregătite pentru tipărire." },
        { name: "Formular (Studenti)", description: "Interfață pentru introducerea și editarea înregistrărilor." },
      ],
    },
    downloads: [
      { label: "Bază de date (ACCDB)", href: "/tema4/baza-de-date.accdb", kind: "ACCDB" },
      { label: "Referat laborator 4 (PDF)", href: "/tema4/referat-laborator-4.pdf", kind: "PDF" },
    ],
  },
];
