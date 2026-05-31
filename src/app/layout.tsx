import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { author } from "@/data/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CDA — Portofoliu teme | Bejan Valentin",
  description:
    "Site de prezentare a temelor 1–4 de la cursul Competențe Digitale Avansate (Master, Anul I 2025–2026): evaluare DigComp, chestionar Google Forms, statistică în Excel și bază de date Access.",
  authors: [{ name: author.nume }],
  keywords: [
    "CDA",
    "Competențe Digitale Avansate",
    "DigComp",
    "portofoliu",
    "Bejan Valentin",
  ],
  openGraph: {
    title: "CDA — Portofoliu teme | Bejan Valentin",
    description:
      "Prezentarea temelor 1–4 de la cursul Competențe Digitale Avansate.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
