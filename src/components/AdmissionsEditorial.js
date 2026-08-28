"use client";

import { ArrowRight, Calendar } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Apply Online",
    desc: "Complete our streamlined technical inquiry form with your background and program track.",
  },
  {
    num: "02",
    title: "Get Accepted",
    desc: "Participate in a 20-minute technical readiness discussion with an admissions advisor.",
  },
  {
    num: "03",
    title: "Start Learning",
    desc: "Receive your enrollment kit, access preliminary lab environments, and begin building.",
  },
];

export default function AdmissionsEditorial({ onOpenApply }) {
  return (
    <section className="py-24 sm:py-32 bg-white text-black relative overflow-hidden border-t border-white/5" id="admissions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & 3 Steps */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF2A4D]">
                JOIN THE NEXT COHORT
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mt-2 leading-[0.95] editorial-title">
                Your Next Chapter <br />
                <span className="text-gradient-vine">Starts Here.</span>
              </h2>
            </div>

            {/* 3-Step Animated Process */}
            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex items-start gap-6 p-6 rounded-2xl bg-[#0D0D12] border border-white/10 hover:border-[#B81134] transition-colors"
                >
                  <span className="text-2xl font-mono font-black text-[#FF2A4D]">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onOpenApply}
                data-cursor="button"
                className="btn-vine inline-flex items-center gap-2 px-8 py-4 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg transition-all"
              >
                <span>START YOUR APPLICATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Floating Application Deadline Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D0D12] border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#8E0E25]/20 text-[#FF2A4D] border border-[#B81134]/40 flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-gray-400">Next Intake Priority Deadline</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">October 15, 2026</h3>
                <p className="text-xs text-gray-400">Applications reviewed on a rolling basis.</p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-gray-300">
                <div className="flex items-center justify-between">
                  <span>Class Format:</span>
                  <span className="font-bold text-white">On Campus & Hybrid Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Class Hours:</span>
                  <span className="font-bold text-white">Mon–Thu (6:00pm–8:30pm)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Scholarship Quota:</span>
                  <span className="font-bold text-[#FF2A4D]">Up to 40% Merit Aid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
