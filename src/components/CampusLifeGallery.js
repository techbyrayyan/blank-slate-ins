"use client";

import { useState } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { campusLifeGallery } from "@/data/instituteData";

const galleryCategories = ["All", "Classrooms", "Labs", "Events", "Student Activities", "Workshops", "Seminars"];

export default function CampusLifeGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? campusLifeGallery
      : campusLifeGallery.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section className="py-24 bg-[#F7F7F8] relative" id="campus-life">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#1D4ED8]">
            CAMPUS CULTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight">
            Life at BlankSlate
          </h2>
          <p className="text-base text-[#6B7280]">
            Experience a collaborative, high-energy environment built for innovation, curiosity, and growth.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#0B0B0C] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer bg-gray-200 aspect-[4/3] transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

              {/* Click to expand icon */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-white/90 px-2 py-0.5 rounded-md">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white mt-1.5 line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={handleCloseLightbox}
        >
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] bg-[#0B0B0C] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-h-[65vh] w-auto object-contain mx-auto"
            />
            <div className="p-6 bg-[#0B0B0C] text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                {filteredItems[selectedImageIndex].category}
              </span>
              <h3 className="text-xl font-bold mt-1">
                {filteredItems[selectedImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {filteredItems[selectedImageIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
