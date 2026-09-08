"use client";

import { useEffect } from "react";

// On a fresh load with no hash, start at the top. Stops the browser's
// scroll restoration and the booking iframe from landing mid-page.
export default function ScrollToTop() {
  useEffect(() => {
    if (window.location.hash) return;
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    const t = setTimeout(() => window.scrollTo(0, 0), 250);
    return () => clearTimeout(t);
  }, []);
  return null;
}
