// BlankSlate Institute — Comprehensive 2026 Editorial Central Data Store

export const instituteInfo = {
  name: "BlankSlate Institute",
  tagline: "Shape Your Future. Build What’s Next.",
  description:
    "Empowering the next generation of engineers and tech founders with production-grade AI, Full-Stack, and Computing mastery.",
  foundedYear: 2016,
  address: "First Floor: 236 Badar Block Allama Iqbal Town Main Multan Road Lahore.",
  phone: "+92 332 0901442",
  admissionsPhone: "+92 332 0901442",
  email: "info@blankslateinstitute.pk",
  supportEmail: "info@blankslateinstitute.pk",
  officeHours: "Monday – Saturday: 9:00 AM – 6:00 PM (PKT)",
  stats: [
    { label: "Students Enrolled", value: "500+", suffix: "+" },
    { label: "Active Programs", value: "20+", suffix: "+" },
    { label: "Expert Faculty", value: "25+", suffix: "+" },
    { label: "Student Satisfaction", value: "95%", suffix: "%" },
    { label: "Years of Excellence", value: "10+", suffix: "+" },
  ],
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
};

export const navLinks = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Admissions", href: "/admissions" },
  { name: "Faculty", href: "/faculty" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Events", href: "/events" },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const programsData = [
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    category: "Web & Software",
    featured: true,
    badge: "Most Popular",
    shortDesc:
      "Master modern frontend and backend architectures with React 19, Next.js 16, Node.js, PostgreSQL, and cloud deployments.",
    duration: "6 Months",
    level: "Beginner → Advanced",
    mode: "On Campus / Online",
    certification: "Diploma in Full Stack Engineering",
    tuition: "$3,200",
    startDate: "October 15, 2026",
    seatsLeft: 8,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    overview:
      "Engineered to transform aspiring builders into production-ready software engineers. You will learn modern full-stack workflows from core algorithms to containerized cloud architectures.",
    highlights: [
      "Architect and build robust enterprise web applications from scratch.",
      "Master React 19, Next.js App Router, Server Components, and State Management.",
      "Design scalable RESTful and GraphQL APIs with Node.js and PostgreSQL/Prisma.",
      "Deploy scalable microservices using Docker, GitHub Actions CI/CD, and Vercel/AWS.",
    ],
    curriculum: [
      { module: "Module 01: Modern Web Foundations", topics: ["HTML5 & Tailwind CSS v4", "JavaScript ES6+ & Async/Await", "DOM & Browser APIs"] },
      { module: "Module 02: Advanced React & Next.js", topics: ["React Hooks & Architecture", "Next.js App Router & SSR", "State Management (Zustand)"] },
      { module: "Module 03: Backend & Databases", topics: ["Node.js & Express Engines", "PostgreSQL & Prisma ORM", "OAuth2 & JWT Auth"] },
      { module: "Module 04: DevOps & Cloud Capstone", topics: ["Docker & Microservices", "CI/CD GitHub Actions", "Production Cloud Deployment"] },
    ],
    technologies: ["React 19", "Next.js 16", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS"],
    careers: ["Full Stack Engineer", "Frontend Specialist", "Backend Developer", "Cloud Solutions Associate"],
    instructor: "Dr. Marcus Vance",
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence & ML",
    category: "AI & Data",
    featured: true,
    badge: "Trending 2026",
    shortDesc:
      "Deep neural networks, large language models (LLMs), autonomous AI agents, computer vision, and production RAG pipelines.",
    duration: "8 Months",
    level: "Intermediate → Advanced",
    mode: "On Campus / Online",
    certification: "Certified AI Engineer",
    tuition: "$4,100",
    startDate: "October 20, 2026",
    seatsLeft: 6,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    overview:
      "Construct, fine-tune, and deploy state-of-the-art AI systems, ranging from predictive ML pipelines to generative agent architectures and custom LLMs.",
    highlights: [
      "Implement machine learning algorithms from scratch using Python and PyTorch.",
      "Fine-tune Large Language Models (LLMs) and build production RAG systems.",
      "Develop autonomous AI agents equipped with deterministic tool execution.",
      "Deploy low-latency AI microservices with GPU optimization.",
    ],
    curriculum: [
      { module: "Module 01: Math & Classical ML", topics: ["Linear Algebra & Calculus", "Supervised & Unsupervised ML", "Feature Engineering"] },
      { module: "Module 02: Deep Learning & Vision", topics: ["PyTorch Core & Neural Nets", "CNNs & Transformers", "Attention Mechanisms"] },
      { module: "Module 03: Agentic AI & LLMs", topics: ["LLM Fine-Tuning (LoRA)", "RAG & Vector Databases", "Multi-Agent Workflows"] },
    ],
    technologies: ["Python", "PyTorch", "Hugging Face", "LangChain", "OpenAI APIs", "Vector DBs", "CUDA"],
    careers: ["AI Research Engineer", "Machine Learning Specialist", "NLP Engineer", "Prompt & Agent Architect"],
    instructor: "Dr. Aris Thorne",
  },
  {
    slug: "computer-science",
    title: "Core Computer Science",
    category: "Core Computing",
    featured: false,
    badge: "Accredited",
    shortDesc:
      "Algorithms, data structures, computer architecture, distributed systems, operating systems, and systems programming.",
    duration: "12 Months",
    level: "Intermediate → Advanced",
    mode: "On Campus",
    certification: "Diploma in Computer Science",
    tuition: "$5,400",
    startDate: "November 1, 2026",
    seatsLeft: 12,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    overview:
      "Deep dive into the theoretical and engineering pillars of computer science. Master data structures, algorithmic complexity, and distributed networks.",
    highlights: [
      "Master algorithmic analysis and Big-O computational problem solving.",
      "Systems programming and memory management in C++ and Rust.",
      "Design distributed, fault-tolerant database architectures.",
    ],
    curriculum: [
      { module: "Module 01: Data Structures & Algorithms", topics: ["Trees, Graphs & Heaps", "Dynamic Programming", "Algorithmic Complexity"] },
      { module: "Module 02: Systems Programming", topics: ["CPU & Memory Hierarchy", "Operating Systems Internals", "C++ Low-Level Engineering"] },
      { module: "Module 03: Distributed Networks", topics: ["Distributed Consensus", "System Design at Scale", "Cryptography & Security"] },
    ],
    technologies: ["C++", "Rust", "Linux", "Distributed DBs", "Git", "Assembly"],
    careers: ["Systems Engineer", "Backend Infrastructure Architect", "Algorithm Specialist"],
    instructor: "Prof. Eleanor Davis",
  },
  {
    slug: "graphic-uiux-design",
    title: "Graphic & UI/UX Design",
    category: "Design & Creative",
    featured: true,
    badge: "Portfolio Focused",
    shortDesc:
      "Design systems, UX research, wireframing, interactive Figma prototyping, brand typography, and digital product experience.",
    duration: "5 Months",
    level: "Beginner → Advanced",
    mode: "On Campus / Online",
    certification: "Certified UI/UX Designer",
    tuition: "$2,800",
    startDate: "October 22, 2026",
    seatsLeft: 9,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    overview:
      "Learn to design intuitive, aesthetically mesmerizing digital products. Master Figma components, tokenization, user research, and interactive motion design.",
    highlights: [
      "Master Figma, design tokens, auto-layout, and scalable design systems.",
      "Conduct in-depth user interviews, usability testing, and journey mapping.",
      "Build an interactive 3-case-study portfolio ready for top design studios.",
    ],
    curriculum: [
      { module: "Module 01: Visual Foundations", topics: ["Typography & Color Theory", "Design Systems & Tokenization", "Visual Branding"] },
      { module: "Module 02: UX Research", topics: ["User Personas & Journey Maps", "Information Architecture", "Usability Testing (WCAG)"] },
      { module: "Module 03: Prototyping & Portfolio", topics: ["Interactive Figma Components", "Micro-interactions", "Live Portfolio Showcase"] },
    ],
    technologies: ["Figma", "FigJam", "Adobe Suite", "Framer", "Design Tokens", "Lottie"],
    careers: ["Product Designer", "UI/UX Designer", "Design Systems Lead", "Brand Strategist"],
    instructor: "Tariq Mansoor",
  },
  {
    slug: "business-management",
    title: "Tech Business & Product",
    category: "Business & Strategy",
    featured: false,
    badge: "Executive",
    shortDesc:
      "Product management, venture financing, unit economics, Agile leadership, and go-to-market strategy for tech startups.",
    duration: "6 Months",
    level: "All Levels",
    mode: "Hybrid",
    certification: "Certificate in Tech Leadership",
    tuition: "$2,900",
    startDate: "October 28, 2026",
    seatsLeft: 10,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    overview:
      "Equip yourself with the tactical, financial, and strategic toolkit required to launch scalable startups or lead high-growth tech business units.",
    highlights: [
      "Construct comprehensive business models, financial forecasts, and pitch decks.",
      "Execute market research, product-market fit analysis, and customer discovery.",
      "Lead cross-functional teams with modern Agile and OKR frameworks.",
    ],
    curriculum: [
      { module: "Module 01: Strategic Management", topics: ["Corporate Strategy", "High-Performance Leadership", "Agile Product Sprints"] },
      { module: "Module 02: Financial Modeling & VC", topics: ["Financial Valuation", "Fundraising & Cap Tables", "Unit Economics"] },
      { module: "Module 03: Product GTM", topics: ["Product Discovery", "Growth Loops & Viral Engines", "Investor Pitch Defense"] },
    ],
    technologies: ["Linear", "Notion", "Figma for PMs", "Power BI", "Excel Financial Models"],
    careers: ["Product Manager", "Tech Founder", "Growth Operations Lead", "Strategy Consultant"],
    instructor: "David K. Sterling",
  },
  {
    slug: "digital-marketing",
    title: "Digital Growth Marketing",
    category: "Business & Strategy",
    featured: false,
    badge: "Career Ready",
    shortDesc:
      "Performance marketing, Google & Meta paid ads, technical SEO, data analytics, conversion rate optimization, and viral loops.",
    duration: "4 Months",
    level: "Beginner → Intermediate",
    mode: "Online / Hybrid",
    certification: "Certified Growth Marketer",
    tuition: "$2,200",
    startDate: "November 5, 2026",
    seatsLeft: 16,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    overview:
      "Master data-driven marketing funnels, search engine optimization, audience segmentation, conversion rate optimization (CRO), and multi-channel attribution.",
    highlights: [
      "Run profitable performance campaigns across Google Ads, Meta, and LinkedIn.",
      "Execute technical and on-page SEO strategies to generate organic traffic.",
      "Analyze campaign performance using Google Analytics 4 and SQL dashboards.",
    ],
    curriculum: [
      { module: "Module 01: Paid Performance Ads", topics: ["Google Search & Display Ads", "Meta Ads Manager & Pixels", "Funnel Optimization"] },
      { module: "Module 02: Organic Growth & Analytics", topics: ["Technical SEO Strategy", "Email Automation Sequences", "GA4 & BigQuery Analytics"] },
    ],
    technologies: ["Google Ads", "Meta Ads", "GA4", "SEMrush", "HubSpot", "SQL"],
    careers: ["Performance Marketer", "SEO Specialist", "Digital Growth Manager"],
    instructor: "Rachel Adams",
  },
];

