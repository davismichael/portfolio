import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";

export const metadata = {
  title: "Interactive Video — Verb | Michael Davis",
  description:
    "Led product design for an interactive video platform enabling entrepreneurs to add shoppable elements, links, and actions to video content.",
};

export default function InteractiveVideoPage() {
  return (
    <CaseStudyLayout
      title="Interactive Video"
      role="Sr. Product Designer"
      company="Verb"
      timeline="January 2019"
      color="from-[#ff983b] to-[#c94001]"
      summary="Designed the interactive video feature for Verb, enabling entrepreneurs to add shoppable elements, links, and calls-to-action directly within video content. Solved critical usability issues that emerged after post-acquisition integration of nFusz technology into the platform."
      skills={[
        "Product Design",
        "UX Strategy",
        "Cross-functional Collaboration",
        "Micro-animations",
        "Prototyping",
        "User Testing",
      ]}
      sections={[
        {
          title: "Before: The Original Experience",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5e7f5b0bd043d4f2cc9534_old%20interactive.png",
              alt: "Original interactive video interface before redesign",
              caption: "The original interactive video UI — users struggled with core interactions",
            },
          ],
        },
        {
          title: "The Problem",
          type: "text",
          content: [
            "After acquiring nFusz, Verb integrated the interactive video technology into their CRM platform — but users weren't engaging with it as designed. The initial rollout revealed that customers struggled with three core interactions: styling interactive elements, managing the full-screen video experience, and switching between information and interactivity views.",
            "The product served white-labeled app users — specifically direct sales company distributors who needed simple, intuitive tools to enhance their video content with sellable products and calls-to-action.",
          ],
        },
        {
          title: "Personas",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5e7fd5bd70841fecc18c44_personas.png",
              alt: "User personas for interactive video feature",
              caption: "User personas — white-labeled app distributors",
            },
          ],
        },
        {
          title: "Ideation Process",
          type: "text",
          content: [
            "We used Crazy 8s methodology to generate a high volume of ideas across all three problem areas. Every team member participated to encourage divergent thinking. After brainstorming, we heat-mapped and voted on the strongest concepts.",
            "The winning direction: a full-screen view with an expandable iOS-style card at the bottom for actions — inspired by Instagram's interaction model. This kept the video content front-and-center while providing a clean, familiar pattern for interactive elements.",
          ],
        },
        {
          title: "Sketches & Wireframes",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5e80a95bb7aba99c528f5c_sketches.png",
              alt: "Crazy 8s sketches from brainstorming session",
              caption: "Crazy 8s brainstorming — generating ideas across all three problem areas",
            },
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5e817b4d8b7e94240ef047_2sketches.png",
              alt: "Actions wireframe for interactive video",
              caption: "Actions wireframe — seven interaction types displayed as card overlay",
            },
          ],
        },
        {
          title: "Design Solution",
          type: "list",
          content: [
            "Full-screen video display always visible with an expandable/collapsible action card overlay",
            "Seven interaction types: Link, Tools, Buy, Calendar, Social, Email, and Call — displayed as cards over the video",
            "Style tab positioned first in the flow to encourage visual customization (rings, opacity, text backgrounds)",
            "Details tab for configuring interaction-specific inputs (URLs, emails, phone numbers, timing/duration)",
            "Sequential navigation flow replacing \"Done\" with \"Next\" to ensure users engaged with styling before saving",
          ],
        },
        {
          title: "High-Fidelity Designs",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5d4f87ce11c9c278edf0bd_Buy%20-%20Action%402x.png",
              alt: "Buy action high-fidelity design",
              caption: "Buy action — high-fidelity design within the video overlay",
            },
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5d4f87ce11c916dbedf0b9_Link%20-%20Details%20-%20Filled%402x.png",
              alt: "Link details high-fidelity design",
              caption: "Link details — configuration interface for interaction inputs",
            },
          ],
        },
        {
          title: "User Testing",
          type: "text",
          content: [
            "We tested with five participants and uncovered critical usability issues that would have been costly to fix post-development. The ring icon — a thin icon positioned in the top-left corner — was nearly invisible. Users could style indefinitely without progressing, and the Details-first sequence caused most users to abandon the Style step entirely.",
            "The custom text icon we designed also failed — users were confused about its purpose. A humbling reminder that established symbols serve users better than novel but unfamiliar alternatives.",
          ],
        },
        {
          title: "Iterations",
          type: "list",
          content: [
            "Ring/background icon: repositioned to the right side with a visible background container, placed lower for better discoverability",
            "Navigation flow: replaced \"Done\" with \"Next\" button forcing sequential progression from Details to Style, then \"Save\" — ensuring every user engaged with the style options",
            "Text icon: abandoned the custom icon entirely and returned to the standard, universally recognized text symbol",
          ],
        },
        {
          title: "Iteration Results",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f7cf916f2008659ce3e2e98_images.png",
              alt: "Repositioned ring icon with visible background",
              caption: "Ring icon iteration — moved to right side with visible background for better discoverability",
            },
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5e88b027c3fbaf39e7396b_3%20updated%403x.png",
              alt: "Updated interactive video UI design",
              caption: "Final refined UI with improved navigation flow and styling",
            },
          ],
        },
        {
          title: "Key Learnings",
          type: "highlight",
          content: [
            "Quick user testing prevents costly development rework. Even brief five-person sessions surface critical issues that save weeks of engineering time.",
            "Design decisions require justification. When leadership vetoes a decision without rationale, it undermines team confidence and process integrity — something I learned to push back on constructively.",
            "Test \"okay\" concepts early rather than perfecting flawed assumptions. The custom text icon had high internal confidence but failed immediately with real users.",
          ],
        },
        {
          title: "Reflection",
          type: "text",
          content: [
            "One process gap I'd address in future projects: we moved from wireframes directly to high-fidelity designs without paper prototype testing. Low-fidelity validation would have surfaced several of our usability issues even earlier and at even lower cost. The lesson reinforced my commitment to testing at every fidelity level.",
          ],
        },
      ]}
    />
  );
}
