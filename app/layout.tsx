import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-screen">
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <footer className="border-t border-white/10 bg-[#080c2f] px-6 py-4 text-xs tracking-[0.12em] uppercase">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
              <p className="text-stone-200">BROCK JOHN · SOMATIC SEX EDUCATION</p>
              <p className="text-[#d4af37]">FBO COURSE 2026</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
