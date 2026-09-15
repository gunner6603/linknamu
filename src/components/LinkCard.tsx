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
      className="w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 px-5 py-4 text-center font-medium text-foreground shadow-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      {label}
    </a>
  );
}
