"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Search, Mail, Phone, Globe } from "lucide-react";
import Logo from "./Logo";
import SearchModal from "./SearchModal";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Inside BlankSlate", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Faculty", href: "/faculty" },
  { name: "Admissions", href: "/admissions" },
];

const languages = [
  { name: "English",          code: "en"    },
  { name: "اردو",             code: "ur"    },
  { name: "العربية",          code: "ar"    },
  { name: "Deutsch",          code: "de"    },
  { name: "Español",          code: "es"    },
  { name: "Français",         code: "fr"    },
  { name: "Bahasa Indonesia", code: "id"    },
  { name: "Italiano",         code: "it"    },
  { name: "日本語",            code: "ja"    },
  { name: "한국어",            code: "ko"    },
  { name: "Nederlands",       code: "nl"    },
  { name: "Polski",           code: "pl"    },
  { name: "Português",        code: "pt"    },
  { name: "Română",           code: "ro"    },
  { name: "Русский",          code: "ru"    },
  { name: "ภาษาไทย",          code: "th"    },
  { name: "Türkçe",           code: "tr"    },
  { name: "Tiếng Việt",       code: "vi"    },
  { name: "中文(简体)",         code: "zh-CN" },
  { name: "中文(繁體)",         code: "zh-TW" },
];

