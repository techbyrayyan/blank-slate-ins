import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import Logo from "./Logo";
import { LinkedinIcon, YoutubeIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialIcons";
import { instituteInfo, navLinks, coursesData } from "@/data/instituteData";

export default function Footer() {
  return (
    <footer className="bg-[#050507] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden" aria-label="Site Footer">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#8E0E25]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              BlankSlate Institute empowers students with modern technology mastery, industry-focused engineering, and practical career readiness.
            </p>
            <div className="pt-2 flex items-center space-x-2.5">
              {[
                { icon: LinkedinIcon, href: instituteInfo.socials.linkedin, label: "LinkedIn" },
                { icon: YoutubeIcon, href: instituteInfo.socials.youtube, label: "YouTube" },
                { icon: TwitterIcon, href: instituteInfo.socials.twitter, label: "Twitter" },
                { icon: FacebookIcon, href: instituteInfo.socials.facebook, label: "Facebook" },
                { icon: InstagramIcon, href: instituteInfo.socials.instagram, label: "Instagram" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:bg-[#8E0E25] hover:border-[#B81134] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                    aria-label={item.label}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#8E0E25] opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Courses */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Top Courses</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {coursesData.slice(0, 4).map((c) => (
                <li key={c.id}>
                  <Link
                    href="/courses"
                    className="text-gray-400 hover:text-white transition-colors block line-clamp-1 hover:translate-x-0.5 transform duration-150"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Campus Info</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#B81134] flex-shrink-0 mt-0.5" />
                <span>{instituteInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#B81134] flex-shrink-0" />
                <a href={`tel:${instituteInfo.phone}`} className="hover:text-white transition-colors">
                  {instituteInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#B81134] flex-shrink-0" />
                <a href={`mailto:${instituteInfo.email}`} className="hover:text-white transition-colors">
                  {instituteInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 BlankSlate Institute. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/courses" className="hover:text-white transition-colors">Curriculum</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
