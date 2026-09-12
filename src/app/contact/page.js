"use client";

import { useState, useEffect } from "react";
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
  ExternalLink,
  Lock,
} from "lucide-react";
import { instituteInfo } from "@/data/instituteData";
import { useAuth } from "@/context/AuthContext";

export default function ContactPage() {
  const { user, isLoggedIn, openAuthModal } = useAuth();
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

  // Auto-fill user details when logged in
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: prev.name || `${user.firstName} ${user.lastName}`.trim(),
        email: prev.email || user.email || "",
        phone: prev.phone || user.phone || "",
      }));
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      openAuthModal();
      return;
    }
    setIsSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "contact_page" }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Unknown error");
      setIsSent(true);
      setFormData({
        name: user ? `${user.firstName} ${user.lastName}`.trim() : "",
        email: user ? user.email : "",
        phone: user ? user.phone : "",
        subject: "Admissions & Enrollment",
        message: "",
      });
    } catch (err) {
      console.error("Form submit error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#1D4ED8] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => setApplyModalOpen(true)} />

      <main className="flex-1 pt-[145px] md:pt-[190px] sm:pt-[210px] lg:pt-[230px] pb-24">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Col: Contact Info (Equal height to form card) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 h-full flex flex-col"
            >
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 text-gray-900 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-gray-950 mb-8">Campus Information</h3>

                  <div className="space-y-6 text-xs sm:text-sm text-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#1e3a8a] border border-blue-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-950 text-sm sm:text-base">Physical Location</p>
                        <p className="text-gray-600 mt-1 leading-relaxed">{instituteInfo.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#1e3a8a] border border-blue-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-950 text-sm sm:text-base">Admissions Hotline</p>
                        <a href={`tel:${instituteInfo.phone}`} className="text-gray-600 hover:text-[#1e3a8a] mt-1 inline-block font-medium transition-colors">
                          {instituteInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#1e3a8a] border border-blue-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-950 text-sm sm:text-base">Inquiry Email</p>
                        <a href={`mailto:${instituteInfo.email}`} className="text-gray-600 hover:text-[#1e3a8a] mt-1 inline-block font-medium transition-colors">
                          {instituteInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#1e3a8a] border border-blue-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-950 text-sm sm:text-base">Admissions Desk Hours</p>
                        <p className="text-gray-600 mt-1">{instituteInfo.officeHours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Indicator inside Left Card */}
                <div className="pt-6 mt-8 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Campus Open for Admissions &amp; Tours
                  </span>
                  <span className="text-gray-400">Lahore, PK</span>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Interactive Inquiry Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 h-full p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-md flex flex-col justify-between"
            >
              {isSent ? (
                <div className="py-12 my-auto text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-950">Message Transmitted!</h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                    Thank you. An admissions advisor will reply to your provided email within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="px-6 py-2.5 bg-[#1e3a8a] hover:bg-[#152e72] text-white text-xs font-bold rounded-full uppercase transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-5">
                    {!isLoggedIn && (
                      <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <Lock className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
                          <span className="text-xs font-semibold text-[#1e3a8a]">
                            Sign up or log in to submit your inquiry.
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => openAuthModal()}
                          className="px-3.5 py-1.5 bg-[#1e3a8a] text-white text-xs font-bold rounded-xl hover:bg-[#152e72] transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                        >
                          Log In / Sign Up
                        </button>
                      </div>
                    )}
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
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1e3a8a]"
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
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1e3a8a]"
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
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1e3a8a]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Inquiry Topic
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#1e3a8a]"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1e3a8a]"
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSending}
                      className="w-full sm:w-auto px-8 py-4 bg-[#1e3a8a] hover:bg-[#152e72] text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg flex items-center justify-center gap-2 transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSending ? "Transmitting..." : "Send Message to Admissions"}</span>
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          {/* Full Width Google Map Section Below Both Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-12 sm:mt-16"
          >
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white relative">
              <div className="p-5 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-gray-50 via-white to-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-gray-950 text-base sm:text-lg tracking-tight">
                      Campus Location on Google Maps
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {instituteInfo.address}
                    </p>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(instituteInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#1e3a8a] hover:bg-[#152e72] text-white text-xs font-bold transition-colors shadow-sm self-start sm:self-auto"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-[400px] sm:h-[480px] lg:h-[540px] bg-gray-100">
                <iframe
                  title="BlankSlate Campus Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(instituteInfo.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <EditorialFooter />
      <ApplicationModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </div>
  );
}