export default function Navbar({ onOpenApply }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [langModalOpen, setLangModalOpen]     = useState(false);
  const [currentLang, setCurrentLang]         = useState("en");
  const [isScrolled, setIsScrolled]           = useState(false);
  const modalRef = useRef(null);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language modal on outside click
  useEffect(() => {
    if (!langModalOpen) return;
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setLangModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [langModalOpen]);

  const changeLang = (code) => {
    setCurrentLang(code);
    setLangModalOpen(false);
    if (code === "en") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      if (typeof window !== "undefined" && window.location.hostname) {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
      }
      const select = document.querySelector(".goog-te-combo");
      if (select) { select.value = ""; select.dispatchEvent(new Event("change")); }
      return;
    }
    document.cookie = `googtrans=/en/${code}; path=/;`;
    if (typeof window !== "undefined" && window.location.hostname) {
      document.cookie = `googtrans=/en/${code}; path=/; domain=.${window.location.hostname};`;
    }
    const select = document.querySelector(".goog-te-combo");
    if (select) { select.value = code; select.dispatchEvent(new Event("change")); }
  };

  const currentLangName = languages.find(l => l.code === currentLang)?.name || "English";

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 bg-white">
        <header className="bg-white">
          <div className={`bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-gray-200 border-b border-blue-900/50 overflow-hidden transition-all duration-400 ease-in-out ${
            isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-16 opacity-100"
          }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-6 flex-wrap">
                <a href="mailto:blankslateinstitute1@gmail.com"
                  className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium hidden sm:inline">blankslateinstitute1@gmail.com</span>
                  <span className="text-sm font-medium sm:hidden">Email Us</span>
                </a>
                <span className="hidden sm:inline text-blue-400/40">|</span>
                <a href="tel:+9235746486463"
                  className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">+92 35746486463</span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors p-1.5" aria-label="Facebook">
                  <FacebookIcon className="w-4 h-4 text-white" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors p-1.5" aria-label="LinkedIn">
                  <LinkedinIcon className="w-4 h-4 text-white" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors p-1.5" aria-label="Instagram">
                  <InstagramIcon className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className={`bg-white border-b border-gray-200 overflow-hidden transition-all duration-400 ease-in-out ${
            isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-28 opacity-100"
          }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center gap-6">
              <div className="flex-shrink-0">
                <Logo variant="dark" size="lg" />
              </div>
              <div className="flex-1 hidden md:flex max-w-2xl">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <button onClick={() => setSearchModalOpen(true)}
                    className="w-full pl-12 pr-5 py-3 text-sm bg-gray-50 border border-gray-300 rounded-full text-left text-gray-400 hover:border-gray-500 transition-all">
                    Search for anything...
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-auto">
                <Link href="/student-portal"
                  className="hidden lg:inline-flex text-sm font-semibold text-gray-700 hover:text-[#1e3a8a] transition-colors px-2 whitespace-nowrap">
                  Student Portal
                </Link>
                <button onClick={() => setSearchModalOpen(true)}
                  className="md:hidden p-2.5 text-gray-700 hover:text-[#1e3a8a] transition-colors" aria-label="Search">
                  <Search className="w-5 h-5" />
                </button>
                <Link href="/student-portal"
                  className="relative hidden sm:inline-flex items-center overflow-hidden px-5 py-2.5 text-sm font-bold border border-[#1e3a8a] rounded whitespace-nowrap group">
                  <span className="absolute inset-0 bg-[#1e3a8a] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 text-[#1e3a8a] group-hover:text-white transition-colors duration-300">Log in</span>
                </Link>
                <button onClick={onOpenApply}
                  className="relative hidden sm:inline-flex items-center justify-center overflow-hidden px-5 py-2.5 text-sm font-bold border border-[#1e3a8a] rounded whitespace-nowrap group">
                  <span className="absolute inset-0 bg-[#1e3a8a]" />
                  <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 text-white group-hover:text-[#1e3a8a] transition-colors duration-300">Sign up</span>
                </button>
                <button onClick={() => setLangModalOpen((v) => !v)}
                  className="hidden sm:flex items-center justify-center w-10 h-10 border border-[#1e3a8a] rounded hover:bg-[#1e3a8a] hover:text-white text-[#1e3a8a] transition-all duration-200"
                  aria-label="Choose language">
                  <Globe className="w-5 h-5" />
                </button>
                <button onClick={() => setMobileMenuOpen(true)}
                  className="xl:hidden p-2.5 text-gray-900 hover:text-[#1e3a8a] rounded transition-colors" aria-label="Open menu">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5 flex items-center justify-between gap-4">
              
              {/* Left side: Logo on scroll only (hidden by default when not scrolled) */}
              <div className="hidden xl:flex items-center flex-shrink-0">
                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  isScrolled ? "max-w-[260px] opacity-100 mr-4" : "max-w-0 opacity-0 pointer-events-none mr-0"
                }`}>
                  <Logo variant="dark" size="lg" />
                </div>
              </div>

              {/* Center: Nav links */}
              <div className="hidden xl:flex flex-1 items-center justify-center gap-2 flex-wrap">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                        isActive
                          ? "text-[#1e3a8a] bg-blue-50 font-bold"
                          : "text-gray-700 hover:text-[#1e3a8a] hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Right side: Let's Talk CTA button */}
              <div className="hidden xl:flex items-center flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1e3a8a] hover:bg-[#152e72] text-white text-sm font-bold rounded-xl shadow-md transition-all group cursor-pointer"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Mobile: logo + menu button */}
              <div className="flex xl:hidden items-center justify-between w-full">
                <div className={`overflow-hidden transition-all duration-300 ${isScrolled ? "max-w-[160px] opacity-100" : "max-w-0 opacity-0"}`}>
                  <Logo variant="dark" size="sm" />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${!isScrolled ? "max-w-[160px] opacity-100" : "max-w-0 opacity-0"}`}>
                  <Logo variant="dark" size="sm" />
                </div>
                <button onClick={() => setMobileMenuOpen(true)}
                  className="p-2 text-gray-900 hover:text-[#1e3a8a] rounded" aria-label="Open navigation menu">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* ── Language Popup Modal ── */}
      {langModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative animate-in fade-in zoom-in-95 duration-200">
            <button onClick={() => setLangModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Choose a language</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
              {languages.map((lang) => (
                <button key={lang.code} onClick={() => changeLang(lang.code)}
                  className={`text-left text-sm py-1.5 px-3 rounded transition-colors ${
                    currentLang === lang.code
                      ? "text-[#1D4ED8] border border-[#1D4ED8] font-semibold bg-[#1D4ED8]/5"
                      : "text-[#3B82F6] hover:text-[#1D4ED8] hover:bg-gray-50"
                  }`}>
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white text-gray-900 flex flex-col p-6 sm:p-10 overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-gray-200">
            <Logo variant="dark" size="md" />
            <button onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-black rounded-full bg-gray-100" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-5 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <button onClick={() => { setMobileMenuOpen(false); setSearchModalOpen(true); }}
              className="w-full pl-11 pr-5 py-3 text-sm text-left bg-gray-100 rounded-full text-gray-400">
              Search for anything...
            </button>
          </div>
          <nav className="space-y-4 mt-8 flex-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}
                  className={`block text-2xl sm:text-3xl font-black transition-colors ${
                    isActive ? "text-[#1D4ED8]" : "text-gray-900 hover:text-[#1D4ED8]"
                  }`}>
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-6 border-t border-gray-200 space-y-4 mt-6">
            <div className="flex flex-col gap-3 text-sm text-gray-600 font-medium">
              <a href="mailto:blankslateinstitute1@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-[#1D4ED8] transition-colors">
                <Mail className="w-4 h-4 text-[#1D4ED8]" />
                <span>blankslateinstitute1@gmail.com</span>
              </a>
              <a href="tel:+9235746486463"
                className="flex items-center gap-2 text-gray-700 hover:text-[#1D4ED8] transition-colors">
                <Phone className="w-4 h-4 text-[#1D4ED8]" />
                <span>+92 35746486463</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1D4ED8] hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1D4ED8] hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1D4ED8] hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
            <button onClick={() => { setMobileMenuOpen(false); setLangModalOpen(true); }}
              className="flex items-center gap-2 text-sm font-semibold text-[#1D4ED8] border border-[#1D4ED8] rounded px-4 py-2.5 hover:bg-[#1D4ED8] hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
              <span>{currentLangName}</span>
            </button>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}
                className="w-full sm:w-auto px-6 py-3 bg-[#1e3a8a] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#152e72] transition-all shadow-md">
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button onClick={() => { setMobileMenuOpen(false); onOpenApply(); }}
                className="w-full sm:w-auto px-6 py-3 border border-[#1D4ED8] text-[#1D4ED8] text-sm font-bold rounded-xl hover:bg-blue-50 transition-all">
                Sign Up
              </button>
            </div>
            <p className="text-xs text-gray-400 font-mono pt-2">© 2026 BlankSlate Institute</p>
          </div>
        </div>
      )}
    </>
  );
}
