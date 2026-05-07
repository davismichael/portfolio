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
        // 1. The Change (outcome-first opening)
        {
          title: "The Change",
          type: "text",
          content: [
            "The product suite used to teach analysts three different vocabularies. Ranger had its own risk signals, Checkpoint had others, Sentry had a third set. The same entity could look high-risk in one product and clean in another. After consolidation, one risk language carried across the entire platform.",
            "Two outcomes mattered most. New analysts ramped onto the product faster. Support tickets dropped. The vision was bigger than what shipped, and parts got cut on the way (more on that in the reflection), but the core consolidation held.",
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
              caption: "Unified platform: one navigation, one risk language, multiple lenses",
            },
          ],
        },

        // 2. The Setup (role + scale + stakes)
        {
          title: "The Setup",
          type: "text",
          content: [
            "Strider's intelligence products had grown organically. Ranger covered nation-state and personnel risk. Checkpoint covered third-party due diligence. Sentry handled personnel screening. Spark added AI-powered search across all of it. Each product had its own navigation, its own data model, and its own definition of risk.",
            "The user is roughly a hundred specially-privileged analysts: security teams, compliance officers, gov-cleared personnel. Small audience, high stakes. A bad signal out of this product can cost a contract or a clearance.",
            "My role was staff-shape. I shaped strategy and direction through POCs, then handed visual and interaction execution to another designer. I PM'd a lot of the build with engineering, which is what made the scope tractable for one design seat.",
          ],
        },

        // 3. The Problem (show, don't describe)
        {
          title: "The Problem",
          type: "text",
          content: [
            "Two real costs. First: cognitive load. An analyst tracking a single threat had to switch between Ranger, Checkpoint, and Sentry, each with its own UI conventions, search affordances, and risk vocabulary. Onboarding to the suite took weeks longer than it should have.",
            "Second: contradicting signals. Because each product had built its risk model independently, the same entity might surface as critical in one product and unremarkable in another. Analysts had to know which product to trust for which question. That is not a UI problem. It is a data and language problem.",
          ],
        },

        // 4. The Trade-off (the senior signal)
        {
          title: "The Trade-off",
          type: "text",
          content: [
            "Two directions to consolidate. The first was a meta-shell: wrap the three products in shared chrome, share search and notifications, and call it one platform. Fast to ship, low engineering risk, did not actually solve the problem.",
            "The second was rebuilding the IA around entities (people, organizations, documents) and treating the products as different lenses on the same data, with a single consolidated risk signal layer underneath. Year-long project, more engineering risk, solved the language problem at the root.",
            "I argued for the second. The shell would have shipped the consolidation problem to the next team. Leadership backed the longer path.",
          ],
        },

        // 5. One Risk Language (central design decision)
        {
          title: "One Risk Language",
          type: "text",
          content: [
            "This was the core design move. Different products had built up different signal sets, different scoring, and different names for the same concept. We didn't invent marketing names. We called things what they actually were, and made them consistent. Risk meant the same thing in every product surface.",
            "This is what made consolidation real. Shared chrome would have looked like one platform. Shared meaning is one platform.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/one-platform/07-entity-profile.png",
              alt: "Unified entity profile aggregating risk signals across products",
              caption: "One entity profile, signals from every product, one risk vocabulary",
            },
          ],
        },

        // 6. Push and Pull (the marquee research finding)
        {
          title: "Push and Pull Data",
          type: "text",
          content: [
            "The other big move came out of research with both internal and external users. Strider's data flow has two directions. Push: Strider proactively surfaces individual risk profiles to a company, and they merge into a section of that company's workspace. Pull: when someone comes up internally and the company needs to search them, they pull from the same dataset.",
            "Two directions, one continuous flow. Designing both in the same surface, instead of as two separate tools, was a research-driven win that wouldn't have shown up from looking at either user group alone.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/one-platform/08-risk-analysis.png",
              alt: "Risk analysis and network visualization for entity relationships",
              caption: "Network view of relationships across the consolidated risk graph",
            },
          ],
        },

        // 7. How It Shipped
        {
          title: "How It Shipped",
          type: "text",
          content: [
            "Strategy, direction, and POCs from me. Visual and interaction execution from another designer. Engineering build coordinated by me, not a separate PM. This is what staff-shape work looked like in practice: leveraging a small team to ship more than one designer ever could on their own.",
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
              caption: "Search Anything: one input across the consolidated data catalogs",
            },
          ],
        },

        // 8. Reflection
        {
          title: "What I'd Do Differently",
          type: "text",
          content: [
            "Push harder for the vision to be built right. Engineering quality slipped on a few critical surfaces, and the original vision was too ambitious for the delivery cadence, so parts got cut on the way out. If I started this tomorrow, I'd ship less in the first version and protect the quality bar on what does ship. Smaller scope, higher quality, faster trust from the field.",
          ],
        },
      ]}
    />
  );
}
