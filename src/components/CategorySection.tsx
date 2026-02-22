"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { categories, getPromptCount, getCategoryColor, getSubCategoriesForCategory } from "@/data/prompts";
import type { CategoryType } from "@/data/prompts";

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

export default function CategorySection() {
  const { t } = useLanguage();

  return (
    <section id="categories" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-theme-mid border-[3px] border-pixel-sky px-4 py-2 mb-4" style={{ boxShadow: "4px 4px 0px 0px #81D4FA" }}>
            <span className="font-pixel text-[10px] text-pixel-sky">{t("cat_title")}</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-theme mt-4 mb-3">
            {t("cat_heading")}
          </h2>
          <p className="font-body text-theme-subtle max-w-lg mx-auto">
            {t("cat_description")}
          </p>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const catColor = getCategoryColor(cat.id);
            const borderColor = catColor.border;
            const textColor = catColor.text;
            const categorySubs = getSubCategoriesForCategory(cat);

            return (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="pixel-card bg-theme-card group cursor-pointer block"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  borderColor: borderColor,
                  boxShadow: `4px 4px 0px 0px ${borderColor}`,
                }}
              >
                <div className="text-5xl mb-4 group-hover:animate-wiggle transition-all">
                  {cat.icon}
                </div>

                <h3 className="font-pixel text-[10px] text-theme mb-2 leading-relaxed">
                  {t(catNameKeys[cat.id as CategoryType] as any)}
                </h3>
                <p className="font-body text-xs text-theme-subtle mb-1">{cat.name}</p>

                <p className="font-body text-sm text-theme-muted mt-3 mb-4">
                  {cat.description}
                </p>

                {categorySubs.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {categorySubs.map((sub) => (
                      <span
                        key={sub.id}
                        className="font-body text-[9px] px-2 py-0.5 border border-theme-muted text-theme-subtle bg-theme-card"
                      >
                        {sub.icon} {sub.name}
                      </span>
                    ))}
                  </div>
                )}

                <div
                  className="inline-block px-3 py-1 border-2 font-pixel text-[8px]"
                  style={{ borderColor: borderColor, color: textColor }}
                >
                  {getPromptCount(cat.id)} {t("cat_prompts_suffix")}
                </div>

                <div className="mt-3 font-pixel text-[7px] text-theme-faint group-hover:text-theme-subtle transition-colors">
                  {t("cat_view_all")}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
