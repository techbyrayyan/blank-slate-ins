"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, BookOpen, Award, Star, Trophy } from "lucide-react";

function AnimatedCounter({ target, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    let animationFrame;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };
    animationFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {count}
      <span style={{ color: "#1D4ED8", marginLeft: "2px" }}>{suffix}</span>
    </span>
  );
}

const statsData = [
  { target: 500, suffix: "+", label: "Students", sublabel: "Active Learners", icon: Users },
  { target: 20, suffix: "+", label: "Programs", sublabel: "Career Tracks", icon: BookOpen },
  { target: 25, suffix: "+", label: "Expert Faculty", sublabel: "Industry Mentors", icon: Award },
  { target: 95, suffix: "%", label: "Student Satisfaction", sublabel: "Positive Feedback", icon: Star },
  { target: 10, suffix: "+", label: "Years of Excellence", sublabel: "Proven Heritage", icon: Trophy },
];

export default function StatsStrip() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        color: "#0D0D12",
        borderTop: "1px solid #f0f0f0",
        borderBottom: "1px solid #f0f0f0",
        paddingTop: "64px",
        paddingBottom: "64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "20px",
          }}
          className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        >
          {statsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StatCard key={item.label} item={item} idx={idx} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatCard({ item, idx, Icon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "24px 16px",
        borderRadius: "24px",
        backgroundColor: "#ffffff",
        border: hovered ? "1px solid #e5e7eb" : "1px solid #f3f4f6",
        boxShadow: hovered ? "0 8px 30px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        cursor: "default",
        transition: "all 0.3s ease",
      }}
    >
      {/* Top red accent line on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "25%",
          right: "25%",
          height: "2px",
          borderRadius: "99px",
          backgroundColor: "#1D4ED8",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Icon Badge */}
      <div
        style={{
          width: "44px",
          height: "44px",
          marginBottom: "16px",
          borderRadius: "14px",
          backgroundColor: hovered ? "#1D4ED8" : "#f3f4f6",
          border: hovered ? "1px solid #1D4ED8" : "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hovered ? "#ffffff" : "#9ca3af",
          transition: "all 0.3s ease",
          flexShrink: 0,
        }}
      >
        <Icon style={{ width: "18px", height: "18px" }} />
      </div>

      {/* Animated Number */}
      <h3
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 900,
          color: "#0D0D12",
          fontFamily: "monospace",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          margin: 0,
        }}
      >
        <AnimatedCounter target={item.target} suffix={item.suffix} duration={2.2} />
      </h3>

      {/* Divider */}
      <div
        style={{
          width: "32px",
          height: "2px",
          borderRadius: "99px",
          backgroundColor: hovered ? "#1D4ED8" : "#e5e7eb",
          margin: "12px 0",
          transition: "background-color 0.3s ease",
        }}
      />

      {/* Main Label */}
      <p
        style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#0D0D12",
          margin: 0,
          letterSpacing: "-0.01em",
        }}
      >
        {item.label}
      </p>

      {/* Sublabel */}
      <p
        style={{
          fontSize: "10px",
          color: "#9ca3af",
          fontFamily: "monospace",
          marginTop: "4px",
        }}
      >
        {item.sublabel}
      </p>
    </motion.div>
  );
}
