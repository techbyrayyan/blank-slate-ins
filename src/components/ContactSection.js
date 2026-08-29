"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { instituteInfo } from "@/data/instituteData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

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
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <section className="py-24 bg-white relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#1D4ED8]">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-base text-[#6B7280]">
            Have questions about admissions, curriculum, scholarships, or enterprise partnerships? Our advisors are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Col: Contact Information & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B0B0C] text-white p-8 rounded-3xl space-y-6 shadow-xl border border-white/10">
              <h3 className="text-xl font-bold text-white">Campus Information</h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Campus Location</p>
                    <p className="text-gray-400 mt-0.5">{instituteInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Direct Phone Lines</p>
                    <p className="text-gray-400 mt-0.5">Admissions: {instituteInfo.admissionsPhone}</p>
                    <p className="text-gray-400">General: {instituteInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Official Inquiries</p>
                    <p className="text-gray-400 mt-0.5">{instituteInfo.email}</p>
                    <p className="text-gray-400">{instituteInfo.supportEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Office Hours</p>
                    <p className="text-gray-400 mt-0.5">{instituteInfo.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Live Map Simulation */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm relative h-48 bg-gray-100">
              <iframe
                title="BlankSlate Institute Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153163!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f913d0!2sInnovation%20Hub!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Col: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-gray-50/70 border border-gray-200/80 p-8 sm:p-10 rounded-3xl shadow-sm">
            {isSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-[#0B0B0C]">Message Received!</h4>
                <p className="text-sm text-[#6B7280] max-w-md mx-auto">
                  Thank you for reaching out to BlankSlate Institute. An admissions advisor will respond within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2.5 bg-[#0B0B0C] text-white text-xs font-bold rounded-xl hover:bg-[#1F2328]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rayyan Ansari"
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Subject / Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] transition-all"
                    >
                      <option value="Admissions Inquiry">Admissions Inquiry</option>
                      <option value="Scholarship & Financial Aid">Scholarship & Financial Aid</option>
                      <option value="Campus Tour Booking">Campus Tour Booking</option>
                      <option value="Hiring / Corporate Partnership">Hiring / Corporate Partnership</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our admissions and advisory team help you?"
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1D4ED8] hover:bg-[#B80710] text-white font-bold rounded-xl text-sm shadow-md glow-red transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? "Sending Message..." : "Send Message to Admissions"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
