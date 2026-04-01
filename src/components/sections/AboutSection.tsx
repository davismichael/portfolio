export default function AboutSection() {
  return (
    <section id="resume" className="bg-white py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto">
        {/* Taglines */}
        <h2
          className="text-lg md:text-xl font-bold uppercase tracking-[0.15em] leading-relaxed mb-2"
          style={{ color: "#363636" }}
        >
          AI-driven design leader.
        </h2>
        <h2
          className="text-lg md:text-xl font-bold uppercase tracking-[0.15em] leading-relaxed mb-10"
          style={{ color: "#363636" }}
        >
          Builder of products that ship.
        </h2>

        {/* Bio */}
        <p className="text-center text-base md:text-lg leading-relaxed text-[#363636] mb-16 max-w-[700px] mx-auto">
          I&apos;m a Sr. Director of Product Design and AI product builder. I
          create digital experiences that exist at the intersection of design
          strategy, AI, and engineering.
        </p>

        {/* Divider */}
        <hr className="border-t border-gray-300 mb-16 max-w-[700px] mx-auto" />

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Design & Strategy */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#363636]">
              Design &amp; Strategy
            </h3>
            <ul className="space-y-2">
              <li className="text-base font-light text-[#363636]">UI/UX Design</li>
              <li className="text-base font-light text-[#363636]">Mobile App Design</li>
              <li className="text-base font-light text-[#363636]">UX Strategy</li>
              <li className="text-base font-light text-[#363636]">User Flows &amp; Journey Maps</li>
              <li className="text-base font-light text-[#363636]">Design Systems</li>
              <li className="text-base font-light text-[#363636]">Motion Design</li>
            </ul>
          </div>

          {/* AI & Technical */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#363636]">
              AI &amp; Technical
            </h3>
            <ul className="space-y-2">
              <li className="text-base font-light text-[#363636]">AI Product Design</li>
              <li className="text-base font-light text-[#363636]">Prompt Engineering</li>
              <li className="text-base font-light text-[#363636]">React Native / Expo</li>
              <li className="text-base font-light text-[#363636]">Python Automation</li>
            </ul>
          </div>

          {/* Research */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#363636]">
              Research
            </h3>
            <ul className="space-y-2">
              <li className="text-base font-light text-[#363636]">User Interviews</li>
              <li className="text-base font-light text-[#363636]">Usability Testing</li>
              <li className="text-base font-light text-[#363636]">A/B Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
