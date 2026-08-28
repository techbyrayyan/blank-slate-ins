"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, BarChart, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { programsData } from "@/data/instituteData";

const categories = ["All Programs", "Web & Software", "AI & Data", "Core Computing", "Business & Strategy", "Design & Creative"];

export default function ProgramsGrid({ onOpenApply }) {
  const [activeCategory, setActiveCategory] = useState("All Programs");

  const filteredPrograms =
    activeCategory === "All Programs"
      ? programsData
      : programsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-[#F7F7F8] relative" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#E50914]">
            CAREER PATHWAYS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight">
            Explore Our Programs
          </h2>
          <p className="text-base text-[#6B7280]">
            Choose a learning path designed around your future, taught by Silicon Valley & industry veterans.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#0B0B0C] text-white shadow-md"
                    : "bg-white text-[#1F2328] hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Card Image & Badge */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#0B0B0C] text-[11px] font-bold rounded-full shadow-sm">
                    {prog.badge}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-2.5 py-0.5 bg-[#E50914] text-white text-[10px] font-black uppercase tracking-wider rounded-md">
                    {prog.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-[#0B0B0C] group-hover:text-[#E50914] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3">
                    {prog.shortDesc}
                  </p>
                </div>

                {/* Metadata Pills */}
                <div className="pt-2 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs text-[#6B7280]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#E50914]" />
                    <span>{prog.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <BarChart className="w-3.5 h-3.5 text-gray-500" />
                    <span>{prog.level}</span>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-2 flex items-center gap-2">
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gray-100 hover:bg-[#0B0B0C] text-gray-900 hover:text-white rounded-xl text-xs font-bold transition-all duration-200 group/btn"
                  >
                    <span>View Program</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                  <button
                    onClick={() => onOpenApply(prog.title)}
                    className="px-3.5 py-2.5 bg-red-50 hover:bg-[#E50914] text-[#E50914] hover:text-white rounded-xl text-xs font-bold transition-all duration-200"
                    title="Quick Apply"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Bottom Red Accent Indicator on Hover */}
              <div className="h-1 w-full bg-transparent group-hover:bg-[#E50914] transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All Programs Link */}
        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B0B0C] hover:text-[#E50914] transition-colors group"
          >
            <span>Browse Complete Curriculum & All Tracks</span>
            <ArrowRight className="w-4 h-4 text-[#E50914] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
