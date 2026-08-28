import Link from "next/link";

export default function Logo({
  variant = "dark", // "dark" (for light backgrounds) | "light" (for dark backgrounds)
  size = "md",
  className = "",
  showText = true,
}) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: { icon: "w-7 h-7", text: "text-lg", sub: "text-[9px]" },
    md: { icon: "w-9 h-9", text: "text-xl", sub: "text-[10px]" },
    lg: { icon: "w-12 h-12", text: "text-2xl", sub: "text-xs" },
  }[size] || { icon: "w-9 h-9", text: "text-xl", sub: "text-[10px]" };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="BlankSlate Institute Official Logo"
    >
      {/* Official Geometric Slate Mark with Red Beacon Accent */}
      <div className={`relative flex-shrink-0 ${sizeClasses.icon} flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          <rect
            x="4"
            y="4"
            width="40"
            height="40"
            rx="10"
            className={isLight ? "fill-[#1F2328] stroke-white/10" : "fill-[#09090B] stroke-black/5"}
            strokeWidth="1.5"
          />
          {/* Inner Clean Slate Geometry */}
          <path
            d="M14 16H34M14 24H28M14 32H22"
            stroke={isLight ? "#FFFFFF" : "#F5F5F5"}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Signature Red Accent Beacon */}
          <circle
            cx="34"
            cy="32"
            r="4.5"
            className="fill-[#E50914]"
          />
          <circle
            cx="34"
            cy="32"
            r="7"
            className="stroke-[#E50914]/40"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center">
            <span
              className={`font-black tracking-tight ${sizeClasses.text} ${
                isLight ? "text-white" : "text-[#09090B]"
              }`}
            >
              BLANK<span className="text-[#E50914]">SLATE</span>
            </span>
          </div>
          <span
            className={`font-semibold uppercase tracking-[0.24em] mt-0.5 ${sizeClasses.sub} ${
              isLight ? "text-gray-400" : "text-[#1F2328]"
            }`}
          >
            Institute
          </span>
        </div>
      )}
    </Link>
  );
}
