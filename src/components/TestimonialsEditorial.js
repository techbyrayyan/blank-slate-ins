"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const studentReviews = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    title: "AI Fundamentals",
    student: "Ameelia Khan",
    course: "Full Stack Development",
    review: "The curriculum is super practical. Building real AI agents gave me the confidence to transition into high-growth tech roles.",
    rating: 5,
    tag: "Course 1 of 7",
    duration: "1.2 hours",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    title: "AI for Brainstorming and Planning",
    student: "Hamza Tariq",
    course: "AI Engineering Track",
    review: "Mentors are true practitioners. The hands-on labs helped me automate our entire workflow effortlessly.",
    rating: 5,
    tag: "Course 2 of 7",
    duration: "22 mins",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    title: "AI for Research and Insights",
    student: "Sarah Jenkins",
    course: "Data Science & AI",
    review: "Top tier learning experience! The MCP protocol and Claude Code modules were way ahead of traditional bootcamps.",
    rating: 5,
    tag: "Course 3 of 7",
    duration: "26 mins",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    title: "AI for Writing and Communicating",
    student: "Bilal Ahmed",
    course: "Cloud & DevOps Track",
    review: "From zero cloud knowledge to deploying production RAG pipelines in AWS. BlankSlate made it possible.",
    rating: 5,
    tag: "Course 4 of 7",
    duration: "30 mins",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    title: "Full Stack Web Engineering",
    student: "Zainab Malik",
    course: "Next.js & React Track",
    review: "The projects in this program directly matched the technical interview questions I was asked in my job hunt.",
    rating: 5,
    tag: "Course 5 of 7",
    duration: "45 mins",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop",
    title: "Data Analytics & Power BI",
    student: "Omar Farooq",
    course: "Business Intelligence",
    review: "Loved the hands-on labs and real business datasets. Landed my first freelance client right after graduating.",
    rating: 5,
    tag: "Course 6 of 7",
    duration: "50 mins",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    title: "Prompt Engineering Masterclass",
    student: "Kiran Riaz",
    course: "Generative AI",
    review: "Structured from fundamentals to advanced agent orchestration. Best tech investment I've made this year.",
    rating: 5,
    tag: "Course 7 of 7",
    duration: "1.5 hours",
  },
];

