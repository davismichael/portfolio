import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import type { Slide } from "@/components/case-study/types";

export const metadata = {
  title: "AI Automation · Strider Technologies | Michael Davis",
  description:
    "Strider's first AI-assisted Request for Information system. Cut analyst turnaround from two weeks to under 24 hours. As Director of Product Design, led the end-to-end design.",
};

const COLOR = "from-[#0f172a] to-[#1e293b]";
const SLIDES: Slide[] = [
  {
    kind: "cover",
    title: "AI Automation",
    subtext:
      "Strider's first AI-assisted Request for Information system. Director of Product Design, led the end-to-end design.",
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
      "I interviewed eight enterprise clients and four internal intelligence analysts. We watched how RFIs actually got created, what information clients usually added, and where the workflow broke.",
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

export default function RfiAutomationPage() {
  return (
    <CaseStudyLayout
      title="Cut analyst turnaround from two weeks to under 24 hours"
      role="Director of Product Design"
      company="Strider Technologies"
      timeline="2025"
      color={COLOR}
      summary="I led the end-to-end design of a new Request for Information (RFI) system that introduced AI-assisted intelligence requests using Strider's AI agent, Spark. RFIs that previously ran through customer success and manual analyst research now happen in-platform: a submission form with Spark-generated and analyst-assisted paths, an RFI manager dashboard, and individual RFI profile pages."
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
        // Walkthrough roadmap
        {
          title: "Overview",
          type: "list",
          content: [
            "The Problem: intelligence requests took up to **two weeks**, outside the product",
            "The Constraint: **60%** of clients couldn't let AI process their investigation data",
            "The Solution: one in-platform workflow with both Spark and analyst paths",
            "The Design Choices: transparency, editability, and credit system states",
            "The Outcome: turnaround under **24 hours** and measurably higher AI adoption",
          ],
        },

        // Snapshot. Numbers up top so a skimmer gets the result in four seconds.
        {
          title: "Snapshot",
          type: "stats",
          content: "",
          stats: [
            {
              value: "14 days to under 24 hours",
              label: "Analyst turnaround on a client request for information",
            },
            {
              value: "45%",
              label: "Less time spent creating a request, against the manual process",
            },
            {
              value: "60% to 45%",
              label: "Clients unwilling to let AI process their investigation data",
            },
            {
              value: "12 interviews",
              label: "Eight enterprise clients and four intelligence analysts, before any UI",
            },
          ],
        },

        // The Problem
        {
          title: "The Problem",
          type: "text",
          content: [
            "Strider's platform helps organizations investigate individuals and companies to identify geopolitical and corporate risks.",
            "When a profile lacked sufficient intelligence, clients would request deeper research from Strider analysts. However, the process happened outside the product.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          fullBleed: true,
          images: [
            {
              src: "/images/case-studies/rfi-automation/rfi-form-information.png",
              alt: "RFI form information step with structured fields for aliases, addresses, regions, and identifiers",
              caption: "The RFI form's information step: structured fields for aliases, addresses, regions of interest, and identifiers.",
            },
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
            "Turnaround time could take up to **two weeks**, and clients had no in-platform way to submit or track RFIs.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          fullBleed: true,
          images: [
            {
              src: "/images/case-studies/rfi-automation/workflow-original.png",
              alt: "Original RFI workflow before redesign",
              caption: "The original workflow before redesign.",
            },
          ],
        },

        // The Goal
        {
          title: "The Goal",
          type: "text",
          content: [
            "Create an in-platform RFI system that would:",
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
        // Discovery
        {
          title: "Discovery: Understanding How Clients Submit RFIs",
          type: "text",
          content: [
            "Before designing the solution, I interviewed **8 enterprise clients** and **4 internal intelligence analysts**.",
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
            "Internal company reference numbers",
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
        {
          title: "",
          type: "image",
          content: "",
          fullBleed: true,
          images: [
            {
              src: "/images/case-studies/rfi-automation/workflow-new.png",
              alt: "Redesigned RFI workflow with Spark and analyst paths",
              caption: "The redesigned workflow with both Spark and analyst paths.",
            },
          ],
        },

        // The Constraint
        {
          title: "The Constraint",
          type: "text",
          content: [
            "When the project began, about **60%** of our clients were hesitant to use AI in their investigative workflows, largely because their companies wouldn't allow personal or private investigation data to be processed by AI. Strider's terms weren't changing, so the system had to make AI fully optional and transparent:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "Clear labeling of Spark-generated RFIs",
            "Editable AI-generated submissions",
            "Visibility into estimated turnaround times",
            "The ability to choose analyst-assisted RFIs",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "This allowed clients to gradually experiment with AI without bending their internal policies.",
          ],
        },

        // The Solution
        {
          title: "The Solution",
          type: "text",
          content: [
            "Replacing the analyst workflow was never an option. It was the path AI-hesitant clients trusted, so the goal was to add speed alongside it, not take it away. The redesigned system introduced four major components.",
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
        {
          title: "1. RFI Submission Form",
          type: "text",
          content: [
            "A new form allowed users to create requests directly within the platform. Users could choose between submissions generated by Spark or handled by an analyst. The form follows the platform's existing panel and stepper patterns, so creating an RFI feels native to the investigative workflow rather than a bolted-on experience.",
          ],
        },
        {
          title: "2. Spark-generated RFIs",
          type: "text",
          content: [
            "Once submitted, Spark generates a report and profile update within **~24 hours**, compared to the previous **two-week** analyst turnaround.",
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
          fullBleed: true,
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
          fullBleed: true,
          images: [
            {
              src: "/images/case-studies/rfi-automation/nobg/rfi-profile.png",
              alt: "RFI profile page",
              caption: "An individual RFI profile page.",
            },
          ],
        },

        // The Design Choices
        {
          title: "The Design Choices",
          type: "text",
          content: [
            "Spark-generated RFIs required Spark credits, which clients could purchase. To support this credit-based system, I designed several system states.",
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
            "Suggested switching to analyst-assisted RFIs",
            "Provided guidance on purchasing additional credits",
          ],
        },
        {
          title: "Workflow alternatives",
          type: "text",
          content: [
            "The interface clearly communicated the tradeoff between the Spark and analyst paths so the system stayed predictable and flexible. The form also allowed users to include additional identifiers and intelligence discovered during investigations.",
          ],
        },
        {
          title: "",
          type: "image",
          content: "",
          fullBleed: true,
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
            "The credit pricing model shifted twice during design, which forced us to rebuild the depletion state logic each time. The lesson: lock the underlying business constraint before detailed design begins.",
          ],
        },

        // The Outcome
        {
          title: "The Outcome",
          type: "text",
          content: [
            "Early beta results showed meaningful improvements:",
          ],
        },
        {
          title: "",
          type: "list",
          content: [
            "Faster intelligence delivery: Reduced turnaround time from **~14 days** to **<24 hours**",
            "Reduced manual effort: **~45%** decrease in time spent creating RFIs",
            "Improved AI adoption: Clients hesitant to use AI decreased from **~60% to ~45%**, with some client legal teams revising internal AI policies after seeing Spark surface risk their teams would have missed",
            "New revenue opportunity: Spark-generated RFIs drove adoption of Spark credit purchases",
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

        // The result, in the DesignMe shape: big numbers, no prose.
        {
          title: "The result",
          type: "stats",
          content: "",
          stats: [
            {
              value: "Under 24 hours",
              label: "Down from roughly 14 days, on every client request for information",
            },
            {
              value: "45% faster to submit",
              label: "Measured against the manual, out-of-product process it replaced",
            },
            {
              value: "15 points of AI hesitancy removed",
              label:
                "Client resistance to AI on investigation data fell from about 60% to about 45%",
            },
            {
              value: "New revenue line",
              label: "Spark-generated requests drove adoption of Spark credit purchases",
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
            "Improving Spark-generated intelligence summaries",
            "Adding more global organization identifiers",
            "Providing clearer RFI progress tracking",
            "Reducing response times further with incremental AI reporting",
          ],
        },
      ]}
    />
  );
}
