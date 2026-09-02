"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CourseCard from "./CourseCard";
import { topicsList, allCourses } from "@/lib/coursesData";

export default function SkillsCareerTransform({ onOpenApply }) {
  const [activeTopic, setActiveTopic] = useState(topicsList[0].slug);

  const currentTopicObj = topicsList.find((t) => t.slug === activeTopic) || topicsList[0];
  const topicCourses = allCourses.filter((c) => c.topicSlug === activeTopic).slice(0, 4);

  return (
    <section className="py-12 sm:py-16 bg-white text-[#1c1d1f] relative" id="career-skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black text-[#1c1d1f] tracking-tight mb-3">
            Skills to transform your career and life
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal max-w-3xl">
            From critical skills to technical topics, BlankSlate supports your professional development.
          </p>
        </div>

        {/* 6 Tabs Navigation Bar (Matching Image 3) */}
        <div className="border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 sm:gap-9 min-w-max">
            {topicsList.map((topic) => {
              const isActive = activeTopic === topic.slug;
              return (
                <button
                  key={topic.slug}
                  onClick={() => setActiveTopic(topic.slug)}
                  className={`text-base sm:text-[17px] pb-3.5 font-bold transition-all relative whitespace-nowrap ${
                    isActive
                      ? "text-[#1c1d1f]"
                      : "text-gray-600 hover:text-[#1c1d1f]"
                  }`}
                >
                  {topic.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1e3a8a] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Cards Grid (No Slider — Responsive 4-Column Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {topicCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onOpenApply={onOpenApply}
            />
          ))}
        </div>

        {/* Explore More Link for the Active Topic */}
        <div className="flex items-center justify-start">
          <Link
            href={`/topic/${activeTopic}`}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white rounded-xl text-base font-bold transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span>Show all {currentTopicObj.title} courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
