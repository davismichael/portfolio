"use client";

import { useState } from "react";

interface MoreCardsToggleProps {
  /** Number of hidden cards, shown in the button label. */
  count: number;
  /** The hidden cards. Always rendered; visibility is toggled via display + aria-hidden. */
  children: React.ReactNode;
}

/**
 * Hides extra case study cards behind a "Show more" button until clicked.
 * Cards stay in the DOM (good for SEO and crawlers) and reveal in place.
 */
export default function MoreCardsToggle({
  count,
  children,
}: MoreCardsToggleProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {!expanded && (
        <div className="bg-black text-center py-20">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="group inline-flex items-center gap-3 border border-white text-white text-xs font-normal uppercase tracking-[0.2em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <span>Show {count} more</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
              className="transition-transform group-hover:translate-y-0.5"
            >
              <path
                d="M3 5L7 9L11 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
      <div
        style={{ display: expanded ? "contents" : "none" }}
        aria-hidden={!expanded}
      >
        {children}
      </div>
    </>
  );
}
