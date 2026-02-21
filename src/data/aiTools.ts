// ═══════════════════════════════════════════
// 🤖 AI Tools Directory Data
// ═══════════════════════════════════════════

export type AIToolCategory = "chatbot" | "coding" | "image" | "search" | "agent";

export interface AITool {
  id: string;
  name: string;
  description: string;
  descriptionTh: string;
  url: string;
  logo: string;         // URL to the real logo image
  category: AIToolCategory;
  tags: string[];
  color: string;        // border & accent color
  bgGlow: string;       // glow color for hover
  isFree: boolean;
  hasPro: boolean;
}

export const aiToolCategories: { id: AIToolCategory; label: string; labelTh: string; icon: string }[] = [
  { id: "chatbot", label: "Chatbots", labelTh: "แชทบอท", icon: "💬" },
  { id: "coding", label: "Coding", labelTh: "เขียนโค้ด", icon: "💻" },
  { id: "image", label: "Image Gen", labelTh: "สร้างภาพ", icon: "🎨" },
  { id: "search", label: "Search", labelTh: "ค้นหา", icon: "🔍" },
  { id: "agent", label: "AI Agents", labelTh: "AI เอเจนท์", icon: "🤖" },
];

export const aiTools: AITool[] = [
  // ── Chatbots ──
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI's flagship conversational AI. Supports GPT-4o, image generation, web browsing, and code execution.",
    descriptionTh: "AI สนทนาจาก OpenAI รองรับ GPT-4o, สร้างภาพ, ค้นหาเว็บ และรันโค้ดได้",
    url: "https://chat.openai.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    category: "chatbot",
    tags: ["GPT-4o", "DALL·E", "Code Interpreter"],
    color: "#10A37F",
    bgGlow: "rgba(16, 163, 127, 0.15)",
    isFree: true,
    hasPro: true,
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's thoughtful AI assistant. Excels at analysis, writing, coding, and long-context reasoning.",
    descriptionTh: "AI จาก Anthropic เก่งเรื่องวิเคราะห์ เขียน โค้ด และคิดเชิงลึก",
    url: "https://claude.ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg",
    category: "chatbot",
    tags: ["Claude 3.5", "200K Context", "Artifacts"],
    color: "#D97757",
    bgGlow: "rgba(217, 119, 87, 0.15)",
    isFree: true,
    hasPro: true,
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Google's multimodal AI. Integrates with Google ecosystem, handles text, images, code, and more.",
    descriptionTh: "AI จาก Google รองรับหลายรูปแบบ เชื่อมต่อกับระบบ Google ได้",
    url: "https://gemini.google.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    category: "chatbot",
    tags: ["Gemini 2.0", "Multimodal", "Google Integration"],
    color: "#4285F4",
    bgGlow: "rgba(66, 133, 244, 0.15)",
    isFree: true,
    hasPro: true,
  },
  {
    id: "grok",
    name: "Grok",
    description: "xAI's AI with real-time X (Twitter) integration. Known for unfiltered responses and humor.",
    descriptionTh: "AI จาก xAI เชื่อมต่อกับ X (Twitter) แบบเรียลไทม์ ตอบแบบตรงไปตรงมา",
    url: "https://grok.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Grok_logo.svg",
    category: "chatbot",
    tags: ["Grok-2", "Real-time X", "Unfiltered"],
    color: "#1DA1F2",
    bgGlow: "rgba(29, 161, 242, 0.15)",
    isFree: true,
    hasPro: true,
  },
  {
    id: "meta-ai",
    name: "Meta AI",
    description: "Meta's AI assistant powered by Llama. Available across Facebook, Instagram, WhatsApp, and web.",
    descriptionTh: "AI จาก Meta ใช้ Llama ใช้งานได้ผ่าน Facebook, Instagram, WhatsApp และเว็บ",
    url: "https://www.meta.ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    category: "chatbot",
    tags: ["Llama 3", "Social Integration", "Free"],
    color: "#0668E1",
    bgGlow: "rgba(6, 104, 225, 0.15)",
    isFree: true,
    hasPro: false,
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    description: "Microsoft's AI companion integrated with Bing, Edge, and Microsoft 365. Web grounded responses.",
    descriptionTh: "AI จาก Microsoft เชื่อมต่อกับ Bing, Edge และ Microsoft 365",
    url: "https://copilot.microsoft.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg",
    category: "chatbot",
    tags: ["GPT-4", "Bing Search", "Microsoft 365"],
    color: "#7B83EB",
    bgGlow: "rgba(123, 131, 235, 0.15)",
    isFree: true,
    hasPro: true,
  },

  // ── Search ──
  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI-powered search engine that provides cited, research-grade answers from the internet.",
    descriptionTh: "เครื่องมือค้นหา AI ที่ให้คำตอบพร้อมอ้างอิงแหล่งที่มาจากอินเทอร์เน็ต",
    url: "https://www.perplexity.ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Perplexity_AI_logo.svg",
    category: "search",
    tags: ["Citations", "Research", "Pro Search"],
    color: "#22B8CF",
    bgGlow: "rgba(34, 184, 207, 0.15)",
    isFree: true,
    hasPro: true,
  },

  // ── Image ──
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Premium AI image generator with stunning artistic quality. Known for photorealistic and stylistic outputs.",
    descriptionTh: "เครื่องมือสร้างภาพ AI คุณภาพสูง สร้างภาพสไตล์ศิลปะและเหมือนจริง",
    url: "https://www.midjourney.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    category: "image",
    tags: ["V6", "Image Gen", "Art Style"],
    color: "#FF6B6B",
    bgGlow: "rgba(255, 107, 107, 0.15)",
    isFree: false,
    hasPro: true,
  },

  // ── Coding ──
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-native code editor built on VS Code. Intelligent autocomplete, chat, and codebase-aware editing.",
    descriptionTh: "Code Editor ที่มี AI ในตัว สร้างบน VS Code มี autocomplete และแชทกับโค้ดเบสได้",
    url: "https://www.cursor.com",
    logo: "https://www.cursor.com/brand/icon.svg",
    category: "coding",
    tags: ["VS Code", "Autocomplete", "Agent"],
    color: "#8B5CF6",
    bgGlow: "rgba(139, 92, 246, 0.15)",
    isFree: true,
    hasPro: true,
  },
  {
    id: "antigravity",
    name: "Antigravity (Jules)",
    description: "Google DeepMind's advanced agentic coding assistant. Autonomous coding agent that works in your IDE.",
    descriptionTh: "AI เขียนโค้ดจาก Google DeepMind ทำงานใน IDE ได้อัตโนมัติ",
    url: "https://idx.google.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    category: "coding",
    tags: ["DeepMind", "Agentic", "Autonomous"],
    color: "#FF80BF",
    bgGlow: "rgba(255, 128, 191, 0.15)",
    isFree: true,
    hasPro: true,
  },
  {
    id: "windsurf",
    name: "Windsurf",
    description: "AI-powered IDE by Codeium. Features Cascade for multi-file edits and deep codebase understanding.",
    descriptionTh: "IDE ที่มี AI จาก Codeium มีฟีเจอร์ Cascade แก้ไขหลายไฟล์พร้อมกัน",
    url: "https://windsurf.com",
    logo: "https://exafunction.github.io/public/images/windsurf/windsurf-app-icon.png",
    category: "coding",
    tags: ["Cascade", "Multi-file", "IDE"],
    color: "#06B6D4",
    bgGlow: "rgba(6, 182, 212, 0.15)",
    isFree: true,
    hasPro: true,
  },

  // ── Agent ──
  {
    id: "manus",
    name: "Manus",
    description: "General-purpose AI agent that can browse the web, write code, manage files, and complete complex tasks autonomously.",
    descriptionTh: "AI Agent ที่ทำงานได้หลากหลาย ท่องเว็บ เขียนโค้ด จัดการไฟล์ ทำงานซับซ้อนอัตโนมัติ",
    url: "https://manus.im",
    logo: "https://manus.im/favicon.ico",
    category: "agent",
    tags: ["Autonomous", "Web Browse", "Multi-task"],
    color: "#F59E0B",
    bgGlow: "rgba(245, 158, 11, 0.15)",
    isFree: false,
    hasPro: true,
  },
];
