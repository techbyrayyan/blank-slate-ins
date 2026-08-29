"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { coursesData } from "@/data/instituteData";

export default function ApplicationModal({ isOpen, onClose, preselectedCourse = "" }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appId, setAppId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: preselectedCourse || "Full Stack Development",
    educationLevel: "Bachelor's Degree",
    mode: "On Campus",
    message: "",
  });

  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({ ...prev, course: preselectedCourse }));
    }
  }, [preselectedCourse]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      if (isSubmitted) {
        setTimeout(() => {
          setIsSubmitted(false);
          setStep(1);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            course: "Full Stack Development",
            educationLevel: "Bachelor's Degree",
            mode: "On Campus",
            message: "",
          });
        }, 300);
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isSubmitted]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg("");
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
        setErrorMsg("Please provide your Full Name, Email, and Phone number.");
        return;
      }
      if (!formData.email.includes("@")) {
        setErrorMsg("Please enter a valid email address.");
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      try {
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#1D4ED8", "#B91C1C", "#FFFFFF", "#FF3355"],
        });
      } catch (err) {}

      setAppId(`BSI-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    } catch (err) {
      setErrorMsg("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-[#0D0D12] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#08080B]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse"></span>
              <div>
                <h3 className="text-base font-bold text-white">Online Application Terminal</h3>
                <p className="text-[10px] text-gray-400">BlankSlate Institute — Academic Year 2026</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-5"
              >
                <div className="w-16 h-16 bg-[#1D4ED8]/20 text-[#1D4ED8] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#1D4ED8]/10">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white">Application Submitted!</h4>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto mt-2">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your application for{" "}
                    <span className="font-bold text-[#1D4ED8]">{formData.course}</span> has been confirmed.
                  </p>
                </div>

                <div className="inline-block bg-white/5 border border-white/10 rounded-2xl px-6 py-3 text-center">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Tracking Reference</p>
                  <p className="text-xl font-mono font-black text-white mt-0.5">{appId}</p>
                </div>

                <div className="pt-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#1D4ED8] hover:bg-[#B91C1C] text-white font-bold rounded-xl text-xs uppercase tracking-wider"
                  >
                    Return to Website
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Progress Steps */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className={`font-bold ${step >= 1 ? "text-[#1D4ED8]" : "text-gray-500"}`}>1. Personal Info</span>
                  <span className="text-gray-600">→</span>
                  <span className={`font-bold ${step >= 2 ? "text-[#1D4ED8]" : "text-gray-500"}`}>2. Course Track</span>
                  <span className="text-gray-600">→</span>
                  <span className={`font-bold ${step >= 3 ? "text-[#1D4ED8]" : "text-gray-500"}`}>3. Confirmation</span>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-950/40 border border-red-800/60 rounded-xl flex items-center gap-2 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rayyan Ansari"
                        className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@domain.com"
                          className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#1D4ED8]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#1D4ED8]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Select Desired Course *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#14141B] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#1D4ED8]"
                      >
                        {coursesData.map((c) => (
                          <option key={c.slug || c.id} value={c.title}>
                            {c.title} ({c.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                          Education Background
                        </label>
                        <select
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-[#14141B] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#1D4ED8]"
                        >
                          <option value="High School">High School / Intermediate</option>
                          <option value="Associate Degree">Associate Degree</option>
                          <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                          <option value="Master's / Ph.D.">Master&apos;s / Ph.D.</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                          Learning Mode
                        </label>
                        <select
                          name="mode"
                          value={formData.mode}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-[#14141B] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#1D4ED8]"
                        >
                          <option value="On Campus">On Campus (Interactive Labs)</option>
                          <option value="Online Live">Online Live</option>
                          <option value="Hybrid">Hybrid</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Career Goals (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows="2"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What would you like to build at BlankSlate?"
                        className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#1D4ED8]"
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-3.5">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2 text-xs">
                      <p className="font-bold text-gray-300 uppercase tracking-wider text-[10px]">Review Details</p>
                      <div className="grid grid-cols-2 gap-2 text-gray-300">
                        <div>Name: <span className="font-bold text-white">{formData.fullName}</span></div>
                        <div>Email: <span className="font-bold text-white">{formData.email}</span></div>
                        <div>Course: <span className="font-bold text-[#1D4ED8]">{formData.course}</span></div>
                        <div>Mode: <span className="font-bold text-white">{formData.mode}</span></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep((prev) => prev - 1)}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold rounded-xl text-gray-300"
                    >
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-2 text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#B91C1C] rounded-xl flex items-center gap-1.5 uppercase"
                    >
                      Next Step <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#1D4ED8] hover:bg-[#B91C1C] rounded-xl shadow-lg flex items-center gap-2 uppercase tracking-wider"
                    >
                      {isSubmitting ? "Submitting..." : "Confirm & Submit Application"}
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
