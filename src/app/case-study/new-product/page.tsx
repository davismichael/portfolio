import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import UnlockScreen from "@/components/case-study/UnlockScreen";
import { isUnlocked } from "@/lib/case-study-auth";
import type { Slide } from "@/components/case-study/types";

export const metadata = {
  title: "New Product · From search to agents that deliver finished work | Michael Davis",
  description:
    "Sole Designer + PM on a confidential rebuild of a mature product. Reframed the front end as an AI operating system. Used a custom stack of AI agents to stand in for the team I didn't have.",
};

const COLOR = "from-[#0c0a1f] to-[#1e1b3b]";
const RETURN_TO = "/case-study/new-product";

const SLIDES: Slide[] = [
  {
    kind: "cover",
    title: "New Product",
    subtext:
      "From search to agents that deliver finished work. Solo Designer + PM rebuild of a mature product.",
    image: null,
  },
  {
    kind: "result",
    title: "The product stopped retrieving and started reporting.",
    subtext:
      "Same input box. The system reasons across the data and returns a deliverable. Sources, confidence, and follow-up paths included.",
    image: null,
    caption: "Ask once. Understand everything.",
  },
  {
    kind: "context",
    title: "Solo Designer + PM. No design team. No PM partner.",
    subtext:
      "Mature product, ~12 weeks to redirect the front end, full ownership of strategy and design. Company under NDA.",
    image: null,
  },
  {
    kind: "problem",
    title: "Analysts were the synthesis engine.",
    subtext:
      "Type a query, scan results, cross-reference manually, write the brief yourself. Retrieval wasn't the bottleneck. Synthesis was. Briefs were the actual deliverable, and the product wasn't producing them.",
    image: null,
  },
  {
    kind: "decision",
    title: "Rejected: a faster search. Chose: agentic deliverables.",
    subtext:
      "A faster search-results page would have been weeks of work and unlocked nothing. Agentic deliverables took a redesign of the entire front-end IA. But moved the product from retrieval to reasoning.",
    image: null,
  },
  {
    kind: "decision",
    title: "An agent stack stood in for the team I didn't have.",
    subtext:
      "UX problem-framing, graph-investigation research, PMM positioning, persona journey-maps, and a frontend engineering agent. I directed; they drafted. Each had a tightly scoped prompt and a clear hand-off.",
    image: null,
  },
  {
    kind: "solution",
    title: "Two altitudes of search, one input box.",
    subtext:
      "Fast: instant answers grounded in indexed data. Thinking: multi-step deep research that runs in the background and notifies you when it's ready. Same UI affordance, different intent.",
    image: null,
    caption: "Fast vs. Thinking. One input, two intents",
  },
  {
    kind: "solution",
    title: "Three views of the same network.",
    subtext:
      "Globe for shape, list for sort and filter, dashboard for what needs me today. Same data, different cognitive modes. The analyst picks the one that fits the question.",
    image: null,
    caption: "Globe → List → Dashboard",
  },
  {
    kind: "result",
    title: "What shipped, what stuck.",
    subtext:
      "A unified IA, an AI-native search and deep-research pattern, agentic deliverable templates, and the design system to carry them. Adoption metrics are under NDA. The agent workflow has since become how I scope new product surfaces.",
    image: null,
  },
  {
    kind: "reflection",
    title: "What I'd do differently.",
    subtext:
      "Invest earlier in eval prompts for the agents themselves so their drafts trended better over time. Stand up a tweakable prototype harness sooner so leadership could play with flows instead of reviewing static frames.",
    image: null,
  },
];

