"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  GraduationCap,
  BookOpen,
  Laptop,
  CheckCircle2,
  Sparkles,
  Upload,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Building,
  Award,
  Clock,
  Printer,
  Download,
  RotateCcw,
  Share2,
  MessageCircle,
  Check,
  FileText,
  PartyPopper,
  CheckCircle,
} from "lucide-react";

export default function AdmissionsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [validationError, setValidationError] = useState("");

  const initialFormState = {
    // 1. Personal Info
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "male",
    genderOther: "",
    cnic: "",
    city: "Lahore",
    address: "",

    // 2. Academic Info
    highestQualification: "Intermediate / A-Level",
    qualificationOther: "",
    instituteName: "",
    passingYear: "2024",
    fieldOfStudy: "",
    gradeOrGpa: "",

    // 3. Program Selection
    program: "Full Stack Web Development (MERN & Next.js)",
    programOther: "",
    learningMode: "On-Campus (Lahore)",
    learningModeOther: "",
    preferredShift: "Evening (06:00 PM - 09:00 PM)",
    shiftOther: "",
    scholarshipRequested: "No",
    scholarshipOther: "",

    // 4. Experience & Motivation
    codingExperience: "Beginner (Self-Taught / Basic)",
    codingExperienceOther: "",
    statementOfPurpose: "",
    referralSource: "Social Media (Instagram / Facebook)",
    referralSourceOther: "",
    agreedToTerms: false,
    fileName: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const stepsConfig = [
    { id: 1, label: "Personal Info", icon: User },
    { id: 2, label: "Academic Info", icon: BookOpen },
    { id: 3, label: "Program & Track", icon: Laptop },
    { id: 4, label: "Experience & Review", icon: Sparkles },
  ];

  const triggerCelebrationConfetti = () => {
    // 1. Initial Center Burst
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#1D4ED8", "#F59E0B", "#10B981", "#EC4899", "#8B5CF6"],
    });

    // 2. Left and Right Cannons
    const end = Date.now() + 3.5 * 1000;
    const interval = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ["#1D4ED8", "#3B82F6", "#F59E0B", "#10B981", "#E11D48"],
      });
    }, 350);
  };

  useEffect(() => {
    if (isSubmitted) {
      triggerCelebrationConfetti();
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setValidationError("");
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const validateStep = (stepNumber) => {
    if (stepNumber === 1) {
      if (!formData.fullName.trim()) return "Please enter your full name.";
      if (!formData.email.trim() || !formData.email.includes("@"))
        return "Please provide a valid email address.";
      if (!formData.phone.trim()) return "Please enter your phone/WhatsApp number.";
      if (!formData.dob) return "Please select your date of birth.";
      if (!formData.city.trim()) return "Please enter your city of residence.";
    }
    if (stepNumber === 2) {
      if (!formData.instituteName.trim())
        return "Please enter your school / college / university name.";
    }
    if (stepNumber === 3) {
      if (!formData.program) return "Please choose a desired program track.";
    }
    return null;
  };

  const handleNextStep = () => {
    const error = validateStep(currentStep);
    if (error) {
      setValidationError(error);
      return;
    }
    setValidationError("");
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 4));
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  const handlePrevStep = () => {
    setValidationError("");
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  const handleResetForm = () => {
    if (window.confirm("Are you sure you want to reset and clear all form fields?")) {
      setFormData(initialFormState);
      setCurrentStep(1);
      setValidationError("");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShareLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleDownloadProspectus = () => {
    alert("BlankSlate Institute Admissions Prospectus & Syllabus 2026 is downloading...");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      setValidationError("Please accept the terms & conditions to submit your application.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = "BSI-" + Math.floor(100000 + Math.random() * 900000);
      setApplicationId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }, 1200);
  };

  const programsList = [
    "Full Stack Web Development (MERN & Next.js)",
    "Applied AI & Machine Learning Engineering",
    "Python & Data Science Bootcamp",
    "Cloud Computing & DevOps (AWS / Docker / K8s)",
    "AI Agents & Automation Development",
    "Digital Marketing & Growth Strategy",
    "UI/UX Product Design & Prototyping",
    "Cybersecurity & Ethical Hacking",
    "Other Technical / Custom Track",
  ];

  // Slide animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#09090B] selection:bg-[#1D4ED8] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => {}} />

      {/* Main Content Area - Form Centered with Balanced Margins */}
      <main className="flex-1 pt-[180px] sm:pt-[200px] lg:pt-[220px] pb-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          
          {/* Top Title Header */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 space-y-3"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight font-sans">
              Admissions Application <span className="text-[#1D4ED8]">2026</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
              Fill out the 4-step official application form below to apply for upcoming batches. Our admissions committee reviews all submissions within 48 hours.
            </p>
          </motion.div>

          {/* External Utility Action Buttons Toolbar (Outside Form) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3 bg-white border border-gray-200 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-gray-700 px-2">
              <FileText className="w-4 h-4 text-[#1D4ED8]" />
              <span>Form Actions:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Print Button */}
              <button
                type="button"
                onClick={handlePrint}
                className="px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-sans font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                title="Print this application form"
              >
                <Printer className="w-3.5 h-3.5 text-gray-700" />
                <span>Print Form</span>
              </button>

              {/* Download Guide Button */}
              <button
                type="button"
                onClick={handleDownloadProspectus}
                className="px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-sans font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                title="Download admissions prospectus"
              >
                <Download className="w-3.5 h-3.5 text-gray-700" />
                <span>Prospectus</span>
              </button>

              {/* Reset Button */}
              <button
                type="button"
                onClick={handleResetForm}
                className="px-3.5 py-2 bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 text-xs font-sans font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm border border-transparent hover:border-red-200"
                title="Reset all form fields"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              {/* Share / Copy Link */}
              <button
                type="button"
                onClick={handleShareLink}
                className="px-3.5 py-2 bg-gray-100 hover:bg-blue-50 hover:text-[#1D4ED8] text-gray-700 text-xs font-sans font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm border border-transparent hover:border-blue-200"
                title="Share application link"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </>
                )}
              </button>

              {/* WhatsApp Support Desk */}
              <a
                href="https://api.whatsapp.com/send?phone=+92%2035746486463&text=Hello%20BlankSlate%20Institute,%20I%20need%20assistance%20regarding%20Admissions%202026."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-sans font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
                title="Connect with admissions office on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Admissions Help</span>
              </a>
            </div>
          </motion.div>

          {/* Form Container / Multi-Step Card */}
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="admission-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden"
              >
                {/* Header Banner Inside Card */}
                <div className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-300 flex-shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg font-bold font-sans">Student Enrollment Portal</h2>
                      <p className="text-xs text-blue-200 font-sans">Fall 2026 Intake · Step {currentStep} of 4</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold font-sans">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Admissions</span>
                  </div>
                </div>

                {/* Multi-Step Progress Stepper Bar */}
                <div className="px-6 sm:px-10 pt-6 pb-2 border-b border-gray-100 bg-gray-50/70">
                  <div className="grid grid-cols-4 gap-2 sm:gap-4">
                    {stepsConfig.map((step) => {
                      const Icon = step.icon;
                      const isCompleted = currentStep > step.id;
                      const isCurrent = currentStep === step.id;
                      return (
                        <button
                          key={step.id}
                          type="button"
                          onClick={() => {
                            if (step.id < currentStep) {
                              setDirection(-1);
                              setCurrentStep(step.id);
                            }
                          }}
                          disabled={step.id > currentStep}
                          className={`flex flex-col items-center sm:items-start text-left p-2 rounded-xl transition-all ${
                            isCurrent
                              ? "bg-white border border-blue-200 shadow-sm"
                              : isCompleted
                              ? "opacity-90 hover:bg-white/60 cursor-pointer"
                              : "opacity-40 cursor-not-allowed"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-sans transition-all ${
                                isCompleted
                                  ? "bg-emerald-500 text-white"
                                  : isCurrent
                                  ? "bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white"
                                  : "bg-gray-200 text-gray-700"
                              }`}
                            >
                              {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.id}
                            </span>
                            <span className="hidden sm:inline text-xs font-bold text-gray-900 font-sans">
                              {step.label}
                            </span>
                          </div>
                          <div className="w-full mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-300 ${
                                isCompleted || isCurrent ? "bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a]" : "bg-transparent"
                              }`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Validation Error Alert Banner */}
                {validationError && (
                  <div className="mx-6 sm:mx-10 mt-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2 animate-shake">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>{validationError}</span>
                  </div>
                )}

                {/* Form Fields with Animated Step Transition */}
                <form onSubmit={handleSubmit} className="p-6 sm:p-10 lg:p-12 space-y-8 font-sans">
                  
                  <AnimatePresence mode="wait" custom={direction}>
                    {/* STEP 1: PERSONAL DETAILS */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step-1"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                            <User className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-gray-950 font-sans">
                              1. Personal Information
                            </h3>
                            <p className="text-xs text-gray-500 font-sans">
                              Provide your official contact and identification details.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Full Name */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 flex items-center gap-1 font-sans">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="e.g. Muhammad Hamza"
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none font-sans"
                            />
                          </div>

                          {/* Email */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 flex items-center gap-1 font-sans">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="hamza@example.com"
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none font-sans"
                            />
                          </div>

                          {/* Phone / WhatsApp */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 flex items-center gap-1 font-sans">
                              Phone / WhatsApp Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+92 300 1234567"
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none font-sans"
                            />
                          </div>

                          {/* Date of Birth */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 flex items-center gap-1 font-sans">
                              Date of Birth <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="date"
                              name="dob"
                              required
                              value={formData.dob}
                              onChange={handleChange}
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none font-sans"
                            />
                          </div>

                          {/* Gender */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 font-sans">
                              Gender
                            </label>
                            <select
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer font-sans"
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="prefer_not_to_say">Prefer not to say</option>
                              <option value="Other">Other (Please specify)</option>
                            </select>
                            {formData.gender === "Other" && (
                              <input
                                type="text"
                                name="genderOther"
                                value={formData.genderOther}
                                onChange={handleChange}
                                placeholder="Please specify gender"
                                className="w-full mt-2 px-4 py-2.5 text-xs bg-blue-50/40 border border-blue-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] outline-none font-sans"
                              />
                            )}
                          </div>

                          {/* City */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 flex items-center gap-1 font-sans">
                              City of Residence <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              required
                              value={formData.city}
                              onChange={handleChange}
                              placeholder="e.g. Lahore, Karachi, Islamabad"
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none font-sans"
                            />
                          </div>

                          {/* Address (Full Span) */}
                          <div className="sm:col-span-2 space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 font-sans">
                              Residential Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="House / Street / Area address"
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none font-sans"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: ACADEMIC BACKGROUND */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step-2"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-gray-950 font-sans">
                              2. Academic Background
                            </h3>
                            <p className="text-xs text-gray-500 font-sans">
                              Your recent or current educational qualification.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Highest Qualification */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 font-sans">
                              Highest Qualification <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="highestQualification"
                              value={formData.highestQualification}
                              onChange={handleChange}
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer font-sans"
                            >
                              <option value="Matriculation / O-Levels">Matriculation / O-Levels</option>
                              <option value="Intermediate / A-Level">Intermediate / A-Level / FSc / ICS</option>
                              <option value="Bachelor's Degree (Ongoing)">Bachelor&apos;s Degree (Currently Enrolled)</option>
                              <option value="Bachelor's Degree (Completed)">Bachelor&apos;s Degree (Completed)</option>
                              <option value="Master's / Postgrad">Master&apos;s / Postgraduate</option>
                              <option value="Other">Other Qualification (Please specify)</option>
                            </select>
                            {formData.highestQualification === "Other" && (
                              <input
                                type="text"
                                name="qualificationOther"
                                value={formData.qualificationOther}
                                onChange={handleChange}
                                placeholder="Please specify qualification details"
                                className="w-full mt-2 px-4 py-2.5 text-xs bg-blue-50/40 border border-blue-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] outline-none font-sans"
                              />
                            )}
                          </div>

                          {/* Field of Study */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 font-sans">
                              Major / Field of Study
                            </label>
                            <input
                              type="text"
                              name="fieldOfStudy"
                              value={formData.fieldOfStudy}
                              onChange={handleChange}
                              placeholder="e.g. Computer Science, Pre-Engineering, Business, Other"
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none font-sans"
                            />
                          </div>

                          {/* Institute Name */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 flex items-center gap-1 font-sans">
                              School / College / University Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="instituteName"
                              required
                              value={formData.instituteName}
                              onChange={handleChange}
                              placeholder="e.g. Punjab University, FAST, Beaconhouse"
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none font-sans"
                            />
                          </div>

                          {/* Passing Year / Grade */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                              <label className="text-xs font-bold text-gray-800 font-sans">Year</label>
                              <input
                                type="text"
                                name="passingYear"
                                value={formData.passingYear}
                                onChange={handleChange}
                                placeholder="e.g. 2024"
                                className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none font-sans"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-xs font-bold text-gray-800 font-sans">Grade / GPA</label>
                              <input
                                type="text"
                                name="gradeOrGpa"
                                value={formData.gradeOrGpa}
                                onChange={handleChange}
                                placeholder="e.g. 3.4 / A+"
                                className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none font-sans"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: PROGRAM & ENROLLMENT */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step-3"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                            <Laptop className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-gray-950 font-sans">
                              3. Program & Track Selection
                            </h3>
                            <p className="text-xs text-gray-500 font-sans">
                              Choose your targeted career bootcamp and delivery mode.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Desired Program (Full Span) */}
                          <div className="sm:col-span-2 space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 flex items-center gap-1 font-sans">
                              Desired Program Track <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="program"
                              required
                              value={formData.program}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 text-sm bg-blue-50/40 border border-blue-200 text-gray-900 rounded-xl font-semibold focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer font-sans"
                            >
                              {programsList.map((prog) => (
                                <option key={prog} value={prog}>
                                  {prog}
                                </option>
                              ))}
                            </select>
                            {formData.program === "Other Technical / Custom Track" && (
                              <input
                                type="text"
                                name="programOther"
                                value={formData.programOther}
                                onChange={handleChange}
                                placeholder="Please specify your desired customized technical course or track"
                                className="w-full mt-2 px-4 py-2.5 text-xs bg-blue-50/40 border border-blue-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] outline-none font-sans"
                              />
                            )}
                          </div>

                          {/* Learning Mode */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 font-sans">
                              Preferred Learning Mode
                            </label>
                            <select
                              name="learningMode"
                              value={formData.learningMode}
                              onChange={handleChange}
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer font-sans"
                            >
                              <option value="On-Campus (Lahore)">Physical / On-Campus (Lahore Hub)</option>
                              <option value="Online Live Interactive">Online Live Interactive (Zoom & LMS)</option>
                              <option value="Hybrid (Campus Labs + Online)">Hybrid (Campus Labs + Remote)</option>
                              <option value="Other">Other Mode (Please specify)</option>
                            </select>
                            {formData.learningMode === "Other" && (
                              <input
                                type="text"
                                name="learningModeOther"
                                value={formData.learningModeOther}
                                onChange={handleChange}
                                placeholder="Please specify learning mode"
                                className="w-full mt-2 px-4 py-2.5 text-xs bg-blue-50/40 border border-blue-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] outline-none font-sans"
                              />
                            )}
                          </div>

                          {/* Batch Timing */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 font-sans">
                              Preferred Batch Timing
                            </label>
                            <select
                              name="preferredShift"
                              value={formData.preferredShift}
                              onChange={handleChange}
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer font-sans"
                            >
                              <option value="Morning (10:00 AM - 01:00 PM)">Morning Batch (10:00 AM - 01:00 PM)</option>
                              <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon Batch (02:00 PM - 05:00 PM)</option>
                              <option value="Evening (06:00 PM - 09:00 PM)">Evening Batch (06:00 PM - 09:00 PM)</option>
                              <option value="Weekend Intensive (Sat & Sun)">Weekend Intensive (Sat & Sun)</option>
                              <option value="Other">Other Flexible Timings (Please specify)</option>
                            </select>
                            {formData.preferredShift === "Other" && (
                              <input
                                type="text"
                                name="shiftOther"
                                value={formData.shiftOther}
                                onChange={handleChange}
                                placeholder="Please specify preferred schedule or timings"
                                className="w-full mt-2 px-4 py-2.5 text-xs bg-blue-50/40 border border-blue-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] outline-none font-sans"
                              />
                            )}
                          </div>

                          {/* Scholarship Checkbox / Choice */}
                          <div className="sm:col-span-2 space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 flex items-center gap-1 font-sans">
                              Are you applying for Merit / Need-Based Financial Aid (Up to 40%)?
                            </label>
                            <select
                              name="scholarshipRequested"
                              value={formData.scholarshipRequested}
                              onChange={handleChange}
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer font-sans"
                            >
                              <option value="No">No, applying under standard tuition</option>
                              <option value="Yes - Merit Based">Yes, applying for Merit-Based Scholarship</option>
                              <option value="Yes - Need Based">Yes, applying for Need-Based Financial Aid</option>
                              <option value="Yes - Female in Tech Grant">Yes, applying for Women-In-Tech Grant</option>
                              <option value="Other">Other Financial Aid / Custom Request (Please specify)</option>
                            </select>
                            {formData.scholarshipRequested === "Other" && (
                              <input
                                type="text"
                                name="scholarshipOther"
                                value={formData.scholarshipOther}
                                onChange={handleChange}
                                placeholder="Please describe your financial aid or special scholarship circumstance"
                                className="w-full mt-2 px-4 py-2.5 text-xs bg-blue-50/40 border border-blue-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] outline-none font-sans"
                              />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 4: MOTIVATION & REVIEW */}
                    {currentStep === 4 && (
                      <motion.div
                        key="step-4"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-gray-950 font-sans">
                              4. Experience & Motivation
                            </h3>
                            <p className="text-xs text-gray-500 font-sans">
                              Help us assess your starting point and review application.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-5">
                          {/* Prior Experience */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 font-sans">
                              Prior Programming / Tech Experience
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                              {[
                                { val: "Total Beginner", label: "Zero Prior Coding", desc: "Starting completely fresh" },
                                { val: "Beginner / Self-Taught", label: "Basic Knowledge", desc: "HTML/CSS or basic tutorials" },
                                { val: "Intermediate / Pro", label: "Experienced", desc: "Building projects / CS student" },
                                { val: "Other", label: "Other Background", desc: "Self-specify details" },
                              ].map((item) => (
                                <label
                                  key={item.val}
                                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between font-sans ${
                                    formData.codingExperience === item.val
                                      ? "border-[#1D4ED8] bg-blue-50/50 ring-1 ring-[#1D4ED8]"
                                      : "border-gray-200 hover:border-gray-300 bg-white"
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-gray-900 font-sans">{item.label}</span>
                                    <input
                                      type="radio"
                                      name="codingExperience"
                                      value={item.val}
                                      checked={formData.codingExperience === item.val}
                                      onChange={handleChange}
                                      className="text-[#1D4ED8]"
                                    />
                                  </div>
                                  <span className="text-[11px] text-gray-500 mt-1 font-sans">{item.desc}</span>
                                </label>
                              ))}
                            </div>
                            {formData.codingExperience === "Other" && (
                              <input
                                type="text"
                                name="codingExperienceOther"
                                value={formData.codingExperienceOther}
                                onChange={handleChange}
                                placeholder="Please describe your background or experience level"
                                className="w-full mt-2 px-4 py-2.5 text-xs bg-blue-50/40 border border-blue-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] outline-none font-sans"
                              />
                            )}
                          </div>

                          {/* Statement of Purpose */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 font-sans">
                              Why do you want to join BlankSlate Institute? (Short Statement)
                            </label>
                            <textarea
                              rows={3}
                              name="statementOfPurpose"
                              value={formData.statementOfPurpose}
                              onChange={handleChange}
                              placeholder="Tell us about your career ambition, goals, or what inspired you to apply..."
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none resize-none font-sans"
                            />
                          </div>

                          {/* File / CV Upload Area */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 font-sans">
                              Attach Transcript / CV (Optional)
                            </label>
                            <div className="border-2 border-dashed border-gray-200 hover:border-[#1D4ED8] rounded-2xl p-6 text-center bg-gray-50/50 hover:bg-blue-50/30 transition-all relative font-sans">
                              <input
                                type="file"
                                onChange={handleFileUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept=".pdf,.doc,.docx,.png,.jpg"
                              />
                              <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                              <p className="text-xs font-bold text-gray-800 font-sans">
                                {formData.fileName ? formData.fileName : "Click or drag & drop file here"}
                              </p>
                              <p className="text-[11px] text-gray-400 mt-1 font-sans">PDF, DOCX, or PNG up to 10MB</p>
                            </div>
                          </div>

                          {/* How did you hear about us */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-800 font-sans">
                              How did you hear about us?
                            </label>
                            <select
                              name="referralSource"
                              value={formData.referralSource}
                              onChange={handleChange}
                              className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer font-sans"
                            >
                              <option value="Social Media (Instagram / Facebook / LinkedIn)">Social Media (Instagram / Facebook / LinkedIn)</option>
                              <option value="Google Search">Google Search</option>
                              <option value="Friend or Alumni Recommendation">Friend or Alumni Recommendation</option>
                              <option value="University / Campus Event">University / Campus Event</option>
                              <option value="Other">Other Source (Please specify)</option>
                            </select>
                            {formData.referralSource === "Other" && (
                              <input
                                type="text"
                                name="referralSourceOther"
                                value={formData.referralSourceOther}
                                onChange={handleChange}
                                placeholder="Please specify how you heard about us"
                                className="w-full mt-2 px-4 py-2.5 text-xs bg-blue-50/40 border border-blue-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] outline-none font-sans"
                              />
                            )}
                          </div>

                          {/* Terms Checkbox */}
                          <div className="pt-3 border-t border-gray-200">
                            <label className="flex items-start gap-3 cursor-pointer select-none font-sans">
                              <input
                                type="checkbox"
                                name="agreedToTerms"
                                checked={formData.agreedToTerms}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 text-[#1D4ED8] rounded border-gray-300 focus:ring-[#1D4ED8]"
                              />
                              <span className="text-xs text-gray-600 leading-relaxed font-sans">
                                I certify that all information provided in this admission application is true and correct to the best of my knowledge. I agree to abide by the academic integrity and institute enrollment policies of BlankSlate Institute.
                              </span>
                            </label>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Step Navigation Controls (Back & Next Buttons) */}
                  <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Back Button */}
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="w-full sm:w-auto px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer font-sans"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous Step</span>
                      </button>
                    ) : (
                      <div className="hidden sm:block" />
                    )}

                    {/* Next / Submit Button */}
                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] hover:opacity-90 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer font-sans ml-auto"
                      >
                        <span>Next: {stepsConfig[currentStep].label}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-bold rounded-2xl shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-3 transition-all disabled:opacity-70 cursor-pointer font-sans ml-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span className="font-sans">Submitting Application...</span>
                          </>
                        ) : (
                          <>
                            <PartyPopper className="w-5 h-5" />
                            <span className="font-sans">Submit Official Application</span>
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 pt-2 font-sans">
                    <span className="flex items-center gap-1.5 font-sans">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Free Application
                    </span>
                    <span className="flex items-center gap-1.5 font-sans">
                      <Clock className="w-4 h-4 text-[#1D4ED8]" /> Decision within 48 Hours
                    </span>
                    <span className="flex items-center gap-1.5 font-sans">
                      <Award className="w-4 h-4 text-amber-500" /> Merit Aid Available
                    </span>
                  </div>

                </form>
              </motion.div>
            ) : (
              /* CELEBRATORY BIRTHDAY-STYLE "THANK YOU" CONFIRMATION SCREEN */
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 sm:p-14 text-center space-y-8 relative overflow-hidden"
              >
                {/* Decorative Festive Ambient Gradient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-blue-100/60 via-amber-100/30 to-transparent pointer-events-none" />

                {/* Festive Party Icon with Pulse Glow */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                  className="relative mx-auto w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#1D4ED8] via-blue-600 to-amber-400 text-white flex items-center justify-center shadow-xl shadow-blue-500/30"
                >
                  <PartyPopper className="w-12 h-12 animate-bounce" />
                </motion.div>

                {/* Main "Thank You" Headline with Festive Styling */}
                <div className="space-y-3 max-w-xl mx-auto relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider font-sans shadow-sm">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Application Submitted Successfully</span>
                  </div>

                  <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-950 font-sans">
                    Thank <span className="text-[#1D4ED8]">You!</span> 🎉
                  </h2>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans pt-1">
                    Congratulations, <strong className="text-gray-950 font-bold">{formData.fullName}</strong>! Your official admission application has been registered for{" "}
                    <strong className="text-[#1D4ED8] font-bold">{formData.program}</strong>.
                  </p>
                </div>

                {/* Application Details Summary Card */}
                <div className="max-w-lg mx-auto p-6 rounded-2xl bg-gray-50 border border-gray-200 text-left space-y-3 text-xs sm:text-sm font-sans shadow-sm">
                  <div className="flex justify-between py-1.5 border-b border-gray-200">
                    <span className="text-gray-500">Application Tracking ID:</span>
                    <span className="font-mono font-black text-[#1D4ED8] text-base">{applicationId}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-200">
                    <span className="text-gray-500">Applicant Email:</span>
                    <span className="font-bold text-gray-900">{formData.email}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-200">
                    <span className="text-gray-500">Contact / WhatsApp:</span>
                    <span className="font-bold text-gray-900">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-200">
                    <span className="text-gray-500">Mode & Schedule:</span>
                    <span className="font-semibold text-gray-900">{formData.learningMode}</span>
                  </div>
                  <div className="flex justify-between py-1.5 items-center">
                    <span className="text-gray-500">Application Status:</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Ready for Academic Assessment</span>
                    </span>
                  </div>
                </div>

                {/* What Happens Next Roadmap Card */}
                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 text-xs sm:text-sm text-blue-950 max-w-lg mx-auto leading-relaxed text-left space-y-2 font-sans">
                  <div className="flex items-center gap-2 font-bold text-blue-900 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#1D4ED8]" />
                    <span>What Happens Next?</span>
                  </div>
                  <p className="text-xs text-blue-900/80 leading-relaxed pl-6">
                    Our admissions committee will reach out to you via WhatsApp and Email at <strong>{formData.phone}</strong> within 24–48 hours to schedule your technical readiness discussion and send your enrollment offer letter.
                  </p>
                </div>

                {/* Action Controls */}
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-sans">
                  <button
                    onClick={triggerCelebrationConfetti}
                    className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-bold rounded-full transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <PartyPopper className="w-4 h-4" />
                    <span>Celebrate Again!</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-full transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Confirmation</span>
                  </button>

                  <Link
                    href="/"
                    className="px-8 py-3.5 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] hover:opacity-90 text-white text-xs font-bold rounded-full transition-all shadow-md"
                  >
                    Return to Home
                  </Link>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData(initialFormState);
                      setCurrentStep(1);
                    }}
                    className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-full transition-all cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>

      <EditorialFooter />
    </div>
  );
}
