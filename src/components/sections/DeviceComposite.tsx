// Renders three device mockups (laptop / phone / laptop) as a CSS-drawn
// product shot. Used as a card background for case studies that want to
// signal multi-device range.
//
// Frames are pure CSS so they scale cleanly. Pass real screenshots in.

interface DeviceCompositeProps {
  leftLaptop: string;
  phone: string;
  rightLaptop: string;
  /** Alt text base. Appended with " (laptop)" / " (phone)" per device. */
  altBase?: string;
}

export default function DeviceComposite({
  leftLaptop,
  phone,
  rightLaptop,
  altBase = "Product screenshot",
}: DeviceCompositeProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4">
      <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-5 w-full max-w-[1500px]">
        {/* Left laptop. Hidden on the smallest screens so the phone has room */}
        <Laptop
          src={leftLaptop}
          alt={`${altBase} (laptop)`}
          className="hidden sm:block w-[40%] flex-shrink-0"
        />

        {/* Center phone. Always visible, slightly elevated above the laptops */}
        <Phone
          src={phone}
          alt={`${altBase} (phone)`}
          className="w-[55%] sm:w-[22%] flex-shrink-0 -mb-4 sm:-mb-2"
        />

        {/* Right laptop. Hidden on the smallest screens */}
        <Laptop
          src={rightLaptop}
          alt={`${altBase} (laptop)`}
          className="hidden sm:block w-[40%] flex-shrink-0"
        />
      </div>
    </div>
  );
}

// Single centered laptop variant. Use as a card background when one screenshot
// is the hero (e.g. a flagship app view) and a phone/laptop trio would feel busy.
interface SingleLaptopCompositeProps {
  src: string;
  altBase?: string;
}

export function SingleLaptopComposite({
  src,
  altBase = "Product screenshot",
}: SingleLaptopCompositeProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
      <Laptop
        src={src}
        alt={`${altBase} (laptop)`}
        // Wider than the trio's individual laptops since it's the sole device,
        // but capped so the title/description below still breathe.
        className="w-[88%] sm:w-[72%] md:w-[62%] max-w-[820px] flex-shrink-0 drop-shadow-2xl"
      />
    </div>
  );
}

// ---- Devices ---------------------------------------------------------------

interface DeviceProps {
  src: string;
  alt: string;
  className?: string;
}

export function Laptop({ src, alt, className = "" }: DeviceProps) {
  return (
    <div className={className}>
      {/* Screen */}
      <div className="relative rounded-t-md sm:rounded-t-lg bg-neutral-900 border border-neutral-700 p-1 sm:p-1.5 aspect-[16/10] overflow-hidden">
        {/* Camera dot */}
        <span
          aria-hidden
          className="absolute top-[3px] sm:top-1 left-1/2 -translate-x-1/2 size-[3px] rounded-full bg-neutral-700"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-sm"
          loading="lazy"
          draggable={false}
        />
      </div>
      {/* Base. Wider than the screen, with a subtle notch */}
      <div className="relative h-1.5 sm:h-2 -mx-2 sm:-mx-3 rounded-b-lg bg-gradient-to-b from-neutral-700 to-neutral-800">
        <span
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-full bg-neutral-900/40 rounded-b-md"
        />
      </div>
    </div>
  );
}

function Phone({ src, alt, className = "" }: DeviceProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-[14px] sm:rounded-[20px] md:rounded-[22px] bg-neutral-900 border border-neutral-700 p-1 sm:p-1.5 aspect-[9/19] overflow-hidden">
        {/* Dynamic-island-ish pill */}
        <span
          aria-hidden
          className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 z-10 w-6 sm:w-10 h-1.5 sm:h-2 rounded-full bg-neutral-900 border border-neutral-800"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-[10px] sm:rounded-[15px] md:rounded-[17px]"
          loading="lazy"
          draggable={false}
        />
      </div>
    </div>
  );
}
