"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, label, url }: LinkItem) {
  const handleClick = () => {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: id }),
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-6 py-4 text-center font-medium text-foreground shadow-[0_4px_18px_rgba(120,80,50,0.08)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_8px_24px_rgba(120,80,50,0.12)] dark:shadow-[0_4px_18px_rgba(0,0,0,0.25)] dark:hover:bg-white/10 dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
    >
      {label}
    </a>
  );
}
