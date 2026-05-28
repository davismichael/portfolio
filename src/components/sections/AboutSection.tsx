const Pill = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white border border-gray-200 rounded-3xl px-6 py-4 shadow-sm text-base font-medium text-gray-700 text-center leading-snug">
    {children}
  </div>
);

export default function AboutSection() {
  return (
    <section className="relative bg-white overflow-hidden flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-0" style={{ minHeight: "480px" }}>

      {/* Mobile pill row. Wrap-flex, hidden on desktop. */}
      <div className="flex md:hidden flex-wrap gap-2 justify-center mb-8 max-w-md mx-auto">
        <Pill>Research</Pill>
        <Pill>Design Systems</Pill>
        <Pill>UI/UX</Pill>
        <Pill>Prototyping</Pill>
        <Pill>React Native</Pill>
        <Pill>AI/LLM</Pill>
      </div>

      {/* Desktop left floating pills */}
      <div className="hidden md:block absolute" style={{ left: "16%", top: "18%" }}>
        <Pill>Research</Pill>
      </div>
      <div className="hidden md:block absolute" style={{ left: "13%", top: "48%" }}>
        <Pill>Design<br />Systems</Pill>
      </div>
      <div className="hidden md:block absolute" style={{ left: "17%", top: "74%" }}>
        <Pill>UI/UX</Pill>
      </div>

      {/* Desktop right floating pills */}
      <div className="hidden md:block absolute" style={{ right: "16%", top: "18%" }}>
        <Pill>Prototyping</Pill>
      </div>
      <div className="hidden md:block absolute" style={{ right: "13%", top: "48%" }}>
        <Pill>React<br />Native</Pill>
      </div>
      <div className="hidden md:block absolute" style={{ right: "17%", top: "74%" }}>
        <Pill>AI/LLM</Pill>
      </div>

      {/* Center text */}
      <div className="relative z-10 max-w-sm mx-auto text-center px-6 md:py-[100px]">
        {/* Connector text uses gray-500 (≈4.83:1 on white) so it passes WCAG AA
            while keeping the bold terms visually dominant. gray-400 was 2.83:1
            and failed AA for both normal and large text. */}
        <p className="leading-relaxed" style={{ fontSize: "clamp(17px, 1.8vw, 22px)" }}>
          <span className="text-gray-500">I&apos;m a </span>
          <span className="font-bold text-gray-900">Sr. Director of Product Design</span>
          <span className="text-gray-500"> skilled in </span>
          <span className="font-bold text-gray-900">UI/UX</span>
          <span className="text-gray-500">, </span>
          <span className="font-bold text-gray-900">Design Systems</span>
          <span className="text-gray-500">, </span>
          <span className="font-bold text-gray-900">Prototyping</span>
          <span className="text-gray-500">, and </span>
          <span className="font-bold text-gray-900">AI-powered product building</span>
          <span className="text-gray-500">.</span>
        </p>
      </div>

    </section>
  );
}
