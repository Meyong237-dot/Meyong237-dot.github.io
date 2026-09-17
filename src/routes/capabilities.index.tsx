import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Brush,
  GraduationCap,
  Target,
  Layers,
  Search,
  LayoutGrid,
  Smartphone,
  Server,
  Globe,
  Cpu,
  PenTool,
  FileText,
  Megaphone,
  Presentation,
  BookOpen,
  Users,
  Star,
  TrendingUp,
  CheckCircle,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CAPABILITIES } from "@/lib/site-data";

export const Route = createFileRoute("/capabilities/")({
  head: () => ({
    meta: [
      { title: "Capabilities — Nloga" },
      {
        name: "description",
        content:
          "Product & software, UX/UI design, brand & creative, and training — four disciplines Nloga uses together.",
      },
      { property: "og:title", content: "Capabilities — Nloga" },
      {
        property: "og:description",
        content:
          "From early-stage strategy to final implementation, Nloga brings together the capabilities required to transform ideas into meaningful products, experiences, and brands.",
      },
    ],
  }),
  component: CapabilitiesIndex,
});

/* ─── Data ─── */

const DISCIPLINE_TABS = [
  { id: "product", label: "Product & Business" },
  { id: "design", label: "UX Design" },
  { id: "brand", label: "Brand & Creative" },
  { id: "training", label: "Training & Upskilling" },
];

const DISCIPLINE_BARS = [
  { label: "UX Design", pct: 97 },
  { label: "Digital Strategy", pct: 91 },
  { label: "Brand & Creative", pct: 76 },
  { label: "Product Engineering", pct: 84 },
];

const PRODUCT_FEATURES = [
  {
    icon: <Star className="h-4 w-4" />,
    title: "Career-Ready Skills",
    body: "Hands-on experience with technologies used in real-world development.",
  },
  {
    icon: <Globe className="h-4 w-4" />,
    title: "Real-World Projects",
    body: "Build products that solve real problems and showcase your expertise.",
  },
  {
    icon: <Users className="h-4 w-4" />,
    title: "Expert Mentorship",
    body: "Learn from industry practitioners who understand software at scale.",
  },
  {
    icon: <Zap className="h-4 w-4" />,
    title: "Flexible Learning",
    body: "Structured programmes that adapt to teams, founders, and individuals.",
  },
];

const DESIGN_SERVICES = [
  {
    icon: <Search className="h-5 w-5" />,
    title: "Product Design",
    tags: ["Real users", "Research", "Personas", "Portfolio"],
    body: "Learn user research, forming prototyping and design systems to create beautiful and impactful digital experiences.",
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    title: "UI/UX Design Mastery",
    tags: ["Figma", "Motion", "Design QA", "Components"],
    body: "Go deep into your combined design, micro-typography design and high-fidelity prototyping with Figma.",
  },
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "Design Systems & Components",
    tags: ["Tokens", "Scale", "Consistency"],
    body: "Design consistent, scalable systems with reusable components and modern design principles.",
  },
];

const BRAND_SERVICES_LEFT = [
  { icon: <Target className="h-4 w-4" />, title: "Brand Strategy", body: "Clarify positioning and voice." },
  { icon: <FileText className="h-4 w-4" />, title: "Brand Entry", body: "From zero to recognizable identity." },
  { icon: <Megaphone className="h-4 w-4" />, title: "Digital Marketing", body: "Visual assets built for campaigns." },
  { icon: <Presentation className="h-4 w-4" />, title: "Brand Management", body: "Guidelines and asset libraries." },
];

const BRAND_SERVICES_RIGHT = [
  {
    title: "Brand Strategy & Positioning",
    body: "Build strong, brand-centred trust and content with your audience.",
  },
  {
    title: "Branding & Visual Identity",
    body: "Logos, color systems, visual language and brand guidelines.",
  },
  {
    title: "Marketing for Brands",
    body: "Graphic, social and presentation design for growth.",
  },
];

const TRAINING_TRACKS = [
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Tech Skills & Software Development",
    tags: ["Beginner → Pro", "Web", "Mobile"],
    body: "From coding to designing, building and launching digital and production-ready products.",
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    title: "UX/UI & Design Professional Track",
    tags: ["Figma", "Research", "Motion"],
    body: "Product design, UI/UX research and interaction design.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Corporate Leadership & Team Training",
    tags: ["Workshops", "Institutions", "Partnerships"],
    body: "In-house team capacity, cohort mentorship and corporate learning programmes.",
  },
];

