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
      <body>{children}</body>
    </html>
  );
}
