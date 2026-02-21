"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import PixelNav from "@/components/PixelNav";
import PixelFooter from "@/components/PixelFooter";
import {
  techQuotes,
  quoteCategories,
  getQuoteByLocale,
  getQuoteCategoryColor,
} from "@/data/quotes";
import type { Quote, QuoteCategory } from "@/data/quotes";

function QuoteCard({
  quote,
  locale,
  copyLabel,
  copiedLabel,
  onCopy,
}: {
  quote: Quote;
  locale: string;
  copyLabel: string;
  copiedLabel: string;
  onCopy: (text: string) => void;
}) {
  const [copied, setCopied] = useState(false);
  const text = getQuoteByLocale(quote, locale);
  const color = getQuoteCategoryColor(quote.category);

  const handleCopy = () => {
    const toCopy = `"${text}" — ${quote.author}`;
    onCopy(toCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="pixel-card bg-theme-card p-5 flex flex-col h-full transition-transform hover:scale-[1.02]"
      style={{
        borderColor: color.border,
        boxShadow: `4px 4px 0px 0px ${color.border}80`,
      }}
    >
      <blockquote className="font-body text-sm text-theme-muted leading-relaxed flex-1 mb-4">
        &ldquo;{text}&rdquo;
      </blockquote>
      <footer className="flex items-center justify-between gap-2 flex-wrap">
        <span className="font-pixel text-[10px]" style={{ color: color.text }}>
          — {quote.author}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="pixel-btn text-[9px] px-2 py-1.5 bg-theme-mid border-[2px] border-pixel-pink text-pixel-pink hover:bg-pixel-pink hover:text-pixel-dark transition-colors"
        >
          {copied ? copiedLabel : copyLabel}
        </button>
      </footer>
    </div>
  );
}

export default function QuotesPage() {
  const { locale, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<QuoteCategory | "all">("all");

  const filteredQuotes = useMemo(() => {
    if (activeFilter === "all") return techQuotes;
    return techQuotes.filter((q) => q.category === activeFilter);
  }, [activeFilter]);

  const handleCopy = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <main className="relative min-h-screen">
      <PixelNav />

      {/* Hero */}
      <section className="pt-24 pb-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-block bg-theme-mid border-[3px] border-pixel-lavender px-4 py-2 mb-6"
            style={{ boxShadow: "4px 4px 0px 0px rgba(206,147,216,0.6)" }}
          >
            <span className="font-pixel text-[10px] text-pixel-lavender">
              💬 {t("quote_title")}
            </span>
          </div>
          <h1 className="font-pixel text-xl sm:text-3xl text-theme mb-2">
            {t("quote_heading")}
          </h1>
          <p className="font-body text-theme-subtle text-sm">
            {t("quote_subtitle")}
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="px-4 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`font-body text-xs px-3 py-1.5 border-[2px] transition-colors ${
                activeFilter === "all"
                  ? "bg-pixel-lavender/20 border-pixel-lavender text-pixel-lavender"
                  : "border-theme-muted text-theme-subtle hover:border-pixel-lavender hover:text-pixel-lavender"
              }`}
            >
              {t("quote_filter_all")}
            </button>
            {quoteCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`font-body text-xs px-3 py-1.5 border-[2px] transition-colors ${
                  activeFilter === cat.id
                    ? "bg-pixel-lavender/20 border-pixel-lavender text-pixel-lavender"
                    : "border-theme-muted text-theme-subtle hover:border-pixel-lavender hover:text-pixel-lavender"
                }`}
              >
                {t(cat.labelKey as TranslationKey)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quote grid */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {filteredQuotes.length === 0 ? (
            <p className="font-body text-sm text-theme-subtle text-center py-12">
              {t("quote_empty")}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredQuotes.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  quote={quote}
                  locale={locale}
                  copyLabel={t("quote_copy")}
                  copiedLabel={t("quote_copied")}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-8 text-center">
        <Link
          href="/"
          className="inline-block pixel-btn bg-pixel-pink text-pixel-dark text-[10px]"
        >
          {t("page_back_home")}
        </Link>
      </div>

      <PixelFooter />
    </main>
  );
}
