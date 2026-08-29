"use client";

import { motion } from "framer-motion";
import { Target, Code, Users, Briefcase, Cpu, Award } from "lucide-react";

const reasons = [
  {
    num: "01",
    title: "Industry Focused",
    desc: "Real skills aligned with industry requirements.",
    icon: Target,
  },
  {
    num: "02",
    title: "Real Projects",
    desc: "Build real-world projects instead of just theory.",
    icon: Code,
  },
  {
    num: "03",
    title: "Expert Mentors",
    desc: "Learn from experienced professionals and educators.",
    icon: Users,
  },
  {
    num: "04",
    title: "Career Growth",
    desc: "Get guidance for internships, jobs and career development.",
    icon: Briefcase,
  },
  {
    num: "05",
    title: "Modern Labs",
    desc: "Learn in state-of-the-art technological environments.",
    icon: Cpu,
  },
  {
    num: "06",
    title: "Certification",
    desc: "Receive recognized certificates after completion.",
    icon: Award,
  },
];

export default function WhyBlankSlateHorizontal() {
  return (
    <section className="py-24 sm:py-32 bg-white text-[#09090B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-16"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#1D4ED8] font-mono font-bold text-sm">//</span>
            <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-gray-500">
              WHY BLANKSLATE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-[1.1]">
            Why Students Choose <span className="text-[#1D4ED8]">BlankSlate</span>
          </h2>
        </motion.div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, borderColor: "#1D4ED8" }}
                className="p-6 rounded-2xl bg-white border border-gray-200 transition-all duration-300 space-y-4 shadow-sm hover:shadow-xl group cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-[#1D4ED8] group-hover:border-[#1D4ED8] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-gray-400">
                    {item.num}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[11px] text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
