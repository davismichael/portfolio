import Navigation from "@/components/Navigation";
import CaseStudyGrid from "@/components/sections/CaseStudyGrid";
import ContactSection from "@/components/sections/ContactSection";
import { PROJECTS } from "@/lib/case-studies";

export const metadata = {
  title: "Side Projects | Michael Davis",
  description:
    "Products Michael Davis built and shipped on his own. BreakOff, StudioSelf, and more.",
};

export default function ProjectsPage() {
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
            Side Projects
          </h1>
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            I&apos;m a product builder. Every product here, I designed, shipped, and still maintain on my own.
          </p>
        </div>
      </section>

      <CaseStudyGrid studies={PROJECTS} />

      <ContactSection />
    </main>
  );
}
