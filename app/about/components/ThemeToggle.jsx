"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center w-14 h-8 p-0.5 rounded-full transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
    >
      {/* Background gradient that transitions between warm and cool */}
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-700 transform-gpu 
          ${
            isDark
              ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900"
              : "bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400"
          }`}
      />

      {/* Subtle border */}
      <span className="absolute inset-0 rounded-full border border-white/10" />

      {/* Moving knob with icon */}
      <span
        className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-gray-800 shadow-sm transform transition-all duration-500 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        <span
          className={`text-sm ${
            isDark ? "text-yellow-300" : "text-yellow-500"
          }`}
        >
          {isDark ? "🌙" : "☀️"}
        </span>
      </span>

      {/* Decorative glow when dark */}
      <span
        className={`pointer-events-none absolute -left-1 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full transition-opacity duration-500 ${
          isDark ? "opacity-70 bg-yellow-300 blur-sm" : "opacity-0"
        }`}
      />
    </button>
  );
}
