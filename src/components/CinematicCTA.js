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
    <section className="py-8 sm:py-10 bg-white relative select-none" id="certifications-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1c1d24] text-white p-8 sm:p-10 lg:p-12 shadow-2xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white leading-[1.2] tracking-tight">
                Get certified and get ahead in your career
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-md">
                Prep for certifications with comprehensive courses, practice tests, and special offers on exam vouchers.
              </p>

              <div className="pt-1">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 text-white hover:text-[#60A5FA] font-bold text-sm sm:text-[15px] transition-colors group"
                >
                  <span className="underline underline-offset-4 decoration-1 group-hover:decoration-[#60A5FA]">
                    Explore certifications and vouchers
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 Certification Cards (CompTIA, AWS, PMI) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
              {certCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.link}
                  className="bg-[#2b2f3e] hover:bg-[#34384a] rounded-2xl p-3.5 border border-gray-700/60 hover:border-[#3B82F6] transition-all duration-300 group block shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Badge Thumbnails Graphic */}
                  <div className="rounded-xl overflow-hidden aspect-[16/10] w-full mb-3 bg-[#1c1d24]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-[#60A5FA] transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-normal leading-snug">
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
