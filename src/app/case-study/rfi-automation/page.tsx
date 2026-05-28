import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import UnlockScreen from "@/components/case-study/UnlockScreen";
import { isUnlocked } from "@/lib/case-study-auth";
import type { Slide } from "@/components/case-study/types";

export const metadata = {
  title: "AI Automation · Strider Technologies | Michael Davis",
  description:
    "Strider's first AI-assisted Request for Information system. Cut analyst turnaround from two weeks to under 24 hours. As Director of Product Design, owned strategy and core IC design with Ashley Franco as partner.",
};

const COLOR = "from-[#0f172a] to-[#1e293b]";
const RETURN_TO = "/case-study/rfi-automation";

const SLIDES: Slide[] = [
  {
    kind: "cover",
    title: "AI Automation",
    subtext:
      "Strider's first AI-assisted Request for Information system. Director of Product Design, owned strategy and core IC design with Ashley Franco partnering on IC.",
    image: null,
  },
  {
    kind: "problem",
    title: "Analysts spent two weeks on every RFI.",
    subtext:
      "Clients emailed the customer success team. CS relayed to analysts. Analysts did the research by hand. Reports came back two weeks later. The whole loop happened outside the product.",
    image: null,
  },
  {
    kind: "research",
    title: "Eight clients, four analysts, real workflows.",
    subtext:
      "Ashley interviewed eight enterprise clients and four internal intelligence analysts. We watched how RFIs actually got created, what information clients usually added, and where the workflow broke.",
    image: null,
  },
  {
    kind: "insight",
    title: "Clients wanted AI speed and human control.",
    subtext:
      "They were interested in AI assistance but wanted to review every AI-generated request and add their own intelligence before submission. The human had to stay in the loop.",
    image:
      "/images/case-studies/rfi-automation/workflow-original.png",
    caption: "The pre-RFI workflow: emails, relays, manual research.",
  },
  {
    kind: "constraints",
    title: "Companies couldn't send private data to AI.",
    subtext:
      "About 60% of clients were AI-hesitant across Strider's product line because their companies wouldn't allow personal or private investigation data to be processed by AI. Strider's terms didn't change, so the system had to ship with AI fully optional, transparent, and always editable.",
    image: null,
  },
  {
    kind: "exploration",
    title: "Two submission paths, one form.",
    subtext:
      "Spark generates the RFI for the speed path. An analyst handles the RFI for the trust path. Same form, same dashboard, same profile pages. The client picks the path per request.",
    image:
      "/images/case-studies/rfi-automation/workflow-new.png",
    caption: "The new RFI workflow with both Spark and analyst paths.",
  },
  {
    kind: "design",
    title: "Manager dashboard, profile pages, structured fields.",
    subtext:
      "RFI Manager gives clients visibility for the first time. Each request gets its own profile page with submission, status, and the generated report. Form added structured identifier fields (EIN, USCC, KPP).",
    image:
      "/images/case-studies/rfi-automation/rfi-manager.png",
    caption: "RFI Manager: every request, status, and owner in one place.",
  },
  {
    kind: "iteration",
    title: "Credit visibility and depletion states.",
    subtext:
      "RFIs that Spark generates consume Spark credits. We designed the states for credit visibility, depletion, and graceful fallback to the analyst path so the workflow never stalled.",
    image:
      "/images/case-studies/rfi-automation/credit-states.png",
    caption: "Credit-based system states: visibility, depletion, fallback.",
  },
  {
    kind: "outcome",
    title: "Two weeks to under 24 hours.",
    subtext:
      "Turnaround dropped from ~14 days to <24 hours. Time spent creating RFIs dropped 45%. The output was strong enough that a small share of client legal teams revised internal AI policies to allow Spark on this workflow. AI hesitancy across Strider's product line dropped from 60% to 45%. Credit purchases became a new revenue line.",
    image:
      "/images/case-studies/rfi-automation/rfi-profile.png",
    caption: "An RFI profile page: submission, generated report, status, linked profile updates.",
  },
  {
    kind: "reflection",
    title: "What I'd do differently as the director.",
    subtext:
      "Lock the credit pricing model before the IC design started. We restructured the depletion states twice because the credit logic kept changing. Constraint first, then design.",
    image: null,
  },
];

