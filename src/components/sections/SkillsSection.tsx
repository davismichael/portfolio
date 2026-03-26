"use client";
import { motion } from "framer-motion";
import FadeInOnScroll from "../animations/FadeInOnScroll";

const SKILL_AREAS = [
  {
    title: "AI Orchestration",
    description:
      "I design multi-model pipelines — Gemini for reasoning, Grok for generation, custom agents for automation. Not just API calls, but full architectures that deliver production-quality results.",
    items: ["Gemini API", "Grok API", "LLM Pipelines", "Prompt Engineering", "ComfyUI"],
  },
  {
    title: "Full-Stack Product",
    description:
      "End-to-end: mobile apps in React Native, web platforms in Next.js, backends with Node and Supabase. I ship the whole thing, not just one layer.",
    items: ["React Native", "Next.js", "TypeScript", "Supabase", "Vercel"],
  },
  {
    title: "Product & Growth",
    description:
      "I think in user journeys and conversion funnels, not just features. SEO, content strategy, and retention loops are part of how I build — not afterthoughts.",
    items: ["Product Strategy", "SEO / GEO", "Content Systems", "Conversion Optimization"],
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 md:py-28">
        <FadeInOnScroll className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            How I think about building.
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
            I don&apos;t just write code. I orchestrate AI models, ship products,
            and grow them.
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium bg-white text-gray-600 rounded-full px-3 py-1 border border-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
