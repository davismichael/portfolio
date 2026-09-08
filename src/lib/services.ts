// Service offers, process steps, and FAQ content for the freelance homepage.
// Pricing is researched against 2025-2026 market data (see the strategy
// report in the My Brand project): solo AI-assisted MVP builds run $10k-25k,
// senior freelancer marketing sites $8k-15k, fixed AI audits $2k-8k, and
// fractional design leadership starts around $5k-6k/mo at ~1 day/week.

export interface ServiceOffer {
  id: string;
  name: string;
  audience: string;
  price: string;
  priceNote: string;
  timeline: string;
  includes: string[];
  cta: string;
  /** Pre-fills the contact form's project type select. */
  projectType: string;
}

export const SERVICES: ServiceOffer[] = [
  {
    id: "mvp-build",
    name: "MVP Build",
    audience: "A real product on real devices.",
    price: "From $12,000",
    priceNote: "Most popular",
    timeline: "4 to 6 weeks",
    includes: [
      "Senior UX and UI design",
      "Full build, iOS or web",
      "App Store launch, handled",
      "Weekly working demos",
    ],
    cta: "Scope your MVP",
    projectType: "MVP Build",
  },
  {
    id: "website",
    name: "Marketing Website",
    audience: "A site that sells, not one that sits there.",
    price: "From $5,000",
    priceNote: "Full sites from $8,500",
    timeline: "2 to 3 weeks",
    includes: [
      "Messaging and custom design",
      "Next.js, fast and SEO-ready",
      "Analytics and launch included",
    ],
    cta: "Start your site",
    projectType: "Marketing Website",
  },
  {
    id: "ai-audit",
    name: "AI Product Audit",
    audience: "Where AI fits in your product, and where it does not.",
    price: "$4,500 fixed",
    priceNote: "Paid up front",
    timeline: "2 weeks",
    includes: [
      "Full product and journey review",
      "AI opportunity map, ranked",
      "Written report and a working session",
    ],
    cta: "Book an audit",
    projectType: "AI Product Audit",
  },
  {
    id: "fractional",
    name: "Fractional Design Partner",
    audience: "Senior design leadership without the full-time hire.",
    price: "From $6,000/mo",
    priceNote: "About a day a week",
    timeline: "3-month minimum, 30-day out",
    includes: [
      "One priority stream, owned",
      "Design direction and reviews",
      "Hiring and team coaching",
    ],
    cta: "Talk fractional",
    projectType: "Fractional Design Partner",
  },
];

export interface ProcessStep {
  label: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    label: "Day 0",
    title: "Tell me your idea",
    description: "A 20-minute call. You leave with a price and a start date.",
  },
  {
    label: "Week 1",
    title: "See it before you commit",
    description: "Clickable screens on your phone within days. Change anything.",
  },
  {
    label: "Every Friday",
    title: "Watch it come together",
    description: "A short video and a live link. You give feedback, I adjust.",
  },
  {
    label: "Launch day",
    title: "Go live, then relax",
    description: "I handle the App Store. Everything is in your name, plus 30 days of fixes.",
  },
];

