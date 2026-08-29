"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import { Sparkles, Search, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { facultyMembers } from "@/data/instituteData";

const departments = ["All Departments", "Computer Science", "Artificial Intelligence", "Design & UX", "Business & Strategy"];

export default function FacultyPage() {
  const [activeDept, setActiveDept] = useState("All Departments");
  const [searchQuery, setSearchQuery] = useState("");
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const filteredFaculty = facultyMembers.filter((f) => {
    const matchesDept = activeDept === "All Departments" || f.department === activeDept;
    const matchesSearch =
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.expertise.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#1D4ED8] selection:text-white font-sans">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1D4ED8]/10 border border-[#1D4ED8]/30 text-[#1D4ED8] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> RESEARCHERS & DIRECTORS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-gray-950">
              Distinguished Faculty <br />
              <span className="text-[#1D4ED8]">& Mentors</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
              Learn directly from senior practitioners and academic researchers who have engineered production systems at Google, Meta, Stanford, and MIT.
            </p>
          </motion.div>

          {/* Search & Filter Toolbar */}
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
                placeholder="Search faculty by name or expertise..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeDept === dept
                      ? "bg-[#1D4ED8] text-white shadow-md"
                      : "bg-white text-gray-700 hover:text-black border border-gray-200 shadow-sm"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredFaculty.map((f, idx) => (
                <motion.div
                  key={f.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -6, borderColor: "#1D4ED8" }}
                  data-cursor="view"
                  className="rounded-3xl p-6 bg-white border border-gray-200 flex flex-col justify-between space-y-6 transition-all group shadow-sm hover:shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-gray-100">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        src={f.image}
                        alt={f.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md border border-gray-200 text-[#1D4ED8] text-[10px] font-mono font-bold uppercase rounded shadow-sm">
                          {f.department}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h2 className="text-2xl font-black text-gray-950 group-hover:text-[#1D4ED8] transition-colors leading-tight">
                        {f.name}
                      </h2>
                      <p className="text-xs font-mono font-bold text-[#1D4ED8]">{f.role}</p>
                      <p className="text-xs text-gray-600 leading-relaxed pt-2">{f.bio}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {f.expertise.map((exp) => (
                        <span key={exp} className="px-2 py-0.5 bg-gray-100 border border-gray-200 rounded text-[10px] font-mono text-gray-700">
                          {exp}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 text-xs text-gray-600">
                      <a href={`mailto:${f.email}`} className="hover:text-black flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-[#1D4ED8]" /> Email
                      </a>
                      <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black flex items-center gap-1">
                        <LinkedinIcon className="w-3.5 h-3.5 text-[#1D4ED8]" /> LinkedIn
                      </a>
                    </div>
                  </div>
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
