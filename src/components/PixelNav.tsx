"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import type { TranslationKey } from "@/i18n/translations";

// ─── Single source of truth: ลิงก์และกลุ่มเมนู (รักษา Logic เดิม, ง่ายต่อการเพิ่ม/ลบ) ───
const MAIN_LINKS: { href: string; tKey: TranslationKey; hoverClass: string }[] = [
  { href: "/#categories", tKey: "nav_categories", hoverClass: "hover:text-pixel-pink" },
  { href: "/#prompts", tKey: "nav_prompts", hoverClass: "hover:text-pixel-sky" },
  { href: "/#how-it-works", tKey: "nav_howItWorks", hoverClass: "hover:text-pixel-mint" },
];

const PAGE_LINKS: { href: string; label: string; tKey?: TranslationKey; hoverClass: string }[] = [
  { href: "/ai-tools", label: "AI Tools", hoverClass: "hover:text-pixel-yellow" },
  { href: "/about", label: "", tKey: "nav_about", hoverClass: "hover:text-pixel-lavender" },
  { href: "/quotes", label: "", tKey: "nav_quotes", hoverClass: "hover:text-pixel-lavender" },
];

export default function PixelNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-theme-nav backdrop-blur-sm border-b-[3px] border-pixel-pink"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: แถวเดียว ไม่ wrap — Logo | ลิงก์ | Theme + Language | Subscribe */}
        <div className="hidden md:flex md:flex-nowrap md:items-center md:justify-between h-14 sm:h-16 gap-2 md:gap-4 min-w-0">
          <a
            href="/"
            className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0"
            aria-label="Prompt Pixel — กลับหน้าหลัก"
          >
            <span className="text-xl sm:text-2xl animate-wiggle" aria-hidden>🎮</span>
            <h1 className="font-pixel text-sm sm:text-base text-pixel-pink tracking-wide truncate">
              Prompt<span className="text-pixel-yellow">Pixel</span>
            </h1>
          </a>
          <div className="flex flex-nowrap items-center gap-0 justify-end min-w-0 shrink">
            {MAIN_LINKS.map(({ href, tKey, hoverClass }, i) => (
              <span key={href} className="flex items-center shrink-0">
                {i > 0 && <span className="w-px h-4 bg-theme-muted/50 mx-1 shrink-0" aria-hidden />}
                <a
                  href={href}
                  className={`font-body text-xs sm:text-sm text-theme-muted transition-colors px-2 py-2 rounded-sm whitespace-nowrap ${hoverClass}`}
                >
                  {t(tKey)}
                </a>
              </span>
            ))}
            <span className="w-px h-4 bg-theme-muted/50 mx-1 shrink-0" aria-hidden />
            <a
              href={PAGE_LINKS[0].href}
              className={`font-body text-xs sm:text-sm text-theme-muted transition-colors px-2 py-2 rounded-sm whitespace-nowrap shrink-0 ${PAGE_LINKS[0].hoverClass}`}
            >
              🤖 {PAGE_LINKS[0].label}
            </a>
            {PAGE_LINKS.slice(1).map(({ href, tKey, hoverClass }) => (
              <span key={href} className="flex items-center shrink-0">
                <span className="w-px h-4 bg-theme-muted/50 mx-1" aria-hidden />
                <a
                  href={href}
                  className={`font-body text-xs sm:text-sm text-theme-muted transition-colors px-2 py-2 rounded-sm whitespace-nowrap ${hoverClass}`}
                >
                  {tKey ? t(tKey) : ""}
                </a>
              </span>
            ))}
            <span className="w-px h-4 bg-theme-muted/50 mx-2 shrink-0" aria-hidden />
            <ThemeSwitcher />
            <LanguageSwitcher />
            <a
              href="/#subscribe"
              className="pixel-btn bg-pixel-pink text-pixel-dark text-[10px] shrink-0 ml-1"
            >
              {t("nav_subscribe")}
            </a>
          </div>
        </div>

        {/* Mobile: Bar เดียว Logo + Theme + Language + Hamburger */}
        <div className="flex md:hidden items-center justify-between h-14 sm:h-16 gap-4">
          <a
            href="/"
            className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0"
            aria-label="Prompt Pixel — กลับหน้าหลัก"
          >
            <span className="text-xl sm:text-2xl animate-wiggle" aria-hidden>🎮</span>
            <h1 className="font-pixel text-sm sm:text-base text-pixel-pink tracking-wide truncate">
              Prompt<span className="text-pixel-yellow">Pixel</span>
            </h1>
          </a>
          <div className="flex items-center gap-2 shrink-0">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="pixel-btn bg-theme-mid text-pixel-pink text-[10px] px-3 py-2"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileOpen ? "ปิดเมนู" : "เปิดเมนู"}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu — theme เดิม, จัดกลุ่มและระยะกดให้ชัด */}
        {mobileOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden pb-4 animate-slide-up"
            role="dialog"
            aria-label="เมนูนำทาง"
          >
            <div className="flex flex-col gap-0 bg-theme-mid border-[3px] border-pixel-pink/30 border-t-0">
              {/* ลิงก์ในหน้า */}
              {MAIN_LINKS.map(({ href, tKey, hoverClass }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  className={`font-body text-sm text-theme-muted py-3 px-4 border-b border-theme-muted/30 last:border-b-0 ${hoverClass}`}
                >
                  {t(tKey)}
                </a>
              ))}
              {/* ลิงก์ไปหน้าอื่น */}
              <a
                href={PAGE_LINKS[0].href}
                onClick={closeMobile}
                className="font-body text-sm text-theme-muted py-3 px-4 border-b border-theme-muted/30 hover:text-pixel-yellow"
              >
                🤖 {PAGE_LINKS[0].label}
              </a>
              {PAGE_LINKS.slice(1).map(({ href, tKey, hoverClass }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  className={`font-body text-sm text-theme-muted py-3 px-4 border-b border-theme-muted/30 ${hoverClass}`}
                >
                  {tKey ? t(tKey) : ""}
                </a>
              ))}
              {/* CTA แยกกลุ่มด้วยขอบ */}
              <div className="pt-2 mt-1 border-t border-pixel-pink/20">
                <a
                  href="/#subscribe"
                  onClick={closeMobile}
                  className="block pixel-btn bg-pixel-pink text-pixel-dark text-[10px] text-center mx-4 py-3"
                >
                  {t("nav_subscribe")}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
