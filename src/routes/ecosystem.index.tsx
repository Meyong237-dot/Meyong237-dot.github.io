import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Brush,
  GraduationCap,
  CheckCircle,
  Star,
  Users,
  Globe,
  Zap,
  Target,
  BookOpen,
  Layers,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/components/site/LanguageProvider";
import { ENTITIES } from "@/lib/site-data";

export const Route = createFileRoute("/ecosystem/")({
  head: () => ({
    meta: [
      { title: "Ecosystem — Forgeware, CreativePics Art, Now Just Create" },
      {
        name: "description",
        content:
          "Nloga works through three entities: Forgeware for digital products and software, CreativePics Art for brand and visual design, and Now Just Create for learning and training.",
      },
      { property: "og:title", content: "The Nloga Ecosystem" },
      {
        property: "og:description",
        content: "Three entities, one way of thinking: Forgeware, CreativePics Art, Now Just Create.",
      },
    ],
  }),
  component: EcosystemIndex,
});

/* ─── Data ─── */

const ENTITY_ICONS = [
  <Code className="h-5 w-5" />,
  <Brush className="h-5 w-5" />,
  <GraduationCap className="h-5 w-5" />,
];

const ENTITY_VERBS = ["BUILD", "DESIGN", "EMPOWER"];

const COMPARISON_COLS = [
  {
    label: "Build",
    entity: "Forgeware",
    color: "var(--forge)",
    services: [
      "Web Applications",
      "Mobile Products",
      "SaaS Platforms",
      "API & Backend",
      "Product Discovery",
      "Technical Architecture",
    ],
  },
  {
    label: "Design",
    entity: "CreativePics Art",
    color: "var(--creative)",
    services: [
      "Brand Identity",
      "Visual Systems",
      "UI/UX Design",
      "Creative Direction",
      "Print & Social Design",
      "Brand Guidelines",
    ],
  },
  {
    label: "Empower",
    entity: "Now Just Create",
    color: "var(--learn)",
    services: [
      "Design Programmes",
      "Dev Bootcamps",
      "Team Workshops",
      "Mentorship",
      "Portfolio Reviews",
      "Learning Curriculum",
    ],
  },
  {
    label: "Integrated Growth",
    entity: "Full Nloga",
    color: "var(--accent)",
    services: [
      "Strategy + Execution",
      "Product + Brand",
      "Design + Engineering",
      "Innovation Sprints",
      "Digital Transformation",
      "End-to-End Delivery",
    ],
  },
];

/* ─────────── PAGE ─────────── */

function EcosystemIndex() {
  return (
    <>
      <EcosystemHero />
      <HowTriadOperates />
      <ForgewareSection />
      <CreativePicsSection />
      <NowJustCreateSection />
      <CrossComparison />
      <EcosystemCTA />
    </>
  );
}

/* ─────────── 1. HERO ─────────── */

