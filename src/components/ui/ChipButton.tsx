"use client";
import { motion } from "framer-motion";

interface Props {
  icon: string;
  label: string;
}

function ChipIcon({ type }: { type: string }) {
  switch (type) {
    case "grid":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "layout":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <line x1="1" y1="6" x2="15" y2="6" stroke="currentColor" strokeWidth="1.5" />
          <line x1="6" y1="6" x2="6" y2="15" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "pen":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M11.5 1.5L14.5 4.5L5 14H2V11L11.5 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "users":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M1 14C1 11.2 3.2 9 6 9C8.8 9 11 11.2 11 14" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11.5" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.2" />
          <path d="M15 14C15 11.8 13.5 10 11.5 9.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case "store":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="7" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M1 4L3 1H13L15 4" stroke="currentColor" strokeWidth="1.5" />
          <line x1="1" y1="4" x2="15" y2="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 11H10V15H6V11Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ChipButton({ icon, label }: Props) {
  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 cursor-pointer transition-colors duration-200 hover:bg-white hover:border-gray-300"
    >
      <span className="text-gray-500">
        <ChipIcon type={icon} />
      </span>
      {label}
    </motion.button>
  );
}
