import Link from "next/link";

export default function Logo({
  variant = "dark", // "dark" (for light backgrounds) | "light" (for dark backgrounds)
  size = "md",
  className = "",
}) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-11 sm:h-13",
  }[size] || "h-9 sm:h-10";

  return (
    <Link
      href="/"
      className={`inline-flex items-center group transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="BlankSlate Institute Official Logo"
    >
      <img
        src="/logo.png"
        alt="BlankSlate - Empowered by Innovation"
        className={`${sizeClasses} w-auto object-contain transition-all duration-300 ${
          isLight ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
