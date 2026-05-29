"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import PresentationMode from "@/components/case-study/PresentationMode";
import type { Slide } from "@/components/case-study/types";

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface VideoItem {
  src: string;
  poster?: string;
  caption?: string;
  /** Defaults to true. Autoplay requires muted in modern browsers. */
  autoPlay?: boolean;
  /** Defaults to true. */
  loop?: boolean;
  /** Defaults to true. */
  muted?: boolean;
  /** Defaults to false. When true, native controls are shown. */
  controls?: boolean;
}

interface Section {
  title: string;
  content: string | string[];
  type?: "text" | "list" | "quote" | "highlight" | "image" | "grid" | "video";
  images?: ImageItem[];
  videos?: VideoItem[];
  /**
   * When true on an image section, the figure breaks out of the text column
   * (`max-w-3xl`) and renders up to ~1280px wide. Use for hero or product
   * shots that benefit from the extra real estate.
   */
  fullBleed?: boolean;
}

// Temporarily hide the "Play presentation" button while we rethink the
// presentation deck UX. Flip back to `true` when ready. All the underlying
// slide data, PresentationMode component, and modal wiring stay intact.
const SHOW_PRESENTATION_BUTTON = false;

interface CaseStudyLayoutProps {
  title: string;
  role: string;
  company?: string;
  timeline?: string;
  color: string;
  summary: string;
  sections: Section[];
  skills: string[];
  /** Optional status badge rendered prominently near the title (e.g. "In Progress"). */
  status?: string;
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
  status,
  slides,
}: CaseStudyLayoutProps) {
  const [presentationOpen, setPresentationOpen] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const router = useRouter();
  const hasSlides = Array.isArray(slides) && slides.length > 0;

  useEffect(() => {
    // Same-origin history exists if there's a prior entry from this site.
    // document.referrer is empty for direct loads, new tabs, and cross-origin entries.
    setCanGoBack(
      typeof window !== "undefined" &&
        window.history.length > 1 &&
        document.referrer.startsWith(window.location.origin),
    );
  }, []);

  const handleBack = (e: React.MouseEvent) => {
    if (!canGoBack) return;
    e.preventDefault();
    router.back();
  };
  return (
    <main id="main" className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "#f4f3ee" }}>
        <Navigation />
        {/* Accent stripe at the very top, using the case study's color */}
        <div
          aria-hidden
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 pt-28 pb-20 md:pt-32 md:pb-28">
          {/* Top bar: back link + play presentation */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between gap-3 mb-12"
          >
            <Link
              href="/#my-work"
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 text-xs font-medium uppercase tracking-[0.15em] transition-colors group"
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
              <span className="hidden sm:inline">Back to all work</span>
              <span className="sm:hidden">Back</span>
            </Link>

            {SHOW_PRESENTATION_BUTTON && hasSlides && (
              <button
                type="button"
                onClick={() => setPresentationOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white pl-1.5 pr-4 sm:pr-5 py-1.5 font-semibold text-xs uppercase tracking-[0.15em] transition-all hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-neutral-900"
                aria-label={`Play ${title} presentation`}
              >
                <span className="grid place-items-center size-7 rounded-full bg-white text-neutral-900 transition-transform group-hover:scale-105">
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M3.5 2L11 7L3.5 12V2Z" fill="currentColor" />
                  </svg>
                </span>
                <span className="hidden sm:inline">Play presentation</span>
                <span className="sm:hidden">Play</span>
              </button>
            )}
          </motion.div>

          {/* Accent line, picks up the case study color */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`h-1 w-12 bg-gradient-to-r ${color} mb-8 origin-left`}
            aria-hidden
          />

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="text-xs font-semibold text-neutral-700 uppercase tracking-[0.2em]">
              {role}
            </span>
            {company && (
              <>
                <span className="text-neutral-400">·</span>
                <span className="text-xs font-semibold text-neutral-700 uppercase tracking-[0.2em]">
                  {company}
                </span>
              </>
            )}
            {timeline && (
              <>
                <span className="text-neutral-400">·</span>
                <span className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em]">
                  {timeline}
                </span>
              </>
            )}
          </motion.div>

          {/* Status badge (e.g. "In Progress") */}
          {status && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-300 px-3.5 py-1.5 mb-4"
            >
              <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-900">
                {status}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-3xl font-light"
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
                className="text-xs font-medium bg-white border border-neutral-200 text-neutral-700 rounded-full px-3 py-1.5 uppercase tracking-[0.1em]"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-8 py-16 md:py-24 overflow-x-clip">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            // Faster fade-in. Cut duration almost in half and dropped the
            // per-section delay so content settles quickly as you scroll.
            transition={{ duration: 0.25, delay: i * 0.015, ease: "easeOut" }}
            className="mb-14"
          >
            {section.title && (
              <h2 className="text-sm font-bold text-neutral-500 mb-4 uppercase tracking-[0.15em]">
                {section.title}
              </h2>
            )}

            {section.type === "quote" ? (
              <blockquote className="border-l-2 border-neutral-300 pl-5 py-2">
                {(Array.isArray(section.content)
                  ? section.content
                  : [section.content]
                ).map((text, j) => (
                  <p
                    key={j}
                    className="text-neutral-700 italic leading-relaxed mb-3 last:mb-0 text-lg"
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
                  <li key={j} className="flex gap-3 text-neutral-700 leading-relaxed">
                    <span className="text-neutral-500 font-bold mt-0.5 flex-shrink-0">
                      &bull;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : section.type === "highlight" ? (
              <div className="rounded-xl p-6 border border-neutral-200 bg-neutral-50">
                {(Array.isArray(section.content)
                  ? section.content
                  : [section.content]
                ).map((text, j) => (
                  <p
                    key={j}
                    className="text-neutral-700 leading-relaxed mb-3 last:mb-0"
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
                    className="rounded-xl overflow-hidden border border-neutral-200 flex flex-col"
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
                        className="px-3 py-3 text-[10px] text-neutral-500 text-center uppercase tracking-[0.1em] leading-relaxed flex-1 bg-neutral-50"
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
                  <p className="text-neutral-600 leading-relaxed mb-2">
                    {section.content}
                  </p>
                )}
                {section.images?.map((img, j) => (
                  <div
                    key={j}
                    className={
                      // Break out of the parent text column to fill the page,
                      // capped at ~1280px and re-centered. `overflow-x-clip`
                      // on the surrounding section prevents a horizontal
                      // scrollbar when the viewport is narrower than 1280px.
                      section.fullBleed
                        ? "relative left-1/2 -translate-x-1/2 w-[min(100vw,1280px)] px-4 sm:px-8"
                        : undefined
                    }
                  >
                    <figure className="rounded-xl overflow-hidden border border-neutral-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                      {img.caption && (
                        <figcaption className="px-4 py-3 text-xs text-neutral-500 text-center uppercase tracking-[0.1em] bg-neutral-50">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  </div>
                ))}
              </div>
            ) : section.type === "video" ? (
              <div className="space-y-6">
                {typeof section.content === "string" && section.content && (
                  <p className="text-neutral-600 leading-relaxed mb-2">
                    {section.content}
                  </p>
                )}
                {section.videos?.map((vid, j) => {
                  const autoPlay = vid.autoPlay ?? true;
                  const loop = vid.loop ?? true;
                  const muted = vid.muted ?? true;
                  const controls = vid.controls ?? false;
                  return (
                    <figure key={j} className="rounded-xl overflow-hidden border border-neutral-200">
                      <video
                        src={vid.src}
                        poster={vid.poster}
                        autoPlay={autoPlay}
                        loop={loop}
                        muted={muted}
                        controls={controls}
                        playsInline
                        preload="metadata"
                        className="w-full h-auto block"
                      />
                      {vid.caption && (
                        <figcaption className="px-4 py-3 text-xs text-neutral-500 text-center uppercase tracking-[0.1em] bg-neutral-50">
                          {vid.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                })}
              </div>
            ) : (
              (Array.isArray(section.content)
                ? section.content
                : [section.content]
              ).map((text, j) => (
                <p
                  key={j}
                  className="text-neutral-700 leading-relaxed mb-4 last:mb-0"
                >
                  {text}
                </p>
              ))
            )}
          </motion.div>
        ))}

        {/* Back to work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="border-t border-neutral-200 pt-12 mt-16"
        >
          <Link
            href="/#my-work"
            onClick={handleBack}
            className="inline-flex items-center gap-2 bg-neutral-900 text-white rounded-full px-8 py-3.5 font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-200 hover:bg-neutral-800"
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

      {SHOW_PRESENTATION_BUTTON && hasSlides && presentationOpen && (
        <PresentationMode
          onClose={() => setPresentationOpen(false)}
          title={title}
          slides={slides!}
        />
      )}
    </main>
  );
}
