import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";

export const metadata = {
  title: "One Platform — Strider Technologies | Michael Davis",
  description:
    "Led the UX consolidation of multiple intelligence products into a single unified platform at Strider Technologies.",
};

export default function OnePlatformPage() {
  return (
    <CaseStudyLayout
      title="One Platform"
      role="Sr. Product Designer"
      company="Strider Technologies"
      timeline="2024–2025"
      color="from-[#0f172a] to-[#1e293b]"
      summary="Led the UX consolidation of multiple intelligence products — Ranger, Checkpoint, and Sentry — into a single unified platform. Redesigned search, entity disambiguation, and risk analysis workflows to give analysts a cohesive experience across threat landscape, due diligence, and supply chain screening."
      skills={[
        "Platform Consolidation",
        "Information Architecture",
        "Enterprise UX",
        "Data Visualization",
        "Cross-product Integration",
        "AI-powered Search",
      ]}
      sections={[
        {
          title: "The Challenge",
          type: "text",
          content: [
            "Strider Technologies had grown its product suite organically — Ranger for risk intelligence, Checkpoint for supply chain due diligence, and Sentry for personnel screening. Each product operated independently with its own navigation, search paradigms, and data models. Analysts working across multiple threat vectors had to context-switch between entirely different interfaces.",
            "The mandate was clear: merge everything into one platform without losing the specialized depth each product provided. This wasn't a reskin — it was a fundamental rethinking of how intelligence analysts interact with interconnected risk data.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/unified-platform.gif",
              alt: "One Platform overview",
              caption: "Unified platform bringing together Ranger, Checkpoint, and Sentry",
            },
          ],
        },
        {
          title: "Product Landscape",
          type: "list",
          content: [
            "Ranger — Identifies high-risk relationships between personnel and state-sponsored actors using 20+ risk signals across commercial, government, financial, and personnel data",
            "Checkpoint — Third-party due diligence tool providing visibility into state-sponsored security, compliance, and reputational risk for organizations",
            "Sentry — Due diligence tool that searches and identifies potential connections individuals may have with state-sponsored risk, supporting IP protection and talent screening",
            "Shield — Curated dataset tied to state-sponsored threats that supports SIEM and DLP systems for proactive risk mitigation",
            "Spark — AI-powered search capabilities enabling users to explore connections across products, upload documents, and derive actionable insights",
          ],
        },
        {
          title: "My Approach",
          type: "text",
          content: [
            "I started by mapping every user journey across all three core products. The goal was to find the natural intersection points — where an analyst in Ranger would need Checkpoint data, or where a Sentry screening would benefit from Ranger's risk signals.",
            "Working closely with engineering and product, I developed a unified information architecture that preserved each product's depth while creating shared patterns for search, entity profiles, and risk visualization. The key insight was that users think in terms of entities (people and organizations), not products.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/one-platform/04-product-landscape.png",
              alt: "Product landscape and consolidation strategy",
              caption: "Mapping the product landscape across all Strider intelligence tools",
            },
          ],
        },
        {
          title: "Key Design Decisions",
          type: "list",
          content: [
            "Unified entity profiles that aggregate risk signals from all products into a single view, replacing three separate profile experiences",
            "A cross-product dashboard showing risk insights across the entire platform at a glance",
            "\"Search Anything\" — a unified search experience powered by Spark AI that queries across all data catalogs",
            "Consolidated navigation that lets analysts move fluidly between People, Organizations, and Documents without product boundaries",
            "Entity disambiguation workflows to resolve identity conflicts across different data sources",
            "Standardized risk methodology and glossary applied consistently across all product areas",
          ],
        },
        {
          title: "Spark AI Integration",
          type: "highlight",
          content: [
            "A major component of the consolidation was introducing Spark — Strider's AI-powered search and analysis layer. I designed the experience for analysts to ask natural language questions across the entire dataset, upload documents for enrichment, and receive actionable insights with greater speed and accuracy.",
            "The Spark integration transformed how analysts gather intelligence, shifting from manual cross-referencing to AI-assisted discovery across threat landscapes, due diligence workflows, and compliance screening.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/one-platform/05-spark-search.png",
              alt: "Spark AI-powered search experience",
              caption: "Spark: AI-powered search across all Strider data catalogs",
            },
          ],
        },
        {
          title: "The Iteration Process",
          type: "text",
          content: [
            "We followed a \"make it, break it, improve it\" methodology. Early designs were reviewed internally, tested with analysts, and refined through multiple rounds. Product naming was a significant effort — transitioning users from familiar brand names (Ranger, Checkpoint, Sentry) to a unified experience required careful communication design.",
            "I worked across the full product organization — coordinating with teams responsible for Shield, Intelligence Center, RFI enhancements, and government-specific requirements to ensure the unified platform served every user segment.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/everything-fine.gif",
              alt: "Unified platform dashboard",
              caption: "EVERYTHING IS FINE",
            },
            {
              src: "/images/one-platform/03-iteration.png",
              alt: "Iteration and design process",
              caption: "Iterating on the unified experience through the make-it-break-it-improve-it cycle",
            },
          ],
        },
        {
          title: "Platform Capabilities Delivered",
          type: "list",
          content: [
            "Cross-product dashboard with unified risk overview",
            "Consolidated navigation and notification system",
            "Cross-product intersections: Ranger-Sentry, Checkpoint-Sentry, Ranger-Checkpoint",
            "Spark-powered profile summaries and AI-assisted search",
            "Search Anything with initial 5 data catalogs",
            "Automated RFI research and disambiguation processes",
            "Network visualizations for entity relationships",
            "Open-source software screening for state-sponsored risk",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/one-platform/07-entity-profile.png",
              alt: "Entity profile view",
              caption: "Unified entity profiles aggregating risk signals across all products",
            },
            {
              src: "/images/one-platform/08-risk-analysis.png",
              alt: "Risk analysis workflow",
              caption: "Risk analysis and network visualization for entity relationships",
            },
          ],
        },
        {
          title: "Outcome",
          type: "highlight",
          content: [
            "The One Platform initiative unified Strider's entire product suite into a cohesive intelligence experience. Analysts now work within a single interface that surfaces cross-product risk insights automatically, reducing the time from question to actionable intelligence. The platform serves both commercial and government clients with role-appropriate views and workflows.",
          ],
        },
      ]}
    />
  );
}
