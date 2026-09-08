import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReducedMotionProvider from "@/components/ReducedMotionProvider";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Davis Makes | Apps and websites, designed and shipped",
  description:
    "Fixed-price apps and websites for founders and small businesses. One senior designer who writes the code. Live in 2 to 6 weeks. You own every line.",
  metadataBase: new URL("https://davismakes.com"),
  openGraph: {
    title: "Davis Makes",
    description: "Apps and websites, designed and shipped. Fixed price. 2 to 6 weeks.",
    siteName: "Davis Makes",
    images: [{ url: "/brand/davismakes-logo.png", width: 2208, height: 688, alt: "Davis Makes" }],
  },
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
        <ScrollToTop />
        <ReducedMotionProvider>{children}</ReducedMotionProvider>
      </body>
    </html>
  );
}
