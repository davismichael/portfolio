import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
      <ContactSection />
    </main>
  );
}
