"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Check, ShoppingCart } from "lucide-react";

function PopupPortal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); return () => setMounted(false); }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function CourseCard({ course, onOpenApply }) {
  const [hovered, setHovered] = useState(false);
  const [popupStyle, setPopupStyle] = useState({});

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const POPUP_WIDTH = 340;
    const GAP = 12;
    const spaceRight = window.innerWidth - rect.right;
    let left;
    if (spaceRight >= POPUP_WIDTH + GAP) {
      left = rect.right + GAP;
    } else {
      left = rect.left - POPUP_WIDTH - GAP;
    }
    const top = rect.top + window.scrollY;
    setPopupStyle({ position: "absolute", left, top, width: POPUP_WIDTH, zIndex: 9999 });
    setHovered(true);
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Main Course Card */}
      <div
        onClick={() => onOpenApply && onOpenApply(course.title)}
        className="cursor-pointer bg-white rounded-2xl border border-gray-200/80 p-4 sm:p-5 flex flex-col justify-between transition-shadow duration-300 min-h-[385px] w-full hover:shadow-lg"
        style={{ boxShadow: hovered ? "0 8px 30px rgba(0,0,0,0.12)" : undefined }}
      >
        {/* Top Image + Title + Author */}
        <div>
          <div className="rounded-xl overflow-hidden aspect-[16/9] w-full mb-4 bg-gray-100">
            <img
              src={course.image}
              alt={course.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <h3 className="font-bold text-[#1c1d1f] text-base sm:text-[17px] leading-snug tracking-tight mb-1.5 line-clamp-2 min-h-[48px]">
            {course.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6a6f73] font-normal truncate">
            {course.author}
          </p>
        </div>

        {/* Bottom: Badges & Price */}
        <div className="mt-5">
          <div className="flex items-center gap-2 flex-wrap mb-3.5">
            {course.badgeType === "premium" ? (
              <span className="bg-[#5022c3] text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                Premium
              </span>
            ) : (
              <span className="bg-[#ccebfa] text-[#104b46] text-xs font-bold px-2.5 py-1 rounded">
                {course.badge}
              </span>
            )}

            <div className="border border-gray-300 rounded px-2.5 py-1 text-xs flex items-center gap-1 font-bold text-[#1c1d1f]">
              <Star className="w-3.5 h-3.5 fill-[#b4690e] text-[#b4690e]" />
              <span>{course.rating}</span>
            </div>

            <div className="border border-gray-300 rounded px-2.5 py-1 text-xs text-[#6a6f73]">
              {course.ratingCount}
            </div>
          </div>

          <div className="font-extrabold text-[#1c1d1f] text-lg sm:text-xl">
            {course.price}
          </div>
        </div>
      </div>

      {/* Hover Popup (Portal to Body) */}
      <AnimatePresence>
        {hovered && typeof window !== "undefined" && (
          <PopupPortal>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              style={popupStyle}
              className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 pointer-events-auto"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Title */}
              <h4 className="font-bold text-[#1c1d1f] text-base leading-snug mb-3">
                {course.title}
              </h4>

              {/* Badge + Updated */}
              <div className="flex items-center gap-2 mb-2.5">
                {course.badgeType === "premium" ? (
                  <span className="bg-[#5022c3] text-white text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Check className="w-3 h-3" /> Premium
                  </span>
                ) : (
                  <span className="bg-[#ccebfa] text-[#104b46] text-xs font-bold px-2 py-0.5 rounded">
                    {course.badge}
                  </span>
                )}
                <span className="text-xs text-[#1c1d1f]">
                  Updated <strong className="text-[#3c4de7]">{course.updated}</strong>
                </span>
              </div>

              {/* Meta */}
              <p className="text-xs text-[#6a6f73] mb-3">
                {course.hours} · {course.level} Level · Subtitles
              </p>

              {/* Description */}
              <p className="text-xs text-[#1c1d1f] mb-4 leading-relaxed">
                {course.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {course.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#1c1d1f]">
                    <Check className="w-3.5 h-3.5 text-[#1c1d1f] mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Add to Cart Button */}
              <button
                onClick={() => onOpenApply && onOpenApply(course.title)}
                className="w-full text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors"
                style={{ backgroundColor: "#E50914" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c7000f")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E50914")}
              >
                <ShoppingCart className="w-4 h-4" />
                Add to cart
              </button>
            </motion.div>
          </PopupPortal>
        )}
      </AnimatePresence>
    </div>
  );
}
