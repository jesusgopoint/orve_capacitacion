import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import Team from "@/components/Team";
import MissionVision from "@/components/MissionVision";
import WellnessPillars from "@/components/WellnessPillars";
// import News from "@/components/News"; // Sección de Noticias - Comentada por ahora
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <OurStory />
        <Services />
        <Team />
        <MissionVision />
        <WellnessPillars />
        {/* <News /> */} {/* Sección de Noticias - Comentada por ahora */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
