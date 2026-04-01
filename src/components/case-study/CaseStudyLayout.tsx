"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface Section {
  title: string;
  content: string | string[];
  type?: "text" | "list" | "quote" | "highlight" | "image";
  images?: ImageItem[];
}

interface CaseStudyLayoutProps {
  title: string;
  role: string;
  company?: string;
  timeline?: string;
  color: string;
  summary: string;
  sections: Section[];
  skills: string[];
}

export default function CaseStudyLayout({
  title,
  role,
  company,
  timeline,
  color,
  summary,
  sections,
  skills,
}: CaseStudyLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className={`bg-gradient-to-br ${color} relative overflow-hidden`}>
        <Navigation />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 pt-28 pb-20 md:pt-32 md:pb-28">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors mb-12 group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:-translate-x-1"
              >
                <path
                  d="M13 8H3M3 8L7 4M3 8L7 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to all work
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
              {role}
            </span>
            {company && (
              <>
                <span className="text-white/30">—</span>
                <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                  {company}
                </span>
              </>
            )}
            {timeline && (
              <>
                <span className="text-white/30">—</span>
                <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
                  {timeline}
                </span>
              </>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight uppercase tracking-[0.05em]"
          >
            {title}
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-3xl"
          >
            {summary}
          </motion.p>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-2 mt-8"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium bg-white/15 text-white/90 rounded-full px-3 py-1.5 backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-8 py-16 md:py-24">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="mb-14"
          >
            {section.title && (
              <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-[0.08em]">
                {section.title}
              </h2>
            )}

            {section.type === "quote" ? (
              <blockquote className="border-l-4 border-[#ff983b] pl-5 py-2">
                {(Array.isArray(section.content)
                  ? section.content
                  : [section.content]
                ).map((text, j) => (
                  <p
                    key={j}
                    className="text-gray-600 italic leading-relaxed mb-3 last:mb-0"
                  >
                    &ldquo;{text}&rdquo;
                  </p>
                ))}
              </blockquote>
            ) : section.type === "list" ? (
              <ul className="space-y-3">
                {(Array.isArray(section.content)
                  ? section.content
                  : [section.content]
                ).map((item, j) => (
                  <li key={j} className="flex gap-3 text-gray-600 leading-relaxed">
                    <span className="text-[#ff983b] font-bold mt-0.5 flex-shrink-0">
                      &bull;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : section.type === "highlight" ? (
              <div className="bg-[#faf9f7] rounded-xl p-6 border border-gray-100">
                {(Array.isArray(section.content)
                  ? section.content
                  : [section.content]
                ).map((text, j) => (
                  <p
                    key={j}
                    className="text-gray-700 leading-relaxed mb-3 last:mb-0"
                  >
                    {text}
                  </p>
                ))}
              </div>
            ) : section.type === "image" ? (
              <div className="space-y-6">
                {typeof section.content === "string" && section.content && (
                  <p className="text-gray-600 leading-relaxed mb-2">
                    {section.content}
                  </p>
                )}
                {section.images?.map((img, j) => (
                  <figure key={j} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                    {img.caption && (
                      <figcaption className="px-4 py-3 bg-gray-50 text-sm text-gray-500 text-center">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              (Array.isArray(section.content)
                ? section.content
                : [section.content]
              ).map((text, j) => (
                <p
                  key={j}
                  className="text-gray-600 leading-relaxed mb-4 last:mb-0"
                >
                  {text}
                </p>
              ))
            )}
          </motion.div>
        ))}

        {/* Back to work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-200 pt-12 mt-16"
        >
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 bg-black text-white rounded-full px-8 py-3.5 font-semibold text-base transition-colors duration-200 hover:bg-gray-800"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13 8H3M3 8L7 4M3 8L7 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to all work
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
