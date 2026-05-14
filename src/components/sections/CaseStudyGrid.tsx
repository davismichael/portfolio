import Link from "next/link";
import { isUnlocked } from "@/lib/case-study-auth";
import MoreCardsToggle from "@/components/sections/MoreCardsToggle";
import DeviceComposite, {
  Laptop,
  SingleLaptopComposite,
} from "@/components/sections/DeviceComposite";

export interface CaseStudy {
  title: string;
  subtitle?: string;
  description: string;
  /** Path under /public/. If null/missing, falls back to a dark gradient. */
  image?: string | null;
  /** Render three CSS device mockups (laptop / phone / laptop) instead of a single bg image. */
  devices?: {
    leftLaptop: string;
    phone: string;
    rightLaptop: string;
  };
  /** Render a single centered laptop mockup. Mutually exclusive with `devices` and `image`. */
  singleLaptop?: string;
  /**
   * Pin the laptop to one side on desktop with text on the opposite side.
   * Only meaningful when `singleLaptop` is set. Below the `md` breakpoint the
   * card falls back to the centered-laptop-as-background look.
   */
  laptopSide?: "left" | "right";
  href: string;
  external?: boolean;
  /** When true, this case study sits behind the password gate. */
  locked?: boolean;
  /** When true, render as a "coming soon" tease (placeholder copy, dimmer card, click goes nowhere). */
  comingSoon?: boolean;
  /** When true, render an "In Progress" badge above the title. */
  inProgress?: boolean;
}

interface CaseStudyGridProps {
  /** Anchor target for nav links, e.g. "my-work". Optional when the grid is the only content on a page. */
  id?: string;
  /** Section label shown above the cards. Omit when the page hero already labels the section. */
  label?: string;
  studies: CaseStudy[];
  /** Hide cards beyond this index behind a "Show more" button. Omit to show all. */
  collapsibleAfter?: number;
}

