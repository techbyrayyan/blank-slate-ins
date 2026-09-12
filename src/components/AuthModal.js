"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Mail,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  User,
  Phone,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Camera,
  Upload,
  Trash2,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function AuthModal() {
  const {
    authModalOpen,
    authModalMode,
    setAuthModalMode,
    closeAuthModal,
    loginUser,
    signupUser,
    handleAuthSuccess,
  } = useAuth();

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Signup form state
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });

  // Password visibility toggles
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showLoginConfirmPassword, setShowLoginConfirmPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const fileInputRef = useRef(null);

  // Clear inputs/errors on mode switch or open
  useEffect(() => {
    setErrorMsg("");
    setSuccessMsg("");
    setShowLoginPassword(false);
    setShowLoginConfirmPassword(false);
    setShowSignupPassword(false);
    setShowSignupConfirmPassword(false);
  }, [authModalMode, authModalOpen]);

  useEffect(() => {
    if (authModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [authModalOpen]);

  if (!authModalOpen) return null;

  // Handle image upload & compression to base64
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrorMsg("Please select a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg("Image size should be under 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        // Resize to maximum 240x240 for avatar thumbnail
        const canvas = document.createElement("canvas");
        const maxSize = 240;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxSize) {
            height = Math.round((height * maxSize) / width);
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width = Math.round((width * maxSize) / height);
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
        setSignupData((prev) => ({ ...prev, avatar: dataUrl }));
        setErrorMsg("");
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const removeAvatar = () => {
    setSignupData((prev) => ({ ...prev, avatar: "" }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!loginData.email || !loginData.password || !loginData.confirmPassword) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    if (loginData.password !== loginData.confirmPassword) {
      setErrorMsg("Password and Confirm Password do not match.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Login failed. Please check your credentials.");
      }

      setSuccessMsg("Logged in successfully!");
      loginUser(data.user);
      setTimeout(() => {
        handleAuthSuccess(data.user);
      }, 600);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const { firstName, lastName, email, phone, password, confirmPassword } = signupData;

    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Password and Confirm Password do not match.");
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Sign up failed. Please try again.");
      }

      setSuccessMsg("Account created successfully!");
      signupUser(data.user);
      setTimeout(() => {
        handleAuthSuccess(data.user);
      }, 600);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeAuthModal}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10 my-8"
        >
          {/* Header Bar */}
          <div className="bg-[#1e3a8a] text-white px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {authModalMode === "login" ? "Welcome Back" : "Create Account"}
                </h3>
                <p className="text-xs text-blue-200">
                  {authModalMode === "login"
                    ? "Log in to continue to forms & applications"
                    : "Register once to access admissions & inquiries"}
                </p>
              </div>
            </div>
            <button
              onClick={closeAuthModal}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
            {/* Mode Switch Tabs */}
            <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setAuthModalMode("login")}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  authModalMode === "login"
                    ? "bg-white text-[#1e3a8a] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => setAuthModalMode("signup")}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  authModalMode === "signup"
                    ? "bg-white text-[#1e3a8a] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Error message */}
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl flex items-start gap-2.5"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {/* Success message */}
            {successMsg && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-3.5 bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm rounded-xl flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{successMsg}</span>
              </motion.div>
            )}

            {/* ── LOGIN FORM ── */}
            {authModalMode === "login" && (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. rayyan@blankslate.edu.pk"
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Password with clickable Lock & Eye */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword((v) => !v)}
                      className="absolute left-3 p-1 text-gray-500 hover:text-[#1D4ED8] transition-colors cursor-pointer"
                      title={showLoginPassword ? "Click to hide password" : "Click to show password"}
                    >
                      {showLoginPassword ? (
                        <Unlock className="w-4 h-4 text-[#1D4ED8]" />
                      ) : (
                        <Lock className="w-4 h-4" />
                      )}
                    </button>
                    <input
                      type={showLoginPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword((v) => !v)}
                      className="absolute right-3 p-1 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                      title={showLoginPassword ? "Hide password" : "Show password"}
                    >
                      {showLoginPassword ? (
                        <EyeOff className="w-4 h-4 text-[#1D4ED8]" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password with clickable Lock & Eye */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowLoginConfirmPassword((v) => !v)}
                      className="absolute left-3 p-1 text-gray-500 hover:text-[#1D4ED8] transition-colors cursor-pointer"
                      title={showLoginConfirmPassword ? "Click to hide password" : "Click to show password"}
                    >
                      {showLoginConfirmPassword ? (
                        <Unlock className="w-4 h-4 text-[#1D4ED8]" />
                      ) : (
                        <Lock className="w-4 h-4" />
                      )}
                    </button>
                    <input
                      type={showLoginConfirmPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      value={loginData.confirmPassword}
                      onChange={(e) =>
                        setLoginData({
                          ...loginData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginConfirmPassword((v) => !v)}
                      className="absolute right-3 p-1 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                      title={showLoginConfirmPassword ? "Hide password" : "Show password"}
                    >
                      {showLoginConfirmPassword ? (
                        <EyeOff className="w-4 h-4 text-[#1D4ED8]" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-3 px-4 bg-[#1e3a8a] hover:bg-[#152e72] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Log In</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-500 pt-2">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setAuthModalMode("signup")}
                    className="text-[#1D4ED8] font-bold hover:underline cursor-pointer"
                  >
                    Sign up here
                  </button>
                </p>
              </form>
            )}

            {/* ── SIGN UP FORM ── */}
            {authModalMode === "signup" && (
              <form onSubmit={handleSignupSubmit} className="space-y-3.5">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="Rayyan"
                        value={signupData.firstName}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="Ansari"
                        value={signupData.lastName}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            lastName: e.target.value,
                          })
                        }
                        className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="rayyan@blankslate.edu.pk"
                      value={signupData.email}
                      onChange={(e) =>
                        setSignupData({ ...signupData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone No */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 332 0901442"
                      value={signupData.phone}
                      onChange={(e) =>
                        setSignupData({ ...signupData, phone: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Password & Confirm Password with clickable Lock & Eye */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowSignupPassword((v) => !v)}
                        className="absolute left-3 p-1 text-gray-500 hover:text-[#1D4ED8] transition-colors cursor-pointer"
                        title={showSignupPassword ? "Click to hide password" : "Click to show password"}
                      >
                        {showSignupPassword ? (
                          <Unlock className="w-4 h-4 text-[#1D4ED8]" />
                        ) : (
                          <Lock className="w-4 h-4" />
                        )}
                      </button>
                      <input
                        type={showSignupPassword ? "text" : "password"}
                        required
                        placeholder="••••••••"
                        value={signupData.password}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            password: e.target.value,
                          })
                        }
                        className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowSignupPassword((v) => !v)}
                        className="absolute right-3 p-1 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                        title={showSignupPassword ? "Hide password" : "Show password"}
                      >
                        {showSignupPassword ? (
                          <EyeOff className="w-4 h-4 text-[#1D4ED8]" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowSignupConfirmPassword((v) => !v)}
                        className="absolute left-3 p-1 text-gray-500 hover:text-[#1D4ED8] transition-colors cursor-pointer"
                        title={showSignupConfirmPassword ? "Click to hide password" : "Click to show password"}
                      >
                        {showSignupConfirmPassword ? (
                          <Unlock className="w-4 h-4 text-[#1D4ED8]" />
                        ) : (
                          <Lock className="w-4 h-4" />
                        )}
                      </button>
                      <input
                        type={showSignupConfirmPassword ? "text" : "password"}
                        required
                        placeholder="••••••••"
                        value={signupData.confirmPassword}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowSignupConfirmPassword((v) => !v)}
                        className="absolute right-3 p-1 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                        title={showSignupConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showSignupConfirmPassword ? (
                          <EyeOff className="w-4 h-4 text-[#1D4ED8]" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* ── PROFILE PHOTO UPLOAD CATEGORY (AFTER CONFIRM PASSWORD) ── */}
                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-2xl flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    {signupData.avatar ? (
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#1D4ED8] shadow-sm">
                        <img
                          src={signupData.avatar}
                          alt="Profile preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-blue-100 border-2 border-dashed border-blue-300 flex flex-col items-center justify-center text-blue-600">
                        <Camera className="w-5 h-5" />
                      </div>
                    )}
                    {signupData.avatar && (
                      <button
                        type="button"
                        onClick={removeAvatar}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow transition-colors cursor-pointer"
                        title="Remove photo"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-800">
                      Profile Picture <span className="text-gray-400 font-normal">(Optional)</span>
                    </p>
                    <p className="text-[11px] text-gray-500 mb-2">
                      Upload your photo to display on your profile & navbar badge
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="auth-avatar-input"
                    />
                    <label
                      htmlFor="auth-avatar-input"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-blue-200 hover:border-[#1D4ED8] text-[#1e3a8a] text-xs font-bold rounded-lg cursor-pointer transition-all shadow-2xs hover:bg-blue-50/50"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{signupData.avatar ? "Change Photo" : "Upload Photo"}</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-3 px-4 bg-[#1e3a8a] hover:bg-[#152e72] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Create Account & Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-500 pt-1">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setAuthModalMode("login")}
                    className="text-[#1D4ED8] font-bold hover:underline cursor-pointer"
                  >
                    Log in here
                  </button>
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
