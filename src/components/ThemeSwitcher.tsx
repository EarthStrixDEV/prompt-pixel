"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 border-[3px] border-pixel-border bg-theme-card transition-all duration-300 group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        boxShadow: isDark
          ? "2px 2px 0px 0px rgba(255,179,217,0.3)"
          : "2px 2px 0px 0px rgba(100,100,180,0.3)",
      }}
    >
      {/* Track background glow */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)"
            : "linear-gradient(135deg, #87CEEB 0%, #E0F7FA 100%)",
        }}
      />

      {/* Stars (visible in dark mode) */}
      <div
        className="absolute top-1 left-1 w-1 h-1 bg-pixel-yellow transition-opacity duration-300"
        style={{ opacity: isDark ? 1 : 0 }}
      />
      <div
        className="absolute top-2.5 left-3 w-0.5 h-0.5 bg-pixel-white transition-opacity duration-300"
        style={{ opacity: isDark ? 0.7 : 0 }}
      />

      {/* Sun rays (visible in light mode) */}
      <div
        className="absolute top-1 right-2 w-1 h-1 bg-pixel-yellow transition-opacity duration-300"
        style={{ opacity: isDark ? 0 : 1 }}
      />
      <div
        className="absolute bottom-1.5 right-1 w-0.5 h-0.5 bg-orange-300 transition-opacity duration-300"
        style={{ opacity: isDark ? 0 : 0.7 }}
      />

      {/* Toggle knob (moon/sun) */}
      <div
        className="absolute top-0.5 w-5 h-5 border-[2px] transition-all duration-300 flex items-center justify-center"
        style={{
          left: isDark ? "2px" : "22px",
          backgroundColor: isDark ? "#FFF9C4" : "#FFD54F",
          borderColor: isDark ? "#FFF176" : "#FFA000",
        }}
      >
        <span className="text-[8px] leading-none">
          {isDark ? "🌙" : "☀️"}
        </span>
      </div>
    </button>
  );
}
