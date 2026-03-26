export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-9 h-9 rounded-full bg-[#ff983b] flex items-center justify-center">
        <span className="text-white font-bold text-lg leading-none">M</span>
      </div>
      <span className="text-lg font-semibold tracking-tight text-[#001e36]">
        Michael
      </span>
    </div>
  );
}
