import FadeInOnScroll from "../animations/FadeInOnScroll";
import TextReveal from "../animations/TextReveal";
import { BENEFITS } from "@/lib/services";

// Four things, one line each.
export default function TrustSection() {
  return (
    <section id="services" className="bg-white border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeInOnScroll className="mb-12 md:mb-16 text-center">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">
            What you get
          </p>
          <h2
            className="text-neutral-900 font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            <TextReveal text="AI speed. Human judgment." inView />
          </h2>
          <p className="text-neutral-600 text-lg mt-5">
            AI writes the first draft. I review every line.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {BENEFITS.map((b) => (
              <div key={b.title}>
                <h3 className="text-neutral-900 font-bold text-lg">{b.title}</h3>
                <p className="text-neutral-500 text-[15px] mt-1">{b.body}</p>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