export default async function CaseStudyGrid({
  id,
  label,
  studies,
  collapsibleAfter,
}: CaseStudyGridProps) {
  // Hide the lock badge once the visitor is already unlocked. The gate on the
  // case study page is the source of truth; this is purely a visual hint.
  const unlocked = await isUnlocked();

  return (
    <section id={id} className="bg-black">
      {label && (
        <div className="text-center pt-20 pb-2">
          <p className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium">
            {label}
          </p>
        </div>
      )}

      {(() => {
        const allCards = studies.map((study, index) => {
        const showLockBadge = !!study.locked && !unlocked;
        // Split-layout cards put the laptop on one side and text on the other
        // at `md+`; below that they keep the centered-with-vignette look.
        const isSplit = !!(study.singleLaptop && study.laptopSide);
        const cta = study.comingSoon
          ? "Coming Soon"
          : study.external
            ? `Visit ${study.title}`
            : study.locked && !unlocked
              ? "Enter Password"
              : "Read Case Study";

        const cardInner = (
          <>
            {/* Background. Devices, single laptop, image, or gradient fallback */}
            {study.devices ? (
              <>
                {/* Subtle dark base behind the devices so they have something to sit on */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)",
                  }}
                />
                <DeviceComposite {...study.devices} altBase={study.title} />
              </>
            ) : study.singleLaptop ? (
              <>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)",
                  }}
                />
                {/* Mobile: laptop is the absolute-positioned card background. */}
                <div className={isSplit ? "md:hidden" : undefined}>
                  <SingleLaptopComposite
                    src={study.singleLaptop}
                    altBase={study.title}
                  />
                </div>
                {/* Desktop split: laptop becomes an in-flow flex child on one side.
                    Width is capped so the 16:10 screen height stays within the
                    card's 60vh minHeight + 80px vertical padding. */}
                {isSplit && (
                  <div className="hidden md:block md:w-[42%] md:max-w-[520px] md:flex-shrink-0 drop-shadow-2xl">
                    <Laptop
                      src={study.singleLaptop}
                      alt={`${study.title} (laptop)`}
                    />
                  </div>
                )}
              </>
            ) : study.image ? (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${study.image}')` }}
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
                }}
              />
            )}
            {/* Scrim. Device mockups get a softer center vignette so they stay visible at the edges.
                Split-layout cards drop the scrim above `md` since text and laptop no longer overlap. */}
            {study.devices || study.singleLaptop ? (
              <div
                className={`absolute inset-0${isSplit ? " md:hidden" : ""}`}
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.45) 100%)",
                }}
              />
            ) : (
              <div
                className={`absolute inset-0 ${
                  study.comingSoon ? "bg-black/85" : "bg-black/75"
                }`}
              />
            )}

            {/* Top-right status badges */}
            {showLockBadge && (
              <div className="absolute top-6 right-6 md:top-8 md:right-10 z-20 inline-flex items-center gap-2 rounded-full bg-white text-black px-3.5 py-2 shadow-lg shadow-black/40">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3.5 6V4.5a3.5 3.5 0 117 0V6M2.5 6h9v6h-9V6z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  Password Required
                </span>
              </div>
            )}

            {study.comingSoon && (
              <div className="absolute top-6 right-6 md:top-8 md:right-10 z-20 inline-flex items-center gap-2 rounded-full bg-white/95 text-black px-3.5 py-2 shadow-lg shadow-black/40">
                <span className="size-1.5 rounded-full bg-black animate-pulse" aria-hidden />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  Coming Soon
                </span>
              </div>
            )}

            {/* Content */}
            <div className={`relative z-10${isSplit ? " md:w-[48%]" : ""}`}>
              {study.inProgress && (
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 border border-amber-400/40 px-4 py-2 mb-5">
                  <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" aria-hidden />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                    In Progress
                  </span>
                </div>
              )}

              {study.subtitle && !study.inProgress && (
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

              <p
                className={`text-white/70 text-base md:text-lg leading-relaxed max-w-[650px] mb-10 font-light mx-auto${
                  isSplit ? " md:mx-0" : ""
                }`}
              >
                {study.description}
              </p>

              <span
                className={`inline-block border border-white text-white text-xs font-normal uppercase tracking-[0.2em] px-10 py-4 ${
                  study.comingSoon
                    ? "opacity-60 cursor-default"
                    : "hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                }`}
              >
                {cta}
              </span>
            </div>
          </>
        );

        const splitClasses = isSplit
          ? study.laptopSide === "right"
            ? " md:flex-row-reverse md:justify-between md:gap-10 lg:gap-16 md:text-right md:px-10 lg:px-16"
            : " md:flex-row md:justify-between md:gap-10 lg:gap-16 md:text-left md:px-10 lg:px-16"
          : "";
        const cardClassName = `relative flex flex-col items-center justify-center text-center px-6 md:px-12 overflow-hidden${splitClasses}`;
        const cardStyle = {
          minHeight: "60vh",
          padding: "80px 24px",
          marginTop: index === 0 ? "16px" : "40px",
        } as const;

        if (study.comingSoon) {
          return (
            <div key={study.title} className={cardClassName} style={cardStyle}>
              {cardInner}
            </div>
          );
        }

        if (study.external) {
          return (
            <a
              key={study.title}
              href={study.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardClassName} group`}
              style={cardStyle}
            >
              {cardInner}
            </a>
          );
        }

        return (
          <Link
            key={study.title}
            href={study.href}
            className={`${cardClassName} group`}
            style={cardStyle}
          >
            {cardInner}
          </Link>
        );
        });

        if (typeof collapsibleAfter !== "number" || collapsibleAfter >= allCards.length) {
          return allCards;
        }

        const visible = allCards.slice(0, collapsibleAfter);
        const hidden = allCards.slice(collapsibleAfter);
        return (
          <>
            {visible}
            <MoreCardsToggle count={hidden.length}>{hidden}</MoreCardsToggle>
          </>
        );
      })()}
    </section>
  );
}
