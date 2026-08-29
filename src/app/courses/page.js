"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import { allCourses, topicsList } from "@/lib/coursesData";

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...topicsList.map((t) => t.title)];

  const filtered = allCourses.filter((c) => {
    const matchCat =
      activeCategory === "All" ||
      c.category === activeCategory ||
      c.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchSearch =
      search.trim() === "" ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.author.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        
        {/* ── Royal Blue Hero Banner ── */}
        <div className="bg-gradient-to-r from-[#0a1f4a] via-[#1D4ED8] to-[#0d2757] text-white pt-[220px] pb-14 shadow-md relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Link href="/" className="text-blue-100 hover:text-white text-sm font-medium transition-colors">Home</Link>
              <span className="text-blue-200 text-sm">/</span>
              <span className="text-white text-sm font-semibold">All Courses</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">Explore All Courses</h1>
            <p className="text-blue-100 text-base">{allCourses.length} in-demand technology and professional courses</p>
          </div>
        </div>

        {/* ── Filter & Courses Grid ── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10">

          <div className="relative mb-6 max-w-xl">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input
              type="text"
              placeholder="Search courses by title or instructor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-sm"
                    : "bg-white text-[#1c1d1f] border-gray-300 hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Showing <span className="font-semibold text-[#1c1d1f]">{filtered.length}</span> result{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && <> in <span className="font-semibold text-[#1D4ED8]">{activeCategory}</span></>}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-gray-500 text-lg font-medium">No courses found</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="mt-4 px-5 py-2 bg-[#1D4ED8] text-white text-sm font-semibold rounded-md hover:bg-[#1e40af] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <EditorialFooter />
    </>
  );
}
