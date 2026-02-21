export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: CategoryType;
  subCategory?: SubCategoryType;
  tags: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  likes: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export type CategoryType = "image" | "chat" | "business" | "framework" | "video" | "coding" | "research" | "thinking";
export type SubCategoryType = "nana-banana" | "midjourney" | "flux" | "google-veo" | "gpt-sora";

export interface SubCategory {
  id: SubCategoryType;
  name: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  textColor: string;
  parentCategory: CategoryType;
}

export interface Category {
  id: CategoryType;
  name: string;
  description: string;
  icon: string;
  color: string;
  borderClass: string;
  bgClass: string;
  subCategories?: SubCategoryType[];
}

export const subCategories: SubCategory[] = [
  {
    id: "nana-banana",
    name: "Nana Banana (Gemini)",
    nameTh: "Nana Banana",
    description: "Prompt สำหรับสร้างภาพสไตล์ Nana Banana ผ่าน Gemini — ภาพน่ารัก สดใส สไตล์การ์ตูน",
    icon: "🍌",
    color: "pixel-yellow",
    borderColor: "#FFF176",
    textColor: "#FFF9C4",
    parentCategory: "image",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    nameTh: "Midjourney",
    description: "Prompt สำหรับ Midjourney — ภาพศิลปะระดับมืออาชีพ สไตล์หลากหลาย สวยปัง!",
    icon: "🌌",
    color: "pixel-lavender",
    borderColor: "#CE93D8",
    textColor: "#E1BEE7",
    parentCategory: "image",
  },
  {
    id: "flux",
    name: "Flux",
    nameTh: "Flux",
    description: "Prompt สำหรับ Flux — โมเดล Open Source สุดแรง สร้างภาพเรียลลิสติกและอาร์ตเวิร์ก",
    icon: "⚡",
    color: "pixel-sky",
    borderColor: "#81D4FA",
    textColor: "#B3E5FC",
    parentCategory: "image",
  },
  {
    id: "google-veo",
    name: "Google VEO",
    nameTh: "Google VEO",
    description: "Prompt สำหรับ Google VEO — สร้างวีดีโอ AI คุณภาพสูงจาก Google DeepMind",
    icon: "🔷",
    color: "pixel-sky",
    borderColor: "#81D4FA",
    textColor: "#B3E5FC",
    parentCategory: "video",
  },
  {
    id: "gpt-sora",
    name: "GPT Sora",
    nameTh: "GPT Sora",
    description: "Prompt สำหรับ OpenAI Sora — สร้างวีดีโอ AI ที่สมจริงระดับภาพยนตร์",
    icon: "🌀",
    color: "pixel-coral",
    borderColor: "#FF8A80",
    textColor: "#FFCDD2",
    parentCategory: "video",
  },
];

export const categories: Category[] = [
  {
    id: "image",
    name: "Image Generation",
    nameTh: "สร้างภาพ AI",
    description: "Prompts for generating stunning AI artwork and images",
    icon: "🎨",
    color: "pixel-pink",
    borderClass: "pixel-border-pink",
    bgClass: "bg-pixel-pink",
    subCategories: ["nana-banana", "midjourney", "flux"],
  },
  {
    id: "chat",
    name: "AI Chat & Conversation",
    nameTh: "แชทกับ AI",
    description: "Everyday prompts for productive AI conversations",
    icon: "💬",
    color: "pixel-sky",
    borderClass: "pixel-border-sky",
    bgClass: "bg-pixel-sky",
  },
  {
    id: "business",
    name: "Business & Strategy",
    nameTh: "แผนธุรกิจ",
    description: "Build business plans, marketing strategies, and more",
    icon: "📊",
    color: "pixel-mint",
    borderClass: "pixel-border-mint",
    bgClass: "bg-pixel-mint",
  },
  {
    id: "framework",
    name: "Prompt Engineering",
    nameTh: "Framework",
    description: "Advanced frameworks and techniques for better prompts",
    icon: "⚡",
    color: "pixel-lavender",
    borderClass: "pixel-border-lavender",
    bgClass: "bg-pixel-lavender",
  },
  {
    id: "video",
    name: "Video Generation",
    nameTh: "สร้างวีดีโอ",
    description: "Prompts for generating AI videos with VEO and Sora",
    icon: "🎬",
    color: "pixel-coral",
    borderClass: "pixel-border-coral",
    bgClass: "bg-pixel-coral",
    subCategories: ["google-veo", "gpt-sora"],
  },
  {
    id: "coding",
    name: "Coding & Development",
    nameTh: "Coding",
    description: "AI-powered coding assistants, debugging, and code generation",
    icon: "💻",
    color: "pixel-sky",
    borderClass: "pixel-border-sky",
    bgClass: "bg-pixel-sky",
  },
  {
    id: "research",
    name: "Research & Analysis",
    nameTh: "Research",
    description: "Deep research prompts for analysis, summarization, and insights",
    icon: "🔬",
    color: "pixel-mint",
    borderClass: "pixel-border-mint",
    bgClass: "bg-pixel-mint",
  },
  {
    id: "thinking",
    name: "Thinking & Reasoning",
    nameTh: "Thinking & Reasoning",
    description: "Advanced reasoning, critical thinking, and problem-solving prompts",
    icon: "🧠",
    color: "pixel-yellow",
    borderClass: "pixel-border-yellow",
    bgClass: "bg-pixel-yellow",
  },
];

