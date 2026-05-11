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
  // 1. Cover
  {
    kind: "cover",
    title: "AI Product",
    subtext:
      "Designing the proof of concept for an AI operating system. Solo Designer and PM, twelve weeks.",
    image: null,
  },

  // 2. The Problem
  {
    kind: "problem",
    title: "Four products, four versions of the same company.",
    subtext:
      "An analyst could pull up a person, click their company, and land in a separate product with a different record of it.",
    image: null,
  },

  // 3. Research (analyst sessions, the entity-first reframe)
  {
    kind: "research",
    title: "Sat with analysts on real investigations.",
    subtext:
      "Cross-referencing was not a step in the workflow. It was most of the workflow. And analysts thought in entities, not products.",
    image: null,
  },

  // 4. Exploration (whiteboard sketches first)
  {
    kind: "exploration",
    title: "Whiteboarded the day before committing to a flow.",
    subtext:
      "Three or four versions on paper until one held up to its own logic. Then I took the validated story into Subframe.",
    image: null,
  },

  // 5. Iteration (the tool stack slide: Subframe + Claude Code via MCP)
  {
    kind: "iteration",
    title: "Subframe and Claude Code, wired through MCP.",
    subtext:
      "Subframe turned design intent into real React. Claude Code through MCP let the prototype read the company's real data graph. Analysts tested on real entities, not mocks.",
    image: null,
  },

  // 6. Design move 1: One search
  {
    kind: "design",
    title: "One search, across everything.",
    subtext:
      "Single input. Synthesized answer with sources and a confidence indicator. Retrieval became the work underneath. The deliverable was the brief.",
    image: null,
    caption: "One input, one synthesized answer",
  },

  // 7. Design move 2: Agentic profiles
  {
    kind: "design",
    title: "Agentic people and organization profiles.",
    subtext:
      "Agents read across the company graph and the client's MCP-connected data. Profiles updated themselves and surfaced what had changed.",
    image: null,
    caption: "Profiles that read themselves",
  },

  // 8. Design move 3: User-authored skills
  {
    kind: "design",
    title: "Skills the user could write.",
    subtext:
      "A short markdown file told the system what each team cared about, why, and how to write the brief. One context layer, four behaviors.",
    image: null,
    caption: "A skill is a note, not a config screen",
  },

  // 9. Outcome
  {
    kind: "outcome",
    title: "The analyst edits and sends.",
    subtext:
      "Searching, cross-referencing, and brief-writing used to be the analyst's work. The new product does all three. React handed to engineering via Subframe.",
    image: null,
  },

  // 10. Reflection
  {
    kind: "reflection",
    title: "What I would do differently.",
    subtext:
      "Build evals for the agents earlier. Stand up the real-data prototype in week one, not week three. Trade breadth for depth in the profiles.",
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
        // 1. The Client (who they are, the four-products-and-a-push state)
        {
          title: "The Client",
          type: "text",
          content: [
            "A confidential risk-intelligence platform used by roughly a hundred specially-privileged analysts at the company and at its client organizations. Security teams, compliance officers, gov-cleared personnel. Small audience, high stakes. A wrong signal out of this product can cost a contract or a clearance.",
            "The product wasn't actually one product. It was three search experiences and a push. People lived in one system. Organizations lived in another. A third product searched the email domains used by bad actors to phish sensitive data out of a company. Each had its own search box, its own results page, and its own data. An analyst could pull up a person, see the company they worked for, click that company, and land in a separate product with a completely different record of it. Same organization, two systems, two stories.",
            "The fourth product was a different shape entirely. It pushed risk profiles to clients on a recurring cadence, drawing from the same disconnected sources. So a client received pre-packaged briefings from one direction and ran their own searches from the other, with no shared language between the two.",
            "Engineering had just shipped something underneath all of it: an AI operating system that connected the data so a single query could read across the sources. My job was to design the proof of concept on top.",
          ],
        },

        // 2. The Challenge (leadership quote + restated challenge)
        {
          title: "The Challenge",
          type: "quote",
          content: [
            "Make us AI-native. Not the plumbing. Engineering already built that. The product. The thing analysts open in the morning.",
          ],
        },
        {
          title: "",
          type: "text",
          content: [
            "Leadership, day one of the project.",
            "The directive was specific: rebuild the product as an AI-native experience on top of an AI operating system that was already running underneath. Twelve weeks. Solo designer, no PM partner, no design team to share the load. The mature product would keep running while I designed the proof of concept on top of the new system.",
            "The harder version of the question wasn't \"what should AI-native look like.\" It was \"what does an analyst's day look like once AI-native ships.\" The four products had taught analysts how to work in pieces. Search a person here. Search the company there. Cross-reference the email-domain risk in a third. Stitch the brief together by hand at the end. The new product had to undo that motion, not just speed it up.",
            "I started by sitting with analysts.",
          ],
        },

        // 3. Research & Understanding (analyst sessions, three findings, priorities)
        {
          title: "Research & Understanding",
          type: "text",
          content: [
            "The simplest starting point was to sit with analysts and watch them do the work. I asked each one to walk me through a recent investigation end to end, from the first search to the brief they sent up to leadership. Three things showed up in every session.",
            "First, every investigation was cross-product. An analyst would search a person in one product, copy a name into the second product to look up the company, switch to the third to check the email-domain risk, then write the brief in a doc that knew about none of it. The cross-referencing wasn't a step in the workflow. It was most of the workflow.",
            "Second, analysts described their work in terms of entities, not products. \"I'm working on this person at this company\" was the unit. The product they happened to be in at any moment was scaffolding. This same reframe had surfaced during One Platform research the year before, and it held here.",
            "Third, what mattered varied by team. A compliance team and a trust-and-safety team could look at the same person and care about completely different signals. Hard-coding what mattered into the product would have meant retraining the system on every customer.",
            "Out of those three findings, the priorities for the proof of concept were clear. One search across everything. Agentic profiles. Briefs that exported. User-authored skills as the second-pass move, because hard-coding what mattered would have shipped the wrong abstraction. A recommendation surface for analysts who didn't know what to search for was on the table early and got cut. Retraining the underlying models was off the table entirely.",
            "Secondary research was thin. Agentic product patterns were still being invented. I leaned on Anthropic's own MCP and skills documentation, plus a small set of internal experiments engineering had run before I came in. Beyond that, I made the case that the prototype would be the research instrument.",
            "So I built one.",
          ],
        },

        // 4. Prototyping & Testing (whiteboard sketches, Subframe, Claude Code via MCP, analyst sessions)
        {
          title: "Prototyping & Testing",
          type: "text",
          content: [
            "The first move was paper. I whiteboarded the analyst's day across the four products and sketched what a single, AI-native flow would replace it with. The sketching was not for visual fidelity. It was for me, to make sure I understood the full story before I committed to it. What did the analyst start with. Where did they get stuck. What would the new product hand back to them at the end. I worked through the same flow in three or four different shapes until one held up to its own logic.",
            "Once I trusted the story, I took it into Subframe. Subframe takes design intent and turns it into actual React components, which meant the next round of \"sketches\" were not sketches at all. They were pages I could open in a browser, click through, and put in front of someone.",
            "That mattered for two reasons. The first was speed. I was a solo designer. There was no one to hand a Figma file to so they could turn it into a working prototype. The second was fidelity. A clickable page got different reactions than a static frame, and analysts especially needed to interact with something to tell me whether it would survive their actual workday.",
            "Once the shape of the product started to settle, I connected Claude Code to Subframe through MCP. The result was a prototype that could read from the company's real data graph, the same graph the production system used. Analysts could open the prototype, search for an entity they already knew well, and watch the system return a synthesized brief drawn from real signals. No mock data. No \"imagine if\" sessions.",
            "That changed the testing loop. Instead of asking analysts whether they thought a feature would help, I asked them to do a real piece of their work in the prototype and tell me where it broke. Sessions ran twenty to thirty minutes. I watched them search, react, edit, and either accept or fix the brief. Each session produced a small list of changes I could apply to Subframe in the next hour, often with Claude writing the code.",
            "A few things broke in testing that would not have broken in Figma. The synthesis was confident in the wrong places. Sources were attached but easy to skip past. The skill editor felt like a settings panel even though it was a markdown file. Each of those came out of an analyst session and shaped what shipped.",
            "By the third week of prototyping, leadership could open the same prototype, ask their own questions, and watch it answer. The case for the bigger move (synthesis over search) made itself once they could see it run.",
          ],
        },

        // 5a. Designing the Solution: One search
        {
          title: "One Search, Across Everything",
          type: "text",
          content: [
            "The first design decision was the input. Each old product had its own search box, sized for whatever that product returned. The new product had one. Behind it was the AI operating system, reading across people, organizations, and the email domains used to attack a company in a single pass. The new search box had to carry that weight without getting visually heavier.",
            "The result page had to do something the old products never did. Instead of returning a list of links from one product, the system reasoned across the connected sources and returned a synthesized answer. A confidence indicator sat alongside it, calibrated to how strongly the underlying signals agreed. Sources and citations attached so an analyst could verify and dig in. Retrieval used to be the deliverable. Now retrieval was the work the AI OS did underneath, and the deliverable was the synthesis with its confidence attached.",
          ],
        },

        // 5b. Designing the Solution: Agentic profiles
        {
          title: "People Insights and Organization Insights",
          type: "text",
          content: [
            "Two profile surfaces sat at the center of the analyst's day. One for people, one for organizations. Each was a profile view, but agentic. Behind every profile, the AI OS was running agents that churned through the data we already had on the entity and any data the client had connected through MCP, watching for new signals, rereading the profile when something changed, and updating what the analyst saw.",
            "The MCP move was what made these surfaces work for any specific client. The company already had a deep dataset on every entity in the graph. The client also had a dataset of their own, sitting in their HRIS, their directory, or a CRM. That data was the most specific the system would ever see about a person or an organization. Connecting it through MCP let the agents read across both at once and treat the client's view of an entity as a first-class signal alongside the company's. From the analyst's perspective, their own company's data did not sit in a separate panel. It folded into the graph.",
            "The deliverable analysts kept asking about was the brief. By the end of the project, both profile types knew how to export one. Not a list of signals. A document, with the analyst's notes folded in, ready to send up to leadership. The agents did the gathering, the connecting, and most of the writing. The analyst did the editing and the sending.",
          ],
        },

        // 5c. Designing the Solution: User-authored skills
        {
          title: "Skills the User Can Write",
          type: "text",
          content: [
            "The first two moves assumed the system knew what mattered. In practice, what mattered was different for every team. The risk signals that demanded attention from a compliance team were not the same ones a trust-and-safety team needed to see first. The actions that came next, the so-what-now-what part of the answer, were even more team-specific. Baking those preferences into the model was the wrong move, because it meant retraining the system every time a customer onboarded.",
            "Skills were the answer. The user could write a skill. A short markdown file, in the language they actually used, telling the system what they cared about, why it mattered to their team, what they wanted briefs to look like, and what kinds of actions they expected to take when a signal landed. The system read the skill on every search, every agent run, and every brief export. One context layer. Four behaviors shaped from it: what to prioritize, why it matters, how to write the brief, and what to do next.",
            "The design problem was making this feel like writing a note, not writing code. Most of the analysts I had talked to had never written a system prompt and did not think of themselves as people who configured AI. The skill editor had to look like a doc, not a settings panel. The system would handle interpreting what the skill meant. The user just had to write what they wanted.",
          ],
        },

        // 5d. Tool stack closing paragraph
        {
          title: "The Tool Stack",
          type: "text",
          content: [
            "Claude was the thinking and the prototyping. Real-data demos. Skill drafts. Brief format experiments. MCP was how the data got there, which meant every prototype was reacting to the actual graph, not a mock. Figma held the design system, the layout, the visual language. Subframe was where the design became code, connected to Claude through MCP so an approved frame could turn into React in the same conversation that produced the prototype. The engineering team took that React to production. The four tools together replaced the team I did not have. The single seat shipped more than one designer should have been able to.",
          ],
        },

        // 6. Conclusion
        {
          title: "Conclusion",
          type: "text",
          content: [
            "A few things I would do differently if I started this project again.",
            "I would build evals for the agents earlier. The agents got better as I noticed bad output and fixed it, but I was the bottleneck. A small set of tagged examples I could re-run every time a prompt changed would have caught regressions I missed and pushed the drafts toward the right shape faster.",
            "I would stand up the real-data prototype in week one, not week three. The leadership reviews that mattered most were the ones where the audience could ask their own questions and watch the system answer. Static Figma frames were the slowest part of the loop. Once Claude was connected to the real graph through MCP, the case made itself.",
            "I would also push earlier on the trade-off between scope and depth. Twelve weeks is enough time to ship one of the three product moves at depth or all three at proof-of-concept fidelity. I chose breadth. If I had it to do again, I might trade one of the moves for more time inside the people and organization profiles, where the analyst spends most of their day.",
            "The case study is still in progress. The proof of concept handed React over to the engineering team via Subframe, and the team has it on the production roadmap now. I will write the back half of this study, including what shipped and how it landed, once the work is in front of real customers.",
          ],
        },
      ]}
    />
  );
}
