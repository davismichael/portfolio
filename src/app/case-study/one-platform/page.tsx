import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import UnlockScreen from "@/components/case-study/UnlockScreen";
import { isUnlocked } from "@/lib/case-study-auth";
import type { Slide } from "@/components/case-study/types";

export const metadata = {
  title: "One Platform | Michael Davis",
  description:
    "Consolidated an enterprise intelligence suite into one platform with a single risk language. Sr. Product Designer + PM. Password required.",
};

const ONE_PLATFORM_COLOR = "from-[#0f172a] to-[#1e293b]";
const ONE_PLATFORM_RETURN_TO = "/case-study/one-platform";

const SLIDES: Slide[] = [
  {
    kind: "cover",
    title: "One Platform",
    subtext:
      "Consolidating Strider's intelligence suite into one risk language. Sr. Product Designer with PM scope, 2024 to 2025.",
    image: null,
  },
  {
    kind: "problem",
    title: "Four products, four different risk languages.",
    subtext:
      "Ranger, Checkpoint, Shield, and Sentry each had their own UI, vocabulary, and risk model. The same entity could look critical in one product and clean in another.",
    image: "/images/case-studies/one-platform/deck/problem.jpg",
    caption: "The four products before consolidation",
  },
  {
    kind: "research",
    title: "Talked to internal teams and external clients.",
    subtext:
      "Surveyed both sides. Internal teams trended neutral to positive. External clients clustered on neutral. The wins were inconsistent across product surfaces.",
    image: "/images/case-studies/one-platform/deck/research.jpg",
    caption: "Internal vs external perception of the existing products",
  },
  {
    kind: "insight",
    title: "Analysts think in topics, not products.",
    subtext:
      "Asked how they worked, analysts described it by entity (people, organizations, documents) not by product. That single behavior reframed the entire IA from product-first to entity-first.",
    image: "/images/case-studies/one-platform/deck/insight.jpg",
    caption: "The reframe to a unified, topic-based approach",
  },
  {
    kind: "constraints",
    title: "Keep, rebrand, or sunset every product name.",
    subtext:
      "Hard call on each existing brand. Internal teams attached to the names. Clients had purchase orders tied to them. We had to decide which to keep, which to rebrand, which to fold in.",
    image: "/images/case-studies/one-platform/deck/constraints.jpg",
    caption: "The keep-or-rebrand decision matrix",
  },
  {
    kind: "exploration",
    title: "Three strategic directions, mapped on the wall.",
    subtext:
      "Stuck up three options end to end. Wrapper-shell, meta-search, entity-first. Every product surface mapped onto each. Walked the team through them and pressure-tested live.",
    image: "/images/case-studies/one-platform/deck/exploration.jpg",
    caption: "Three options compared side by side",
  },
  {
    kind: "design",
    title: "Cross-product entity profile, with Spark embedded.",
    subtext:
      "One profile pulls signals from every product. Risk graph, talent flows, cluster groups. Spark AI insights summarize the entity in plain language right inside the panel.",
    image: "/images/case-studies/one-platform/deck/design.jpg",
    caption: "The shipped People view, cross-product",
  },
  {
    kind: "testing",
    title: "Tested with high-privilege analysts on real data.",
    subtext:
      "Watched analysts work the new IA against entities they already knew. They found things the old product had missed. Confirmed the entity-first mental model held under real load.",
    image: null,
  },
  {
    kind: "iteration",
    title: "Organizations got the same treatment.",
    subtext:
      "Once entity profiles worked for People, we extended the same shape to Organizations. Top risk signals in network, recent searches, geographic distribution. Same language, different lens.",
    image: "/images/case-studies/one-platform/deck/iteration.jpg",
    caption: "Organizations view, same IA",
  },
  {
    kind: "outcome",
    title: "Faster ramp. Fewer support tickets. One language.",
    subtext:
      "The consolidated dashboard is what analysts open first now. The risk vocabulary became the foundation for every new surface, instead of each one reinventing its own.",
    image: "/images/case-studies/one-platform/deck/outcome.jpg",
    caption: "Real client deployment, post-consolidation",
  },
  {
    kind: "reflection",
    title: "What I'd do differently.",
    subtext:
      "Push harder for the vision to ship right. Engineering quality slipped on critical surfaces and the scope was too big for the cadence. Smaller scope, higher quality, faster trust from the field.",
    image: null,
  },
];