export const getCategoryColor = (cat: CategoryType) => {
  switch (cat) {
    case "image": return { border: "#FF80BF", text: "#FFB3D9", bg: "rgba(255,179,217,0.1)" };
    case "chat": return { border: "#81D4FA", text: "#B3E5FC", bg: "rgba(179,229,252,0.1)" };
    case "business": return { border: "#A5D6A7", text: "#C8E6C9", bg: "rgba(200,230,201,0.1)" };
    case "framework": return { border: "#CE93D8", text: "#E1BEE7", bg: "rgba(225,190,231,0.1)" };
    case "video": return { border: "#FF8A80", text: "#FFCDD2", bg: "rgba(255,205,210,0.1)" };
    case "coding": return { border: "#80CBC4", text: "#B2DFDB", bg: "rgba(178,223,219,0.1)" };
    case "research": return { border: "#AED581", text: "#DCEDC8", bg: "rgba(220,237,200,0.1)" };
    case "thinking": return { border: "#FFD54F", text: "#FFF9C4", bg: "rgba(255,249,196,0.1)" };
  }
};

/** Count prompts belonging to a category */
export const getPromptCount = (categoryId: string) =>
  prompts.filter((p) => p.category === categoryId).length;

/** Count prompts belonging to a sub-category */
export const getSubPromptCount = (subCategoryId: string) =>
  prompts.filter((p) => p.subCategory === subCategoryId).length;

/** Total prompt count */
export const getTotalPromptCount = () => prompts.length;

