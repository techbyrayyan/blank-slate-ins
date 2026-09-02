"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 0,
    bg: "#FEF3C7",     // warm yellow
    btnBg: "#1D4ED8",
    title: "Shape Your Future in Tech",
    desc: "Enroll in 20+ industry-focused programs and become job-ready with real skills that employers demand today.",
    cta: "Explore Programs",
    ctaLink: "/programs",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 1,
    bg: "#D1FAE5",     // mint green
    btnBg: "#1D4ED8",
    title: "Master Artificial Intelligence",
    desc: "Build production-ready AI models with Python, TensorFlow, and LLMs — guided by real-world practitioners.",
    cta: "Start AI Journey",
    ctaLink: "/programs",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    bg: "#EDE9FE",     // soft lavender
    btnBg: "#1D4ED8",
    title: "Design Your Digital World",
    desc: "Craft stunning user experiences — from wireframes to polished, production-ready interface designs.",
    cta: "Start Designing",
    ctaLink: "/programs",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=900&auto=format&fit=crop",
  },
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? "100%" : "-100%",
  }),
  center: {
    x: 0,
  },
  exit: (dir) => ({
    x: dir > 0 ? "-100%" : "100%",
  }),
};

export default function Hero({ onOpenApply }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const n = slides.length;

  const prevIdx = (current - 1 + n) % n;
  const nextIdx = (current + 1) % n;

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % n);
  }, [n]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + n) % n);
  }, [n]);

  const goToDot = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  return (
    <section className="relative bg-white select-none" id="hero" style={{ paddingTop: "230px", paddingBottom: "35px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 3-panel slider ── */}
        <div className="flex items-stretch gap-3 mt-2 mb-3" style={{ height: "400px" }}>

          {/* LEFT partial — previous slide */}
          <div
            onClick={goPrev}
            className="hidden xl:block relative flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden transition-colors duration-700"
            style={{ width: "12%", backgroundColor: slides[prevIdx].bg }}
          >
            {/* image fills the panel */}
            <img
              src={slides[prevIdx].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-left opacity-90"
            />
            {/* gradient: white fade on LEFT (outer) edge */}
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                background:
                  "linear-gradient(to right, white 0%, rgba(255,255,255,0.75) 45%, transparent 100%)",
              }}
            />
            {/* Left arrow button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-all hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>

          {/* CENTER — current slide with sliding animation */}
          <div
            className="relative flex-1 rounded-2xl overflow-hidden transition-colors duration-700 shadow-sm"
            style={{ backgroundColor: slides[current].bg }}
          >
            {/* Mobile arrow buttons (visible only below xl) */}
            <button
              onClick={goPrev}
              className="xl:hidden absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 text-gray-800" />
            </button>
            <button
              onClick={goNext}
              className="xl:hidden absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 text-gray-800" />
            </button>

            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.75 },
                }}
                className="absolute inset-0 flex items-center h-full w-full"
              >
                {/* ── Text left half ── */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10 space-y-3.5 min-w-0 flex flex-col justify-center h-full">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight max-w-md">
                    {slides[current].title}
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-md line-clamp-3">
                    {slides[current].desc}
                  </p>
                  <div className="pt-1">
                    <Link
                      href={slides[current].ctaLink}
                      className="inline-flex items-center px-6 py-3 text-sm sm:text-base font-bold text-white rounded-lg bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] hover:opacity-90 active:scale-95 transition-all"
                    >
                      {slides[current].cta}
                    </Link>
                  </div>
                </div>

                {/* ── Image right half ── */}
                <div className="hidden md:block flex-shrink-0 h-full overflow-hidden" style={{ width: "48%" }}>
                  <img
                    src={slides[current].image}
                    alt={slides[current].title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT partial — next slide */}
          <div
            onClick={goNext}
            className="hidden xl:block relative flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden transition-colors duration-700"
            style={{ width: "12%", backgroundColor: slides[nextIdx].bg }}
          >
            {/* text hint */}
            <div className="absolute inset-0 flex items-center p-5 overflow-hidden">
              <p className="text-gray-900 font-black text-sm leading-snug">
                {slides[nextIdx].title}
              </p>
            </div>
            {/* gradient: white fade on RIGHT (outer) edge */}
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.75) 55%, white 100%)",
              }}
            />
            {/* Right arrow button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-all hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>

        </div>

        {/* ── Navigation dots ── */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToDot(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-3 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
