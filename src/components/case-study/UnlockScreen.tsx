"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { unlockCaseStudyAction } from "@/app/actions/unlock-case-study";

interface UnlockScreenProps {
  /** Display name shown above the form, e.g. "New Product" */
  caseStudyName: string;
  /** Path to redirect back to on success, e.g. "/case-study/new-product" */
  returnTo: string;
  /** When true, render the error state. Driven by ?unlock_error=1 search param. */
  error?: boolean;
}

export default function UnlockScreen({
  caseStudyName,
  returnTo,
  error,
}: UnlockScreenProps) {
  return (
    <main id="main" className="min-h-screen" style={{ background: "#f4f3ee" }}>
      <section className="relative overflow-hidden min-h-screen" style={{ background: "#f4f3ee" }}>
        <Navigation />

        <div className="relative max-w-xl mx-auto px-4 sm:px-8 pt-32 pb-20 md:pt-40">
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
            This case study covers work under NDA. Enter the password to view the
            full write-up and the presentation deck. Reach out if you need
            access.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            action={unlockCaseStudyAction}
            className="space-y-4"
          >
            <input type="hidden" name="returnTo" value={returnTo} />

            <label className="block">
              <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-[0.15em] mb-2">
                Password
              </span>
              <input
                type="password"
                name="password"
                required
                autoFocus
                autoComplete="off"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "unlock-error" : undefined}
                className="w-full bg-white border border-neutral-500 rounded-xl px-4 py-3.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                placeholder="Enter password"
              />
            </label>

            {error && (
              <p
                id="unlock-error"
                role="alert"
                className="text-sm text-red-700"
              >
                That password didn&apos;t match. Try again, or reach out for access.
              </p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-neutral-900 text-white rounded-full px-7 py-3 font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-200 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-neutral-900"
              >
                Unlock case study
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
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
