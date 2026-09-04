"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10 tracking-tight">
            Explore top skills and certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-x-12 lg:gap-y-12">
            {SKILLS_DIRECTORY.map((col, idx) => (
              <div key={idx} className="space-y-3.5">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {col.title}
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-[15px] text-gray-200 font-medium">
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
      <div className="bg-[#202230] text-gray-100 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-16 border-b border-white/10">

            {/* 1. ABOUT */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white">About</h3>
              <ul className="space-y-3 text-sm sm:text-[15px] font-medium text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors block">About us</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors block">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors block">Contact us</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors block">Blog</Link></li>
              </ul>
            </div>

            {/* 2. DISCOVER BLANKSLATE */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white">Discover BlankSlate</h3>
              <ul className="space-y-3 text-sm sm:text-[15px] font-medium text-gray-300">
                <li><Link href="/courses" className="hover:text-white transition-colors block">Get the app</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors block">Teach on BlankSlate</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors block">Plans and Pricing</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors block">Affiliate</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors block">Help and Support</Link></li>
              </ul>
            </div>

            {/* 3. BUSINESS & LEGAL */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-white">BlankSlate for Business</h3>
                <ul className="space-y-2.5 text-sm sm:text-[15px] font-medium text-gray-300">
                  <li><Link href="/courses" className="hover:text-white transition-colors block">BlankSlate Business</Link></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-white">Legal &amp; Accessibility</h3>
                <ul className="space-y-2.5 text-sm sm:text-[15px] font-medium text-gray-300">
                  <li><Link href="/terms" className="hover:text-white transition-colors block">Accessibility statement</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors block">Privacy policy</Link></li>
                  <li><Link href="/courses" className="hover:text-white transition-colors block">Sitemap</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors block">Terms</Link></li>
                </ul>
              </div>
            </div>

            {/* 4. CONTACT */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white">Contact</h3>
              <div className="space-y-3.5 text-sm sm:text-[15px] text-gray-300 font-medium">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">First Floor: 236 Badar Block Allama Iqbal Town Main Multan Road Lahore.</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+923320901442" className="hover:text-white transition-colors">+92 332 0901442</a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@blankslateinstitute.pk" className="hover:text-white transition-colors">info@blankslateinstitute.pk</a>
                </p>
                <p className="flex items-start gap-3 pt-1">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Logo (Left), Copyright (Center), Social Icons (Right) */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            {/* Left: Logo */}
            <div className="flex items-center justify-center md:justify-start">
              <Link href="/" className="inline-flex items-center hover:opacity-90 transition-opacity">
                <img
                  src="/new logo.png"
                  alt="BlankSlate - Empowered by Innovation"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Center: Copyright */}
            <div className="text-center text-sm sm:text-base font-medium text-gray-400">
              <p>© 2026 BlankSlate Institute. All Rights Reserved.</p>
            </div>

            {/* Right: Social Media Icons */}
            <div className="flex items-center justify-center md:justify-end space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all shadow-sm"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
