"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";

const allCourses = [
  {
    id: 1, title: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
    author: "Ed Donner, Ligency", image: "/6969213_4dde_2.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.7", ratingCount: "46,466 ratings",
    price: "$19.99", updated: "July 2026", hours: "21 total hours", level: "Intermediate",
    category: "AI & Agents",
    description: "Master AI Agents in 30 days: build 8 real-world projects with OpenAI Agents SDK, CrewAI, LangGraph, AutoGen and MCP.",
    bullets: ["Build and deploy your own AI Agent as a Career Digital Twin","SDR Agent: create Sales Representatives that send professional emails","Deep Research Agent: a team of Agents carrying out extensive research","Master MCP protocol to connect AI agents to real-world tools"],
  },
  {
    id: 2, title: "The Complete Claude Code & Claude Cowork Masterclass [2026]",
    author: "Prof. Ryan Ahmed, PhD, MBA | 1M+ Students", image: "/6969205_19aa_3.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.6", ratingCount: "7,799 ratings",
    price: "$27.99", updated: "August 2026", hours: "18 total hours", level: "All Levels",
    category: "AI & Agents",
    description: "Master Claude Code and Claude Cowork to automate your entire software development workflow with AI.",
    bullets: ["Use Claude Code to build full-stack apps from scratch with prompts","Automate code reviews, testing, and deployment with Claude","Build real-world SaaS products using Claude Cowork collaboration","Master advanced prompting techniques for software engineering"],
  },
  {
    id: 3, title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    author: "Ligency, Ed Donner", image: "/6969199_31c3_4.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.7", ratingCount: "40,332 ratings",
    price: "$69.99", updated: "June 2026", hours: "35 total hours", level: "Intermediate",
    category: "AI & Agents",
    description: "Go deep into LLM Engineering: build RAG pipelines, fine-tune models with QLoRA, and deploy production AI agents.",
    bullets: ["Build end-to-end RAG systems with LangChain and vector databases","Fine-tune open-source LLMs using QLoRA on your own data","Deploy AI agents with memory, tools, and multi-step reasoning","Master embeddings, chunking strategies, and retrieval optimization"],
  },
  {
    id: 4, title: "AI Coder: Complete Claude Code & Coding Agents Course",
    author: "Ligency, Ed Donner", image: "/6969213_4dde_2.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.7", ratingCount: "10,340 ratings",
    price: "$19.99", updated: "August 2026", hours: "14 total hours", level: "Intermediate",
    category: "AI & Agents",
    description: "Use Claude Code and AI coding agents to ship production-quality software 10x faster.",
    bullets: ["Build complete applications using Claude Code with zero friction","Create coding agents that write, test, and debug code autonomously","Integrate AI coding tools into your existing development workflow","Ship full-stack projects in hours instead of weeks"],
  },
  {
    id: 5, title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    author: "365 Careers", image: "/6969217_3976_3.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.5", ratingCount: "24,715 ratings",
    price: "$59.99", updated: "July 2026", hours: "28 total hours", level: "All Levels",
    category: "AI & Agents",
    description: "Become a job-ready AI Engineer. Learn the full AI engineering stack from APIs to deployment.",
    bullets: ["Work with OpenAI, Anthropic, and open-source model APIs","Build and deploy RAG chatbots for real business use cases","Master prompt engineering and LLM evaluation techniques","Get hands-on with vector databases and AI orchestration"],
  },
  {
    id: 6, title: "Claude Certified Architect (CCA-F, CCAR-F) - 2026 Exam Prep",
    author: "Jacob Bushong", image: "/6969231_51c2_2.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.4", ratingCount: "2,030 ratings",
    price: "$24.99", updated: "August 2026", hours: "10 total hours", level: "Intermediate",
    category: "AI & Agents",
    description: "Prepare for the Claude Certified Architect exam. Master Anthropic's AI architecture and responsible AI design.",
    bullets: ["Understand Claude's Constitutional AI training methodology","Design enterprise AI workflows using Claude APIs and tools","Learn responsible AI architecture and safety guardrails","Practice with real CCA-F exam questions and study guides"],
  },
  {
    id: 7, title: "100 Days of Code: The Complete Python Pro Bootcamp",
    author: "Dr. Angela Yu, Developer and Lead Instructor", image: "/6969223_f9ac_3.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.7", ratingCount: "434,285 ratings",
    price: "$59.99", updated: "May 2026", hours: "60 total hours", level: "Beginner",
    category: "Programming",
    description: "Master Python by building 100 projects in 100 days. Learn data science, automation, web development, and more.",
    bullets: ["Build 100 unique projects from games to data visualizations","Learn web scraping, automation, and API integration","Create Flask web apps and deploy them to the cloud","Master data science with Pandas, NumPy, and Matplotlib"],
  },
  {
    id: 8, title: "The Complete Full-Stack Web Development Bootcamp",
    author: "Dr. Angela Yu, Developer and Lead Instructor", image: "/6566789_2e8a_10.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.7", ratingCount: "473,898 ratings",
    price: "$59.99", updated: "March 2026", hours: "65 total hours", level: "Beginner",
    category: "Programming",
    description: "Become a full-stack web developer. Learn HTML, CSS, JavaScript, React, Node.js, and databases.",
    bullets: ["Build responsive websites with HTML5, CSS3, and Bootstrap","Master JavaScript ES6+ and React for front-end development","Create back-end APIs with Node.js, Express, and MongoDB","Deploy full-stack apps on cloud platforms"],
  },
  {
    id: 9, title: "The Complete JavaScript Course 2026: From Zero to Expert!",
    author: "Jonas Schmedtmann", image: "/6969205_19aa_3.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.7", ratingCount: "210,985 ratings",
    price: "$54.99", updated: "June 2026", hours: "69 total hours", level: "All Levels",
    category: "Programming",
    description: "The most complete JavaScript course. Master modern JavaScript from the ground up with real projects.",
    bullets: ["Master JavaScript fundamentals, ES6+, OOP, and async code","Build real-world projects: Mapty, Bankist, Forkify apps","Understand how JavaScript works behind the scenes","Learn advanced patterns: closures, prototypal inheritance, modules"],
  },
  {
    id: 10, title: "React - The Complete Guide 2026 (incl. Next.js, Redux)",
    author: "Maximilian Schwarzmuller", image: "/6969199_31c3_4.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.6", ratingCount: "218,431 ratings",
    price: "$64.99", updated: "July 2026", hours: "68 total hours", level: "All Levels",
    category: "Programming",
    description: "Dive into React, hooks, Redux, React Router, Next.js, and more to build powerful web apps.",
    bullets: ["Build modern React apps with hooks, context, and Redux","Create SSR/SSG applications with Next.js","Master advanced React patterns and performance optimization","Implement authentication, routing, and state management"],
  },
  {
    id: 11, title: "Complete Data Analyst Bootcamp From Basics To Advanced",
    author: "Krish Naik, Jayant Topnani", image: "/6100015_1979_5.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.5", ratingCount: "21,675 ratings",
    price: "$59.99", updated: "May 2026", hours: "42 total hours", level: "Beginner",
    category: "Data Science",
    description: "Become a data analyst from scratch. Learn Excel, SQL, Python, Power BI, and statistics.",
    bullets: ["Analyze datasets with Python, Pandas, and NumPy","Write complex SQL queries for real-world business problems","Build interactive dashboards in Power BI and Tableau","Apply statistics and probability to data analysis projects"],
  },
  {
    id: 12, title: "Machine Learning A-Z: AI, Python & R + ChatGPT Bonus [2026]",
    author: "Kirill Eremenko, Hadelin de Ponteves", image: "/6969217_3976_3.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.5", ratingCount: "178,562 ratings",
    price: "$74.99", updated: "April 2026", hours: "44 total hours", level: "Beginner",
    category: "Data Science",
    description: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.",
    bullets: ["Master regression, classification, clustering, and NLP","Build deep learning models with TensorFlow and Keras","Handle missing data, feature engineering, and model evaluation","Apply ML to real-world business problems end-to-end"],
  },
  {
    id: 13, title: "Ultimate AWS Certified Solutions Architect Associate 2026",
    author: "Stephane Maarek | AWS Certified", image: "/2776760_f176_10.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.7", ratingCount: "296,290 ratings",
    price: "$79.99", updated: "June 2026", hours: "26 total hours", level: "Intermediate",
    category: "Cloud & DevOps",
    description: "Pass the AWS Solutions Architect Associate exam and design resilient, high-performing cloud architectures.",
    bullets: ["Master all AWS core services: EC2, S3, VPC, RDS, Lambda","Design high-availability and fault-tolerant architectures","Learn AWS security, IAM, and compliance best practices","Practice with 300+ exam-style questions and mock exams"],
  },
  {
    id: 14, title: "Ultimate AWS Certified Cloud Practitioner CLF-C02 2026",
    author: "Stephane Maarek | AWS Certified", image: "/2776760_f176_10.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.7", ratingCount: "294,192 ratings",
    price: "$79.99", updated: "July 2026", hours: "14 total hours", level: "Beginner",
    category: "Cloud & DevOps",
    description: "Pass the AWS Cloud Practitioner exam. Learn AWS fundamentals, billing, security, and core cloud concepts.",
    bullets: ["Understand all AWS core services for the CLF-C02 exam","Learn cloud economics, pricing models, and billing","Master AWS security, compliance, and shared responsibility","Practice with 300+ exam questions and full mock tests"],
  },
  {
    id: 15, title: "Docker & Kubernetes: The Practical Guide [2026 Edition]",
    author: "Maximilian Schwarzmuller", image: "/6566789_2e8a_10.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.7", ratingCount: "86,234 ratings",
    price: "$69.99", updated: "May 2026", hours: "23 total hours", level: "Intermediate",
    category: "Cloud & DevOps",
    description: "Learn Docker and Kubernetes from scratch. Containerize apps, manage clusters, and deploy to the cloud.",
    bullets: ["Build and manage Docker containers and multi-container apps","Deploy and scale applications with Kubernetes","Set up CI/CD pipelines with Docker and GitHub Actions","Manage persistent storage, networking, and secrets in K8s"],
  },
  {
    id: 16, title: "Cybersecurity for Beginners: Zero to Hero 2026",
    author: "Nathan House", image: "/6100015_1979_5.jpg",
    badge: "New", badgeType: "new", rating: "4.6", ratingCount: "18,340 ratings",
    price: "$54.99", updated: "August 2026", hours: "32 total hours", level: "Beginner",
    category: "Cloud & DevOps",
    description: "Learn cybersecurity from scratch. Ethical hacking, penetration testing, and network security fundamentals.",
    bullets: ["Perform ethical hacking and penetration testing on real systems","Learn network security, firewalls, and intrusion detection","Use Kali Linux, Metasploit, and Wireshark like a pro","Prepare for CompTIA Security+ and CEH certifications"],
  },
  {
    id: 17, title: "Microsoft Excel - Excel from Beginner to Advanced 2026",
    author: "Kyle Pew - 2,000,000+ Students", image: "/6969229_ff40_2.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.7", ratingCount: "542,229 ratings",
    price: "$59.99", updated: "April 2026", hours: "19 total hours", level: "All Levels",
    category: "Business Tools",
    description: "Master Microsoft Excel from the basics to advanced formulas, pivot tables, and data visualization.",
    bullets: ["Learn 150+ Excel functions including VLOOKUP, INDEX, MATCH","Build dynamic dashboards and interactive reports","Master Pivot Tables and Pivot Charts for data analysis","Automate repetitive tasks using Excel Macros and VBA"],
  },
  {
    id: 18, title: "The Complete Digital Marketing Course - 12 Courses in 1",
    author: "Rob Percival, Daragh Walsh", image: "/6969223_f9ac_3.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.5", ratingCount: "203,147 ratings",
    price: "$49.99", updated: "March 2026", hours: "23 total hours", level: "Beginner",
    category: "Business Tools",
    description: "Master digital marketing with SEO, social media, email marketing, Google Ads, and analytics.",
    bullets: ["Run profitable Google Ads and Facebook Ads campaigns","Optimize websites for SEO and rank on Google","Build email marketing funnels that convert subscribers","Analyze marketing data with Google Analytics 4"],
  },
  {
    id: 19, title: "Graphic Design Masterclass: Learn GREAT Design",
    author: "Lindsay Marsh", image: "/6969231_51c2_2.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.7", ratingCount: "93,421 ratings",
    price: "$44.99", updated: "June 2026", hours: "27 total hours", level: "Beginner",
    category: "Business Tools",
    description: "Learn to design logos, social media graphics, posters, and brand identities like a professional.",
    bullets: ["Master Photoshop, Illustrator, and Canva for design","Create professional logos and brand identity systems","Design social media graphics that drive engagement","Apply typography, color theory, and composition principles"],
  },
  {
    id: 20, title: "iOS & Swift: The Complete iOS App Development Bootcamp",
    author: "Dr. Angela Yu, Developer and Lead Instructor", image: "/6969213_4dde_2.jpg",
    badge: "Bestseller", badgeType: "bestseller", rating: "4.8", ratingCount: "98,762 ratings",
    price: "$74.99", updated: "July 2026", hours: "55 total hours", level: "Beginner",
    category: "Programming",
    description: "From beginner to iOS developer - learn Swift, SwiftUI, UIKit, and build 25+ real apps.",
    bullets: ["Build real iOS apps with Swift and SwiftUI from scratch","Master UIKit, navigation, and table views","Integrate Firebase, REST APIs, and Core Data","Publish your app to the Apple App Store"],
  },
];

