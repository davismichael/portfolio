"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { unlockCaseStudyAction } from "@/app/actions/unlock-case-study";

/** NDA-safe public summary rendered above the gate. */
export interface CaseStudySummary {
  /** Small mono label above the headline, e.g. "Overview" */
  eyebrow?: string;
  /** The big statement. Lead with the outcome, not the project name. */
  headline: string;
  /** One or two sentences of context under the headline. */
  intro: string;
  /** Stat cards. Value large, label small. Three or four reads best. */
  stats: { value: string; label: string }[];
  /** Short titled blocks: the problem, the constraint, the approach. */
  sections: { heading: string; body: string }[];
  /** Footer meta bar, e.g. Client / Role / Year. */
  meta?: { label: string; value: string }[];
}

interface UnlockScreenProps {
  /** Display name used in the gate copy, e.g. "New Product" */
  caseStudyName: string;
  /** Path to redirect back to on success, e.g. "/case-study/new-product" */
  returnTo: string;
  /** When true, render the error state. Driven by ?unlock_error=1 search param. */
  error?: boolean;
  /**
   * Optional public summary. When present the page reads as a real case study
   * first and the password gate becomes a footer for the detailed version, so a
   * buyer gets the proof without having to email for a password.
   */
  summary?: CaseStudySummary;
}

export default function UnlockScreen({
  caseStudyName,
  returnTo,
  error,
  summary,
}: UnlockScreenProps) {
  return (
    <main id="main" className="min-h-screen" style={{ background: "#f4f3ee" }}>
      <section className="relative overflow-hidden min-h-screen" style={{ background: "#f4f3ee" }}>
        <Navigation />

        <div
          className={`relative mx-auto px-4 sm:px-8 pt-32 pb-20 md:pt-40 ${
            summary ? "max-w-3xl" : "max-w-xl"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#my-work"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 text-xs font-medium uppercase tracking-[0.15em] transition-colors mb-12 group"
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

          {summary ? (
            <>
              {summary.eyebrow && (
                <p className="font-mono text-neutral-500 text-xs uppercase tracking-[0.2em] mb-6">
                  {summary.eyebrow}
                </p>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-neutral-900 font-bold leading-[1.08] tracking-tight mb-6"
                style={{ fontSize: "clamp(32px, 5.2vw, 56px)" }}
              >
                {summary.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-neutral-600 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl"
              >
                {summary.intro}
              </motion.p>

              {/* Stat cards */}
              <div className="flex flex-col gap-3 mb-14">
                {summary.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                    className="bg-white px-7 py-7 sm:px-9 sm:py-8"
                  >
                    <p className="text-neutral-900 font-bold leading-none tracking-tight text-3xl sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="text-neutral-500 text-[15px] mt-3">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* How it was done */}
              <div className="grid gap-10 sm:grid-cols-3 mb-14">
                {summary.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-neutral-900 font-semibold text-base mb-2">
                      {section.heading}
                    </h2>
                    <p className="text-neutral-600 text-[15px] leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Meta bar */}
              {summary.meta && summary.meta.length > 0 && (
                <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-neutral-300 pt-6 mb-16">
                  {summary.meta.map((m) => (
                    <div key={m.label} className="flex items-center gap-3">
                      <dt className="font-mono text-neutral-400 text-[11px] uppercase tracking-[0.18em]">
                        {m.label}
                      </dt>
                      <span aria-hidden className="h-px w-6 bg-neutral-300" />
                      <dd className="text-neutral-900 font-semibold text-sm">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="border-t border-neutral-300 pt-10">
                <h2 className="text-neutral-900 font-semibold text-lg mb-2">
                  The full case study
                </h2>
                <p className="text-neutral-600 text-[15px] leading-relaxed mb-8 max-w-lg">
                  The research, the interface work, the rest of the numbers, and
                  the presentation deck are covered by NDA. Enter the password,
                  or reach out and I will send you access.
                </p>
              </div>
            </>
          ) : (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-5 leading-tight tracking-tight"
              >
                {caseStudyName}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-neutral-700 text-base sm:text-lg leading-relaxed font-light mb-10 max-w-lg"
              >
                This case study covers work under NDA. Enter the password to view
                the full write-up and the presentation deck. Reach out if you need
                access.
              </motion.p>
            </>
          )}

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            action={unlockCaseStudyAction}
            className="space-y-4"
          >
            <input type="hidden" name="returnTo" value={returnTo} />

            <label className="block max-w-sm">
              <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-[0.15em] mb-2">
                Password
              </span>
              <input
                type="password"
                name="password"
                required
                autoComplete="off"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "unlock-error" : undefined}
                className="w-full bg-white border border-neutral-500 rounded-xl px-4 py-3.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                placeholder="Enter password"
              />
            </label>

            {error && (
              <p id="unlock-error" role="alert" className="text-sm text-red-700">
                That password didn&apos;t match. Try again, or reach out for access.
              </p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-neutral-900 text-white rounded-full px-7 py-3 font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-200 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-neutral-900"
              >
                Unlock case study
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
