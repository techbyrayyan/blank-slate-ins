"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronRight, ChevronLeft, Check, ShoppingCart } from "lucide-react";

function PopupPortal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); return () => setMounted(false); }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

const allTrendingCourses = [
  {
    id: 1,
    title: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
    author: "Ed Donner, Ligency",
    image: "/6969213_4dde_2.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.7",
    ratingCount: "46,466 ratings",
    price: "$19.99",
    updated: "July 2026",
    hours: "21 total hours",
    level: "Intermediate",
    description: "Master AI Agents in 30 days: build 8 real-world projects with OpenAI Agents SDK, CrewAI, LangGraph, AutoGen and MCP.",
    bullets: [
      "Build and deploy your own AI Agent as a Career Digital Twin",
      "SDR Agent: create Sales Representatives that send professional emails",
      "Deep Research Agent: a team of Agents carrying out extensive research",
      "Master MCP protocol to connect AI agents to real-world tools",
    ],
  },
  {
    id: 2,
    title: "The Complete Claude Code & Claude Cowork Masterclass [2026]",
    author: "Prof. Ryan Ahmed, PhD, MBA | 1M+ Students",
    image: "/6969205_19aa_3.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.6",
    ratingCount: "7,799 ratings",
    price: "$27.99",
    updated: "August 2026",
    hours: "18 total hours",
    level: "All Levels",
    description: "Master Claude Code and Claude Cowork to automate your entire software development workflow with AI.",
    bullets: [
      "Use Claude Code to build full-stack apps from scratch with prompts",
      "Automate code reviews, testing, and deployment with Claude",
      "Build real-world SaaS products using Claude Cowork collaboration",
      "Master advanced prompting techniques for software engineering",
    ],
  },
  {
    id: 3,
    title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    author: "Ligency, Ed Donner",
    image: "/6969199_31c3_4.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.7",
    ratingCount: "40,332 ratings",
    price: "$69.99",
    updated: "June 2026",
    hours: "35 total hours",
    level: "Intermediate",
    description: "Go deep into LLM Engineering: build RAG pipelines, fine-tune models with QLoRA, and deploy production AI agents.",
    bullets: [
      "Build end-to-end RAG systems with LangChain and vector databases",
      "Fine-tune open-source LLMs using QLoRA on your own data",
      "Deploy AI agents with memory, tools, and multi-step reasoning",
      "Master embeddings, chunking strategies, and retrieval optimization",
    ],
  },
  {
    id: 4,
    title: "100 Days of Code™: The Complete Python Pro Bootcamp",
    author: "Dr. Angela Yu, Developer and Lead Instructor",
    image: "/6969223_f9ac_3.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.7",
    ratingCount: "434,285 ratings",
    price: "$59.99",
    updated: "May 2026",
    hours: "60 total hours",
    level: "Beginner",
    description: "Master Python by building 100 projects in 100 days. Learn data science, automation, web development, and more.",
    bullets: [
      "Build 100 unique projects from games to data visualizations",
      "Learn web scraping, automation, and API integration",
      "Create Flask web apps and deploy them to the cloud",
      "Master data science with Pandas, NumPy, and Matplotlib",
    ],
  },
  {
    id: 5,
    title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    author: "365 Careers",
    image: "/6969217_3976_3.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.5",
    ratingCount: "24,715 ratings",
    price: "$59.99",
    updated: "July 2026",
    hours: "28 total hours",
    level: "All Levels",
    description: "Become a job-ready AI Engineer. Learn the full AI engineering stack from APIs to deployment.",
    bullets: [
      "Work with OpenAI, Anthropic, and open-source model APIs",
      "Build and deploy RAG chatbots for real business use cases",
      "Master prompt engineering and LLM evaluation techniques",
      "Get hands-on with vector databases and AI orchestration",
    ],
  },
  {
    id: 6,
    title: "AI Coder: Complete Claude Code & Coding Agents Course",
    author: "Ligency, Ed Donner",
    image: "/6969213_4dde_2.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.7",
    ratingCount: "10,340 ratings",
    price: "$19.99",
    updated: "August 2026",
    hours: "14 total hours",
    level: "Intermediate",
    description: "Use Claude Code and AI coding agents to ship production-quality software 10x faster.",
    bullets: [
      "Build complete applications using Claude Code with zero friction",
      "Create coding agents that write, test, and debug code autonomously",
      "Integrate AI coding tools into your existing development workflow",
      "Ship full-stack projects in hours instead of weeks",
    ],
  },
  {
    id: 7,
    title: "Microsoft Excel - Excel from Beginner to Advanced 2026",
    author: "Kyle Pew • 2,000,000+ Students",
    image: "/6969229_ff40_2.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.7",
    ratingCount: "542,229 ratings",
    price: "$59.99",
    updated: "April 2026",
    hours: "19 total hours",
    level: "All Levels",
    description: "Master Microsoft Excel from the basics to advanced formulas, pivot tables, and data visualization.",
    bullets: [
      "Learn 150+ Excel functions including VLOOKUP, INDEX, MATCH",
      "Build dynamic dashboards and interactive reports",
      "Master Pivot Tables and Pivot Charts for data analysis",
      "Automate repetitive tasks using Excel Macros and VBA",
    ],
  },
  {
    id: 8,
    title: "Ultimate AWS Certified Solutions Architect Associate 2026",
    author: "Stephane Maarek | AWS Certified",
    image: "/2776760_f176_10.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.7",
    ratingCount: "296,290 ratings",
    price: "$79.99",
    updated: "June 2026",
    hours: "26 total hours",
    level: "Intermediate",
    description: "Pass the AWS Solutions Architect Associate exam and design resilient, high-performing cloud architectures.",
    bullets: [
      "Master all AWS core services: EC2, S3, VPC, RDS, Lambda",
      "Design high-availability and fault-tolerant architectures",
      "Learn AWS security, IAM, and compliance best practices",
      "Practice with 300+ exam-style questions and mock exams",
    ],
  },
  {
    id: 9,
    title: "The Complete Full-Stack Web Development Bootcamp",
    author: "Dr. Angela Yu, Developer and Lead Instructor",
    image: "/6566789_2e8a_10.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.7",
    ratingCount: "473,898 ratings",
    price: "$59.99",
    updated: "March 2026",
    hours: "65 total hours",
    level: "Beginner",
    description: "Become a full-stack web developer. Learn HTML, CSS, JavaScript, React, Node.js, and databases.",
    bullets: [
      "Build responsive websites with HTML5, CSS3, and Bootstrap",
      "Master JavaScript ES6+ and React for front-end development",
      "Create back-end APIs with Node.js, Express, and MongoDB",
      "Deploy full-stack apps on cloud platforms",
    ],
  },
  {
    id: 10,
    title: "Complete Data Analyst Bootcamp From Basics To Advanced",
    author: "Krish Naik, Jayant Topnani",
    image: "/6100015_1979_5.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.5",
    ratingCount: "21,675 ratings",
    price: "$59.99",
    updated: "May 2026",
    hours: "42 total hours",
    level: "Beginner",
    description: "Become a data analyst from scratch. Learn Excel, SQL, Python, Power BI, and statistics.",
    bullets: [
      "Analyze datasets with Python, Pandas, and NumPy",
      "Write complex SQL queries for real-world business problems",
      "Build interactive dashboards in Power BI and Tableau",
      "Apply statistics and probability to data analysis projects",
    ],
  },
  {
    id: 11,
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2026",
    author: "Stephane Maarek | AWS Certified",
    image: "/2776760_f176_10.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.7",
    ratingCount: "294,192 ratings",
    price: "$79.99",
    updated: "July 2026",
    hours: "14 total hours",
    level: "Beginner",
    description: "Pass the AWS Cloud Practitioner exam. Learn AWS fundamentals, billing, security, and core cloud concepts.",
    bullets: [
      "Understand all AWS core services for the CLF-C02 exam",
      "Learn cloud economics, pricing models, and billing",
      "Master AWS security, compliance, and shared responsibility",
      "Practice with 300+ exam questions and full mock tests",
    ],
  },
  {
    id: 12,
    title: "Claude Certified Architect (CCA-F, CCAR-F) - 2026 Exam Prep",
    author: "Jacob Bushong",
    image: "/6969231_51c2_2.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.4",
    ratingCount: "2,030 ratings",
    price: "$24.99",
    updated: "August 2026",
    hours: "10 total hours",
    level: "Intermediate",
    description: "Prepare for the Claude Certified Architect exam. Master Anthropic's AI architecture and responsible AI design.",
    bullets: [
      "Understand Claude's Constitutional AI training methodology",
      "Design enterprise AI workflows using Claude APIs and tools",
      "Learn responsible AI architecture and safety guardrails",
      "Practice with real CCA-F exam questions and study guides",
    ],
  },
  {
    id: 13,
    title: "Microsoft Power BI Desktop for Business Intelligence",
    author: "Maven Analytics, Chris Dutton",
    image: "/7066971_118a_4.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.6",
    ratingCount: "195,927 ratings",
    price: "$79.99",
    updated: "April 2026",
    hours: "17 total hours",
    level: "Beginner",
    description: "Master Power BI to transform raw data into stunning interactive dashboards and business reports.",
    bullets: [
      "Build professional dashboards from scratch with Power BI Desktop",
      "Write DAX formulas for calculated columns and complex measures",
      "Connect Power BI to SQL databases, Excel, and web APIs",
      "Publish and share reports through Power BI Service",
    ],
  },
  {
    id: 14,
    title: "Full Stack Generative and Agentic AI with Python",
    author: "Hitesh Choudhary, Piyush Garg",
    image: "/6969205_19aa_3.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.4",
    ratingCount: "9,765 ratings",
    price: "$19.99",
    updated: "June 2026",
    hours: "22 total hours",
    level: "Intermediate",
    description: "Build full-stack generative AI applications and autonomous agents with Python from scratch.",
    bullets: [
      "Build LLM-powered apps with LangChain and LangGraph",
      "Create autonomous AI agents that use tools and search the web",
      "Integrate generative AI into full-stack Next.js and FastAPI apps",
      "Deploy AI applications on cloud with Docker and CI/CD",
    ],
  },
  {
    id: 15,
    title: "Machine Learning A-Z [2026]: ML, DL, AI with AWS, Python & R",
    author: "Kirill Eremenko, Hadelin de Ponteves",
    image: "/6969199_31c3_4.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.5",
    ratingCount: "205,747 ratings",
    price: "$64.99",
    updated: "May 2026",
    hours: "45 total hours",
    level: "All Levels",
    description: "Learn Machine Learning and Deep Learning with Python and R. Build 80+ ML models from regression to neural networks.",
    bullets: [
      "Build 80+ machine learning models in Python and R",
      "Master deep learning with TensorFlow and Keras",
      "Apply NLP, computer vision, and reinforcement learning",
      "Deploy ML models on AWS SageMaker for production",
    ],
  },
  {
    id: 16,
    title: "PMP Exam Prep Course 35 PDUs/Hours Updated for the 2026 Exam",
    author: "TIA Training, Andrew Ramdayal",
    image: "/5f50ecdc-7c41-42a7-bb4b-0fd4da46f6c2.png",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.7",
    ratingCount: "199,076 ratings",
    price: "$69.99",
    updated: "June 2026",
    hours: "35 total hours",
    level: "Intermediate",
    description: "Pass the PMP exam on your first try. Covers all 2026 exam updates with 35 contact hours for eligibility.",
    bullets: [
      "Covers all PMP 2026 Exam Content Outline (ECO) domains",
      "35 contact hours included for PMI application eligibility",
      "1,000+ practice questions with detailed explanations",
      "Learn Agile, Predictive, and Hybrid project management",
    ],
  },
  {
    id: 17,
    title: "Claude, ChatGPT, Projects, AI Agents from Beginner to Expert",
    author: "Todd McLeod",
    image: "/4de30422-8e35-441f-bfeb-53ca05cbe598.png",
    badge: "Premium",
    badgeType: "premium",
    rating: "4.5",
    ratingCount: "3,457 ratings",
    price: "$19.99",
    updated: "August 2026",
    hours: "12 total hours",
    level: "All Levels",
    description: "Master Claude and ChatGPT for real-world productivity. Build AI workflows, agents, and automated projects.",
    bullets: [
      "Use Claude Projects and ChatGPT Custom GPTs for productivity",
      "Build AI agents that automate research and writing tasks",
      "Create multi-step AI workflows for business automation",
      "Master advanced prompting for professional and creative work",
    ],
  },
  {
    id: 18,
    title: "The Complete SQL Bootcamp: Go from Zero to Hero",
    author: "Jose Portilla, Pierian Training",
    image: "/7def57db-55d3-4d94-b551-24eae6ae3c4b.png",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: "4.7",
    ratingCount: "257,451 ratings",
    price: "$74.99",
    updated: "March 2026",
    hours: "9 total hours",
    level: "Beginner",
    description: "Learn SQL from the ground up. Write complex queries, work with PostgreSQL, and analyze real datasets.",
    bullets: [
      "Write SELECT, JOIN, GROUP BY, and subqueries with confidence",
      "Work with real-world datasets using PostgreSQL",
      "Create views, stored procedures, and triggers",
      "Apply SQL for data analysis and business reporting",
    ],
  },
  {
    id: 19,
    title: "Complete Generative AI Course With Langchain and Huggingface",
    author: "Krish Naik, KRISHAI Technologies",
    image: "/1f57762b-5e16-4f0e-b3a9-259eb78b7f5f.png",
    badge: "Premium",
    badgeType: "premium",
    rating: "4.5",
    ratingCount: "19,812 ratings",
    price: "$59.99",
    updated: "July 2026",
    hours: "30 total hours",
    level: "Intermediate",
    description: "Build Generative AI applications using LangChain, Hugging Face, and open-source LLMs.",
    bullets: [
      "Build RAG apps with LangChain, FAISS, and Chroma vector stores",
      "Fine-tune open-source models from Hugging Face Hub",
      "Create LLM-powered chatbots and document Q&A systems",
      "Deploy Generative AI apps with Streamlit and FastAPI",
    ],
  },
  {
    id: 20,
    title: "Claude Code - The Practical Guide",
    author: "Academind by Maximilian Schwarzmüller",
    image: "/6aaaf590-a970-49fd-a737-a1248e15ca15.png",
    badge: "Premium",
    badgeType: "premium",
    rating: "4.5",
    ratingCount: "15,211 ratings",
    price: "$19.99",
    updated: "August 2026",
    hours: "8 total hours",
    level: "All Levels",
    description: "A practical, hands-on guide to using Claude Code for real software development projects.",
    bullets: [
      "Set up and configure Claude Code for your development workflow",
      "Build and iterate on real projects using AI-first development",
      "Use Claude Code for debugging, refactoring, and documentation",
      "Master slash commands, memory, and CLAUDE.md configuration",
    ],
  },
];

