import type { CaseStudy } from "@/components/sections/CaseStudyGrid";

// Toggle for in-progress case studies. Set SHOW_IN_PROGRESS=true in .env.local
// to keep them visible while developing. On Vercel the env var is unset so
// in-progress cards are hidden from the live site.
const SHOW_IN_PROGRESS = process.env.SHOW_IN_PROGRESS === "true";

// Professional work for companies. Senior-PD case studies, ordered roughly
// most-recent → least-recent.
const ALL_WORK: CaseStudy[] = [
  {
    title: "AI Product",
    inProgress: true,
    description:
      "A confidential AI-native rebuild of a mature intelligence product. Solo Designer + PM, twelve weeks. The new product turns search into synthesis, runs agents to keep client profiles current, and lets users author markdown skills that shape what the system prioritizes. Prototyped in Claude with real data through MCP, shipped React via Subframe.",
    image: "/images/case-studies/iris.png",
    href: "/case-study/new-product",
    locked: true,
  },
  {
    title: "One Platform",
    description:
      "Consolidated an enterprise intelligence suite into one platform with a single risk language. Sr. Product Designer + PM, working staff-shape across strategy, design, and PM.",
    image: "/images/case-studies/one-platform.png",
    href: "/case-study/one-platform",
    locked: true,
  },
  {
    title: "Make Payments",
    description:
      "As Lead UX, I designed an end-to-end mobile payment experience for game-official compensation, reducing friction and increasing clarity across complex transaction flows.",
    image: "/images/case-studies/make-payments.png",
    href: "/case-study/make-payments",
  },
  {
    title: "Interactive Video",
    description:
      "As Sr. Product Designer, I led product design for an interactive video platform, creating engagement-driven interfaces that let viewers take action without leaving the experience.",
    image: "/images/case-studies/interactive-video.png",
    href: "/case-study/interactive-video",
  },
  {
    title: "Shop on Live Video",
    description:
      "As Sr. Design Manager, I managed design for a live video commerce experience, defining UX patterns that made browsing, selecting, and purchasing seamless during live broadcasts.",
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
      "A digital wellness app I built to help people take intentional breaks from their devices.",
    image: "/images/case-studies/breakoff.png",
    href: "https://breakoff.io",
    external: true,
  },
  {
    title: "StudioSelf",
    description:
      "An AI photo and video studio. Upload a face reference, pick a look or motion, and the studio generates polished, on-brand content for you.",
    devices: {
      leftLaptop: "/images/case-studies/Studioself/desktop-photo.png",
      phone: "/images/case-studies/Studioself/mobile.png",
      rightLaptop: "/images/case-studies/Studioself/desktop-video.png",
    },
    href: "https://studioself.io",
    external: true,
  },
];
