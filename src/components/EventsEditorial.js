"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { upcomingEvents } from "@/data/instituteData";

export default function EventsEditorial() {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  return (
    <section className="py-24 sm:py-32 bg-[#050507] text-white relative border-t border-white/5" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF2A4D]">
            GATHERINGS & MASTERCLASSES
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mt-2 editorial-title">
            Upcoming Events
          </h2>
        </div>

        <div className="divide-y divide-white/10">
          {upcomingEvents.map((evt) => (
            <div
              key={evt.id}
              onMouseEnter={() => setHoveredEvent(evt.id)}
              onMouseLeave={() => setHoveredEvent(null)}
              data-cursor="view"
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group cursor-pointer"
            >
              {/* Date Column */}
              <div className="lg:col-span-3 flex items-baseline gap-3">
                <span className="text-4xl sm:text-6xl font-black font-mono text-[#FF2A4D] group-hover:scale-105 transition-transform">
                  {evt.day}
                </span>
                <span className="text-xs font-mono font-bold uppercase text-gray-400">
                  {evt.month} / 2026
                </span>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-7 space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase text-[#FF2A4D] bg-[#8E0E25]/20 border border-[#8E0E25]/40 px-2 py-0.5 rounded">
                  {evt.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FF2A4D] transition-colors">
                  {evt.title}
                </h3>
                <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                  <span>{evt.time}</span>
                  <span>•</span>
                  <span>{evt.location}</span>
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-2 flex justify-start lg:justify-end">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#B81134] group-hover:border-[#B81134] flex items-center justify-center text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
