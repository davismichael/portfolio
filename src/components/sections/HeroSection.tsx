import Navigation from "../Navigation";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(60,60,60,0.45) 0%, transparent 70%)",
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center pb-16">

        {/* Headline with inline photo */}
        <h1
          className="text-white font-bold leading-tight"
          style={{ fontSize: "clamp(36px, 5.5vw, 76px)" }}
        >
          <span className="block">
            I design &amp; build
            <img
              src="/images/hero.jpg"
              alt="Michael Davis"
              className="inline-block rounded-full object-cover object-top align-middle mx-3 md:mx-4"
              style={{
                width: "clamp(56px, 7vw, 96px)",
                height: "clamp(56px, 7vw, 96px)",
              }}
            />
          </span>
          <span className="block">AI-powered products.</span>
        </h1>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="#contactme"
            className="bg-white text-black text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-full hover:bg-white/90 transition-all duration-200"
          >
            Let&apos;s work together
          </a>
          <a
            href="#casestudies"
            className="border border-white/40 text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-full hover:border-white/80 hover:bg-white/5 transition-all duration-200"
          >
            Explore my work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
