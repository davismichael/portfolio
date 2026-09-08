"use client";

import Link from "next/link";
import Image from "next/image";
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
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 bg-white">
      {/* Logo. Wordmark on desktop, monogram on mobile. */}
      <Link href="/" aria-label="Davis Makes home" onClick={close} className="flex items-center">
        <Image
          src="/brand/davismakes-monogram.png"
          alt=""
          width={860}
          height={584}
          priority
          className="md:hidden h-8 w-auto"
        />
        <Image
          src="/brand/davismakes-logo.png"
          alt="Davis Makes"
          width={2208}
          height={688}
          priority
          className="hidden md:block h-9 w-auto"
        />
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-10">
        <Link
          href="/#services"
          className="text-neutral-900 text-xs font-normal uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
        >
          Services
        </Link>
        <Link
          href="/#process"
          className="text-neutral-900 text-xs font-normal uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
        >
          How it works
        </Link>
        <Link
          href="/#pricing"
          className="text-neutral-900 text-xs font-normal uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
        >
          Pricing
        </Link>
        <Link
          href="/#contactme"
          className="text-neutral-900 text-xs font-normal uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
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
          className={`block h-[1.5px] w-6 bg-neutral-900 transition-transform duration-200 ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[1.5px] w-6 bg-neutral-900 transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-[1.5px] w-6 bg-neutral-900 transition-transform duration-200 ${
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
        className={`md:hidden fixed inset-x-0 top-[56px] bottom-0 bg-white flex flex-col items-center justify-start pt-12 gap-8 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/#services"
          onClick={close}
          className="text-neutral-900 text-sm font-normal uppercase tracking-[0.2em]"
        >
          Services
        </Link>
        <Link
          href="/#process"
          onClick={close}
          className="text-neutral-900 text-sm font-normal uppercase tracking-[0.2em]"
        >
          How it works
        </Link>
        <Link
          href="/#pricing"
          onClick={close}
          className="text-neutral-900 text-sm font-normal uppercase tracking-[0.2em]"
        >
          Pricing
        </Link>
        <Link
          href="/#contactme"
          onClick={close}
          className="text-neutral-900 text-sm font-normal uppercase tracking-[0.2em]"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
