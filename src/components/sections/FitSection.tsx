import FadeInOnScroll from "../animations/FadeInOnScroll";
import TextReveal from "../animations/TextReveal";
import { FIT_FOR, FIT_NOT_FOR } from "@/lib/services";

// Qualifying section. Saying who the work is not for is more persuasive than
// another testimonial, and it keeps the calendar clear of calls that go nowhere.
export default function FitSection() {
  return (
    <section id="fit" className="bg-white border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeInOnScroll className="mb-12 md:mb-16 text-center">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">
            Fit
          </p>
          <h2
            className="text-neutral-900 font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            <TextReveal text="Who this is for." inView />
          </h2>
          <p className="text-neutral-600 text-lg mt-5">
            I would rather tell you no on a call than six weeks in.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16 max-w-4xl mx-auto">
            <div>
              <h3 className="text-neutral-900 font-bold text-lg mb-5">
                A good fit
              </h3>
              <ul className="space-y-3">
                {FIT_FOR.map((item) => (
                  <li key={item} className="flex gap-3 text-neutral-700 text-[15px] leading-relaxed">
                    <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-neutral-900 font-bold text-lg mb-5">
                Not a fit
              </h3>
              <ul className="space-y-3">
                {FIT_NOT_FOR.map((item) => (
                  <li key={item} className="flex gap-3 text-neutral-500 text-[15px] leading-relaxed">
                    <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
