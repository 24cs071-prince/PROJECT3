"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

export type Theme = "ocean" | "ocean-light";

const THEMES: { id: Theme; label: string; bg: string; accent: string; fg: string; emoji: string }[] = [
  { id: "ocean",    label: "Ocean",     bg: "#080F1E", accent: "#5E9CDD", fg: "#DCE9FF", emoji: "🌊" },
];

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("moonz_theme", theme);
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "ocean";
  const stored = localStorage.getItem("moonz_theme");
  if (stored === "ocean" || stored === "ocean-light") return stored;
  return "ocean";
}

export default function ThemeToggle() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Theme>("ocean");

  useEffect(() => {
    const saved = getStoredTheme();
    setCurrent(saved);
    applyTheme(saved);
  }, []);

  const handleSelect = (id: Theme) => {
    setCurrent(id);
    applyTheme(id);
    setOpen(false);
  };

  const currentTheme = THEMES.find(t => t.id === current) || THEMES[0];

  return (
    <div className="relative" id="theme-toggle">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="text-[#F0EFE7]/80 hover:text-[#B8A98F] transition-colors p-1.5 interactive flex items-center gap-1.5 border border-transparent hover:border-[#F0EFE7]/10 rounded-full"
        aria-label="Switch theme"
        title="Switch theme"
      >
        <Palette className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="absolute right-0 mt-3 w-52 p-3 rounded-2xl glassmorphism z-50 text-[#F0EFE7] flex flex-col gap-1"
            >
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#B8A98F] font-bold px-2 pb-1 border-b border-[#F0EFE7]/10">
                Color Theme
              </p>

              {THEMES.map(t => (
                <button
                  key={t.id}
                  onClick={() => handleSelect(t.id)}
                  className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all text-left ${
                    current === t.id
                      ? "bg-[#B8A98F]/15 border border-[#B8A98F]/30"
                      : "hover:bg-[#F0EFE7]/5 border border-transparent"
                  }`}
                >
                  {/* Swatch preview — two-tone */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center text-[9px]"
                      style={{
                        backgroundColor: t.bg,
                        borderColor: t.accent,
                      }}
                    >
                      {t.emoji}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#F0EFE7]">
                      {t.label}
                    </span>
                    <div className="flex gap-1 mt-0.5">
                      {/* Mini color palette dots */}
                      {[t.bg, t.accent, t.fg].map((c, i) => (
                        <span
                          key={i}
                          className="w-2 h-2 rounded-full border border-white/10"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>

                  {current === t.id && (
                    <span className="ml-auto text-[#B8A98F] text-[10px] font-bold">✓</span>
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