export default async function RfiAutomationPage({
  searchParams,
}: {
  searchParams: Promise<{ unlock_error?: string }>;
}) {
  const unlocked = await isUnlocked();
  if (!unlocked) {
    const params = await searchParams;
    return (
      <UnlockScreen
        caseStudyName="AI Automation"
        returnTo={RETURN_TO}
        error={params.unlock_error === "1"}
      />
    );
  }

  return (
    <CaseStudyLayout
      title="Accelerating Intelligence Requests Through AI Automation"
      role="Director of Product Design"
      company="Strider Technologies"
      timeline="2025"
      color={COLOR}
      summary="As Director of Product Design, I owned strategy, design direction, and core IC design on this project. I defined the workflow inside the platform, designed key surfaces myself, and shaped the AI-trust patterns across the system; Ashley Franco partnered with me as IC designer. The shipped system included an RFI submission form for both Spark and analyst requests, an RFI manager dashboard to track all requests, and individual RFI profile pages displaying submissions, reports, and related profile updates. Spark is Strider's AI agent. I collaborated closely with a product manager, front- and backend engineers, and intelligence operations analysts to ensure the system aligned with real investigative workflows."
      skills={[
        "AI Product Design",
        "Workflow Automation",
        "Design Direction",
        "Cross-functional Leadership",
        "Information Architecture",
        "Enterprise UX",
      ]}
      slides={SLIDES}
      sections={[
        // The Goal
        {
          title: "The Goal",
          type: "text",
          content: [
            "Create an RFI system inside the platform that would:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "Allow clients to submit RFIs directly in the platform",
            "Reduce manual effort in creating requests",
            "Deliver intelligence significantly faster",
            "Introduce Spark (AI) as an optional accelerated workflow",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          fullBleed: true,
          images: [
            {
              src: "/images/case-studies/rfi-automation/nobg/hero.png",
              alt: "Create RFI form with options for Spark and analyst submissions",
              caption: "The new RFI submission form inside the platform.",
            },
          ],
        },

        // Context & Problem
        {
          title: "Context & Problem",
          type: "text",
          content: [
            "Strider's platform helps organizations investigate individuals and companies to identify geopolitical and corporate risks.",
            "When a profile lacked sufficient intelligence, clients would request deeper research from Strider analysts. However, the process happened outside the product.",
          ],
        },
        {
          title: "Original Workflow",
          type: "list",
          content: [
            "Clients emailed or messaged the customer success team",
            "Customer success relayed the request to intelligence analysts",
            "Analysts conducted research manually",
            "Reports were returned to the client",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "Turnaround time could take up to two weeks, and clients had no way to submit or track RFIs inside the platform.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/rfi-automation/workflow-original.png",
              alt: "Original RFI workflow before redesign",
              caption: "The original workflow before redesign.",
            },
          ],
        },

        // Discovery
        {
          title: "Discovery: Understanding How Clients Submit RFIs",
          type: "text",
          content: [
            "Before designing the solution, I interviewed 8 enterprise clients and 4 internal intelligence analysts.",
          ],
        },
        {
          title: "Key Insight: Clients frequently added external identifiers",
          type: "text",
          content: [
            "Investigators often included information not present in the platform such as:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "EIN / tax identification numbers",
            "USCC identifiers for PRC entities",
            "KPP identifiers for Russian entities",
            "Internal company reference number",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "To support this, I expanded the RFI form to include structured identifier fields.",
          ],
        },
        {
          title: "Users wanted faster insights but still needed control",
          type: "text",
          content: [
            "Clients were interested in AI assistance but wanted to:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "Review AI-generated requests",
            "Add additional intelligence before submission",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "This shaped how we designed the Spark workflow, keeping the human in the loop on every request.",
          ],
        },

        // The Solution
        {
          title: "The Solution: A New RFI System",
          type: "text",
          content: [
            "The redesigned system introduced three major components.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/rfi-automation/workflow-new.png",
              alt: "Redesigned RFI workflow with Spark and analyst paths",
              caption: "The redesigned workflow with both Spark and analyst paths.",
            },
          ],
        },
        {
          title: "1. RFI Submission Form",
          type: "text",
          content: [
            "A new form allowed users to create requests directly within the platform. Users could choose between submissions generated by Spark or handled by an analyst.",
          ],
        },
        {
          title: "2. RFIs Generated by Spark",
          type: "text",
          content: [
            "Once submitted, Spark generates a report and profile update within ~24 hours, compared to the previous turnaround of around two weeks with an analyst.",
          ],
        },
        {
          title: "3. RFI Manager Dashboard",
          type: "text",
          content: [
            "I designed an RFI Manager page where users could track all requests in one place. The dashboard allows users to:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "View all RFIs submitted by their organization",
            "See request status and progress",
            "Quickly access individual RFI pages",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "This gave clients visibility that previously did not exist.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/rfi-automation/nobg/rfi-manager.png",
              alt: "RFI Manager dashboard",
              caption: "The RFI Manager dashboard.",
            },
          ],
        },
        {
          title: "4. RFI Request Pages",
          type: "text",
          content: [
            "Each request has its own RFI profile page that displays:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "The information submitted by the user",
            "Generated intelligence reports",
            "Status and updates on the investigation",
            "A link back to the related subject profile",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "When new intelligence is discovered, the associated profile is updated so investigators can continue their analysis.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/rfi-automation/nobg/rfi-profile.png",
              alt: "RFI profile page",
              caption: "An individual RFI profile page.",
            },
          ],
        },

        // Designing for AI Trust
        {
          title: "Designing for AI Trust",
          type: "text",
          content: [
            "When the project began, about 60% of clients were hesitant about AI across Strider's product line. The root cause wasn't fear of AI, it was company policy: their organizations wouldn't allow personal or private investigation data to be processed by AI, and Strider's terms didn't change during this project. The system had to work for those clients without asking them to bend their internal policies. Key design choices:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "Clear labeling of RFIs generated by Spark",
            "Editable AI-generated submissions",
            "Visibility into estimated turnaround times",
            "The ability to choose an analyst path instead",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "Clients with strict data policies could still use the product from start to finish via the analyst path, while clients without those restrictions got the speed of Spark.",
            "Once Spark RFIs started returning findings that surfaced real risk, a small but meaningful share of client legal teams revisited their AI policies and approved Spark for this workflow specifically. We hadn't lobbied them. The output spoke for itself, and for those clients the cost of missing the risk it was uncovering outweighed the policy concern.",
          ],
        },

        // Designing for Edge Cases
        {
          title: "Designing for Edge Cases & System Constraints",
          type: "text",
          content: [
            "RFIs generated by Spark required Spark credits, which clients could purchase. To support this credit system, I designed several system states.",
          ],
        },
        {
          title: "Credit visibility",
          type: "text",
          content: [
            "Users could see:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "Remaining Spark credits",
            "When credits would be deducted",
            "Estimated credit usage",
          ],
        },
        {
          title: "Credit depletion states",
          type: "text",
          content: [
            "If a user attempted to create a Spark RFI without credits, the interface:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "Notified them that credits were exhausted",
            "Suggested switching to an analyst RFI instead",
            "Provided guidance on purchasing additional credits",
          ],
        },
        {
          title: "Workflow alternatives",
          type: "text",
          content: [
            "The interface clearly communicated the tradeoff to ensure the system remained predictable and flexible. The form also allowed users to include additional identifiers and intelligence discovered during investigations.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          images: [
            {
              src: "/images/case-studies/rfi-automation/credit-states.png",
              alt: "Credit visibility, depletion, and fallback states",
              caption: "Credit states across the workflow.",
            },
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "The credit pricing model shifted twice during design, which forced us to rebuild the depletion state logic each time. By the second restructure it was clear the underlying constraint should have been locked before IC design began. That lesson lands in the reflection at the end.",
          ],
        },

        // Impact
        {
          title: "Impact",
          type: "text",
          content: [
            "Early beta results showed meaningful improvements:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "Faster intelligence delivery: Reduced turnaround time from ~14 days to <24 hours",
            "Reduced manual effort: ~45% decrease in time spent creating RFIs",
            "Shifted client AI policy: A small share of client legal teams revised internal AI policies to allow Spark on this workflow, after seeing the system surface risk their teams would have missed",
            "Moved the number across the company: AI hesitancy across Strider's product line dropped from ~60% to ~45%, with this feature recognized internally as the catalyst",
            "New revenue opportunity: RFIs generated by Spark drove adoption of Spark credit purchases",
            "Improved investigation workflow: Clients could now submit, track, and review RFIs directly in the platform",
          ],
        },
        {
          title: "",
          type: "video",
          content: "",
          videos: [
            {
              src: "/videos/case-studies/rfi-automation/rfi.mp4",
              caption: "The full RFI workflow in the shipped product.",
            },
          ],
        },

        // Iterations & Next Steps
        {
          title: "Iterations & Next Steps",
          type: "text",
          content: [
            "After the beta launch, I conducted additional user interviews to refine the workflow.",
            "Future opportunities include:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "Improving intelligence summaries generated by Spark",
            "Adding more global organization identifiers",
            "Providing clearer RFI progress tracking",
            "Reducing response times further with incremental AI reporting",
          ],
        },
      ]}
    />
  );
}
