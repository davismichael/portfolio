"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "../Navigation";
import PhoneFrame from "../ui/PhoneFrame";
import LivePrototype from "../ui/LivePrototype";
import RotatingWord from "../animations/RotatingWord";
import CountUp from "../animations/CountUp";
import TextReveal from "../animations/TextReveal";
import MagneticButton from "../animations/MagneticButton";
import Marquee from "../animations/Marquee";
import FlowStrip from "./FlowStrip";
import { STACK } from "@/lib/services";
import { AVAILABILITY, BOOKING_URL, LED_DESIGN_AT, STATS } from "@/lib/services";


export default function HeroSection() {
  const availabilityText = AVAILABILITY.open
    ? `Available ${AVAILABILITY.month} · ${AVAILABILITY.slotsOpen} spots`
    : `Fully booked · waitlist for ${AVAILABILITY.month}`;

  return (
    // Product-first hero: short copy on the left, a real shipped app on the
    // right with a live "build" card. Fully light theme.
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      <Navigation />

      <div className="relative z-10 flex-1 flex items-center max-w-[1200px] w-full mx-auto px-6 md:px-12 pt-28 pb-16 md:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center w-full">
          {/* Left: copy */}
          <div className="md:col-span-7">
            <p className="flex items-center gap-3 text-neutral-500 text-xs font-medium uppercase tracking-[0.3em] mb-8">
              <span
                aria-hidden
                className={`inline-block w-1.5 h-1.5 rounded-full ${
                  AVAILABILITY.open ? "bg-emerald-500" : "bg-neutral-400"
                }`}
              />
              {availabilityText}
            </p>

            <h1
              className="text-neutral-900 font-bold leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(40px, 6vw, 84px)" }}
            >
              <RotatingWord words={["Apps", "Websites", "MVPs", "Ideas"]} interval={3800} className="text-[var(--color-accent)]" />
              <br />
              <TextReveal text="designed and shipped." delay={0.15} />
            </h1>

            <TextReveal
              as="p"
              text="Fixed price. 2 to 6 weeks. You own every line."
              delay={0.5}
              className="text-neutral-600 text-lg md:text-xl leading-relaxed mt-6 max-w-lg"
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <MagneticButton>
              <a
                href={BOOKING_URL || "#contactme"}
                {...(BOOKING_URL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-full hover:bg-[var(--color-accent)] transition-all duration-200"
              >
                {BOOKING_URL ? "Book a fit call" : "Start a project"}
                <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
              </a>
              </MagneticButton>

            </motion.div>

            <div className="mt-8">
              <FlowStrip />
            </div>


          </div>

          {/* Right: shipped product + build card */}
          <div className="md:col-span-5 relative flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-[250px] sm:w-[280px]"
            >
              <PhoneFrame>
                <LivePrototype />
              </PhoneFrame>
              <p className="mt-5 text-center text-neutral-400 text-xs uppercase tracking-[0.25em]">
                Tap around. It&apos;s a real build.
              </p>




            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee: where I've led design + what I build with */}
      <div className="relative z-10 border-t border-neutral-200 py-5">
        <Marquee>
          <span className="px-6 text-neutral-400 text-xs uppercase tracking-[0.3em]">Led design at</span>
          {LED_DESIGN_AT.map((n) => (
            <span key={n} className="px-6 text-neutral-800 font-semibold text-lg whitespace-nowrap">{n}</span>
          ))}
          <span className="px-6 text-neutral-400 text-xs uppercase tracking-[0.3em]">Built with</span>
          {STACK.map((n) => (
            <span key={n} className="px-6 text-neutral-800 font-semibold text-lg whitespace-nowrap">{n}</span>
          ))}
        </Marquee>
      </div>

      {/* Stat strip */}
      <div className="relative z-10 border-t border-neutral-200">
        <dl className="max-w-[1200px] mx-auto px-6 md:px-12 py-8 grid grid-cols-3 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-neutral-900 font-bold text-2xl md:text-3xl leading-none">
                  <CountUp value={stat.value} />
                </span>
                <span className="block text-neutral-500 text-xs mt-2">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