export const facultyMembers = [
  {
    id: 1,
    name: "Dr. Marcus Vance",
    role: "Head of Software Engineering",
    department: "Computer Science",
    bio: "Ph.D. Stanford. 14+ years engineering at Google and Meta. Creator of open-source frameworks.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    expertise: ["Full Stack", "Distributed Systems", "Cloud"],
    linkedin: "https://linkedin.com",
    email: "m.vance@blankslate.edu",
  },
  {
    id: 2,
    name: "Prof. Eleanor Davis",
    role: "Chair of Algorithms",
    department: "Computer Science",
    bio: "Former MIT Research Fellow. Renowned author on Algorithmic Optimization.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    expertise: ["Algorithms", "Systems Architecture", "C++"],
    linkedin: "https://linkedin.com",
    email: "e.davis@blankslate.edu",
  },
  {
    id: 3,
    name: "Dr. Aris Thorne",
    role: "Director, AI Innovation Lab",
    department: "Artificial Intelligence",
    bio: "Pioneered neural architecture search algorithms. Former Senior ML Scientist at DeepMind partner labs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    expertise: ["Deep Learning", "LLMs & RAG", "Autonomous Agents"],
    linkedin: "https://linkedin.com",
    email: "a.thorne@blankslate.edu",
  },
  {
    id: 4,
    name: "Tariq Mansoor",
    role: "Principal Product Designer",
    department: "Design & UX",
    bio: "12+ years designing consumer & enterprise interfaces for top Silicon Valley unicorns.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    expertise: ["Design Systems", "UX Research", "Figma"],
    linkedin: "https://linkedin.com",
    email: "t.mansoor@blankslate.edu",
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    role: "Lead Cloud Architect",
    department: "Computer Science",
    bio: "Ex-AWS Solutions Architect. Specializes in Kubernetes orchestration and distributed event-driven systems.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    expertise: ["AWS", "Kubernetes", "DevOps"],
    linkedin: "https://linkedin.com",
    email: "s.jenkins@blankslate.edu",
  },
  {
    id: 6,
    name: "David K. Sterling",
    role: "Professor of Tech Venture Strategy",
    department: "Business & Strategy",
    bio: "Serial tech founder and venture partner. Guided over 20 seed-stage technology startups to Series A funding.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    expertise: ["Venture Finance", "Product Strategy", "Growth"],
    linkedin: "https://linkedin.com",
    email: "d.sterling@blankslate.edu",
  },
];

