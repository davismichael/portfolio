"use client";

import { motion } from "framer-motion";

const STEPS = ["Spec", "Design", "Build", "Ship"];

// Shipkit-style flow line under the hero: four words, arrows draw in.
export default function FlowStrip() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12, delayChildren: 0.9 }}
      className="flex items-center gap-3 sm:gap-4 text-neutral-900 text-sm sm:text-base font-semibold"
      aria-label="Spec, design, build, ship"
    >
      {STEPS.map((step, i) => (
        <span key={step} className="flex items-center gap-3 sm:gap-4">
          <motion.span
            variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.35 }}
          >
            {step}
          </motion.span>
          {i < STEPS.length - 1 && (
            <motion.svg
              width="28"
              height="12"
              viewBox="0 0 28 12"
              fill="none"
              aria-hidden
              className="text-[var(--color-accent)]"
            >
              <motion.path
                d="M1 6H26M21 1L26 6L21 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={{ hidden: { pathLength: 0, opacity: 0 }, show: { pathLength: 1, opacity: 1 } }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </motion.svg>
          )}
        </span>
      ))}
    </motion.div>
  );
}
