import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Quotes — คำคมสายเทคโนโลยี | Prompt Pixel",
  description: "คำคมจากคนในวงการ Tech และผู้ก่อตั้งบริษัทที่ช่วยเติมแรงบันดาลใจ — Coding, Leadership, Innovation",
};

export default function QuotesLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
