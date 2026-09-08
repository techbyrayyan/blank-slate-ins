"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import EditorialFooter from "@/components/EditorialFooter";
import CustomCursor from "@/components/CustomCursor";
import ApplicationModal from "@/components/ApplicationModal";
import InteractiveProgramExplorer from "@/components/InteractiveProgramExplorer";

export default function ProgramsPage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Full Stack Development");

  const handleApply = (title) => {
    setSelectedCourse(title);
    setApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090B] selection:bg-[#1D4ED8] selection:text-white font-sans">
      <CustomCursor />
      <Navbar onOpenApply={() => handleApply("Full Stack Development")} />

      <main className="flex-1 pt-[200px] sm:pt-[220px] lg:pt-[240px] pb-24">
        <InteractiveProgramExplorer onOpenApply={handleApply} />
      </main>

      <EditorialFooter />
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        preselectedCourse={selectedCourse}
      />
    </div>
  );
}
