"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import {
  Clock,
  TrendingUp,
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
  DollarSign,
  FileText,
  Mail,
  MapPin,
} from "lucide-react";
import { programsData } from "@/data/instituteData";

export default function AdmissionsPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const navSections = [
    "Overview",
    "How to Apply",
    "Eligibility",
    "Tuition & Fees",
    "Scholarships",
    "Deadlines",
    "FAQ",
  ];

  const steps = [
    {
      num: "01",
      title: "Submit Online Application",
      desc: "Complete our quick 3-minute technical application form with your background and target program track.",
      detail: "No application fee required. You can save and resume your submission anytime.",
    },
    {
      num: "02",
      title: "Technical Readiness Assessment",
      desc: "Connect for a 20-minute technical counseling discussion with an admissions mentor to assess program alignment.",
      detail: "Conducted online via Google Meet or in-person at our Lahore Innovation Campus.",
    },
    {
      num: "03",
      title: "Receive Decision & Enrollment",
      desc: "Successful applicants receive their admission offer letter, scholarship grant confirmation, and onboarding kit.",
      detail: "Decisions dispatched within 48 business hours of assessment.",
    },
  ];

  const eligibilityCriteria = [
    "Basic computer literacy and logical problem-solving aptitude",
    "Intermediate / A-Levels / High School Diploma or equivalent in any discipline",
    "Passionate commitment to 15–20 hours/week of active building and labs",
    "No prior computer science or coding degree required for foundation tracks",
  ];

  const faqs = [
    {
      q: "Is there an application fee?",
      a: "No, submitting an admission inquiry or application for any BlankSlate program is 100% free of charge.",
    },
    {
      q: "Can I pay tuition in monthly installments?",
      a: "Yes, we provide 0% interest monthly installment plans across all 6-month career tracks.",
    },
    {
      q: "What scholarships are available?",
      a: "Merit-based scholarships of up to 40% are automatically evaluated based on your background and readiness interview.",
    },
    {
      q: "Are the classes available online or in-person?",
      a: "All programs offer both on-campus physical sessions at our state-of-the-art labs and interactive live online batches.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#E50914] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => setApplyModalOpen(true)} />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Title & Feature Badges */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 space-y-6"
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-500">
                  <Link href="/" className="hover:text-black flex items-center gap-1">
                    <span>Home</span>
                  </Link>
                  <span>&gt;</span>
                  <span className="text-[#E50914]">Admissions 2026</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-950 tracking-tight leading-[1.05]">
                  Your Next Chapter <br />
                  <span className="text-[#E50914]">Starts Here.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
                  Join a community of builders, researchers, and innovators. Learn about our streamlined admissions process, tuition plans, and scholarship opportunities.
                </p>

                {/* 4 Feature Badges Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {[
                    { icon: Calendar, val: "Fall 2026", label: "Next Intake" },
                    { icon: TrendingUp, val: "Merit-Based", label: "Selection" },
                    { icon: Globe, val: "Campus & Online", label: "Learning Mode" },
                    { icon: Award, val: "Up to 40% Aid", label: "Scholarships" },
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
                        <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#E50914] shadow-sm">
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
                    className="px-7 py-3.5 bg-[#E50914] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_4px_20px_rgba(229,9,20,0.35)] transition-all flex items-center gap-2"
                  >
                    <span>Apply for Next Intake</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => alert("Admissions prospectus download initiated.")}
                    className="px-7 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold uppercase tracking-wider rounded-full border border-gray-200 transition-all flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Admissions Guide</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Column: Admissions Counseling Photo */}
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
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                    alt="Students discussing admissions at BlankSlate Institute"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Floating Badges */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 text-[#E50914] flex items-center gap-1.5 text-xs font-mono font-bold shadow-md">
                    <Sparkles className="w-3.5 h-3.5" /> Rolling Admissions
                  </div>
                  <div className="absolute bottom-6 left-6 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 text-gray-900 flex items-center gap-3 text-xs font-mono shadow-lg">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="font-bold">Accepting Fall 2026 Inquiries</span>
                  </div>
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
                      isActive ? "text-[#E50914] font-bold" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <span>{tab}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeAdmissionsTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E50914]"
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
              {/* SECTION 1: How to Apply */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E50914]">
                    ADMISSION PROCESS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-950">How to Apply</h2>
                </div>

                <div className="space-y-4">
                  {steps.map((step, idx) => (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -3, borderColor: "#E50914" }}
                      className="p-6 rounded-2xl bg-white border border-gray-200 space-y-2 transition-all shadow-sm hover:shadow-md cursor-default"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#E50914] text-white flex items-center justify-center text-xs font-mono font-black shadow-sm">
                          {step.num}
                        </span>
                        <h3 className="text-base font-bold text-gray-950">{step.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 pl-11 leading-relaxed">{step.desc}</p>
                      <p className="text-[11px] font-mono text-gray-500 pl-11">{step.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* SECTION 2: Eligibility & Prerequisites */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E50914]">
                    REQUIREMENTS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-950">Eligibility & Prerequisites</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {eligibilityCriteria.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-2.5 cursor-default shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E50914] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 font-medium leading-snug">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* SECTION 3: Tuition & Fee Schedules */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E50914]">
                    TRANSPARENT TUITION
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-950">Tuition & Installment Plans</h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50 text-gray-900 font-mono text-[11px] uppercase tracking-wider border-b border-gray-200">
                      <tr>
                        <th className="p-4">Program Track</th>
                        <th className="p-4">Duration</th>
                        <th className="p-4">Total Tuition</th>
                        <th className="p-4">Monthly Plan</th>
                        <th className="p-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {programsData.slice(0, 5).map((prog) => (
                        <tr key={prog.slug} className="hover:bg-gray-50 transition-colors">
                          <td className="p-4 font-bold text-gray-900">{prog.title}</td>
                          <td className="p-4 text-gray-500 font-mono">{prog.duration}</td>
                          <td className="p-4 font-mono font-black text-[#E50914]">{prog.tuition}</td>
                          <td className="p-4 text-gray-600 font-mono">0% Interest</td>
                          <td className="p-4 text-right">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setApplyModalOpen(true)}
                              className="px-3.5 py-1.5 bg-[#E50914] hover:bg-[#B91C1C] text-white rounded-lg font-bold text-xs shadow-sm transition-all"
                            >
                              Apply
                            </motion.button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* SECTION 4: Admissions FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E50914]">
                    COMMON INQUIRIES
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-950">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl bg-white border border-gray-200 overflow-hidden transition-all shadow-sm"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-gray-900 hover:text-[#E50914] transition-colors"
                        >
                          <span>{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-[#E50914]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
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
                              {faq.a}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
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
              {/* CARD 1: Priority Deadlines */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 space-y-6 shadow-md">
                <h3 className="text-xl font-black text-gray-950">Cohort Deadlines</h3>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
                    <span className="text-[10px] font-mono text-[#E50914] font-bold uppercase">
                      Early Decision Deadline
                    </span>
                    <p className="text-base font-black text-gray-950">October 15, 2026</p>
                    <p className="text-[10px] text-gray-500 font-mono">Priority scholarship evaluation</p>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
                    <span className="text-[10px] font-mono text-gray-500 font-bold uppercase">
                      Regular Decision Deadline
                    </span>
                    <p className="text-base font-black text-gray-950">November 01, 2026</p>
                    <p className="text-[10px] text-gray-500 font-mono">Final seat allocation</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setApplyModalOpen(true)}
                  className="w-full py-3.5 bg-[#E50914] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_4px_15px_rgba(229,9,20,0.35)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* CARD 2: Merit Scholarships */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 space-y-4 shadow-md">
                <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#E50914]">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-gray-950">Merit Aid Scholarships</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We award merit-based tuition reductions of up to 40% to promising developers, researchers, and female tech leaders.
                </p>
                <div className="pt-2 text-xs font-mono text-[#E50914] font-bold">
                  ✓ Automatically evaluated upon applying
                </div>
              </div>

              {/* CARD 3: Admissions Office Contact */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 space-y-4 shadow-md text-xs">
                <h3 className="text-lg font-black text-gray-950">Admissions Desk</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#E50914] flex-shrink-0 mt-0.5" />
                    <span>123 Education Lane, Lahore, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#E50914] flex-shrink-0" />
                    <span>+92 42 111 222 333</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#E50914] flex-shrink-0" />
                    <span>admissions@blankslate.edu.pk</span>
                  </div>
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
                  className="px-6 py-3 bg-[#E50914] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-full shadow-lg transition-all flex items-center gap-2"
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
      <ApplicationModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </div>
  );
}
