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
  metadataBase: new URL("https://jackbradyfilm.vercel.app"),
  openGraph: {
    title: "Jack Brady | Social Video Creative",
    description: "Talent-led video, design, and short-form for sport and entertainment. Running digital content at Paddy Power News.",
    url: "https://jackbradyfilm.vercel.app",
    siteName: "Jack Brady",
    images: [{ url: "/design/crouchys-shouts.jpg", width: 1000, height: 628 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Brady | Social Video Creative",
    description: "Talent-led video, design, and short-form for sport and entertainment.",
    images: ["/design/crouchys-shouts.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${barlow.variable}`}>{children}</body>
    </html>
  );
}
