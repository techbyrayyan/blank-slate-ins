"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import { Sparkles, Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { upcomingEvents } from "@/data/instituteData";

export default function EventsPage() {
  const [registeredEvent, setRegisteredEvent] = useState(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const handleRegister = (title) => {
    setRegisteredEvent(title);
    setTimeout(() => setRegisteredEvent(null), 4000);
  };

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
              <Sparkles className="w-3.5 h-3.5" /> EVENTS & SUMMITS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-gray-950">
              Technical Summits <br />
              <span className="text-[#1D4ED8]">& Masterclasses</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
              Join leading tech founders, AI researchers, and software engineers for hands-on workshops, demo day pitch sessions, and hiring expos.
            </p>
          </motion.div>

          {registeredEvent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 mb-8 bg-emerald-50 border border-emerald-500 text-emerald-800 rounded-2xl flex items-center gap-3 text-xs font-bold"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>You have successfully registered for &ldquo;{registeredEvent}&rdquo;. Confirmation sent to your email!</span>
            </motion.div>
          )}

          {/* Events List */}
          <div className="space-y-8">
            {upcomingEvents.map((evt, idx) => (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, borderColor: "#1D4ED8" }}
                data-cursor="view"
                className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm hover:shadow-xl group"
              >
                {/* Date Col */}
                <div className="lg:col-span-2 flex items-baseline gap-2 lg:flex-col lg:items-start">
                  <span className="text-5xl sm:text-6xl font-mono font-black text-[#1D4ED8] leading-none">
                    {evt.day}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase text-gray-500">
                    {evt.month} / 2026
                  </span>
                </div>

                {/* Details Col */}
                <div className="lg:col-span-7 space-y-3">
                  <span className="px-2.5 py-0.5 rounded bg-gray-100 border border-gray-200 text-[#1D4ED8] text-[10px] font-mono font-bold uppercase">
                    {evt.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight group-hover:text-[#1D4ED8] transition-colors">
                    {evt.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {evt.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" /> {evt.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#1D4ED8]" /> {evt.location}
                    </span>
                  </div>
                </div>

                {/* Register Button */}
                <div className="lg:col-span-3 flex justify-start lg:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRegister(evt.title)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#1D4ED8] hover:bg-[#B91C1C] text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <EditorialFooter />
      <ApplicationModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </div>
  );
}
