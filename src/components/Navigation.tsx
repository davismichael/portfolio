"use client";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-4 md:py-5 bg-black">
      {/* Logo */}
      <a href="/" className="text-white text-xl md:text-2xl italic font-light tracking-wide">
        MD
      </a>

      {/* Nav links */}
      <div className="flex items-center gap-4 md:gap-12">
        <a
          href="/#casestudies"
          className="text-white text-[10px] md:text-xs font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          My Work
        </a>
        <a
          href="/Michael_Davis_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[10px] md:text-xs font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          Resume
        </a>
        <a
          href="/#contactme"
          className="text-white text-[10px] md:text-xs font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
