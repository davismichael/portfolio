"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import FadeInOnScroll from "../animations/FadeInOnScroll";

const CASE_STUDIES = [
  {
    title: "One Platform",
    role: "Sr. Product Designer — Strider Technologies",
    description:
      "Led the UX consolidation of multiple intelligence products (Ranger, Checkpoint, Sentry) into a single unified platform. Redesigned search, entity disambiguation, and risk analysis workflows to give analysts a cohesive experience across threat landscape, due diligence, and supply chain screening.",
    skills: ["Platform Consolidation", "Information Architecture", "Enterprise UX", "Data Visualization"],
    color: "from-[#0f172a] to-[#1e293b]",
    href: "/case-study/one-platform",
  },
  {
    title: "Make Payments",
    role: "Lead UX Designer",
    description:
      "Designed an end-to-end payment experience focused on reducing friction and increasing clarity. Simplified complex transaction flows into intuitive, step-by-step interactions that users could complete with confidence.",
    skills: ["Interaction Design", "Prototyping", "Usability Testing", "Design Systems"],
    color: "from-[#094bcc] to-[#082f7b]",
    href: "/case-study/make-payments",
  },
  {
    title: "Interactive Video",
    role: "Sr. Product Designer",
    description:
      "Led product design for an interactive video platform, creating engagement-driven interfaces that let viewers take action without leaving the experience. Balanced rich media with clean, distraction-free UI.",
    skills: ["Product Design", "UX Strategy", "Cross-functional Collaboration", "Micro-animations"],
    color: "from-[#ff983b] to-[#c94001]",
    href: "/case-study/interactive-video",
  },
  {
    title: "Shop on Live Video",
    role: "Sr. Design Manager",
    description:
      "Managed design for a live video commerce experience, merging real-time shopping with livestream interaction. Defined the UX patterns that made browsing, selecting, and purchasing seamless during live broadcasts.",
    skills: ["Design Leadership", "Systems Thinking", "UX Architecture", "Stakeholder Alignment"],
    color: "from-[#393b29] to-[#1a1c0e]",
    href: "/case-study/shop-on-live-video",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative bg-[#faf9f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 md:py-28">
        {/* Section heading */}
        <FadeInOnScroll className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Case Studies.
          </h2>
          <p className="text-lg sm:text-xl text-gray-500">
            Enterprise UX work across intelligence, payments, video, and commerce.
          </p>
        </FadeInOnScroll>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <Link key={study.title} href={study.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`bg-gradient-to-br ${study.color} rounded-2xl p-6 md:p-8 relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                <div className="relative">
                  {/* Role badge */}
                  <span className="inline-block text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
                    {study.role}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/75 text-sm leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium bg-white/15 text-white/90 rounded-full px-3 py-1 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    Read case study
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
