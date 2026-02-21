"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import PixelNav from "@/components/PixelNav";
import PixelFooter from "@/components/PixelFooter";
import { developerProfile } from "@/data/developer";
import type { DeveloperTool, DeveloperSkill, FavoriteAI } from "@/data/developer";

// Fallback avatar when image fails to load
function ProfileAvatar({
  imagePath,
  name,
  className,
}: {
  imagePath: string;
  name: string;
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (imgError) {
    return (
      <div
        className={`flex items-center justify-center bg-theme-mid border-[3px] border-pixel-pink text-pixel-pink font-pixel text-2xl ${className}`}
        style={{ boxShadow: "4px 4px 0px 0px rgba(255,128,191,0.5)" }}
      >
        {initials}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden border-[3px] border-pixel-pink ${className}`} style={{ boxShadow: "4px 4px 0px 0px rgba(255,128,191,0.5)" }}>
      <Image
        src={imagePath}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 200px, 280px"
        onError={() => setImgError(true)}
        priority
      />
    </div>
  );
}

function ToolBadge({ tool }: { tool: DeveloperTool }) {
  const { t } = useLanguage();
  const content = (
    <span className="inline-flex items-center gap-2 font-body text-sm text-theme border-[2px] border-theme-muted px-3 py-1.5 transition-colors hover:border-pixel-pink hover:text-pixel-pink">
      {tool.name}
      {tool.url && <span className="text-[10px] opacity-70">↗</span>}
    </span>
  );
  if (tool.url) {
    return (
      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }
  return content;
}

function SkillChip({ skill }: { skill: DeveloperSkill }) {
  return (
    <span
      className="inline-block font-body text-sm text-theme bg-theme-card border-[2px] border-pixel-mint px-3 py-1.5"
      style={{ boxShadow: "2px 2px 0px 0px rgba(165,214,167,0.4)" }}
    >
      {skill.name}
    </span>
  );
}

function FavoriteAIRow({ item, rank }: { item: FavoriteAI; rank: number }) {
  const content = (
    <span className="font-body text-sm text-theme">
      <span
        className="font-pixel text-[10px] text-pixel-pink mr-2 inline-flex items-center justify-center w-6 h-6 border-[2px] border-pixel-pink bg-theme-card"
        style={{ boxShadow: "2px 2px 0px 0px rgba(255,128,191,0.5)" }}
      >
        {rank}
      </span>
      {item.name}
    </span>
  );
  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 py-2 px-3 border-[2px] border-theme-muted hover:border-pixel-yellow hover:text-pixel-yellow transition-colors"
      >
        {content}
        <span className="text-[10px] opacity-70">↗</span>
      </a>
    );
  }
  return (
    <div className="flex items-center gap-2 py-2 px-3 border-[2px] border-theme-muted">
      {content}
    </div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();
  const { name, imagePath, favoriteAI, aiTools, languages, frameworks, links } = developerProfile;

  return (
    <main className="relative min-h-screen">
      <PixelNav />

      {/* Hero */}
      <section className="pt-24 pb-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-block bg-theme-mid border-[3px] border-pixel-pink px-4 py-2 mb-6"
            style={{ boxShadow: "4px 4px 0px 0px #FF80BF" }}
          >
            <span className="font-pixel text-[10px] text-pixel-pink">
              👤 {t("developer_title")}
            </span>
          </div>
          <h1 className="font-pixel text-xl sm:text-3xl text-theme mb-2">
            {t("developer_heading")}
          </h1>
          <p className="font-body text-theme-subtle text-sm">
            {t("developer_subtitle")}
          </p>
        </div>
      </section>

      {/* Profile Card */}
      <section className="px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          <div
            className="pixel-card bg-theme-card border-pixel-pink p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left"
            style={{ boxShadow: "6px 6px 0px 0px rgba(255,128,191,0.35)" }}
          >
            <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-none">
              <ProfileAvatar imagePath={imagePath} name={name} className="w-full h-full rounded-none" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-pixel text-lg text-pixel-pink mb-1">{name}</h2>
              <p className="font-body text-sm text-pixel-yellow mb-3">{t("developer_role")}</p>
              <p className="font-body text-sm text-theme-subtle leading-relaxed">
                {t("developer_bio")}
              </p>
              {links && (links.github || links.website || links.twitter || links.linkedin) && (
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="font-pixel text-[9px] text-theme-faint w-full sm:w-auto">{t("developer_links_title")}</span>
                  {links.website && (
                    <a href={links.website} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-pixel-sky hover:underline">
                      {t("developer_visit_link")} ↗
                    </a>
                  )}
                  {links.github && (
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-pixel-mint hover:underline">
                      GitHub ↗
                    </a>
                  )}
                  {links.twitter && (
                    <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-pixel-lavender hover:underline">
                      Twitter ↗
                    </a>
                  )}
                  {links.linkedin && (
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-pixel-yellow hover:underline">
                      LinkedIn ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* อันดับ AI ที่ชื่นชอบ */}
      <section className="px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-pixel text-sm text-pixel-yellow mb-2">{t("developer_favorite_ai_title")}</h3>
          <div className="flex flex-col gap-2">
            {favoriteAI.map((item, index) => (
              <FavoriteAIRow key={item.name} item={item} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-pixel text-sm text-pixel-sky mb-2">{t("developer_ai_tools_title")}</h3>
          <p className="font-body text-xs text-theme-subtle mb-4">{t("developer_ai_tools_desc")}</p>
          <div className="flex flex-wrap gap-2">
            {aiTools.map((tool) => (
              <ToolBadge key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Frameworks */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-pixel text-sm text-pixel-mint mb-2">{t("developer_lang_framework_title")}</h3>
          <p className="font-body text-xs text-theme-subtle mb-4">{t("developer_lang_framework_desc")}</p>
          <div className="flex flex-wrap gap-2">
            {languages.map((s) => (
              <SkillChip key={s.name} skill={s} />
            ))}
            {frameworks.map((s) => (
              <SkillChip key={s.name} skill={s} />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-8 text-center">
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
