"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type OceanMode = "ocean" | "ocean-light";

function getStoredMode(): OceanMode {
  if (typeof window === "undefined") return "ocean";
  return (localStorage.getItem("moonz_theme") as OceanMode) || "ocean";
}

function applyMode(mode: OceanMode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("moonz_theme", mode);
}

export default function DarkLightToggle() {
  const [mode, setMode] = useState<OceanMode>("ocean");

  useEffect(() => {
    const saved = getStoredMode();
    setMode(saved);
    applyMode(saved);
  }, []);

  const toggle = () => {
    const next: OceanMode = mode === "ocean" ? "ocean-light" : "ocean";
    setMode(next);
    applyMode(next);
  };

  const isDark = mode === "ocean";

  return (
    <button
      onClick={toggle}
      className="relative text-[#F0EFE7]/80 hover:text-[#B8A98F] transition-colors p-1.5 interactive rounded-full border border-transparent hover:border-[#F0EFE7]/10"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light Mode" : "Dark Mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            <Moon className="w-4 h-4 md:w-5 md:h-5" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 30, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -30, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            <Sun className="w-4 h-4 md:w-5 md:h-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
