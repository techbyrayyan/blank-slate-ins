import { ArrowRight, CheckCircle } from "lucide-react";
import { learningSteps } from "@/data/instituteData";

export default function LearningExperience() {
  return (
    <section className="py-24 bg-[#F7F7F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#E50914]">
            METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight">
            A Better Way to Learn
          </h2>
          <p className="text-base text-[#6B7280]">
            Our proprietary 5-phase experiential model guarantees retention, practical mastery, and career readiness.
          </p>
        </div>

        {/* 5 Steps Interactive Horizontal / Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {learningSteps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-gray-300 group-hover:text-[#E50914] transition-colors">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-gray-100 group-hover:bg-red-50 group-hover:text-[#E50914] text-gray-600 rounded-md transition-colors">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0B0B0C] group-hover:text-[#E50914] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-gray-400 group-hover:text-gray-900">
                <span>{step.badge}</span>
                <CheckCircle className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#E50914] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
