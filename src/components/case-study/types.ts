// Slide shape used by <PresentationMode>. Authored per case study and passed
// through CaseStudyLayout. Keep this in sync with skills/case-study-builder/
// references/slide-template.md.

export type SlideKind =
  | "cover"
  | "context"
  | "problem"
  | "decision"
  | "solution"
  | "result"
  | "reflection";

export interface Slide {
  /** ≤60 chars, can wrap to two lines on screen */
  title: string;
  /** ≤30 words; the "voiceover" line that sits under the title */
  subtext?: string;
  /** Path under /public/, or null for a type-only slide */
  image?: string | null;
  /** Optional caption shown below the image on content slides */
  caption?: string;
  /** Drives slide chrome (cover gets the gradient, content slides go light) */
  kind: SlideKind;
}
