import Navigation from "../Navigation";

export default function HeroSection() {
  return (
    // Light hero. Tyler-Searle-style structure: tons of whitespace, tiny
    // eyebrow, big confident headline (person first, positioning second),
    // bio subhead, two pill CTAs. Black/white text on white bg, no glow.
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Navigation (light context now) */}
      <Navigation />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center pb-16 max-w-3xl mx-auto">
        {/* Eyebrow: positioning at a glance, before the personal greeting */}
        <p className="text-neutral-500 text-xs font-medium uppercase tracking-[0.3em] mb-6">
          Sr. Director of Product Design
        </p>

        {/* Headline: person first, then confident positioning line.
            Typography matches the original hero (leading-tight, no
            tracking-tight, 36-76px clamp). */}
        <h1
          className="text-neutral-900 font-bold leading-tight"
          style={{ fontSize: "clamp(36px, 5.5vw, 76px)" }}
        >
          <span className="block">I&apos;m Michael.</span>
          <span className="block">I design &amp; build AI-powered products.</span>
        </h1>

        {/* Subhead bio. Lifted from the contact section because it already
            reads well; selectively bolded so the scan-reader gets the gist
            without reading every word. */}
        <p className="text-neutral-600 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
          <span className="font-semibold text-neutral-900">Over a decade</span>{" "}
          building digital products. Now focused on{" "}
          <span className="font-semibold text-neutral-900">AI-powered software</span>{" "}
          that quietly makes someone&apos;s day easier.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="#contactme"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-full hover:bg-neutral-800 transition-all duration-200"
          >
            Let&apos;s work together
            <span aria-hidden>→</span>
          </a>
          <a
            href="#my-work"
            className="border border-neutral-300 text-neutral-900 text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-full hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-200"
          >
            Explore my work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
