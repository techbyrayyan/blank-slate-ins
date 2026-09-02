"use client";

import Link from "next/link";
import CourseCard from "./CourseCard";
import { allCourses } from "@/lib/coursesData";

export default function InteractiveProgramExplorer({ onOpenApply }) {
  const trendingCourses12 = allCourses.slice(0, 12);
  return (
    <section className="py-8 sm:py-10 bg-white text-[#1c1d1f] relative select-none" id="programs">
      
      {/* Eager Image Preloader */}
      <div className="hidden" aria-hidden="true">
        {trendingCourses12.map((c) => (
          <img key={c.id} src={c.image} alt="" loading="eager" decoding="async" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1c1d1f] tracking-tight">
            Trending courses
          </h2>
          <Link
            href="/courses"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a8a] hover:bg-[#152e72] text-white text-base font-bold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span>View More Courses</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        {/* 4-column Grid System (3 rows x 4 columns = 12 cards total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingCourses12.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onOpenApply={onOpenApply}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
