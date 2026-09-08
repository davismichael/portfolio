"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BookingEmbed from "../ui/BookingEmbed";
import { BOOKING_URL } from "@/lib/services";

const PROJECT_TYPES = [
  "Prototype + Quote",
  "MVP Build",
  "Marketing Website",
  "AI Product Audit",
  "Fractional Design Partner",
  "Something else",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = formData.projectType
      ? `Project inquiry: ${formData.projectType}`
      : "Project inquiry";
    window.location.href = `mailto:michaelaustindavis@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nProject type: ${formData.projectType}\n\n${formData.message}`)}`;
  };

  return (
    <section id="contactme" className="bg-white text-neutral-900 border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">
            {BOOKING_URL ? "Book a 20-minute call" : "Get in touch"}
          </p>
          <h2
            className="text-neutral-900 font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Tell me what
            <br />
            you&apos;re building.
          </h2>
          <p className="text-neutral-600 text-lg mt-5">
            {BOOKING_URL
              ? "Pick a time. You leave with a price and a start date."
              : "I reply within one business day."}
          </p>
        </div>

        {BOOKING_URL && (
          <div className="max-w-4xl mx-auto mb-16">
            <BookingEmbed url={BOOKING_URL} />
            <p className="text-center text-neutral-500 text-sm mt-6">
              Prefer to write? Use the form below.
            </p>
          </div>
        )}

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
            {/* Name */}
            <fieldset>
              <legend className="block text-sm font-medium text-neutral-900 mb-2">
                Name
              </legend>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-firstName"
                    className="block text-xs text-neutral-600 mb-1"
                  >
                    First Name{" "}
                    <span className="text-neutral-500">(required)</span>
                  </label>
                  <input
                    id="contact-firstName"
                    type="text"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white text-neutral-900 text-base font-light px-3 py-2 border border-neutral-200 rounded-lg outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-lastName"
                    className="block text-xs text-neutral-600 mb-1"
                  >
                    Last Name{" "}
                    <span className="text-neutral-500">(required)</span>
                  </label>
                  <input
                    id="contact-lastName"
                    type="text"
                    name="lastName"
                    required
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white text-neutral-900 text-base font-light px-3 py-2 border border-neutral-200 rounded-lg outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>
              </div>
            </fieldset>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-neutral-900 mb-1"
              >
                Email Address{" "}
                <span className="text-xs text-neutral-500">(required)</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white text-neutral-900 text-base font-light px-3 py-2 border border-neutral-200 rounded-lg outline-none focus:border-neutral-900 transition-colors"
              />
            </div>

            {/* Project type: light qualification without adding friction */}
            <div>
              <label
                htmlFor="contact-projectType"
                className="block text-sm font-medium text-neutral-900 mb-1"
              >
                What do you need?{" "}
                <span className="text-xs text-neutral-500">(required)</span>
              </label>
              <select
                id="contact-projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-white text-neutral-900 text-base font-light px-3 py-2 border border-neutral-200 rounded-lg outline-none focus:border-neutral-900 transition-colors"
              >
                <option value="" disabled>
                  Select a project type
                </option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-neutral-900 mb-1"
              >
                Tell me about it{" "}
                <span className="text-xs text-neutral-500">(required)</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="What are you building, who is it for, and when do you want it live?"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white text-neutral-900 text-base font-light px-3 py-2 border border-neutral-200 rounded-lg outline-none focus:border-neutral-900 transition-colors resize-vertical placeholder:text-neutral-400"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-[0.2em] px-10 py-4 rounded-full hover:bg-neutral-800 transition-all duration-200 cursor-pointer"
            >
              Send it
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
            </button>
          </form>

          {/* Right: Personal message */}
          <div className="flex flex-col justify-start pt-2">
            <p className="text-base font-light leading-relaxed text-neutral-700 mb-6">
              Here is what happens next: you send a few lines about your
              project, I reply within one business day, and we get on a
              30-minute scope call. If we are a fit, you have a fixed-price
              proposal and a start date within two business days of that call.
            </p>
            <p className="text-base font-light leading-relaxed text-neutral-700 mb-6">
              Not sure which service fits? Send the idea anyway. Part of my job
              is telling you the smallest version worth building, and I will
              tell you honestly if I am not the right person for it.
            </p>
            <p className="text-base font-light leading-relaxed text-neutral-700">
              Prefer email?{" "}
              <a
                href="mailto:michaelaustindavis@icloud.com"
                className="font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
              >
                michaelaustindavis@icloud.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-200 text-neutral-600 text-sm text-center py-6 font-medium flex flex-wrap items-center justify-center">
        <Image
          src="/brand/davismakes-monogram.png"
          alt="Davis Makes"
          width={860}
          height={584}
          className="h-6 w-auto mr-3"
        />
        <span>Davis Makes</span>
        <span className="mx-2 text-neutral-400" aria-hidden>&middot;</span>
        <span className="text-neutral-500">A Boxes &amp; Colors Inc. company</span>
        <span className="mx-2 text-neutral-400" aria-hidden>&middot;</span>
        <span>{new Date().getFullYear()}</span>
        <span className="mx-2 text-neutral-400" aria-hidden>&middot;</span>
        <a
          href="https://www.linkedin.com/in/michaelausdavis/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
            <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6h2.275v1.04h.032c.317-.6 1.091-1.232 2.246-1.232 2.4 0 2.845 1.58 2.845 3.637v4.19zM3.558 4.957a1.376 1.376 0 110-2.751 1.376 1.376 0 010 2.751zm1.187 8.678H2.371V6h2.374v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635C15.467 16 16 15.484 16 14.847V1.153C16 .516 15.467 0 14.816 0z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
