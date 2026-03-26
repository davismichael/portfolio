"use client";
import { motion } from "framer-motion";
import Logo from "../ui/Logo";
import PromptCard from "../ui/PromptCard";

const ROLES = [
  "AI Product Builder",
  "Full-Stack Engineer",
  "Founder & Maker",
];

export default function HeroSection() {
  return (
    <section className="animated-gradient-bg min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Logo className="mb-10" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-[#001e36] max-w-4xl leading-tight mb-4"
      >
        I build AI-powered
        <br />
        products from scratch.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        className="text-lg sm:text-xl text-[#001e36]/60 mb-12 text-center max-w-2xl"
      >
        From idea to App Store. I design, engineer, and ship real products
        using AI across the entire stack.
      </motion.p>

      {/* Role chips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {ROLES.map((role, i) => (
          <motion.span
            key={role}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700"
          >
            {role}
          </motion.span>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[#ff983b] text-white rounded-full px-8 py-3.5 font-semibold text-base cursor-pointer transition-colors duration-200 hover:bg-[#e8872f]"
        >
          See my work
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
            <path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-black text-white rounded-full px-8 py-3.5 font-semibold text-base cursor-pointer transition-colors duration-200 hover:bg-gray-800"
        >
          Get in touch
        </a>
      </motion.div>

      {/* Prompt Card */}
      <div className="w-full max-w-2xl mt-12">
        <PromptCard />
      </div>
    </section>
  );
}
