"use client";

import { useState, useEffect } from "react";
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
  LogOut,
  ChevronRight,
  Lock,
  Edit2,
  Check,
  X,
  CheckCircle2,
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const { user, isLoggedIn, isLoaded, logout, openAuthModal, loginUser } = useAuth();
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  // Edit form state
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState("");
  const [saveError, setSaveError] = useState("");

  // Sync latest user data from database on mount
  useEffect(() => {
    if (user) {
      setEditFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
      });

      // Fetch latest profile from DB to ensure synced data
      const fetchFreshProfile = async () => {
        try {
          const query = user.id ? `id=${user.id}` : `email=${encodeURIComponent(user.email)}`;
          const res = await fetch(`/api/auth/profile?${query}`);
          const data = await res.json();
          if (res.ok && data.success && data.user) {
            loginUser(data.user);
            setEditFormData({
              firstName: data.user.firstName || "",
              lastName: data.user.lastName || "",
              email: data.user.email || "",
              phone: data.user.phone || "",
            });
          }
        } catch (e) {
          console.error("Profile sync error:", e);
        }
      };

      fetchFreshProfile();
    }
  }, [user?.id, user?.email]);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError("");
    setSaveSuccess("");

    try {
      const res = await fetch("/api/auth/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id || user._id,
          firstName: editFormData.firstName,
          lastName: editFormData.lastName,
          email: editFormData.email,
          phone: editFormData.phone,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to update profile.");
      }

      // Update global auth context and local storage
      loginUser(data.user);
      setSaveSuccess("Profile updated successfully!");
      setIsEditing(false);
      setTimeout(() => setSaveSuccess(""), 4000);
    } catch (err) {
      setSaveError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-gray-900 selection:bg-[#1D4ED8] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => setApplyModalOpen(true)} />
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />

      <main className="flex-1 pt-[170px] sm:pt-[190px] lg:pt-[210px] pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Please log in or sign up to view your registration details and profile information.
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
            /* Logged In Profile Content — Strictly User Information */
            <div className="space-y-6">
              {/* Success Notification */}
              {saveSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold rounded-2xl flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>{saveSuccess}</span>
                </div>
              )}

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
                  </div>

                  {/* Name & Quick Details */}
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

                  {/* Action Buttons: Edit & Logout */}
                  <div className="flex sm:flex-col items-center gap-2 sm:ml-auto">
                    <button
                      onClick={() => {
                        setIsEditing((v) => !v);
                        setSaveError("");
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#1e3a8a] text-xs font-bold rounded-xl transition-colors cursor-pointer"
                      title={isEditing ? "Cancel editing" : "Edit your profile information"}
                    >
                      {isEditing ? <X className="w-3.5 h-3.5" /> : <Edit2 className="w-3.5 h-3.5" />}
                      <span>{isEditing ? "Cancel" : "Edit Info"}</span>
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        router.push("/");
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Edit Mode Form */}
              {isEditing ? (
                <form onSubmit={handleSaveProfile} className="bg-white border border-blue-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <h3 className="text-base font-bold text-gray-950">Edit Profile Information</h3>
                      <p className="text-xs text-gray-500">Update any typos in your name, email, or phone number</p>
                    </div>
                  </div>

                  {saveError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-bold rounded-xl">
                      {saveError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={editFormData.firstName}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, firstName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={editFormData.lastName}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, lastName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={editFormData.email}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={editFormData.phone}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="px-6 py-2.5 bg-[#1e3a8a] hover:bg-[#152e72] text-white text-xs font-bold rounded-xl shadow transition-all cursor-pointer disabled:opacity-60"
                    >
                      {isSaving ? "Saving..." : "Save Changes"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                /* Information Cards — Strictly User Information Only */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-7 shadow-sm">
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center font-bold">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-950">Personal Details</h3>
                        <p className="text-xs text-gray-500">Your profile identity information</p>
                      </div>
                    </div>

                    <div className="space-y-4 text-sm">
                      <div className="p-3 bg-gray-50/70 rounded-xl border border-gray-100">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                          First Name
                        </span>
                        <span className="font-bold text-gray-900 text-base">{user.firstName}</span>
                      </div>
                      <div className="p-3 bg-gray-50/70 rounded-xl border border-gray-100">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                          Last Name
                        </span>
                        <span className="font-bold text-gray-900 text-base">{user.lastName}</span>
                      </div>
                      <div className="p-3 bg-gray-50/70 rounded-xl border border-gray-100">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                          Full Display Name
                        </span>
                        <span className="font-bold text-[#1e3a8a] text-base">{user.firstName} {user.lastName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-7 shadow-sm">
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center font-bold">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-950">Contact Information</h3>
                        <p className="text-xs text-gray-500">Channels used for your communication</p>
                      </div>
                    </div>

                    <div className="space-y-4 text-sm">
                      <div className="p-3 bg-gray-50/70 rounded-xl border border-gray-100">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                          Email Address
                        </span>
                        <div className="flex items-center justify-between gap-2 mt-0.5">
                          <span className="font-bold text-gray-900 text-base break-all">{user.email}</span>
                          <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full flex-shrink-0">
                            Verified
                          </span>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50/70 rounded-xl border border-gray-100">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                          Phone Number
                        </span>
                        <span className="font-bold text-gray-900 text-base">{user.phone}</span>
                      </div>
                      <div className="p-3 bg-gray-50/70 rounded-xl border border-gray-100">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                          Account Status
                        </span>
                        <span className="font-bold text-emerald-700 text-sm">Active & Verified Student</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <EditorialFooter />
    </div>
  );
}