function CourseCard({ course, onOpenApply }) {
  const [hovered, setHovered] = useState(false);
  const [popupStyle, setPopupStyle] = useState({});
  const cardRef = useState(null);
  const ref = { current: null };

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const POPUP_WIDTH = 340;
    const GAP = 12;
    const spaceRight = window.innerWidth - rect.right;
    let left;
    if (spaceRight >= POPUP_WIDTH + GAP) {
      left = rect.right + GAP;
    } else {
      left = rect.left - POPUP_WIDTH - GAP;
    }
    const top = rect.top + window.scrollY;
    setPopupStyle({ position: "absolute", left, top, width: POPUP_WIDTH, zIndex: 9999 });
    setHovered(true);
  };

  return (
    <div
      style={{ width: "calc(25% - 0.9375rem)", flexShrink: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      {/* Card */}
      <div
        onClick={() => onOpenApply && onOpenApply(course.title)}
        className="cursor-pointer bg-white rounded-2xl border border-gray-200/80 p-4 sm:p-5 flex flex-col justify-between transition-shadow duration-300 min-h-[385px]"
        style={{ boxShadow: hovered ? "0 8px 30px rgba(0,0,0,0.12)" : "none" }}
      >
        {/* Top Image + Title + Author */}
        <div>
          <div className="rounded-xl overflow-hidden aspect-[16/9] w-full mb-4 bg-gray-100">
            <img
              src={course.image}
              alt={course.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <h3 className="font-bold text-[#1c1d1f] text-base sm:text-[17px] leading-snug tracking-tight mb-1.5 line-clamp-2 min-h-[48px]">
            {course.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6a6f73] font-normal truncate">
            {course.author}
          </p>
        </div>

        {/* Bottom: Badges & Price */}
        <div className="mt-5">
          <div className="flex items-center gap-2 flex-wrap mb-3.5">
            {course.badgeType === "premium" ? (
              <span className="bg-[#5022c3] text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                Premium
              </span>
            ) : (
              <span className="bg-[#ccebfa] text-[#104b46] text-xs font-bold px-2.5 py-1 rounded">
                {course.badge}
              </span>
            )}

            <div className="border border-gray-300 rounded px-2.5 py-1 text-xs flex items-center gap-1 font-bold text-[#1c1d1f]">
              <Star className="w-3.5 h-3.5 fill-[#b4690e] text-[#b4690e]" />
              <span>{course.rating}</span>
            </div>

            <div className="border border-gray-300 rounded px-2.5 py-1 text-xs text-[#6a6f73]">
              {course.ratingCount}
            </div>
          </div>

          <div className="font-extrabold text-[#1c1d1f] text-lg sm:text-xl">
            {course.price}
          </div>
        </div>
      </div>

      {/* Hover Popup — rendered in a portal so overflow:hidden never clips it */}
      <AnimatePresence>
        {hovered && typeof window !== "undefined" && (
          <PopupPortal>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              style={popupStyle}
              className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 pointer-events-auto"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Title */}
              <h4 className="font-bold text-[#1c1d1f] text-base leading-snug mb-3">
                {course.title}
              </h4>

              {/* Badge + Updated */}
              <div className="flex items-center gap-2 mb-2.5">
                {course.badgeType === "premium" ? (
                  <span className="bg-[#5022c3] text-white text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Check className="w-3 h-3" /> Premium
                  </span>
                ) : (
                  <span className="bg-[#ccebfa] text-[#104b46] text-xs font-bold px-2 py-0.5 rounded">
                    {course.badge}
                  </span>
                )}
                <span className="text-xs text-[#1c1d1f]">
                  Updated <strong className="text-[#3c4de7]">{course.updated}</strong>
                </span>
              </div>

              {/* Meta */}
              <p className="text-xs text-[#6a6f73] mb-3">
                {course.hours} · {course.level} Level · Subtitles
              </p>

              {/* Description */}
              <p className="text-xs text-[#1c1d1f] mb-4 leading-relaxed">
                {course.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {course.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#1c1d1f]">
                    <Check className="w-3.5 h-3.5 text-[#1c1d1f] mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Add to Cart — Red */}
              <button
                onClick={() => onOpenApply && onOpenApply(course.title)}
                className="w-full text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 text-sm"
                style={{ backgroundColor: "#E50914" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#c7000f"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#E50914"}
              >
                <ShoppingCart className="w-4 h-4" />
                Add to cart
              </button>
            </motion.div>
          </PopupPortal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function InteractiveProgramExplorer({ onOpenApply }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = allTrendingCourses.length - 4;

  const goNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const goPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="py-16 sm:py-20 bg-white text-[#1c1d1f] relative select-none" id="programs">

      {/* Eager Image Preloader */}
      <div className="hidden" aria-hidden="true">
        {allTrendingCourses.map((c) => (
          <img key={c.id} src={c.image} alt="" loading="eager" decoding="async" />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1d1f] tracking-tight">
            Trending courses
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button
              onClick={goPrev}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-100 hover:scale-110 active:scale-95 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow */}
          {currentIndex < maxIndex && (
            <button
              onClick={goNext}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-100 hover:scale-110 active:scale-95 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Track — overflow-hidden to clip partial cards */}
          <div className="overflow-visible w-full">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                style={{ gap: "1.25rem" }}
                animate={{ x: `calc(-${currentIndex} * (25% + 0.9375rem))` }}
                transition={{ type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.45 }}
              >
                {allTrendingCourses.map((course) => (
                  <CourseCard key={course.id} course={course} onOpenApply={onOpenApply} />
                ))}
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
