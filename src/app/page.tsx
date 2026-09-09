import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProofSection from "@/components/sections/ProofSection";
import TrustSection from "@/components/sections/TrustSection";
import CompareSection from "@/components/sections/CompareSection";
import FitSection from "@/components/sections/FitSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

// Freelance sales page: offer-led hero, packaged services with published
// pricing, process, flagship proof (BreakOff), FAQ, then contact. The full
// case study archive lives at /portfolio, one click off the sales path.
export default function Home() {
  return (
    <main id="main">
      <HeroSection />
      <ServicesSection />
      <CompareSection />
      <FitSection />
      <ProcessSection />
      <TrustSection />
      <ProofSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
