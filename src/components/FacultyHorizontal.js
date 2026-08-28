"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Mail, Sparkles } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { facultyMembers } from "@/data/instituteData";

export default function FacultyHorizontal() {
  // We have multiple faculty members in instituteData.js.
  // We want to show 3 cards per slide on desktop.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Maximum starting index so 3 items always fit
  const maxIndex = Math.max(0, facultyMembers.length - 3);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Get visible slice of 3 members for the current slide window
  const visibleFaculty = facultyMembers.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-24 sm:py-32 bg-[#050507] text-white relative border-t border-white/5 overflow-hidden" id="faculty">
      {/* Background Ambient Vine Red Glow */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#8E0E25]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Slider Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8E0E25]/20 border border-[#B81134]/40 text-[#FF2A4D] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> LEAD FACULTY & RESEARCHERS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05]">
              Distinguished Faculty <br />
              <span className="text-gradient-vine">& Engineering Mentors</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed pt-1">
              Learn directly from veteran software architects, deep learning researchers, and startup founders.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-gray-400 mr-2">
              0{currentIndex + 1} / 0{maxIndex + 1}
            </span>
            <button
              onClick={handlePrev}
              data-cursor="button"
              className="p-3.5 rounded-full bg-[#0D0D12] border border-white/10 hover:border-[#B81134] hover:bg-[#8E0E25] text-white transition-all shadow-md"
              aria-label="Previous faculty slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              data-cursor="button"
              className="p-3.5 rounded-full bg-[#0D0D12] border border-white/10 hover:border-[#B81134] hover:bg-[#8E0E25] text-white transition-all shadow-md"
              aria-label="Next faculty slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-Card Carousel Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleFaculty.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="view"
                className="p-6 rounded-3xl bg-[#0D0D12] border border-white/10 hover:border-[#B81134] flex flex-col justify-between space-y-6 transition-all duration-300 group shadow-2xl relative overflow-hidden"
              >
                {/* Ambient Card Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8E0E25]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#8E0E25]/25 transition-all"></div>

                <div className="space-y-4">
                  {/* Photo with Overlay Badge */}
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-black">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#050507]/90 border border-white/10 text-[#FF2A4D] text-[10px] font-mono font-bold uppercase rounded">
                        {member.department}
                      </span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white group-hover:text-[#FF2A4D] transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#FF2A4D]">{member.role}</p>
                    <p className="text-xs text-gray-400 leading-relaxed pt-2 line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Expertise & Social Links */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((exp) => (
                      <span
                        key={exp}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-300"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs text-gray-400">
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#FF2A4D]" /> Email
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 text-[#FF2A4D]" /> LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-[#B81134] shadow-[0_0_10px_#B81134]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
