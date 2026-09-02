"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import {
  Clock,
  TrendingUp,
  Laptop,
  Award,
  Download,
  ArrowRight,
  Phone,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Globe,
  Calendar,
  Layers,
  Sparkles,
} from "lucide-react";
import { programsData } from "@/data/instituteData";

export default function ProgramDetailPage({ params }) {
  const unwrappedParams = use(params);
  const { slug } = unwrappedParams;

  const currentProgram = programsData.find((p) => p.slug === slug) || programsData[0];

  const [activeTab, setActiveTab] = useState("Overview");
  const [openModuleIndex, setOpenModuleIndex] = useState(0);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const navSections = [
    "Overview",
    "Curriculum",
    "What You'll Learn",
    "Projects",
    "Instructor",
    "Career Opportunities",
    "FAQ",
  ];

  const technologies = [
    { name: "HTML", color: "from-orange-500 to-amber-600", tag: "HTML5" },
    { name: "CSS", color: "from-blue-500 to-cyan-600", tag: "CSS3" },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600", tag: "JS" },
    { name: "React", color: "from-cyan-400 to-blue-500", tag: "⚛" },
    { name: "Next.js", color: "from-gray-700 to-gray-900", tag: "NEXT" },
    { name: "Node.js", color: "from-emerald-500 to-green-600", tag: "NODE" },
    { name: "MongoDB", color: "from-green-600 to-emerald-700", tag: "DB" },
    { name: "Git & GitHub", color: "from-red-500 to-rose-600", tag: "GIT" },
  ];

  const learningPoints = [
    "HTML5, CSS3 & Responsive Design",
    "Modern JavaScript (ES6+) Mastery",
    "React.js & Component-Driven Architecture",
    "Next.js App Router & Server Components",
    "Node.js, Express & REST APIs",
    "MongoDB, PostgreSQL & Database Modeling",
    "Authentication, JWT & Web Security",
    "Git, GitHub & Team Workflows",
    "Deployment on Vercel, AWS & Cloud",
  ];

  const modules = [
    {
      title: "Module 1: Modern Web Foundations (HTML5 & CSS3)",
      duration: "Weeks 1–4",
      desc: "Semantic HTML5, CSS Grid, Flexbox, Tailwind CSS, accessibility best practices, and responsive design for all screen resolutions.",
    },
    {
      title: "Module 2: Advanced JavaScript & Asynchronous Programming",
      duration: "Weeks 5–8",
      desc: "ES6+ syntax, closures, DOM manipulation, promises, async/await, fetch API, and browser storage mechanisms.",
    },
    {
      title: "Module 3: React.js & State Architecture",
      duration: "Weeks 9–14",
      desc: "Hooks, custom hooks, context API, Zustand/Redux Toolkit, routing, performance optimization, and clean component patterns.",
    },
    {
      title: "Module 4: Full Stack with Next.js & Server Actions",
      duration: "Weeks 15–18",
      desc: "App router, server/client components, API routes, middleware, SEO optimization, and hybrid rendering strategies.",
    },
    {
      title: "Module 5: Backend Engineering & Databases",
      duration: "Weeks 19–22",
      desc: "Node.js runtime, Express framework, MongoDB with Mongoose, PostgreSQL with Prisma ORM, and JWT authentication.",
    },
    {
      title: "Module 6: Capstone Project & Cloud Deployment",
      duration: "Weeks 23–24",
      desc: "Architect and ship a full-stack SaaS application from scratch. CI/CD pipelines, Docker containerization, and AWS/Vercel deployment.",
    },
  ];

  const toolsList = [
    "VS Code",
    "Git",
    "GitHub",
    "Postman",
    "Figma",
    "Tailwind CSS",
    "Vercel",
    "Docker",
    "MongoDB Compass",
    "Chrome DevTools",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#1D4ED8] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => setApplyModalOpen(true)} />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Breadcrumb, Title & Badges */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 space-y-6"
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-sans font-semibold text-gray-500">
                  <Link href="/" className="hover:text-gray-900 transition-colors">
                    Home
                  </Link>
                  <span className="text-gray-400 font-normal">/</span>
                  <Link href="/programs" className="hover:text-gray-900 transition-colors">
                    Programs
                  </Link>
                  <span className="text-gray-400 font-normal">/</span>
                  <span className="text-[#1D4ED8] font-bold">{currentProgram.title}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-950 tracking-tight leading-[1.05]">
                  Full Stack <br />
                  <span className="text-[#1D4ED8]">Development</span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
                  A complete program to turn you into a versatile developer. Learn modern technologies and build real-world applications.
                </p>

                {/* 4 Feature Badges Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {[
                    { icon: Clock, val: "6 Months", label: "Duration" },
                    { icon: TrendingUp, val: "Beginner to Advanced", label: "Level" },
                    { icon: Laptop, val: "Hands-on Projects", label: "30+ Projects" },
                    { icon: Award, val: "Certificate", label: "Included" },
                  ].map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <motion.div
                        key={badge.label}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-2.5 cursor-default"
                      >
                        <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#1D4ED8] shadow-sm">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900">{badge.val}</p>
                          <p className="text-[10px] text-gray-500 font-mono">{badge.label}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setApplyModalOpen(true)}
                    className="px-7 py-3.5 bg-[#1D4ED8] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_4px_20px_rgba(229,9,20,0.35)] transition-all flex items-center gap-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => alert("Brochure download initiated for Full Stack Development.")}
                    className="px-7 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold uppercase tracking-wider rounded-full border border-gray-200 transition-all flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Brochure</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Column: Coder Image with Tech Floating Icons */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3] lg:aspect-[5/4] bg-gray-100 group">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                    src="https://images.unsplash.com/photo-1534972195531-a756b1126920?q=80&w=1200&auto=format&fit=crop"
                    alt="Developer coding on laptop"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Floating Tech Badges */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 text-cyan-600 flex items-center gap-1.5 text-xs font-mono font-bold shadow-md"
                  >
                    <span>⚛</span> React.js
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-1/3 right-4 p-2 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 text-amber-600 flex items-center gap-1.5 text-xs font-mono font-bold shadow-md"
                  >
                    <span>JS</span> JavaScript
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute bottom-6 right-4 p-2 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 text-emerald-600 flex items-center gap-1.5 text-xs font-mono font-bold shadow-md"
                  >
                    <span>NODE</span> Node.js
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. IN-PAGE STICKY NAVIGATION BAR */}
        <div className="sticky top-[68px] z-30 bg-white/95 backdrop-blur-md border-y border-gray-200 py-3 overflow-x-auto no-scrollbar shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-6 min-w-max">
              {navSections.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs font-semibold uppercase tracking-wider py-1.5 transition-colors relative ${
                      isActive ? "text-[#1D4ED8] font-bold" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <span>{tab}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeProgramTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1D4ED8]"
                      ></motion.span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. MAIN CONTENT GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-8 space-y-16">
              {/* SECTION: Program Overview */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-gray-950">Program Overview</h2>
                <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <p>
                    The Full Stack Development program at BlankSlate Institute is designed to take you from zero to job-ready. You&apos;ll master front-end, back-end, databases, APIs, and modern tools through hands-on projects and real-world applications.
                  </p>
                  <p>
                    Whether you want to build websites, web apps, or SaaS products — this program gives you all the skills you need.
                  </p>
                </div>

                {/* Technology Icons Row */}
                <div className="pt-4 grid grid-cols-4 sm:grid-cols-8 gap-3">
                  {technologies.map((t, idx) => (
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ y: -4, borderColor: "#1D4ED8" }}
                      className="p-3 rounded-2xl bg-white border border-gray-200 flex flex-col items-center justify-center space-y-1.5 text-center group transition-all shadow-sm cursor-default"
                    >
                      <span className={`w-8 h-8 rounded-xl bg-gradient-to-br ${t.color} text-white flex items-center justify-center text-[10px] font-mono font-black shadow-sm`}>
                        {t.tag}
                      </span>
                      <span className="text-[10px] font-mono text-gray-700 font-bold">{t.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* SECTION: What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-gray-950">What You&apos;ll Learn</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {learningPoints.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-2.5 cursor-default shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 font-medium leading-snug">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* SECTION: Program Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-gray-950">Program Curriculum</h2>

                <div className="space-y-3">
                  {modules.map((mod, idx) => {
                    const isOpen = openModuleIndex === idx;
                    return (
                      <div
                        key={mod.title}
                        className="rounded-2xl bg-white border border-gray-200 overflow-hidden transition-all shadow-sm"
                      >
                        <button
                          onClick={() => setOpenModuleIndex(isOpen ? -1 : idx)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-gray-900 hover:text-[#1D4ED8] transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-lg bg-[#1D4ED8]/10 text-[#1D4ED8] flex items-center justify-center text-xs">
                              <Layers className="w-3.5 h-3.5" />
                            </span>
                            <span>{mod.title}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-gray-500">{mod.duration}</span>
                            {isOpen ? (
                              <ChevronUp className="w-4 h-4 text-[#1D4ED8]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50"
                            >
                              {mod.desc}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => alert("Curriculum download initiated.")}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold rounded-full border border-gray-200 transition-all"
                  >
                    <Download className="w-4 h-4 text-[#1D4ED8]" />
                    <span>Download Full Curriculum</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 space-y-8"
            >
              {/* CARD 1: Program Details */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 space-y-6 shadow-md">
                <h3 className="text-xl font-black text-gray-950">Program Details</h3>

                <div className="space-y-4 text-xs">
                  {[
                    { icon: Clock, label: "Duration", val: "6 Months" },
                    { icon: TrendingUp, label: "Level", val: "Beginner to Advanced" },
                    { icon: Globe, label: "Mode", val: "On Campus / Online" },
                    { icon: Calendar, label: "Batch Timing", val: "Weekdays / Weekend" },
                    { icon: Award, label: "Certification", val: "Industry Recognized" },
                    { icon: Sparkles, label: "Prerequisites", val: "Basic Computer Knowledge" },
                  ].map((row) => {
                    const Icon = row.icon;
                    return (
                      <div key={row.label} className="flex items-start gap-3">
                        <Icon className="w-4 h-4 text-[#1D4ED8] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gray-500 font-mono">{row.label}</p>
                          <p className="font-bold text-gray-900">{row.val}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setApplyModalOpen(true)}
                    className="w-full py-3.5 bg-[#1D4ED8] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_4px_15px_rgba(229,9,20,0.35)] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+923121234567"
                    className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold rounded-xl border border-gray-200 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Talk to Admissions</span>
                  </motion.a>
                </div>
              </div>

              {/* CARD 2: Certifications You'll Earn */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 space-y-4 shadow-md">
                <h3 className="text-lg font-black text-gray-950">Certifications You&apos;ll Earn</h3>

                <div className="p-5 rounded-2xl bg-gray-50 text-gray-900 border-2 border-[#1D4ED8]/40 space-y-3 text-center shadow-inner relative overflow-hidden">
                  <p className="text-[10px] font-mono uppercase tracking-widest font-black text-[#1D4ED8]">
                    BlankSlate Institute
                  </p>
                  <p className="text-xs font-mono text-gray-500 uppercase">Certificate of Completion</p>
                  <p className="text-sm font-black text-gray-950">Full Stack Development</p>
                  <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-[8px] font-mono text-gray-500">
                    <span>Verified ID: BSI-2026-904</span>
                    <span>Accredited</span>
                  </div>
                </div>
              </div>

              {/* CARD 3: Tools & Technologies */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 space-y-4 shadow-md">
                <h3 className="text-lg font-black text-gray-950">Tools & Technologies</h3>

                <div className="flex flex-wrap gap-2">
                  {toolsList.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-xs font-mono text-gray-700 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4. HELP BANNER */}
        <section className="py-12 bg-white text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 sm:p-12 rounded-3xl bg-gray-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            >
              <div className="space-y-1 relative z-10">
                <span className="text-[11px] font-mono text-rose-300 uppercase">Still have questions?</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">We&apos;re here to help.</h3>
                <p className="text-xs text-gray-300">Talk to our admissions team and start your journey with BlankSlate Institute.</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 relative z-10">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-full border border-white/20 transition-all flex items-center gap-2"
                  >
                    <span>Contact Admissions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/923121234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#1D4ED8] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-full shadow-lg transition-all flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+92 312 1234567</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EditorialFooter />
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        preselectedCourse="Full Stack Development"
      />
    </div>
  );
}
