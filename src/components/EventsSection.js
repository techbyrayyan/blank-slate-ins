"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle2, Users } from "lucide-react";
import { upcomingEvents } from "@/data/instituteData";

export default function EventsSection() {
  const [registeredEvents, setRegisteredEvents] = useState({});

  const handleRegister = (eventId) => {
    setRegisteredEvents((prev) => ({
      ...prev,
      [eventId]: true,
    }));
  };

  return (
    <section className="py-24 bg-white relative" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#1D4ED8]">
              COMMUNITY & WORKSHOPS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-base text-[#6B7280]">
              Join our interactive tech summits, hackathons, and guest masterclasses open to students and tech professionals.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B0B0C] hover:text-[#1D4ED8] transition-colors group flex-shrink-0"
          >
            <span>View Full Events Calendar</span>
            <ArrowRight className="w-4 h-4 text-[#1D4ED8] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((evt) => {
            const isRegistered = !!registeredEvents[evt.id];

            return (
              <div
                key={evt.id}
                className="group bg-gray-50/60 rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row"
              >
                {/* Image & Date Badge */}
                <div className="relative sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>

                  {/* Date Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md text-center">
                    <p className="text-[10px] font-black uppercase text-[#1D4ED8] leading-none">
                      {evt.date.split(" ")[0]}
                    </p>
                    <p className="text-base font-black text-[#0B0B0C] leading-tight">
                      {evt.date.split(" ")[1]?.replace(",", "")}
                    </p>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-red-50 px-2 py-0.5 rounded">
                      {evt.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B0B0C] group-hover:text-[#1D4ED8] transition-colors leading-snug">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed">
                      {evt.shortDesc}
                    </p>
                  </div>

                  {/* Meta Specs */}
                  <div className="space-y-1.5 text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span className="line-clamp-1">{evt.location}</span>
                    </div>
                  </div>

                  {/* Register Action */}
                  <div className="pt-2">
                    {isRegistered ? (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Pass Confirmed & Sent to Email</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleRegister(evt.id)}
                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#0B0B0C] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl shadow-sm transition-all duration-200"
                      >
                        <span>Register for Event</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
