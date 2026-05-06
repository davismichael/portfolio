// GET /case-study/lock
// Clears the unlock cookie and bounces to the home case-studies anchor.
// Useful for testing the gate and as a built-in way to "sign out" of the
// password-protected case studies.

import { NextResponse } from "next/server";
import { lockAgain } from "@/lib/case-study-auth";

export async function GET(request: Request) {
  await lockAgain();
  const home = new URL("/#my-work", request.url);
  return NextResponse.redirect(home, { status: 303 });
}