// What the client actually has to do. Answers "how much of my time is this?"
export const CLIENT_TIME = "Your part: about an hour a week.";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Why hire one person instead of an agency?",
    answer:
      "You work with the senior person the whole way. No account managers, no handoff to juniors. Agency scope at a fraction of agency price.",
  },
  {
    question: "What does AI-assisted development actually mean?",
    answer:
      "AI tools like Claude Code and Cursor write the first draft. A decade of product judgment decides what ships, and every line gets a human review.",
  },
  {
    question: "How does payment work?",
    answer:
      "Apps are paid in three parts: a third to start, a third at the first working demo, a third at launch. Websites are half to book, half at launch. The prototype and audit are paid up front.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Thirty days of fixes are included. After that, follow-on sprints or a light care plan, only if you want them.",
  },
  {
    question: "What is the difference between a website and an app?",
    answer:
      "A website is pages people read: your story, your offer, a way to contact you. An app is software people log into and use: accounts, their data, things they can do. If it has a login, it is an app.",
  },
  {
    question: "What is out of scope?",
    answer:
      "Marketplaces, fintech or payments platforms, HIPAA or other regulated data, large e-commerce, and big enterprise integrations. Those need a team. Stripe checkout for selling a product or subscription is fine. If your idea is bigger than one clear job, the $1,500 prototype is how we find out what version one should be.",
  },
  {
    question: "Do I own the code and the design?",
    answer:
      "Yes, entirely. Repo, design files, deployment, and accounts are in your name from day one. Run it, sell it, or hand it to another team.",
  },
  {
    question: "I already built something with Lovable, Bolt, or Cursor. Can you take it from here?",
    answer:
      "Usually, yes. I read the code before touching it. Most of it is salvageable; the usual fixes are auth, database security, and a UI that feels real. You get a written plan first.",
  },
  {
    question: "What if it is not working out?",
    answer:
      "Week one is the kill switch: if the first screens are not right, you pay for week one only. And if I miss an agreed launch date, the final payment is waived.",
  },
  {
    question: "Who is this not a fit for?",
    answer:
      "Large staffed engineering programs, projects with no decision maker, and anyone shopping on lowest price. If a template shop is the right call, I will say so.",
  },
  {
    question: "Can you work with our existing product and team?",
    answer:
      "Yes. Audits and fractional work plug into your team. Builds are solo end to end, which is why they move fast.",
  },
  {
    question: "How soon can you start?",
    answer:
      "I take three projects at a time. Book a call and you will have a price and start date within two business days.",
  },
];

// Availability pill. Majority pattern on converting builder sites is a
// dated capacity line ("accepting 3 projects for September") rather than an
// evergreen "1 spot left". Update this by hand each month.
export const AVAILABILITY = {
  open: true,
  month: "October 2026",
  slotsOpen: 2,
  slotsTotal: 3,
};

// Optional booking link (Cal.com / Calendly). Leave empty to hide the
// "book a call" links and fall back to the contact form.
export const BOOKING_URL = "https://cal.com/davismakes/fit-call";

// Stat strip under the hero. Numbers over adjectives.
export const STATS = [
  { value: "15+", label: "years shipping product" },
  { value: "Fixed", label: "price, agreed in writing" },
  { value: "100%", label: "code and IP ownership" },
];

// "You own everything" + how AI fits. Answers the 2026 buyer fears:
// security, maintainability, ownership.
export const TRUST_POINTS = [
  {
    title: "You own everything",
    body: "Repo, design files, deployment, and accounts in your name from day one.",
  },
  {
    title: "AI writes the first draft. I review every line.",
    body: "Claude Code and Cursor for speed. A senior human pass on auth, security, and tests before launch.",
  },
  {
    title: "A boring, standard stack",
    body: "Next.js, Expo, Supabase, Vercel, Stripe. Any engineer you hire later will know it.",
  },
  {
    title: "Support after launch",
    body: "Thirty days of fixes on every build. A light care plan after, if you want it.",
  },
];

export const WHAT_YOU_GET = [
  "Private GitHub repo, transferred to you",
  "Figma files and a small design system",
  "Production deployment in your accounts",
  "Written handoff docs",
  "App Store or web launch, handled",
  "30 days of post-launch fixes",
];

// Guarantees, stated as sentences near the pricing CTA.
export const GUARANTEES = [
  {
    title: "Fixed price, in writing",
    body: "Priced before a line of code. No surprise invoices.",
  },
  {
    title: "Week one is the kill switch",
    body: "Not right after the first screens? Pay for week one only.",
  },
  {
    title: "If the date slips, that is on me",
    body: "Miss the agreed date on my side and the final payment is waived.",
  },
];

