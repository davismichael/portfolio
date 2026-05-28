"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * Wraps the app in a Framer Motion MotionConfig that honors the OS-level
 * `prefers-reduced-motion: reduce` setting. With `reducedMotion="user"`,
 * Framer Motion strips transforms and opacity animations for users who have
 * asked their system to reduce motion, while leaving them alone for everyone
 * else.
 *
 * CSS transitions/animations are handled separately by the
 * `@media (prefers-reduced-motion: reduce)` rule in globals.css.
 */
export default function ReducedMotionProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
