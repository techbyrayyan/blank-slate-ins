"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "./Logo";
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

export default function EditorialFooter() {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-gray-200">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="md" />
            <p className="text-xs text-gray-600 font-medium">
              Education for what&apos;s next.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-gray-300 hover:border-[#E50914] hover:bg-[#E50914] flex items-center justify-center text-gray-600 hover:text-white transition-all shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-gray-300 hover:border-[#E50914] hover:bg-[#E50914] flex items-center justify-center text-gray-600 hover:text-white transition-all shadow-sm"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-gray-300 hover:border-[#E50914] hover:bg-[#E50914] flex items-center justify-center text-gray-600 hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-gray-300 hover:border-[#E50914] hover:bg-[#E50914] flex items-center justify-center text-gray-600 hover:text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="/" className="hover:text-[#E50914] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#E50914] transition-colors">About</Link></li>
              <li><Link href="/programs" className="hover:text-[#E50914] transition-colors">Programs</Link></li>
              <li><Link href="/admissions" className="hover:text-[#E50914] transition-colors">Admissions</Link></li>
              <li><Link href="/faculty" className="hover:text-[#E50914] transition-colors">Faculty</Link></li>
              <li><Link href="/events" className="hover:text-[#E50914] transition-colors">Events</Link></li>
              <li><Link href="/blog" className="hover:text-[#E50914] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#E50914] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900">
              Programs
            </h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="/programs/computer-science" className="hover:text-[#E50914] transition-colors">Computer Science</Link></li>
              <li><Link href="/programs/artificial-intelligence" className="hover:text-[#E50914] transition-colors">Artificial Intelligence</Link></li>
              <li><Link href="/programs/full-stack-development" className="hover:text-[#E50914] transition-colors">Web Development</Link></li>
              <li><Link href="/programs/business-management" className="hover:text-[#E50914] transition-colors">Business & Management</Link></li>
              <li><Link href="/programs/digital-marketing" className="hover:text-[#E50914] transition-colors">Digital Marketing</Link></li>
              <li><Link href="/programs/uiux-design" className="hover:text-[#E50914] transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900">
              Contact
            </h3>
            <div className="space-y-2 text-xs text-gray-600">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0 mt-0.5" />
                <span>123 Education Lane, Lahore, Pakistan</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" />
                <span>+92 42 111 222 333</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" />
                <span>info@blankslate.edu.pk</span>
              </p>
              <p className="flex items-start gap-1.5 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0 mt-0.5" />
                <span>Office Hours: Mon - Fri: 9:00 AM - 5:00 PM</span>
              </p>
            </div>
          </div>

          {/* Newsletter (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900">
              Newsletter
            </h3>
            <p className="text-xs text-gray-600">
              Stay updated with our latest programs, events and news.
            </p>
            <div className="flex items-center bg-white border border-gray-300 rounded-full p-1 focus-within:border-[#E50914] shadow-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 text-xs text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              <button
                className="w-7 h-7 rounded-full bg-[#E50914] text-white flex items-center justify-center hover:bg-[#B91C1C] transition-colors flex-shrink-0"
                aria-label="Submit newsletter"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© 2026 BlankSlate Institute. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gray-900">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/cookies" className="hover:text-gray-900">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
