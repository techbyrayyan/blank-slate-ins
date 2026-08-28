"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedFullStack({ onOpenApply }) {
  const row1 = ["HTML & CSS", "JavaScript", "React", "Next.js", "Node.js"];
  const row2 = ["Databases", "APIs", "Git & GitHub", "Real-world projects"];

  return (
    <section className="py-16 bg-white text-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-gray-50 border border-gray-200 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          {/* Left Column: Coder with Headphones (5 cols) */}
          <div className="lg:col-span-5 h-full min-h-[380px] relative bg-gray-900 overflow-hidden group">
            {/* Red Diagonal Neon Beam */}
            <div className="absolute -top-16 left-1/2 w-4 h-[160%] bg-[#E50914] rotate-[26deg] shadow-[0_0_35px_#E50914] opacity-90 z-0 pointer-events-none"></div>
            <div className="absolute -top-16 left-1/2 w-14 h-[160%] bg-[#E50914]/40 rotate-[26deg] blur-md z-0 pointer-events-none"></div>

            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1534972195531-a756b1126920?q=80&w=1000&auto=format&fit=crop"
              alt="Full Stack Developer coding with headphones"
              className="w-full h-full object-cover object-center opacity-90 relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-900/60 hidden lg:block z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent lg:hidden z-10"></div>
          </div>

          {/* Right Column: Content & Tech Stack (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#E50914] font-mono font-bold text-sm">//</span>
                <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-gray-500">
                  FEATURED PROGRAM
                </span>
              </div>
              <span className="text-[#E50914] font-mono font-black text-2xl tracking-tighter">
                &lt;/&gt;
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Full Stack Development
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              Become a versatile developer with hands-on training in modern technologies and real-world projects.
            </p>

            {/* Tech Badges */}
            <div className="space-y-2.5 pt-2">
              <div className="flex flex-wrap gap-2">
                {row1.map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * idx }}
                    whileHover={{ scale: 1.05, borderColor: "#E50914" }}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-mono text-gray-800 flex items-center gap-1.5 cursor-default transition-all shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]"></span>
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {row2.map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * (idx + row1.length) }}
                    whileHover={{ scale: 1.05, borderColor: "#E50914" }}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-mono text-gray-800 flex items-center gap-1.5 cursor-default transition-all shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]"></span>
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenApply("Full Stack Development")}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E50914] hover:bg-[#B91C1C] text-white text-xs font-black uppercase tracking-wider rounded-full shadow-[0_4px_20px_rgba(229,9,20,0.35)] transition-all"
              >
                <span>Explore Program</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
