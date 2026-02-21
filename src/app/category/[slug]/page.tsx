"use client";

import Link from "next/link";
import PixelNav from "@/components/PixelNav";
import PixelFooter from "@/components/PixelFooter";
import PromptCard from "@/components/PromptCard";
import { useLanguage } from "@/i18n/LanguageContext";
import { categories, subCategories, prompts, getCategoryColor } from "@/data/prompts";
import type { CategoryType } from "@/data/prompts";
import { useParams } from "next/navigation";

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

export default function CategoryPage() {
  const params = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const category = categories.find((c) => c.id === params.slug);
  if (!category) {
    return (
      <main className="relative">
        <PixelNav />
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-6xl mb-4">😢</div>
          <p className="font-pixel text-sm text-theme-subtle mb-6">{t("page_not_found")}</p>
          <Link href="/" className="pixel-btn bg-pixel-pink text-pixel-dark">{t("page_back_home")}</Link>
        </div>
        <PixelFooter />
      </main>
    );
  }

  const catColor = getCategoryColor(category.id);
  const categoryPrompts = prompts.filter((p) => p.category === category.id);
  const categorySubs = category.subCategories
    ? subCategories.filter((sc) => category.subCategories!.includes(sc.id))
    : [];

  return (
    <main className="relative">
      <PixelNav />

      {/* Hero Banner */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 font-body text-sm text-theme-faint">
            <Link href="/" className="hover:text-pixel-pink transition-colors">{t("page_home")}</Link>
            <span>/</span>
            <span style={{ color: catColor.text }}>{t(catNameKeys[category.id as CategoryType] as any)}</span>
          </div>

          {/* Category header */}
          <div
            className="pixel-card bg-theme-card"
            style={{ borderColor: catColor.border, boxShadow: `4px 4px 0px 0px ${catColor.border}` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{category.icon}</span>
              <div>
                <h1 className="font-pixel text-lg sm:text-xl" style={{ color: catColor.text }}>
                  {t(catNameKeys[category.id as CategoryType] as any)}
                </h1>
                <p className="font-body text-xs text-theme-subtle mt-1">{category.name}</p>
              </div>
            </div>
            <p className="font-body text-theme-muted">{category.description}</p>
            <div className="mt-4 font-pixel text-[9px]" style={{ color: catColor.text }}>
              {categoryPrompts.length} {t("cat_prompts_suffix")}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-categories (if any) */}
      {categorySubs.length > 0 && (
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-pixel text-sm text-theme mb-6">{t("subcat_title")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categorySubs.map((sub) => {
                const subPrompts = prompts.filter((p) => p.subCategory === sub.id);
                return (
                  <Link
                    key={sub.id}
                    href={`/category/${category.id}/${sub.id}`}
                    className="pixel-card bg-theme-card group block"
                    style={{
                      borderColor: sub.borderColor,
                      boxShadow: `4px 4px 0px 0px ${sub.borderColor}`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl group-hover:animate-wiggle">{sub.icon}</span>
                      <div>
                        <h3 className="font-pixel text-[10px]" style={{ color: sub.textColor }}>{sub.name}</h3>
                        <p className="font-body text-[10px] text-theme-faint">{sub.name}</p>
                      </div>
                    </div>
                    <p className="font-body text-xs text-theme-subtle mb-3">{sub.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-pixel text-[8px]" style={{ color: sub.textColor }}>
                        {subPrompts.length} {t("cat_prompts_suffix")}
                      </span>
                      <span className="font-pixel text-[7px] text-theme-faint group-hover:text-theme-subtle transition-colors">
                        {t("subcat_view")}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All prompts in this category */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-pixel text-sm mb-6" style={{ color: catColor.text }}>
            {t("subcat_all_prompts")} {t(catNameKeys[category.id as CategoryType] as any)}
          </h2>
          {categoryPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">📭</div>
              <p className="font-pixel text-[10px] text-theme-faint">{t("page_empty")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Back button */}
      <div className="text-center pb-12">
        <Link href="/" className="pixel-btn bg-theme-mid text-theme-subtle hover:text-pixel-pink">
          {t("page_back")}
        </Link>
      </div>

      <PixelFooter />
    </main>
  );
}
