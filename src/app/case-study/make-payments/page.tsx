import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";

export const metadata = {
  title: "Make Payments — ArbiterSports | Michael Davis",
  description:
    "Led UX design for a mobile payment solution helping Athletic Directors process game official compensation on the field.",
};

export default function MakePaymentsPage() {
  return (
    <CaseStudyLayout
      title="Make Payments"
      role="Lead UX Designer"
      company="ArbiterSports"
      timeline="March 2022"
      color="from-[#094bcc] to-[#082f7b]"
      summary="Designed a mobile payment solution for Athletic Directors to process game official compensation on the field. Simplified complex desktop workflows into an intuitive mobile-first experience that eliminated paper checks and manual verification."
      skills={[
        "Interaction Design",
        "Prototyping",
        "User Research",
        "Usability Testing",
        "Mobile UX",
        "Design Systems",
      ]}
      sections={[
        {
          title: "The Problem",
          type: "text",
          content: [
            "Athletic Directors were struggling with official check-ins, account verification, and compensation processing for game officials. Despite having digital payment solutions available on desktop, schools continued issuing paper checks — largely because the mobile experience couldn't match the desktop functionality.",
            "The mobile web view suffered from poor responsive design, and game-by-game payment filtering was cumbersome. There was a clear market opportunity: build a mobile payment experience that Athletic Directors would actually use on the field.",
          ],
        },
        {
          title: "Research",
          type: "text",
          content: [
            "I interviewed six Athletic Directors who were responsible for processing official payments. Their core goals were consistent: save time on game day, process payments quickly and accurately, and handle multiple field tasks simultaneously.",
            "The interviews revealed critical pain points — officials without ArbiterPay accounts created verification bottlenecks, pre-game signup attempts were poorly received by officials, and ADs strongly preferred immediate on-site payments to prevent reconciliation discrepancies after the game.",
          ],
        },
        {
          title: "What Users Told Us",
          type: "quote",
          content: [
            "I would easily use this at every event that I am in charge of",
            "To be able to check if someone has a pay account or not makes the conversation before a game that much easier",
            "I would hardly use the desktop feature except for reconciling",
            "I check in on individuals but will often pay them all at the same time",
          ],
        },
        {
          title: "Early Sketches",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/62532dfc81a540558b2ec22e_Schedule.png",
              alt: "Schedule and game details wireframe sketch",
              caption: "Schedule / Game Details — initial wireframe sketch",
            },
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/62532d7e3972c95c533a5b9e_pay%20tab.png",
              alt: "Payments tab wireframe sketch",
              caption: "Payments Tab — wireframe sketch",
            },
          ],
        },
        {
          title: "Design Approach",
          type: "text",
          content: [
            "I followed a human-centered design methodology with phased implementation. Early and frequent progress sharing with PMs and developers was essential — I regularly verified scope with the Chief Product Officer and maintained open communication with the CTO and Director of Engineering.",
            "A key principle was embracing early-stage failures to prevent scope creep. Getting things wrong quickly and cheaply meant we could course-correct before investing in development.",
          ],
        },
        {
          title: "Key Design Decisions",
          type: "list",
          content: [
            "Designed Schedule/Game Details and Payments Tab as two distinct entry points, reflecting how ADs naturally navigate to payment functions",
            "Created a visible \"No ArbiterPay\" tag that achieved 100% recognition in testing — every participant immediately understood what it meant",
            "Replaced desktop-style checkboxes with a highlighted \"Make Payment\" button for batch processing, which tested significantly better on mobile",
            "Maintained the company policy of separating payment actions from the scheduling section, matching the desktop distinction",
          ],
        },
        {
          title: "Final UI Designs",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/62532eca91163e0955bb3e6d_schedule%20UI.png",
              alt: "Schedule page high-fidelity UI design",
              caption: "Schedule / Game Details — final UI with payment status indicators",
            },
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/6254f2e24150d1a70aa2f233_payments.png",
              alt: "Payments tab high-fidelity UI design",
              caption: "Payments Tab — batch payment interface with Make Payment CTA",
            },
          ],
        },
        {
          title: "Testing & Validation",
          type: "text",
          content: [
            "Schedule page testing revealed that Athletic Directors naturally navigated to the scheduling section first when looking to make payments — this confirmed our decision to support payment flows from both the schedule view and the dedicated payments tab.",
            "A critical finding: nine of ten participants initially overlooked the Payments tab entirely, defaulting to the Schedules section instead. This validated the importance of making payments accessible from where users already are, rather than forcing them to a dedicated section.",
          ],
        },
        {
          title: "Testing Insights",
          type: "highlight",
          content: [
            "The \"No ArbiterPay\" tag created a dead-end user experience — users saw that an official didn't have an account but couldn't do anything about it. This insight directly shaped the next feature: an in-app invitation flow that lets ADs send ArbiterPay signup invitations to officials who haven't enrolled yet.",
          ],
        },
        {
          title: "Outcome",
          type: "text",
          content: [
            "The mobile payment solution gave Athletic Directors the ability to process official compensation on the field — eliminating paper checks, reducing post-game reconciliation, and cutting the time from game completion to payment. The \"No ArbiterPay\" tag insight led directly to the next feature initiative: streamlined payment account invitations.",
          ],
        },
      ]}
    />
  );
}
