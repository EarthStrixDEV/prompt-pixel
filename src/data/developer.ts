// ═══════════════════════════════════════════
// 👤 Developer Profile — About Page Data
// ═══════════════════════════════════════════

export interface DeveloperTool {
  id: string;
  name: string;
  category: "chatbot" | "coding" | "image" | "search" | "agent" | "other";
  url?: string;
}

export interface DeveloperSkill {
  name: string;
  type: "language" | "framework" | "tool";
}

/** อันดับ AI ที่ชื่นชอบ (ลำดับในอาร์เรย์ = อันดับ) */
export interface FavoriteAI {
  name: string;
  url?: string;
}

export interface DeveloperProfile {
  name: string;
  /** Path under /public, e.g. "/images/developer.jpg". Fallback shown if image fails. */
  imagePath: string;
  /** อันดับ AI ที่ชื่นชอบ: อันดับ 1, 2, 3 ตามลำดับในอาร์เรย์ */
  favoriteAI: FavoriteAI[];
  aiTools: DeveloperTool[];
  languages: DeveloperSkill[];
  frameworks: DeveloperSkill[];
  links?: {
    github?: string;
    twitter?: string;
    website?: string;
    linkedin?: string;
  };
}

export const developerProfile: DeveloperProfile = {
  name: "EarthStrix",
  imagePath: "/images/developer.jpg",
  favoriteAI: [
    { name: "Gemini", url: "https://gemini.google.com" },
    { name: "Grok", url: "https://x.ai" },
    { name: "Cursor", url: "https://cursor.com" },
  ],
  aiTools: [
    { id: "cursor", name: "Cursor", category: "coding", url: "https://cursor.com" },
    { id: "chatgpt", name: "ChatGPT", category: "chatbot", url: "https://chat.openai.com" },
    { id: "claude", name: "Claude", category: "chatbot", url: "https://claude.ai" },
    { id: "v0", name: "Vercel v0", category: "coding", url: "https://v0.dev" },
    { id: "gemini", name: "Gemini", category: "chatbot", url: "https://gemini.google.com" },
  ],
  languages: [
    { name: "TypeScript", type: "language" },
    { name: "JavaScript", type: "language" },
    { name: "HTML / CSS", type: "language" },
    { name: "Python", type: "language" },
  ],
  frameworks: [
    { name: "Next.js", type: "framework" },
    { name: "React", type: "framework" },
    { name: "Tailwind CSS", type: "framework" },
    { name: "Node.js", type: "framework" },
  ],
  links: {
    github: "https://github.com/earthstrixdev",
    website: "#",
  },
};
