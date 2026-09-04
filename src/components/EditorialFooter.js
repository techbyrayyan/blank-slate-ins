"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "./Logo";
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

const SKILLS_DIRECTORY = [
  {
    title: "In-demand Careers",
    items: [
      { name: "Data Scientist", href: "/topic/data-science" },
      { name: "Full Stack Web Developer", href: "/topic/full-stack" },
      { name: "Cloud Engineer", href: "/topic/amazon-aws" },
      { name: "Project Manager", href: "/courses" },
      { name: "Game Developer", href: "/courses" },
      { name: "All Career Accelerators", href: "/courses" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "Web Development", href: "/topic/full-stack" },
      { name: "JavaScript", href: "/topic/full-stack" },
      { name: "React JS", href: "/topic/full-stack" },
      { name: "Angular", href: "/topic/full-stack" },
      { name: "Java", href: "/topic/full-stack" },
    ],
  },
  {
    title: "IT Certifications",
    items: [
      { name: "Amazon AWS", href: "/topic/amazon-aws" },
      { name: "AWS Certified Cloud Practitioner", href: "/topic/amazon-aws" },
      { name: "AZ-900: Microsoft Azure Fundamentals", href: "/topic/amazon-aws" },
      { name: "AWS Certified Solutions Architect - Associate", href: "/topic/amazon-aws" },
      { name: "Kubernetes", href: "/topic/amazon-aws" },
    ],
  },
  {
    title: "Leadership",
    items: [
      { name: "Leadership", href: "/courses" },
      { name: "Management Skills", href: "/courses" },
      { name: "Project Management", href: "/courses" },
      { name: "Personal Productivity", href: "/courses" },
      { name: "Emotional Intelligence", href: "/courses" },
    ],
  },
  {
    title: "Certifications by Skill",
    items: [
      { name: "Cybersecurity Certification", href: "/courses" },
      { name: "Project Management Certification", href: "/courses" },
      { name: "Cloud Certification", href: "/topic/amazon-aws" },
      { name: "Data Analytics Certification", href: "/topic/data-science" },
      { name: "HR Management Certification", href: "/courses" },
      { name: "See all Certifications", href: "/courses" },
    ],
  },
  {
    title: "Data Science",
    items: [
      { name: "Data Science", href: "/topic/data-science" },
      { name: "Python", href: "/topic/python" },
      { name: "Machine Learning", href: "/topic/ai-agents" },
      { name: "ChatGPT", href: "/topic/ai-agents" },
      { name: "Deep Learning", href: "/topic/ai-agents" },
    ],
  },
  {
    title: "Communication",
    items: [
      { name: "Communication Skills", href: "/courses" },
      { name: "Presentation Skills", href: "/courses" },
      { name: "Public Speaking", href: "/courses" },
      { name: "Writing", href: "/courses" },
      { name: "PowerPoint", href: "/courses" },
    ],
  },
  {
    title: "Business Analytics & Intelligence",
    items: [
      { name: "Microsoft Excel", href: "/topic/excel" },
      { name: "SQL", href: "/topic/data-science" },
      { name: "Microsoft Power BI", href: "/topic/data-science" },
      { name: "Data Analysis", href: "/topic/data-science" },
      { name: "Business Analysis", href: "/courses" },
    ],
  },
];

export default function EditorialFooter() {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
      {/* ── TOP PRE-FOOTER: Explore Top Skills and Certifications (Udemy Style Directory) ── */}
      <section className="bg-[#2a2b3f] text-white py-14 sm:py-16 border-b border-[#3b3c54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-10 tracking-tight">
            Explore top skills and certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-x-12 lg:gap-y-12">
            {SKILLS_DIRECTORY.map((col, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-[15px] font-bold text-white tracking-tight">
                  {col.title}
                </h3>
                <ul className="space-y-2 text-xs sm:text-[13px] text-gray-300">
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        className="hover:text-white hover:underline transition-colors block leading-relaxed"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN FOOTER ── */}
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-gray-200">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="lg" />
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Education for what&apos;s next. Empowered by innovation.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-300 hover:border-[#1D4ED8] hover:bg-[#1D4ED8] flex items-center justify-center text-gray-600 hover:text-white transition-all shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-300 hover:border-[#1D4ED8] hover:bg-[#1D4ED8] flex items-center justify-center text-gray-600 hover:text-white transition-all shadow-sm"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-300 hover:border-[#1D4ED8] hover:bg-[#1D4ED8] flex items-center justify-center text-gray-600 hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-300 hover:border-[#1D4ED8] hover:bg-[#1D4ED8] flex items-center justify-center text-gray-600 hover:text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-[15px] font-medium text-gray-600">
              <li><Link href="/" className="hover:text-[#1D4ED8] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#1D4ED8] transition-colors">About</Link></li>
              <li><Link href="/courses" className="hover:text-[#1D4ED8] transition-colors">Courses</Link></li>
              <li><Link href="/admissions" className="hover:text-[#1D4ED8] transition-colors">Admissions</Link></li>
              <li><Link href="/faculty" className="hover:text-[#1D4ED8] transition-colors">Faculty</Link></li>
              <li><Link href="/events" className="hover:text-[#1D4ED8] transition-colors">Events</Link></li>
              <li><Link href="/blog" className="hover:text-[#1D4ED8] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#1D4ED8] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900">
              Programs
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-[15px] font-medium text-gray-600">
              <li><Link href="/topic/ai" className="hover:text-[#1D4ED8] transition-colors">Artificial Intelligence</Link></li>
              <li><Link href="/topic/python" className="hover:text-[#1D4ED8] transition-colors">Python Bootcamp</Link></li>
              <li><Link href="/topic/ai-agents" className="hover:text-[#1D4ED8] transition-colors">AI Agents & MCP</Link></li>
              <li><Link href="/topic/excel" className="hover:text-[#1D4ED8] transition-colors">Microsoft Excel</Link></li>
              <li><Link href="/topic/digital-marketing" className="hover:text-[#1D4ED8] transition-colors">Digital Marketing</Link></li>
              <li><Link href="/topic/amazon-aws" className="hover:text-[#1D4ED8] transition-colors">Amazon AWS</Link></li>
            </ul>
          </div>

          {/* Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900">
              Contact
            </h3>
            <div className="space-y-3 text-sm sm:text-[15px] text-gray-600 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1D4ED8] flex-shrink-0 mt-0.5" />
                <span>First Floor: 236 Badar Block Allama Iqbal Town Main Multan Road Lahore.</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
                <a href="tel:+923320901442" className="hover:text-[#1D4ED8] transition-colors">
                  +92 332 0901442
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
                <a href="mailto:info@blankslateinstitute.pk" className="hover:text-[#1D4ED8] transition-colors">
                  info@blankslateinstitute.pk
                </a>
              </p>
              <p className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#1D4ED8] flex-shrink-0 mt-0.5" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </p>
            </div>
          </div>

          {/* Newsletter (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900">
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              Stay updated with our latest programs, events and news.
            </p>
            <div className="flex items-center bg-white border border-gray-300 rounded-full p-1.5 focus-within:border-[#1D4ED8] shadow-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3.5 py-1 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              <button
                className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center hover:bg-[#152e72] transition-all flex-shrink-0 shadow-sm"
                aria-label="Submit newsletter"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-600">
          <p>© 2026 BlankSlate Institute. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="hover:text-[#1D4ED8] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#1D4ED8] transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/cookies" className="hover:text-[#1D4ED8] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
}
