"use client";
import { motion } from "framer-motion";
import FadeInOnScroll from "../animations/FadeInOnScroll";

const PROJECTS = [
  {
    name: "BreakOff",
    tagline: "Screen-time management, reimagined.",
    description:
      "A full iOS app that helps people take intentional breaks from their screens. Built with React Native and Expo, shipped to the App Store. Real users, real retention, real impact on digital wellness.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    gradient: "subscription-card-gradient",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="white" strokeWidth="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "StudioSelf",
    tagline: "AI portraits that actually look like you.",
    description:
      "A private AI photography studio combining Gemini and Grok for identity-consistent image generation. Multi-model orchestration, face-locking pipelines, and viral-ready outputs.",
    tech: ["Next.js", "Gemini API", "Grok API", "ComfyUI"],
    gradient: "build-card-gradient",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="12" r="1" fill="white" />
      </svg>
    ),
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-white overflow-hidden">
      {/* Orange decorative strip */}
      <div className="orange-strip h-2 w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 md:py-28">
        {/* Section heading */}
        <FadeInOnScroll className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            What I&apos;ve shipped.
          </h2>
          <p className="text-lg sm:text-xl text-gray-500">
            Real products, real users. Not just prototypes.
          </p>
        </FadeInOnScroll>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`${project.gradient} rounded-2xl p-6 md:p-8 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

              <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-lg">
                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff983b] flex items-center justify-center flex-shrink-0">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500">{project.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium bg-gray-100 text-gray-600 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
