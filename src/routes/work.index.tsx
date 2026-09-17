import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  LayoutGrid,
  List,
  Star,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Award,
  Shield,
  TrendingUp,
  Code,
  Brush,
  GraduationCap,
  Globe,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CASE_STUDIES } from "@/lib/site-data";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Nloga" },
      {
        name: "description",
        content:
          "A curated selection of software architectures, visual identity systems, and production leadership, designed across Central Africa and delivered for international innovators.",
      },
      { property: "og:title", content: "Work — Nloga" },
      {
        property: "og:description",
        content: "Work that proves conviction. Selected projects from Nloga.",
      },
    ],
  }),
  component: WorkIndex,
});

/* ─── Data ─── */

const FILTER_TABS = [
  { id: "all", label: "All Works" },
  { id: "product", label: "Digital Products & Engineering" },
  { id: "brand", label: "Brand Identity" },
  { id: "development", label: "Development" },
  { id: "ux", label: "Print & UX Design" },
];

const FEATURED_PROJECTS = [
  {
    id: "hrconnect",
    category: "Management Platform",
    tag: "SaaS · HR System",
    title: "HRConnect SaaS Core & Payroll Mesh",
    description:
      "Multi-country payroll and people management platform for African businesses. Built with a composable hiring structure and a clean, intuitive UI to handle complex HR workflows, compliance and cross-border payment processing.",
    tech: ["SaaS", "HR Tool", "Payroll", "Multi-tenant"],
    stats: [
      { value: "8.2K", label: "Users onboarding" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "+40%", label: "ops/team efficiency" },
    ],
    status: "2025 · Ongoing",
    accent: "var(--forge)",
  },
  {
    id: "imani-j",
    category: "Brand Identity",
    tag: "Branding · Packaging",
    title: "IMANI-J — Luxury, Retail & Monogram System",
    description:
      "End-to-end brand identity, monogram and stationery suite, with a rich multi-visual language, typographic system and premium retail system designed for a luxury trading brand.",
    tech: ["Branding", "Packaging", "Visual Identity"],
    stats: [
      { value: "200+", label: "Brand touchpoints" },
      { value: "3", label: "months" },
    ],
    status: "2025 · Completed",
    accent: "var(--creative)",
  },
];

const SYSTEM_PROJECTS = [
  {
    id: "switchmobile",
    category: "WebApp · MS System",
    tag: "FinTech",
    title: "SwitchMobile Payment Relay",
    description:
      "End-to-end payment processing platform with multi-rail support, fraud detection and real-time reconciliation for mobile and web.",
    tech: ["Go", "Rails", "PostgreSQL", "Docker"],
    accent: "var(--forge)",
  },
  {
    id: "fili-systems",
    category: "Digital Transformation",
    tag: "Architecture",
    title: "FiliSystems Architectural Clarity",
    description:
      "Complex architectural software including designing and managing team processes and deep integration research and migration to the stack.",
    tech: ["Node.js", "React", "PostgreSQL", "Figma"],
    accent: "var(--accent)",
  },
  {
    id: "agritrack",
    category: "SaaS Solution",
    tag: "AgriTech",
    title: "AgriTrack Mesh Sync",
    description:
      "Real-time crop intelligence platform for farmers, cooperatives and institutions with live-feeding and reporting.",
    tech: ["React", "Python", "Django", "Celery"],
    accent: "oklch(0.55 0.18 145)",
  },
  {
    id: "kriki",
    category: "Logistics · Software",
    tag: "Maritime",
    title: "Kriki Maritime Logistics Terminal",
    description:
      "Digital platform for logistics, cargo monitoring and collecting strategies for multi-country maritime operations.",
    tech: ["Vue", "Laravel", "PostgreSQL", "Supabase"],
    accent: "var(--creative)",
  },
  {
    id: "uiux-fellowship",
    category: "Academy · Training",
    tag: "Education",
    title: "UI/UX Design Fellowship 2024",
    description:
      "Intensive UI/UX training programme for young designers and developers. Design, motion and interaction design.",
    tech: ["Figma", "Motion", "Prototyping"],
    accent: "var(--learn)",
  },
];

