import type { Metadata } from "next";
import { Playfair_Display, Cormorant, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "FBO Membership",
  description: "Somatic membership funnel with tiered options and 40% first-month offer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
