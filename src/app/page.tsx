import HeroSection from "@/components/sections/HeroSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CTAFooter from "@/components/sections/CTAFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CaseStudiesSection />
      <ProjectsSection />
      <SkillsSection />
      <CTAFooter />
    </main>
  );
}
