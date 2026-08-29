"use client";

import Link from "next/link";
import CourseCard from "./CourseCard";

const trendingCourses12 = [
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
];

export default function InteractiveProgramExplorer({ onOpenApply }) {
  return (
    <section className="py-8 sm:py-10 bg-white text-[#1c1d1f] relative select-none" id="programs">
      
      {/* Eager Image Preloader */}
      <div className="hidden" aria-hidden="true">
        {trendingCourses12.map((c) => (
          <img key={c.id} src={c.image} alt="" loading="eager" decoding="async" />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1d1f] tracking-tight">
            Trending courses
          </h2>
          <Link
            href="/courses"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#1D4ED8] hover:bg-[#1e40af] text-white text-sm font-semibold rounded-md transition-colors duration-200"
          >
            View More Courses
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        {/* 4-column Grid System (3 rows x 4 columns = 12 cards total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingCourses12.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onOpenApply={onOpenApply}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
