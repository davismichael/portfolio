import Navigation from "@/components/Navigation";
import CaseStudyGrid from "@/components/sections/CaseStudyGrid";
import ContactSection from "@/components/sections/ContactSection";
import { PROJECTS } from "@/lib/case-studies";

export const metadata = {
  title: "Made for Self | Michael Davis",
  description:
    "Products Michael Davis built and shipped on his own. BreakOff, StudioSelf, and more.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-black">
      {/* Hero */}
      <section className="relative bg-black overflow-hidden">
        <Navigation />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 pt-32 pb-16 md:pt-40 md:pb-20 text-center">
          <h1
            className="text-white font-bold uppercase tracking-[0.05em] mb-5"
            style={{ fontSize: "clamp(24px, 3.5vw, 44px)", lineHeight: 1.1 }}
          >
            Made for Self
          </h1>
          <p className="text-white/70 text-sm md:text-base leading-relaxed font-light max-w-xl mx-auto">
            Products I designed, shipped, and still maintain on my own.
          </p>
        </div>
      </section>

      <CaseStudyGrid studies={PROJECTS} />

      <ContactSection />
    </main>
  );
}
