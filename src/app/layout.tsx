import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReducedMotionProvider from "@/components/ReducedMotionProvider";
import ScrollToTop from "@/components/ScrollToTop";
import StructuredData from "@/components/StructuredData";

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
  alternates: { canonical: "/" },
  verification: {
    google: "M96M0VHUpcr0KfuvK29ma98AbXOCH2Uy-R8kwjM9oEI",
    other: { "msvalidate.01": "870D4E890DA0ADD56700466ABA145B94" },
  },
  keywords: [
    "app developer Salt Lake City",
    "MVP development",
    "fixed price app development",
    "website designer Utah",
    "product designer who codes",
    "iOS app developer for startups",
    "Next.js developer",
    "React Native developer",
    "Flutter developer",
    "AI-assisted development",
  ],
  authors: [{ name: "Michael Davis", url: "https://davismakes.com" }],
  creator: "Michael Davis",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  twitter: { card: "summary_large_image", title: "Davis Makes", description: "Apps and websites, designed and shipped. Fixed price. 2 to 6 weeks." },
  openGraph: {
    type: "website",
    url: "https://davismakes.com",
    locale: "en_US",
    title: "Davis Makes",
    description: "Apps and websites, designed and shipped. Fixed price. 2 to 6 weeks.",
    siteName: "Davis Makes",
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
        <StructuredData />
        <ScrollToTop />
        <ReducedMotionProvider>{children}</ReducedMotionProvider>
      </body>
    </html>
  );
}
