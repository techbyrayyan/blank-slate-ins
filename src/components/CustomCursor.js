"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState("default"); // "default" | "explore" | "view" | "button"
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
      setIsMobile(isTouch);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target.closest("[data-cursor]");
      if (target) {
        const mode = target.getAttribute("data-cursor");
        setCursorMode(mode || "default");
      } else {
        setCursorMode("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted || isMobile) return null;

  const cursorVariants = {
    default: {
      width: 10,
      height: 10,
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      backgroundColor: "#1D4ED8",
      borderRadius: "9999px",
      boxShadow: "0 0 12px rgba(29, 78, 216, 0.8)",
      transition: { type: "spring", damping: 30, stiffness: 400, mass: 0.1 },
    },
    explore: {
      width: 80,
      height: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#0D0D12",
      border: "1px solid rgba(29, 78, 216, 0.6)",
      borderRadius: "9999px",
      boxShadow: "0 0 20px rgba(29, 78, 216, 0.4)",
      transition: { type: "spring", damping: 25, stiffness: 350, mass: 0.2 },
    },
    view: {
      width: 72,
      height: 72,
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      backgroundColor: "#0D0D12",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "9999px",
      boxShadow: "0 0 20px rgba(29, 78, 216, 0.3)",
      transition: { type: "spring", damping: 25, stiffness: 350, mass: 0.2 },
    },
    button: {
      width: 32,
      height: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(29, 78, 216, 0.3)",
      border: "1px solid #3B82F6",
      borderRadius: "9999px",
      transition: { type: "spring", damping: 28, stiffness: 380, mass: 0.15 },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center text-white font-mono text-[10px] uppercase font-bold tracking-widest"
      variants={cursorVariants}
      animate={cursorMode}
    >
      {cursorMode === "explore" && <span className="text-[#FFFFFF]">EXPLORE</span>}
      {cursorMode === "view" && <span className="text-[#60A5FA]">VIEW</span>}
    </motion.div>
  );
}