export const blogArticles = [
  {
    slug: "architecting-autonomous-multi-agent-systems",
    title: "Beyond Single Prompts: Architecting Stateful Autonomous Multi-Agent Systems in 2026",
    category: "AI & Technology",
    date: "August 24, 2026",
    readTime: "6 min read",
    author: "Dr. Aris Thorne",
    authorRole: "Director, AI Innovation Lab",
    excerpt: "How deterministic tool execution loops, sandboxing, and test feedback mechanisms are transforming generative AI from simple chatbots to reliable engineering colleagues.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    content: `
# Beyond Single Prompts: Architecting Stateful Multi-Agent Systems

The era of single zero-shot prompt engineering is quickly coming to a close. High-performance software engineering in 2026 is defined by **autonomous multi-agent architectures** where specialized subagents collaborate, reason, execute code, and self-correct deterministically.

## 1. The Triad of Modern Agentic Workflows
Building reliable autonomous agents requires three non-negotiable architectural pillars:
- **Deterministic Sandboxed Tools**: Agents must have safe, constrained tools to view files, execute test suites, and manage subprocesses.
- **Persistent State & Trajectory Logs**: Storing chronological actions in structured transcript logs to inspect and resume state seamlessly.
- **Verification & Self-Correction Loops**: Letting the agent inspect test outputs and compiler errors to iterate on its own diffs before presenting code.

## 2. Practical Implementation with Next.js & PyTorch
At BlankSlate Institute, students build production-grade agentic frameworks that integrate directly with enterprise Next.js App Router applications and PyTorch inference pipelines.
    `,
  },
  {
    slug: "zero-bundle-size-ui-nextjs-16",
    title: "Zero-Bundle-Size UI: Server Actions and Turbopack in Next.js 16",
    category: "Programming",
    date: "August 18, 2026",
    readTime: "5 min read",
    author: "Sarah Jenkins",
    authorRole: "Lead Cloud Architect",
    excerpt: "Exploring the bleeding edge of React Server Components, server actions, and sub-10ms hot-reloads with Turbopack.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    content: `
# Zero-Bundle-Size UI in Next.js 16

Modern full-stack web applications require instant load speeds and minimal JavaScript payloads shipped to the client browser. Next.js 16 paired with React 19 brings server components and server actions to their full potential.

## Why RSC Changes Everything
By rendering components on the edge server, heavy dependencies like markdown parsers, database drivers, and cryptographic utilities never reach the client bundle.
    `,
  },
  {
    slug: "scalable-design-token-systems",
    title: "Why Scalable Design Token Systems Win in Enterprise Tech",
    category: "Design & UX",
    date: "August 10, 2026",
    readTime: "4 min read",
    author: "Tariq Mansoor",
    authorRole: "Principal Product Designer",
    excerpt: "Bridging the gap between Figma design variables and Tailwind CSS custom theme definitions for frictionless engineering handoffs.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
    content: `
# Why Scalable Design Token Systems Win

A cohesive design system is the backbone of any scalable digital product. By structuring design tokens as standardized variables across Figma and code, teams eliminate UI regressions and accelerate release cycles.
    `,
  },
];

export const upcomingEvents = [
  {
    id: 1,
    day: "12",
    month: "NOV",
    title: "Autonomous Agent Architectures & Tool Use Summit",
    time: "10:00 AM – 4:30 PM (EST)",
    location: "Main Auditorium & Live Stream",
    category: "AI Summit",
    desc: "A full-day interactive deep dive with lead AI researchers from DeepMind, Stanford, and BlankSlate on constructing stateful autonomous coding agents.",
    seats: 45,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    day: "20",
    month: "NOV",
    title: "Next.js 16 Hydration & Turbopack Workshop",
    time: "2:00 PM – 6:00 PM (EST)",
    location: "Tech Lab B4 & Online",
    category: "Web Engineering",
    desc: "Hands-on coding workshop exploring Turbopack optimizations, streaming SSR, and server action mutations in high-throughput enterprise web applications.",
    seats: 30,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    day: "05",
    month: "DEC",
    title: "Fall Technology Career & Hiring Expo 2026",
    time: "9:00 AM – 5:00 PM (EST)",
    location: "Innovation Pavilion",
    category: "Career Fair",
    desc: "Connect directly with 50+ hiring tech startups and engineering directors looking for BlankSlate graduates in software engineering, AI, and UX design.",
    seats: 120,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
  },
];

export const studentPortalData = {
  student: {
    name: "Rayyan Ansari",
    id: "BSI-2026-9042",
    program: "Full Stack Development",
    cohort: "Fall 2026",
    gpa: "3.94",
    creditsCompleted: 24,
    totalCredits: 36,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  courses: [
    { code: "CS-401", title: "Advanced React & Next.js 16 Architecture", instructor: "Dr. Marcus Vance", progress: 85, grade: "A", status: "In Progress" },
    { code: "CS-402", title: "PostgreSQL & Distributed Microservices", instructor: "Sarah Jenkins", progress: 70, grade: "A-", status: "In Progress" },
    { code: "AI-301", title: "Foundations of Neural Networks & ML", instructor: "Dr. Aris Thorne", progress: 100, grade: "A+", status: "Completed" },
  ],
  attendance: { percentage: 96, attended: 48, total: 50 },
  assignments: [
    { title: "Building a Production RAG Agent with Vector DBs", course: "AI-301", dueDate: "Oct 18, 2026", status: "Submitted", score: "98/100" },
    { title: "Distributed Authentication Engine with Prisma", course: "CS-402", dueDate: "Nov 02, 2026", status: "Pending", score: "—" },
  ],
  invoices: [
    { id: "INV-2026-001", description: "Fall 2026 Semester Tuition", amount: "$1,600", status: "Paid", date: "Aug 15, 2026" },
    { id: "INV-2026-002", description: "Spring 2027 Semester Tuition", amount: "$1,600", status: "Upcoming", date: "Jan 10, 2027" },
  ],
};

export const adminDashboardData = {
  kpis: [
    { label: "Total Active Students", value: "542", change: "+18% from last cohort" },
    { label: "Pending Applications", value: "28", change: "12 require immediate review" },
    { label: "Course Completion Rate", value: "96.4%", change: "+2.1% YoY" },
    { label: "Placement Rate (30 Days)", value: "94.8%", change: "50+ hiring partners" },
  ],
  applications: [
    { id: "APP-9821", name: "Zainab Malik", program: "Artificial Intelligence & ML", email: "zainab.m@gmail.com", date: "Today", status: "Pending" },
    { id: "APP-9822", name: "Kareem Al-Hassan", program: "Full Stack Development", email: "kareem.h@yahoo.com", date: "Yesterday", status: "Under Review" },
    { id: "APP-9823", name: "Sufyan Ahmed", program: "Graphic & UI/UX Design", email: "sufyan.ux@outlook.com", date: "Aug 25, 2026", status: "Approved" },
    { id: "APP-9824", name: "Areeba Sheikh", program: "Core Computer Science", email: "areeba.s@gmail.com", date: "Aug 24, 2026", status: "Pending" },
  ],
};

export const coursesData = programsData;
