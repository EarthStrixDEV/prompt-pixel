"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section id="subscribe" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="pixel-card bg-theme-mid relative overflow-hidden animate-rainbow-border">
          <div className="absolute top-2 left-2 w-4 h-4 border-t-[3px] border-l-[3px] border-pixel-pink/50" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-[3px] border-r-[3px] border-pixel-pink/50" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-[3px] border-l-[3px] border-pixel-pink/50" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-[3px] border-r-[3px] border-pixel-pink/50" />

          <div className="text-center py-8 px-4 sm:px-8 relative z-10">
            <div className="text-5xl mb-6 animate-float">💌</div>
            <h2 className="font-pixel text-lg sm:text-xl text-pixel-pink mb-3">
              {t("cta_heading")}
            </h2>
            <p className="font-body text-theme-muted mb-8 max-w-md mx-auto">
              {t("cta_description")}
            </p>

            {subscribed ? (
              <div className="pixel-card bg-pixel-mint/20 border-pixel-mint inline-block animate-pixel-fade-in"
                style={{ borderColor: "#A5D6A7", boxShadow: "4px 4px 0px 0px #A5D6A7" }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="font-pixel text-[10px] text-pixel-mint">{t("cta_success_title")}</p>
                    <p className="font-body text-xs text-theme-subtle mt-1">{t("cta_success_desc")}</p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="pixel-input flex-1"
                  required
                />
                <button type="submit" className="pixel-btn bg-pixel-pink text-pixel-dark hover:bg-pixel-pink-dark whitespace-nowrap">
                  {t("nav_subscribe")}
                </button>
              </form>
            )}

            <p className="font-body text-[10px] text-theme-faint mt-4">
              {t("cta_no_spam")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
