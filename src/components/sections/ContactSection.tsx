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
              I&apos;ve been building at the intersection of AI and product
              design for over a decade. I&apos;m particularly passionate about
              digital products that use AI to make life easier for people.
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
      <div className="border-t border-white/10 text-white/30 text-sm text-center py-6 font-light">
        Michael A. Davis &middot; {new Date().getFullYear()}
      </div>
    </section>
  );
}
