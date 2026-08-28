"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import { Sparkles, ArrowRight } from "lucide-react";
import { blogArticles } from "@/data/instituteData";

const categories = ["All Topics", "AI & Technology", "Programming", "Design & UX"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const filteredArticles = activeCategory === "All Topics"
    ? blogArticles
    : blogArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#E50914] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => setApplyModalOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4 mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> KNOWLEDGE & RESEARCH
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-gray-950">
              BlankSlate <br />
              <span className="text-[#E50914]">Insights & Papers</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
              Deep dives on autonomous agent architectures, zero-bundle-size web applications, and enterprise design systems.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#E50914] text-white shadow-md"
                    : "bg-white text-gray-700 hover:text-black border border-gray-200 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles.map((art, idx) => (
                <motion.div
                  key={art.slug}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -6, borderColor: "#E50914" }}
                  className="rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <Link
                    href={`/blog/${art.slug}`}
                    data-cursor="view"
                    className="p-6 flex flex-col justify-between space-y-6 h-full block"
                  >
                    <div className="space-y-4">
                      <div className="rounded-2xl overflow-hidden aspect-[16/10] relative bg-gray-100">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md border border-gray-200 text-[#E50914] text-[9px] font-mono font-bold uppercase rounded shadow-sm">
                            {art.category}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                          <span>{art.date}</span>
                          <span>•</span>
                          <span>{art.readTime}</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-950 group-hover:text-[#E50914] transition-colors leading-snug">
                          {art.title}
                        </h2>
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                          {art.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-700 font-bold">{art.author}</span>
                      <span className="text-[#E50914] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Paper <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <EditorialFooter />
      <ApplicationModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </div>
  );
}
