"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      icon: "🔍",
      title: t("how_step1_title"),
      subtitle: t("how_step1_sub"),
      description: t("how_step1_desc"),
      color: "#FFB3D9",
      borderColor: "#FF80BF",
    },
    {
      step: "02",
      icon: "📋",
      title: t("how_step2_title"),
      subtitle: t("how_step2_sub"),
      description: t("how_step2_desc"),
      color: "#B3E5FC",
      borderColor: "#81D4FA",
    },
    {
      step: "03",
      icon: "🚀",
      title: t("how_step3_title"),
      subtitle: t("how_step3_sub"),
      description: t("how_step3_desc"),
      color: "#C8E6C9",
      borderColor: "#A5D6A7",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-theme-mid border-[3px] border-pixel-mint px-4 py-2 mb-4" style={{ boxShadow: "4px 4px 0px 0px #A5D6A7" }}>
            <span className="font-pixel text-[10px] text-pixel-mint">{t("how_label")}</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-theme mt-4 mb-3">
            {t("how_heading")}
          </h2>
          <p className="font-body text-theme-subtle max-w-lg mx-auto">
            {t("how_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[3px] bg-gradient-to-r from-pixel-pink via-pixel-sky to-pixel-mint" />

          {steps.map((step, index) => (
            <div key={step.step} className="relative text-center group">
              <div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-[3px] bg-theme-base relative z-10"
                style={{ borderColor: step.borderColor, boxShadow: `4px 4px 0px 0px ${step.borderColor}` }}
              >
                <span className="text-3xl group-hover:animate-wiggle">{step.icon}</span>
              </div>

              <div
                className="pixel-card bg-theme-card"
                style={{ borderColor: step.borderColor, boxShadow: `4px 4px 0px 0px ${step.borderColor}` }}
              >
                <div className="font-pixel text-[8px] mb-3" style={{ color: step.color }}>
                  STEP {step.step}
                </div>
                <h3 className="font-pixel text-[11px] mb-1 leading-relaxed" style={{ color: step.color }}>
                  {step.title}
                </h3>
                <p className="font-body text-xs text-theme-subtle mb-3">{step.subtitle}</p>
                <p className="font-body text-sm text-theme-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="md:hidden text-theme-faint text-2xl my-4 animate-pixel-bounce">▼</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
