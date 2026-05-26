"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Strip the hash from the URL after the browser scrolls to the target.
  // Without this, refreshing on /#contactme or /#my-work re-jumps to the
  // section instead of letting scroll-restoration land you where you were.
  useEffect(() => {
    function cleanHash() {
      if (!window.location.hash) return;
      // Give the browser/Next.js time to complete its scroll-to-anchor first.
      setTimeout(() => {
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }, 600);
    }
    cleanHash();
    window.addEventListener("hashchange", cleanHash);
    return () => window.removeEventListener("hashchange", cleanHash);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 bg-black">
      {/* Logo. Full name on desktop, MD on mobile. */}
      <Link
        href="/"
        className="text-white italic font-light tracking-wide"
        onClick={close}
      >
        <span className="md:hidden text-xl">MD</span>
        <span className="hidden md:inline text-xl md:text-2xl">
          Michael A. Davis
        </span>
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-10">
        <Link
          href="/#my-work"
          className="text-white text-xs font-normal uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          Work
        </Link>
        <Link
          href="/projects"
          className="text-white text-xs font-normal uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          Side Projects
        </Link>
        <a
          href="/Michael_Davis_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs font-normal uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          Resume
        </a>
        <Link
          href="/#contactme"
          className="text-white text-xs font-normal uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          Contact
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 -mr-1"
      >
        <span
          className={`block h-[1.5px] w-6 bg-white transition-transform duration-200 ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[1.5px] w-6 bg-white transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-[1.5px] w-6 bg-white transition-transform duration-200 ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed inset-x-0 top-[56px] bottom-0 bg-black flex flex-col items-center justify-start pt-12 gap-8 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/#my-work"
          onClick={close}
          className="text-white text-sm font-normal uppercase tracking-[0.25em]"
        >
          Work
        </Link>
        <Link
          href="/projects"
          onClick={close}
          className="text-white text-sm font-normal uppercase tracking-[0.25em]"
        >
          Side Projects
        </Link>
        <a
          href="/Michael_Davis_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="text-white text-sm font-normal uppercase tracking-[0.25em]"
        >
          Resume
        </a>
        <Link
          href="/#contactme"
          onClick={close}
          className="text-white text-sm font-normal uppercase tracking-[0.25em]"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
