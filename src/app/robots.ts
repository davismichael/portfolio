import type { MetadataRoute } from "next";

// Open to search engines and AI crawlers alike. The whole point of the site
// is to be found, so nothing is blocked except the unlock endpoint.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/case-study/lock"] },
      // AI search and answer engines, named explicitly so a future default
      // block list never catches them by accident.
      { userAgent: ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai", "Google-Extended", "PerplexityBot", "Perplexity-User", "Grok", "xAI-Grok", "Bytespider", "Applebot", "Applebot-Extended", "CCBot", "meta-externalagent"], allow: "/" },
    ],
    sitemap: "https://davismakes.com/sitemap.xml",
    host: "https://davismakes.com",
  };
}
