"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import { topicsList, allCourses } from "@/lib/coursesData";

export default function TopicCoursesPage() {
  const { slug } = useParams();
  const [search, setSearch] = useState("");

  const currentTopic = topicsList.find((t) => t.slug === slug) || {
    slug: slug || "all",
    title: slug ? slug.replace("-", " ").toUpperCase() : "Topic Courses"
  };

  const topicCourses = allCourses.filter((c) => 
    c.topicSlug === slug || c.category.toLowerCase().includes(String(slug).toLowerCase())
  );

  const filtered = topicCourses.filter((c) => {
    return (
      search.trim() === "" ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.author.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        
        {/* ── Royal Blue Hero Banner ── */}
        <div className="bg-gradient-to-r from-[#0a1f4a] via-[#1D4ED8] to-[#0d2757] text-white pt-[220px] pb-14 shadow-md relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-3">
              <Link href="/" className="text-blue-100 hover:text-white text-sm font-medium transition-colors">Home</Link>
              <span className="text-blue-200 text-sm">/</span>
              <Link href="/courses" className="text-blue-100 hover:text-white text-sm font-medium transition-colors">Courses</Link>
              <span className="text-blue-200 text-sm">/</span>
              <span className="text-white text-sm font-semibold">{currentTopic.title}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
              {currentTopic.title} Courses
            </h1>
            <p className="text-blue-100 text-base max-w-2xl">
              Explore in-depth, career-ready programs and practical certifications in {currentTopic.title}.
            </p>
          </div>
        </div>

        {/* ── Topic Quick Selector Bar ── */}
        <div className="border-b border-gray-200 bg-gray-50/70">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-3 min-w-max">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">Topics:</span>
              {topicsList.map((t) => (
                <Link
                  key={t.slug}
                  href={`/topic/${t.slug}`}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    t.slug === slug
                      ? "bg-[#1D4ED8] text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
                  }`}
                >
                  {t.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Filter & Courses Grid ── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10">

          {/* Search Bar */}
          <div className="relative mb-6 max-w-xl">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input
              type="text"
              placeholder={`Search ${currentTopic.title} courses...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all shadow-sm"
            />
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Showing <span className="font-semibold text-[#1c1d1f]">{filtered.length}</span> course{filtered.length !== 1 ? "s" : ""} in <span className="font-semibold text-[#1D4ED8]">{currentTopic.title}</span>
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-gray-500 text-lg font-medium">No courses found matching your query</p>
              <button
                onClick={() => setSearch("")}
                className="mt-4 px-5 py-2 bg-[#1D4ED8] text-white text-sm font-semibold rounded-md hover:bg-[#1e40af] transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}

        </div>
      </main>
      <EditorialFooter />
    </>
  );
}
