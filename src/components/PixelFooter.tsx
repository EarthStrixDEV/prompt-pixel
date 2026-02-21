"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function PixelFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t-[3px] border-pixel-pink/30 bg-theme-mid pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎮</span>
              <span className="font-pixel text-sm text-pixel-pink">
                Prompt<span className="text-pixel-yellow">Pixel</span>
              </span>
            </div>
            <p className="font-body text-sm text-theme-subtle leading-relaxed">
              {t("footer_description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-pixel text-[9px] text-pixel-sky mb-4">{t("footer_quick_links")}</h4>
            <ul className="space-y-3">
              <li><a href="#categories" className="font-body text-sm text-theme-subtle hover:text-pixel-pink transition-colors">{t("footer_link_categories")}</a></li>
              <li><a href="#prompts" className="font-body text-sm text-theme-subtle hover:text-pixel-pink transition-colors">{t("footer_link_prompts")}</a></li>
              <li><a href="#how-it-works" className="font-body text-sm text-theme-subtle hover:text-pixel-pink transition-colors">{t("footer_link_how")}</a></li>
              <li><a href="#subscribe" className="font-body text-sm text-theme-subtle hover:text-pixel-pink transition-colors">{t("footer_link_subscribe")}</a></li>
              <li><a href="/about" className="font-body text-sm text-theme-subtle hover:text-pixel-pink transition-colors">{t("nav_about")}</a></li>
              <li><a href="/quotes" className="font-body text-sm text-theme-subtle hover:text-pixel-pink transition-colors">{t("nav_quotes")}</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-pixel text-[9px] text-pixel-mint mb-4">{t("footer_categories")}</h4>
            <ul className="space-y-3">
              <li><span className="font-body text-sm text-theme-subtle">🎨 {t("cat_image")}</span></li>
              <li><span className="font-body text-sm text-theme-subtle">💬 {t("cat_chat")}</span></li>
              <li><span className="font-body text-sm text-theme-subtle">📊 {t("cat_business")}</span></li>
              <li><span className="font-body text-sm text-theme-subtle">⚡ {t("cat_framework")}</span></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-pixel text-[9px] text-pixel-lavender mb-4">{t("footer_community")}</h4>
            <ul className="space-y-3">
              <li><span className="font-body text-sm text-theme-subtle hover:text-pixel-pink transition-colors cursor-pointer">🐦 Twitter</span></li>
              <li><span className="font-body text-sm text-theme-subtle hover:text-pixel-pink transition-colors cursor-pointer">💬 Discord</span></li>
              <li><span className="font-body text-sm text-theme-subtle hover:text-pixel-pink transition-colors cursor-pointer">📸 Instagram</span></li>
              <li><span className="font-body text-sm text-theme-subtle hover:text-pixel-pink transition-colors cursor-pointer">🌐 GitHub</span></li>
            </ul>
          </div>
        </div>

        {/* Pixel art divider */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {["bg-pixel-pink", "bg-pixel-sky", "bg-pixel-mint", "bg-pixel-yellow", "bg-pixel-lavender",
            "bg-pixel-pink", "bg-pixel-sky", "bg-pixel-mint", "bg-pixel-yellow", "bg-pixel-lavender"].map((c, i) => (
            <div key={i} className={`w-2 h-2 ${c}`} />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="font-pixel text-[7px] text-theme-faint">
            {t("footer_copyright")}
          </p>
          <p className="font-body text-[10px] text-theme-faint">
            {t("footer_free")}
          </p>
        </div>
      </div>
    </footer>
  );
}
