import type { Locale } from "@/i18n/translations";
import type { CategoryType, SubCategoryType } from "@/data/prompts";

// ═══════════════════════════════════════
// Types
// ═══════════════════════════════════════
export interface PromptLocaleData {
  title: string;
  description: string;
  prompt: string;
}

// ═══════════════════════════════════════
// Category & SubCategory name translations
// ═══════════════════════════════════════
export const categoryTranslations: Record<string, Record<CategoryType, string>> = {
  th: { image: "สร้างภาพ AI", chat: "แชทกับ AI", business: "แผนธุรกิจ", framework: "Framework", video: "สร้างวีดีโอ", coding: "Coding", research: "Research", thinking: "Thinking & Reasoning" },
  zh: { image: "AI 图像生成", chat: "AI 对话", business: "商业计划", framework: "框架", video: "AI 视频生成", coding: "编程", research: "研究", thinking: "思维与推理" },
  ko: { image: "이미지 생성", chat: "AI 채팅", business: "사업 계획", framework: "프레임워크", video: "동영상 생성", coding: "코딩", research: "리서치", thinking: "사고 & 추론" },
  ja: { image: "画像生成", chat: "AIチャット", business: "ビジネスプラン", framework: "フレームワーク", video: "動画生成", coding: "コーディング", research: "リサーチ", thinking: "思考と推論" },
  id: { image: "Buat Gambar AI", chat: "Chat AI", business: "Rencana Bisnis", framework: "Framework", video: "Buat Video AI", coding: "Coding", research: "Riset", thinking: "Berpikir & Penalaran" },
};

export const subCategoryTranslations: Record<string, Record<SubCategoryType, string>> = {
  th: { "nana-banana": "Nana Banana", midjourney: "Midjourney", flux: "Flux", "google-veo": "Google VEO", "gpt-sora": "GPT Sora" },
  zh: { "nana-banana": "Nana Banana", midjourney: "Midjourney", flux: "Flux", "google-veo": "Google VEO", "gpt-sora": "GPT Sora" },
  ko: { "nana-banana": "나나 바나나", midjourney: "미드저니", flux: "플럭스", "google-veo": "구글 VEO", "gpt-sora": "GPT 소라" },
  ja: { "nana-banana": "ナナバナナ", midjourney: "Midjourney", flux: "Flux", "google-veo": "Google VEO", "gpt-sora": "GPT Sora" },
  id: { "nana-banana": "Nana Banana", midjourney: "Midjourney", flux: "Flux", "google-veo": "Google VEO", "gpt-sora": "GPT Sora" },
};

