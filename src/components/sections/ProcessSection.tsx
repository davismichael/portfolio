import FadeInOnScroll from "../animations/FadeInOnScroll";
import TextReveal from "../animations/TextReveal";
import { CLIENT_TIME, PROCESS_STEPS } from "@/lib/services";

// Horizontal timeline with day labels. One sentence per step.
export default function ProcessSection() {
  return (
    <section id="process" className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeInOnScroll className="mb-14 md:mb-16 text-center">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">
            How it works
          </p>
          <h2
            className="text-neutral-900 font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            <TextReveal text="Four steps. No surprises." inView />
          </h2>
        </FadeInOnScroll>

        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {/* Connecting line */}
          <span
            aria-hidden
            className="hidden md:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-neutral-300"
          />
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.title} className="relative">
              <FadeInOnScroll delay={i * 0.1}>
                <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center">
                  <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)] text-white text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div className="md:mt-6">
                    <p className="text-neutral-500 text-xs uppercase tracking-[0.2em] font-medium mb-1.5">
                      {step.label}
                    </p>
                    <h3 className="text-neutral-900 font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-neutral-600 text-[15px] leading-relaxed max-w-xs md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            </li>
          ))}
        </ol>
        <FadeInOnScroll delay={0.3} className="mt-14 text-center">
          <p className="inline-block border border-neutral-200 bg-white rounded-full px-5 py-2 text-sm text-neutral-600">
            {CLIENT_TIME}
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
