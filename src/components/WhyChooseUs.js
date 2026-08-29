import { Target, Award, Code2, Briefcase, Cpu, CheckCircle2 } from "lucide-react";
import { whyChooseItems } from "@/data/instituteData";

const iconMap = {
  Target: Target,
  Award: Award,
  Code: Code2,
  Briefcase: Briefcase,
  Cpu: Cpu,
  CheckCircle2: CheckCircle2,
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#1D4ED8]">
            THE BLANKSLATE ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight">
            Why Students Choose BlankSlate
          </h2>
          <p className="text-base text-[#6B7280]">
            We bridge the gap between academic theory and high-growth commercial technology careers.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseItems.map((item, idx) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-gray-50/70 hover:bg-white border border-gray-100 hover:border-red-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#1D4ED8] text-[#1D4ED8] group-hover:text-white shadow-md flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B0B0C] group-hover:text-[#1D4ED8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mt-2.5">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
