export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Work", to: "/work" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export const TAGLINE = "Think deeply. Design intentionally. Build properly.";

export const VALUES = [
  { name: "Curiosity", note: "We ask before we assume." },
  { name: "Clarity", note: "If it cannot be explained simply, it is not finished." },
  { name: "Craft", note: "Details are the work, not the polish." },
  { name: "Purpose", note: "Every decision answers to a reason." },
  { name: "Continuous Learning", note: "We keep studying our own field." },
  { name: "Responsibility", note: "We own what we ship." },
];

export const MISSION_PILLARS = [
  { key: "Technology", verb: "to build" },
  { key: "Design", verb: "to simplify" },
  { key: "Strategy", verb: "to guide" },
  { key: "Creativity", verb: "to differentiate" },
  { key: "Learning", verb: "to enable" },
];

export type Entity = {
  slug: string;
  name: string;
  line: string;
  role: string;
  accentVar: string;
  intro: string;
  focus: string[];
};

export const ENTITIES: Entity[] = [
  {
    slug: "forgeware",
    name: "FORGEWARE",
    line: "Digital products & software",
    role: "Technology and product-building",
    accentVar: "var(--forge)",
    intro:
      "Forgeware is the building arm of Nloga. It designs and develops digital solutions that turn ideas and business needs into functional products.",
    focus: [
      "Web and mobile product development",
      "Internal tools and business systems",
      "Technical architecture and integrations",
      "Maintenance and iteration after launch",
    ],
  },
  {
    slug: "creativepics-art",
    name: "CREATIVEPICS ART",
    line: "Brand, visual & creative design",
    role: "Brand, visual and creative design",
    accentVar: "var(--creative)",
    intro:
      "CreativePics Art gives organisations a visual language: identity, expression, and the consistency that makes a brand recognisable.",
    focus: [
      "Brand identity and visual systems",
      "Creative direction and campaigns",
      "Graphic, print and social design",
      "Brand guidelines and asset libraries",
    ],
  },
  {
    slug: "now-just-create",
    name: "NOW JUST CREATE",
    line: "Learning, training & development",
    role: "Learning, training and development",
    accentVar: "var(--learn)",
    intro:
      "Now Just Create is the learning arm of Nloga. It helps individuals and teams build the skills to design, build and think for themselves.",
    focus: [
      "Design and product training programmes",
      "Team workshops and upskilling",
      "Mentorship and practice reviews",
      "Curriculum and learning material design",
    ],
  },
];

export type Capability = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  offer: string[];
  process: { step: string; detail: string }[];
};