// ═══════════════════════════════════════
// Prompt content translations
// key = Locale (excluding "en" which is base)
// value = { [promptId]: { title, description, prompt } }
// ═══════════════════════════════════════
export const promptTranslations: Record<string, Record<string, PromptLocaleData>> = {

  // ─────────────────────────────────────
  // 🇹🇭 Thai
  // ─────────────────────────────────────
  th: {
    "img-nb-1": {
      title: "วาด Chibi สไตล์ Nana Banana",
      description: "สร้างตัวละคร Chibi น่ารักสไตล์ Nana Banana ผ่าน Gemini",
      prompt: "วาดตัวละครสไตล์ chibi แบบ Nana Banana: [คำอธิบายตัวละคร] ตัวละครควรมีตาโตวิ้งๆ หน้ากลม แสดงอารมณ์น่ารัก พื้นหลัง: [สีพาสเทล/ฉาก] เพิ่มเครื่องประดับน่ารัก เช่น [โบว์/ดาว/หัวใจ] สไตล์: kawaii, แรเงาอ่อนนุ่ม, สีพาสเทลสดใส",
    },
    "img-nb-2": {
      title: "สร้าง Sticker Pack Nana Banana",
      description: "สร้างชุดสติกเกอร์น่ารักสไตล์ Nana Banana สำหรับ LINE/IG",
      prompt: "สร้างชุดสติกเกอร์ 6 แบบสไตล์ Nana Banana ของ [ตัวละคร/มาสคอต] อารมณ์: ดีใจ, เศร้า, โกรธ, รัก, ตกใจ, นอนหลับ แต่ละสติกเกอร์: เส้นขอบขาว, พื้นหลังโปร่งใส, สไตล์ kawaii, สีสดใส, เรียบง่ายแต่อารมณ์ชัด เหมาะสำหรับแอปแชท",
    },
    "img-nb-3": {
      title: "วาดฉากสไตล์ Nana Banana",
      description: "สร้างภาพประกอบฉากน่ารักสไตล์ Nana Banana",
      prompt: "วาดภาพฉากอบอุ่นสไตล์ Nana Banana: [คำอธิบายฉาก เช่น ร้านกาแฟแมว, สวนมหัศจรรย์] มีตัวละครน่ารักกำลัง [กิจกรรม] สไตล์: สีน้ำอ่อนนุ่ม, โทนสีพาสเทล, แสงอบอุ่น, รายละเอียดแฟนตาซี เพิ่มของตกแต่งเล็กๆ เช่น ประกายดาว, หัวใจ, ดอกไม้เล็กๆ",
    },
    "img-mj-1": {
      title: "ภาพพอร์ตเทรตแบบภาพยนตร์",
      description: "สร้างภาพพอร์ตเทรตสุดสวยสไตล์ภาพยนตร์ฮอลลีวูด",
      prompt: "ภาพพอร์ตเทรตแบบภาพยนตร์ของ [คำอธิบายบุคคล] แสงดราม่า, ชัดตื้น, ถ่ายด้วยเลนส์ 85mm f/1.4, golden hour, เกรนฟิล์ม, color grade โทน teal-orange, หมอกแสง, บรรยากาศ [อารมณ์] --ar 2:3 --style raw --v 6.1",
    },
    "img-mj-2": {
      title: "ออกแบบฉากแฟนตาซี",
      description: "สร้าง Concept Art ฉากแฟนตาซีระดับ AAA Game",
      prompt: "Concept art ฉากแฟนตาซีอลังการ: [คำอธิบาย เช่น ปราสาทคริสตัลลอยเหนือเมฆ] สเกลยิ่งใหญ่, แสง volumetric, god rays, สถาปัตยกรรมวิจิตร, สไตล์ [ศิลปิน] องค์ประกอบแบบภาพยนตร์, คุณภาพ matte painting --ar 16:9 --style raw --v 6.1",
    },
    "img-mj-3": {
      title: "ภาพถ่ายสินค้าสไตล์โปร",
      description: "สร้างภาพถ่ายสินค้าแบบ Commercial ด้วย Midjourney",
      prompt: "ภาพถ่ายสินค้ามืออาชีพของ [สินค้า] ไฟสตูดิโอ, พื้นหลัง [สี] สะอาด, เงาอ่อน, คุณภาพ commercial, ถ่ายด้วย Phase One IQ4 150MP, จัดตำแหน่งกลาง, มุม [มุมถ่าย], องค์ประกอบมินิมอล, คุณภาพโฆษณานิตยสาร --ar 1:1 --style raw --v 6.1",
    },
    "img-fx-1": {
      title: "ภาพพอร์ตเทรตเหมือนจริง",
      description: "สร้างภาพพอร์ตเทรตเหมือนจริงด้วย Flux",
      prompt: "ภาพถ่ายพอร์ตเทรตเหมือนจริงมากของ [คำอธิบายบุคคล] แสงธรรมชาติจาก [ทิศทาง], [ในร่ม/กลางแจ้ง] รายละเอียดผิวหนัง, ผมพลิ้ว, ตา [สีตา] มี catchlights ถ่ายด้วย Sony A7R V, 85mm f/1.2, ISO 100 ตกแต่งด้วย Capture One, color grading อ่อนนุ่ม",
    },
    "img-fx-2": {
      title: "วาดอนิเมะด้วย Flux",
      description: "สร้างภาพอนิเมะคุณภาพสูงด้วย Flux",
      prompt: "ภาพอนิเมะคุณภาพสูงของ [คำอธิบายตัวละคร] สไตล์: [สตูดิโอ เช่น ufotable, Kyoto Animation] ท่าทางไดนามิก, เสื้อผ้าละเอียดแบบ [ผ้า], ผม [สีผม] พลิ้ว พื้นหลัง: [ฉาก] แสง: [ประเภท] เส้นสะอาด, สีสด, cel-shade พร้อม gradient อ่อน",
    },
    "img-fx-3": {
      title: "สร้างภาพพร้อมข้อความ",
      description: "สร้างภาพที่มีข้อความหรือโลโก้ฝังอยู่ด้วย Flux",
      prompt: "สร้างภาพที่มีข้อความ \"[ข้อความของคุณ]\" ในฟอนต์สไตล์ [สไตล์ฟอนต์] ดีไซน์: [โปสเตอร์/โลโก้/ป้าย/ปกหนังสือ] สไตล์ภาพ: [คำอธิบาย] ข้อความต้องอ่านง่าย, จัดระยะตัวอักษรดี, กลมกลืนกับภาพ พื้นหลัง: [ดีไซน์] โทนสี: [สี]",
    },
    "1": {
      title: "สร้างตัวละคร Anime",
      description: "สร้างตัวละครอนิเมะพร้อมสไตล์ที่กำหนดเอง",
      prompt: "สร้างภาพตัวละครอนิเมะแบบละเอียด: [คำอธิบายตัวละคร] สไตล์: [เช่น Studio Ghibli, Makoto Shinkai] อารมณ์: [อารมณ์] พื้นหลัง: [ฉาก] รายละเอียดผม, เสื้อผ้า, และดวงตา คุณภาพสูง, 4K, digital art",
    },
    "2": {
      title: "สร้างฉาก Pixel Art",
      description: "สร้างฉาก Pixel Art และวิวทิวทัศน์สวยๆ",
      prompt: "สร้างฉาก pixel art ของ [คำอธิบาย] สไตล์: 16-bit เกมย้อนยุค จานสี: [โทนสี] เพิ่ม: [องค์ประกอบ] ฉากควรมีแสง [ประเภท] และให้ความรู้สึก [อารมณ์] ความละเอียด: 256x256 พิกเซล, งาน pixel สะอาด",
    },
    "3": {
      title: "โหมดที่ปรึกษาผู้เชี่ยวชาญ",
      description: "เปลี่ยน AI เป็นผู้เชี่ยวชาญเฉพาะทางเพื่อคำแนะนำเชิงลึก",
      prompt: "คุณคือผู้เชี่ยวชาญระดับโลกในด้าน [สาขา] ที่มีประสบการณ์กว่า 20 ปี ฉันต้องการคำแนะนำเรื่อง [หัวข้อ] กรุณา: 1) อธิบายแนวคิดหลักที่ต้องเข้าใจ 2) ให้ขั้นตอนที่ทำได้จริง 3) แชร์ข้อผิดพลาดที่ควรหลีกเลี่ยง 4) แนะนำแหล่งเรียนรู้เพิ่มเติม",
    },
    "4": {
      title: "คู่หูระดมไอเดีย",
      description: "AI เพื่อนคู่คิดสำหรับโปรเจกต์สร้างสรรค์",
      prompt: "เป็นคู่หูระดมไอเดียของฉัน โปรเจกต์คือ: [คำอธิบายโปรเจกต์] ช่วย: 1) สร้างไอเดียเด็ด 10 ข้อ 2) อธิบายสั้นๆ ว่าทำไมแต่ละข้อถึงเวิร์ก 3) เลือก 3 ข้อที่ทำได้จริงที่สุด 4) วางแผนการทำงานสำหรับข้อที่ 1 คิดกล้าๆ นอกกรอบ และท้าทายสมมติฐานของฉัน",
    },
    "5": {
      title: "สร้างแผนธุรกิจแบบ Lean",
      description: "สร้างแผนธุรกิจ Lean Startup อย่างครบถ้วน",
      prompt: "สร้างแผนธุรกิจ Lean สำหรับ: [ไอเดียธุรกิจ] ครอบคลุม: 1) ปัญหา & กลุ่มเป้าหมาย 2) จุดขายที่แตกต่าง 3) ภาพรวมโซลูชัน 4) ช่องทางรายได้ & ราคา 5) ตัวชี้วัด (KPIs) 6) โครงสร้างต้นทุน 7) ข้อได้เปรียบ 8) ช่องทางหาลูกค้า จัดรูปแบบเป็นเอกสารที่มีหัวข้อชัดเจน",
    },
    "6": {
      title: "วิเคราะห์ SWOT",
      description: "วิเคราะห์ SWOT ครบถ้วนสำหรับธุรกิจหรือโปรเจกต์",
      prompt: "วิเคราะห์ SWOT อย่างครอบคลุมสำหรับ [ธุรกิจ/โปรเจกต์]: ตลาด: [ตลาด], คู่แข่ง: [คู่แข่ง] แต่ละด้านให้: 1) อย่างน้อย 5 ประเด็นละเอียด 2) หลักฐานสนับสนุน 3) จัดลำดับความสำคัญ (สูง/กลาง/ต่ำ) จากนั้นให้ 3 ข้อเสนอแนะเชิงกลยุทธ์",
    },
    "7": {
      title: "RACE Framework",
      description: "Role, Action, Context, Execute — เทคนิค Prompt แบบมีโครงสร้าง",
      prompt: "[RACE Framework]\n\nRole: คุณคือ [บทบาทที่เฉพาะเจาะจงพร้อมระดับความเชี่ยวชาญ]\nAction: งานของคุณคือ [การกระทำ/ผลลัพธ์ที่ต้องการ]\nContext: ข้อมูลเบื้องหลัง: [บริบท, ข้อจำกัด, กลุ่มเป้าหมาย]\nExecute: ส่งผลลัพธ์ในรูปแบบ [format] พร้อม [ข้อกำหนดเฉพาะ]",
    },
    "8": {
      title: "Chain-of-Thought Prompting",
      description: "เฟรมเวิร์กการคิดทีละขั้นสำหรับปัญหาซับซ้อน",
      prompt: "[Chain-of-Thought]\n\nช่วยแก้ปัญหานี้ทีละขั้น:\n\nปัญหา: [อธิบายปัญหา]\n\nกรุณาคิดอย่างเป็นระบบ:\nขั้น 1: ระบุตัวแปรหลักและข้อจำกัด\nขั้น 2: แยกปัญหาเป็นปัญหาย่อย\nขั้น 3: แก้แต่ละปัญหาย่อยพร้อมเหตุผล\nขั้น 4: รวมคำตอบ\nขั้น 5: ตรวจสอบคำตอบ\n\nแสดงเหตุผลทุกขั้นตอน",
    },
    "fw-3": { title: "Few-Shot Prompting", description: "สอน AI ด้วยตัวอย่าง — ให้ผลลัพธ์ตรงใจด้วยการ 'โชว์' ก่อน 'สั่ง'", prompt: "" },
    "fw-4": { title: "Tree of Thoughts (ToT)", description: "เทคนิคคิดแบบแตกกิ่ง — สำรวจหลายแนวทางพร้อมกันก่อนเลือกคำตอบที่ดีที่สุด", prompt: "" },
    "fw-5": { title: "CRISP Framework", description: "Context, Role, Instructions, Style, Parameters — เทคนิค 5 ส่วนครบจบในตัว", prompt: "" },
    "fw-6": { title: "Persona Pattern", description: "กำหนดบุคลิกให้ AI — ตอบเหมือนคนจริงที่มีประสบการณ์และอารมณ์", prompt: "" },
    "fw-7": { title: "Meta-Prompting", description: "Prompt ที่สร้าง Prompt — ให้ AI ช่วยเขียน Prompt ที่ดีที่สุดสำหรับงานของเธอ", prompt: "" },
    "vid-1": { title: "สร้างฉากภาพยนตร์ AI", description: "สร้างฉากวีดีโอแบบภาพยนตร์พร้อมการเคลื่อนกล้องและแสงที่ละเอียด", prompt: "" },
    "vid-2": { title: "วีดีโอโชว์สินค้า", description: "วีดีโอโชว์สินค้ามืออาชีพหมุน 360° พร้อมมุมโคลสอัพ", prompt: "" },
    "vid-3": { title: "วีดีโอเล่าเรื่อง", description: "สร้างวีดีโอเล่าเรื่องพร้อมตัวละครและพล็อตที่ต่อเนื่อง", prompt: "" },
    "vid-4": { title: "สร้างคลิปสั้น", description: "คอนเทนต์วีดีโอสั้นสะดุดตาสำหรับโซเชียลมีเดีย", prompt: "" },
    "code-1": { title: "สร้างฟีเจอร์ Full-Stack", description: "สร้างฟีเจอร์ครบทั้ง frontend, backend, database", prompt: "" },
    "code-2": { title: "แก้บัค AI", description: "Prompt แก้บัคอย่างเป็นระบบ ช่วยหาสาเหตุและแก้ไข", prompt: "" },
    "code-3": { title: "รีวิวโค้ด", description: "รีวิวโค้ดแบบมืออาชีพพร้อมข้อเสนอแนะที่ปฏิบัติได้", prompt: "" },
    "res-1": { title: "รายงานวิจัยเชิงลึก", description: "รายงานวิจัยครบถ้วนพร้อมการวิเคราะห์และอ้างอิง", prompt: "" },
    "res-2": { title: "วิเคราะห์คู่แข่ง", description: "วิเคราะห์คู่แข่งและตำแหน่งตลาดเชิงกลยุทธ์", prompt: "" },
    "res-3": { title: "ทบทวนวรรณกรรม", description: "ทบทวนวรรณกรรมอย่างมีโครงสร้างสำหรับงานวิจัย", prompt: "" },
    "think-1": { title: "คิดแบบโสกราตีส", description: "ใช้คำถามแบบโสกราตีสวิเคราะห์ปัญหาอย่างลึกซึ้ง", prompt: "" },
    "think-2": { title: "ตัดสินใจแบบเป็นระบบ", description: "ประเมินตัวเลือกอย่างเป็นระบบด้วยเกณฑ์ถ่วงน้ำหนัก", prompt: "" },
    "think-3": { title: "คิดจากหลักการพื้นฐาน", description: "แยกปัญหาซับซ้อนเป็นความจริงพื้นฐานแล้วสร้างทางออกใหม่", prompt: "" },
  },

  // ─────────────────────────────────────
  // 🇨🇳 Chinese
  // ─────────────────────────────────────
  zh: {
    "img-nb-1": { title: "Nana Banana Q版头像", description: "通过 Gemini 创建可爱的 Nana Banana 风格 Q版角色", prompt: "" },
    "img-nb-2": { title: "Nana Banana 贴纸包", description: "创建一套可爱的 Nana Banana 风格贴纸", prompt: "" },
    "img-nb-3": { title: "Nana Banana 场景插画", description: "创建可爱的 Nana Banana 风格场景插画", prompt: "" },
    "img-mj-1": { title: "电影级肖像", description: "创建好莱坞风格的电影级肖像", prompt: "" },
    "img-mj-2": { title: "奇幻场景概念", description: "创建 AAA 级游戏的奇幻场景概念艺术", prompt: "" },
    "img-mj-3": { title: "专业产品摄影", description: "用 Midjourney 创建商业级产品照片", prompt: "" },
    "img-fx-1": { title: "超写实肖像", description: "用 Flux 创建超写实肖像照", prompt: "" },
    "img-fx-2": { title: "Flux 动漫插画", description: "用 Flux 创建高质量动漫插画", prompt: "" },
    "img-fx-3": { title: "图文设计", description: "用 Flux 创建嵌入文字的图像", prompt: "" },
    "1": { title: "动漫角色生成器", description: "生成自定义风格的详细动漫角色", prompt: "" },
    "2": { title: "像素艺术场景", description: "生成精美的像素艺术场景和风景", prompt: "" },
    "3": { title: "专家顾问模式", description: "将 AI 转变为领域专家进行深度指导", prompt: "" },
    "4": { title: "创意头脑风暴伙伴", description: "AI 创意项目头脑风暴伴侣", prompt: "" },
    "5": { title: "精益商业计划", description: "生成全面的精益创业商业计划", prompt: "" },
    "6": { title: "SWOT 分析生成器", description: "为任何业务或项目进行完整的 SWOT 分析", prompt: "" },
    "7": { title: "RACE 框架", description: "Role, Action, Context, Execute — 结构化提示技术", prompt: "" },
    "8": { title: "思维链提示", description: "复杂问题的逐步推理框架", prompt: "" },
    "fw-3": { title: "少样本提示", description: "用示例教 AI — 先展示再命令", prompt: "" },
    "fw-4": { title: "思维树 (ToT)", description: "分支思考技术 — 同时探索多条路径后选择最佳答案", prompt: "" },
    "fw-5": { title: "CRISP 框架", description: "Context, Role, Instructions, Style, Parameters — 五合一技术", prompt: "" },
    "fw-6": { title: "人设模式", description: "为 AI 设定人格 — 像有经验和情感的真人一样回答", prompt: "" },
    "fw-7": { title: "元提示", description: "生成提示的提示 — 让 AI 帮你写出最佳提示", prompt: "" },
    "vid-1": { title: "电影场景生成器", description: "生成带有详细镜头移动和灯光的电影视频", prompt: "" },
    "vid-2": { title: "产品展示视频", description: "专业产品展示视频含360°旋转和特写", prompt: "" },
    "vid-3": { title: "叙事视频序列", description: "创建带角色连续性和剧情发展的叙事视频", prompt: "" },
    "vid-4": { title: "社交媒体短视频", description: "快速吸睛的社交媒体视频内容", prompt: "" },
    "code-1": { title: "全栈功能构建", description: "生成包含前端、后端和数据库的完整功能", prompt: "" },
    "code-2": { title: "调试侦探", description: "系统性调试提示，帮助定位和修复问题", prompt: "" },
    "code-3": { title: "代码审查专家", description: "专业代码审查，附可操作改进建议", prompt: "" },
    "res-1": { title: "深度研究报告", description: "结构化分析的综合研究报告", prompt: "" },
    "res-2": { title: "竞争情报", description: "分析竞争对手和市场定位", prompt: "" },
    "res-3": { title: "文献综述助手", description: "学术和专业研究的结构化文献综述", prompt: "" },
    "think-1": { title: "苏格拉底式问题解决", description: "使用苏格拉底式提问深入分析问题", prompt: "" },
    "think-2": { title: "决策矩阵构建器", description: "使用加权标准系统评估选项", prompt: "" },
    "think-3": { title: "第一性原理思维", description: "将复杂问题分解为基本真理并重建解决方案", prompt: "" },
  },

  // ─────────────────────────────────────
  // 🇰🇷 Korean
  // ─────────────────────────────────────
  ko: {
    "img-nb-1": { title: "나나 바나나 치비 초상화", description: "Gemini를 통해 귀여운 나나 바나나 스타일 치비 캐릭터 생성", prompt: "" },
    "img-nb-2": { title: "나나 바나나 스티커 팩", description: "귀여운 나나 바나나 스타일 스티커 세트 제작", prompt: "" },
    "img-nb-3": { title: "나나 바나나 장면 일러스트", description: "귀여운 나나 바나나 스타일 장면 일러스트 생성", prompt: "" },
    "img-mj-1": { title: "시네마틱 초상화", description: "할리우드 스타일의 멋진 영화 초상화 생성", prompt: "" },
    "img-mj-2": { title: "판타지 환경 컨셉", description: "AAA 게임급 판타지 환경 컨셉 아트 생성", prompt: "" },
    "img-mj-3": { title: "제품 촬영 스타일", description: "Midjourney로 상업용 제품 사진 생성", prompt: "" },
    "img-fx-1": { title: "포토리얼리스틱 초상화", description: "Flux로 초사실적 초상화 생성", prompt: "" },
    "img-fx-2": { title: "Flux 애니메이션 일러스트", description: "Flux로 고품질 애니메이션 일러스트 생성", prompt: "" },
    "img-fx-3": { title: "텍스트 이미지 디자인", description: "Flux로 텍스트가 포함된 이미지 생성", prompt: "" },
    "1": { title: "애니메이션 캐릭터 생성기", description: "맞춤 스타일의 상세한 애니메이션 캐릭터 생성", prompt: "" },
    "2": { title: "픽셀 아트 장면", description: "아름다운 픽셀 아트 장면과 풍경 생성", prompt: "" },
    "3": { title: "전문가 어드바이저 모드", description: "AI를 특정 분야 전문가로 전환하여 심층 안내", prompt: "" },
    "4": { title: "크리에이티브 브레인스토밍", description: "창작 프로젝트를 위한 AI 브레인스토밍 파트너", prompt: "" },
    "5": { title: "린 사업 계획 수립", description: "포괄적인 린 스타트업 사업 계획 생성", prompt: "" },
    "6": { title: "SWOT 분석 생성기", description: "모든 비즈니스 또는 프로젝트를 위한 완전한 SWOT 분석", prompt: "" },
    "7": { title: "RACE 프레임워크", description: "Role, Action, Context, Execute — 구조화된 프롬프팅 기법", prompt: "" },
    "8": { title: "사고의 사슬 프롬프팅", description: "복잡한 문제를 위한 단계별 추론 프레임워크", prompt: "" },
    "fw-3": { title: "퓨샷 프롬프팅", description: "예시로 AI 가르치기 — 먼저 보여주고 명령하기", prompt: "" },
    "fw-4": { title: "사고의 나무 (ToT)", description: "가지치기 사고 기법 — 여러 경로를 탐색한 후 최적 답변 선택", prompt: "" },
    "fw-5": { title: "CRISP 프레임워크", description: "Context, Role, Instructions, Style, Parameters — 올인원 기법", prompt: "" },
    "fw-6": { title: "페르소나 패턴", description: "AI에 성격 부여 — 경험과 감정이 있는 실제 인물처럼 응답", prompt: "" },
    "fw-7": { title: "메타 프롬프팅", description: "프롬프트를 만드는 프롬프트 — AI가 최적의 프롬프트 작성 도움", prompt: "" },
    "vid-1": { title: "시네마틱 장면 생성기", description: "상세한 카메라 움직임과 조명이 있는 영화적 비디오 생성", prompt: "" },
    "vid-2": { title: "제품 쇼케이스 비디오", description: "360° 회전과 클로즈업이 있는 전문 제품 데모 비디오", prompt: "" },
    "vid-3": { title: "스토리텔링 비디오", description: "캐릭터 연속성과 플롯 진행이 있는 내러티브 비디오 생성", prompt: "" },
    "vid-4": { title: "소셜 미디어 릴 생성기", description: "빠르고 눈길을 끄는 소셜 미디어 비디오 콘텐츠", prompt: "" },
    "code-1": { title: "풀스택 기능 빌더", description: "프론트엔드, 백엔드, 데이터베이스 완전한 기능 생성", prompt: "" },
    "code-2": { title: "디버그 탐정", description: "문제를 체계적으로 분리하고 수정하는 디버깅 프롬프트", prompt: "" },
    "code-3": { title: "코드 리뷰 전문가", description: "실행 가능한 개선 제안이 있는 전문 코드 리뷰", prompt: "" },
    "res-1": { title: "심층 연구 보고서", description: "구조화된 분석이 있는 포괄적 연구 보고서", prompt: "" },
    "res-2": { title: "경쟁 정보 분석", description: "전략 계획을 위한 경쟁자 및 시장 포지셔닝 분석", prompt: "" },
    "res-3": { title: "문헌 리뷰 어시스턴트", description: "학술 및 전문 연구를 위한 구조화된 문헌 리뷰", prompt: "" },
    "think-1": { title: "소크라테스식 문제 해결", description: "소크라테스식 질문으로 문제를 깊이 분석", prompt: "" },
    "think-2": { title: "의사결정 매트릭스 빌더", description: "가중 기준을 사용하여 옵션을 체계적으로 평가", prompt: "" },
    "think-3": { title: "제1원리 사고", description: "복잡한 문제를 기본 진리로 분해하고 솔루션을 재구축", prompt: "" },
  },

  // ─────────────────────────────────────
  // 🇯🇵 Japanese
  // ─────────────────────────────────────
  ja: {
    "img-nb-1": { title: "ナナバナナ ちびキャラ", description: "Geminiで可愛いナナバナナスタイルのちびキャラを生成", prompt: "" },
    "img-nb-2": { title: "ナナバナナ ステッカーパック", description: "可愛いナナバナナスタイルのステッカーセットを作成", prompt: "" },
    "img-nb-3": { title: "ナナバナナ シーンイラスト", description: "可愛いナナバナナスタイルのシーンイラストを作成", prompt: "" },
    "img-mj-1": { title: "シネマティック ポートレート", description: "ハリウッド映画スタイルの美しいポートレートを生成", prompt: "" },
    "img-mj-2": { title: "ファンタジー環境コンセプト", description: "AAAゲーム級のファンタジー環境コンセプトアートを生成", prompt: "" },
    "img-mj-3": { title: "プロダクト フォトグラフィー", description: "Midjourneyでコマーシャル品質の商品写真を生成", prompt: "" },
    "img-fx-1": { title: "フォトリアリスティック ポートレート", description: "Fluxで超リアルなポートレートを生成", prompt: "" },
    "img-fx-2": { title: "Flux アニメイラスト", description: "Fluxで高品質なアニメイラストを生成", prompt: "" },
    "img-fx-3": { title: "テキスト入り画像", description: "Fluxでテキストが埋め込まれた画像を作成", prompt: "" },
    "1": { title: "アニメキャラクター生成", description: "カスタムスタイルの詳細なアニメキャラクターを生成", prompt: "" },
    "2": { title: "ピクセルアートシーン", description: "美しいピクセルアートのシーンと風景を生成", prompt: "" },
    "3": { title: "エキスパートアドバイザー", description: "AIを専門家に変換して深いガイダンスを提供", prompt: "" },
    "4": { title: "クリエイティブ ブレスト パートナー", description: "クリエイティブプロジェクトのAIブレインストーミング", prompt: "" },
    "5": { title: "リーン事業計画", description: "包括的なリーンスタートアップ事業計画を生成", prompt: "" },
    "6": { title: "SWOT分析ジェネレーター", description: "あらゆるビジネスやプロジェクトの完全なSWOT分析", prompt: "" },
    "7": { title: "RACEフレームワーク", description: "Role, Action, Context, Execute — 構造化プロンプト技法", prompt: "" },
    "8": { title: "Chain-of-Thought プロンプト", description: "複雑な問題のためのステップバイステップ推論フレームワーク", prompt: "" },
    "fw-3": { title: "Few-Shot プロンプティング", description: "例でAIを教える — 先に見せてから命令する", prompt: "" },
    "fw-4": { title: "思考の木 (ToT)", description: "分岐思考テクニック — 複数の道を探索して最良の答えを選択", prompt: "" },
    "fw-5": { title: "CRISPフレームワーク", description: "Context, Role, Instructions, Style, Parameters — 5つを網羅", prompt: "" },
    "fw-6": { title: "ペルソナパターン", description: "AIに人格を設定 — 経験と感情のある実際の人物のように応答", prompt: "" },
    "fw-7": { title: "メタプロンプティング", description: "プロンプトを作るプロンプト — AIが最適なプロンプト作成を支援", prompt: "" },
    "vid-1": { title: "シネマティックシーン生成", description: "詳細なカメラワークと照明の映画的ビデオを生成", prompt: "" },
    "vid-2": { title: "商品ショーケースビデオ", description: "360°回転とクローズアップ付きプロ商品デモビデオ", prompt: "" },
    "vid-3": { title: "ストーリーテリングビデオ", description: "キャラクターの連続性とプロット進行のあるナラティブビデオ", prompt: "" },
    "vid-4": { title: "SNSリール生成", description: "目を引くソーシャルメディアショート動画コンテンツ", prompt: "" },
    "code-1": { title: "フルスタック機能ビルダー", description: "フロントエンド、バックエンド、データベース完全な機能を生成", prompt: "" },
    "code-2": { title: "デバッグ探偵", description: "問題を体系的に分離して修正するデバッグプロンプト", prompt: "" },
    "code-3": { title: "コードレビューエキスパート", description: "実践的な改善提案付きプロフェッショナルコードレビュー", prompt: "" },
    "res-1": { title: "深層リサーチレポート", description: "構造化分析付きの包括的研究レポート", prompt: "" },
    "res-2": { title: "競合インテリジェンス", description: "戦略計画のための競合分析と市場ポジショニング", prompt: "" },
    "res-3": { title: "文献レビューアシスタント", description: "学術・専門研究のための構造化文献レビュー", prompt: "" },
    "think-1": { title: "ソクラテス式問題解決", description: "ソクラテス式質問で問題を深く分析", prompt: "" },
    "think-2": { title: "意思決定マトリクス", description: "加重基準を使用して選択肢を体系的に評価", prompt: "" },
    "think-3": { title: "第一原理思考", description: "複雑な問題を基本真理に分解してソリューションを再構築", prompt: "" },
  },

  // ─────────────────────────────────────
  // 🇮🇩 Indonesian
  // ─────────────────────────────────────
  id: {
    "img-nb-1": { title: "Potret Chibi Nana Banana", description: "Buat karakter chibi lucu gaya Nana Banana melalui Gemini", prompt: "" },
    "img-nb-2": { title: "Paket Stiker Nana Banana", description: "Buat set stiker lucu gaya Nana Banana", prompt: "" },
    "img-nb-3": { title: "Ilustrasi Adegan Nana Banana", description: "Buat ilustrasi adegan lucu gaya Nana Banana", prompt: "" },
    "img-mj-1": { title: "Potret Sinematik", description: "Buat potret indah gaya film Hollywood", prompt: "" },
    "img-mj-2": { title: "Konsep Lingkungan Fantasi", description: "Buat concept art fantasi level game AAA", prompt: "" },
    "img-mj-3": { title: "Fotografi Produk Pro", description: "Buat foto produk komersial dengan Midjourney", prompt: "" },
    "img-fx-1": { title: "Potret Fotorealistis", description: "Buat potret ultra-realistis dengan Flux", prompt: "" },
    "img-fx-2": { title: "Ilustrasi Anime Flux", description: "Buat ilustrasi anime berkualitas tinggi dengan Flux", prompt: "" },
    "img-fx-3": { title: "Desain Teks dalam Gambar", description: "Buat gambar dengan teks tertanam menggunakan Flux", prompt: "" },
    "1": { title: "Generator Karakter Anime", description: "Buat karakter anime detail dengan gaya kustom", prompt: "" },
    "2": { title: "Adegan Pixel Art", description: "Buat adegan pixel art dan lanskap yang indah", prompt: "" },
    "3": { title: "Mode Penasihat Ahli", description: "Ubah AI menjadi ahli domain untuk panduan mendalam", prompt: "" },
    "4": { title: "Partner Brainstorming Kreatif", description: "Teman brainstorming AI untuk proyek kreatif", prompt: "" },
    "5": { title: "Rencana Bisnis Lean", description: "Buat rencana bisnis lean startup yang komprehensif", prompt: "" },
    "6": { title: "Generator Analisis SWOT", description: "Analisis SWOT lengkap untuk bisnis atau proyek apa pun", prompt: "" },
    "7": { title: "Framework RACE", description: "Role, Action, Context, Execute — teknik prompting terstruktur", prompt: "" },
    "8": { title: "Chain-of-Thought Prompting", description: "Framework penalaran langkah demi langkah untuk masalah kompleks", prompt: "" },
    "fw-3": { title: "Few-Shot Prompting", description: "Ajar AI dengan contoh — tunjukkan dulu baru perintahkan", prompt: "" },
    "fw-4": { title: "Tree of Thoughts (ToT)", description: "Teknik berpikir bercabang — eksplorasi banyak jalur sebelum pilih jawaban terbaik", prompt: "" },
    "fw-5": { title: "Framework CRISP", description: "Context, Role, Instructions, Style, Parameters — teknik 5-in-1", prompt: "" },
    "fw-6": { title: "Pola Persona", description: "Beri AI kepribadian — jawab seperti orang nyata dengan pengalaman", prompt: "" },
    "fw-7": { title: "Meta-Prompting", description: "Prompt yang membuat prompt — biar AI bantu tulis prompt terbaik", prompt: "" },
    "vid-1": { title: "Generator Adegan Sinematik", description: "Buat video sinematik dengan gerakan kamera dan pencahayaan detail", prompt: "" },
    "vid-2": { title: "Video Showcase Produk", description: "Video demo produk profesional dengan rotasi 360° dan close-up", prompt: "" },
    "vid-3": { title: "Sekuens Video Naratif", description: "Buat video naratif dengan karakter berkelanjutan dan alur cerita", prompt: "" },
    "vid-4": { title: "Generator Reel Media Sosial", description: "Konten video pendek yang eye-catching untuk media sosial", prompt: "" },
    "code-1": { title: "Full-Stack Feature Builder", description: "Buat fitur lengkap dengan frontend, backend, dan database", prompt: "" },
    "code-2": { title: "Detektif Debug", description: "Prompt debugging sistematis untuk isolasi dan perbaiki masalah", prompt: "" },
    "code-3": { title: "Ahli Review Kode", description: "Review kode profesional dengan saran perbaikan yang actionable", prompt: "" },
    "res-1": { title: "Laporan Riset Mendalam", description: "Laporan riset komprehensif dengan analisis terstruktur", prompt: "" },
    "res-2": { title: "Intelijen Kompetitif", description: "Analisis kompetitor dan posisi pasar untuk perencanaan strategis", prompt: "" },
    "res-3": { title: "Asisten Tinjauan Pustaka", description: "Tinjauan pustaka terstruktur untuk riset akademis dan profesional", prompt: "" },
    "think-1": { title: "Pemecah Masalah Sokratis", description: "Gunakan pertanyaan Sokratis untuk analisis masalah mendalam", prompt: "" },
    "think-2": { title: "Pembuat Matriks Keputusan", description: "Evaluasi opsi secara sistematis dengan kriteria berbobot", prompt: "" },
    "think-3": { title: "Pemikir Prinsip Pertama", description: "Urai masalah kompleks ke kebenaran dasar dan bangun solusi baru", prompt: "" },
  },
};