const CATEGORIES = ["All", "AI & Agents", "Programming", "Data Science", "Cloud & DevOps", "Business Tools"];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = allCourses.filter((c) => {
    const matchCat = activeCategory === "All" || c.category === activeCategory;
    const matchSearch =
      search.trim() === "" ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.author.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-[200px] pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Link href="/" className="text-[#1D4ED8] hover:underline text-sm font-medium">Home</Link>
              <span className="text-gray-400 text-sm">/</span>
              <span className="text-gray-600 text-sm">All Courses</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d1f] tracking-tight mb-2">All Courses</h1>
            <p className="text-gray-500 text-base">{allCourses.length} courses available</p>
          </div>

          <div className="relative mb-6 max-w-xl">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors duration-150 ${
                  activeCategory === cat
                    ? "bg-[#1D4ED8] text-white border-[#1D4ED8]"
                    : "bg-white text-[#1c1d1f] border-gray-300 hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-5">
            Showing <span className="font-semibold text-[#1c1d1f]">{filtered.length}</span> result{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && <> in <span className="font-semibold text-[#1D4ED8]">{activeCategory}</span></>}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-gray-500 text-lg font-medium">No courses found</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="mt-4 px-5 py-2 bg-[#1D4ED8] text-white text-sm font-semibold rounded-md hover:bg-[#1e40af] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <EditorialFooter />
    </>
  );
}