"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, PhoneCall, CheckCircle } from "lucide-react";
import { admissionsSteps } from "@/data/instituteData";

export default function AdmissionsCTA({ onOpenApply }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B0B0C] text-white rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden border border-white/10 shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#E50914]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#E50914] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              ADMISSIONS OPEN 2026
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Your Future Starts Here.
            </h2>

            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Take the first step toward building the skills, confidence, and career you want with our industry-led immersive programs.
            </p>

            {/* 3-Step Admission Process Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
              {admissionsSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm space-y-2 hover:border-[#E50914]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#E50914]">{step.step}</span>
                    <CheckCircle className="w-4 h-4 text-gray-500" />
                  </div>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenApply()}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#E50914] hover:bg-[#B80710] text-white font-bold rounded-xl text-sm shadow-lg glow-red transition-all transform hover:-translate-y-0.5"
              >
                <span>Apply Now for Fall 2026</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </button>

              <Link
                href="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm transition-all"
              >
                <span>Talk to Admissions & Fees</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
