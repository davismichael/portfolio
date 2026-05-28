import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReducedMotionProvider from "@/components/ReducedMotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael A. Davis | Sr. Director of Product Design",
  description: "Sr. Director of Product Design and AI product builder. I create digital experiences at the intersection of design strategy, AI, and engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Skip-to-content link. First focusable element on every page so
            keyboard users can bypass the nav. Targets the <main id="main">
            element rendered by each route. */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ReducedMotionProvider>{children}</ReducedMotionProvider>
      </body>
    </html>
  );
}
