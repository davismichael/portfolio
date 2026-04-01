export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-lg font-semibold tracking-tight text-[#001e36]">
        Michael
      </span>
    </div>
  );
}
