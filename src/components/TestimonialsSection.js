"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { studentTestimonials } from "@/data/instituteData";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % studentTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + studentTestimonials.length) % studentTestimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % studentTestimonials.length);
  };

  const current = studentTestimonials[currentIndex];

  return (
    <section className="py-24 bg-[#F7F7F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#E50914]">
            STUDENT SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-base text-[#6B7280]">
            Hear from our graduates thriving at premier tech companies, unicorns, and high-growth venture studios.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200/80 relative">
          <Quote className="w-16 h-16 text-gray-100 absolute top-8 right-8 pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Student Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-4 ring-gray-100">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="space-y-4 text-center sm:text-left flex-1">
              {/* Star Rating */}
              <div className="flex items-center justify-center sm:justify-start space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="pt-2">
                <h4 className="text-base font-bold text-[#0B0B0C]">{current.name}</h4>
                <p className="text-xs font-semibold text-[#E50914]">{current.role}</p>
                <p className="text-xs text-gray-400">{current.program}</p>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {studentTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-8 bg-[#E50914]" : "w-2 bg-gray-200"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                aria-label="Next testimonial"
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
