"use client";
import { motion } from "framer-motion";

export default function SubscriptionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="subscription-card-gradient rounded-2xl p-6 md:p-8 relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

      <div className="relative bg-white rounded-xl p-5 shadow-lg">
        <p className="text-gray-900 text-sm leading-relaxed mb-6">
          Create an app that helps people keep track of their
          subscriptions and alerts them to upcoming renewals
          <span className="inline-block w-0.5 h-4 bg-gray-400 ml-0.5 animate-pulse align-middle" />
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 text-lg">
              +
            </button>
            <button className="flex items-center gap-1.5 text-sm text-gray-500">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M10 1L13 4L4.5 12.5H1.5V9.5L10 1Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              Add styling
            </button>
          </div>
          <button className="w-9 h-9 rounded-full bg-[#ff983b] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3V13M8 3L4 7M8 3L12 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
