"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import CampusExperience from "@/components/CampusExperience";
import { Sparkles, Cpu, Rocket, Code2, Globe } from "lucide-react";

const clubs = [
  {
    name: "Autonomous AI & Robotics Guild",
    desc: "Weekly research reading groups, fine-tuning sprints on open-source weights, and robotics hardware labs.",
    icon: Cpu,
    members: "120+ Builders",
  },
  {
    name: "Full Stack Open Source Collective",
    desc: "Contributing pull requests to upstream libraries like Next.js, Prisma, Tailwind, and building community dev tools.",
    icon: Code2,
    members: "180+ Builders",
  },
  {
    name: "Product Design & Critique Studio",
    desc: "Live design critiques, Figma plugin development, and heuristic evaluations for early-stage founder prototypes.",
    icon: Rocket,
    members: "95+ Designers",
  },
  {
    name: "Founder & Venture Pitch Society",
    desc: "Mock investor pitch defense, cap table simulations, and founder-in-residence fireside chats.",
    icon: Globe,
    members: "85+ Founders",
  },
];

export default function CampusLifePage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#1D4ED8] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => setApplyModalOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1D4ED8]/10 border border-[#1D4ED8]/30 text-[#1D4ED8] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> CAMPUS CULTURE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-gray-950">
              Life Inside the <br />
              <span className="text-[#1D4ED8]">Innovation District</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
              Discover student tech societies, 48-hour hackathons, prototyping maker spaces, and collaborative work lounges.
            </p>
          </motion.div>

          {/* Student Societies Grid */}
          <div className="space-y-8 mb-20">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">
                STUDENT ORGANIZATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950">Technical Clubs & Guilds</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clubs.map((club, idx) => {
                const Icon = club.icon;
                return (
                  <motion.div
                    key={club.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -5, borderColor: "#1D4ED8" }}
                    className="p-8 rounded-3xl bg-white border border-gray-200 space-y-4 shadow-sm hover:shadow-xl transition-all cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gray-100 border border-gray-200 text-[#1D4ED8] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#1D4ED8]">{club.members}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-950">{club.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{club.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Masonry Campus Experience Gallery */}
        <CampusExperience />
      </main>

      <EditorialFooter />
      <ApplicationModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </div>
  );
}
