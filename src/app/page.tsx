import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import ThemeSection from "@/components/ThemeSection";
import Footer from "@/components/Footer";
import { themes } from "@/data/themes";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Timeline />
        {themes.map((theme) => (
          <ThemeSection key={theme.id} theme={theme} />
        ))}
      </main>
      <Footer />
    </>
  );
}
