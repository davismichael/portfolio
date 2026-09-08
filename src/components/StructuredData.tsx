import { FAQS, PLANS, PLAN_EXTRAS } from "@/lib/services";

// JSON-LD for search engines and AI answer engines. Built from the same
// data the page renders, so prices and FAQ answers never drift.
const BASE = "https://davismakes.com";

function money(price: string) {
  return price.replace(/[^0-9.]/g, "");
}

export default function StructuredData() {
  const business = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${BASE}/#business`,
    name: "Davis Makes",
    alternateName: ["davismakes.com", "Boxes & Colors Inc."],
    legalName: "Boxes & Colors Inc.",
    url: BASE,
    logo: `${BASE}/brand/davismakes-logo.png`,
    image: `${BASE}/brand/davismakes-logo.png`,
    description:
      "Fixed-price apps and websites for founders and small businesses, designed and built by one senior product designer who writes the code. Live in 2 to 6 weeks. Clients own all code and IP.",
    founder: { "@id": `${BASE}/#person` },
    address: { "@type": "PostalAddress", addressLocality: "Salt Lake City", addressRegion: "UT", addressCountry: "US" },
    areaServed: ["Salt Lake City", "Utah", "United States", "Remote"],
    priceRange: "$1,500 to $25,000",
    sameAs: ["https://www.linkedin.com/in/michaelausdavis/", "https://breakoff.io"],
    knowsAbout: ["MVP development", "iOS app development", "Web app development", "Marketing websites", "Product design", "UX design", "Next.js", "React Native", "Expo", "Flutter", "Supabase", "AI-assisted development"],
    makesOffer: [
      ...PLANS.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: `${p.tagline} ${p.includes.join(". ")}.`,
        price: money(p.price),
        priceCurrency: "USD",
        priceSpecification: { "@type": "PriceSpecification", price: money(p.price), priceCurrency: "USD", minPrice: money(p.price) },
        url: `${BASE}/#pricing`,
      })),
      ...PLAN_EXTRAS.map((e) => ({
        "@type": "Offer",
        name: e.label,
        price: money(e.value),
        priceCurrency: "USD",
        url: `${BASE}/#pricing`,
      })),
    ],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE}/#person`,
    name: "Michael Davis",
    alternateName: "Michael A. Davis",
    jobTitle: "Product designer and developer",
    description:
      "Senior product design leader with 15+ years shipping software. Builds mobile and web apps end to end. Shipped BreakOff to the App Store solo. Previously led design at Strider Technologies, ArbiterSports, Verb, WISEcode, and Mountain Crane.",
    url: BASE,
    worksFor: { "@id": `${BASE}/#business` },
    address: { "@type": "PostalAddress", addressLocality: "Salt Lake City", addressRegion: "UT", addressCountry: "US" },
    sameAs: ["https://www.linkedin.com/in/michaelausdavis/"],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: "Davis Makes",
    publisher: { "@id": `${BASE}/#business` },
  };

  return (
    <>
      {[business, person, faq, site].map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
