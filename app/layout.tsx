import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jack Brady — Creative Strategy & Film",
  description: "Turning skepticism into curiosity — and curiosity into action.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} ${barlow.variable}`}>{children}</body>
    </html>
  );
}
