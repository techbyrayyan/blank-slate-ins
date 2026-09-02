"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      {/* Main Course Card — clickable → course detail page */}
      <Link href={`/courses/${course.id}`} className="block group">
        <div
          className="cursor-pointer bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 min-h-[385px] w-full group-hover:border-[#2563EB] group-hover:shadow-[0_12px_36px_rgba(37,99,235,0.18)] group-hover:-translate-y-1"
          style={{ boxShadow: hovered ? "0 12px 36px rgba(37,99,235,0.18)" : undefined }}
        >
        {/* Top Image + Title + Author */}
        <div>
          <div className="rounded-xl overflow-hidden aspect-[16/9] w-full mb-4 bg-gray-100 border border-gray-100 group-hover:border-[#2563EB]/30 transition-colors">
            <img
              src={course.image}
              alt={course.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h3 className="font-bold text-[#1c1d1f] group-hover:text-[#2563EB] transition-colors text-[17px] sm:text-[18px] leading-snug tracking-tight mb-2 line-clamp-2 min-h-[52px]">
            {course.title}
          </h3>

          <p className="text-sm sm:text-[15px] text-[#55595d] font-normal truncate mb-2">
            {course.author}
          </p>
        </div>

        {/* Bottom: Badges & Price */}
        <div className="mt-4">
          <div className="flex items-center gap-2 flex-wrap mb-3.5">
            {course.badgeType === "premium" ? (
              <span className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white text-xs sm:text-[13px] font-bold px-2.5 py-1 rounded flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                Premium
              </span>
            ) : (
              <span className="bg-blue-50 text-[#1D4ED8] border border-blue-200 text-xs sm:text-[13px] font-bold px-2.5 py-1 rounded">
                {course.badge || "Bestseller"}
              </span>
            )}

            <div className="border border-gray-300 rounded px-2.5 py-1 text-xs sm:text-[13px] flex items-center gap-1 font-bold text-[#1c1d1f]">
              <Star className="w-3.5 h-3.5 fill-[#b4690e] text-[#b4690e]" />
              <span>{course.rating}</span>
            </div>

            <div className="border border-gray-300 rounded px-2.5 py-1 text-xs sm:text-[13px] text-[#55595d]">
              {course.ratingCount}
            </div>
          </div>

          <div className="font-black text-[#1c1d1f] group-hover:text-[#2563EB] transition-colors text-xl sm:text-2xl">
            {course.price}
          </div>
        </div>
        </div>
      </Link>

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
              className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(37,99,235,0.22)] border-2 border-[#2563EB]/40 p-6 pointer-events-auto"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Title */}
              <h4 className="font-bold text-[#1c1d1f] text-lg leading-snug mb-3">
                {course.title}
              </h4>

              {/* Badge + Updated */}
              <div className="flex items-center gap-2 mb-3">
                {course.badgeType === "premium" ? (
                  <span className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white text-xs font-bold px-2.5 py-0.5 rounded flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Premium
                  </span>
                ) : (
                  <span className="bg-blue-50 text-[#1D4ED8] border border-blue-200 text-xs font-bold px-2.5 py-0.5 rounded">
                    {course.badge || "Bestseller"}
                  </span>
                )}
                <span className="text-sm text-[#1c1d1f]">
                  Updated <strong className="text-[#2563EB]">{course.updated}</strong>
                </span>
              </div>

              {/* Meta */}
              <p className="text-sm text-[#55595d] mb-3 font-medium">
                {course.hours} · {course.level} Level · Subtitles
              </p>

              {/* Description */}
              <p className="text-sm text-[#1c1d1f] mb-4 leading-relaxed">
                {course.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-6">
                {course.bullets?.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#1c1d1f] leading-snug">
                    <Check className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Add to Cart Button */}
              <button
                onClick={() => onOpenApply && onOpenApply(course.title)}
                className="w-full text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-base transition-all duration-200 shadow-md hover:shadow-lg bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] hover:opacity-90"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to cart
              </button>
            </motion.div>
          </PopupPortal>
        )}
      </AnimatePresence>
    </div>
  );
}
