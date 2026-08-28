"use client";

import { motion } from "framer-motion";

const storySteps = [
  {
    num: "01",
    label: "DISCOVER",
    title: "Uncompromising Technical Depth",
    desc: "Explore modern computer science, machine learning frameworks, and software architectures beyond surface-level tutorials.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "02",
    label: "LEARN",
    title: "Mastered from Real Practitioners",
    desc: "Learn from veteran engineers and researchers from Google, Meta, and top research institutions who bring production wisdom to the classroom.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "03",
    label: "CREATE",
    title: "Build Production-Ready Systems",
    desc: "Architect scalable Next.js applications, fine-tuned agentic models, and resilient backend microservices with rigorous test coverage.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "04",
    label: "CONNECT",
    title: "Collaborate in Agile Squads",
    desc: "Work in cross-functional squads simulating Silicon Valley sprint dynamics, Git branch management, and peer review standards.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "05",
    label: "LAUNCH",
    title: "Accelerate Your Future",
    desc: "Present your capstone project before hiring partners and step directly into high-impact roles at premier technology companies.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ScrollStorytelling() {
  return (
    <section className="py-24 bg-[#09090D] text-white relative overflow-hidden" id="story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs uppercase font-mono font-bold tracking-[0.25em] text-[#FF2A4D]">
            THE BLANKSLATE TRAJECTORY
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mt-3 editorial-title">
            The 5-Phase Educational Journey
          </h2>
        </div>

        {/* Story Sequence Items */}
        <div className="space-y-28 sm:space-y-36">
          {storySteps.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left Column: Number & Big Editorial Typography */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl sm:text-7xl font-black text-[#FF2A4D] font-mono tracking-tighter">
                      {step.num}
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-gray-300">
                      {step.label}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>

                {/* Right Column: Large Photo with Parallax / Hover Effect */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : ""}`}>
                  <div
                    data-cursor="view"
                    className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] group bg-[#0D0D12]"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-gray-300">
                      <span>PHASE {step.num}</span>
                      <span className="text-[#FF2A4D] font-bold">BLANKSLATE INSTITUTE</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
