"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { prompts, categories, getCategoryColor } from "@/data/prompts";
import type { CategoryType } from "@/data/prompts";
import PromptCard from "@/components/PromptCard";

const catNameKeys: Record<CategoryType, string> = {
  image: "cat_image",
  chat: "cat_chat",
  business: "cat_business",
  framework: "cat_framework",
  video: "cat_video",
  coding: "cat_coding",
  research: "cat_research",
  thinking: "cat_thinking",
};

export default function FeaturedPrompts() {
  const [activeFilter, setActiveFilter] = useState<"all" | CategoryType>("all");
  const { t } = useLanguage();

  const filtered = activeFilter === "all"
    ? prompts.filter((p) => p.isFeatured)
    : prompts.filter((p) => p.category === activeFilter);

  return (
    <section id="prompts" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-theme-mid border-[3px] border-pixel-pink px-4 py-2 mb-4" style={{ boxShadow: "4px 4px 0px 0px #FF80BF" }}>
            <span className="font-pixel text-[10px] text-pixel-pink">{t("featured_label")}</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-theme mt-4 mb-3">
            {t("featured_heading")}
          </h2>
          <p className="font-body text-theme-subtle max-w-lg mx-auto">
            {t("featured_description")}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveFilter("all")}
            className={`pixel-tag transition-all ${
              activeFilter === "all"
                ? "bg-pixel-pink text-pixel-dark"
                : "bg-theme-mid text-theme-subtle hover:text-pixel-pink"
            }`}
          >
            {t("featured_filter_all")}
          </button>
          {categories.map((cat) => {
            const catColor = getCategoryColor(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`pixel-tag transition-all ${
                  activeFilter === cat.id
                    ? "text-pixel-dark"
                    : "bg-theme-mid text-theme-subtle hover:text-theme"
                }`}
                style={
                  activeFilter === cat.id
                    ? { backgroundColor: catColor.border, borderColor: catColor.border }
                    : {}
                }
              >
                {cat.icon} {t(catNameKeys[cat.id as CategoryType] as any)}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">📭</div>
            <p className="font-pixel text-[10px] text-theme-faint">{t("featured_empty")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
