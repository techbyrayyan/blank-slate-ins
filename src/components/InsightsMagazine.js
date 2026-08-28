"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Sparkles, FileText, Share2 } from "lucide-react";
import { blogArticles } from "@/data/instituteData";

const categories = ["All Research", "AI & Technology", "Programming", "Design & UX"];

export default function InsightsMagazine() {
  const [activeCategory, setActiveCategory] = useState("All Research");
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);

  const filteredArticles = activeCategory === "All Research"
    ? blogArticles
    : blogArticles.filter((a) => a.category === activeCategory);

  const currentArticle = filteredArticles[selectedArticleIndex] || filteredArticles[0] || blogArticles[0];

  return (
    <section className="py-24 sm:py-32 bg-[#09090D] text-white relative overflow-hidden border-t border-white/5" id="insights">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#8E0E25]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8E0E25]/20 border border-[#B81134]/40 text-[#FF2A4D] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> RESEARCH & INSIGHTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05]">
              The BlankSlate <br />
              <span className="text-gradient-vine">Engineering Journal</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed pt-1">
              Peer-reviewed technical deep-dives on multi-agent architectures, distributed computing, and enterprise UX systems.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedArticleIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "btn-vine text-white shadow-md"
                    : "bg-[#0D0D12] text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Unique Interactive Journal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Featured Active Article Preview Screen (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D0D12] border border-white/10 shadow-2xl h-full flex flex-col justify-between space-y-8 relative overflow-hidden group">
              {/* Photo with Overlay */}
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden aspect-[16/9] relative bg-black border border-white/10">
                  <img
                    src={currentArticle.image}
                    alt={currentArticle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-[#B81134] text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded">
                      {currentArticle.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                    <span>{currentArticle.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FF2A4D]" /> {currentArticle.readTime}
                    </span>
                    <span>•</span>
                    <span className="text-white font-bold">{currentArticle.author}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF2A4D] transition-colors leading-tight">
                    {currentArticle.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {currentArticle.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Read Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 font-bold">
                  AUTHORED BY: {currentArticle.authorRole}
                </span>

                <Link
                  href={`/blog/${currentArticle.slug}`}
                  data-cursor="button"
                  className="btn-vine px-6 py-2.5 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg transition-all"
                >
                  <span>Read Full Paper</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Interactive Paper Index (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-2xl bg-[#0D0D12] border border-white/10 mb-2">
              <span className="text-xs font-mono font-bold uppercase text-[#FF2A4D]">
                INDEXED RESEARCH PAPERS ({filteredArticles.length})
              </span>
            </div>

            {filteredArticles.map((art, idx) => {
              const isSelected = currentArticle.slug === art.slug;
              return (
                <div
                  key={art.slug}
                  onMouseEnter={() => setSelectedArticleIndex(idx)}
                  onClick={() => setSelectedArticleIndex(idx)}
                  data-cursor="explore"
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#0D0D12] border-[#B81134] shadow-[0_0_20px_rgba(184,17,52,0.25)]"
                      : "bg-[#0D0D12]/50 border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1">
                    <span className={isSelected ? "text-[#FF2A4D] font-bold" : "text-gray-500"}>
                      0{idx + 1} • {art.category}
                    </span>
                    <span>{art.readTime}</span>
                  </div>

                  <h4 className={`text-sm sm:text-base font-bold transition-colors line-clamp-2 ${
                    isSelected ? "text-white" : "text-gray-300"
                  }`}>
                    {art.title}
                  </h4>

                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <span>{art.author}</span>
                    <Link
                      href={`/blog/${art.slug}`}
                      className="text-[#FF2A4D] font-bold hover:underline flex items-center gap-1 text-[11px]"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
