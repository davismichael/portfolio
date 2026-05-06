"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import type { Slide } from "./types";

interface PresentationModeProps {
  onClose: () => void;
  title: string;
  slides: Slide[];
}

const SWIPE_THRESHOLD = 60;

export default function PresentationMode({
  onClose,
  title,
  slides,
}: PresentationModeProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  const total = slides.length;
  const current = slides[index];

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next >= total) return;
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index, total],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Lock background scroll for as long as the deck is mounted
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // Move focus into the deck on mount, restore on unmount
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();
    return () => {
      previouslyFocused?.focus?.();
    };
  }, []);

  // Keyboard: ESC, arrows, Home/End
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, onClose, total]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      next();
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      prev();
    }
  };

  // Slide enter/exit motion variants. Disabled if user prefers reduced motion
  const variants = useMemo(
    () => ({
      enter: (dir: 1 | -1) => ({
        x: reduceMotion ? 0 : dir * 60,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (dir: 1 | -1) => ({
        x: reduceMotion ? 0 : dir * -60,
        opacity: 0,
      }),
    }),
    [reduceMotion],
  );

  if (!current) return null;

  const isCover = current.kind === "cover";

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title}. Presentation`}
      className="fixed inset-0 z-[200]"
      style={{ background: "#0a0a0a" }}
    >
      {/* Top chrome */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 sm:px-6 h-14 bg-black/40 backdrop-blur-sm">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] truncate">
            {title}
          </span>
          <span className="hidden sm:inline text-white/40 text-xs">
            {index + 1} / {total}
          </span>
        </div>
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close presentation"
          className="rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-white"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path
              d="M5 5L15 15M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Slide stage */}
      <div className="absolute inset-0 pt-14 pb-20 flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.32, 0.72, 0, 1] }}
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
            className="w-full h-full px-4 sm:px-10 cursor-grab active:cursor-grabbing"
          >
            <SlideView slide={current} isCover={isCover} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Side controls. Desktop only, below header */}
      <button
        type="button"
        onClick={prev}
        disabled={index === 0}
        aria-label="Previous slide"
        className="hidden md:grid place-items-center absolute left-3 top-1/2 -translate-y-1/2 size-11 rounded-full bg-white/8 hover:bg-white/15 text-white transition disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-white"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        disabled={index === total - 1}
        aria-label="Next slide"
        className="hidden md:grid place-items-center absolute right-3 top-1/2 -translate-y-1/2 size-11 rounded-full bg-white/8 hover:bg-white/15 text-white transition disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-white"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Bottom: pagination dots + mobile prev/next */}
      <div className="absolute bottom-0 left-0 right-0 h-20 flex items-center justify-between px-4 sm:px-6 bg-gradient-to-t from-black/60 to-transparent">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous slide"
          className="md:hidden text-white/70 hover:text-white text-xs uppercase tracking-[0.15em] disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        <div className="flex-1 flex items-center justify-center gap-2" role="tablist" aria-label="Slide navigation">
          {slides.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  active
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={next}
          disabled={index === total - 1}
          aria-label="Next slide"
          className="md:hidden text-white/70 hover:text-white text-xs uppercase tracking-[0.15em] disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next
        </button>

        {/* Mobile counter */}
        <span className="hidden md:inline-block w-12" aria-hidden />
      </div>
    </div>
  );
}

// ---- Individual slide renderers --------------------------------------------

interface SlideViewProps {
  slide: Slide;
  isCover: boolean;
}

function SlideView({ slide, isCover }: SlideViewProps) {
  if (isCover) {
    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black flex flex-col justify-end">
        {slide.image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${slide.image}')` }}
            aria-hidden
          />
        )}
        <div className="relative z-10 max-w-3xl px-8 sm:px-14 pb-14 sm:pb-20">
          <div className="h-px w-12 bg-white/70 mb-8" aria-hidden />
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            {slide.title}
          </h2>
          {slide.subtext && (
            <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              {slide.subtext}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Non-cover slides: pure white with black type and accents
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-16 py-10 md:py-16 flex flex-col">
        <div className="flex items-start justify-between mb-6 md:mb-10">
          <div className="h-1 w-10 bg-black" aria-hidden />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700">
            {labelForKind(slide.kind)}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight mb-5 md:mb-8 max-w-4xl">
          {slide.title}
        </h2>

        {slide.subtext && (
          <p className="text-neutral-800 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-3xl mb-8">
            {slide.subtext}
          </p>
        )}

        {slide.image && (
          <figure className="mt-auto rounded-xl overflow-hidden border border-neutral-300 bg-white shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-auto max-h-[55vh] object-cover"
              loading="lazy"
              draggable={false}
            />
            {slide.caption && (
              <figcaption className="px-4 py-2.5 text-[11px] sm:text-xs text-neutral-500 uppercase tracking-[0.12em] text-center">
                {slide.caption}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </div>
  );
}

function labelForKind(kind: Slide["kind"]): string {
  switch (kind) {
    case "problem":
      return "Problem";
    case "research":
      return "Research";
    case "insight":
      return "Insight";
    case "constraints":
      return "Constraints";
    case "exploration":
      return "Exploration";
    case "design":
      return "Design";
    case "testing":
      return "Testing";
    case "iteration":
      return "Iteration";
    case "outcome":
    case "result":
      return "Outcome";
    case "reflection":
      return "Reflection";
    case "context":
      return "Context";
    case "decision":
      return "Decision";
    case "solution":
      return "Solution";
    default:
      return "";
  }
}
