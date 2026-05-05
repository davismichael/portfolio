"use server";

import { redirect } from "next/navigation";
import { unlockWithPassword } from "@/lib/case-study-auth";

const SAFE_RETURN_PREFIXES = ["/case-study/"];

function safeReturnTo(raw: string | null): string {
  if (!raw) return "/";
  if (!raw.startsWith("/")) return "/";
  if (raw.startsWith("//")) return "/";
  // Only allow returning to known case-study paths
  if (SAFE_RETURN_PREFIXES.some((p) => raw.startsWith(p))) return raw;
  return "/";
}

export async function unlockCaseStudyAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const returnTo = safeReturnTo(String(formData.get("returnTo") ?? ""));

  const ok = await unlockWithPassword(password);
  if (ok) {
    redirect(returnTo);
  }
  // Failure: redirect back to the unlock screen for the same case study,
  // with an error flag the page can display.
  redirect(`${returnTo}?unlock_error=1`);
}