export default async function OnePlatformPage({
  searchParams,
}: {
  searchParams: Promise<{ unlock_error?: string }>;
}) {
  const unlocked = await isUnlocked();
  if (!unlocked) {
    const params = await searchParams;
    return (
      <UnlockScreen
        caseStudyName="One Platform"
        returnTo={ONE_PLATFORM_RETURN_TO}
        error={params.unlock_error === "1"}
      />
    );
  }

  return (
    <CaseStudyLayout
      title="One Platform"
      role="Sr. Product Designer + PM"
      company="Strider Technologies"
      timeline="2024–2025"
      color={ONE_PLATFORM_COLOR}
      summary="Consolidated Strider's intelligence suite into one platform with a single risk language. Analysts ramped onto the product faster and support ticket volume dropped. Worked staff-shape: shaped the strategy through POCs, handed execution to another designer, and PM'd the engineering build."
      skills={[
        "Platform Consolidation",
        "Information Architecture",
        "Enterprise UX",
        "Risk Signal Design",
        "Product Strategy + PM",
        "POC + Prototyping",
      ]}
      slides={SLIDES}
      sections={[
        // 1. The Client
        {
          title: "The Client",
          type: "text",
          content: [
            "Strider Technologies is a risk intelligence platform serving security teams, compliance officers, and government-cleared personnel. The suite had grown product by product over five years. Ranger covered nation-state and personnel risk. Checkpoint handled third-party due diligence. Sentry was for personnel screening. Shield surfaced compliance signals. Spark was the AI search and reasoning layer that ran across all of them.",
            "By 2024 the suite had grown large enough that the roughly one hundred high-privilege analysts using it were spending half their day moving between products instead of doing the analysis. Leadership wanted to know what one product, instead of five, would look like.",
          ],
        },

        // 2. The Challenge
        {
          title: "The Challenge",
          type: "quote",
          content: [
            "Our analysts are juggling four mental models. They have to know which product to trust for which question. That is not the product we want to be.",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "The mandate was to consolidate the suite without sunsetting the depth each product already gave clients. We had a year to redirect the IA, the navigation, the risk model, and the data pipelines without breaking any existing contracts. My role was staff-shape: I owned the strategy and direction through POCs, handed visual and interaction execution to another designer, and PM'd a lot of the engineering build to keep the scope tractable for one design seat.",
          ],
        },

        // 3. Research & Planning
        {
          title: "Research & Planning",
          type: "text",
          content: [
            "The starting point was figuring out what was actually broken. I ran interviews with internal account teams who used the suite for client-facing work, and we surveyed external clients who used the product day to day. Two questions drove everything: how do you describe your work, and which product do you reach for first?",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/deck/research.jpg",
              alt: "Internal vs external user research results",
              caption: "Internal teams trended neutral to positive. External clients clustered on neutral. Wins were inconsistent across product surfaces.",
            },
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "The strongest insight didn't come from the surveys. It came from watching analysts work. Asked to investigate a high-risk entity, they didn't describe their process by product. They described it by what they were looking at: a person, an organization, a document, a relationship. The product names mattered to product teams. The analysts thought in topics.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/deck/insight.jpg",
              alt: "Unified topic-based approach diagram",
              caption: "The reframe: stop organizing the product by what we built, start organizing it by what the analyst is investigating.",
            },
          ],
        },
        {
          title: "Analyst Archetypes",
          type: "list",
          content: [
            "The Security Lead: lives in Ranger, escalates to Checkpoint for organizational context. Time-pressured, signal-driven, accepts more noise to catch the right thing.",
            "The Compliance Officer: lives in Checkpoint, runs background screens on personnel changes. Methodical, audit-conscious, needs every signal sourced.",
            "The Government Researcher: cross-references everything. Needs all four products open in tabs. Closest to the platform's full surface area.",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "Designing for the Security Lead's mental model meant designing for all three. If the most signal-driven user could move through the platform fluidly, the methodical Compliance Officer and the cross-referencing Researcher could too.",
            "Beyond the architectural questions, every product brand carried baggage. Internal teams were attached to names they had built. Clients had purchase orders tied to them. We sorted each brand into keep, rebrand into the unified taxonomy, or fold in entirely. The matrix made the trade-offs visible to leadership.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/deck/constraints.jpg",
              alt: "Keep or rebrand decision matrix",
              caption: "Keep, rebrand, or sunset every existing product name. The matrix forced a decision on each.",
            },
          ],
        },

        // 4. Designing the Solution
        {
          title: "Designing the Solution",
          type: "text",
          content: [
            "Based on the research, I hypothesized that an entity-first IA would solve more problems than a product-shell would. The shell pattern (wrap the products in shared chrome, share search and notifications) is faster to ship and lower risk. It also doesn't solve the language problem; it hides it behind a coat of paint.",
            "I argued for entity-first. Leadership backed the longer path.",
          ],
        },
        {
          title: "Strategic Direction",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/deck/exploration.jpg",
              alt: "Three strategic directions on the wall",
              caption: "Three options mapped end to end on the wall: wrapper-shell, meta-search, and entity-first. Walked the team through them and pressure-tested each live.",
            },
          ],
        },
        {
          title: "High-Fidelity Designs",
          type: "text",
          content: [
            "The shipped People view pulls signals from every product into one profile. Risk graph at the top, talent flows and cluster groups below, with Spark AI insights summarizing the entity in plain language in a side panel. Analysts open this first now, not Ranger.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/deck/design.jpg",
              alt: "The shipped cross-product People view",
              caption: "The shipped People view: one profile, signals from every product, Spark AI insights in the side panel.",
            },
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "Once the entity-first IA proved out for People, the same shape extended to Organizations. Top risk signals in the org's network, recent searches, geographic distribution. Same language, different lens.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/deck/iteration.jpg",
              alt: "Organizations view, same IA as People",
              caption: "Organizations got the same treatment. Same IA, different entity type. The risk language stayed consistent.",
            },
          ],
        },
        {
          title: "In Production",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/deck/outcome.jpg",
              alt: "Real client deployment with cross-product risk signals",
              caption: "A real client deployment. Risk signals across all four products, in one view, with the consolidated vocabulary.",
            },
          ],
        },

        // 5. Conclusion
        {
          title: "Conclusion",
          type: "text",
          content: [
            "If I started this project again, there are a few things I would do differently:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "Cut the original scope in half. The vision was too ambitious for the delivery cadence, and we shipped parts before they were ready. Smaller scope, higher quality, faster trust from the field.",
            "Build the risk signal vocabulary before any UI work. The language problem turned out to be the actual problem. Solving it first would have aligned every product team faster.",
            "Spend less time defending the keep-or-rebrand matrix and more time using it. The taxonomy decisions kept reopening every time a new stakeholder joined the conversation.",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "The platform did ship, and analysts ramp on the consolidated dashboard noticeably faster than the old fragmented version. Support tickets dropped. The risk language we standardized became the foundation for every new surface the team builds, instead of each one reinventing its own. That is the part I am most proud of.",
          ],
        },
      ]}
    />
  );
}
