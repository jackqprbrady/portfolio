import type { Metadata } from "next";
import { Inter_Tight, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jack Brady | Social Video Creative",
  description: "Social-first video creative running digital content at Paddy Power News. Talent-led video, design, and short-form for sport and entertainment. Based in New York.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${barlow.variable}`}>{children}</body>
    </html>
  );
}
