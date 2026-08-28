import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="flex items-center space-x-2 text-xs font-semibold text-gray-500 mb-6" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-[#E50914] flex items-center gap-1 transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-2">
          <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-[#E50914] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#0B0B0C] font-bold truncate max-w-[200px] sm:max-w-none">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
