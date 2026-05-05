"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PresentationMode from "@/components/case-study/PresentationMode";
import type { Slide } from "@/components/case-study/types";

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface Section {
  title: string;
  content: string | string[];
  type?: "text" | "list" | "quote" | "highlight" | "image" | "grid";
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
  /** Optional presentation deck. When present, a Play button appears in the hero. */
  slides?: Slide[];
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
  slides,
}: CaseStudyLayoutProps) {
  const [presentationOpen, setPresentationOpen] = useState(false);
  const hasSlides = Array.isArray(slides) && slides.length > 0;
  return (
    <main className="min-h-screen" style={{ background: "#0f0f0f" }}>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${color} relative overflow-hidden`}>
        <Navigation />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 pt-28 pb-20 md:pt-32 md:pb-28">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-medium uppercase tracking-[0.15em] transition-colors mb-12 group"
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
            <span className="text-xs font-semibold text-white/60 uppercase tracking-[0.2em]">
              {role}
            </span>
            {company && (
              <>
                <span className="text-white/30">—</span>
                <span className="text-xs font-semibold text-white/60 uppercase tracking-[0.2em]">
                  {company}
                </span>
              </>
            )}
            {timeline && (
              <>
                <span className="text-white/30">—</span>
                <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em]">
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
            className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl font-light"
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
                className="text-xs font-medium bg-black/25 text-white/80 rounded-full px-3 py-1.5 backdrop-blur-sm uppercase tracking-[0.1em]"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Play presentation */}
          {hasSlides && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <button
                type="button"
                onClick={() => setPresentationOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full bg-white text-black pl-2 pr-6 py-2 font-semibold text-sm uppercase tracking-[0.15em] transition-all hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-white"
                aria-label={`Play ${title} presentation`}
              >
                <span className="grid place-items-center size-9 rounded-full bg-black text-white transition-transform group-hover:scale-105">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M3.5 2L11 7L3.5 12V2Z" fill="currentColor" />
                  </svg>
                </span>
                <span>Play presentation</span>
                <span className="text-black/40 text-xs font-medium normal-case tracking-normal">
                  {slides!.length} slides
                </span>
              </button>
            </motion.div>
          )}
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
              <h2 className="text-sm font-bold text-white/40 mb-4 uppercase tracking-[0.15em]">
                {section.title}
              </h2>
            )}

            {section.type === "quote" ? (
              <blockquote className="border-l-2 border-white/20 pl-5 py-2">
                {(Array.isArray(section.content)
                  ? section.content
                  : [section.content]
                ).map((text, j) => (
                  <p
                    key={j}
                    className="text-white/60 italic leading-relaxed mb-3 last:mb-0 text-lg"
                  >
                    &ldquo;{text}&rdquo;
                  </p>
                ))}
              </blockquote>
            ) : section.type === "list" ? (
              <ul className="space-y-4">
                {(Array.isArray(section.content)
                  ? section.content
                  : [section.content]
                ).map((item, j) => (
                  <li key={j} className="flex gap-3 text-white/70 leading-relaxed">
                    <span className="text-white/30 font-bold mt-0.5 flex-shrink-0">
                      &bull;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : section.type === "highlight" ? (
              <div className="rounded-xl p-6 border border-white/10" style={{ background: "#1a1a1a" }}>
                {(Array.isArray(section.content)
                  ? section.content
                  : [section.content]
                ).map((text, j) => (
                  <p
                    key={j}
                    className="text-white/70 leading-relaxed mb-3 last:mb-0"
                  >
                    {text}
                  </p>
                ))}
              </div>
            ) : section.type === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.images?.map((img, j) => (
                  <figure
                    key={j}
                    className="rounded-xl overflow-hidden border border-white/10 flex flex-col"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                    {img.caption && (
                      <figcaption
                        className="px-3 py-3 text-[10px] text-white/50 text-center uppercase tracking-[0.1em] leading-relaxed flex-1"
                        style={{ background: "#1a1a1a" }}
                      >
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : section.type === "image" ? (
              <div className="space-y-6">
                {typeof section.content === "string" && section.content && (
                  <p className="text-white/60 leading-relaxed mb-2">
                    {section.content}
                  </p>
                )}
                {section.images?.map((img, j) => (
                  <figure key={j} className="rounded-xl overflow-hidden border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                    {img.caption && (
                      <figcaption className="px-4 py-3 text-xs text-white/40 text-center uppercase tracking-[0.1em]" style={{ background: "#1a1a1a" }}>
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
                  className="text-white/70 leading-relaxed mb-4 last:mb-0"
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
          className="border-t border-white/10 pt-12 mt-16"
        >
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 bg-white text-black rounded-full px-8 py-3.5 font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-200 hover:bg-white/90"
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

      {hasSlides && presentationOpen && (
        <PresentationMode
          onClose={() => setPresentationOpen(false)}
          title={title}
          color={color}
          slides={slides!}
        />
      )}
    </main>
  );
}
