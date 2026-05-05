import { permanentRedirect } from "next/navigation";

// Old IRIS slug. Redirect any bookmarked links to the new password-gated slug.
export default function IrisRedirectPage(): never {
  permanentRedirect("/case-study/new-product");
}
