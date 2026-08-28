"use client";

import Link from "next/link";
import { Sparkles, Check, ArrowRight, Clock, Award, Users, ShieldCheck } from "lucide-react";
import { programsData } from "@/data/instituteData";

export default function FeaturedProgram({ onOpenApply }) {
  const featured = programsData.find((p) => p.slug === "full-stack-development") || programsData[0];

  const featuresList = [
    "HTML5 & Modern CSS3",
    "Modern JavaScript (ES6+)",
    "React 19 & Next.js 16",
    "Node.js & Express Architecture",
    "PostgreSQL & Prisma ORM",
    "RESTful & GraphQL APIs",
    "Git & GitHub Workflows",
    "Docker & Cloud Deployment",
    "3 Enterprise Capstone Projects",
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B0B0C] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Col: Program Image Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-square sm:aspect-[4/3] lg:aspect-square">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Floating Info Tag on Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-gray-200">Next Cohort Starts:</span>
                    <span className="font-bold text-[#E50914] bg-white px-2 py-0.5 rounded-md">
                      {featured.startDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Program Information & Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50914]/20 border border-[#E50914]/30 text-[#E50914] text-xs font-black uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> FEATURED IMMERSIVE PROGRAM
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                  {featured.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-400 mt-2 leading-relaxed">
                  {featured.overview}
                </p>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Duration</p>
                  <p className="text-sm font-bold text-white mt-0.5">{featured.duration}</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Level</p>
                  <p className="text-sm font-bold text-white mt-0.5">{featured.level}</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Mode</p>
                  <p className="text-sm font-bold text-white mt-0.5">{featured.mode}</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Certification</p>
                  <p className="text-sm font-bold text-[#E50914] mt-0.5">Included</p>
                </div>
              </div>

              {/* Curriculum Features Grid */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                  Technologies & Core Competencies:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {featuresList.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href={`/programs/${featured.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-[#0B0B0C] font-bold rounded-xl text-sm transition-all"
                >
                  <span>View Program Details</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-[#E50914]" />
                </Link>

                <button
                  onClick={() => onOpenApply(featured.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#E50914] hover:bg-[#B80710] text-white font-bold rounded-xl text-sm shadow-lg glow-red transition-all"
                >
                  <span>Apply for Fall Cohort</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
