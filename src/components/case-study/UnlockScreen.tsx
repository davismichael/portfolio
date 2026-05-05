"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { unlockCaseStudyAction } from "@/app/actions/unlock-case-study";

interface UnlockScreenProps {
  /** The case study's accent gradient classes, e.g. "from-[#0c0a1f] to-[#1e1b3b]" */
  color: string;
  /** Display name shown above the form, e.g. "New Product" */
  caseStudyName: string;
  /** Path to redirect back to on success, e.g. "/case-study/new-product" */
  returnTo: string;
  /** When true, render the error state. Driven by ?unlock_error=1 search param. */
  error?: boolean;
}

export default function UnlockScreen({
  color,
  caseStudyName,
  returnTo,
  error,
}: UnlockScreenProps) {
  return (
    <main className="min-h-screen" style={{ background: "#0f0f0f" }}>
      <section className={`bg-gradient-to-br ${color} relative overflow-hidden min-h-screen`}>
        <Navigation />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-xl mx-auto px-4 sm:px-8 pt-32 pb-20 md:pt-40">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="grid place-items-center size-9 rounded-full bg-white/10 backdrop-blur-sm">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M3.5 6V4.5a3.5 3.5 0 117 0V6M2.5 6h9v6h-9V6z"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-xs font-semibold text-white/60 uppercase tracking-[0.2em]">
              Password Required
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight"
          >
            {caseStudyName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/70 text-base sm:text-lg leading-relaxed font-light mb-10 max-w-lg"
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
              <span className="block text-xs font-semibold text-white/50 uppercase tracking-[0.15em] mb-2">
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
                className="w-full bg-black/30 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-black/40 backdrop-blur-sm transition-colors"
                placeholder="Enter password"
              />
            </label>

            {error && (
              <p
                id="unlock-error"
                role="alert"
                className="text-sm text-red-300/90"
              >
                That password didn&apos;t match. Try again, or reach out for access.
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-white text-black rounded-full px-7 py-3 font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-200 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-white"
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
              <a
                href="mailto:michael@breakoff.io?subject=Case%20study%20password"
                className="text-xs font-medium text-white/60 hover:text-white uppercase tracking-[0.15em] transition-colors"
              >
                Request access
              </a>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
