"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import { useAuth } from "@/context/AuthContext";
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  Calendar,
  IdCard,
  ArrowRight,
  LogOut,
  Sparkles,
  BookOpen,
  GraduationCap,
  ChevronRight,
  Lock,
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const { user, isLoggedIn, isLoaded, logout, openAuthModal } = useAuth();
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-gray-900 selection:bg-[#1D4ED8] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => setApplyModalOpen(true)} />
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />

      <main className="flex-1 pt-[170px] sm:pt-[190px] lg:pt-[210px] pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#1e3a8a] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#1e3a8a] font-semibold">User Profile</span>
          </nav>

          {!isLoaded ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-gray-200 shadow-sm">
              <div className="inline-block w-8 h-8 border-4 border-[#1e3a8a] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-sm font-semibold text-gray-600">Loading your profile details...</p>
            </div>
          ) : !isLoggedIn ? (
            /* Logged Out State */
            <div className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-gray-200 shadow-sm max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center mx-auto mb-4 border border-blue-100">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-gray-950 mb-2">Access Your Profile</h2>
              <p className="text-sm text-gray-600 mb-6">
                Please log in or sign up to view your registration details, admissions inquiries, and student profile.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => openAuthModal({ mode: "login" })}
                  className="w-full sm:w-auto px-6 py-3 bg-[#1e3a8a] hover:bg-[#152e72] text-white text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Log In
                </button>
                <button
                  onClick={() => openAuthModal({ mode: "signup" })}
                  className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-800 hover:bg-gray-50 text-sm font-bold rounded-xl transition-all cursor-pointer"
                >
                  Create Account
                </button>
              </div>
            </div>
          ) : (
            /* Logged In Profile Content */
            <div className="space-y-8">
              {/* Profile Header Card */}
              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-3xl shadow-sm p-6 sm:p-8">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Avatar Display */}
                  <div className="relative flex-shrink-0">
                    {user?.avatar ? (
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-white shadow-lg ring-2 ring-blue-100">
                        <img
                          src={user.avatar}
                          alt={`${user.firstName} ${user.lastName}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#1e3a8a] text-white flex items-center justify-center text-3xl font-black shadow-lg ring-2 ring-blue-100 uppercase">
                        {user?.firstName ? user.firstName.charAt(0) : "U"}
                      </div>
                    )}
                    <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-full border-2 border-white shadow-xs">
                      Active
                    </span>
                  </div>

                  {/* Name & Quick Badges */}
                  <div className="flex-1 text-center sm:text-left space-y-2">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
                        {user.firstName} {user.lastName}
                      </h1>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 border border-blue-200 rounded-full text-[11px] font-bold text-[#1e3a8a]">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        Verified Member
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      Registered Student / Applicant at BlankSlate Institute of Technology
                    </p>

                    <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono text-gray-600">
                      <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg">
                        📧 {user.email}
                      </span>
                      <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg">
                        📱 {user.phone}
                      </span>
                    </div>
                  </div>

                  {/* Logout Button */}
                  <div className="sm:ml-auto">
                    <button
                      onClick={() => {
                        logout();
                        router.push("/");
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center font-bold">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-950">Personal Details</h3>
                      <p className="text-xs text-gray-500">Information submitted during registration</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">First Name</span>
                      <span className="font-semibold text-gray-900">{user.firstName}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Last Name</span>
                      <span className="font-semibold text-gray-900">{user.lastName}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Full Display Name</span>
                      <span className="font-semibold text-gray-900">{user.firstName} {user.lastName}</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center font-bold">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-950">Contact Information</h3>
                      <p className="text-xs text-gray-500">Primary channels for academic communication</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-semibold text-gray-900">{user.email}</span>
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                          Verified
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number</span>
                      <span className="font-semibold text-gray-900">{user.phone}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Communication Status</span>
                      <span className="font-semibold text-gray-900">Direct notifications enabled</span>
                    </div>
                  </div>
                </div>

                {/* Account & Security Information */}
                <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-950">Security & Credentials</h3>
                      <p className="text-xs text-gray-500">Authentication and database identity</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm font-mono">
                    <div>
                      <span className="block text-xs font-bold font-sans text-gray-400 uppercase tracking-wider">Account ID</span>
                      <span className="text-xs text-gray-700 bg-gray-50 px-2.5 py-1 rounded border border-gray-200 inline-block mt-1">
                        {user.id || user._id || "BS-USER-ONLINE"}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold font-sans text-gray-400 uppercase tracking-wider">Database Node</span>
                      <span className="text-xs text-gray-700">MongoDB Atlas (blank_login)</span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold font-sans text-gray-400 uppercase tracking-wider">Password Protection</span>
                      <span className="text-xs text-emerald-700 font-bold">Active (Salted Scrypt Hash)</span>
                    </div>
                  </div>
                </div>

                {/* Academic Quick Links */}
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#152e72] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>Next Steps</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Explore Your Opportunities</h3>
                    <p className="text-xs text-blue-100 leading-relaxed mb-6">
                      Your profile is ready. You can now apply directly to certified programs, explore diploma cohorts, or review your student portal.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <Link
                      href="/programs"
                      className="w-full px-4 py-2.5 bg-white text-[#1e3a8a] text-xs font-bold rounded-xl flex items-center justify-between hover:bg-blue-50 transition-colors"
                    >
                      <span>Explore Programs & Diplomas</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/student-portal"
                      className="w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold rounded-xl flex items-center justify-between transition-colors"
                    >
                      <span>Go to Student Portal</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <EditorialFooter />
    </div>
  );
}
