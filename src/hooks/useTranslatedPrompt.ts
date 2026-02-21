"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { promptTranslations, categoryTranslations, subCategoryTranslations } from "@/data/promptTranslations";
import type { Prompt, Category, SubCategory } from "@/data/prompts";

/**
 * Returns a single prompt with locale-appropriate title, description, and prompt text.
 * Falls back to English (base data) when no translation exists.
 */
export function useTranslatedPrompt(prompt: Prompt): Prompt {
  const { locale } = useLanguage();
  if (locale === "en") return prompt;

  const t = promptTranslations[locale]?.[prompt.id];
  if (!t) return prompt;

  return {
    ...prompt,
    title: t.title || prompt.title,
    description: t.description || prompt.description,
    prompt: t.prompt || prompt.prompt,
  };
}

/**
 * Batch version — translates an array of prompts.
 */
export function useTranslatedPrompts(prompts: Prompt[]): Prompt[] {
  const { locale } = useLanguage();
  if (locale === "en") return prompts;

  const localeMap = promptTranslations[locale];
  if (!localeMap) return prompts;

  return prompts.map((p) => {
    const t = localeMap[p.id];
    if (!t) return p;
    return {
      ...p,
      title: t.title || p.title,
      description: t.description || p.description,
      prompt: t.prompt || p.prompt,
    };
  });
}

/**
 * Returns a category with locale-appropriate name.
 */
export function useTranslatedCategory(cat: Category): Category {
  const { locale } = useLanguage();
  if (locale === "en") return cat;

  const name = categoryTranslations[locale]?.[cat.id];
  if (!name) return cat;
  return { ...cat, name: name };
}

/**
 * Returns a sub-category with locale-appropriate name.
 */
export function useTranslatedSubCategory(sub: SubCategory): SubCategory {
  const { locale } = useLanguage();
  if (locale === "en") return sub;

  const name = subCategoryTranslations[locale]?.[sub.id];
  if (!name) return sub;
  return { ...sub, name: name };
}