export const CAPABILITIES: Capability[] = [
  {
    slug: "product-software",
    title: "Product & Software",
    short: "Digital products built to be used, not just launched.",
    intro:
      "We design and develop digital products and software that turn ideas and business needs into functional, maintainable systems.",
    offer: [
      "Product discovery and scoping",
      "Web application development",
      "Mobile and cross-platform products",
      "Internal tools, dashboards and business systems",
      "Integrations and technical architecture",
      "Post-launch iteration and support",
    ],
    process: [
      { step: "Understand", detail: "We map the problem, the users and the constraints before proposing anything." },
      { step: "Define", detail: "We agree on scope, priorities and what success actually means." },
      { step: "Build", detail: "We develop in reviewable increments so nothing arrives as a surprise." },
      { step: "Refine", detail: "We test, correct and hand over something you can keep running." },
    ],
  },
  {
    slug: "ux-ui-design",
    title: "UX/UI Design",
    short: "Interfaces people understand without being taught.",
    intro:
      "We design interfaces and experiences that reduce effort: clear structure, honest hierarchy, and screens that make the next step obvious.",
    offer: [
      "User research and requirement framing",
      "Information architecture and user flows",
      "Wireframing and prototyping",
      "Interface design and design systems",
      "Usability review of existing products",
      "Design handover for development",
    ],
    process: [
      { step: "Research", detail: "We learn how people currently work around the problem." },
      { step: "Structure", detail: "We organise content and flow before styling anything." },
      { step: "Design", detail: "We produce interfaces and a system that can scale beyond one screen." },
      { step: "Validate", detail: "We test with real tasks and adjust what does not hold." },
    ],
  },
  {
    slug: "brand-creative",
    title: "Brand & Creative",
    short: "A visual language that stays recognisable everywhere.",
    intro:
      "We build brand and visual systems that give an organisation a consistent presence — in product, in print, and in public.",
    offer: [
      "Brand strategy and positioning",
      "Logo and identity design",
      "Visual systems and guidelines",
      "Campaign and creative direction",
      "Social, print and presentation design",
      "Brand asset libraries",
    ],
    process: [
      { step: "Position", detail: "We clarify what the brand stands for and who it speaks to." },
      { step: "Explore", detail: "We develop directions instead of decorating a single guess." },
      { step: "System", detail: "We turn the chosen direction into rules, not one-off artwork." },
      { step: "Equip", detail: "We deliver guidelines and assets your team can actually apply." },
    ],
  },
  {
    slug: "training",
    title: "Training",
    short: "Capability that stays with your team after we leave.",
    intro:
      "We run learning and training programmes that help individuals and teams build practical skills in design, product and digital work.",
    offer: [
      "Design and product training programmes",
      "Team workshops and upskilling sessions",
      "Mentorship and portfolio reviews",
      "Curriculum and learning material design",
      "Tooling and process onboarding",
      "Follow-up practice reviews",
    ],
    process: [
      { step: "Assess", detail: "We establish the current level and the gap that matters." },
      { step: "Plan", detail: "We build a programme around real tasks, not generic slides." },
      { step: "Teach", detail: "We run sessions with practice built into every module." },
      { step: "Embed", detail: "We review the work afterwards so the skill holds." },
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  discipline: string;
  summary: string;
  placeholder: true;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "example-product-case-study",
    title: "Example product case study",
    discipline: "Product & Software",
    summary: "Placeholder case study. Project details will be published here.",
    placeholder: true,
  },
  {
    slug: "example-design-case-study",
    title: "Example design case study",
    discipline: "UX/UI Design",
    summary: "Placeholder case study. Project details will be published here.",
    placeholder: true,
  },
  {
    slug: "example-brand-case-study",
    title: "Example brand case study",
    discipline: "Brand & Creative",
    summary: "Placeholder case study. Project details will be published here.",
    placeholder: true,
  },
];

export type Article = {
  slug: string;
  title: string;
  topic: string;
  excerpt: string;
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "example-article-on-product-thinking",
    title: "Example article on product thinking",
    topic: "Product",
    excerpt: "Placeholder article. Written pieces from the Nloga team will be published here.",
    body: [
      "Placeholder article body. This template shows how an Insights piece is structured.",
      "Each published article will open with the question it is trying to answer, work through the reasoning, and close with what we would do differently next time.",
    ],
  },
  {
    slug: "example-article-on-design-clarity",
    title: "Example article on design clarity",
    topic: "Design",
    excerpt: "Placeholder article. Written pieces from the Nloga team will be published here.",
    body: [
      "Placeholder article body. This template shows how an Insights piece is structured.",
      "Each published article will open with the question it is trying to answer, work through the reasoning, and close with what we would do differently next time.",
    ],
  },
  {
    slug: "example-article-on-learning",
    title: "Example article on learning",
    topic: "Learning",
    excerpt: "Placeholder article. Written pieces from the Nloga team will be published here.",
    body: [
      "Placeholder article body. This template shows how an Insights piece is structured.",
      "Each published article will open with the question it is trying to answer, work through the reasoning, and close with what we would do differently next time.",
    ],
  },
];

export const FAQS = [
  {
    q: "What kind of organisations do you work with?",
    a: "Organisations that need a digital product, a clearer brand, or stronger internal capability — from early-stage teams to established institutions.",
  },
  {
    q: "Can we work with only one part of Nloga?",
    a: "Yes. Forgeware, CreativePics Art and Now Just Create can be engaged separately or together, depending on what the work needs.",
  },
  {
    q: "How does a project usually start?",
    a: "With a conversation. You send a project enquiry, we review the details, and we come back with questions before proposing anything.",
  },
  {
    q: "Do you work with clients outside Cameroon?",
    a: "Yes. We work remotely with organisations beyond Cameroon, and our vision is deliberately not limited to one market.",
  },
  {
    q: "What do you need from us to give an estimate?",
    a: "A description of the problem, the outcome you expect, your timeline, and any budget range you have in mind — even an approximate one.",
  },
];

export const SERVICE_OPTIONS = [
  "Product/Software",
  "UX/UI Design",
  "Brand/Creative",
  "Training",
  "Digital Strategy",
  "Other",
];

export const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under 500,000 FCFA",
  "500,000–1,500,000 FCFA",
  "1,500,000–3,000,000 FCFA",
  "3,000,000+ FCFA",
  "Let's discuss",
];

export const TIMELINE_OPTIONS = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible",
];
