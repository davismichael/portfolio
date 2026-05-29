"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:michaelaustindavis@icloud.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  return (
    <section id="contactme" className="bg-white text-neutral-900 border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Heading */}
        <h2
          className="font-bold uppercase tracking-[0.05em] mb-4 text-neutral-900"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.2 }}
        >
          Wanna Collaborate?
        </h2>

        {/* Subheading */}
        <p className="text-xs font-normal uppercase tracking-[0.2em] text-neutral-500 mb-12">
          Let&apos;s Chat.
        </p>

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
                  {/* Required indicator uses white/60 (≈7:1 on #1a1a1a) instead
                      of white/30 (≈3.3:1) so it passes WCAG AA. */}
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
                    className="w-full bg-white text-neutral-900 text-base font-light px-3 py-2 border border-neutral-500 rounded-sm outline-none focus:border-neutral-900"
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
                    className="w-full bg-white text-neutral-900 text-base font-light px-3 py-2 border border-neutral-500 rounded-sm outline-none focus:border-neutral-900"
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
                className="w-full bg-white text-neutral-900 text-base font-light px-3 py-2 border border-neutral-500 rounded-sm outline-none focus:border-neutral-900"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-sm font-medium text-neutral-900 mb-1"
              >
                Subject{" "}
                <span className="text-xs text-neutral-500">(required)</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white text-neutral-900 text-base font-light px-3 py-2 border border-neutral-500 rounded-sm outline-none focus:border-neutral-900"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-neutral-900 mb-1"
              >
                Message{" "}
                <span className="text-xs text-neutral-500">(required)</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white text-neutral-900 text-base font-light px-3 py-2 border border-neutral-500 rounded-sm outline-none focus:border-neutral-900 resize-vertical"
              />
            </div>

            {/* Submit. Solid white-on-dark to read as a real primary CTA. The
                old ghosted gray-on-gray treatment was technically accessible
                but visually felt disabled. Matches the hero "Let's work
                together" button so the page has one consistent primary style. */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-[0.2em] px-10 py-4 rounded-full hover:bg-neutral-800 transition-all duration-200 cursor-pointer"
            >
              Email Me
              <span aria-hidden>→</span>
            </button>
          </form>

          {/* Right: Personal message */}
          <div className="flex flex-col justify-start pt-2">
            <p className="text-base font-light leading-relaxed text-neutral-700 mb-6">
              Hey, thanks for checking out my work.
            </p>
            <p className="text-base font-light leading-relaxed text-neutral-700 mb-6">
              I&apos;ve been building digital products for over a decade. More
              recently I&apos;ve been focused on AI-powered software, especially
              the kind that quietly makes someone&apos;s day easier.
            </p>
            <p className="text-base font-light leading-relaxed text-neutral-700 mb-6">
              What are you working on?
            </p>
            <p className="text-base font-light leading-relaxed text-neutral-700">
              If you want to know more about my design process, or if you want
              to talk about a cool idea, don&apos;t hesitate to hit me up.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-200 text-neutral-600 text-sm text-center py-6 font-medium">
        <span>Michael A. Davis</span>
        <span className="mx-2 text-neutral-400" aria-hidden>&middot;</span>
        <span>{new Date().getFullYear()}</span>
        <span className="mx-2 text-neutral-400" aria-hidden>&middot;</span>
        <a
          href="https://www.linkedin.com/in/michaelausdavis/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden
          >
            <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6h2.275v1.04h.032c.317-.6 1.091-1.232 2.246-1.232 2.4 0 2.845 1.58 2.845 3.637v4.19zM3.558 4.957a1.376 1.376 0 110-2.751 1.376 1.376 0 010 2.751zm1.187 8.678H2.371V6h2.374v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635C15.467 16 16 15.484 16 14.847V1.153C16 .516 15.467 0 14.816 0z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
