import Link from "next/link";
import { isUnlocked } from "@/lib/case-study-auth";

interface CaseStudy {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  href: string;
  external?: boolean;
  /** When true, this case study sits behind the password gate. */
  locked?: boolean;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "BreakOff",
    subtitle: "FOUNDER & DEVELOPER",
    description:
      "A digital wellness app I built to help people take intentional breaks from their devices.",
    image: "/images/case-studies/breakoff.png",
    href: "https://breakoff.io",
    external: true,
  },
  {
    title: "New Product",
    description:
      "A confidential rebuild of a mature product as an AI operating system. Sole Designer + PM, with a custom stack of AI agents standing in for the team I didn't have.",
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
      "As Head of UX, I designed an end-to-end mobile payment experience for game official compensation, reducing friction and increasing clarity across complex transaction flows.",
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

export default async function CaseStudiesSection() {
  // Hide the lock badge once the visitor is already unlocked. The gate on the
  // case study page is the source of truth; this is purely a visual hint.
  const unlocked = await isUnlocked();

  return (
    <section id="casestudies" className="bg-black">
      {CASE_STUDIES.map((study, index) => {
        const showLockBadge = !!study.locked && !unlocked;

        const cta = study.external
          ? "Visit BreakOff"
          : study.locked && !unlocked
            ? "Enter Password"
            : "Read Case Study";

        return (
          <div
            key={study.title}
            className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 overflow-hidden"
            style={{
              minHeight: "60vh",
              padding: "80px 24px",
              marginTop: index === 0 ? 0 : "40px",
            }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${study.image}')` }}
            />
            {/* Black scrim */}
            <div className="absolute inset-0 bg-black/75" />

            {/* Content */}
            <div className="relative z-10">
              {showLockBadge && (
                <div className="inline-flex items-center gap-2 mb-5 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3.5 6V4.5a3.5 3.5 0 117 0V6M2.5 6h9v6h-9V6z"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[10px] font-semibold text-white/80 uppercase tracking-[0.2em]">
                    Password Required
                  </span>
                </div>
              )}

              {study.subtitle && (
                <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-4 font-normal">
                  {study.subtitle}
                </p>
              )}

              <h2
                className="text-white font-bold uppercase tracking-[0.05em] mb-6"
                style={{ fontSize: "clamp(40px, 7vw, 90px)", lineHeight: 1.1 }}
              >
                {study.title}
              </h2>

              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[650px] mb-10 font-light mx-auto">
                {study.description}
              </p>

              {study.external ? (
                <a
                  href={study.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white text-white text-xs font-normal uppercase tracking-[0.2em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                >
                  {cta}
                </a>
              ) : (
                <Link href={study.href}>
                  <span className="inline-block border border-white text-white text-xs font-normal uppercase tracking-[0.2em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                    {cta}
                  </span>
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
