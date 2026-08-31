"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
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
  CheckCircle2,
  Sparkles,
  Globe,
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

function StatCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    let animationFrame;
    const duration = 2000;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-mono tracking-tight tabular-nums">
      {count}
      <span className="text-[#1D4ED8]">{suffix}</span>
    </span>
  );
}

export default function AboutPage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#1D4ED8] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => setApplyModalOpen(true)} />

      <main className="flex-1">
        {/* 1. HERO SECTION ("Welcome to where possibilities begin" - Full Viewport Screen) */}
        <section className="relative min-h-[calc(100vh-0px)] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 bg-[#F7F9FA] text-[#1C1D1F] overflow-hidden border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 w-full flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-center w-full flex-1">
              
              {/* Left Column: Strictly 2-Line Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-6 lg:col-span-6 py-8 sm:py-12 lg:py-16 flex flex-col justify-center"
              >
                <h1 className="text-4xl sm:text-5xl md:text-[42px] lg:text-[52px] xl:text-[58px] font-bold text-[#1C1D1F] tracking-tight leading-[1.12] font-serif">
                  <span className="block whitespace-nowrap">Welcome to where</span>
                  <span className="block whitespace-nowrap">possibilities begin</span>
                </h1>
              </motion.div>

              {/* Right Column: Woman Portrait shifted to the left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-6 lg:col-span-6 flex justify-center md:justify-start lg:justify-start items-end self-end h-full"
              >
                <div className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[600px] flex justify-center md:justify-start items-end">
                  <img
                    src="/about-hero-portrait.png"
                    alt="Welcome to where possibilities begin"
                    className="w-full h-auto max-h-[55vh] sm:max-h-[65vh] lg:max-h-[72vh] xl:max-h-[78vh] object-contain object-bottom select-none pointer-events-none"
                    loading="eager"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 2. SECTION 2 (Image on LEFT, Content on RIGHT - Banner Style) */}
        <section className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[560px] flex flex-col justify-center py-14 sm:py-16 lg:py-20 bg-white text-[#1C1D1F] overflow-hidden border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 w-full flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center w-full flex-1">
              
              {/* Left Column: Cutout Portrait Graphic */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-6 lg:col-span-6 flex justify-center md:justify-start lg:justify-start items-center order-2 md:order-1"
              >
                <div className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[600px] flex justify-center md:justify-start items-center">
                  <img
                    src="/4de30422-8e35-441f-bfeb-53ca05cbe598.png"
                    alt="Skills that open doors to what's next"
                    className="w-full h-auto max-h-[44vh] sm:max-h-[50vh] lg:max-h-[58vh] xl:max-h-[64vh] object-contain object-bottom select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Right Column: 2-Line Bold Serif Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-6 lg:col-span-6 py-6 sm:py-10 lg:py-12 flex flex-col justify-center order-1 md:order-2"
              >
                <h2 className="text-4xl sm:text-5xl md:text-[42px] lg:text-[52px] xl:text-[58px] font-bold text-[#1C1D1F] tracking-tight leading-[1.12] font-serif">
                  <span className="block whitespace-nowrap">Skills that open doors</span>
                  <span className="block whitespace-nowrap">to what's next</span>
                </h2>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. SECTION 3 (Content on LEFT, Image on RIGHT - Banner Style) */}
        <section className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[560px] flex flex-col justify-center py-14 sm:py-16 lg:py-20 bg-[#F7F9FA] text-[#1C1D1F] overflow-hidden border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 w-full flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center w-full flex-1">
              
              {/* Left Column: 2-Line Bold Serif Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-6 lg:col-span-6 py-6 sm:py-10 lg:py-12 flex flex-col justify-center"
              >
                <h2 className="text-4xl sm:text-5xl md:text-[42px] lg:text-[52px] xl:text-[58px] font-bold text-[#1C1D1F] tracking-tight leading-[1.12] font-serif">
                  <span className="block whitespace-nowrap">Empowering minds to</span>
                  <span className="block whitespace-nowrap">shape the future</span>
                </h2>
              </motion.div>

              {/* Right Column: Cutout Portrait Graphic with Bottom Breathing Room */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-6 lg:col-span-6 flex justify-center md:justify-start lg:justify-start items-center"
              >
                <div className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[600px] flex justify-center md:justify-start items-center">
                  <img
                    src="/1f57762b-5e16-4f0e-b3a9-259eb78b7f5f.png"
                    alt="Empowering minds to shape the future"
                    className="w-full h-auto max-h-[44vh] sm:max-h-[50vh] lg:max-h-[58vh] xl:max-h-[64vh] object-contain object-bottom select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        
        {/* 4. MISSION & VISION (2 Cards with Center Spacing) */}
        <section className="py-20 lg:py-28 bg-white text-[#09090B] relative">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
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
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.watermark}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    whileHover={{ y: -6, borderColor: "#1D4ED8" }}
                    className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-gray-200 relative overflow-hidden flex flex-col justify-between min-h-[320px] sm:min-h-[350px] lg:min-h-[380px] shadow-sm hover:shadow-2xl group transition-all"
                  >
                    <span className="absolute top-4 right-6 text-7xl lg:text-8xl font-black font-mono text-gray-100 pointer-events-none select-none group-hover:text-blue-50 transition-colors">
                      {card.watermark}
                    </span>
                    <div className="space-y-4 relative z-10">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1D4ED8]">
                        {card.tag}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950 font-serif leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                        {card.desc}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] shadow-sm group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors mt-6">
                      <Icon className="w-6 h-6" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        

        

        {/* 7. MILESTONES TIMELINE */}
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
                  <span className="text-[#1D4ED8] font-mono font-bold text-sm">//</span>
                  <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-gray-500">
                    OUR JOURNEY
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-[1.1]">
                  Milestones That <br />
                  Shaped <span className="text-[#1D4ED8]">Our Path</span>
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
                        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 group-hover:bg-[#1D4ED8] group-hover:text-white flex items-center justify-center text-[#1D4ED8] transition-all shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="space-y-1">
                          <p className="text-sm font-mono font-bold text-[#1D4ED8]">{item.year}</p>
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
                  <span className="text-[#1D4ED8] font-mono font-bold text-sm">//</span>
                  <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-gray-500">
                    OUR LEADERSHIP
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-[1.1]">
                  Meet The Leaders <br />
                  Behind <span className="text-[#1D4ED8]">Our Vision</span>
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
                  <ArrowRight className="w-4 h-4 text-[#1D4ED8] group-hover:translate-x-1 transition-transform" />
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
                  whileHover={{ y: -5, borderColor: "#1D4ED8" }}
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
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1D4ED8] hover:text-white flex items-center justify-center text-gray-600 transition-colors"
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

        {/* 3. 5-COLUMN STATS STRIP WITH ANIMATED COUNTER */}
        <section className="py-14 lg:py-16 bg-gray-50 border-y border-gray-200 text-[#09090B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {[
                { target: 500, suffix: "+", label: "Students", icon: Users },
                { target: 20, suffix: "+", label: "Programs", icon: BookOpen },
                { target: 25, suffix: "+", label: "Expert Faculty", icon: GraduationCap },
                { target: 95, suffix: "%", label: "Student Satisfaction", icon: Award },
                { target: 10, suffix: "+", label: "Years of Excellence", icon: Calendar },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="space-y-2.5 flex flex-col items-center cursor-default group"
                  >
                    <div className="w-11 h-11 rounded-full bg-white border border-gray-200 group-hover:bg-[#1D4ED8] group-hover:border-[#1D4ED8] group-hover:text-white flex items-center justify-center text-[#1D4ED8] transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-3xl sm:text-4xl lg:text-[40px] font-black text-gray-950 font-mono tracking-tight leading-none">
                        <StatCounter target={stat.target} suffix={stat.suffix} />
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1.5">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
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
              className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a]"
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
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-200">
                    Be Part of Our Journey
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                    Your Future <br />
                    Starts <span className="text-[#1D4ED8]">Here.</span>
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
                      className="px-7 py-3 bg-[#1D4ED8] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_4px_20px_rgba(229,9,20,0.5)] transition-all flex items-center gap-2"
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
