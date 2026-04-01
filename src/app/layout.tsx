import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
