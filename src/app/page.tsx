import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CaseStudyGrid from "@/components/sections/CaseStudyGrid";
import ContactSection from "@/components/sections/ContactSection";
import { MY_WORK } from "@/lib/case-studies";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CaseStudyGrid id="my-work" studies={MY_WORK} collapsibleAfter={3} />
      <ContactSection />
    </main>
  );
}
