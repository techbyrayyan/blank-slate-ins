"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-[#F7F7F8] border-t border-b border-gray-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 text-[#E50914] flex items-center justify-center mx-auto">
          <Mail className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-[#0B0B0C]">
            Stay Ahead of What&apos;s Next
          </h3>
          <p className="text-sm text-[#6B7280] max-w-md mx-auto">
            Get updates about new specialized tracks, tech summits, scholarship deadlines, and guest lectures.
          </p>
        </div>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Thank you for subscribing! You are now on the VIP list.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E50914]/20 focus:border-[#E50914] shadow-sm transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#0B0B0C] hover:bg-[#E50914] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
