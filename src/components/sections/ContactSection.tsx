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
    <section id="contactme" className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Heading */}
        <h2
          className="font-bold uppercase tracking-[0.05em] mb-4"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.2 }}
        >
          Wanna Collaborate?
        </h2>

        {/* Subheading */}
        <p className="text-xs font-normal uppercase tracking-[0.2em] text-white mb-12">
          Let&apos;s Chat.
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name label */}
            <div>
              <label className="block text-sm font-light text-white mb-2">
                Name
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs text-white/50 mb-1">
                    First Name{" "}
                    <span className="text-white/30">(required)</span>
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white text-black text-base font-light px-3 py-2 outline-none"
                  />
                </div>
                <div>
                  <span className="block text-xs text-white/50 mb-1">
                    Last Name{" "}
                    <span className="text-white/30">(required)</span>
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white text-black text-base font-light px-3 py-2 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-light text-white mb-1">
                Email Address{" "}
                <span className="text-xs text-white/30">(required)</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white text-black text-base font-light px-3 py-2 outline-none"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-light text-white mb-1">
                Subject{" "}
                <span className="text-xs text-white/30">(required)</span>
              </label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white text-black text-base font-light px-3 py-2 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-light text-white mb-1">
                Message{" "}
                <span className="text-xs text-white/30">(required)</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white text-black text-base font-light px-3 py-2 outline-none resize-vertical"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-block border-2 border-gray-400 text-gray-400 text-xs font-bold uppercase tracking-[0.2em] px-10 py-4 hover:bg-gray-400 hover:text-black transition-all duration-300 cursor-pointer"
            >
              Email Me
            </button>
          </form>

          {/* Right: Personal message */}
          <div className="flex flex-col justify-start pt-2">
            <p className="text-base font-light leading-relaxed text-white/90 mb-6">
              Hey, thanks for checking out my work.
            </p>
            <p className="text-base font-light leading-relaxed text-white/90 mb-6">
              I&apos;ve been building digital products for over a decade. More
              recently I&apos;ve been focused on AI-powered software, especially
              the kind that quietly makes someone&apos;s day easier.
            </p>
            <p className="text-base font-light leading-relaxed text-white/90 mb-6">
              What are you working on?
            </p>
            <p className="text-base font-light leading-relaxed text-white/90">
              If you want to know more about my design process, or if you want
              to talk about a cool idea, don&apos;t hesitate to hit me up.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 text-white/70 text-sm text-center py-6 font-medium">
        <span>Michael A. Davis</span>
        <span className="mx-2 text-white/40">&middot;</span>
        <span>{new Date().getFullYear()}</span>
        <span className="mx-2 text-white/40">&middot;</span>
        <a
          href="https://www.linkedin.com/in/michaelausdavis/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
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
