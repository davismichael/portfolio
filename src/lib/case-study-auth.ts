// Cookie-based unlock for NDA case studies.
// One shared password across all protected case studies, set in .env.local
// as CASE_STUDY_PASSWORD. Cookie carries an HMAC of a constant string keyed
// on the password. Rotating the password invalidates every existing cookie.

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "cs_unlock";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function makeToken(password: string): string {
  return createHmac("sha256", password)
    .update("case-study-unlock-v1")
    .digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  try {
    return timingSafeEqual(Buffer.from(a), Buffer.from(b));
  } catch {
    return false;
  }
}

/** True when the visitor's cookie matches the current CASE_STUDY_PASSWORD. */
export async function isUnlocked(): Promise<boolean> {
  const password = process.env.CASE_STUDY_PASSWORD;
  if (!password) return false;
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return safeEqual(token, makeToken(password));
}

/** Validate password and set the unlock cookie. Returns true on success. */
export async function unlockWithPassword(input: string): Promise<boolean> {
  const required = process.env.CASE_STUDY_PASSWORD;
  if (!required) return false;
  if (!safeEqual(input, required)) return false;

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, makeToken(required), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
  return true;
}

/** Clear the unlock cookie. Useful for a future "lock again" link. */
export async function lockAgain(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
