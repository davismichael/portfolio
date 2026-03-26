"use client";
import FadeInOnScroll from "../animations/FadeInOnScroll";
import PrimaryButton from "../ui/PrimaryButton";
import SubscriptionCard from "../ui/SubscriptionCard";

export default function LimitlessSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Orange decorative strip */}
      <div className="orange-strip h-2 w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 md:py-28">
        {/* Section heading */}
        <FadeInOnScroll className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Consider yourself limitless.
          </h2>
          <p className="text-lg sm:text-xl text-gray-500">
            If you can describe it, you can build it.
          </p>
        </FadeInOnScroll>

        {/* Two column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - Text */}
          <FadeInOnScroll direction="left" delay={0.1}>
            <div className="max-w-lg">
              <h3 className="text-3xl sm:text-4xl font-bold text-black mb-5">
                Dream big. Build fast.
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Just describe it - we help you build it, host it, and
                get it ready to launch. No code. No setup. Just go.
              </p>
              <PrimaryButton variant="black">Start building</PrimaryButton>
            </div>
          </FadeInOnScroll>

          {/* Right column - Subscription Card */}
          <SubscriptionCard />
        </div>
      </div>
    </section>
  );
}