export const prompts: Prompt[] = [
  // ═══════════════════════════════════════
  // 🍌 Nana Banana (Gemini)
  // ═══════════════════════════════════════
  {
    id: "img-nb-1",
    title: "Nana Banana Chibi Portrait",
    titleTh: "วาด Chibi สไตล์ Nana Banana",
    description: "สร้างตัวละคร Chibi น่ารักสไตล์ Nana Banana ผ่าน Gemini",
    prompt: "Draw a chibi-style character in the Nana Banana art style: [character description]. The character should have big sparkly eyes, a round face, and an adorable expression. Background: [pastel color/scene]. Add cute accessories like [bows/stars/hearts]. Style: kawaii, soft shading, vibrant pastel colors.",
    category: "image",
    subCategory: "nana-banana",
    tags: ["chibi", "kawaii", "nana-banana", "gemini"],
    difficulty: "beginner",
    likes: 512,
    isFeatured: true,
  },
  {
    id: "img-nb-2",
    title: "Nana Banana Sticker Pack",
    titleTh: "สร้าง Sticker Pack Nana Banana",
    description: "สร้างชุดสติกเกอร์น่ารักสไตล์ Nana Banana สำหรับ LINE/IG",
    prompt: "Create a set of 6 cute sticker designs in Nana Banana style featuring [character/mascot]. Expressions: happy, sad, angry, love, surprised, sleeping. Each sticker: white outline, transparent background, kawaii art style, bold colors, simple but expressive. Perfect for messaging apps.",
    category: "image",
    subCategory: "nana-banana",
    tags: ["sticker", "kawaii", "nana-banana", "pack"],
    difficulty: "beginner",
    likes: 389,
    isNew: true,
  },
  {
    id: "img-nb-3",
    title: "Nana Banana Scene Illustration",
    titleTh: "วาดฉากสไตล์ Nana Banana",
    description: "สร้างภาพประกอบฉากน่ารักสไตล์ Nana Banana",
    prompt: "Illustrate a cozy scene in Nana Banana style: [scene description, e.g. a cat café, a magical garden]. Include cute characters doing [activity]. Art style: soft watercolor-like textures, pastel color palette, warm lighting, whimsical details. Add small decorative elements like sparkles, hearts, and tiny flowers.",
    category: "image",
    subCategory: "nana-banana",
    tags: ["illustration", "scene", "nana-banana", "cozy"],
    difficulty: "intermediate",
    likes: 276,
  },

  // ═══════════════════════════════════════
  // 🌌 Midjourney
  // ═══════════════════════════════════════
  {
    id: "img-mj-1",
    title: "Cinematic Portrait",
    titleTh: "ภาพพอร์ตเทรตแบบภาพยนตร์",
    description: "สร้างภาพพอร์ตเทรตสุดสวยสไตล์ภาพยนตร์ฮอลลีวูด",
    prompt: "Cinematic portrait of [subject description], dramatic lighting, shallow depth of field, shot on 85mm f/1.4 lens, golden hour, film grain, color graded in teal and orange, volumetric fog, [mood] atmosphere --ar 2:3 --style raw --v 6.1",
    category: "image",
    subCategory: "midjourney",
    tags: ["portrait", "cinematic", "midjourney", "photography"],
    difficulty: "intermediate",
    likes: 723,
    isFeatured: true,
  },
  {
    id: "img-mj-2",
    title: "Fantasy Environment Concept",
    titleTh: "ออกแบบฉากแฟนตาซี",
    description: "สร้าง Concept Art ฉากแฟนตาซีระดับ AAA Game",
    prompt: "Epic fantasy environment concept art: [description, e.g. floating crystal citadel above clouds]. Dramatic scale, volumetric lighting, god rays, intricate architectural details, [art style e.g. Greg Rutkowski, Craig Mullins] style. Cinematic composition, matte painting quality --ar 16:9 --style raw --v 6.1",
    category: "image",
    subCategory: "midjourney",
    tags: ["fantasy", "concept-art", "environment", "midjourney"],
    difficulty: "advanced",
    likes: 634,
    isNew: true,
  },
  {
    id: "img-mj-3",
    title: "Product Photography Style",
    titleTh: "ภาพถ่ายสินค้าสไตล์โปร",
    description: "สร้างภาพถ่ายสินค้าแบบ Commercial ด้วย Midjourney",
    prompt: "Professional product photography of [product], studio lighting setup, clean [color] background, soft shadows, commercial quality, shot on Phase One IQ4 150MP, product centered, [angle] view, minimalist composition, magazine advertisement quality --ar 1:1 --style raw --v 6.1",
    category: "image",
    subCategory: "midjourney",
    tags: ["product", "photography", "commercial", "midjourney"],
    difficulty: "intermediate",
    likes: 445,
  },

  // ═══════════════════════════════════════
  // ⚡ Flux
  // ═══════════════════════════════════════
  {
    id: "img-fx-1",
    title: "Photorealistic Portrait",
    titleTh: "ภาพพอร์ตเทรตเหมือนจริง",
    description: "สร้างภาพพอร์ตเทรตเหมือนจริงด้วย Flux",
    prompt: "Ultra-realistic portrait photograph of [subject description]. Natural lighting from [direction], [indoor/outdoor] setting. Skin texture details, natural hair movement, [eye color] eyes with catchlights. Shot on Sony A7R V, 85mm f/1.2, ISO 100. Post-processed in Capture One, subtle color grading.",
    category: "image",
    subCategory: "flux",
    tags: ["photorealistic", "portrait", "flux", "realistic"],
    difficulty: "intermediate",
    likes: 567,
    isFeatured: true,
  },
  {
    id: "img-fx-2",
    title: "Anime Illustration (Flux)",
    titleTh: "วาดอนิเมะด้วย Flux",
    description: "สร้างภาพอนิเมะคุณภาพสูงด้วย Flux",
    prompt: "High quality anime illustration of [character description]. Style: [anime studio style, e.g. ufotable, Kyoto Animation]. Dynamic pose, detailed clothing with [fabric type], flowing [hair color] hair. Background: [scene]. Lighting: [type]. Clean linework, vibrant colors, cel-shaded with subtle gradients.",
    category: "image",
    subCategory: "flux",
    tags: ["anime", "illustration", "flux", "detailed"],
    difficulty: "beginner",
    likes: 498,
    isNew: true,
  },
  {
    id: "img-fx-3",
    title: "Text-in-Image (Flux)",
    titleTh: "สร้างภาพพร้อมข้อความ",
    description: "สร้างภาพที่มีข้อความหรือโลโก้ฝังอยู่ด้วย Flux",
    prompt: 'Create an image with embedded text "[YOUR TEXT HERE]" in [font style] typography. Design: [poster/logo/sign/book cover]. Visual style: [description]. The text should be clearly legible, properly kerned, and integrated naturally into the composition. Background: [design]. Color scheme: [colors].',
    category: "image",
    subCategory: "flux",
    tags: ["text", "typography", "flux", "design"],
    difficulty: "intermediate",
    likes: 334,
  },

  // ═══════════════════════════════════════
  // 🎨 General Image (no sub-category)
  // ═══════════════════════════════════════
  {
    id: "1",
    title: "Anime Character Generator",
    titleTh: "สร้างตัวละคร Anime",
    description: "Generate detailed anime characters with custom style",
    prompt: "Create a detailed anime character portrait: [character description]. Style: [art style e.g. Studio Ghibli, Makoto Shinkai]. Mood: [mood]. Background: [setting]. Include intricate details in hair, clothing, and eyes. High quality, 4K resolution, digital art.",
    category: "image",
    tags: ["anime", "character", "portrait"],
    difficulty: "beginner",
    likes: 342,
    isFeatured: true,
  },
  {
    id: "2",
    title: "Pixel Art Scene Creator",
    titleTh: "สร้างฉาก Pixel Art",
    description: "Generate beautiful pixel art scenes and landscapes",
    prompt: "Create a pixel art scene of [description]. Style: 16-bit retro game aesthetic. Color palette: [color scheme]. Include: [elements]. The scene should have [lighting type] lighting and convey a feeling of [mood]. Resolution: 256x256 pixels, clean pixel work.",
    category: "image",
    tags: ["pixel-art", "retro", "scene"],
    difficulty: "intermediate",
    likes: 287,
    isNew: true,
    isFeatured: true,
  },

  // ═══════════════════════════════════════
  // 💬 Chat
  // ═══════════════════════════════════════
  {
    id: "3",
    title: "Expert Advisor Mode",
    titleTh: "โหมดที่ปรึกษาผู้เชี่ยวชาญ",
    description: "Turn AI into a domain expert for in-depth guidance",
    prompt: 'You are a world-class expert in [field/domain] with 20+ years of experience. I need your guidance on [topic]. Please: 1) Explain the key concepts I need to understand, 2) Provide actionable steps, 3) Share common pitfalls to avoid, 4) Recommend resources for deeper learning. Communicate in a clear, supportive manner as if mentoring a promising student.',
    category: "chat",
    tags: ["expert", "advisor", "learning"],
    difficulty: "beginner",
    likes: 456,
    isFeatured: true,
  },
  {
    id: "4",
    title: "Creative Brainstorm Partner",
    titleTh: "คู่หูระดมไอเดีย",
    description: "AI brainstorming companion for creative projects",
    prompt: "Act as my creative brainstorming partner. The project is: [project description]. Help me: 1) Generate 10 unique ideas, 2) For each idea, provide a brief 'why it works' explanation, 3) Identify the top 3 most feasible ideas, 4) Create an action plan for the #1 pick. Be bold, think outside the box, and challenge my assumptions.",
    category: "chat",
    tags: ["creative", "brainstorm", "ideas"],
    difficulty: "beginner",
    likes: 298,
  },

  // ═══════════════════════════════════════
  // 📊 Business
  // ═══════════════════════════════════════
  {
    id: "5",
    title: "Lean Business Plan Builder",
    titleTh: "สร้างแผนธุรกิจแบบ Lean",
    description: "Generate a comprehensive lean startup business plan",
    prompt: "Create a Lean Business Plan for: [business idea]. Include: 1) Problem Statement & Target Customer, 2) Unique Value Proposition, 3) Solution Overview, 4) Revenue Streams & Pricing, 5) Key Metrics (KPIs), 6) Cost Structure, 7) Unfair Advantage, 8) Channels for customer acquisition. Format as a structured document with clear sections.",
    category: "business",
    tags: ["lean", "startup", "business-plan"],
    difficulty: "intermediate",
    likes: 521,
    isFeatured: true,
  },
  {
    id: "6",
    title: "SWOT Analysis Generator",
    titleTh: "วิเคราะห์ SWOT",
    description: "Complete SWOT analysis for any business or project",
    prompt: "Perform a comprehensive SWOT analysis for [business/project]: market: [market], competitors: [competitors]. For each quadrant provide: 1) At least 5 detailed points, 2) Supporting evidence or reasoning, 3) Priority ranking (High/Medium/Low). Then provide 3 strategic recommendations based on the analysis.",
    category: "business",
    tags: ["swot", "analysis", "strategy"],
    difficulty: "intermediate",
    likes: 234,
    isNew: true,
  },

  // ═══════════════════════════════════════
  // ⚡ Framework
  // ═══════════════════════════════════════
  {
    id: "7",
    title: "RACE Framework",
    titleTh: "RACE Framework",
    description: "Role, Action, Context, Execute — structured prompting technique",
    prompt: "[RACE Framework Template]\n\nRole: You are a [specific role with expertise level]\nAction: Your task is to [specific action/deliverable]\nContext: Background information: [relevant context, constraints, audience]\nExecute: Please deliver the output in [format] with [specific requirements]\n\nExample usage for marketing:\nRole: Senior Digital Marketing Strategist\nAction: Create a 30-day social media campaign\nContext: B2B SaaS product launching in SEA market, budget $5K\nExecute: Weekly content calendar with post copy, hashtags, and KPIs",
    category: "framework",
    tags: ["race", "structured", "technique"],
    difficulty: "advanced",
    likes: 678,
    isFeatured: true,
  },
  {
    id: "8",
    title: "Chain-of-Thought Prompting",
    titleTh: "Chain-of-Thought Prompting",
    description: "Step-by-step reasoning framework for complex problems",
    prompt: '[Chain-of-Thought Template]\n\nI need you to solve this problem step by step:\n\nProblem: [describe the problem]\n\nPlease think through this systematically:\nStep 1: Identify the key variables and constraints\nStep 2: Break down the problem into sub-problems\nStep 3: Solve each sub-problem with clear reasoning\nStep 4: Combine the solutions\nStep 5: Verify your answer\n\nShow your complete reasoning at each step. If you are uncertain, say "I\'m uncertain because..." and explain why.',
    category: "framework",
    tags: ["chain-of-thought", "reasoning", "step-by-step"],
    difficulty: "advanced",
    likes: 445,
    isNew: true,
  },
  {
    id: "fw-3",
    title: "Few-Shot Prompting",
    titleTh: "Few-Shot Prompting",
    description: "สอน AI ด้วยตัวอย่าง — ให้ผลลัพธ์ตรงใจด้วยการ 'โชว์' ก่อน 'สั่ง'",
    prompt: "[Few-Shot Prompting Template]\n\nI'll show you a few examples of the task I need, then ask you to do the same.\n\nExample 1:\nInput: [example input 1]\nOutput: [example output 1]\n\nExample 2:\nInput: [example input 2]\nOutput: [example output 2]\n\nExample 3:\nInput: [example input 3]\nOutput: [example output 3]\n\nNow, please follow the exact same pattern:\nInput: [your actual input]\nOutput:",
    category: "framework",
    tags: ["few-shot", "examples", "pattern-matching"],
    difficulty: "beginner",
    likes: 523,
    isFeatured: true,
  },
  {
    id: "fw-4",
    title: "Tree of Thoughts (ToT)",
    titleTh: "Tree of Thoughts (ToT)",
    description: "เทคนิคคิดแบบแตกกิ่ง — สำรวจหลายแนวทางพร้อมกันก่อนเลือกคำตอบที่ดีที่สุด",
    prompt: "[Tree of Thoughts Framework]\n\nProblem: [describe the complex problem]\n\nPlease solve this using Tree of Thoughts reasoning:\n\n1. BRANCH: Generate 3 distinct approaches to solve this problem\n   - Approach A: [brief description]\n   - Approach B: [brief description]\n   - Approach C: [brief description]\n\n2. EVALUATE: For each approach, think through 2-3 steps ahead\n   - Rate each path: promising / neutral / dead-end\n   - Explain your reasoning\n\n3. PRUNE: Eliminate dead-end approaches\n\n4. DEEPEN: Expand the most promising approach with full detail\n\n5. SYNTHESIZE: Present the final best solution with complete reasoning",
    category: "framework",
    tags: ["tree-of-thoughts", "reasoning", "multi-path"],
    difficulty: "advanced",
    likes: 389,
    isNew: true,
  },
  {
    id: "fw-5",
    title: "CRISP Framework",
    titleTh: "CRISP Framework",
    description: "Context, Role, Instructions, Style, Parameters — เทคนิค 5 ส่วนครบจบในตัว",
    prompt: "[CRISP Framework Template]\n\nContext: [What is the background? What problem are you solving? Who is the audience?]\n\nRole: [What role should the AI assume? e.g. Senior UX Designer, Data Scientist, Thai copywriter]\n\nInstructions: [Step-by-step instructions of what to do]\n1. [First task]\n2. [Second task]\n3. [Third task]\n\nStyle: [Tone and format requirements]\n- Tone: [professional / casual / academic / playful]\n- Format: [bullet points / essay / table / JSON]\n- Length: [word count or detail level]\n\nParameters: [Constraints and boundaries]\n- Must include: [required elements]\n- Must avoid: [things to exclude]\n- Language: [output language]",
    category: "framework",
    tags: ["crisp", "structured", "comprehensive"],
    difficulty: "intermediate",
    likes: 612,
    isFeatured: true,
  },
  {
    id: "fw-6",
    title: "Persona Pattern",
    titleTh: "Persona Pattern",
    description: "กำหนดบุคลิกให้ AI — ตอบเหมือนคนจริงที่มีประสบการณ์และอารมณ์",
    prompt: "[Persona Pattern Template]\n\nFrom now on, you are [Character Name], a [profession/role] with the following traits:\n\nBackground:\n- [Years of experience] years in [field]\n- Specializes in [specialization]\n- Known for [notable characteristic]\n\nPersonality:\n- Communication style: [direct / nurturing / humorous / academic]\n- Strengths: [key strengths]\n- Quirks: [unique behaviors or catchphrases]\n\nRules:\n1. Always respond in character\n2. Draw from your expertise when giving advice\n3. If asked something outside your expertise, acknowledge it honestly\n4. Use [language style] when speaking\n\nNow, as [Character Name], please help me with: [your request]",
    category: "framework",
    tags: ["persona", "roleplay", "character"],
    difficulty: "intermediate",
    likes: 367,
  },
  {
    id: "fw-7",
    title: "Meta-Prompting",
    titleTh: "Meta-Prompting",
    description: "Prompt ที่สร้าง Prompt — ให้ AI ช่วยเขียน Prompt ที่ดีที่สุดสำหรับงานของเธอ",
    prompt: "[Meta-Prompting Template]\n\nYou are a Prompt Engineering Expert. I need you to create the best possible prompt for the following task:\n\nTask: [describe what you want to achieve]\nTarget AI: [ChatGPT / Claude / Gemini / Midjourney / etc.]\nDesired output: [what the final result should look like]\n\nPlease:\n1. Analyze the task requirements\n2. Identify the optimal prompting technique (Chain-of-Thought, Few-Shot, RACE, etc.)\n3. Write a complete, optimized prompt\n4. Explain WHY you structured it that way\n5. Provide 2 alternative variations of the prompt\n6. List potential pitfalls and how the prompt addresses them\n\nFormat the final prompt in a code block so I can copy it directly.",
    category: "framework",
    tags: ["meta-prompt", "prompt-engineering", "optimization"],
    difficulty: "advanced",
    likes: 891,
    isNew: true,
    isFeatured: true,
  },

  // ═══════════════════════════════════════
  // 🎬 Video Generation — Google VEO
  // ═══════════════════════════════════════
  {
    id: "vid-1",
    title: "Cinematic Scene Generator",
    titleTh: "สร้างฉากภาพยนตร์ AI",
    description: "Generate cinematic video scenes with detailed camera movements and lighting",
    prompt: "Create a cinematic video of [scene description]. Camera: [camera movement — slow pan / tracking shot / drone aerial]. Lighting: [golden hour / neon noir / soft diffused]. Mood: [emotion]. Duration: [length]. Style: [photorealistic / stylized / anime]. Include [specific elements]. Resolution: 4K, 24fps cinematic look with film grain.",
    category: "video",
    subCategory: "google-veo",
    tags: ["cinematic", "veo", "scene"],
    difficulty: "intermediate",
    likes: 342,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "vid-2",
    title: "Product Showcase Video",
    titleTh: "วีดีโอโชว์สินค้า",
    description: "Professional product demo videos with 360° rotation and close-ups",
    prompt: "Generate a professional product showcase video of [product]. Start with a wide establishing shot on [background — marble / gradient / lifestyle setting]. Slowly rotate the product 360° with smooth camera movement. Cut to 3 detail close-ups highlighting [feature 1], [feature 2], [feature 3]. End with the product centered with [brand text overlay]. Lighting: studio soft-box, clean shadows. Style: commercial-grade, premium feel.",
    category: "video",
    subCategory: "google-veo",
    tags: ["product", "commercial", "veo"],
    difficulty: "beginner",
    likes: 278,
    isNew: true,
  },

  // 🎬 Video Generation — GPT Sora
  {
    id: "vid-3",
    title: "Storytelling Video Sequence",
    titleTh: "วีดีโอเล่าเรื่อง",
    description: "Create narrative video sequences with character continuity and plot progression",
    prompt: "Create a short narrative video sequence:\n\nScene 1: [establishing shot — location, time of day, atmosphere]\nScene 2: [introduce character — appearance, action, emotion]\nScene 3: [key event — what happens, camera reaction]\nScene 4: [resolution — outcome, final shot]\n\nStyle: [cinematic / documentary / music video]\nPacing: [slow and contemplative / fast-paced / rhythmic]\nColor palette: [warm earth tones / cool blues / vibrant saturated]\nAudio mood: [ambient / dramatic / uplifting]",
    category: "video",
    subCategory: "gpt-sora",
    tags: ["storytelling", "sora", "narrative"],
    difficulty: "advanced",
    likes: 456,
    isFeatured: true,
  },
  {
    id: "vid-4",
    title: "Social Media Reel Generator",
    titleTh: "สร้างคลิปสั้น",
    description: "Quick, eye-catching social media video content",
    prompt: "Generate a [15/30/60]-second social media reel about [topic].\n\nHook (first 3 seconds): [attention-grabbing visual — text overlay / surprising scene]\nBody: [main content — tutorial steps / transformation / before-after]\nCTA: [call to action — follow / like / visit link]\n\nFormat: 9:16 vertical, optimized for [TikTok / Instagram Reels / YouTube Shorts]\nTransitions: [smooth / glitch / zoom cuts]\nText overlays: [bold captions with key points]\nEnergy: [high / chill / professional]",
    category: "video",
    subCategory: "gpt-sora",
    tags: ["social-media", "reel", "sora"],
    difficulty: "beginner",
    likes: 389,
    isNew: true,
  },

  // ═══════════════════════════════════════
  // 💻 Coding & Development
  // ═══════════════════════════════════════
  {
    id: "code-1",
    title: "Full-Stack Feature Builder",
    titleTh: "สร้างฟีเจอร์ Full-Stack",
    description: "Generate complete feature implementation with frontend, backend, and database",
    prompt: "Build a complete [feature name] feature for a [tech stack — e.g. Next.js + Prisma + PostgreSQL] application.\n\nRequirements:\n- [Requirement 1]\n- [Requirement 2]\n- [Requirement 3]\n\nPlease provide:\n1. Database schema / migration\n2. Backend API endpoints (with validation)\n3. Frontend component with form handling\n4. Unit tests for critical paths\n5. Error handling and edge cases\n\nFollow these conventions:\n- [Naming convention]\n- [Code style — functional / OOP]\n- [State management approach]",
    category: "coding",
    tags: ["fullstack", "feature", "architecture"],
    difficulty: "advanced",
    likes: 567,
    isFeatured: true,
  },
  {
    id: "code-2",
    title: "Debug Detective",
    titleTh: "แก้บัค AI",
    description: "Systematic debugging prompt that helps isolate and fix issues",
    prompt: "I have a bug in my [language/framework] code. Help me debug it systematically.\n\nSymptom: [what's happening vs what should happen]\nError message: [paste error if any]\nCode:\n```\n[paste relevant code]\n```\n\nPlease:\n1. Analyze the error and identify possible root causes\n2. Rank causes by likelihood\n3. For each cause, explain WHY it could cause this symptom\n4. Provide a fix for the most likely cause\n5. Add defensive checks to prevent this in the future\n6. Suggest related issues I should also check",
    category: "coding",
    tags: ["debug", "troubleshoot", "fix"],
    difficulty: "intermediate",
    likes: 723,
    isFeatured: true,
    isNew: true,
  },
  {
    id: "code-3",
    title: "Code Review Expert",
    titleTh: "รีวิวโค้ด",
    description: "Professional code review with actionable improvement suggestions",
    prompt: "Review the following code as a senior engineer. Be thorough but constructive.\n\n```[language]\n[paste code]\n```\n\nReview for:\n1. **Correctness** — Logic errors, edge cases, off-by-one errors\n2. **Security** — SQL injection, XSS, auth bypass, data exposure\n3. **Performance** — N+1 queries, unnecessary re-renders, memory leaks\n4. **Readability** — Naming, complexity, function length\n5. **Best Practices** — [framework]-specific patterns, SOLID principles\n\nFor each issue, provide:\n- Severity: 🔴 Critical / 🟡 Warning / 🔵 Suggestion\n- Line reference\n- What's wrong and WHY\n- Concrete fix (code snippet)",
    category: "coding",
    tags: ["code-review", "quality", "best-practices"],
    difficulty: "advanced",
    likes: 445,
  },

  // ═══════════════════════════════════════
  // 🔬 Research & Analysis
  // ═══════════════════════════════════════
  {
    id: "res-1",
    title: "Deep Research Report",
    titleTh: "รายงานวิจัยเชิงลึก",
    description: "Comprehensive research report with structured analysis and citations",
    prompt: "Conduct a deep research analysis on [topic].\n\nScope: [specific aspect or angle to focus on]\nAudience: [who will read this — executives / academics / general public]\n\nStructure your report as:\n1. **Executive Summary** (3-5 sentences)\n2. **Background & Context** — Current state of [topic]\n3. **Key Findings** — At least 5 major findings with supporting evidence\n4. **Analysis** — Trends, patterns, and implications\n5. **Comparison** — Compare [2-3 alternatives/approaches]\n6. **Recommendations** — Actionable next steps (ranked by priority)\n7. **Sources & Further Reading**\n\nFormat: Use data-driven language, include statistics where relevant, present counter-arguments.",
    category: "research",
    tags: ["research", "report", "analysis"],
    difficulty: "advanced",
    likes: 534,
    isFeatured: true,
  },
  {
    id: "res-2",
    title: "Competitive Intelligence",
    titleTh: "วิเคราะห์คู่แข่ง",
    description: "Analyze competitors and market positioning for strategic planning",
    prompt: "Conduct a competitive analysis of [your company/product] vs [competitor 1], [competitor 2], [competitor 3].\n\nAnalyze:\n1. **Product Features** — Side-by-side comparison table\n2. **Pricing Strategy** — Pricing tiers and value proposition\n3. **Target Audience** — Who they serve and how\n4. **Strengths & Weaknesses** — SWOT for each competitor\n5. **Market Positioning** — How each brand positions itself\n6. **Online Presence** — Content strategy, SEO, social media approach\n7. **Customer Sentiment** — Common praise and complaints\n\nDeliverables:\n- Comparison matrix (table format)\n- Gap analysis: opportunities they miss\n- 3 actionable recommendations to differentiate",
    category: "research",
    tags: ["competitive", "market", "strategy"],
    difficulty: "intermediate",
    likes: 412,
    isNew: true,
  },
  {
    id: "res-3",
    title: "Literature Review Assistant",
    titleTh: "ทบทวนวรรณกรรม",
    description: "Structured literature review for academic and professional research",
    prompt: "Help me create a literature review on [research topic].\n\nResearch question: [specific question]\nField: [academic discipline]\nScope: [time period — last 5 years / last decade]\n\nPlease:\n1. Identify key themes and sub-topics in this field\n2. Summarize major findings from seminal works\n3. Identify gaps in current research\n4. Show how different studies relate to each other (agreements, contradictions)\n5. Suggest a theoretical framework that connects the literature\n6. Recommend 10 key papers I should read\n7. Identify emerging trends and future research directions\n\nFormat: Academic tone, use proper citation style [APA/MLA/Chicago].",
    category: "research",
    tags: ["literature", "academic", "review"],
    difficulty: "advanced",
    likes: 298,
  },

  // ═══════════════════════════════════════
  // 🧠 Thinking & Reasoning
  // ═══════════════════════════════════════
  {
    id: "think-1",
    title: "Socratic Problem Solver",
    titleTh: "คิดแบบโสกราตีส",
    description: "Use Socratic questioning to deeply analyze any problem",
    prompt: "Help me think through this problem using Socratic questioning:\n\nProblem: [describe the problem]\n\nGuide me through these layers:\n1. **Clarification** — What exactly do I mean? What assumptions am I making?\n2. **Evidence** — What evidence supports this? What evidence contradicts it?\n3. **Perspectives** — How would [expert A], [expert B], and [skeptic] view this?\n4. **Implications** — If this is true, what follows? If false, what changes?\n5. **Meta-thinking** — Why do I believe this? What biases might I have?\n\nAfter each layer, ask me 2-3 probing questions before moving on. Don't give me the answer — help me discover it myself.",
    category: "thinking",
    tags: ["socratic", "critical-thinking", "questioning"],
    difficulty: "advanced",
    likes: 645,
    isFeatured: true,
  },
  {
    id: "think-2",
    title: "Decision Matrix Builder",
    titleTh: "ตัดสินใจแบบเป็นระบบ",
    description: "Systematically evaluate options using weighted criteria",
    prompt: "Help me make a decision using a weighted decision matrix.\n\nDecision: [what I need to decide]\nOptions:\n- Option A: [description]\n- Option B: [description]\n- Option C: [description]\n\nPlease:\n1. Help me identify 5-7 evaluation criteria relevant to this decision\n2. Guide me in assigning weights (importance) to each criterion (total = 100%)\n3. Score each option against each criterion (1-10 scale)\n4. Calculate weighted scores and present a comparison table\n5. Identify the clear winner and explain why\n6. Play devil's advocate: argue for the non-winning options\n7. Suggest conditions under which a different option would win\n8. Give a final recommendation with confidence level",
    category: "thinking",
    tags: ["decision", "matrix", "evaluation"],
    difficulty: "intermediate",
    likes: 523,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "think-3",
    title: "First Principles Thinker",
    titleTh: "คิดจากหลักการพื้นฐาน",
    description: "Break down complex problems to fundamental truths and rebuild solutions",
    prompt: "Apply first principles thinking to this challenge:\n\nChallenge: [describe the problem or goal]\nCurrent approach: [how it's usually done]\n\nStep 1 — DECONSTRUCT\nBreak down the problem to its most fundamental truths. What do we know for certain?\n\nStep 2 — QUESTION\nWhy is [current approach] the standard? What constraints are real vs. assumed?\n\nStep 3 — REBUILD\nStarting from only the fundamental truths, what new solutions can we create?\n\nStep 4 — VALIDATE\nFor each new solution: Is it feasible? What would it take? What are the risks?\n\nStep 5 — COMPARE\nHow does the first-principles solution compare to the conventional approach on: cost, speed, quality, scalability?",
    category: "thinking",
    tags: ["first-principles", "innovation", "reasoning"],
    difficulty: "advanced",
    likes: 401,
  },
];
