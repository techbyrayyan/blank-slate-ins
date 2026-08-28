"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import { Search, Sparkles, CheckCircle2 } from "lucide-react";
import { programsData } from "@/data/instituteData";

const categories = ["All Tracks", "Web & Software", "AI & Data", "Core Computing", "Design & Creative", "Business & Strategy"];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All Tracks");
  const [searchQuery, setSearchQuery] = useState("");
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Full Stack Development");

  const filteredPrograms = programsData.filter((p) => {
    const matchesCat = activeCategory === "All Tracks" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleApply = (title) => {
    setSelectedCourse(title);
    setApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#E50914] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => handleApply("Full Stack Development")} />

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
              <Sparkles className="w-3.5 h-3.5" /> ACADEMIC PROGRAMS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-gray-950">
              Specialized Technical <br />
              <span className="text-[#E50914]">Career Tracks</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
              Explore our intensive engineering and product tracks. Each curriculum combines structured live lectures, code reviews, and enterprise capstone builds.
            </p>
          </motion.div>

          {/* Search & Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-4 sm:p-6 rounded-3xl bg-gray-50 border border-gray-200 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm"
          >
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs by technology or keyword..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E50914]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
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
            </div>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPrograms.map((p, idx) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -6, borderColor: "#E50914" }}
                  data-cursor="explore"
                  className="rounded-3xl p-8 bg-white border border-gray-200 flex flex-col justify-between space-y-6 transition-all group shadow-sm hover:shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E50914] bg-[#E50914]/10 border border-[#E50914]/30 px-2.5 py-1 rounded">
                        {p.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-gray-500">{p.duration}</span>
                    </div>

                    <h2 className="text-2xl font-black text-gray-900 group-hover:text-[#E50914] transition-colors leading-tight">
                      {p.title}
                    </h2>

                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {p.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {p.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 pt-2">
                      {p.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-gray-100 border border-gray-200 rounded text-[10px] font-mono text-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Tuition: <strong className="text-[#E50914] font-mono font-bold">{p.tuition}</strong></span>
                      <span>Starts: <strong className="text-gray-900">{p.startDate}</strong></span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Link
                        href={`/programs/${p.slug}`}
                        className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-900 rounded-xl text-xs font-bold text-center transition-all"
                      >
                        Syllabus & Details
                      </Link>
                      <button
                        onClick={() => handleApply(p.title)}
                        className="px-5 py-3 bg-[#E50914] hover:bg-[#B91C1C] text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <EditorialFooter />
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        preselectedCourse={selectedCourse}
      />
    </div>
  );
}
