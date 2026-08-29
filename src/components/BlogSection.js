import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { blogArticles } from "@/data/instituteData";

export default function BlogSection() {
  const featuredArticles = blogArticles.slice(0, 3);

  return (
    <section className="py-24 bg-white relative" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#1D4ED8]">
              KNOWLEDGE CENTER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight">
              Ideas That Move You Forward
            </h2>
            <p className="text-base text-[#6B7280]">
              Articles, technical deep dives, and career insights published by BlankSlate faculty and researchers.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B0B0C] hover:text-[#1D4ED8] transition-colors group flex-shrink-0"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 text-[#1D4ED8] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-gray-50/70 rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image & Category */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#0B0B0C] text-[10px] font-black uppercase tracking-wider rounded-md">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0B0B0C] group-hover:text-[#1D4ED8] transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#6B7280] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-3 border-t border-gray-100">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B0B0C] group-hover:text-[#1D4ED8] transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1D4ED8] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
