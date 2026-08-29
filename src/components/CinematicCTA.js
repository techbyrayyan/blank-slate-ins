"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CinematicCTA({ onOpenApply }) {
  return (
    <section className="py-8 sm:py-10 bg-white relative overflow-hidden" id="admissions-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-[#E50914]/20 shadow-[0_0_50px_rgba(229,9,20,0.2)] bg-gradient-to-r from-[#220609] via-[#3a0a12] to-[#180407]"
        >
          {/* Ambient Red Glows */}
          <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-[#E50914]/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-10 w-[350px] h-[200px] bg-[#E50914]/15 rounded-full blur-[90px] pointer-events-none"></div>

          {/* Background image overlay with red tint */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
              alt="Students in admissions workshop"
              className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#220609]/90 via-[#3a0a12]/80 to-[#180407]/90"></div>
          </div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & 3 Steps (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-[#E50914] font-mono font-bold text-sm">//</span>
                <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-gray-300">
                  ADMISSIONS
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Your Next Chapter <br />
                <span className="text-[#E50914]">Starts Here.</span>
              </h2>

              {/* 3 Step Trajectory */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-gray-300">
                {[
                  { step: "01", label: "Apply" },
                  { step: "02", label: "Get Selected" },
                  { step: "03", label: "Start Learning" },
                ].map((item, idx) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#E50914] text-white flex items-center justify-center text-[10px] font-bold">
                        {item.step}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {idx < 2 && <span className="text-gray-600">→</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Paragraph & Action Buttons (5 cols) */}
            <div className="lg:col-span-5 space-y-6 lg:text-right">
              <p className="text-sm text-gray-300 leading-relaxed max-w-md lg:ml-auto">
                Take the first steps toward building the skills, confidence and career you want.
              </p>

              <div className="flex flex-wrap items-center lg:justify-end gap-3.5 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenApply()}
                  className="px-7 py-3.5 bg-[#E50914] hover:bg-[#B91C1C] text-white text-xs font-black uppercase tracking-wider rounded-full shadow-[0_4px_20px_rgba(229,9,20,0.5)] transition-all flex items-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white text-xs font-black uppercase tracking-wider rounded-full border border-white/20 transition-all"
                >
                  Talk to Admissions
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