export default function TestimonialsEditorial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Total 7 cards, 3 visible on desktop
  const maxIndex = studentReviews.length - 3;

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-8 sm:py-10 bg-white text-[#1c1d1f] relative select-none" id="testimonials">
      
      {/* Eager image preloader */}
      <div className="hidden" aria-hidden="true">
        {studentReviews.map((r) => (
          <img key={r.id} src={r.image} alt="" loading="eager" decoding="async" />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading above Banner (Matching Image 2) */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1d1f] tracking-tight">
            Learn AI with Google
          </h2>
        </div>

        {/* Main Wine Red Banner Box */}
        <div className="bg-gradient-to-r from-[#8B0021] via-[#A81131] to-[#750019] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E50914]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch relative z-10">
            
            {/* ── LEFT: White Google Summary Card (Matching Image 2 & 3 exact) ── */}
            <div className="w-full lg:w-[310px] xl:w-[330px] bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl flex-shrink-0">
              <div>
                {/* Google Logo */}
                <div className="mb-4">
                  <img
                    src="/google-logo.webp"
                    alt="Google"
                    className="h-8 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#1c1d1f] leading-snug tracking-tight mb-3">
                  Google AI Professional Certificate
                </h3>

                {/* Description */}
                <p className="text-sm text-[#1c1d1f] font-normal leading-relaxed mb-5">
                  Build your AI fluency and get more done, faster.
                </p>

                {/* Rating & Meta Pills */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Rating Pill */}
                    <div className="border border-gray-300 rounded px-2.5 py-1 text-xs flex items-center gap-1 font-bold text-[#1c1d1f]">
                      <Star className="w-3.5 h-3.5 fill-[#b4690e] text-[#b4690e]" />
                      <span>4.6</span>
                    </div>

                    {/* Ratings Count Pill */}
                    <div className="border border-gray-300 rounded px-2.5 py-1 text-xs text-[#6a6f73] font-normal">
                      1,760 ratings
                    </div>

                    {/* Total Hours Pill */}
                    <div className="border border-gray-300 rounded px-2.5 py-1 text-xs text-[#6a6f73] font-normal">
                      5 total hours
                    </div>
                  </div>

                  {/* Courses Count Pill */}
                  <div>
                    <span className="inline-block border border-gray-300 rounded px-2.5 py-1 text-xs text-[#6a6f73] font-normal">
                      7 courses
                    </span>
                  </div>
                </div>
              </div>

              {/* Learn More Button -> Redirects to Google Reviews Profile */}
              <a
                href="https://share.google/Iw4S0onpToPxjiWr0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white font-bold py-3.5 px-4 rounded-xl text-center transition-all duration-200 block text-base shadow-sm hover:shadow"
              >
                Learn more
              </a>
            </div>

            {/* ── RIGHT: Reviews Carousel Track (No Fade / Smooth Continuous Slide) ── */}
            <div className="flex-1 min-w-0 relative flex flex-col justify-center">
              
              {/* Floating Left Arrow Button */}
              {currentIndex > 0 && (
                <button
                  onClick={goPrev}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center text-gray-800 hover:bg-gray-100 hover:scale-110 active:scale-95 transition-all"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Floating Right Arrow Button */}
              {currentIndex < maxIndex && (
                <button
                  onClick={goNext}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center text-gray-800 hover:bg-gray-100 hover:scale-110 active:scale-95 transition-all"
                  aria-label="Next reviews"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Overflow Hidden Track Viewport */}
              <div className="overflow-hidden w-full py-1">
                <motion.div
                  className="flex gap-4"
                  animate={{ x: `calc(-${currentIndex} * (33.333% + 0.333rem))` }}
                  transition={{ type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.45 }}
                >
                  {studentReviews.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md transition-shadow duration-300 min-h-[360px] w-[calc(100%-0rem)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)] flex-shrink-0"
                    >
                      {/* Top: 16/9 Image with Google Badges */}
                      <div>
                        <div className="rounded-xl overflow-hidden aspect-[16/9] w-full mb-3 bg-gray-100 relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="eager"
                            decoding="async"
                            className="w-full h-full object-cover object-center"
                          />
                          
                          {/* Created by Google Badge on bottom left */}
                          <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-semibold text-gray-700 shadow-xs flex items-center gap-1">
                            <span>Created by</span>
                            <span className="font-bold text-[#1c1d1f]">Google</span>
                          </div>

                          {/* Google G icon on top right */}
                          <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-xs">
                            <span className="text-xs font-bold bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">G</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h4 className="font-bold text-[#1c1d1f] text-base leading-snug tracking-tight mb-1.5 line-clamp-2">
                          {item.title}
                        </h4>

                        {/* Student Name & Quote */}
                        <p className="text-xs text-[#6a6f73] line-clamp-3 leading-relaxed mb-3">
                          &ldquo;{item.review}&rdquo;
                        </p>
                      </div>

                      {/* Bottom: Stars & Meta Pills (Matching Image 2) */}
                      <div>
                        {/* Rating Stars */}
                        <div className="flex items-center gap-1 mb-3">
                          <div className="flex text-amber-500">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                          <span className="text-xs font-bold text-gray-800 ml-1">5.0</span>
                          <span className="text-[11px] text-gray-500 ml-1">· {item.student}</span>
                        </div>

                        {/* Meta Pills (Course X of 7 · Duration) */}
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="border border-gray-300 rounded px-2 py-0.5 text-[11px] text-[#6a6f73]">
                            {item.tag}
                          </span>
                          <span className="border border-gray-300 rounded px-2 py-0.5 text-[11px] text-[#6a6f73]">
                            {item.duration}
                          </span>
                        </div>
                      </div>

                    </div>
                  ))}
                </motion.div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
