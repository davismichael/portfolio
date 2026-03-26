"use client";
import FadeInOnScroll from "../animations/FadeInOnScroll";
import PrimaryButton from "../ui/PrimaryButton";
import BuildProgressCard from "../ui/BuildProgressCard";

export default function BackendSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - Build Progress Card */}
          <BuildProgressCard />

          {/* Right column - Text */}
          <FadeInOnScroll direction="right" delay={0.1}>
            <div className="max-w-lg">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
                Backend? Already done.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                User login, data storage, permissions - all built in, no
                extra setup needed.
              </p>
              <PrimaryButton variant="black">Start building</PrimaryButton>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
