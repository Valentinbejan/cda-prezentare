# CDA — Portofoliu teme (Bejan Valentin)

Site de tip prezentare pentru temele 1–4 de la cursul **Competențe Digitale Avansate (CDA)**,
Master Anul I, 2025–2026.

Construit cu **Next.js 16**, **TypeScript** și **Tailwind CSS v4**, cu animații subtile
(framer-motion) și un design dark-modern.

## Temele prezentate

1. **Evaluarea competențelor digitale** — test DigComp (profil „Advanced”) + raport cu diagrama radar.
2. **Chestionar Google Forms** — 10 întrebări din subdomeniile competențelor digitale, cu toate tipurile de răspuns.
3. **Calcule statistice în Excel** — medie, corelație, mediană, modul, deviație standard pe datele grupei.
4. **Bază de date Access** — două tabele în relație 1:N + interogare, raport și formular.

Fișierele temelor (screenshot-uri, `.xlsx`, `.accdb`, `.pdf`) sunt incluse în `public/` și
descărcabile direct din site.

## Rulare locală

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producție
```

## Structură

- `src/data/themes.ts` — sursa unică de conținut pentru toate secțiunile.
- `src/components/ThemeSection.tsx` — randarea reutilizabilă a unei teme.
- `src/components/` — Navbar, Hero, Timeline, Gallery (lightbox), DownloadButton, Footer, Reveal.
- `public/tema1..4/` — assets descărcabile.
