"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import PixelNav from "@/components/PixelNav";
import PixelFooter from "@/components/PixelFooter";
import { aiTools, aiToolCategories } from "@/data/aiTools";
import type { AIToolCategory } from "@/data/aiTools";

export default function AIToolsPage() {
  const { locale, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<AIToolCategory | "all">("all");
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const filteredTools =
    activeFilter === "all"
      ? aiTools
      : aiTools.filter((tool) => tool.category === activeFilter);

  return (
    <main className="relative">
      <PixelNav />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Decorative badge */}
          <div
            className="inline-block bg-theme-mid border-[3px] border-pixel-pink px-4 py-2 mb-6"
            style={{ boxShadow: "4px 4px 0px 0px #FF80BF" }}
          >
            <span className="font-pixel text-[10px] text-pixel-pink">
              🤖 {locale === "th" ? "เครื่องมือ AI" : "AI Tools Directory"}
            </span>
          </div>

          <h1 className="font-pixel text-xl sm:text-3xl text-theme mb-4 leading-relaxed">
            {locale === "th" ? (
              <>
                รวม<span className="text-pixel-pink">เครื่องมือ AI</span> ยอดนิยม
              </>
            ) : (
              <>
                Popular <span className="text-pixel-pink">AI Tools</span> Collection
              </>
            )}
          </h1>

          <p className="font-body text-theme-subtle max-w-xl mx-auto text-sm sm:text-base">
            {locale === "th"
              ? "รวบรวมเครื่องมือ AI ที่ดีที่สุด พร้อมลิงก์เข้าถึงโดยตรง — Chatbot, Coding, สร้างภาพ และอื่นๆ"
              : "A curated collection of the best AI tools with direct links — Chatbots, Coding, Image Gen, and more."}
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
            <div className="pixel-card bg-theme-card px-4 py-2 !border-pixel-sky" style={{ boxShadow: "3px 3px 0px 0px #81D4FA" }}>
              <span className="font-pixel text-[14px] text-pixel-sky">{aiTools.length}</span>
              <span className="font-body text-[11px] text-theme-subtle ml-2">
                {locale === "th" ? "เครื่องมือ" : "Tools"}
              </span>
            </div>
            <div className="pixel-card bg-theme-card px-4 py-2 !border-pixel-mint" style={{ boxShadow: "3px 3px 0px 0px #A5D6A7" }}>
              <span className="font-pixel text-[14px] text-pixel-mint">{aiTools.filter(t => t.isFree).length}</span>
              <span className="font-body text-[11px] text-theme-subtle ml-2">
                {locale === "th" ? "ใช้ฟรี" : "Free"}
              </span>
            </div>
            <div className="pixel-card bg-theme-card px-4 py-2 !border-pixel-lavender" style={{ boxShadow: "3px 3px 0px 0px #CE93D8" }}>
              <span className="font-pixel text-[14px] text-pixel-lavender">{aiToolCategories.length}</span>
              <span className="font-body text-[11px] text-theme-subtle ml-2">
                {locale === "th" ? "หมวดหมู่" : "Categories"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {/* All button */}
            <button
              onClick={() => setActiveFilter("all")}
              className={`pixel-tag transition-all ${
                activeFilter === "all"
                  ? "bg-pixel-pink text-pixel-dark border-pixel-pink"
                  : "bg-theme-mid text-theme-subtle hover:text-theme border-theme-muted"
              }`}
            >
              🎯 {locale === "th" ? "ทั้งหมด" : "All"}
            </button>

            {aiToolCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`pixel-tag transition-all ${
                  activeFilter === cat.id
                    ? "bg-pixel-pink text-pixel-dark border-pixel-pink"
                    : "bg-theme-mid text-theme-subtle hover:text-theme border-theme-muted"
                }`}
              >
                {cat.icon} {locale === "th" ? cat.labelTh : cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Cards Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => {
              const isHovered = hoveredTool === tool.id;
              return (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-card bg-theme-card group block relative overflow-hidden"
                  style={{
                    borderColor: tool.color,
                    boxShadow: isHovered
                      ? `6px 6px 0px 0px ${tool.color}, 0 0 30px ${tool.bgGlow}`
                      : `4px 4px 0px 0px ${tool.color}`,
                    animationDelay: `${index * 0.05}s`,
                  }}
                  onMouseEnter={() => setHoveredTool(tool.id)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  {/* Glow background on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${tool.bgGlow}, transparent 70%)` }}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-12 h-12 flex items-center justify-center border-2 bg-theme-base/50 group-hover:scale-110 transition-transform overflow-hidden p-1.5"
                        style={{ borderColor: tool.color }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          style={{ imageRendering: "auto" }}
                          onError={(e) => {
                            // Fallback: show first letter of tool name as a styled placeholder
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent && !parent.querySelector(".logo-fallback")) {
                              const fallback = document.createElement("span");
                              fallback.className = "logo-fallback font-pixel text-lg";
                              fallback.style.color = tool.color;
                              fallback.textContent = tool.name.charAt(0);
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-pixel text-[11px] leading-relaxed group-hover:tracking-wider transition-all" style={{ color: tool.color }}>
                          {tool.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          {tool.isFree && (
                            <span className="font-pixel text-[7px] px-1.5 py-0.5 bg-pixel-mint/20 text-pixel-mint border border-pixel-mint/30">
                              FREE
                            </span>
                          )}
                          {tool.hasPro && (
                            <span className="font-pixel text-[7px] px-1.5 py-0.5 bg-pixel-yellow/20 text-pixel-yellow border border-pixel-yellow/30">
                              PRO
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-body text-xs text-theme-muted mb-4 leading-relaxed">
                      {locale === "th" ? tool.descriptionTh : tool.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tool.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-body text-[9px] px-2 py-0.5 border text-theme-faint bg-theme-card"
                          style={{ borderColor: `${tool.color}33` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Visit link */}
                    <div
                      className="flex items-center justify-between border-t-2 pt-3 mt-auto"
                      style={{ borderColor: `${tool.color}33` }}
                    >
                      <span className="font-body text-[10px] text-theme-faint truncate max-w-[60%]">
                        {tool.url.replace("https://", "").replace("www.", "")}
                      </span>
                      <span
                        className="font-pixel text-[8px] group-hover:translate-x-1 transition-transform"
                        style={{ color: tool.color }}
                      >
                        {locale === "th" ? "เข้าใช้ →" : "VISIT →"}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Note */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="pixel-card bg-theme-card border-theme-muted"
            style={{ boxShadow: "4px 4px 0px 0px rgba(255,255,255,0.05)" }}
          >
            <p className="font-body text-xs text-theme-faint leading-relaxed">
              {locale === "th"
                ? "💡 ลิงก์ทั้งหมดจะเปิดในแท็บใหม่ — เครื่องมือบางตัวอาจต้องสมัครสมาชิกเพื่อใช้งานฟีเจอร์เต็ม"
                : "💡 All links open in a new tab — some tools may require a subscription for full features."}
            </p>
          </div>
        </div>
      </section>

      {/* Back button */}
      <div className="text-center pb-12">
        <Link href="/" className="pixel-btn bg-theme-mid text-theme-subtle hover:text-pixel-pink">
          ← {locale === "th" ? "กลับหน้าหลัก" : "Back Home"}
        </Link>
      </div>

      <PixelFooter />
    </main>
  );
}
