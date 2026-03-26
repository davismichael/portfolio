"use client";
import { motion } from "framer-motion";
import { BUILD_STEPS } from "@/lib/constants";
import AnimatedCheckItem from "./AnimatedCheckItem";

export default function BuildProgressCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="build-card-gradient rounded-2xl p-6 md:p-8 relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

      <div className="relative bg-white rounded-xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#ff983b] flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="10" stroke="white" strokeWidth="2" fill="none" />
              <ellipse cx="16" cy="16" rx="5" ry="10" stroke="white" strokeWidth="1.5" fill="none" />
              <line x1="6" y1="16" x2="26" y2="16" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="font-semibold text-gray-900 text-sm">
            Building your Subscription Tracker app
          </p>
        </div>

        <div className="border-t border-gray-100 pt-2">
          {BUILD_STEPS.map((step, i) => (
            <AnimatedCheckItem
              key={step.title}
              title={step.title}
              subtitle={step.subtitle}
              index={i}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
