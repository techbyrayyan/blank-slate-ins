"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import {
  BookOpen,
  Award,
  CreditCard,
  Clock,
  Download,
  Sparkles,
} from "lucide-react";
import { studentPortalData } from "@/data/instituteData";

const sidebarTabs = [
  { id: "overview", label: "Dashboard Overview", icon: Sparkles },
  { id: "courses", label: "Enrolled Courses", icon: BookOpen },
  { id: "assignments", label: "Assignments & Labs", icon: Clock },
  { id: "grades", label: "Gradebook & GPA", icon: Award },
  { id: "invoices", label: "Fee Invoices", icon: CreditCard },
];

export default function StudentPortalPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const { student, courses, attendance, assignments, invoices } = studentPortalData;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#E50914] selection:text-white font-sans">
      <CustomCursor />
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Student Welcome Header */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 text-gray-900 shadow-md mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#E50914]"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-black text-gray-950">{student.name}</h1>
                  <span className="px-2 py-0.5 rounded bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914] text-[9px] font-mono font-bold uppercase">
                    STUDENT
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-mono">
                  ID: {student.id} • {student.program} • {student.cohort}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <p className="text-gray-500 text-[10px] uppercase font-bold">GPA</p>
                <p className="text-xl font-bold text-gray-950 leading-none">{student.gpa}</p>
              </div>
              <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <p className="text-gray-500 text-[10px] uppercase font-bold">ATTENDANCE</p>
                <p className="text-xl font-bold text-[#E50914] leading-none">{attendance.percentage}%</p>
              </div>
            </div>
          </div>

          {/* Portal Navigation & Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar Menu (3 cols) */}
            <div className="lg:col-span-3 p-4 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-1.5">
              {sidebarTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full p-3 rounded-2xl flex items-center gap-3 text-xs font-bold transition-all text-left ${
                      isActive
                        ? "bg-[#E50914] text-white shadow-md"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Tab Content Area (9 cols) */}
            <div className="lg:col-span-9 space-y-6">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Current Active Courses */}
                  <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
                    <h2 className="text-xl font-black text-gray-950">Active Course Progress</h2>
                    <div className="space-y-4">
                      {courses.map((c) => (
                        <div key={c.code} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-mono font-bold text-[#E50914]">{c.code}</span>
                            <span className="font-bold text-gray-700">{c.progress}% Completed</span>
                          </div>
                          <h3 className="text-base font-bold text-gray-950">{c.title}</h3>
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-[#E50914] h-2 rounded-full transition-all duration-500"
                              style={{ width: `${c.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Assignments */}
                  <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
                    <h2 className="text-xl font-black text-gray-950">Lab Assignments & Capstones</h2>
                    <div className="divide-y divide-gray-100">
                      {assignments.map((a) => (
                        <div key={a.title} className="py-3.5 flex items-center justify-between gap-4 text-xs">
                          <div>
                            <p className="font-bold text-gray-900">{a.title}</p>
                            <p className="text-gray-500 font-mono text-[11px]">{a.course} • Due: {a.dueDate}</p>
                          </div>
                          <span
                            className={`px-2.5 py-1 rounded font-mono font-bold text-[10px] ${
                              a.status === "Submitted"
                                ? "bg-emerald-100 border border-emerald-300 text-emerald-800"
                                : "bg-amber-100 border border-amber-300 text-amber-800"
                            }`}
                          >
                            {a.status} ({a.score})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "courses" && (
                <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-6">
                  <h2 className="text-2xl font-black text-gray-950">My Enrolled Courses</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {courses.map((c) => (
                      <div key={c.code} className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                        <span className="text-xs font-mono font-bold text-[#E50914]">{c.code}</span>
                        <h3 className="text-lg font-bold text-gray-950">{c.title}</h3>
                        <p className="text-xs text-gray-600">Instructor: {c.instructor}</p>
                        <div className="pt-2 flex items-center justify-between text-xs font-mono">
                          <span>Grade: <strong className="text-gray-900">{c.grade}</strong></span>
                          <span className="text-emerald-600 font-bold">{c.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "assignments" && (
                <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-6">
                  <h2 className="text-2xl font-black text-gray-950">Submission History</h2>
                  <div className="space-y-3">
                    {assignments.map((a) => (
                      <div key={a.title} className="p-5 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between gap-4">
                        <div>
                          <h3 className="text-sm font-bold text-gray-950">{a.title}</h3>
                          <p className="text-xs text-gray-500 font-mono mt-0.5">{a.course} • Due: {a.dueDate}</p>
                        </div>
                        <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-mono font-bold text-gray-900 shadow-sm">
                          {a.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "grades" && (
                <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-6">
                  <h2 className="text-2xl font-black text-gray-950">Official Transcript & Gradebook</h2>
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase text-gray-500">Cumulative Grade Point Average</p>
                      <p className="text-4xl font-mono font-black text-[#E50914] mt-1">{student.gpa} / 4.00</p>
                    </div>
                    <button className="px-4 py-2 bg-[#E50914] hover:bg-[#B91C1C] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md transition-all">
                      <Download className="w-3.5 h-3.5" /> Download Transcript PDF
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "invoices" && (
                <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-6">
                  <h2 className="text-2xl font-black text-gray-950">Tuition Statements & Receipts</h2>
                  <div className="space-y-3">
                    {invoices.map((inv) => (
                      <div key={inv.id} className="p-5 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-gray-500">{inv.id}</span>
                          <h3 className="text-sm font-bold text-gray-950">{inv.description}</h3>
                          <p className="text-xs text-gray-500 font-mono">{inv.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-base font-mono font-black text-[#E50914]">{inv.amount}</p>
                          <span
                            className={`text-[10px] font-mono font-bold uppercase ${
                              inv.status === "Paid" ? "text-emerald-600" : "text-amber-600"
                            }`}
                          >
                            {inv.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <EditorialFooter />
    </div>
  );
}
