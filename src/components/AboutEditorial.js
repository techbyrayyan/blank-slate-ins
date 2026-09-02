"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Exact 4 slides matching the user's 4 screenshots
const slidesData = [
  // Slide 1 (1st screenshot)
  [
    { title: "Generative AI", image: "/generative-ai.png", link: "/programs" },
    { title: "IT Certifications", image: "/certifications.png", link: "/programs" },
    { title: "Data Science", image: "/data-science.png", link: "/programs" },
  ],
  // Slide 2 (2nd screenshot)
  [
    { title: "Data Science", image: "/data-science.png", link: "/programs" },
    { title: "ChatGPT", image: "/chat-gpt.png", link: "/programs" },
    { title: "Prompt Engineering", image: "/prompt-engineering.png", link: "/programs" },
  ],
  // Slide 3 (3rd screenshot)
  [
    { title: "Prompt Engineering", image: "/prompt-engineering.png", link: "/programs" },
    { title: "Microsoft Excel", image: "/microsoft-excel.png", link: "/programs" },
    { title: "Large Language Models", image: "/llms.png", link: "/programs" },
  ],
  // Slide 4 (4th screenshot)
  [
    { title: "Large Language Models", image: "/llms.png", link: "/programs" },
    { title: "Machine Learning", image: "/machine-learning.png", link: "/programs" },
    { title: "AI Agents", image: "/ai-agents.png", link: "/programs" },
  ],
];

export default function AboutEditorial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length; // 4 slides

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-8 lg:py-10 bg-white text-[#1c1d1f] relative overflow-hidden" id="about">
      
      {/* Eager image preloader for all card graphics */}
      <div className="hidden" aria-hidden="true">
        {slidesData.flat().map((card, idx) => (
          <img key={`${card.title}-${idx}`} src={card.image} alt="" loading="eager" decoding="async" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1c1d1f] tracking-tight leading-[1.15]">
              Learn <span className="font-serif italic font-medium">essential</span><br />
              career and life skills
            </h2>
            <p className="text-[#55595d] text-base sm:text-lg font-normal leading-relaxed max-w-sm">
              BlankSlate Institute helps you build in-demand skills fast and advance your career in a changing job market.
            </p>
          </div>

          {/* Right Column: Continuous Horizontal Sliding Track (No fade/hide opacity) */}
          <div className="lg:col-span-8 flex flex-col justify-center overflow-hidden">
            
            {/* Sliding Track Viewport */}
            <div className="w-full overflow-hidden relative">
              <motion.div
                className="flex w-full"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.45 }}
              >
                {slidesData.map((slideCards, slideIdx) => (
                  <div
                    key={slideIdx}
                    className="min-w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 px-0.5"
                  >
                    {slideCards.map((card, cardIdx) => (
                      <Link
                        key={`${card.title}-${slideIdx}-${cardIdx}`}
                        href={card.link}
                        className="group relative rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col justify-end transition-all duration-300 hover:border-[#2563EB] hover:shadow-[0_12px_36px_rgba(37,99,235,0.16)] hover:-translate-y-1 h-[360px] block"
                      >
                        {/* Clean 3D Graphic Image (No opacity fade) */}
                        <img
                          src={card.image}
                          alt={card.title}
                          loading="eager"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Bottom White Pill Card */}
                        <div className="relative z-10 m-3.5 p-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-2 group-hover:border-[#2563EB]/40 transition-all">
                          <span className="font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors text-xs sm:text-sm leading-snug">
                            {card.title}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-[#2563EB] flex items-center justify-center transition-colors flex-shrink-0">
                            <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover:text-white transition-colors" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Pagination Controls (4 Dots + Arrow Buttons) */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={goPrev}
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* 4 Dots indicator */}
              <div className="flex items-center gap-2">
                {slidesData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? "w-7 h-2 bg-[#1e3a8a]"
                        : "w-2 h-2 bg-gray-300 hover:bg-blue-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
