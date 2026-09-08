import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeInOnScroll from "../animations/FadeInOnScroll";

const SCREENS = [
  { src: "/images/case-studies/breakoff/home.png", alt: "BreakOff home screen" },
  {
    src: "/images/case-studies/breakoff/start-break.png",
    alt: "BreakOff start break screen",
  },
  {
    src: "/images/case-studies/breakoff/streaks.png",
    alt: "BreakOff streaks and progress screen",
  },
];

// Flagship proof: BreakOff, shipped end to end. Research: a real product on
// the App Store is the top proof tier for a solo builder (clients are buying
// risk mitigation), and it belongs in the sales flow with the full portfolio
// one level down at /portfolio.
export default function ProofSection() {
  return (
    <section id="proof" className="bg-white border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <FadeInOnScroll>
            <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">
              Proof, not promises
            </p>
            <h2
              className="text-neutral-900 font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              I ship my own products the same way.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              BreakOff is a screen time app I designed, built, and shipped to
              the App Store solo. It passed Apple&apos;s Family Controls review,
              one of the hardest there is. Same process, same person, on your
              project.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://breakoff.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:bg-neutral-800 transition-all duration-200"
              >
                Visit BreakOff
                <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-900 text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-200"
              >
                Browse the full portfolio
              </Link>
            </div>
          </FadeInOnScroll>

          {/* Right: app screenshots */}
          <FadeInOnScroll delay={0.15}>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {SCREENS.map((screen, i) => (
                <div
                  key={screen.src}
                  className={`rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-50 ${
                    i === 1 ? "md:translate-y-6" : ""
                  }`}
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={400}
                    height={860}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 30vw, 190px"
                  />
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
