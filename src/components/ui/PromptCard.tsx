"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TypingPlaceholder from "../animations/TypingPlaceholder";

export default function PromptCard() {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-xl p-6 relative">
        <div className="relative min-h-[100px]">
          {!isFocused && !value && (
            <div className="absolute inset-0 pointer-events-none text-left text-lg leading-relaxed">
              <TypingPlaceholder />
            </div>
          )}
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full min-h-[100px] resize-none text-lg leading-relaxed bg-transparent outline-none text-gray-900 placeholder-transparent"
            placeholder="Describe what you want to build..."
          />
        </div>
        <div className="flex justify-end mt-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-flex items-center gap-2 bg-[#ff983b] text-white rounded-full px-7 py-3 font-semibold text-base cursor-pointer transition-colors duration-200 hover:bg-[#e8872f]"
          >
            Build now
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-1"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
