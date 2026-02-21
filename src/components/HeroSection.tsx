"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { getTotalPromptCount, categories } from "@/data/prompts";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Floating pixel decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-pixel-yellow animate-sparkle" />
        <div className="absolute top-32 right-[15%] w-3 h-3 bg-pixel-pink animate-sparkle" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-40 left-[30%] w-2 h-2 bg-pixel-sky animate-sparkle" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 right-[25%] w-2 h-2 bg-pixel-lavender animate-sparkle" style={{ animationDelay: "0.7s" }} />
        <div className="absolute bottom-60 left-[20%] w-3 h-3 bg-pixel-mint animate-sparkle" style={{ animationDelay: "1.2s" }} />

        <div className="absolute top-[20%] left-[8%] text-4xl animate-float opacity-30">🎨</div>
        <div className="absolute top-[30%] right-[10%] text-3xl animate-float-slow opacity-30">💬</div>
        <div className="absolute bottom-[30%] left-[12%] text-3xl animate-float opacity-30" style={{ animationDelay: "1s" }}>📊</div>
        <div className="absolute bottom-[20%] right-[8%] text-4xl animate-float-slow opacity-30" style={{ animationDelay: "0.5s" }}>⚡</div>
        <div className="absolute top-[50%] right-[20%] text-2xl animate-float opacity-20" style={{ animationDelay: "2s" }}>🤖</div>
        <div className="absolute top-[60%] left-[5%] text-2xl animate-float-slow opacity-20">✨</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Pixel art window frame */}
        <div className="bg-theme-mid border-[4px] border-pixel-pink p-1 mb-8 inline-block animate-slide-up">
          <div className="bg-pixel-pink/20 border-[2px] border-pixel-pink/50 px-6 py-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-pixel-coral border-2 border-theme" />
            <div className="w-3 h-3 bg-pixel-yellow border-2 border-theme" />
            <div className="w-3 h-3 bg-pixel-mint border-2 border-theme" />
            <span className="font-pixel text-[8px] text-pixel-pink ml-2">prompt_pixel.exe</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-theme mb-4 leading-relaxed animate-slide-up">
          <span className="text-pixel-pink">Prompt</span>{" "}
          <span className="text-pixel-yellow">Pixel</span>
        </h1>

        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <p className="font-pixel text-[10px] sm:text-xs text-pixel-sky mb-6 tracking-wider">
            {t("hero_subtitle")}
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="font-body text-base sm:text-lg text-theme-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("hero_description_1")}
            <span className="text-pixel-pink font-bold">{t("hero_description_ai_prompt")}</span>
            {t("hero_description_2")}
            <span className="text-pixel-sky font-bold">{t("hero_description_image")}</span>
            {t("hero_description_3")}
            <span className="text-pixel-mint font-bold">{t("hero_description_business")}</span>
            {t("hero_description_4")}
            <span className="text-pixel-lavender font-bold">{t("hero_description_framework")}</span>
            {t("hero_description_5")}
            <span className="text-pixel-yellow font-bold">{t("hero_description_chat")}</span>
            {t("hero_description_6")}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <a href="#prompts" className="pixel-btn bg-pixel-pink text-pixel-dark hover:bg-pixel-pink-dark">
            {t("hero_cta_prompts")}
          </a>
          <a href="#categories" className="pixel-btn bg-theme-mid text-pixel-sky border-pixel-sky hover:bg-theme-light">
            {t("hero_cta_categories")}
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <div className="font-pixel text-lg sm:text-xl text-pixel-pink">{getTotalPromptCount()}</div>
            <div className="font-body text-xs text-theme-subtle mt-1">{t("hero_stat_prompts")}</div>
          </div>
          <div className="w-[3px] h-8 bg-theme-muted/20" />
          <div className="text-center">
            <div className="font-pixel text-lg sm:text-xl text-pixel-sky">{categories.length}</div>
            <div className="font-body text-xs text-theme-subtle mt-1">{t("hero_stat_categories")}</div>
          </div>
          <div className="w-[3px] h-8 bg-theme-muted/20" />
          <div className="text-center">
            <div className="font-pixel text-lg sm:text-xl text-pixel-mint">{t("hero_stat_free")}</div>
            <div className="font-body text-xs text-theme-subtle mt-1">{t("hero_stat_free_label")}</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-pixel-bounce">
          <div className="font-pixel text-[8px] text-theme-faint mb-2">{t("hero_scroll")}</div>
          <div className="text-theme-faint text-xl">▼</div>
        </div>
      </div>
    </section>
  );
}
