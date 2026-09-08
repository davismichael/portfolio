"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import FadeInOnScroll from "../animations/FadeInOnScroll";
import { FAQS } from "@/lib/services";

// FAQ accordion. Research: FAQ sections are load-bearing on high-ticket
// service pages; name the objection, answer candidly. Native disclosure
// pattern with buttons for keyboard accessibility.
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white border-t border-neutral-200">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeInOnScroll className="mb-12 text-center">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">
            Questions
          </p>
          <h2
            className="text-neutral-900 font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            Before you ask.
          </h2>
        </FadeInOnScroll>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer group"
                >
                  <span className="text-neutral-900 font-semibold text-base md:text-lg group-hover:opacity-70 transition-opacity">
                    {faq.question}
                  </span>
                  <Plus
                    size={18}
                    aria-hidden
                    className={`text-neutral-500 shrink-0 transition-transform duration-200 ${
                      open ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  hidden={!open}
                  className="pb-6 -mt-1"
                >
                  <p className="text-neutral-600 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
