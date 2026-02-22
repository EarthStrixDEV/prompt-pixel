"use client";

import Link from "next/link";
import PixelNav from "@/components/PixelNav";
import PixelFooter from "@/components/PixelFooter";
import PromptCard from "@/components/PromptCard";
import { useLanguage } from "@/i18n/LanguageContext";
import { categories, subCategories, prompts, getCategoryColor, getSubCategoriesForCategory } from "@/data/prompts";
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

export default function SubCategoryPage() {
  const params = useParams<{ slug: string; sub: string }>();
  const { t } = useLanguage();

  const category = categories.find((c) => c.id === params.slug);
  const subCategory = subCategories.find((s) => s.id === params.sub);

  if (!category || !subCategory) {
    return (
      <main className="relative">
        <PixelNav />
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-6xl mb-4">😢</div>
          <p className="font-pixel text-sm text-theme-subtle mb-6">{t("page_sub_not_found")}</p>
          <Link href="/" className="pixel-btn bg-pixel-pink text-pixel-dark">{t("page_back_home")}</Link>
        </div>
        <PixelFooter />
      </main>
    );
  }

  const catColor = getCategoryColor(category.id);
  const subPrompts = prompts.filter((p) => p.subCategory === subCategory.id);
  const siblings = getSubCategoriesForCategory(category);

  return (
    <main className="relative">
      <PixelNav />

      {/* Hero Banner */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 font-body text-sm text-theme-faint flex-wrap">
            <Link href="/" className="hover:text-pixel-pink transition-colors">{t("page_home")}</Link>
            <span>/</span>
            <Link href={`/category/${category.id}`} className="transition-colors" style={{ color: catColor.text + "99" }}>
              {t(catNameKeys[category.id as CategoryType] as any)}
            </Link>
            <span>/</span>
            <span style={{ color: subCategory.textColor }}>{subCategory.name}</span>
          </div>

          {/* Sub-category header */}
          <div
            className="pixel-card bg-theme-card"
            style={{ borderColor: subCategory.borderColor, boxShadow: `4px 4px 0px 0px ${subCategory.borderColor}` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{subCategory.icon}</span>
              <div>
                <h1 className="font-pixel text-lg sm:text-xl" style={{ color: subCategory.textColor }}>
                  {subCategory.name}
                </h1>
                <p className="font-body text-xs text-theme-subtle mt-1">{subCategory.name}</p>
              </div>
            </div>
            <p className="font-body text-theme-muted">{subCategory.description}</p>
            <div className="mt-4 font-pixel text-[9px]" style={{ color: subCategory.textColor }}>
              {subPrompts.length} {t("cat_prompts_suffix")}
            </div>
          </div>
        </div>
      </section>

      {/* Sibling sub-category tabs */}
      <section className="px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {siblings.map((sib) => (
              <Link
                key={sib.id}
                href={`/category/${category.id}/${sib.id}`}
                className={`pixel-tag transition-all ${
                  sib.id === subCategory.id
                    ? "text-pixel-dark"
                    : "bg-theme-mid text-theme-subtle hover:text-theme"
                }`}
                style={
                  sib.id === subCategory.id
                    ? { backgroundColor: sib.borderColor, borderColor: sib.borderColor }
                    : {}
                }
              >
                {sib.icon} {sib.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prompts */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {subPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">📭</div>
              <p className="font-pixel text-[10px] text-theme-faint">{t("page_empty_sub")}</p>
              <p className="font-body text-xs text-theme-faint mt-2">{t("page_empty_sub_hint")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Back navigation */}
      <div className="text-center pb-12 flex items-center justify-center gap-4 flex-wrap">
        <Link href={`/category/${category.id}`} className="pixel-btn bg-theme-mid text-theme-subtle hover:text-pixel-pink text-[10px]">
          ← {t(catNameKeys[category.id as CategoryType] as any)}
        </Link>
        <Link href="/" className="pixel-btn bg-theme-mid text-theme-subtle hover:text-pixel-pink text-[10px]">
          {t("page_home_btn")}
        </Link>
      </div>

      <PixelFooter />
    </main>
  );
}
