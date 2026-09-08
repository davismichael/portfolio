"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Step {
  title: string;
  subtitle: string;
}

// A build checklist that ticks through its steps, pauses on "shipped", then
// starts over. Reads as "this person ships", on a loop.
export default function BuildLoopCard({
  steps,
  label,
  stepMs = 900,
  pauseMs = 2600,
}: {
  steps: Step[];
  label: string;
  stepMs?: number;
  pauseMs?: number;
}) {
  const [done, setDone] = useState(0);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (done < steps.length) {
      t = setTimeout(() => setDone((d) => d + 1), done === 0 ? 500 : stepMs);
    } else {
      t = setTimeout(() => setDone(0), pauseMs);
    }
    return () => clearTimeout(t);
  }, [done, steps.length, stepMs, pauseMs]);

  const shipped = done === steps.length;

  return (
    <div className="bg-white border border-neutral-200 shadow-xl rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-neutral-500 text-[11px] uppercase tracking-[0.2em] font-medium whitespace-nowrap">
          {label}
        </p>
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-full transition-colors ${
            shipped ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-500"
          }`}
        >
          {shipped ? "Shipped" : "Building"}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 rounded-full bg-neutral-100 overflow-hidden mb-3">
        <motion.div
          className="h-full bg-neutral-900"
          animate={{ width: `${(done / steps.length) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <ul>
        {steps.map((step, i) => {
          const isDone = i < done;
          const isActive = i === done && !shipped;
          return (
            <li key={step.title} className="flex items-center gap-3 py-2">
              <span className="relative w-5 h-5 shrink-0 flex items-center justify-center">
                <motion.span
                  className="absolute inset-0 rounded-full border border-neutral-300"
                  animate={{ opacity: isDone ? 0 : 1, scale: isActive ? [1, 1.15, 1] : 1 }}
                  transition={isActive ? { repeat: Infinity, duration: 1.2 } : { duration: 0.2 }}
                />
                <motion.span
                  className="absolute inset-0 rounded-full bg-neutral-900"
                  initial={false}
                  animate={{ scale: isDone ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                />
                <motion.svg
                  width="11"
                  height="11"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="relative text-white"
                  initial={false}
                  animate={{ opacity: isDone ? 1 : 0 }}
                >
                  <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </span>
              <div className="leading-tight">
                <p className={`text-sm font-medium transition-colors ${isDone || isActive ? "text-neutral-900" : "text-neutral-400"}`}>
                  {step.title}
                </p>
                <p className="text-[11px] text-neutral-400">{step.subtitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
