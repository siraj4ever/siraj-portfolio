"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center w-11 h-6 p-0.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
    >
      {/* Track */}
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-500 ${
          isDark
            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900"
            : "bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400"
        }`}
      />

      {/* Border */}
      <span className="absolute inset-0 rounded-full border border-white/10" />

      {/* Knob */}
      <span
        className={`relative z-10 flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-gray-800 shadow-sm transition-transform duration-500 ${
          isDark ? "translate-x-5" : "translate-x-0"
        }`}
      >
        <span className={`text-xs leading-none ${isDark ? "text-yellow-300" : "text-yellow-500"}`}>
          {isDark ? "🌙" : "☀️"}
        </span>
      </span>
    </button>
  );
}
