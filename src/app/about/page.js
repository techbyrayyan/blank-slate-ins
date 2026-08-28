"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import {
  GraduationCap,
  Users,
  Rocket,
  Play,
  ArrowRight,
  BookOpen,
  Award,
  Calendar,
  Eye,
  Target,
  Diamond,
  Flag,
  Building,
  Trophy,
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";

const leaders = [
  {
    name: "Dr. Ali Raza",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Sara Ahmed",
    role: "Academic Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Mr. Hamza Khalid",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ms. Iqra Rehman",
    role: "Head of Student Affairs",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
];

const milestones = [
  {
    year: "2014",
    title: "The Beginning",
    desc: "BlankSlate Institute was founded with a vision to transform education.",
    icon: Flag,
  },
  {
    year: "2016",
    title: "First Campus",
    desc: "Opened our first modern campus welcoming our first batch.",
    icon: Building,
  },
  {
    year: "2018",
    title: "Program Expansion",
    desc: "Introduced new industry-focused programs and specializations.",
    icon: BookOpen,
  },
  {
    year: "2021",
    title: "Growing Community",
    desc: "Reached 1000+ students and built a strong community of learners.",
    icon: Users,
  },
  {
    year: "2024",
    title: "Future Forward",
    desc: "Continuing our journey towards excellence, innovation and global impact.",
    icon: Trophy,
  },
];

export default function AboutPage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#E50914] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => setApplyModalOpen(true)} />

      <main className="flex-1">
        {/* 1. HERO SECTION WITH SPLIT CAMPUS PHOTO */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Heading & 3 Feature Pills */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 space-y-6"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#E50914]">
                  <span>HOME</span>
                  <span className="text-gray-400">&gt;</span>
                  <span className="text-gray-600">ABOUT US</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-gray-950 tracking-tight leading-[1.05]">
                  About <br />
                  <span className="text-[#E50914]">BlankSlate</span> Institute
                </h1>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                  We are more than an institute; we are a community of learners, creators and innovators building the future together.
                </p>

                {/* 3 Features Stack */}
                <div className="space-y-4 pt-2">
                  {[
                    { icon: GraduationCap, title: "Quality Education", desc: "Industry-focused learning with academic excellence." },
                    { icon: Users, title: "Expert Mentors", desc: "Learn from experienced professionals and educators." },
                    { icon: Rocket, title: "Future Ready", desc: "Building skills for tomorrow's opportunities, today." },
                  ].map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <motion.div
                        key={feat.title}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 * idx }}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-4 cursor-default"
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#E50914] flex-shrink-0 mt-0.5 shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900">{feat.title}</h3>
                          <p className="text-xs text-gray-500">{feat.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right Column: Split Campus Architecture Graphic */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3] bg-gray-100 group">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                    alt="BlankSlate Institute Campus Building"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#E50914]/10 to-transparent pointer-events-none"></div>
                  <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-gray-200 text-gray-900 flex items-center gap-2 text-xs font-mono font-bold shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
                    <span>BlankSlate Campus</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. OUR STORY SECTION ("Education That Transforms Lives") */}
        <section className="py-24 bg-white text-[#09090B] relative border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Narrative */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#E50914] font-mono font-bold text-sm">//</span>
                  <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-gray-500">
                    OUR STORY
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-[1.1]">
                  Education That <br />
                  <span className="text-[#E50914]">Transforms</span> Lives
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <p>
                    BlankSlate Institute was founded with a simple belief: education should be practical, relevant and empowering. Our journey began with a vision to bridge the gap between academic learning and real-world skills.
                  </p>
                  <p>
                    Today, we continue to inspire students to think creatively, solve problems and build meaningful careers in a rapidly changing world.
                  </p>
                </div>

                <div className="pt-2">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                    <Link
                      href="/programs"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold rounded-full border border-gray-200 transition-all group"
                    >
                      <span>Discover Our Journey</span>
                      <ArrowRight className="w-4 h-4 text-[#E50914] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column: Photo with "Our Story in 2 Minutes" Video Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 aspect-[16/10] relative bg-gray-100 group">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                    alt="Students in group discussion"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Video Badge Overlay */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute bottom-6 left-6 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl flex items-center gap-3.5 cursor-pointer hover:border-[#E50914] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#E50914] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Our Story in 2 Minutes</p>
                      <p className="text-[10px] text-gray-500 font-mono">Watch Video</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. 5-COLUMN STATS STRIP WITH RED CIRCLE ICONS */}
        <section className="py-12 bg-gray-50 border-y border-gray-200 text-[#09090B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {[
                { value: "500+", label: "Students", icon: Users },
                { value: "20+", label: "Programs", icon: BookOpen },
                { value: "25+", label: "Expert Faculty", icon: GraduationCap },
                { value: "95%", label: "Student Satisfaction", icon: Award },
                { value: "10+", label: "Years of Excellence", icon: Calendar },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="space-y-2 flex flex-col items-center cursor-default group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 group-hover:bg-[#E50914] group-hover:border-[#E50914] group-hover:text-white flex items-center justify-center text-[#E50914] transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-3xl sm:text-4xl font-black text-gray-950 font-mono tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. MISSION, VISION & VALUES */}
        <section className="py-24 bg-white text-[#09090B] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  watermark: "01",
                  tag: "// OUR MISSION",
                  title: "Empower. Educate. Elevate.",
                  desc: "Our mission is to empower students with knowledge, skills and confidence to excel in their careers and contribute meaningfully to society.",
                  icon: Target,
                },
                {
                  watermark: "02",
                  tag: "// OUR VISION",
                  title: "To Lead. To Inspire. To Innovate.",
                  desc: "We envision a world where quality education is accessible, practical and transformative, shaping leaders and innovators of tomorrow.",
                  icon: Eye,
                },
                {
                  watermark: "03",
                  tag: "// OUR VALUES",
                  title: "Integrity. Innovation. Impact.",
                  desc: "We uphold integrity in everything we do, embrace innovation in our approach and create a lasting impact in students' lives and communities.",
                  icon: Diamond,
                },
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.watermark}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -5, borderColor: "#E50914" }}
                    className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 relative overflow-hidden flex flex-col justify-between space-y-8 shadow-sm hover:shadow-xl group transition-all"
                  >
                    <span className="absolute top-2 right-4 text-7xl font-black font-mono text-gray-100 pointer-events-none select-none">
                      {card.watermark}
                    </span>
                    <div className="space-y-4">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E50914]">
                        {card.tag}
                      </span>
                      <h3 className="text-2xl font-black text-gray-950 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-[#E50914]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. MILESTONES TIMELINE */}
        <section className="py-24 bg-white text-[#09090B] relative border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-4 space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#E50914] font-mono font-bold text-sm">//</span>
                  <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-gray-500">
                    OUR JOURNEY
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-[1.1]">
                  Milestones That <br />
                  Shaped <span className="text-[#E50914]">Our Path</span>
                </h2>
              </motion.div>

              {/* Right Column: Connected Timeline Items */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative">
                  {milestones.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        whileHover={{ y: -3 }}
                        className="space-y-3 relative cursor-default group"
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 group-hover:bg-[#E50914] group-hover:text-white flex items-center justify-center text-[#E50914] transition-all shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="space-y-1">
                          <p className="text-sm font-mono font-bold text-[#E50914]">{item.year}</p>
                          <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                        </div>

                        <p className="text-[11px] text-gray-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. LEADERSHIP TEAM */}
        <section className="py-24 bg-white text-[#09090B] relative border-t border-gray-100" id="leadership">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-3 max-w-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#E50914] font-mono font-bold text-sm">//</span>
                  <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-gray-500">
                    OUR LEADERSHIP
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-[1.1]">
                  Meet The Leaders <br />
                  Behind <span className="text-[#E50914]">Our Vision</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our leadership team brings together experience, passion and commitment to guide BlankSlate Institute towards a brighter future.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  href="/faculty"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold rounded-full border border-gray-200 transition-all group"
                >
                  <span>View All Faculty</span>
                  <ArrowRight className="w-4 h-4 text-[#E50914] group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((leader, idx) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -5, borderColor: "#E50914" }}
                  className="rounded-3xl bg-white border border-gray-200 overflow-hidden group shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="aspect-[4/5] relative bg-gray-100 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{leader.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{leader.role}</p>
                    </div>
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#E50914] hover:text-white flex items-center justify-center text-gray-600 transition-colors"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRE-FOOTER ADMISSIONS BANNER */}
        <section className="py-20 bg-white text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-gradient-to-r from-[#220609] via-[#3a0a12] to-[#180407]"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
                  alt="Students in workshop"
                  className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
                />
              </div>

              <div className="relative z-10 p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-200">
                    Be Part of Our Journey
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                    Your Future <br />
                    Starts <span className="text-[#E50914]">Here.</span>
                  </h2>
                </div>

                <div className="space-y-5 lg:text-right">
                  <p className="text-xs sm:text-sm text-gray-200 max-w-md">
                    Take the first step towards a future filled with opportunities, growth and success.
                  </p>

                  <div className="flex flex-wrap items-center lg:justify-end gap-3.5">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setApplyModalOpen(true)}
                      className="px-7 py-3 bg-[#E50914] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_4px_20px_rgba(229,9,20,0.5)] transition-all flex items-center gap-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>

                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/contact"
                        className="px-7 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 transition-all block"
                      >
                        Contact Admissions
                      </Link>
                    </motion.div>
                  </div>
                </div>
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
