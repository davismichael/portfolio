import Image from "next/image";

// A proper phone frame around a full-screen app screenshot. The screenshot
// supplies its own status bar and island, so the frame adds nothing on top:
// just bezel, rounded glass, and side buttons.
export default function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Side buttons */}
      <span aria-hidden className="absolute -left-[3px] top-[18%] w-[3px] h-7 rounded-l bg-neutral-700" />
      <span aria-hidden className="absolute -left-[3px] top-[27%] w-[3px] h-12 rounded-l bg-neutral-700" />
      <span aria-hidden className="absolute -left-[3px] top-[38%] w-[3px] h-12 rounded-l bg-neutral-700" />
      <span aria-hidden className="absolute -right-[3px] top-[30%] w-[3px] h-16 rounded-r bg-neutral-700" />

      {/* Body */}
      <div className="rounded-[46px] bg-neutral-950 p-[10px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.08)]">
        {/* Glass */}
        <div className="relative rounded-[36px] overflow-hidden bg-black aspect-[1179/2556]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 260px, 300px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