export default async function NewProductPage({
  searchParams,
}: {
  searchParams: Promise<{ unlock_error?: string }>;
}) {
  const unlocked = await isUnlocked();
  if (!unlocked) {
    const params = await searchParams;
    return (
      <UnlockScreen
        color={COLOR}
        caseStudyName="New Product"
        returnTo={RETURN_TO}
        error={params.unlock_error === "1"}
      />
    );
  }

  return (
    <CaseStudyLayout
      title="New Product · From search to agents that deliver finished work"
      role="Sole Product Designer & PM"
      company="[Confidential]"
      timeline="2025–2026"
      color={COLOR}
      summary="Rebuilt a mature product as an AI operating system. Analysts now ask once and receive a finished briefing, not a list of links. Worked solo as both PM and Designer, with a custom stack of AI agents standing in for the team I didn't have."
      skills={[
        "AI-Native UX",
        "Agentic Workflows",
        "Information Architecture",
        "Design Systems",
        "Solo PM + Design",
        "LLM Prompt Design",
        "Rapid Prototyping",
      ]}
      slides={SLIDES}
      sections={[
        {
          title: "The Change",
          type: "text",
          content: [
            "The product used to be a search engine: type a query, scan results, write the brief yourself. Now it produces the brief. Same input box, but the system reasons across the data and returns a deliverable. Sources, confidence, and follow-up paths included.",
            "Briefs were the actual deliverable analysts were paid for. The product wasn't producing them. That was the gap, and it was the entire reason a redesign was on the roadmap.",
          ],
        },
        {
          title: "The Setup",
          type: "text",
          content: [
            "Sole Designer and PM. No design team. No PM partner. Roughly 12 weeks to redirect the front end of a mature product into an AI-native shape, with the existing engineering team carrying the build. I owned product strategy, IA, and design end-to-end. The company is under NDA. The work is described here, the customer and adoption metrics are not.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/iris/ask-once.png",
              alt: "Ask once. Understand everything.",
              caption: "The redesigned input box. One affordance, two intents",
            },
          ],
        },
        {
          title: "The Problem",
          type: "text",
          content: [
            "Analysts were the synthesis engine. They typed a query, scanned results across multiple data catalogs, cross-referenced by hand, and wrote the brief themselves. Retrieval wasn't the bottleneck. Synthesis was. The product was charging customers for the deliverable but only shipping them the raw material.",
          ],
        },
        {
          title: "The Trade-off",
          type: "text",
          content: [
            "Two directions on the table. The first was a faster, smarter search-results layer. A few weeks of work, low risk, and zero progress against the actual gap. The second was rebuilding the front end around agentic deliverables: ask a question, the system reasons across the data, returns a finished briefing. That was a redesign of the entire IA, the input metaphor, and the result format.",
            "I argued for the second. The faster search-results layer would have shipped the synthesis problem to the next team. Leadership backed it.",
          ],
        },
        {
          title: "AI as a Design Partner",
          type: "text",
          content: [
            "Solo Designer + PM is a constraint. The constraint set the workflow: I built a stack of custom AI agents to stand in for the disciplines a normal team would cover.",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "A UX problem-framing agent that turned messy inputs into testable JTBDs and prioritized problem statements",
            "A research agent specialized in graph-investigation UX for risk intelligence",
            "A PMM agent for positioning, messaging, and launch narrative",
            "Persona-specific journey-map agents to pressure-test flows end-to-end",
            "A frontend engineering agent to turn approved screens into working React/Next.js code",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "Each agent had a tightly scoped system prompt, opinionated output formats, and a clear hand-off to the next stage. I directed; they drafted. This is the workflow I'd bring to any team. Not as a replacement for designers and PMs, but as a force multiplier when the team is smaller than the scope.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/iris/agent-stack.svg",
              alt: "Agent stack feeding into Direction → Drafts → Decisions → Designs",
              caption: "Direction → Drafts → Decisions → Designs",
            },
          ],
        },
        {
          title: "Two Altitudes of Search",
          type: "text",
          content: [
            "Fast: instant answers grounded in indexed data. Thinking: multi-step deep research that runs in the background and notifies you when it's ready. Same input box, two intents. The affordance carries. The analyst doesn't switch tools, the system switches modes.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/iris/deep-research.png",
              alt: "Deep research entry point with Fast / Thinking toggle and recent research feed",
              caption: "Fast vs. Thinking. One input, two intents",
            },
          ],
        },
        {
          title: "Three Views of the Same Network",
          type: "grid",
          content: "",
          images: [
            {
              src: "/images/case-studies/iris/globe.png",
              alt: "Network globe. High-level relationship visualization",
              caption: "Globe. The shape of the problem",
            },
            {
              src: "/images/case-studies/iris/list-view.png",
              alt: "List view. Sortable, filterable table of the same network",
              caption: "List. The same data, sortable",
            },
            {
              src: "/images/case-studies/iris/dashboard.png",
              alt: "Dashboard. Daily landing surface with priority queue",
              caption: "Dashboard. What needs me today",
            },
          ],
        },
        {
          title: "What Shipped",
          type: "text",
          content: [
            "A unified IA, an AI-native search and deep-research pattern, agentic deliverable templates, and a design system to carry all of it. Produced in weeks, solo, with the agent stack standing in for the team. Adoption metrics and contract impact are under NDA. The agent workflow itself has since become how I scope new product surfaces.",
          ],
        },
        {
          title: "What I'd Do Differently",
          type: "text",
          content: [
            "Invest earlier in eval prompts for the agents themselves so their drafts trended better over time. And stand up a lightweight, tweakable prototype harness sooner so leadership could play with flows instead of reviewing static frames.",
          ],
        },
      ]}
    />
  );
}
