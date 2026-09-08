import Navigation from "@/components/Navigation";
import CaseStudyGrid from "@/components/sections/CaseStudyGrid";
import ContactSection from "@/components/sections/ContactSection";
import { MY_WORK, PROJECTS } from "@/lib/case-studies";

export const metadata = {
  title: "Portfolio | Davis Makes",
  description:
    "A decade of shipped work: enterprise AI platforms, mobile payments, video commerce, and products Michael Davis designed, built, and launched on his own.",
};

// The full proof archive. The homepage sells; this page shows the receipts.
// Client and company case studies first, then products Michael owns outright.
export default function PortfolioPage() {
  return (
    <main id="main" className="bg-white">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <Navigation />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 pt-32 pb-16 md:pt-40 md:pb-20 text-center">
          <h1
            className="text-neutral-900 font-bold uppercase tracking-[0.05em] mb-5 leading-tight"
            style={{ fontSize: "clamp(36px, 5.5vw, 76px)" }}
          >
            Portfolio
          </h1>
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Ten years of shipped work, plus the products I built on my own.
          </p>
        </div>
      </section>

      <CaseStudyGrid id="client-work" label="Client & Company Work" studies={MY_WORK} />

      <CaseStudyGrid id="own-products" label="Products I Built & Own" studies={PROJECTS} />

      <ContactSection />
    </main>
  );
}
