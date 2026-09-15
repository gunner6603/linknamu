"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크모드 전환"
      className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1.5 text-sm text-foreground hover:bg-black/5 dark:hover:bg-white/10"
    >
      {isDark ? "🌙 다크" : "☀️ 라이트"}
    </button>
  );
}
