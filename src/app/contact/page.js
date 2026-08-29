"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { instituteInfo } from "@/data/instituteData";

export default function ContactPage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Admissions & Enrollment",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSending(false);
    setIsSent(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Admissions & Enrollment",
      message: "",
    });
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
              <Sparkles className="w-3.5 h-3.5" /> REACH OUT
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-gray-950">
              Let&apos;s Start a <br />
              <span className="text-[#1D4ED8]">Conversation</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
              Have questions about program prerequisites, admission timelines, or campus tours? Our team is available 5 days a week.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Col: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 text-gray-900 space-y-6 shadow-md">
                <h3 className="text-2xl font-black text-gray-950">Campus Information</h3>

                <div className="space-y-5 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 text-[#1D4ED8] border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Physical Location</p>
                      <p className="text-gray-500 mt-0.5">{instituteInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 text-[#1D4ED8] border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Admissions Hotline</p>
                      <p className="text-gray-500 mt-0.5">{instituteInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 text-[#1D4ED8] border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Inquiry Email</p>
                      <p className="text-gray-500 mt-0.5">{instituteInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 text-[#1D4ED8] border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Admissions Desk Hours</p>
                      <p className="text-gray-500 mt-0.5">{instituteInfo.officeHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map container */}
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-md h-56 bg-gray-100 relative">
                <iframe
                  title="BlankSlate Campus Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153163!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f913d0!2sInnovation%20Hub!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            {/* Right Col: Interactive Inquiry Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-md"
            >
              {isSent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-950">Message Transmitted!</h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                    Thank you. An admissions advisor will reply to your provided email within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="px-6 py-2.5 bg-[#1D4ED8] text-white text-xs font-bold rounded-full uppercase"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rayyan Ansari"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#1D4ED8]"
                      >
                        <option value="Admissions & Enrollment">Admissions & Enrollment</option>
                        <option value="Curriculum & Prerequisites">Curriculum & Prerequisites</option>
                        <option value="Campus Visit & Tours">Campus Visit & Tours</option>
                        <option value="Scholarship Inquiries">Scholarship Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can our admissions and advisory team help you?"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8]"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto px-8 py-4 bg-[#1D4ED8] hover:bg-[#B91C1C] text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSending ? "Transmitting..." : "Send Message to Admissions"}</span>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <EditorialFooter />
      <ApplicationModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </div>
  );
}