function EcosystemHero() {
  const { t } = useLanguage();
  const [hoveredEntity, setHoveredEntity] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background px-6 pt-12 pb-16 lg:pt-20 lg:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* left */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
                {t("Three Directions.")}
              </span>
            </div>

            <h1 className="mt-4 font-display font-black leading-[0.88] tracking-[-0.06em] text-foreground" style={{ fontSize: "clamp(4rem,12vw,8rem)" }}>
              ONE<br />
              COM<br />
              PANY.
            </h1>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Together, our three roles share — Build, Design, Empower — create a unified ecosystem of innovation,
              helping businesses, creators, and communities thrive in the digital age.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-bold text-accent-foreground transition-all hover:bg-accent/90"
              >
                {t("Explore Our Services")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-display text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {t("Discover Our Ecosystem")}
              </Link>
            </div>
          </div>

          {/* right — stacked entity cards */}
          <Reveal delay={100}>
            <div
              className={`grid h-[365px] transition-[grid-template-rows,gap] duration-700 ease-out ${
                hoveredEntity === null ? "gap-4" : "gap-0"
              }`}
              onMouseLeave={() => setHoveredEntity(null)}
              style={{
                gridTemplateRows:
                  hoveredEntity === null
                    ? "repeat(3, minmax(0, 1fr))"
                    : ENTITIES.map((_, index) => (index === hoveredEntity ? "minmax(0, 1fr)" : "0px")).join(" "),
              }}
            >
              {ENTITIES.map((e, i) => (
                <Link
                  key={e.slug}
                  to="/ecosystem/$slug"
                  params={{ slug: e.slug }}
                  onMouseEnter={() => setHoveredEntity(i)}
                  onFocus={() => setHoveredEntity(i)}
                  className={`group flex min-h-0 items-center justify-between overflow-hidden rounded-2xl px-7 py-7 transition-all duration-700 ease-out hover:-translate-y-0.5 ${
                    hoveredEntity !== null && hoveredEntity !== i
                      ? "pointer-events-none opacity-0"
                      : "opacity-100"
                  }`}
                  style={{ background: e.accentVar }}
                >
                  <div>
                    <span className="block font-display text-[10px] font-bold tracking-widest text-white/60 uppercase">
                      {t(e.line)}
                    </span>
                    <span className="mt-1 block font-display text-3xl font-black text-white transition-transform duration-700 group-hover:translate-x-1">
                      {ENTITY_VERBS[i]}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                      {ENTITY_ICONS[i]}
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/60 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 2. HOW THE TRIAD OPERATES ─────────── */

function HowTriadOperates() {
  const cols = [
    {
      verb: "Build",
      icon: <Code className="h-5 w-5" />,
      subtitle: "→ Digital Products",
      entity: ENTITIES[0],
      desc: "We design and develop digital applications from idea to launch, from business systems to user-facing apps.",
      cta: "Explore Build Services",
    },
    {
      verb: "Design",
      icon: <Brush className="h-5 w-5" />,
      subtitle: "→ Brand & Creative",
      entity: ENTITIES[1],
      desc: "We bring a range of digital experiences to life that help your specifications communicate clearly and memorably.",
      cta: "Explore Design Services",
    },
    {
      verb: "Empower",
      icon: <GraduationCap className="h-5 w-5" />,
      subtitle: "→ Training & Education",
      entity: ENTITIES[2],
      desc: "We educate companies and teams with actionable, strategy-first thinking — tools, insights and every step.",
      cta: "Explore Empower Services",
    },
  ];

  return (
    <section className="w-full bg-muted/40 px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
              The whole of the triad
            </span>
            <h2 className="display-lg mt-3 text-foreground">How the Triad Operates</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A simple, clear approach. Each area works together, helping you move from idea to project — with the right strategy, tools and support at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cols.map((c, i) => (
            <Reveal key={c.verb} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/30 hover:shadow-lg">
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-110"
                  style={{ background: c.entity.accentVar }}
                >
                  {c.icon}
                </div>
                <span className="font-display text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                  {c.subtitle}
                </span>
                <h3 className="mt-2 font-display text-2xl font-black tracking-tight text-foreground">
                  {c.verb}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <Link
                  to="/ecosystem/$slug"
                  params={{ slug: c.entity.slug }}
                  className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-bold transition-all group-hover:gap-2.5"
                  style={{ color: c.entity.accentVar }}
                >
                  {c.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 3. FORGEWARE SECTION ─────────── */

function ForgewareSection() {
  const e = ENTITIES[0];
  return (
    <section className="w-full bg-background px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-2">
          <span
            className="rounded-full px-3 py-1 font-display text-[10px] font-bold tracking-widest text-white uppercase"
            style={{ background: e.accentVar }}
          >
            Forgeware · SaaS Solution
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
            {/* left */}
            <div className="flex flex-col justify-between p-8 lg:p-12">
              <div>
                <h2 className="display-md text-foreground">
                  HRConnect SaaS Core &amp; Payroll Mesh
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Modern, flexible and complete HR and payroll solution for businesses of all sizes. Manage your people, automate your payroll, and stay compliant in all your editions.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { icon: <Users className="h-4 w-4" />, title: "Customisable HR Staff Service", desc: "Complete employee management tools" },
                    { icon: <Zap className="h-4 w-4" />, title: "Automated Payroll", desc: "Secure and automated payroll system" },
                    { icon: <Star className="h-4 w-4" />, title: "Employee Self Service", desc: "Self-service portal for employees" },
                    { icon: <TrendingUp className="h-4 w-4" />, title: "Reports &amp; Analytics", desc: "Powerful reporting dashboard" },
                  ].map((f) => (
                    <div key={f.title} className="rounded-xl border border-border bg-muted/50 p-4">
                      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        {f.icon}
                      </div>
                      <span className="block font-display text-xs font-bold text-foreground">{f.title}</span>
                      <span className="mt-0.5 block text-[10px] text-muted-foreground">{f.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Link
                  to="/ecosystem/$slug"
                  params={{ slug: e.slug }}
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-display text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ background: e.accentVar }}
                >
                  Learn More About {e.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-3 font-display text-[10px] text-muted-foreground">
                Trusted by 500+ growing companies nationwide
              </div>
            </div>

            {/* right — mockup */}
            <div
              className="relative flex min-h-[360px] items-center justify-center overflow-hidden p-8"
              style={{ background: e.accentVar }}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-black/10 blur-2xl" />
              <div className="relative z-10 w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm">
                {/* Dashboard header */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-xs font-bold text-white">Dashboard</span>
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-white/30" />
                    <div className="h-2 w-2 rounded-full bg-white/30" />
                  </div>
                </div>
                {/* Stats row */}
                <div className="mb-4 grid grid-cols-3 gap-2">
                  {[{ l: "246", t: "Active Staff" }, { l: "312,450", t: "Payroll Total" }, { l: "98%", t: "On Time" }].map((s) => (
                    <div key={s.t} className="rounded-xl bg-white/10 p-2.5 text-center">
                      <span className="block font-display text-sm font-black text-white">{s.l}</span>
                      <span className="block text-[8px] text-white/50">{s.t}</span>
                    </div>
                  ))}
                </div>
                {/* Table rows */}
                <div className="space-y-1.5">
                  {["Danzel Njemax", "Alyna Noufor", "Lynette Toma", "Alphine Noufor"].map((name) => (
                    <div key={name} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center font-display text-[8px] font-bold text-white">
                          {name[0]}
                        </div>
                        <span className="font-display text-[10px] text-white/70">{name}</span>
                      </div>
                      <div className="h-1.5 w-10 rounded-full bg-white/30" />
                    </div>
                  ))}
                </div>
                {/* Mini chart */}
                <div className="mt-3 flex items-end gap-0.5 h-12">
                  {[40, 65, 50, 80, 60, 90, 70, 85].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-white/20" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 4. CREATIVEPICS SECTION ─────────── */

function CreativePicsSection() {
  const { t } = useLanguage();
  const e = ENTITIES[1];
  const services = [
    { icon: <Target className="h-4 w-4" />, title: "Brand Identity", desc: "Logos, colors, type systems, digital." },
    { icon: <Layers className="h-4 w-4" />, title: "Graphic Design", desc: "Social, print, digital campaigns." },
    { icon: <Globe className="h-4 w-4" />, title: "Creative Content", desc: "Words, visuals and narrative design." },
    { icon: <Brush className="h-4 w-4" />, title: "Digital Campaigns", desc: "Scroll-stopping visual strategy." },
  ];

  return (
    <section className="w-full bg-muted/40 px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-2">
          <span
            className="rounded-full px-3 py-1 font-display text-[10px] font-bold tracking-widest text-white uppercase"
            style={{ background: e.accentVar }}
          >
            {t("CreativePics Art")}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* left — branding showcase */}
          <Reveal>
            <div
              className="group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl p-10 shadow-xl"
              style={{ background: e.accentVar }}
            >
              <img
                src="/images/creativepics-art.jpg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-35"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/20" />
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-48 w-48 rounded-full bg-black/10 blur-2xl" />
              <div className="relative z-10">
                <span className="font-display text-[10px] font-bold tracking-widest text-white/50 uppercase">
                  {t("CreativePics Art")}
                </span>
              </div>
              <div className="relative z-10">
                <div className="font-display font-black leading-[0.88] tracking-[-0.05em] text-white" style={{ fontSize: "clamp(3rem,7vw,5rem)" }}>
                  We<br />DES<br />IGN.
                </div>
                <p className="mt-4 text-sm font-medium tracking-widest text-white/60 uppercase">
                  {t("Brands, Experiences, Visual Identities.")}
                </p>
              </div>
              <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                {["Graphic Design", "Brand Identity", "Digital Campaigns"].map((t) => (
                  <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-display text-[10px] font-medium text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* right — services */}
          <Reveal delay={100}>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="display-md text-foreground">{t("We Design")}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We create brand-centred design, impactful visuals and digital experiences that help businesses stand out and connect with their audience. From logos to campaigns, we turn ideas into a lasting brand presence.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {services.map((s) => (
                    <div key={s.title} className="rounded-xl border border-border bg-card p-4">
                      <div
                        className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg text-white"
                        style={{ background: e.accentVar }}
                      >
                        {s.icon}
                      </div>
                      <span className="block font-display text-sm font-bold text-foreground">{s.title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{s.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Link
                  to="/ecosystem/$slug"
                  params={{ slug: e.slug }}
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-display text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ background: e.accentVar }}
                >
                  {t("Explore CreativePics Art")} <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-sm text-muted-foreground">{t("Discover all courses")}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 5. NOW JUST CREATE SECTION ─────────── */

function NowJustCreateSection() {
  const { t } = useLanguage();
  const e = ENTITIES[2];
  const stats = [
    { value: "1,200+", label: "Students Trained" },
    { value: "Scholarships", label: "Available Now" },
    { value: "18+", label: "Top-Prog Programmes" },
  ];

  return (
    <section className="w-full bg-background px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-2">
          <span
            className="rounded-full px-3 py-1 font-display text-[10px] font-bold tracking-widest text-white uppercase"
            style={{ background: e.accentVar }}
          >
            The Learning Lab
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          {/* left — stats */}
          <Reveal>
            <h2 className="display-lg text-foreground">
              How we <span style={{ color: e.accentVar }}>Empower</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Through practical training and hands-on learning, we help individuals and teams build the skills they need to grow, adapt and succeed in the digital world.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.value} className="rounded-xl border border-border bg-muted/50 p-4 text-center">
                  <span className="block font-display text-xl font-black text-foreground">{s.value}</span>
                  <span className="mt-1 block text-[10px] text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/ecosystem/$slug"
                params={{ slug: e.slug }}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-display text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ background: e.accentVar }}
              >
                {t("View All Programs")} <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                className="rounded-xl border border-border px-6 py-3 font-display text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {t("Learn More")}
              </button>
            </div>
          </Reveal>

          {/* right — dark "Learn. Create. Grow." card */}
          <Reveal delay={120}>
            <div className="group relative overflow-hidden rounded-2xl bg-foreground shadow-2xl">
              <img
                src="/images/now-just-create.jpg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-35"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full blur-3xl" style={{ background: e.accentVar, opacity: 0.15 }} />
              <div className="relative z-10 p-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[10px] font-bold tracking-widest text-background/40 uppercase">
                    Product &amp; Design Training Program
                  </span>
                </div>

                <div className="mt-8 font-display text-5xl font-black leading-[0.9] tracking-tight text-background">
                  {t("Learn.")}<br />
                  <span style={{ color: e.accentVar }}>{t("Create.")}</span><br />
                  {t("Grow.")}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-background/60">
                  Learn from experts. Build real skills. From UX to full-stack, motion design and business thinking — all in one place.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <Link
                    to="/ecosystem/$slug"
                    params={{ slug: e.slug }}
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-sm font-bold text-white transition-all hover:opacity-90"
                    style={{ background: e.accentVar }}
                  >
                    {t("Join Now")} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="font-display text-xs text-background/40">{t("Watch Intro")}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 6. CROSS-COMPARISON ─────────── */

function CrossComparison() {
  return (
    <section className="w-full bg-muted/40 px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
            Any To Guide Blend
          </span>
          <h2 className="display-lg mt-3 text-foreground">Entity Cross-Comparison</h2>
          <p className="mt-4 mx-auto max-w-lg text-base text-muted-foreground">
            All three areas complement each other. Most ambitious projects use more than one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMPARISON_COLS.map((col, i) => (
            <Reveal key={col.label} delay={i * 70}>
              <div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                {/* header */}
                <div className="flex items-center gap-3 p-5" style={{ borderBottom: `2px solid ${col.color}` }}>
                  <div
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: col.color }}
                  />
                  <div>
                    <span className="block font-display text-base font-black text-foreground">{col.label}</span>
                    <span className="text-[10px] text-muted-foreground">{col.entity}</span>
                  </div>
                </div>
                {/* services */}
                <ul className="flex flex-col divide-y divide-border">
                  {col.services.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 px-5 py-3">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0" style={{ color: col.color }} />
                      <span className="text-xs text-muted-foreground">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 7. ECOSYSTEM CTA ─────────── */

function EcosystemCTA() {
  return (
    <section className="w-full bg-accent px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent-foreground/60 uppercase">
              Let's Create Together
            </span>
            <h2 className="display-lg mt-3 text-accent-foreground">
              Ready to harness the combined power of NLOGA?
            </h2>
            <p className="mt-4 max-w-lg text-base text-accent-foreground/80">
              Whether you need a creative strategy, a codebase, a complete digital marketing solution, or all three, we're here to help you build your ideas into reality.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-foreground px-8 py-4 font-display text-sm font-bold text-accent shadow-lg transition-all hover:bg-white"
            >
              Find a project <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/capabilities"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent-foreground/20 bg-accent-foreground/10 px-8 py-4 font-display text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-foreground/20"
            >
              Our Services &amp; More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
