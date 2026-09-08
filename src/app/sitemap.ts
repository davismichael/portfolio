import type { MetadataRoute } from "next";

const BASE = "https://davismakes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/case-study/make-payments`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/case-study/interactive-video`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/case-study/shop-on-live-video`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/case-study/rfi-automation`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}
