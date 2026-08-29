import Link from "next/link";
import { BookOpen, Code, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      title: "Learn",
      desc: "Build strong academic, theoretical, and technical foundations with structured guidance.",
      icon: BookOpen,
    },
    {
      title: "Create",
      desc: "Turn knowledge into production-grade projects, working systems, and interactive portfolios.",
      icon: Code,
    },
    {
      title: "Grow",
      desc: "Develop the interpersonal skills, technical confidence, and network needed to accelerate your career.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
                alt="BlankSlate Institute practical learning workshop"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-white/90 backdrop-blur-md px-3 py-1 rounded-full w-fit mb-2">
                  <CheckCircle className="w-3.5 h-3.5" /> Hands-On Education
                </div>
                <p className="text-sm font-medium text-gray-200">
                  Real engineering labs, not just lecture slides.
                </p>
              </div>
            </div>
            {/* Background geometric decorative element */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-red-50 rounded-3xl -z-10"></div>
          </div>

          {/* Right Column: Text & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#1D4ED8] mb-2.5">
                ABOUT BLANKSLATE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight leading-tight">
                Education That Prepares You for the Real World
              </h2>
            </div>

            <p className="text-base text-[#6B7280] leading-relaxed">
              BlankSlate Institute is committed to providing practical, innovative, and career-focused education. Our learning environment combines academic foundations with real-world skills, modern technology, and direct industry exposure.
            </p>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-3">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-red-100 hover:bg-red-50/20 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-[#1D4ED8] shadow-sm flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B0B0C]">{item.title}</h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed mt-1">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Discover Story Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#0B0B0C] hover:bg-[#1F2328] rounded-xl shadow-md transition-all group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#1D4ED8] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
