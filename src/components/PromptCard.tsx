"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslatedPrompt } from "@/hooks/useTranslatedPrompt";
import type { Prompt, CategoryType } from "@/data/prompts";
import { getCategoryColor } from "@/data/prompts";

function getDifficultyColor(diff: string) {
  switch (diff) {
    case "beginner": return "bg-pixel-mint text-pixel-dark";
    case "intermediate": return "bg-pixel-yellow text-pixel-dark";
    case "advanced": return "bg-pixel-coral text-pixel-dark";
    default: return "bg-theme-card text-theme";
  }
}

export default function PromptCard({ prompt }: { prompt: Prompt }) {
  const [copied, setCopied] = useState(false);
  const { locale, t } = useLanguage();
  const tp = useTranslatedPrompt(prompt);
  const catColor = getCategoryColor(prompt.category as CategoryType);

  const handleCopy = () => {
    navigator.clipboard.writeText(tp.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="pixel-card bg-theme-card relative group"
      style={{
        borderColor: catColor.border,
        boxShadow: `4px 4px 0px 0px ${catColor.border}`,
      }}
    >
      {/* Badges */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        {prompt.isNew && (
          <span className="pixel-tag bg-pixel-yellow text-pixel-dark animate-blink text-[7px]">
            {t("card_new")}
          </span>
        )}
        {prompt.isFeatured && (
          <span className="pixel-tag bg-pixel-pink/20 text-pixel-pink text-[7px]" style={{ borderColor: "#FF80BF" }}>
            {t("card_featured")}
          </span>
        )}
        <span className={`pixel-tag ${getDifficultyColor(prompt.difficulty)} text-[7px]`}>
          {prompt.difficulty}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-pixel text-[11px] leading-relaxed mb-1" style={{ color: catColor.text }}>
        {tp.title}
      </h3>
      <p className="font-body text-xs text-theme-subtle mb-2">{locale !== "en" ? prompt.title : ""}</p>
      <p className="font-body text-sm text-theme-muted mb-4">{tp.description}</p>

      {/* ── Prompt Area (read-only) ── */}
      <div
        className="p-4 border-2 mb-4 font-mono text-xs text-theme-muted leading-relaxed max-h-32 overflow-y-auto"
        style={{
          backgroundColor: catColor.bg,
          borderColor: catColor.border + "40",
        }}
      >
        {tp.prompt.slice(0, 200)}
        {tp.prompt.length > 200 && "..."}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.tags.map((tag) => (
          <span key={tag} className="font-body text-[10px] text-theme-faint bg-theme-card px-2 py-1 border border-theme-muted">
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t-2 border-theme-muted">
        <div className="flex items-center gap-2">
          <span className="font-body text-xs text-theme-faint">♡ {prompt.likes}</span>
        </div>
        <button
          onClick={handleCopy}
          className="pixel-btn text-[9px] px-4 py-2"
          style={{
            backgroundColor: copied ? "#C8E6C9" : catColor.border,
            color: "#1a1a2e",
          }}
        >
          {copied ? t("card_copied") : t("card_copy")}
        </button>
      </div>
    </div>
  );
}
