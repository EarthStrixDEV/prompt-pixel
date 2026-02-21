"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { locales, type Locale } from "@/i18n/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((l) => l.code === locale) ?? locales[0];

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="pixel-btn bg-theme-mid text-theme-muted border-theme-muted text-[9px] px-3 py-2 flex items-center gap-2"
      >
        <span>{currentLocale.flag}</span>
        <span className="hidden sm:inline">{currentLocale.nativeName}</span>
        <span className="text-[7px]">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 animate-slide-up">
          <div className="bg-theme-mid border-[3px] border-pixel-pink/50 p-1" style={{ boxShadow: "4px 4px 0px 0px rgba(255,128,191,0.3)" }}>
            {/* Window title bar */}
            <div className="flex items-center gap-1 px-2 py-1 border-b-2 border-theme-muted mb-1">
              <div className="w-2 h-2 bg-pixel-coral border border-theme" />
              <div className="w-2 h-2 bg-pixel-yellow border border-theme" />
              <div className="w-2 h-2 bg-pixel-mint border border-theme" />
              <span className="font-pixel text-[6px] text-theme-faint ml-1">language.exe</span>
            </div>

            {locales.map((loc) => (
              <button
                key={loc.code}
                onClick={() => {
                  setLocale(loc.code as Locale);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 flex items-center gap-3 transition-all ${
                  locale === loc.code
                    ? "bg-pixel-pink/20 text-pixel-pink"
                    : "text-theme-subtle hover:bg-theme-card hover:text-theme"
                }`}
              >
                <span className="text-base">{loc.flag}</span>
                <div>
                  <div className="font-pixel text-[8px]">{loc.nativeName}</div>
                  <div className="font-body text-[10px] text-theme-faint">{loc.label}</div>
                </div>
                {locale === loc.code && (
                  <span className="ml-auto font-pixel text-[7px] text-pixel-pink">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
