"use client";

import { motion } from "framer-motion";

const TAGS = {
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

// Splits text into words and lifts each one in with a slight stagger.
// `as` picks the wrapper element so headings keep their semantics.
export default function TextReveal({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  once = true,
  inView = false,
}: {
  text: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  once?: boolean;
  /** Animate when scrolled into view (sections) instead of on mount (hero). */
  inView?: boolean;
}) {
  const words = text.split(" ");
  const MotionTag = TAGS[Tag];
  const trigger = inView
    ? { whileInView: "show" as const, viewport: { once, margin: "-60px" } }
    : { animate: "show" as const };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
            }}
            aria-hidden
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </MotionTag>
  );
}
