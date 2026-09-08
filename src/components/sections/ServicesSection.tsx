import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import FadeInOnScroll from "../animations/FadeInOnScroll";
import TextReveal from "../animations/TextReveal";
import { PLANS, PLAN_EXTRAS } from "@/lib/services";

// Pricing: three centered cards, one big price each, a short "what you get"
// list, one button. Extras are a single text row.
export default function ServicesSection() {
  return (
    <section id="pricing" className="bg-white border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeInOnScroll className="mb-12 md:mb-16 text-center">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">
            Pricing
          </p>
          <h2
            className="text-neutral-900 font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            <TextReveal text="Start for $1,500. Pay the rest in three parts." inView />
          </h2>
          <p className="text-neutral-600 text-lg mt-5">
            Fixed prices, published. Everything included.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col items-center text-center rounded-3xl px-7 py-9 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.featured ? "border-2 border-neutral-900" : "border border-neutral-200"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 bg-[var(--color-accent)] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}

                <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-medium">
                  {plan.name}
                </p>
                <p
                  className="text-neutral-900 font-bold leading-none mt-4"
                  style={{ fontSize: "clamp(44px, 4.5vw, 60px)" }}
                >
                  {plan.price}
                </p>
                <p className="text-neutral-500 text-sm mt-2">{plan.per}</p>
                <p className="text-neutral-900 font-medium mt-5 max-w-[240px]">{plan.tagline}</p>

                <div className="w-full border-t border-neutral-200 my-7" />

                <ul className="space-y-2.5 mb-7">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-center justify-center gap-2.5 text-neutral-800 text-[15px]">
                      <Check size={15} strokeWidth={2.5} className="shrink-0 text-neutral-900" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                {(plan.goodFor || plan.notFor) && (
                  <div className="w-full border-t border-neutral-200 pt-5 mb-8 text-[13px] leading-relaxed">
                    {plan.goodFor && <p className="text-neutral-700">{plan.goodFor}</p>}
                    {plan.notFor && <p className="text-neutral-400 mt-1.5">{plan.notFor}</p>}
                  </div>
                )}

                <div className="mt-auto w-full">
                  <Link
                    href="/#contactme"
                    className={`w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] px-6 py-4 rounded-full transition-all duration-200 ${
                      plan.featured
                        ? "bg-neutral-900 text-white hover:bg-[var(--color-accent)]"
                        : "border border-neutral-300 text-neutral-900 hover:border-neutral-900 hover:bg-neutral-50"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
                  </Link>
                  <p className="text-neutral-500 text-xs mt-3 min-h-[1rem]">{plan.note ?? ""}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1} className="mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-2 text-sm text-neutral-600">
            {PLAN_EXTRAS.map((extra) => (
              <Link key={extra.label} href="/#contactme" className="hover:text-neutral-900 transition-colors">
                {extra.label}{" "}
                <span className="font-semibold text-neutral-900">{extra.value}</span>
              </Link>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
