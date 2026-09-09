import FadeInOnScroll from "../animations/FadeInOnScroll";
import TextReveal from "../animations/TextReveal";
import { TESTIMONIALS } from "@/lib/services";

// Short quotes with name, role, company. Hidden until there is at least one.
export default function TestimonialsSection() {
  if (TESTIMONIALS.length === 0) return null;
  const cols = Math.min(3, TESTIMONIALS.length);

  return (
    <section id="testimonials" className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeInOnScroll className="mb-12 md:mb-16 text-center">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">
            From people I have worked with
          </p>
          <h2
            className="text-neutral-900 font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            <TextReveal text="In their words." inView />
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div
            className="grid gap-5 max-w-5xl mx-auto"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          >
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="bg-white border border-neutral-200 rounded-3xl p-8 flex flex-col"
              >
                <blockquote className="text-neutral-900 text-lg leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="block font-semibold text-neutral-900">{t.name}</span>
                  <span className="block text-neutral-500">
                    {t.role}, {t.company}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
