"use client";

export default function StudentLifeCollage() {
  return (
    <section className="py-24 sm:py-32 bg-[#09090D] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF2A4D]">
              COMMUNITY & IMPACT
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight editorial-title">
              Life at BlankSlate
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 font-mono max-w-xs">
            HACKATHONS • BUILD SPRINTS • DEMO DAYS • FOUNDER MEETS
          </p>
        </div>

        {/* Dynamic Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] relative bg-black group border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="Students collaborating"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-8 text-white">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#FF2A4D] bg-[#8E0E25]/30 border border-[#B81134]/40 px-2.5 py-1 rounded">
                  Demo Day Sprints
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-2">
                  Students pitching production web apps to venture investors
                </h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto relative bg-black group border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
              alt="Design Critique Workshop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6 text-white">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#FF2A4D] bg-[#8E0E25]/30 border border-[#B81134]/40 px-2.5 py-1 rounded">
                  UX Labs
                </span>
                <h4 className="text-lg font-bold mt-2">Design System Reviews</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
