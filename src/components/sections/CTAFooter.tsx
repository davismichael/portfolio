"use client";
import FadeInOnScroll from "../animations/FadeInOnScroll";

export default function CTAFooter() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Dark navy bar */}
      <div className="bg-[#001e36] h-16 md:h-20 w-full" />

      {/* Gradient CTA area */}
      <div className="cta-gradient-bg flex flex-col items-center justify-center text-center px-4 sm:px-8 py-28 md:py-36">
        <FadeInOnScroll>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            Let&apos;s build something
            <br />
            together.
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.15}>
          <p className="text-lg sm:text-xl text-black/50 mb-10 max-w-xl">
            Whether you need an AI product built, a technical co-founder,
            or someone who ships — I&apos;m open to new projects.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:michael@breakoff.io"
              className="inline-flex items-center gap-2 bg-[#ff983b] text-white rounded-full px-8 py-3.5 font-semibold text-base cursor-pointer transition-colors duration-200 hover:bg-[#e8872f]"
            >
              michael@breakoff.io
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://x.com/MindMatrixDaily"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white rounded-full px-8 py-3.5 font-semibold text-base cursor-pointer transition-colors duration-200 hover:bg-gray-800"
            >
              @MindMatrixDaily on X
            </a>
          </div>
        </FadeInOnScroll>
      </div>

      {/* Footer bar */}
      <div className="bg-[#001e36] text-white/40 text-sm text-center py-6">
        Michael &middot; AI Product Builder &middot; {new Date().getFullYear()}
      </div>
    </section>
  );
}
