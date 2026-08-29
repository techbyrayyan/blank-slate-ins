"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import { ArrowLeft, Share2 } from "lucide-react";
import { blogArticles } from "@/data/instituteData";

export default function BlogArticlePage({ params }) {
  const unwrappedParams = use(params);
  const { slug } = unwrappedParams;

  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const [copied, setCopied] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#1D4ED8] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => setApplyModalOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-gray-500 hover:text-[#1D4ED8] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Insights
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 mb-12"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#1D4ED8]/10 border border-[#1D4ED8]/30 text-[#1D4ED8] text-xs font-mono font-bold uppercase">
                {article.category}
              </span>
              <span className="text-xs font-mono text-gray-500">{article.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.05]">
              {article.title}
            </h1>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-y border-gray-200 py-4 text-xs font-mono text-gray-500">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 text-gray-900 flex items-center justify-center font-bold">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{article.author}</p>
                  <p className="text-gray-500 text-[11px]">{article.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span>{article.date}</span>
                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-[#1D4ED8] border border-gray-200 hover:border-[#1D4ED8] text-gray-900 hover:text-white rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? "Link Copied!" : "Share"}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl overflow-hidden shadow-xl mb-12 aspect-[16/9] bg-gray-100 border border-gray-200"
          >
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </motion.div>

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed"
          >
            <p className="text-lg sm:text-xl font-medium text-gray-900 leading-relaxed italic border-l-4 border-[#1D4ED8] pl-4">
              &ldquo;{article.excerpt}&rdquo;
            </p>

            <div className="pt-4 space-y-6 text-base sm:text-lg text-gray-700">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 mt-8">
                The New Paradigm of Engineering
              </h2>
              <p>
                As systems scale into multi-tenant distributed environments, our understanding of software architecture must evolve. At BlankSlate Institute, we test and implement these architectures across live production databases and serverless edge functions.
              </p>
              <p>
                Through rigorous testing, deterministic pipelines, and autonomous workflows, developers can build resilient applications that withstand extreme enterprise loads.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <EditorialFooter />
      <ApplicationModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </div>
  );
}
