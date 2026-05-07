import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import UnlockScreen from "@/components/case-study/UnlockScreen";
import { isUnlocked } from "@/lib/case-study-auth";
import type { Slide } from "@/components/case-study/types";

export const metadata = {
  title: "AI Product (In Progress) · Designing the proof of concept for an AI operating system | Michael Davis",
  description:
    "(In Progress) Solo Designer + PM on a confidential AI-native rebuild of a mature intelligence product. Designed and prototyped a unified search, agentic profile insights, and user-authored skills. Prototyped in Claude with real data through MCP, shipped React via Subframe.",
};

const COLOR = "from-[#0c0a1f] to-[#1e1b3b]";
const RETURN_TO = "/case-study/new-product";

const SLIDES: Slide[] = [
  {
    kind: "cover",
    title: "AI Product",
    subtext:
      "A proof of concept for an AI operating system. Sole Designer + PM rebuild of a mature intelligence product.",
    image: null,
  },
  {
    kind: "problem",
    title: "Three searches, a push, and four versions of the same company.",
    subtext:
      "People in one system, organizations in another, email-domain risk in a third, push to clients in a fourth. Click an org from a person profile and you'd land somewhere with a completely different record.",
    image: null,
  },
  {
    kind: "context",
    title: "Solo Designer + PM. Twelve weeks. A working AI OS underneath.",
    subtext:
      "Mature product, no design team, no PM partner. Engineering had built the AI operating system that connected the silos. My job was the proof of concept on top of it.",
    image: null,
  },
  {
    kind: "decision",
    title: "Rejected: a faster search. Chose: agentic deliverables.",
    subtext:
      "Faster search would have shipped the synthesis problem to the next team. Agentic deliverables put the system underneath search, and the brief on top.",
    image: null,
  },
  {
    kind: "solution",
    title: "One search, across everything.",
    subtext:
      "Single input, single result page, synthesis with sources and a confidence indicator. Retrieval became the work underneath. Synthesis became the deliverable.",
    image: null,
    caption: "One input, one synthesized answer",
  },
  {
    kind: "solution",
    title: "People insights and organization insights, agentic.",
    subtext:
      "Two profile surfaces with agents running underneath. The agents read across the company's graph and the client's MCP-connected data. Updates surfaced when something actually moved.",
    image: null,
    caption: "Profiles that read themselves",
  },
  {
    kind: "solution",
    title: "Skills the user can write.",
    subtext:
      "Markdown files that tell the system what mattered to a team, why it mattered, how to write the brief, and what to do next. One context layer, four behaviors shaped from it.",
    image: null,
    caption: "A skill is a note, not a config screen",
  },
  {
    kind: "result",
    title: "The analyst edits and sends.",
    subtext:
      "Searching, cross-referencing, and writing the brief used to be the analyst's work. The new product does all three. The analyst edits and sends.",
    image: null,
  },
  {
    kind: "reflection",
    title: "What I'd do differently.",
    subtext:
      "Build evals for the agents earlier. Stand up a tweakable real-data prototype sooner. Both would have made the case for the work faster.",
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
        caseStudyName="AI Product"
        returnTo={RETURN_TO}
        error={params.unlock_error === "1"}
      />
    );
  }

  return (
    <CaseStudyLayout
      title="AI Product · Designing the proof of concept for an AI operating system"
      role="Sole Product Designer & PM"
      company="[Confidential]"
      timeline="2025–2026"
      color={COLOR}
      status="In Progress"
      summary="Designed the proof of concept for an AI-native rebuild of a mature intelligence product. Solo Designer + PM, twelve weeks. The new product turns search into synthesis, runs agents to keep client profiles current, and lets users author markdown skills that shape what the system prioritizes. Briefs export at the end. Prototyped in Claude with real data through MCP, shipped as React via Subframe."
      skills={[
        "AI Product Design",
        "Agentic Workflows",
        "LLM Skills & Prompting",
        "MCP",
        "Solo PM + Design",
        "React via Subframe",
        "Real-data Prototyping",
      ]}
      slides={SLIDES}
      sections={[
        {
          title: "",
          type: "text",
          content: [
            "The product wasn't one product. It was three searches and a push. People lived in one system, organizations in another, and a third product searched the email domains used by bad actors to phish sensitive data out of a company. Each had its own search box, its own results page, and its own data. You could pull up a person, see the company they worked for, click that company, and land in a completely separate product with a completely different record of it. Same organization, two systems, two stories. The push product was a different shape entirely, but it drew from the same disconnected sources.",
            "Engineering had just built something underneath all of it. An AI operating system that connected the data so a single query could read across the sources. My job was to design the proof of concept for what that should feel like.",
            "What does one search across everything actually look like? What does it look like once the system can stand up agents to keep the profiles that matter to a client continuously refreshed, ingest the client's own internal data, and let the user write their own skills to teach it what to care about? The brief from leadership, in spirit, was \"make us AI-native.\" I had twelve weeks, no design team, no PM partner, and a working AI OS underneath me. I started by prototyping in Claude.",
            "The analyst's job used to be searching, cross-referencing, and writing the brief. The new product does all three. The analyst edits and sends.",
          ],
        },
        {
          title: "One search, across everything",
          type: "text",
          content: [
            "The first design decision was about the input. Each of the old products had its own search box, sized and laid out for whatever that particular product returned. The new product had one. Behind it sat the AI OS that could read across people, organizations, and the email domains used to attack a company in a single pass. The new search box had to carry that weight without getting visually heavier.",
            "The result page had to do something the old products never did. Instead of returning a list of links from one product at a time, the system reasoned across the connected sources and returned a synthesized answer. A confidence indicator sat alongside it, calibrated to how strongly the underlying signals agreed. Sources and citations attached so an analyst could verify and dig in. Retrieval used to be the deliverable. Now retrieval was the work the AI OS did underneath, and the deliverable was the synthesis with its confidence attached.",
          ],
        },
        {
          title: "People insights and organization insights",
          type: "text",
          content: [
            "The product had two surfaces dedicated to the entities an analyst spent the most time with. One for people, one for organizations. Each was a profile view, but agentic. Behind every profile, the AI OS was running agents that churned through the data we already had on the entity and any data the client had connected through MCP, watching for new signals, rereading the profile when something changed, and updating what the analyst saw.",
            "The MCP move was what made these surfaces work for any specific client. The company already had a deep dataset on every entity in the graph. The client also had a dataset of their own, sitting in their HRIS, their directory, or a CRM, and that data was the most specific the system would ever see about a person or an organization. Connecting it through MCP let the agents read across both at once and treat the client's view of an entity as a first-class signal alongside the company's. From the analyst's perspective, their own company's data didn't sit in a separate panel. It folded into the graph.",
            "The design problem was making that motion legible. An analyst opening an organization profile in the morning needed to be able to tell, at a glance, what was new since they last looked, what the agent had concluded was worth their attention, and what hadn't moved. Without that, the always-on profile is noise.",
            "The deliverable an analyst kept asking about was the brief. By the end of the project, an organization profile and a people profile both knew how to export a brief that another human could read. Not a list of signals. A document, with the analyst's notes folded in, ready to send up to leadership. The agents did the gathering, the connecting, and most of the writing. The analyst did the editing and the sending.",
          ],
        },
        {
          title: "Skills the user can write",
          type: "text",
          content: [
            "The first three pillars all assumed the system knew what mattered. In practice, what mattered was different for every team. The risk signals that demanded attention from a compliance team weren't the same ones a trust-and-safety team needed to see first. And the actions that came next, the so-what-now-what part of the answer, were even more team-specific. Baking those preferences into the model was the wrong move, because it meant we kept retraining the system every time we onboarded a customer.",
            "Skills were the answer. The user could write a skill. A short markdown file, in the language they actually used, telling the system what they cared about, why it mattered to their team, what they wanted briefs to look like, and what kinds of actions they expected to take when a signal landed. The system read the skill on every search, every agent run, and every brief export. One context layer. Four behaviors shaped from it: what to prioritize, why it matters, how to write the brief, and what to do next.",
            "The design problem was making this feel like writing a note, not writing code. Most of the analysts I'd talked to had never written a system prompt and didn't think of themselves as people who configured AI. The skill editor had to look like a doc, not a settings panel. The system would handle interpreting what the skill meant. The user just had to write what they wanted.",
            "I prototyped this in Claude. I'd write a skill in plain English in front of an analyst, drop it into the project, run a search, and watch the synthesis change. That demo did more for the case for skills than any spec I could have written.",
          ],
        },
        {
          title: "How I worked",
          type: "text",
          content: [
            "The hardest call came early. The roadmap had a redesign of the search-results page on it: smarter sorting, better filters, a result-quality pass. A few weeks of work. Low engineering risk. And it would have moved the product an inch in a direction the gap kept getting bigger in. The synthesis was what the customer was paying for, and the synthesis was what the analyst was doing in their head and their notes after the search returned.",
            "I pushed for the bigger move. Don't make search faster. Make the system synthesize. Have it return the brief, with sources, with confidence, with what to do next. Search itself becomes a thing the system does, not a thing the analyst does.",
            "The way I made the case wasn't a deck. It was a working prototype.",
            "I prototyped in Claude with the company's real data piped in through MCP, so leadership could open a chat, ask the kinds of questions an analyst would ask, and watch the system actually do it. Once the direction was approved, I designed the visual and interaction details in Figma, and I built the React the engineering team would take to production using Subframe. What handed over to engineering was code, not specs.",
          ],
        },
        {
          title: "What each tool was for",
          type: "text",
          content: [
            "Claude was the thinking and the prototyping. Real-data demos. Skill drafts. Brief format experiments. The fastest way to see what an AI-native version of any surface should feel like was to put real data in front of a real model and watch what shape the thing wanted to take.",
            "MCP was how the data got there. Without it, every Claude prototype would have been a mock. With it, I could prototype against the actual company graph, which meant leadership and analysts were reacting to something real.",
            "Figma was for the design system, the layout, the visual language, the static frames I needed to push on with the team.",
            "Subframe was where the design became code. Connected to Claude through MCP, so I could turn approved frames into React in the same conversation where the prototype was alive. The engineering team could take that React to production.",
            "I didn't replace the team I didn't have with these tools. I changed what one person could ship.",
          ],
        },
        {
          title: "What I'd do differently",
          type: "text",
          content: [
            "I'd build evals for the agents earlier. The agents got better as I noticed bad output and fixed it, but I was the bottleneck. If I'd had a small set of tagged examples I could re-run every time a prompt changed, the drafts would have trended in the right direction faster, and I'd have caught regressions I missed.",
            "I'd also stand up a tweakable prototype sooner. The leadership reviews that mattered most were the ones where they could ask their own questions and watch the system answer. Static Figma frames were always the slowest part of the loop. Once I'd connected Claude to real data through MCP, the case made itself. I should have done that in week one.",
          ],
        },
      ]}
    />
  );
}
