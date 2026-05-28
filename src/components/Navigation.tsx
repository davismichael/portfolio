"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Focus trap + Escape-to-close for the mobile menu. When the menu opens,
  // focus moves to the first link inside it; Tab/Shift+Tab cycle within the
  // menu; Escape closes and returns focus to the hamburger button. Without
  // this, keyboard users could Tab past the open menu to elements visually
  // hidden behind it, which is a real WCAG 2.4.3 (Focus Order) bug.
  useEffect(() => {
    if (!open) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusables = menu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    // Move focus into the menu on open.
    first?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Return focus to the hamburger when the menu closes, so keyboard users
  // land where they were before opening it.
  useEffect(() => {
    if (!open && hamburgerRef.current) {
      // Only restore focus if focus is currently on the body (i.e. nothing
      // explicit grabbed it), to avoid stealing focus when the user clicked
      // a link that navigates away.
      if (document.activeElement === document.body) {
        hamburgerRef.current.focus();
      }
    }
  }, [open]);

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
        ref={hamburgerRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
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
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
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
