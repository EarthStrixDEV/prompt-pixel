import type { Metadata } from "next";
import { Press_Start_2P, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prompt Pixel — AI Prompt Hub",
  description:
    "รวบรวม AI Prompt สุดเจ๋ง! สร้างภาพ AI, แชท, แผนธุรกิจ, Prompt Engineering Framework — ทั้งหมดในที่เดียว ♡",
  keywords: [
    "AI Prompt",
    "Prompt Engineering",
    "AI Image Generation",
    "ChatGPT Prompts",
    "Business Plan AI",
    "Prompt Framework",
  ],
  openGraph: {
    title: "✨ Prompt Pixel — AI Prompt Hub",
    description: "รวบรวม AI Prompt สุดเจ๋ง! ทุก Prompt ที่คุณต้องการ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${pressStart2P.variable} ${notoSansThai.variable}`}>
      <body className="font-body antialiased pixel-grid-bg min-h-screen">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
