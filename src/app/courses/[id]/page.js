"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Check, ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import { allCourses } from "@/lib/coursesData";

function StarRow({ rating }) {
  const filled = Math.round(parseFloat(rating));
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= filled ? "#b4690e" : "#e8e0d5"} xmlns="http://www.w3.org/2000/svg">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = allCourses.find((c) => String(c.id) === String(id));
  const [openSections, setOpenSections] = useState([0]);

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center pt-[200px]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Course not found</h1>
            <Link href="/courses" className="text-[#1D4ED8] hover:underline">Back to Courses</Link>
          </div>
        </main>
        <EditorialFooter />
      </>
    );
  }

  const toggleSection = (i) =>
    setOpenSections((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  const totalLectures = course.sections?.reduce((s, sec) => s + sec.lectures, 0) || 0;
  const related = allCourses.filter((c) => c.category === course.category && c.id !== course.id).slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* ── Royal Blue Hero Banner ── */}
        <div className="bg-gradient-to-r from-[#0a1f4a] via-[#1D4ED8] to-[#0d2757] text-white pt-[220px] pb-12 relative overflow-hidden shadow-md">
          
          {/* Ambient Blue Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start relative z-10">
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-xs text-blue-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
                <span>/</span>
                <span className="text-white font-medium">{course.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4">{course.title}</h1>
              <p className="text-base text-blue-100 mb-5 leading-relaxed">{course.description}</p>

              {/* Badges + Rating */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {course.badgeType === "bestseller" ? (
                  <span className="bg-[#eceb98] text-[#3d3c0a] text-xs font-bold px-2.5 py-1 rounded">Bestseller</span>
                ) : (
                  <span className="bg-white text-[#1D4ED8] text-xs font-bold px-2.5 py-1 rounded">New</span>
                )}
                <span className="font-bold text-[#fbc02d] text-sm">{course.rating}</span>
                <StarRow rating={course.rating} />
                <span className="text-sm text-blue-100">({course.ratingCount})</span>
                <span className="text-sm text-blue-100">{course.students} students</span>
              </div>

              {/* Author + Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-blue-100 mb-3">
                <span>Created by <span className="text-white font-semibold underline underline-offset-2">{course.author}</span></span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-blue-200">
                <span>Last updated <strong className="text-white">{course.updated}</strong></span>
                <span>{course.hours}</span>
                <span>{course.level}</span>
                <span>English</span>
              </div>
            </div>

            {/* Desktop Purchase Card — scrolls with page (not fixed) */}
            <div className="hidden lg:block">
              <div className="bg-white text-[#1c1d1f] rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">
                {/* Course Image with Play Button */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#1c1d1f">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-extrabold text-[#1c1d1f] mb-4">{course.price}</div>
                  <button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm mb-3 transition-colors shadow-md hover:shadow-lg">
                    <ShoppingCart className="w-4 h-4" /> Add to cart
                  </button>
                  <button className="w-full border-2 border-[#2563EB] text-[#2563EB] font-bold py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors mb-4">
                    Enroll Now
                  </button>
                  <p className="text-xs text-center text-gray-500 mb-5">30-Day Money-Back Guarantee</p>
                  <div className="space-y-2.5 text-sm text-gray-700">
                    <p className="font-semibold text-[#1c1d1f] mb-2">This course includes:</p>
                    {[
                      ["🕐", `${course.hours} on-demand video`],
                      ["📄", "15 downloadable resources"],
                      ["♾️", "Full lifetime access"],
                      ["📱", "Access on mobile and TV"],
                      ["🏆", "Certificate of completion"],
                    ].map(([icon, text], i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span>{icon}</span>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Page Body ── */}
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
          <div>

            {/* Mobile Purchase Card */}
            <div className="lg:hidden bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden mb-8">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#1c1d1f"><polygon points="5,3 19,12 5,21" /></svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-extrabold mb-3">{course.price}</div>
                <button className="w-full bg-[#1D4ED8] text-white font-bold py-3 rounded-lg text-sm mb-2 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> Add to cart
                </button>
                <button className="w-full border border-[#1D4ED8] text-[#1D4ED8] font-bold py-2.5 rounded-lg text-sm">Enroll Now</button>
              </div>
            </div>

            {/* What You'll Learn */}
            <section className="border border-gray-200 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#1c1d1f]">
                    <Check className="w-4 h-4 text-[#1c1d1f] mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Content */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-2">Course content</h2>
              <p className="text-sm text-gray-500 mb-4">
                {course.sections?.length || 0} sections &bull; {totalLectures} lectures &bull; {course.hours}
              </p>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {course.sections?.map((sec, i) => (
                  <div key={i} className="border-b border-gray-200 last:border-0">
                    <button
                      onClick={() => toggleSection(i)}
                      className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 text-left transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {openSections.includes(i) ? (
                          <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        )}
                        <span className="font-semibold text-sm text-[#1c1d1f]">{sec.title}</span>
                      </div>
                      <span className="text-xs text-gray-500 flex-shrink-0 ml-4">
                        {sec.lectures} lectures &bull; {sec.duration}
                      </span>
                    </button>
                    {openSections.includes(i) && (
                      <div className="px-5 py-3 bg-white">
                        {Array.from({ length: Math.min(sec.lectures, 4) }).map((_, j) => (
                          <div key={j} className="flex items-center gap-3 py-2.5 text-sm text-gray-700 border-b border-gray-100 last:border-0">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <polygon points="10,8 16,12 10,16" fill="#1D4ED8" stroke="none" />
                            </svg>
                            <span className="flex-1">{sec.title} &mdash; Lecture {j + 1}</span>
                            <span className="text-xs text-[#1D4ED8] font-medium cursor-pointer hover:underline">Preview</span>
                          </div>
                        ))}
                        {sec.lectures > 4 && (
                          <p className="text-xs text-gray-400 pt-2">{sec.lectures - 4} more lectures...</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-4">Requirements</h2>
              <ul className="space-y-2">
                {course.requirements?.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </section>

            {/* Description */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-4">Description</h2>
              <p className="text-sm text-gray-700 leading-relaxed">{course.longDescription}</p>
            </section>

            {/* Instructor */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-4">Instructor</h2>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[#1D4ED8] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {course.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-[#1D4ED8] text-base hover:underline cursor-pointer">{course.author}</h3>
                  <p className="text-xs text-gray-500 mb-2">{course.category} Expert</p>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <StarRow rating="4.7" />
                    <span>{course.ratingCount}</span>
                    <span>{course.students} students</span>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Spacer for sticky desktop card */}
          <div className="hidden lg:block" />
        </div>

        {/* ── Related Courses ── */}
        {related.length > 0 && (
          <div className="bg-gray-50 py-10">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-6">More in {course.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {related.map((c) => (
                  <Link
                    key={c.id}
                    href={`/courses/${c.id}`}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm text-[#1c1d1f] line-clamp-2 mb-1">{c.title}</h3>
                      <p className="text-xs text-gray-500 mb-2 truncate">{c.author}</p>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-bold text-xs text-[#b4690e]">{c.rating}</span>
                        <StarRow rating={c.rating} />
                      </div>
                      <div className="font-extrabold text-sm text-[#1c1d1f]">{c.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>
      <EditorialFooter />
    </>
  );
}
