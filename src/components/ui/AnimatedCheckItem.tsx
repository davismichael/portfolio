"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  index: number;
}

export default function AnimatedCheckItem({ title, subtitle, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 + 0.3, duration: 0.5, ease: "easeOut" }}
      className="flex items-start gap-3 py-3"
    >
      {/* Green checkmark circle */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.2 + 0.3,
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5"
      >
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="text-green-600"
        >
          <motion.path
            d="M3 7L6 10L11 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
          />
        </motion.svg>
      </motion.div>

      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
      </div>
    </motion.div>
  );
}
