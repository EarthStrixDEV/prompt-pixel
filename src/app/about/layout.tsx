import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Developer — Prompt Pixel",
  description: "ผู้พัฒนาเว็บไซต์ Prompt Pixel — เครื่องมือ AI ภาษาและเฟรมเวิร์คที่ใช้",
};

export default function AboutLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
