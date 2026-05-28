import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import UnlockScreen from "@/components/case-study/UnlockScreen";
import { isUnlocked } from "@/lib/case-study-auth";
import type { Slide } from "@/components/case-study/types";

export const metadata = {
  title: "One Platform | Michael Davis",
  description:
    "Consolidated Strider's intelligence suite into one platform with a single risk language. Ramp time for new analysts dropped from roughly a month to about two weeks. Support ticket volume fell around 20 percent. Sr. Product Designer plus PM.",
};

const ONE_PLATFORM_COLOR = "from-[#0f172a] to-[#1e293b]";
const ONE_PLATFORM_RETURN_TO = "/case-study/one-platform";

const SLIDES: Slide[] = [
  {
    kind: "cover",
    title: "One Platform",
    subtext:
      "Consolidating Strider's intelligence suite into one risk language.",
    image: null,
  },
  {
    kind: "problem",
    title: "Four products, four different risk languages.",
    subtext:
      "Strider's four risk intelligence products (Ranger, Checkpoint, Shield, and Sentry) each had their own UI, vocabulary, and risk model. The same entity could look critical in one product and clean in another.",
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
      "Asked how they worked, analysts described it by entity (people, organizations, documents) not by product. That single behavior reframed the entire IA: organize the work around entities, not products.",
    image: null,
  },
  {
    kind: "solution",
    title: "Three pillars of One Platform.",
    subtext:
      "Merging the products into one IA. Disambiguating people and organizations across them. Spark, an AI layer that reasons across everything. Every later decision rolled up to one of these three.",
    image: "/images/case-studies/one-platform/deck/pillars.jpg",
    caption: "The shape of the answer: three pillars, one platform",
  },
  {
    kind: "constraints",
    title: "Keep, rebrand, or sunset every product name.",
    subtext:
      "Hard calls on each brand. The matrix made the tradeoffs visible: Ranger became Insights, Checkpoint became Search Organizations, Sentry became Search People. The taxonomy did the work the brand had been doing.",
    image: "/images/case-studies/one-platform/deck/constraints.jpg",
    caption: "Ranger → Insights, Checkpoint → Search Orgs, Sentry → Search People",
  },
  {
    kind: "exploration",
    title: "Three strategic directions, mapped on the wall.",
    subtext:
      "Stuck up three options end to end. A shell wrapping the products, a meta search layer across them, an IA organized by entity. Every product surface mapped onto each. Walked the team through them and tested them live.",
    image: "/images/case-studies/one-platform/deck/exploration.jpg",
    caption: "Three options compared side by side",
  },
  {
    kind: "design",
    title: "Pillar 1: an entity profile that runs across products.",
    subtext:
      "One profile pulls signals from every product. Risk graph, talent flows, cluster groups. Spark AI insights summarize the entity in plain language right inside the panel.",
    image: "/images/case-studies/one-platform/deck/design.jpg",
    caption: "The shipped People view, running across products",
  },
  {
    kind: "design",
    title: "Pillar 2: people and organization disambiguation.",
    subtext:
      "Same person showed up four different ways across products. The disambiguation workstream resolved entities at the data layer so the new IA had something coherent to render. One product at a time.",
    image: "/images/case-studies/one-platform/deck/disambiguation.jpg",
    caption: "Disambiguating entities across Ranger, Sentry, Checkpoint, Shield",
  },
  {
    kind: "design",
    title: "Pillar 3: Spark, an AI reasoning layer.",
    subtext:
      "Spark sits across the platform. AI-powered search, document upload to combine with Strider's data, summaries across products in plain language. Beta launched May 2025, GA target Q4.",
    image: "/images/case-studies/one-platform/deck/spark.jpg",
    caption: "Spark: AI capabilities running across the consolidated platform",
  },
  {
    kind: "testing",
    title: "Tested with senior analysts on real data.",
    subtext:
      "Watched analysts work the new IA against entities they already knew. They found things the old product had missed. Confirmed the entity mental model held under real load.",
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
    title: "Ramp cut in half. Tickets down ~20%. One language.",
    subtext:
      "Four product dashboards collapsed into one. Ramp time for new analysts dropped from roughly a month to about two weeks. Support tickets fell around 20%, and Client Success spent noticeably less time on product onboarding. The risk vocabulary became the foundation for every new surface, instead of each one reinventing its own.",
    image: "/images/case-studies/one-platform/deck/outcome.jpg",
    caption: "Real client deployment after consolidation",
  },
  {
    kind: "outcome",
    title: "What ships next.",
    subtext:
      "A dashboard across products and unified nav in Q2. Intersections across products (Ranger×Sentry, Checkpoint×Sentry, Ranger×Checkpoint) in Q3. Spark Profile Summaries and Search Anything in H2.",
    image: "/images/case-studies/one-platform/deck/roadmap.jpg",
    caption: "One Platform roadmap, 2025",
  },
  {
    kind: "reflection",
    title: "What I'd do differently.",
    subtext:
      "First, we designed something. Then we redesigned it. Then we acted like that was the plan all along. Smaller scope, higher quality, and the risk vocabulary locked before any UI work would have bought back months.",
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
      timeline="2024-2025"
      color={ONE_PLATFORM_COLOR}
      summary="Consolidated Strider's intelligence suite into one platform with a single risk language and a refreshed visual design. Ramp time for new analysts dropped from roughly a month to about two weeks. Support ticket volume fell around 20%. Client Success spent noticeably less time onboarding analysts because they were no longer learning four products. I owned product strategy and design direction, partnered with one of my senior designers on visual and interaction execution, and PM'd the engineering build."
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
            "Strider Technologies is a risk intelligence platform serving security teams, compliance officers, and personnel with government clearance. The suite had grown product by product over five years. Ranger covered nation-state and personnel risk. Checkpoint handled third-party due diligence. Sentry was for personnel screening. Shield surfaced compliance signals. Spark was the AI search and reasoning layer that ran across all of them.",
            "By 2024 the suite had grown large enough that the roughly one hundred senior analysts using it were spending half their day moving between products instead of doing the analysis. Leadership wanted to know what one product, instead of five, would look like.",
          ],
        },

        // 2. The Challenge
        {
          title: "The Challenge",
          type: "text",
          content: [
            "The real problem wasn't that there were four products. It was that each one indexed the world through a single entity type. Sentry only searched people. Checkpoint only searched organizations. An analyst investigating a person tied to an organization had to jump between products, carry context across by hand, and reconcile data shapes that didn't align. The data was split along the wrong axis for the work analysts were actually doing.",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "The mandate was to consolidate the suite without sunsetting the depth each product already gave clients. We had a year to redirect the IA, the navigation, the risk model, and the data pipelines without breaking any existing contracts. I owned product strategy and design direction through POCs, partnered with one of my senior designers on visual and interaction execution, and PM'd a lot of the engineering build to keep scope tractable for a single design seat.",
          ],
        },

        // 3. Research & Planning
        {
          title: "Research & Planning",
          type: "text",
          content: [
            "The starting point was figuring out what was actually broken. I ran interviews with internal account teams who used the suite for work with clients, and we surveyed external clients who used the product day to day. Two questions drove everything: how do you describe your work, and which product do you reach for first?",
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
              src: "/images/case-studies/one-platform/deck/pillars.jpg",
              alt: "Three pillars of One Platform",
              caption: "The reframe shaped the answer: merge the products, disambiguate the entities across them, and put Spark on top of all of it.",
            },
          ],
        },
        {
          title: "Analyst Archetypes",
          type: "list",
          content: [
            "The Security Lead: lives in Ranger, escalates to Checkpoint for organizational context. Under time pressure, driven by signals, accepts more noise to catch the right thing.",
            "The Compliance Officer: lives in Checkpoint, runs background screens on personnel changes. Methodical, careful about audits, needs every signal sourced.",
            "The Government Researcher: cross-references everything. Needs all four products open in tabs. Closest to the platform's full surface area.",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "Designing for the Security Lead's mental model meant designing for all three. If the user most driven by signals could move through the platform fluidly, the methodical Compliance Officer and the Researcher who cross-checked everything could too.",
            "Beyond the architectural questions, every product brand carried baggage. Internal teams were attached to names they had built. Clients had purchase orders tied to them. We sorted each brand into keep, rebrand into the unified taxonomy, or fold in entirely. The matrix made the tradeoffs visible to leadership.",
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
            "Based on the research, I hypothesized that an IA organized by entity would solve more problems than wrapping the products in a shared shell would. The shell pattern (wrap the products in shared chrome, share search and notifications) is faster to ship and lower risk. It also doesn't solve the language problem; it hides it behind a coat of paint.",
            "I argued for entities first. Leadership backed the longer path.",
            "Alongside the IA reframe, the platform got a visual refresh. One design system replaced four inconsistent UIs, with aligned color, typography, and component patterns across every surface. The fresh look made the consolidation feel like a new product instead of a rebrand stitched together from four old ones.",
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
              caption: "Three options mapped end to end on the wall: a shell wrapping the products, a meta search layer, and an IA organized by entity. Walked the team through them and tested each live.",
            },
          ],
        },
        {
          title: "Pillar 1: An Entity Profile Across Products",
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
              alt: "The shipped People view across products",
              caption: "The shipped People view: one profile, signals from every product, Spark AI insights in the side panel.",
            },
          ],
        },
        {
          title: "Pillar 2: People & Organization Disambiguation",
          type: "text",
          content: [
            "The new IA only worked if the data underneath it agreed on who was who. The same person showed up four different ways across products: with different IDs, different spellings, different role labels, sometimes tied to different organizations. We stood up a disambiguation workstream that resolved entities at the data layer so the platform had something coherent to render.",
            "This wasn't glamorous work, but it was the prerequisite for everything else. One product at a time, until People and Organizations had a single canonical resolution shared across Ranger, Sentry, Checkpoint, and Shield.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/deck/disambiguation.jpg",
              alt: "People and Organization disambiguation",
              caption: "Disambiguation as a foundational pillar. One canonical entity per person and per organization across every product.",
            },
          ],
        },
        {
          title: "Pillar 3: Spark, an AI Reasoning Layer",
          type: "text",
          content: [
            "Spark sits across the consolidated platform. AI-powered search that explores connections across Strider's products and data. Document upload so clients can combine their files with Strider's intelligence. Summaries in plain language of any entity directly inside the profile panel.",
            "Spark beta launched May 2025 with a defined credit model so analysts could unlock answers from data they didn't normally have access to. The bet was that an AI layer wasn't a feature inside a product. It was a pillar that needed the consolidated IA underneath it to be useful at all.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/deck/spark.jpg",
              alt: "Spark AI capabilities across the platform",
              caption: "Spark: AI-powered search, document upload, and summaries across products running on top of the unified platform.",
            },
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "Once the three pillars proved out for People, the same shape extended to Organizations. Top risk signals in the org's network, recent searches, geographic distribution. Same language, different lens.",
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
              alt: "Real client deployment with risk signals across products",
              caption: "A real client deployment. Risk signals across all four products, in one view, with the consolidated vocabulary.",
            },
          ],
        },
        {
          title: "What Ships Next",
          type: "text",
          content: [
            "The platform's first surfaces are live; the rest of 2025 fills in the surface area across products. A dashboard across products and unified navigation land in Q2. The three big intersections (Ranger×Sentry, Checkpoint×Sentry, Ranger×Checkpoint) ship in Q3. Spark Profile Summaries and Search Anything follow in the second half.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/one-platform/deck/roadmap.jpg",
              alt: "One Platform roadmap for 2025",
              caption: "One Platform roadmap. Q2 lays the foundation; Q3 ships the intersections across products; H2 brings the surfaces powered by Spark.",
            },
          ],
        },

        // 5. Conclusion
        {
          title: "Conclusion",
          type: "quote",
          content: [
            "First, we designed something. Then we redesigned it. Then we acted like that was the plan all along.",
          ],
        },
        {
          title: "",
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
            "Spend less time defending the brand decision matrix and more time using it. The taxonomy decisions kept reopening every time a new stakeholder joined the conversation.",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "The platform did ship. Four product dashboards collapsed into one. Ramp time for new analysts dropped from roughly a month to about two weeks. Support ticket volume fell around 20%, and Client Success spent noticeably less time onboarding analysts because they were no longer learning four products. The risk language we standardized became the foundation for every new surface the team builds, instead of each one reinventing its own. That is the part I am most proud of.",
          ],
        },
      ]}
    />
  );
}
