import Link from "next/link";

const CASE_STUDIES = [
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
    title: "One Platform",
    description:
      "As Lead Product Designer, I led the UX consolidation of multiple intelligence products into a single unified platform, redesigning search, entity disambiguation, and risk analysis workflows.",
    image: "/images/case-studies/one-platform.png",
    href: "/case-study/one-platform",
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

export default function CaseStudiesSection() {
  return (
    <section id="casestudies">
      {CASE_STUDIES.map((study) => (
        <div
          key={study.title}
          className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 overflow-hidden"
          style={{ minHeight: "60vh", padding: "80px 24px" }}
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
            {/* Subtitle / Role */}
            {study.subtitle && (
              <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-4 font-normal">
                {study.subtitle}
              </p>
            )}

            {/* Title */}
            <h2
              className="text-white font-bold uppercase tracking-[0.05em] mb-6"
              style={{ fontSize: "clamp(40px, 7vw, 90px)", lineHeight: 1.1 }}
            >
              {study.title}
            </h2>

            {/* Description */}
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[650px] mb-10 font-light mx-auto">
              {study.description}
            </p>

            {/* CTA Button */}
            {study.external ? (
              <a
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white text-xs font-normal uppercase tracking-[0.2em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                Visit BreakOff
              </a>
            ) : (
              <Link href={study.href}>
                <span className="inline-block border border-white text-white text-xs font-normal uppercase tracking-[0.2em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                  Read Case Study
                </span>
              </Link>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
