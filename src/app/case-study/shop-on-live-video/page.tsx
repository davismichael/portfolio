import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";

export const metadata = {
  title: "Shop on Live Video — Verb | Michael Davis",
  description:
    "Managed design for a live video commerce experience at Verb, leading a team of six designers to merge real-time shopping with livestream interaction.",
};

export default function ShopOnLiveVideoPage() {
  return (
    <CaseStudyLayout
      title="Shop on Live Video"
      role="Sr. Design Manager"
      company="Verb"
      timeline="January 2020"
      color="from-[#393b29] to-[#1a1c0e]"
      summary="Led a team of six designers to create a live video commerce experience — merging real-time shopping with livestream interaction. Managed the complex intersection of engineering's proof-of-concept, competing stakeholder visions, and a pandemic-disrupted timeline to deliver a shoppable livestream product."
      skills={[
        "Design Leadership",
        "Systems Thinking",
        "UX Architecture",
        "Stakeholder Alignment",
        "Team Management",
        "Feature Prioritization",
      ]}
      sections={[
        {
          title: "Personas",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5e7b768950ed7530ff9136_personas.png",
              alt: "Host and Attendee personas",
              caption: "Two core personas — the Host (streaming & selling) and the Attendee (watching & buying)",
            },
          ],
        },
        {
          title: "The Challenge",
          type: "text",
          content: [
            "The CEO wanted to enable small businesses to sell products during live streams. Engineering had already built a proof-of-concept without PM or design involvement — a functional but unrefined live streaming capability constructed as separate, modular components.",
            "I joined as Design Manager overseeing six designers, targeting a June 2020 launch. Following a company merger, the challenge grew: we had to serve both the existing MLM client base and a new small business segment, while merging the separate live video and interactive video products into one cohesive experience.",
          ],
        },
        {
          title: "Scope & Complexity",
          type: "list",
          content: [
            "Creating a single experience that served both direct sales (MLM) companies and small business users",
            "Merging the existing interactive video product with new live streaming capabilities",
            "Building mobile-first functionality on top of a desktop-oriented proof-of-concept",
            "Managing competing feature requests from executives, developers, and designers — including contact syncing, mobile web products, video libraries, and interaction saving",
            "Delivering under pandemic conditions that disrupted the original timeline",
          ],
        },
        {
          title: "Starting Point: Engineering's POC",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5e7bb4d38d579d2520ac27_verb%20live%20engineer.png",
              alt: "Engineering proof of concept with toggle controls",
              caption: "Engineering's initial POC — toggle-based interactions and basic control bar",
            },
          ],
        },
        {
          title: "Two Personas, One Experience",
          type: "text",
          content: [
            "I developed two core personas: the Host (setting up streams, curating products, sending invites) and the Attendee (receiving invites, watching, and purchasing). The personas were kept intentionally generic to serve both the MLM and small business user bases — a deliberate decision to avoid fragmenting the experience.",
            "The dual-persona complexity was the hardest design challenge. Every feature had to work seamlessly from both perspectives — particularly the Shop feature, where Hosts needed to connect Shopify accounts and curate items while Attendees needed a frictionless browsing and purchasing flow.",
          ],
        },
        {
          title: "Information Architecture",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5e7dfe7ecff7806c03785a_site%20map.png",
              alt: "Product sitemap and information architecture",
              caption: "Visual sitemap — mapping the complete product architecture including new features",
            },
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5e7d41865ef556c370e433_jira%20workflow.png",
              alt: "Jira workflow for ticket management",
              caption: "Structured Jira workflow — organizing tickets by effort level for transparency",
            },
          ],
        },
        {
          title: "Team Assignments",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5e7e8c9dd6b2b14b574535_assign%20images.png",
              alt: "Designer assignments across features",
              caption: "Feature assignments — six designers matched to features based on skill sets",
            },
          ],
        },
        {
          title: "Managing the Team",
          type: "text",
          content: [
            "I assigned features to six designers (four product designers, two UX prototypers) based on their individual strengths. All handoffs required full Axure prototypes per stakeholder requirements. Each designer received approved user stories and feature specifications.",
            "I created a structured Jira workflow organizing tickets by effort level, providing visibility into what was in progress and what remained. This transparency was critical for managing expectations with an executive team that consistently proposed features beyond team capacity.",
          ],
        },
        {
          title: "Key Design Solutions",
          type: "list",
          content: [
            "Panel component: a slide-in/out panel that merged the existing interaction toggle system with new live video capabilities, allowing regular check-ins throughout development",
            "Shop feature: separate but integrated user flows for Hosts (Shopify connection, product curation) and Attendees (browsing, purchasing during streams)",
            "Control bar redesign: reorganized communication features (left), sharing (center), and personal controls (right) with full-screen viewing and simplified audio/video controls",
            "Visual sitemap that mapped the complete product architecture — clarifying team understanding beyond what engineering had built",
          ],
        },
        {
          title: "Design Artifacts",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5fd1e54d14aed7dfe3a87f_images%403x.png",
              alt: "Slide-in panel component design",
              caption: "Panel component — merging interaction toggles with live video capabilities",
            },
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5fd540f63cae72dbaac0b6_control%20bar.png",
              alt: "Redesigned control bar",
              caption: "Control bar redesign — communication (left), sharing (center), personal controls (right)",
            },
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f5e7eadd38d57b29220af69_user%20flow.png",
              alt: "User flow diagram for Host and Attendee",
              caption: "User journey mapping for both Host and Attendee experiences",
            },
          ],
        },
        {
          title: "Final Design",
          type: "image",
          content: "",
          images: [
            {
              src: "https://uploads-ssl.webflow.com/5f5d4f87ce11c9f26cedf0a8/5f7d2e79f644744f06bd41e8_Screen%20Shot%202020-10-06%20at%208.56.30%20PM.png",
              alt: "Final high-fidelity design for live video commerce",
              caption: "High-fidelity design — production-ready UI with Verb brand identity",
            },
          ],
        },
        {
          title: "Feature Prioritization",
          type: "highlight",
          content: [
            "One of my most important contributions was saying no. Recurring feature proposals from leadership threatened to bloat the MVP beyond deliverable scope. I implemented structured prioritization, evaluating each request against user needs and team capacity, and communicated directly with stakeholders about what was realistic.",
            "Features were categorized by effort level and moved in or out of the MVP scope based on impact and feasibility — giving the entire organization clarity on what was being built and why.",
          ],
        },
        {
          title: "Design Process",
          type: "list",
          content: [
            "Journey mapping for both Host and Attendee personas to drive empathy-centered design decisions",
            "Low-fidelity prototyping in Axure per stakeholder requirements",
            "High-fidelity design elevating prototypes to production quality while integrating UX principles with Verb's brand identity",
            "Regular design reviews and cross-functional check-ins to maintain alignment across the six-person design team",
          ],
        },
        {
          title: "Reflection",
          type: "text",
          content: [
            "This was my first design management role at this scale — leading six designers while also contributing to the product vision. The biggest lesson was the importance of structured prioritization when stakeholder enthusiasm outpaces team capacity. Clear communication about trade-offs prevented burnout and kept the team focused on delivering a cohesive experience rather than a patchwork of features.",
          ],
        },
      ]}
    />
  );
}
