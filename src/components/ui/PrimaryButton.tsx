"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  variant?: "orange" | "black" | "lime";
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const variantStyles = {
  orange:
    "bg-[#ff983b] text-white hover:bg-[#e8872f]",
  black:
    "bg-black text-white hover:bg-gray-800",
  lime:
    "bg-[#ebffb1] text-black hover:bg-[#d4f07a]",
};

export default function PrimaryButton({
  variant = "orange",
  children,
  className = "",
  icon,
}: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold text-base cursor-pointer transition-colors duration-200 ${variantStyles[variant]} ${className}`}
    >
      {children}
      {icon}
    </motion.button>
  );
}
