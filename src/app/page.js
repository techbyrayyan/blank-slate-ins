"use client";

import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import AboutEditorial from "@/components/AboutEditorial";
import InteractiveProgramExplorer from "@/components/InteractiveProgramExplorer";
import FeaturedFullStack from "@/components/FeaturedFullStack";
import WhyBlankSlateHorizontal from "@/components/WhyBlankSlateHorizontal";
import CampusExperience from "@/components/CampusExperience";
import TestimonialsEditorial from "@/components/TestimonialsEditorial";
import CinematicCTA from "@/components/CinematicCTA";
import EditorialFooter from "@/components/EditorialFooter";
import ApplicationModal from "@/components/ApplicationModal";

export default function HomePage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("Full Stack Development");

  const handleOpenApply = (programTitle = "Full Stack Development") => {
    setSelectedProgram(programTitle);
    setApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#E50914] selection:text-white font-sans">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* 1. Header & Navigation */}
      <Navbar onOpenApply={() => handleOpenApply()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenApply={() => handleOpenApply()} />

        {/* 3. Learn essential career and life skills (4-Slide Skills Carousel) */}
        <AboutEditorial />

        {/* 4. Trending Courses (Udemy-style Carousel with Hover Popup) */}
        <InteractiveProgramExplorer onOpenApply={handleOpenApply} />

        {/* 6. Featured Program ("Full Stack Development") */}
        <FeaturedFullStack onOpenApply={handleOpenApply} />

        {/* 7. Why Students Choose BlankSlate (6 Cards) */}
        <WhyBlankSlateHorizontal />

        {/* 8. Life at BlankSlate (Campus 4-Photo Masonry) */}
        <CampusExperience />

        {/* 9. What Our Students Say (Testimonial Quote Card with Stars) */}
        <TestimonialsEditorial />

        {/* 10. Admissions Banner ("Your Next Chapter Starts Here.") */}
        <CinematicCTA onOpenApply={() => handleOpenApply()} />
      </main>

      {/* 11. Footer */}
      <EditorialFooter />

      {/* Application Modal */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        preselectedCourse={selectedProgram}
      />
    </div>
  );
}
