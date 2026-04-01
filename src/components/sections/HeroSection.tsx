import Navigation from "../Navigation";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "auto 95%",
          backgroundPosition: "center 60px",
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navigation */}
      <Navigation />

      {/* Large initials */}
      <div className="absolute inset-0 flex items-end justify-start pointer-events-none px-6 md:px-12">
        <span
          className="text-white font-bold italic leading-none select-none"
          style={{
            fontSize: "clamp(120px, 20vw, 300px)",
            marginBottom: "80px",
            opacity: 0.95,
          }}
        >
          MD
        </span>
      </div>

      {/* Name line */}
      <div className="relative z-10 px-6 md:px-12 pb-10 md:pb-14">
        <p className="text-white text-sm md:text-base font-normal uppercase tracking-[0.25em]">
          I am Michael Davis.
        </p>
      </div>
    </section>
  );
}