// Me vs the alternatives. Rows are what founders actually compare on.
export const COMPARISON = {
  columns: ["Me", "Agency", "Cheap dev shop", "DIY no-code"],
  rows: [
    { label: "Start for", values: ["$1,500", "$30k+", "A deposit", "A subscription"] },
    { label: "Time to launch", values: ["4 to 6 weeks", "3 to 6 months", "2 to 4 weeks", "Days, then stuck"] },
    { label: "Who does the work", values: ["Me, start to finish", "Juniors after the sales call", "Whoever is free", "You"] },
    { label: "Design quality", values: ["Senior design leader", "Varies by team", "Templates", "Templates"] },
    { label: "Security and maintainability", values: ["Reviewed by a human", "Usually solid", "Rarely reviewed", "Often broken"] },
    { label: "You own the code", values: ["Yes, day one", "Usually", "Sometimes", "Export, if lucky"] },
  ],
};

// Stack chips shown in the trust bento.
export const STACK = ["Next.js", "React Native", "Expo", "Flutter", "Supabase", "Vercel", "Stripe", "Figma", "Claude Code", "Cursor"];

// Companies where Michael led design. Text wordmarks, no logo files needed.
export const LED_DESIGN_AT = ["Strider Technologies", "ArbiterSports", "Verb", "WISEcode", "Mountain Crane"];

// Simplified pricing (modeled on Designjoy: one big price, a plain
// "what you get" list, one button). Two plans plus a text-only add-on row.
export interface Plan {
  id: string;
  name: string;
  price: string;
  per: string;
  tagline: string;
  includes: string[];
  cta: string;
  projectType: string;
  featured?: boolean;
  note?: string;
  /** Plain-language scope line: what this tier is sized for. */
  goodFor?: string;
  /** What it is not: the thing people might wrongly assume. */
  notFor?: string;
}

export const PLANS: Plan[] = [
  {
    id: "prototype",
    name: "Prototype + Quote",
    price: "$1,500",
    per: "48 hours",
    tagline: "Not sure which you need? Start here.",
    includes: [
      "Clickable prototype of your idea",
      "Written fixed quote for the build",
      "Credited toward your build",
      "Yours to keep either way",
    ],
    cta: "Start here",
    projectType: "Prototype + Quote",
    goodFor: "Any idea, any size. This is where we find out what it really needs.",
  },
  {
    id: "website",
    name: "Website",
    price: "$5,000",
    per: "from, per site",
    tagline: "Pages people read. Live in 2 to 3 weeks.",
    includes: [
      "1 to 5 pages",
      "Copy, design, and build",
      "Contact and booking forms",
      "Fast, SEO-ready, analytics on",
      "Full source code, yours",
      "30 days of fixes",
    ],
    goodFor: "Good for: a launch page, a small business site, a product marketing site.",
    notFor: "Not: an online store, a blog with hundreds of posts, a members area.",
    cta: "Build my site",
    projectType: "Marketing Website",
    note: "Full sites from $8,500",
  },
  {
    id: "app",
    name: "App",
    price: "$12,000",
    per: "from, paid in three parts",
    tagline: "Mobile or web app. Software people log into. Live in 4 to 6 weeks.",
    includes: [
      "Up to 3 core features",
      "Accounts and your data",
      "Stripe checkout, if you sell something",
      "App Store or web launch",
      "Full source code, yours",
      "30 days of fixes",
    ],
    goodFor: "Good for: a first version of your product with one clear job.",
    notFor: "Not: a marketplace, a fintech or payments platform, anything needing HIPAA or a big integration.",
    cta: "Build my app",
    projectType: "MVP Build",
    featured: true,
    note: "A third to start, a third at demo, a third at launch",
  },
];

export const PLAN_EXTRAS = [
  { label: "Ongoing design partner", value: "from $6,000/mo", projectType: "Fractional Design Partner" },
  { label: "AI product audit", value: "$4,500", projectType: "AI Product Audit" },
];

// Six plain benefits, Designjoy-style. One idea each, one sentence each.
export const BENEFITS = [
  { title: "You own it", body: "Code, designs, accounts. Yours from day one." },
  { title: "Fixed price", body: "In writing before we start." },
  { title: "Weekly demos", body: "A live link every Friday." },
  { title: "30 days of fixes", body: "Included after launch." },
];
