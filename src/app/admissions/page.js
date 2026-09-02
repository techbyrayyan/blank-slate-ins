"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  ShieldCheck,
  Building,
  Award,
  Clock,
  HelpCircle,
} from "lucide-react";

export default function AdmissionsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const [formData, setFormData] = useState({
    // 1. Personal Info
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "male",
    cnic: "",
    city: "Lahore",
    address: "",

    // 2. Academic Info
    highestQualification: "Intermediate / A-Level",
    instituteName: "",
    passingYear: "2024",
    fieldOfStudy: "",
    gradeOrGpa: "",

    // 3. Program Selection
    program: "Full Stack Web Development (MERN & Next.js)",
    learningMode: "On-Campus (Lahore)",
    preferredShift: "Evening (06:00 PM - 09:00 PM)",
    scholarshipRequested: "No",
    scholarshipReason: "",

    // 4. Experience & Motivation
    codingExperience: "Beginner (Self-Taught / Basic)",
    statementOfPurpose: "",
    referralSource: "Social Media (Instagram / Facebook)",
    agreedToTerms: false,
    fileName: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert("Please accept the terms & conditions to proceed.");
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
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#09090B] selection:bg-[#1D4ED8] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => {}} />

      {/* Main Content Area - Form Centered with Balanced Margins */}
      <main className="flex-1 pt-[180px] sm:pt-[200px] lg:pt-[220px] pb-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          
          {/* Top Breadcrumb & Title Header */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 space-y-3"
          >
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-gray-500 bg-white border border-gray-200 px-4 py-1.5 rounded-full shadow-sm">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-[#1D4ED8] font-bold">Online Admission Application</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight font-serif">
              Admissions Application <span className="text-[#1D4ED8]">2026</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fill out the official application form below to apply for upcoming batches. Our admissions committee reviews all submissions within 48 hours.
            </p>
          </motion.div>

          {/* Form Container / Card */}
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
                      <h2 className="text-base sm:text-lg font-bold">Student Enrollment Portal</h2>
                      <p className="text-xs text-blue-200">Fall 2026 Intake · Regular & Scholarship Seats Open</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Admissions</span>
                  </div>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="p-6 sm:p-10 lg:p-12 space-y-12">
                  
                  {/* CATEGORY 1: PERSONAL DETAILS */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-950">1. Personal Information</h3>
                        <p className="text-xs text-gray-500">Provide your official contact and identification details.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800 flex items-center gap-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Muhammad Hamza"
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800 flex items-center gap-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="hamza@example.com"
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none"
                        />
                      </div>

                      {/* Phone / WhatsApp */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800 flex items-center gap-1">
                          Phone / WhatsApp Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 300 1234567"
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none"
                        />
                      </div>

                      {/* Date of Birth */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800 flex items-center gap-1">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          name="dob"
                          required
                          value={formData.dob}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none"
                        />
                      </div>

                      {/* Gender */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800">
                          Gender
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Prefer not to say</option>
                        </select>
                      </div>

                      {/* City */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800 flex items-center gap-1">
                          City of Residence <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Lahore, Karachi, Islamabad"
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none"
                        />
                      </div>

                      {/* Address (Full Span) */}
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-xs font-bold text-gray-800">
                          Residential Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="House / Street / Area address"
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>


                  {/* CATEGORY 2: ACADEMIC QUALIFICATIONS */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-950">2. Academic Background</h3>
                        <p className="text-xs text-gray-500">Your recent or current educational qualification.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Highest Qualification */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800">
                          Highest Qualification <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="highestQualification"
                          value={formData.highestQualification}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer"
                        >
                          <option value="Matriculation / O-Levels">Matriculation / O-Levels</option>
                          <option value="Intermediate / A-Level">Intermediate / A-Level / FSc / ICS</option>
                          <option value="Bachelor's Degree (Ongoing)">Bachelor&apos;s Degree (Currently Enrolled)</option>
                          <option value="Bachelor's Degree (Completed)">Bachelor&apos;s Degree (Completed)</option>
                          <option value="Master's / Postgrad">Master&apos;s / Postgraduate</option>
                          <option value="Self-Taught / Other">Self-Taught / Working Professional</option>
                        </select>
                      </div>

                      {/* Field of Study */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800">
                          Major / Field of Study
                        </label>
                        <input
                          type="text"
                          name="fieldOfStudy"
                          value={formData.fieldOfStudy}
                          onChange={handleChange}
                          placeholder="e.g. Computer Science, Pre-Engineering, Business"
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none"
                        />
                      </div>

                      {/* Institute Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800 flex items-center gap-1">
                          School / College / University Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="instituteName"
                          required
                          value={formData.instituteName}
                          onChange={handleChange}
                          placeholder="e.g. Punjab University, FAST, Beaconhouse"
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none"
                        />
                      </div>

                      {/* Passing Year / Grade */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-gray-800">Year</label>
                          <input
                            type="text"
                            name="passingYear"
                            value={formData.passingYear}
                            onChange={handleChange}
                            placeholder="e.g. 2024"
                            className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-gray-800">Grade / GPA</label>
                          <input
                            type="text"
                            name="gradeOrGpa"
                            value={formData.gradeOrGpa}
                            onChange={handleChange}
                            placeholder="e.g. 3.4 / A+"
                            className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* CATEGORY 3: PROGRAM & ENROLLMENT PREFERENCES */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                        <Laptop className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-950">3. Program & Track Selection</h3>
                        <p className="text-xs text-gray-500">Choose your targeted career bootcamp and delivery mode.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Desired Program (Full Span) */}
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-xs font-bold text-gray-800 flex items-center gap-1">
                          Desired Program Track <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="program"
                          required
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 text-sm bg-blue-50/40 border border-blue-200 text-gray-900 rounded-xl font-semibold focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer"
                        >
                          {programsList.map((prog) => (
                            <option key={prog} value={prog}>
                              {prog}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Learning Mode */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800">
                          Preferred Learning Mode
                        </label>
                        <select
                          name="learningMode"
                          value={formData.learningMode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer"
                        >
                          <option value="On-Campus (Lahore)">Physical / On-Campus (Lahore Hub)</option>
                          <option value="Online Live Interactive">Online Live Interactive (Zoom & LMS)</option>
                          <option value="Hybrid (Campus Labs + Online)">Hybrid (Campus Labs + Remote)</option>
                        </select>
                      </div>

                      {/* Batch Timing */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800">
                          Preferred Batch Timing
                        </label>
                        <select
                          name="preferredShift"
                          value={formData.preferredShift}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer"
                        >
                          <option value="Morning (10:00 AM - 01:00 PM)">Morning Batch (10:00 AM - 01:00 PM)</option>
                          <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon Batch (02:00 PM - 05:00 PM)</option>
                          <option value="Evening (06:00 PM - 09:00 PM)">Evening Batch (06:00 PM - 09:00 PM)</option>
                          <option value="Weekend Intensive (Sat & Sun)">Weekend Intensive (Sat & Sun)</option>
                        </select>
                      </div>

                      {/* Scholarship Checkbox / Choice */}
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-xs font-bold text-gray-800 flex items-center gap-1">
                          Are you applying for Merit / Need-Based Financial Aid (Up to 40%)?
                        </label>
                        <select
                          name="scholarshipRequested"
                          value={formData.scholarshipRequested}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer"
                        >
                          <option value="No">No, applying under standard tuition</option>
                          <option value="Yes - Merit Based">Yes, applying for Merit-Based Scholarship</option>
                          <option value="Yes - Need Based">Yes, applying for Need-Based Financial Aid</option>
                          <option value="Yes - Female in Tech Grant">Yes, applying for Women-In-Tech Grant</option>
                        </select>
                      </div>
                    </div>
                  </div>


                  {/* CATEGORY 4: TECHNICAL BACKGROUND & STATEMENT */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-950">4. Experience & Motivation</h3>
                        <p className="text-xs text-gray-500">Help us assess your starting point and learning goals.</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      {/* Prior Experience */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800">
                          Prior Programming / Tech Experience
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            { val: "Total Beginner", label: "Zero Prior Coding", desc: "Starting completely fresh" },
                            { val: "Beginner / Self-Taught", label: "Basic Knowledge", desc: "HTML/CSS or basic tutorials" },
                            { val: "Intermediate / Pro", label: "Experienced", desc: "Building small projects / CS background" },
                          ].map((item) => (
                            <label
                              key={item.val}
                              className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                                formData.codingExperience === item.val
                                  ? "border-[#1D4ED8] bg-blue-50/50 ring-1 ring-[#1D4ED8]"
                                  : "border-gray-200 hover:border-gray-300 bg-white"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-gray-900">{item.label}</span>
                                <input
                                  type="radio"
                                  name="codingExperience"
                                  value={item.val}
                                  checked={formData.codingExperience === item.val}
                                  onChange={handleChange}
                                  className="text-[#1D4ED8]"
                                />
                              </div>
                              <span className="text-[11px] text-gray-500 mt-1">{item.desc}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Statement of Purpose */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800">
                          Why do you want to join BlankSlate Institute? (Short Statement)
                        </label>
                        <textarea
                          rows={3}
                          name="statementOfPurpose"
                          value={formData.statementOfPurpose}
                          onChange={handleChange}
                          placeholder="Tell us about your career ambition, goals, or what inspired you to apply..."
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none resize-none"
                        />
                      </div>

                      {/* File / CV Upload Area */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800">
                          Attach Transcript / CV (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-200 hover:border-[#1D4ED8] rounded-2xl p-6 text-center bg-gray-50/50 hover:bg-blue-50/30 transition-all relative">
                          <input
                            type="file"
                            onChange={handleFileUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept=".pdf,.doc,.docx,.png,.jpg"
                          />
                          <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                          <p className="text-xs font-bold text-gray-800">
                            {formData.fileName ? formData.fileName : "Click or drag & drop file here"}
                          </p>
                          <p className="text-[11px] text-gray-400 mt-1">PDF, DOCX, or PNG up to 10MB</p>
                        </div>
                      </div>

                      {/* How did you hear about us */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-800">
                          How did you hear about us?
                        </label>
                        <select
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all outline-none cursor-pointer"
                        >
                          <option value="Social Media (Instagram / Facebook / LinkedIn)">Social Media (Instagram / Facebook / LinkedIn)</option>
                          <option value="Google Search">Google Search</option>
                          <option value="Friend or Alumni Recommendation">Friend or Alumni Recommendation</option>
                          <option value="University / Campus Event">University / Campus Event</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>


                  {/* CATEGORY 5: TERMS & SUBMIT */}
                  <div className="space-y-6 pt-4 border-t border-gray-200">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="agreedToTerms"
                        checked={formData.agreedToTerms}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-[#1D4ED8] rounded border-gray-300 focus:ring-[#1D4ED8]"
                      />
                      <span className="text-xs text-gray-600 leading-relaxed">
                        I certify that all information provided in this admission application is true and correct to the best of my knowledge. I agree to abide by the academic integrity and institute enrollment policies of BlankSlate Institute.
                      </span>
                    </label>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-4 px-8 bg-[#1D4ED8] hover:bg-blue-700 text-white text-sm sm:text-base font-bold rounded-2xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-3 transition-all disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Processing Application...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Official Admission Application</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 pt-2">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Free Application
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#1D4ED8]" /> Decision within 48 Hours
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-500" /> Merit Aid Available
                      </span>
                    </div>
                  </div>

                </form>
              </motion.div>
            ) : (
              /* SUCCESS CONFIRMATION SCREEN */
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 sm:p-14 text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2 max-w-xl mx-auto">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Application Successfully Submitted
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-950 font-serif">
                    Welcome to BlankSlate Institute!
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-2">
                    Thank you, <strong className="text-gray-950">{formData.fullName}</strong>. Your admission application for{" "}
                    <strong className="text-[#1D4ED8]">{formData.program}</strong> has been registered.
                  </p>
                </div>

                {/* Application Details Summary Card */}
                <div className="max-w-md mx-auto p-5 rounded-2xl bg-gray-50 border border-gray-200 text-left space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">Application Tracking ID:</span>
                    <span className="font-mono font-bold text-[#1D4ED8]">{applicationId}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">Applicant Email:</span>
                    <span className="font-semibold text-gray-900">{formData.email}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">Mode & Timing:</span>
                    <span className="font-semibold text-gray-900">{formData.learningMode}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Under Academic Review
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-900 max-w-md mx-auto leading-relaxed">
                  Our admissions counseling office will contact you via WhatsApp and Email at <strong>{formData.phone}</strong> within 24–48 hours for technical alignment & enrollment verification.
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/"
                    className="px-8 py-3.5 bg-gray-950 hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-full transition-all shadow-md"
                  >
                    Return to Home
                  </Link>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData((prev) => ({ ...prev, fullName: "", email: "", phone: "", agreedToTerms: false }));
                    }}
                    className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-full transition-all"
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
