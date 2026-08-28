"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

export default function TestimonialsEditorial() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#5a0515] via-[#7a0a1e] to-[#4e0412] text-white relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[250px] bg-[#E50914]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-white font-mono font-bold text-sm">//</span>
              <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-rose-200">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              What Our Students Say
            </h2>
            <p className="text-xs text-rose-200 font-mono">
              Real stories. Real growth.
            </p>
          </motion.div>

          {/* Testimonial Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="flex-1 max-w-2xl p-6 sm:p-8 rounded-3xl bg-white border border-white/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl transition-all"
          >
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                alt="Ameelia Khan"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-[#E50914] flex-shrink-0"
              />
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-gray-800 italic font-medium leading-relaxed">
                  &ldquo;The most valuable thing I learned at BlankSlate wasn&apos;t just technology — it was how to build.&rdquo;
                </p>
                <div>
                  <p className="text-xs font-bold text-gray-950">Ameelia Khan</p>
                  <p className="text-[10px] font-mono text-gray-500">Full Stack Development</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex text-[#E50914]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <button
                className="w-8 h-8 rounded-full border border-gray-300 hover:border-[#E50914] hover:bg-gray-50 flex items-center justify-center text-gray-600 hover:text-[#E50914] transition-colors"
                aria-label="Next quote"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
