// Slide shape used by <PresentationMode>. Authored per case study and passed
// through CaseStudyLayout. Keep this in sync with skills/case-study-builder/
// references/slide-template.md.
//
// The slide kinds follow the canonical live-walkthrough story arc for a
// senior product designer interview. See live_presentation_research.md.

export type SlideKind =
  // Live-walkthrough vocabulary (preferred for new decks)
  | "cover"
  | "problem"
  | "research"
  | "insight"
  | "constraints"
  | "exploration"
  | "design"
  | "testing"
  | "iteration"
  | "outcome"
  | "reflection"
  // Legacy kinds. Kept compiling existing decks until they're rewritten
  | "context"
  | "decision"
  | "solution"
  | "result";

export interface Slide {
  /** ≤60 chars, can wrap to two lines on screen */
  title: string;
  /** ≤30 words; the "voiceover" line that sits under the title */
  subtext?: string;
  /** Path under /public/, or null for a type-only slide */
  image?: string | null;
  /** Optional caption shown below the image on content slides */
  caption?: string;
  /** Drives the small label and the slide's role in the story arc */
  kind: SlideKind;
}
