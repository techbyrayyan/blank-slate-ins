"use client";

import { useState, useEffect } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { coursesData } from "@/data/instituteData";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose ? onClose() : null;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredCourses = query
    ? coursesData.filter(
        (c) =>
          c.title.toLowerCase().includes(normalizedQuery) ||
          c.shortDesc.toLowerCase().includes(normalizedQuery) ||
          c.category.toLowerCase().includes(normalizedQuery)
      )
    : [];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: -20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl bg-[#0D0D12] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center px-5 py-4 border-b border-white/10 bg-[#08080B]">
            <Search className="w-5 h-5 text-[#1D4ED8] mr-3 flex-shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses, curriculum topics, AI, or Web..."
              className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")} className="p-1 text-gray-400 hover:text-white mr-2">
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="px-2 py-0.5 text-[10px] font-mono text-gray-400 bg-white/5 rounded border border-white/10">
              ESC
            </kbd>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-4">
            {!query ? (
              <div className="py-6 text-center text-xs text-gray-400">
                <p className="text-gray-300 font-bold mb-2">Popular Course Searches</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {["Full Stack", "Artificial Intelligence", "Next.js 16", "Python", "UI/UX Design", "Algorithms"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1 bg-white/5 hover:bg-[#1D4ED8] text-gray-300 hover:text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : filteredCourses.length === 0 ? (
              <div className="py-8 text-center text-xs text-gray-400">
                No matching courses found for &ldquo;<span className="text-white font-bold">{query}</span>&rdquo;.
              </div>
            ) : (
              <div className="space-y-1.5">
                {filteredCourses.map((c) => (
                  <Link
                    key={c.slug || c.id}
                    href={`/programs/${c.slug || "full-stack-development"}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-white group-hover:text-[#1D4ED8] transition-colors">
                        {c.title}
                      </p>
                      <p className="text-xs text-gray-400 line-clamp-1">{c.shortDesc}</p>
                    </div>
                    <span className="text-xs font-bold text-[#1D4ED8] flex items-center gap-1 flex-shrink-0">
                      {c.duration} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
