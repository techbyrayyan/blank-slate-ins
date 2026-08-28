"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function CampusExperience() {
  return (
    <section className="py-24 sm:py-32 bg-white text-[#09090B] relative overflow-hidden" id="campus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Link (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#E50914] font-mono font-bold text-sm">//</span>
              <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-gray-500">
                CAMPUS LIFE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-[1.1]">
              Life at BlankSlate
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              A vibrant community, modern facilities and endless opportunities.
            </p>

            <div className="pt-2">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link
                  href="/campus-life"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-black uppercase tracking-wider rounded-full border border-gray-300 transition-all shadow-sm"
                >
                  <span>Explore Campus</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: 4-Photo Masonry Collage (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {/* Photo 1: Collaboration */}
            <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-gray-100 aspect-[3/4] relative group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Photo 2 & 3: Stacked in center column */}
            <div className="flex flex-col gap-4">
              {/* Photo 2 with Watch Recap badge */}
              <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-gray-100 aspect-[4/3] relative group flex-1">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
                  alt="Modern campus lounge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-between p-4 text-white">
                  <div>
                    <p className="text-xs font-bold leading-tight">Watch Recap</p>
                    <p className="text-[10px] text-gray-300 font-mono">8 Events</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E50914] flex items-center justify-center text-white shadow-lg">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Photo 3: Auditorium */}
              <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-gray-100 aspect-[4/3] relative group flex-1">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop"
                  alt="Campus presentation hall"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Photo 4: Modern Glass Skyscraper Campus */}
            <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-gray-100 aspect-[3/4] relative group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
                alt="Modern BlankSlate building at dusk"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
