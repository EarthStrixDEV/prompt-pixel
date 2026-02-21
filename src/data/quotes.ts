// ═══════════════════════════════════════════
// 💬 Tech Quotes — คำคมสายเทคโนโลยี
// ═══════════════════════════════════════════

export type QuoteCategory = "coding" | "leadership" | "innovation" | "life" | "startup" | "wisdom";

export interface Quote {
  id: string;
  textTh: string;
  textEn: string;
  author: string;
  category: QuoteCategory;
}

export const quoteCategories: { id: QuoteCategory; labelKey: string }[] = [
  { id: "coding", labelKey: "quote_cat_coding" },
  { id: "leadership", labelKey: "quote_cat_leadership" },
  { id: "innovation", labelKey: "quote_cat_innovation" },
  { id: "life", labelKey: "quote_cat_life" },
  { id: "startup", labelKey: "quote_cat_startup" },
  { id: "wisdom", labelKey: "quote_cat_wisdom" },
];

export const techQuotes: Quote[] = [
  {
    id: "knuth-1",
    textTh: "การเร่งความเร็วก่อนจะวัด คือบ่อเกิดแห่งความชั่วร้าย",
    textEn: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
    category: "coding",
  },
  {
    id: "torvalds-1",
    textTh: "พูดกับคนอย่างหนึ่ง พูดกับโค้ดอีกอย่างหนึ่ง",
    textEn: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    category: "coding",
  },
  {
    id: "gates-1",
    textTh: "ฉันเลือกคนขี้เกียจทำงานยาก เพราะเขาจะหาวิธีง่ายๆ มาทำ",
    textEn: "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
    author: "Bill Gates",
    category: "wisdom",
  },
  {
    id: "jobs-1",
    textTh: "นวัตกรรมคือสิ่งที่แยกผู้นำกับผู้ตามออกจากกัน",
    textEn: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "innovation",
  },
  {
    id: "einstein-1",
    textTh: "ทุกอย่างควรทำให้ง่ายที่สุดเท่าที่จะทำได้ แต่ไม่ใช่ง่ายกว่านั้น",
    textEn: "Everything should be made as simple as possible, but not simpler.",
    author: "Albert Einstein",
    category: "wisdom",
  },
  {
    id: "kay-1",
    textTh: "คนที่คิดว่าซอฟต์แวร์ง่ายเหมือนฮาร์ดแวร์ จะทำฮาร์ดแวร์ที่คิดว่ายากเหมือนซอฟต์แวร์",
    textEn: "People who are really serious about software should make their own hardware.",
    author: "Alan Kay",
    category: "innovation",
  },
  {
    id: "hopp-1",
    textTh: "ชีวิตสั้นเกินไปที่จะรันโปรแกรมที่ไม่มีเอกสาร",
    textEn: "Life is too short to run proprietary software.",
    author: "Bdale Garbee (paraphrase)",
    category: "coding",
  },
  {
    id: "musk-1",
    textTh: "เมื่อบางอย่างสำคัญพอ คุณทำมันแม้โอกาสจะไม่เข้าข้าง",
    textEn: "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
    category: "startup",
  },
  {
    id: "dharmesh-1",
    textTh: "อย่าทำงานให้หนักขึ้น ทำระบบให้ฉลาดขึ้น",
    textEn: "Don't work harder. Work smarter.",
    author: "Dharmesh Shah",
    category: "leadership",
  },
  {
    id: "sivers-1",
    textTh: "ถ้ามันไม่ใช่เฮลเย่ แปลว่ายังไม่ใช่",
    textEn: "If it's not a hell yeah, it's a no.",
    author: "Derek Sivers",
    category: "life",
  },
  {
    id: "thompson-1",
    textTh: "เมื่อมีข้อสงสัย ใช้ brute force",
    textEn: "When in doubt, use brute force.",
    author: "Ken Thompson",
    category: "coding",
  },
  {
    id: "graham-1",
    textTh: "ทำของที่คนจำนวนน้อยรักมาก ดีกว่าทำของที่คนจำนวนมากชอบนิดหน่อย",
    textEn: "It's better to make a few people really love you than a lot of people sort of like you.",
    author: "Paul Graham",
    category: "startup",
  },
  {
    id: "wilde-1",
    textTh: "ประสบการณ์คือชื่อที่ทุกคนตั้งให้กับความผิดพลาดของตัวเอง",
    textEn: "Experience is simply the name we give our mistakes.",
    author: "Oscar Wilde",
    category: "wisdom",
  },
  {
    id: "armstrong-1",
    textTh: "ที่แห่งหนึ่งบนกระบวนการนี้ มีบั๊กที่ไม่อาจหาได้จนกว่าจะถึง production",
    textEn: "One of the lessons of the program is that there's no such thing as a bug-free release.",
    author: "Neil Armstrong (context: software)",
    category: "coding",
  },
  {
    id: "bezos-1",
    textTh: "ความยืดหยุ่นคือการคงความสำคัญในระยะยาวเมื่อต้องแลกกับความสุขระยะสั้น",
    textEn: "Stubbornness is a virtue when you're right. Flexibility is a virtue when you're wrong.",
    author: "Jeff Bezos",
    category: "leadership",
  },
];

export function getQuoteByLocale(quote: Quote, locale: string): string {
  return locale === "th" ? quote.textTh : quote.textEn;
}

export function getQuoteCategoryColor(cat: QuoteCategory): { border: string; text: string } {
  const map: Record<QuoteCategory, { border: string; text: string }> = {
    coding: { border: "#81D4FA", text: "#81D4FA" },
    leadership: { border: "#FFB74D", text: "#FFB74D" },
    innovation: { border: "#CE93D8", text: "#CE93D8" },
    life: { border: "#A5D6A7", text: "#A5D6A7" },
    startup: { border: "#FF80BF", text: "#FF80BF" },
    wisdom: { border: "#FFF176", text: "#FFF176" },
  };
  return map[cat] ?? { border: "#888", text: "#ccc" };
}