const MATRIX = [
  { area: "Product & Business", items: ["Product Engineering", "Web Applications", "SaaS & Platforms", "API Systems", "Technical Architecture"] },
  { area: "UX/UI Design", items: ["UX Research", "Wireframing", "UI Design", "Prototyping", "Design Systems"] },
  { area: "Brand & Creative", items: ["Visual Identity", "Brand Strategy", "Corporate Branding", "Digital Creative", "Presentation Design"] },
  { area: "Strategy", items: ["Discovery", "Product Scoping", "Market Positioning", "Roadmapping", "Go-to-Market"] },
  { area: "Corporate Upskilling", items: ["Design Training", "Dev Bootcamps", "Team Workshops", "Mentorship", "Curriculum Design"] },
];

/* ─────────── PAGE ─────────── */

function CapabilitiesIndex() {
  const [activeTab, setActiveTab] = useState(DISCIPLINE_TABS[0].id);

  return (
    <>
      <CapabilitiesHero activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProductSection />
      <DesignSection />
      <BrandSection />
      <TrainingSection />
      <EngagementMatrix />
      <FinalCTA />
    </>
  );
}

/* ─────────── 1. HERO ─────────── */

function CapabilitiesHero({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (id: string) => void;
}) {
  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background px-6 pt-12 pb-16 lg:pt-20 lg:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px] lg:items-start">
          {/* left */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
                Four Disciplines · One Practice
              </span>
            </div>

            <h1 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground">
              Four core disciplines.
              <br />
              <span className="text-accent">Zero boilerplate.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Explore our four dedicated capability areas — Design, Academy, Tech, and Business. Each is carefully structured with zero tool courses, real projects and industry-ready skills.
            </p>

            {/* filter tabs */}
            <div className="mt-8 flex flex-wrap gap-2">
              {DISCIPLINE_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(t.id);
                    document.getElementById(`capability-${t.id}`)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className={`rounded-full px-4 py-2 font-display text-sm font-medium transition-all ${
                    activeTab === t.id
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "border border-border text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* right — bar chart */}
          <Reveal delay={120}>
            <div className="group relative h-full min-h-[262px] overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <img
                src="/images/additional.jpg"
                alt="Nloga capability showcase"
                className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/35" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 2. PRODUCT & SOFTWARE ─────────── */

function ProductSection() {
  const cap = CAPABILITIES.find((c) => c.slug === "product-software")!;

  return (
    <section id="capability-product" className="scroll-mt-24 w-full bg-muted/40 px-6 pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        {/* label */}
        <div className="mb-10 flex items-center gap-2">
          <span className="rounded-full bg-accent/10 px-3 py-1 font-display text-[10px] font-bold tracking-widest text-accent uppercase">
            1 · Product &amp; Business
          </span>
        </div>

        <h2 className="display-lg mb-12 text-foreground">Cross-Platform Product Engineering</h2>

        {/* top split */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* WE BUILD dark card */}
          <div className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-foreground/85 p-10 shadow-xl">
            <img
              src="/images/forgeware.jpg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-45"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/35 transition-colors duration-700 group-hover:bg-black/20" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-display text-[10px] font-bold tracking-widest text-background/40 uppercase">
                Nloga · Forgeware
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-display text-[10px] font-medium text-background/60">
                Digital Products
              </span>
            </div>
            <div className="relative z-10">
              <div className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.9] tracking-[-0.05em] text-background">
                WE<br />BUILD.
              </div>
              <p className="mt-4 text-sm text-background/60">
                Build real-world products with modern technologies and industry best practices.
              </p>
            </div>
          </div>

          {/* Pathway card */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-md">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-display text-sm font-bold text-foreground">Product Engineering Pathway</span>
              <Link
                to="/capabilities/$slug"
                params={{ slug: "product-software" }}
                className="font-display text-xs font-semibold text-accent hover:underline"
              >
                View all →
              </Link>
            </div>
            <ul className="divide-y divide-border">
              {cap.offer.map((item, i) => (
                <li key={item} className="flex items-center gap-3 py-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-[10px] font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* feature cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                {f.icon}
              </div>
              <h4 className="font-display text-sm font-bold text-foreground">{f.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>

        {/* bottom CTA strip */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-accent px-8 py-8 sm:flex-row sm:items-center">
          <div>
            <span className="block font-display text-sm font-bold text-accent-foreground">
              Join 100+ companies &amp; founders who trust Nloga
            </span>
            <span className="text-sm text-accent-foreground/70">
              Build real-world products with modern technologies and industry best practices.
            </span>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-accent-foreground px-6 py-3 font-display text-sm font-bold text-accent transition-all hover:bg-white"
          >
            Explore Engineering <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 3. UX/UI DESIGN ─────────── */

function DesignSection() {
  return (
    <section id="capability-design" className="scroll-mt-24 w-full bg-background px-6 pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-2">
          <span className="rounded-full bg-accent/10 px-3 py-1 font-display text-[10px] font-bold tracking-widest text-accent uppercase">
            2 · UX Design
          </span>
        </div>

        <h2 className="display-lg mb-4 text-foreground">Human-Centered UX &amp; High-Fidelity UI</h2>
        <p className="mb-12 max-w-xl text-base text-muted-foreground">
          Good design is not decoration. It is the process of making a product understandable, useful, and enjoyable to use.
        </p>

        {/* 3 service cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {DESIGN_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/30 hover:shadow-lg">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight text-foreground">{s.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-2.5 py-1 font-display text-[10px] font-medium text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <Link
                  to="/capabilities/$slug"
                  params={{ slug: "ux-ui-design" }}
                  className="mt-6 inline-flex items-center gap-1 font-display text-xs font-bold text-accent transition-all group-hover:gap-2"
                >
                  More details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-muted/50 px-8 py-6 sm:flex-row sm:items-center">
          <div>
            <span className="block font-display text-sm font-bold text-foreground">
              Start your design journey today
            </span>
            <span className="text-sm text-muted-foreground">
              Join thousands of learners and build a career in UI/UX design.
            </span>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-display text-sm font-bold text-accent-foreground transition-all hover:bg-accent/90"
          >
            View all UX/UI Courses <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 4. BRAND & CREATIVE ─────────── */

function BrandSection() {
  return (
    <section id="capability-brand" className="scroll-mt-24 w-full bg-muted/40 px-6 pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-2">
          <span className="rounded-full bg-creative/10 px-3 py-1 font-display text-[10px] font-bold tracking-widest uppercase" style={{ color: "var(--creative)" }}>
            3 · Brand &amp; Creative
          </span>
        </div>

        <h2 className="display-lg mb-4 text-foreground">Visual Identities &amp; Brand Systems</h2>
        <p className="mb-12 max-w-xl text-base text-muted-foreground">
          Your brand is how people recognize, understand, and remember you. We help turn business ideas into coherent visual identities.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr_1fr]">
          {/* WE DESIGN dark card */}
          <div className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl p-8 shadow-xl" style={{ background: "var(--creative)" }}>
            <img
              src="/images/creativepics-art.jpg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-45"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/25 transition-colors duration-700 group-hover:bg-black/10" />
            <div className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-black/10 blur-2xl" />
            <span className="relative z-10 font-display text-[10px] font-bold tracking-widest text-white/50 uppercase">
              CreativePics Art
            </span>
            <div className="relative z-10">
              <div className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-white">
                WE<br />DES<br />IGN.
              </div>
              <p className="mt-4 text-sm text-white/70">
                Create memorable brands with purpose and personality.
              </p>
            </div>
          </div>

          {/* middle column */}
          <div className="flex flex-col gap-4">
            {BRAND_SERVICES_RIGHT.map((s) => (
              <div key={s.title} className="flex-1 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <h4 className="font-display text-sm font-bold text-foreground">{s.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
                <button className="mt-3 inline-flex items-center gap-1 font-display text-xs font-bold text-accent hover:underline">
                  More details <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>

          {/* right column — quick links */}
          <div className="flex flex-col gap-3">
            {BRAND_SERVICES_LEFT.map((s) => (
              <div key={s.title} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  {s.icon}
                </div>
                <div>
                  <span className="block font-display text-sm font-bold text-foreground">{s.title}</span>
                  <span className="text-xs text-muted-foreground">{s.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            to="/capabilities/$slug"
            params={{ slug: "brand-creative" }}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-display text-sm font-bold text-foreground transition-all hover:border-accent hover:text-accent"
          >
            View all Brand capabilities <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 5. TRAINING ─────────── */

function TrainingSection() {
  const stats = [
    { value: "12", label: "Programmes" },
    { value: "11+", label: "Expert mentors" },
    { value: "150%", label: "Practical hours" },
  ];

  return (
    <section id="capability-training" className="scroll-mt-24 w-full bg-background px-6 pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-2">
          <span className="rounded-full bg-accent/10 px-3 py-1 font-display text-[10px] font-bold tracking-widest text-accent uppercase">
            4 · Academy &amp; Courses
          </span>
        </div>

        <h2 className="display-lg mb-4 text-foreground">Academy, Technical Training &amp; Corporate Upskilling</h2>
        <p className="mb-12 max-w-xl text-base text-muted-foreground">
          We believe knowledge becomes more valuable when it can be applied. Our learning activities are designed around practical skills, real problems, and actual creation.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr]">
          {/* left — dark "Create" panel */}
          <div className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl bg-foreground/90 p-10 shadow-2xl">
            <img
              src="/images/now-just-create.jpg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-40"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/40 transition-colors duration-700 group-hover:bg-black/20" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative z-10">
              <span className="font-display text-[10px] font-bold tracking-widest text-background/40 uppercase">
                Now Just Create
              </span>
              <div className="mt-6 font-display text-5xl font-black leading-[0.9] tracking-[-0.04em] text-background">
                Create,<br />
                <span className="text-accent">Grow,</span><br />
                Together.
              </div>
            </div>

            {/* stats */}
            <div className="relative z-10 mt-auto">
              <div className="mb-4 text-sm text-background/50">Learn from practical skills.</div>
              <div className="grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/5 p-3 text-center">
                    <span className="block font-display text-2xl font-black text-background">{s.value}</span>
                    <span className="block text-[10px] text-background/50">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right — 3 tracks */}
          <div className="flex flex-col gap-4">
            {TRAINING_TRACKS.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    {t.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="font-display text-base font-bold tracking-tight text-foreground">{t.title}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {t.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-muted px-2.5 py-0.5 font-display text-[10px] font-medium text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <Link
                        to="/ecosystem/now-just-create"
                        className="inline-flex items-center gap-1 font-display text-xs font-bold text-accent hover:underline"
                      >
                        Explore track <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* social proof badge */}
            <div className="flex items-center justify-between rounded-2xl border border-border bg-muted/50 px-6 py-4">
              <span className="font-display text-sm font-bold text-foreground">
                Join 1,000+ Satisfied learners &amp; partnerships
              </span>
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-display text-xs font-bold text-accent-foreground hover:bg-accent/90"
              >
                View all modules <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 6. ENGAGEMENT MATRIX ─────────── */

function EngagementMatrix() {
  return (
    <section className="w-full bg-muted/40 px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
            Our reach
          </span>
          <h2 className="display-md mt-3 text-foreground">
            Integrated Cross-Discipline Engagement Matrix
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-muted-foreground">
            Every capability works in concert. No siloed service, no translation loss between disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {MATRIX.map((col, i) => {
            const colors = ["var(--forge)", "var(--accent)", "var(--creative)", "oklch(0.55 0.18 145)", "var(--learn)"];
            return (
              <Reveal key={col.area} delay={i * 70}>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div
                    className="mb-4 h-1 w-8 rounded-full"
                    style={{ background: colors[i] }}
                  />
                  <h4 className="font-display text-sm font-bold text-foreground">{col.area}</h4>
                  <ul className="mt-4 space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-3 w-3 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 7. FINAL CTA ─────────── */

function FinalCTA() {
  return (
    <section className="w-full bg-background px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-foreground p-10 shadow-2xl lg:p-16">
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-display text-[11px] font-bold tracking-widest text-background/50 uppercase">
                {/* <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Get started today */}
              </span>
              <h2 className="display-lg mt-6 text-background">
                Let's build something
                <br />
                <span className="text-accent">durable together.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-background/60">
                Three disciplines, one relationship. Build properly. From UX/UI Design to Product Engineering to Brand &amp; Creative, your idea deserves the full picture.
              </p>

              {/* bottom tag strip */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["UX/UI Design", "Product Engineering", "Brand & Creative", "Corporate Upskilling"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-display text-xs font-medium text-background/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 font-display text-sm font-bold text-accent-foreground shadow-xl shadow-accent/25 transition-all hover:bg-accent/90"
              >
                Start a project <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-display text-sm font-medium text-background/80 transition-colors hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
