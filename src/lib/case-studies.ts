import type { CaseStudy } from "@/components/sections/CaseStudyGrid";

// Toggle for in-progress case studies. Set SHOW_IN_PROGRESS=true in .env.local
// to keep them visible while developing. On Vercel the env var is unset so
// in-progress cards are hidden from the live site.
const SHOW_IN_PROGRESS = process.env.SHOW_IN_PROGRESS === "true";

// Professional work for companies. Senior-PD case studies, ordered roughly
// most-recent → least-recent.
const ALL_WORK: CaseStudy[] = [
  {
    title: "AI Automation",
    description:
      "Strider's first AI-assisted RFI system, cutting analyst turnaround from two weeks to under 24 hours.",
    image: "/images/case-studies/rfi-automation/nobg/hero-opaque.png",
    href: "/case-study/rfi-automation",
    locked: true,
  },
  {
    title: "One Platform",
    description:
      "Consolidated Strider's four-product intelligence suite into one platform with a single risk language.",
    image: "/images/case-studies/one-platform.png",
    href: "/case-study/one-platform",
    locked: true,
    inProgress: true,
  },
  {
    title: "Make Payments",
    description:
      "End-to-end mobile payment experience for paying game officials on the field.",
    image: "/images/case-studies/make-payments.png",
    href: "/case-study/make-payments",
  },
  {
    title: "Interactive Video",
    description:
      "Shoppable, actionable video built into Verb's CRM for white-label distributors.",
    image: "/images/case-studies/interactive-video.png",
    href: "/case-study/interactive-video",
  },
  {
    title: "Shop on Live Video",
    description:
      "Live video commerce. Led six designers under a pandemic-disrupted timeline.",
    image: "/images/case-studies/shop-on-live-video.png",
    href: "/case-study/shop-on-live-video",
  },
];

export const MY_WORK: CaseStudy[] = ALL_WORK.filter(
  (study) => !study.inProgress || SHOW_IN_PROGRESS,
);

// Products Michael built and shipped on his own. Lives on /projects.
export const PROJECTS: CaseStudy[] = [
  {
    title: "BreakOff",
    description:
      "Built every surface in React Native and shipped to the App Store as a solo founder. Real screen time controls powered by Apple's Family Controls API, with a UX that treats limits like a workout plan instead of a punishment. Live on the App Store and still shipping.",
    image: "/images/case-studies/breakoff.png",
    href: "https://breakoff.io",
    external: true,
  },
  {
    title: "StudioSelf",
    description:
      "An AI photo and video studio for personal brands. Upload a face reference, pick a look or a motion, and the studio returns polished content that stays on brand. Solo build. Multiple AI models orchestrated under the hood.",
    devices: {
      leftLaptop: "/images/case-studies/Studioself/desktop-photo.png",
      phone: "/images/case-studies/Studioself/mobile.png",
      rightLaptop: "/images/case-studies/Studioself/desktop-video.png",
    },
    href: "https://studioself.io",
    external: true,
  },
];
