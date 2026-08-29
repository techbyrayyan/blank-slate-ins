"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CinematicCTA() {
  const certCards = [
    {
      title: "CompTIA",
      subtitle: "Cloud, Networking, Cybersecurity",
      image: "/comptia-thumbnail.png",
      link: "/courses?search=CompTIA",
    },
    {
      title: "AWS",
      subtitle: "Cloud, AI, Coding, Networking",
      image: "/aws-thumbnail.png",
      link: "/topic/amazon-aws",
    },
    {
      title: "PMI",
      subtitle: "Project & Program Management",
      image: "/pmi-thumbnail.png",
      link: "/courses?search=PMI",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-white relative select-none" id="certifications-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-r from-[#0a1f4a] via-[#1D4ED8] to-[#0d2757] text-white p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(29,78,216,0.3)] border border-blue-400/20 relative overflow-hidden min-h-[480px] lg:min-h-[520px] flex flex-col justify-center">
          
          {/* Ambient Lighting Accents */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-[1.15] tracking-tight">
                Get certified and get ahead in your career
              </h2>

              <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed max-w-lg">
                Prep for certifications with comprehensive courses, practice tests, and special offers on exam vouchers.
              </p>

              <div className="pt-2">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2.5 text-white hover:text-blue-200 font-bold text-base sm:text-lg transition-colors group"
                >
                  <span className="underline underline-offset-4 decoration-2 group-hover:decoration-blue-200">
                    Explore certifications and vouchers
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 Certification Cards (CompTIA, AWS, PMI) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
              {certCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.link}
                  className="bg-[#0b1b36]/85 hover:bg-[#0e2448] backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 hover:border-white/50 transition-all duration-300 group block shadow-lg hover:shadow-2xl hover:-translate-y-1.5"
                >
                  {/* Badge Thumbnails Graphic */}
                  <div className="rounded-xl overflow-hidden aspect-[16/11] w-full mb-4 bg-black/30 border border-white/10">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-black text-lg sm:text-xl text-white group-hover:text-blue-200 transition-colors mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 font-normal leading-snug">
                    {card.subtitle}
                  </p>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