const METRICS = [
  {
    icon: <Shield className="h-6 w-6" />,
    value: "0%",
    unit: "Error Rate",
    desc: "Clean, reliable and high quality, safe software that ships fast and error-free.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    value: "100%",
    unit: "Production Grade",
    desc: "Clean code, full testing and high quality, scalable builds every city will bring more confident experiences with real-world solutions.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "0",
    unit: "Incident Modules",
    desc: "No unresolved incident impact or monitoring to ship software and monitor systems and users safely.",
  },
];

/* ─────────── PAGE ─────────── */

function WorkIndex() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [query, setQuery] = useState("");

  return (
    <>
      <WorkHero
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        view={view}
        setView={setView}
        query={query}
        setQuery={setQuery}
      />
      <FeaturedProjectsSection />
      <SystemImplementations />
      <MetricsSection />
      <WorkCTA />
    </>
  );
}

/* ─────────── 1. HERO ─────────── */

function WorkHero({
  activeFilter,
  setActiveFilter,
  view,
  setView,
  query,
  setQuery,
}: {
  activeFilter: string;
  setActiveFilter: (id: string) => void;
  view: "grid" | "list";
  setView: (v: "grid" | "list") => void;
  query: string;
  setQuery: (q: string) => void;
}) {
  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background px-6 pt-12 pb-16 lg:pt-20 lg:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px] lg:items-start">
          {/* left */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
                ◈ Your Vision, Our Code
              </span>
            </div>

            <h1 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground">
              Work that proves{" "}
              <span className="text-accent">conviction.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              A curated selection of software architectures, visual identity systems, and production
              leadership, designed across Central Africa and delivered for international innovators.
            </p>

            {/* filter tabs */}
            <div className="mt-8 flex flex-wrap gap-2">
              {FILTER_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveFilter(t.id)}
                  className={`rounded-full px-4 py-2 font-display text-sm font-medium transition-all ${
                    activeFilter === t.id
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "border border-border text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* search + view toggle */}
            <div className="mt-6 flex items-center gap-3">
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Filter by skill, sector, tech..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-full border border-border bg-card py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="button"
                onClick={() => setView("grid")}
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${view === "grid" ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground"}`}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${view === "list" ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground"}`}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* right — stat badges */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="block font-display text-2xl font-black text-foreground">80+</span>
                    <span className="text-xs text-muted-foreground">Projects delivered</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <Star className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="block font-display text-2xl font-black text-foreground">98%</span>
                    <span className="text-xs text-muted-foreground">Client satisfaction</span>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                  <span className="ml-1 font-display text-[10px] font-bold text-accent">4.9/5</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 2. FEATURED PROJECTS ─────────── */

function FeaturedProjectsSection() {
  return (
    <section className="w-full bg-muted/40 px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-2">
          <span className="rounded-full bg-accent/10 px-3 py-1 font-display text-[10px] font-bold tracking-widest text-accent uppercase">
            ◆ Featured Projects
          </span>
        </div>

        <div className="flex flex-col gap-8">
          {/* Project 1 — HRConnect */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
                {/* left */}
                <div className="flex flex-col justify-between p-8 lg:p-12">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                        ◈ Management Platform
                      </span>
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-display text-[10px] font-bold text-accent">
                        SaaS · HR System
                      </span>
                    </div>
                    <h2 className="display-md mt-4 text-foreground">
                      HRConnect SaaS Core &amp; Payroll Mesh
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Multi-country payroll and people management platform for African businesses.
                      Built with a composable hiring structure and a clean, intuitive UI to handle
                      complex HR workflows, compliance and cross-border payment processing.
                    </p>

                    {/* tech tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["SaaS", "HR Tool", "Payroll", "Multi-tenant"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-muted px-3 py-1 font-display text-xs font-medium text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* stats */}
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {[
                        { v: "8.2K", l: "Users onboarding" },
                        { v: "99.9%", l: "Uptime SLA" },
                        { v: "+40%", l: "ops/team efficiency" },
                      ].map((s) => (
                        <div key={s.v}>
                          <span className="block font-display text-2xl font-black text-foreground">
                            {s.v}
                          </span>
                          <span className="text-[11px] text-muted-foreground">{s.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <Link
                      to="/work/$slug"
                      params={{ slug: "example-product-case-study" }}
                      className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-display text-sm font-bold text-background transition-all hover:bg-accent"
                    >
                      Read Full Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                    <span className="font-display text-xs text-muted-foreground">
                      2025 · Ongoing
                    </span>
                  </div>
                </div>

                {/* right — dashboard mockup */}
                <div
                  className="relative flex min-h-[320px] items-center justify-center overflow-hidden p-8"
                  style={{ background: "var(--forge)" }}
                >
                  <div className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-black/10 blur-2xl" />
                  {/* Mockup dashboard illustration */}
                  <div className="relative z-10 w-full max-w-xs rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-2xl">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-white/40" />
                      <div className="h-1.5 w-24 rounded-full bg-white/20" />
                    </div>
                    {/* Chart bars */}
                    <div className="flex items-end gap-1.5 h-24">
                      {[60, 80, 45, 90, 70, 55, 85, 75, 65, 95].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-white/30"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {["Active", "Payroll", "Reports"].map((l) => (
                        <div key={l} className="rounded-lg bg-white/10 p-2 text-center">
                          <span className="block font-display text-[10px] font-bold text-white/70">{l}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-display text-[10px] text-white/50">HRConnect Dashboard</span>
                      <span className="font-display text-[10px] font-bold text-white/70">2025 · Ongoing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Project 2 — IMANI-J */}
          <Reveal delay={80}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* left — photo mockup panel */}
                <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-muted p-8">
                  {/* mockup: boxes / packaging */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 px-8">
                    {/* product mockup shapes */}
                    <div className="flex flex-col gap-3">
                      <div className="h-28 w-20 rounded-xl bg-muted-foreground/10 border border-border shadow-md flex items-center justify-center">
                        <span className="font-display text-xs text-muted-foreground font-bold">Hat Mock</span>
                      </div>
                      <div className="h-16 w-20 rounded-lg bg-muted-foreground/10 border border-border shadow-sm flex items-center justify-center">
                        <span className="font-display text-[10px] text-muted-foreground">Box</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-6">
                      <div className="h-20 w-24 rounded-xl bg-muted-foreground/10 border border-border shadow-md flex items-center justify-center">
                        <span className="font-display text-xs text-muted-foreground font-bold">Embroidered</span>
                      </div>
                      <div className="h-12 w-24 rounded-lg bg-muted-foreground/10 border border-border shadow-sm flex items-center justify-center">
                        <span className="font-display text-[10px] text-muted-foreground">Label</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <div className="flex gap-2">
                      <span className="rounded-full border border-border bg-background px-3 py-1 font-display text-[10px] font-bold text-foreground">
                        Custom Lookbook &amp; Branding
                      </span>
                      <span
                        className="rounded-full px-3 py-1 font-display text-[10px] font-bold text-white"
                        style={{ background: "var(--creative)" }}
                      >
                        Brand Identity
                      </span>
                    </div>
                  </div>
                </div>

                {/* right — dark description */}
                <div className="relative flex flex-col justify-between overflow-hidden bg-foreground p-8 lg:p-12">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full opacity-20 blur-2xl" style={{ background: "var(--creative)" }} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-[10px] font-bold tracking-widest text-background/40 uppercase">
                        ◉ Brand &amp; Identity Packages
                      </span>
                      <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-display text-[10px] font-bold text-background/70">
                        2025 · Ongoing
                      </span>
                    </div>
                    <h2 className="display-md mt-4 text-background">
                      IMANI-J — Luxury, Retail &amp; Monogram System
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-background/60">
                      End-to-end brand identity, monogram and stationery suite, with a rich
                      multi-visual language, typographic system and premium retail system designed for
                      a luxury trading brand.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Branding", "Packaging", "Visual Identity"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-display text-[10px] font-medium text-background/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {[
                        { v: "200+", l: "Brand touchpoints" },
                        { v: "3", l: "months" },
                      ].map((s) => (
                        <div key={s.v}>
                          <span className="block font-display text-3xl font-black text-background">{s.v}</span>
                          <span className="text-xs text-background/50">{s.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/work/$slug"
                    params={{ slug: "example-brand-case-study" }}
                    className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-display text-sm font-bold text-accent-foreground transition-all hover:bg-accent/90"
                  >
                    View Identity Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 3. SYSTEM IMPLEMENTATIONS ─────────── */

function SystemImplementations() {
  return (
    <section className="w-full bg-background px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-2">
          <span className="rounded-full bg-accent/10 px-3 py-1 font-display text-[10px] font-bold tracking-widest text-accent uppercase">
            Systems &amp; Integrations
          </span>
        </div>
        <h2 className="display-lg mb-12 text-foreground">System Implementations</h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SYSTEM_PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                {/* colored header */}
                <div
                  className="relative flex h-36 items-end overflow-hidden p-5"
                  style={{ background: p.accent }}
                >
                  <div className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 rounded-full bg-black/10 blur-xl" />
                  <div className="relative z-10">
                    <span className="block font-display text-[10px] font-bold tracking-widest text-white/50 uppercase">
                      {p.category}
                    </span>
                    <span className="mt-1 block font-display text-sm font-bold text-white leading-tight">
                      {p.title}
                    </span>
                  </div>
                  <span
                    className="absolute right-4 top-4 rounded-full bg-white/15 px-2.5 py-1 font-display text-[10px] font-bold text-white backdrop-blur-sm"
                  >
                    {p.tag}
                  </span>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-md bg-muted px-2 py-0.5 font-display text-[10px] font-medium text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <Link
                        to="/work/$slug"
                        params={{ slug: CASE_STUDIES[0].slug }}
                        className="inline-flex items-center gap-1 font-display text-xs font-bold text-accent transition-all group-hover:gap-2"
                      >
                        View project <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <span className="font-display text-[10px] text-muted-foreground">2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 4. METRICS ─────────── */

function MetricsSection() {
  return (
    <section className="w-full bg-muted/40 px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
            Impact &amp; Results
          </span>
          <h2 className="display-lg mt-3 text-foreground">How we measure finished work.</h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            We don't measure our projects by measurable results. Our work defines and inspects through meaningful products and business growth.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="font-display text-xs text-muted-foreground">Powered by Gemini (API) and proprietary</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal key={m.unit} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {m.icon}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-black tracking-tight text-foreground">{m.value}</span>
                  <span className="font-display text-lg font-bold text-accent">{m.unit}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 5. WORK CTA ─────────── */

function WorkCTA() {
  return (
    <section className="w-full bg-accent px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent-foreground/60 uppercase">
              Get in touch
            </span>
            <h2 className="display-lg mt-3 text-accent-foreground">
              Have an ambitious project in mind? Let's build it properly.
            </h2>
            <p className="mt-4 max-w-lg text-base text-accent-foreground/80">
              Whether you need a visual strategy, a codebase, or a complete digital transformation,
              we're here to help you turn your ideas into reality.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-foreground px-8 py-4 font-display text-sm font-bold text-accent shadow-lg transition-all hover:bg-white"
            >
              Start a project <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent-foreground/20 bg-accent-foreground/10 px-8 py-4 font-display text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-foreground/20"
            >
              Inquire across email →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
