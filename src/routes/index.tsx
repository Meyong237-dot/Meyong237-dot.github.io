import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Brush,
  Code,
  GraduationCap,
  Layers,
  Network,
  Cpu,
  PenTool,
  HeadphonesIcon,
  TrendingUp,
  Star,
  Users,
  Briefcase,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useLanguage } from "@/components/site/LanguageProvider";
import { CAPABILITIES, CASE_STUDIES, ENTITIES, MISSION_PILLARS } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")(
{
  head: () => ({
    meta: [
      { title: "Nloga — Ideas are everywhere. We turn the right ones into something real." },
      {
        name: "description",
        content:
          "Nloga brings strategy, product design, technology and creative thinking together to build digital products and brands people understand, use, trust and remember.",
      },
      { property: "og:title", content: "Nloga — Build. Design. Enable." },
      {
        property: "og:description",
        content:
          "A Cameroonian multidisciplinary company building digital products, brands and learning programmes.",
      },
    ],
  }),
  component: Home,
}
);

function Home() {
  return (
    <>
      <HeroSection />
      <MissionRibbon />
      <ShowcaseGrid />
      <EntitiesSection />
      <FeaturedWork />
      <ManifestoSplit />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

/* ─────────── 1. HERO ─────────── */

const STATS = [
  { value: "5+", label: "Years of experience" },
  { value: "100+", label: "Projects completed" },
  { value: "4.9/5", label: "Client satisfaction", icon: <Star className="inline h-3 w-3 text-accent" /> },
  { value: "200+", label: "Monthly deliveries", icon: <Zap className="inline h-3 w-3 text-accent" /> },
];

const IMAGE_PATHS = {
  additional: "/images/additional.jpg",
  forgeware: "/images/forgeware.jpg",
  creativePics: "/images/creativepics-art.jpg",
  nowJustCreate: "/images/now-just-create.jpg",
  workOne: "/images/work-1.jpg",
  workTwo: "/images/work-2.jpg",
  workThree: "/images/work-3.png",
  workFour: "/images/work-4.png",
} as const;

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-display text-[11px] font-bold tracking-[0.12em] text-accent uppercase">
            {t("Architectural Tech & Design Studio")}
          </span>
        </div>

        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2rem,4.8vw,4rem)] leading-[1.08] font-bold tracking-[-0.04em] text-foreground">
          {t("Ideas are everywhere.")} {" "}
          <span className="relative inline-block text-accent">
            {t("We turn the right ones into")}
            <svg
              aria-hidden
              className="absolute -bottom-1 left-0 h-[6px] w-full overflow-visible text-accent/35"
              preserveAspectRatio="none"
              viewBox="0 0 100 12"
            >
              <path
                d="M0,8 Q50,0 100,8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>
          </span>{" "}
          {t("something real.")}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          {t("At Nloga, we bring strategy, product design, technology, and creative thinking together to build digital products and brands that people can understand, use, trust, and remember.")}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-xl shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-accent/40 sm:w-auto"
          >
            {t("Start a project")}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/capabilities"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted sm:w-auto"
          >
            Explore our capabilities
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.value} className="flex flex-col items-center gap-1 bg-card px-4 py-5 text-center">
              <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                {s.value} {s.icon}
              </span>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 2. MISSION RIBBON ─────────── */

const RIBBON_PILLARS = [
  { icon: <Cpu className="h-5 w-5" />, title: "Modern Tech", desc: "Cutting-edge tools and frameworks powering your digital products." },
  { icon: <PenTool className="h-5 w-5" />, title: "Creative Design", desc: "Purposeful, beautiful interfaces that make the next step obvious." },
  { icon: <HeadphonesIcon className="h-5 w-5" />, title: "Reliable Support", desc: "Responsive, dedicated collaboration from brief to delivery." },
  { icon: <TrendingUp className="h-5 w-5" />, title: "Business Focused", desc: "Every decision answers to real outcomes, not aesthetic trends." },
];

function MissionRibbon() {
  return (
    <section className="relative w-full overflow-hidden bg-accent px-6 py-16 text-accent-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
        {/* headline */}
        <div className="shrink-0">
          <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent-foreground/60 uppercase">
            Core Studio Creed
          </span>
          <div className="mt-3 flex flex-wrap items-baseline gap-3">
            <span className="display-md text-accent-foreground">Build.</span>
            <span className="display-md text-accent-foreground/50">Design.</span>
            <span className="display-md text-accent-foreground">Enable.</span>
          </div>
        </div>

        {/* four-column pillars */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-4">
          {RIBBON_PILLARS.map((p) => (
            <div key={p.title} className="rounded-xl bg-white/10 p-5 backdrop-blur-md">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                {p.icon}
              </div>
              <span className="block font-display text-sm font-semibold text-accent-foreground">
                {p.title}
              </span>
              <p className="mt-1 text-xs leading-relaxed text-accent-foreground/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 3. SHOWCASE 4-BLOCK GRID ─────────── */

function ShowcaseGrid() {
  return (
    <section className="w-full bg-background px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
              Identity In Action
            </span>
            <h2 className="display-lg mt-3 text-foreground">
              Three Disciplines, One Precision Grid
            </h2>
          </div>
          <p className="max-w-md text-base text-muted-foreground">
            At Nloga, we visually merge design, strategy, and product to craft digital identities
            that only look effortless.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Manifesto card */}
          <div className="relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-md lg:p-12">
            <img
              src={IMAGE_PATHS.additional}
              alt="Nloga brand and creative work"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
            />
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                nloga<span className="text-accent">.</span>
              </span>
              <span className="rounded-full bg-muted px-3 py-1 font-display text-[11px] tracking-wider text-muted-foreground uppercase">
                Web Design / UX&UI
              </span>
            </div>
            <div className="relative my-10">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-6 -left-2 select-none font-display text-7xl font-black tracking-tighter text-muted/60"
                style={{ color: "var(--accent)", opacity: 0.07 }}
              >
                We.
              </span>
              <div className="relative z-10 flex flex-col leading-none">
                <span className="display-md text-foreground uppercase">BUILD</span>
                <span className="display-md text-foreground uppercase">DESIGN</span>
                <span className="display-md uppercase" style={{ color: "var(--accent)" }}>EMPOWER</span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-border px-5 py-3">
              <span className="font-display text-xs tracking-wider text-muted-foreground">
                ARCH.SPEC // CORE STUDIO REF
              </span>
              <Link to="/capabilities" className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline">
                View more <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Branding Design dark card */}
          <ShowcaseDarkCard
            overline="WE DESIGN"
            bigLabel="WE DES IGN."
            tag="Branding Design"
            accent="var(--creative)"
            image={IMAGE_PATHS.creativePics}
            linkTo="/ecosystem/creativepics-art"
            linkLabel="View project"
          />

          {/* Web Development card */}
          <ShowcaseDarkCard
            overline="WE BUILD"
            bigLabel="WE BUILD."
            tag="Web Development"
            accent="var(--forge)"
            image={IMAGE_PATHS.forgeware}
            linkTo="/ecosystem/forgeware"
            linkLabel="View project"
            dark
          />

          {/* Digital Strategy card */}
          <ShowcaseDarkCard
            overline="WE ENABLE"
            bigLabel="Digital Strategy"
            tag="Digital Strategy"
            accent="var(--learn)"
            image={IMAGE_PATHS.nowJustCreate}
            linkTo="/ecosystem/now-just-create"
            linkLabel="View project"
          />
        </div>
      </div>
    </section>
  );
}

function ShowcaseDarkCard({
  overline,
  bigLabel,
  tag,
  accent,
  image,
  linkTo,
  linkLabel,
  dark = false,
}: {
  overline: string;
  bigLabel: string;
  tag: string;
  accent: string;
  image: string;
  linkTo: string;
  linkLabel: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-2xl p-8 shadow-md transition-all hover:shadow-xl ${dark ? "bg-foreground text-background" : "border border-border bg-card"}`}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 transition-transform duration-500 group-hover:scale-105"
      />
      <div className={`pointer-events-none absolute inset-0 ${dark ? "bg-black/45" : "bg-white/65"}`} />
      {/* decorative shape */}
      <div
        className="pointer-events-none absolute -right-8 -bottom-8 h-48 w-48 rounded-full opacity-20 blur-2xl"
        style={{ background: accent }}
      />

      <div className="flex items-center justify-between">
        <span
          className="font-display text-[11px] font-bold tracking-[0.18em] uppercase"
          style={{ color: dark ? "rgba(255,255,255,0.5)" : "var(--muted-foreground)" }}
        >
          {overline}
        </span>
        <span
          className="rounded-full px-3 py-1 font-display text-[11px] tracking-wider uppercase"
          style={{
            background: dark ? "rgba(255,255,255,0.1)" : "var(--muted)",
            color: dark ? "rgba(255,255,255,0.7)" : "var(--muted-foreground)",
          }}
        >
          {tag}
        </span>
      </div>

      <div className="relative z-10 my-auto py-10">
        <span
          className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.9] tracking-[-0.04em] uppercase"
          style={{ color: dark ? "white" : "var(--foreground)" }}
        >
          {bigLabel}
        </span>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t pt-4" style={{ borderColor: dark ? "rgba(255,255,255,0.12)" : "var(--border)" }}>
        <span
          className="font-display text-xs uppercase tracking-wider"
          style={{ color: dark ? "rgba(255,255,255,0.4)" : "var(--muted-foreground)" }}
        >
          {tag}
        </span>
        <Link
          to={linkTo}
          className="inline-flex items-center gap-1 font-display text-xs font-semibold transition-all group-hover:gap-2"
          style={{ color: accent }}
        >
          {linkLabel} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

/* ─────────── 4. ENTITIES ─────────── */

function EntitiesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-muted/40 px-6 py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 radial-dots opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 font-display text-[11px] font-bold tracking-wider text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Integrated Architecture
            </span>
            <h2 className="display-lg mt-4 text-foreground">
              Three Directions.
              <br />
              <span className="text-accent">One Company.</span>
            </h2>
          </div>
          <p className="max-w-md text-base text-muted-foreground">
            Together, we create meaningful things that move people, businesses, and ideas forward
            with clarity, creativity, and precision.
          </p>
        </div>

        {/* connector */}
        <div aria-hidden className="relative mb-8 hidden h-10 w-full lg:block">
          <svg className="h-full w-full text-accent" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 40">
            <path
              d="M 120 20 C 280 20, 340 20, 500 20 C 660 20, 720 20, 880 20"
              stroke="currentColor"
              strokeDasharray="6 6"
              strokeWidth="2"
            />
            <circle cx="120" cy="20" r="6" fill="white" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="500" cy="20" r="6" fill="white" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="880" cy="20" r="6" fill="white" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {ENTITIES.map((e, i) => (
            <Reveal key={e.slug} delay={i * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                {/* top thumbnail strip */}
                <div
                  className="relative flex h-44 items-end overflow-hidden p-5"
                  style={{ background: e.accentVar }}
                >
                  <img
                    src={
                      e.slug === "forgeware"
                        ? IMAGE_PATHS.forgeware
                        : e.slug === "creativepics-art"
                          ? IMAGE_PATHS.creativePics
                          : IMAGE_PATHS.nowJustCreate
                    }
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-multiply"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/25" />
                  {/* decorative big letter */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-4 select-none font-display text-7xl font-black leading-none tracking-tighter text-white/10"
                  >
                    {i === 0 ? "FW" : i === 1 ? "CA" : "NJC"}
                  </span>
                  <div className="relative z-10 flex flex-col">
                    <span className="font-display text-[11px] font-bold tracking-[0.18em] text-white/60 uppercase">
                      {`0${i + 1}.LAB.V1`}
                    </span>
                    <span className="mt-1 font-display text-xl font-bold text-white leading-tight tracking-tight">
                      {e.name}
                    </span>
                  </div>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span
                      className="block font-display text-sm font-semibold"
                      style={{ color: e.accentVar }}
                    >
                      {e.line}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.intro}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.focus.slice(0, 3).map((f) => (
                        <span key={f} className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <Link
                      to="/ecosystem/$slug"
                      params={{ slug: e.slug }}
                      className="inline-flex items-center gap-1.5 font-display text-sm font-semibold transition-all group-hover:gap-2.5"
                      style={{ color: e.accentVar }}
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                    <span className="font-display text-xs tracking-wider text-muted-foreground uppercase">
                      {i === 0 ? "Build" : i === 1 ? "Design" : "Development"}
                    </span>
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

/* ─────────── 5. FEATURED WORK ─────────── */

function FeaturedWork() {
  const disciplines = ["All Projects", "Branding", "Design", "WebApp"];
  const [active, setActive] = useState(disciplines[0]);

  // Map our existing case studies to the new filter tabs
  const disciplineMap: Record<string, string> = {
    "Branding": "Brand & Creative",
    "Design": "UX/UI Design",
    "WebApp": "Product & Software",
  };

  const filtered =
    active === "All Projects"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.discipline === disciplineMap[active]);

  return (
    <section className="w-full bg-background px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
              One Line
            </span>
            <h2 className="display-lg mt-3 text-foreground">Projects in Every Delivery</h2>
          </div>
          {/* pill tabs */}
          <div className="inline-flex gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
            {disciplines.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setActive(d)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === d
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {filtered.map((c, idx) => {
            const thumbnailByDiscipline = {
              "Product & Software": IMAGE_PATHS.workFour,
              "Brand & Creative": IMAGE_PATHS.creativePics,
              "UX/UI Design": IMAGE_PATHS.workThree,
            } as const;
            const isBrandWork = c.discipline === "Brand & Creative";
            const accent = isBrandWork ? "var(--creative)" : idx === 2 ? "var(--learn)" : "var(--forge)";
            const thumbnail = thumbnailByDiscipline[c.discipline as keyof typeof thumbnailByDiscipline] ?? IMAGE_PATHS.workOne;
            return (
              <Link
                key={c.slug}
                to="/work/$slug"
                params={{ slug: c.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* thumbnail */}
                <div className="relative h-52 overflow-hidden" style={{ background: accent }}>
                  <img
                    src={thumbnail}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/10" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-4 -top-4 select-none font-display text-8xl font-black tracking-tighter text-white/10"
                  >
                    {c.title.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="absolute bottom-3 left-3 rounded-full bg-foreground/80 px-3 py-1 font-display text-[11px] tracking-wider text-background uppercase backdrop-blur-sm">
                    {c.discipline}
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.summary}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-display text-xs tracking-wider text-muted-foreground uppercase">
                      {c.discipline.split(" ")[0]}
                    </span>
                    <ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 6. MANIFESTO SPLIT ─────────── */

function ManifestoSplit() {
  return (
    <section className="w-full overflow-hidden bg-muted/40 px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-2xl bg-card shadow-xl lg:grid-cols-12">
        {/* LEFT */}
        <div className="flex flex-col justify-between p-8 lg:col-span-7 lg:p-16">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-bold tracking-tight text-foreground">
              nloga<span className="text-accent">.</span>
            </span>
            <span className="font-display text-xs tracking-wider text-muted-foreground uppercase">
              {/* Douala // Central Africa // Global Delivery */}
            </span>
          </div>

          <div className="my-10">
            <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
              The Integrated Model
            </span>
            <h3 className="display-md mt-3 text-foreground">
              Why assemble fragmented agencies when one multidisciplinary house does it all?
            </h3>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Bringing together strategy, design, and development under one roof means better
              communication and a team who understands you completely.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-5">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Users className="h-4 w-4 text-accent" />
              </div>
              <div>
                <span className="block font-display text-sm font-semibold text-foreground">
                  The Right Team
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  Do you want an integrated team to address your requirements?
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-5">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Briefcase className="h-4 w-4 text-accent" />
              </div>
              <div>
                <span className="block font-display text-sm font-semibold text-foreground">
                  Scalable Solutions
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  Do you want your project to be built right from the ground up?
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-accent p-8 text-accent-foreground lg:col-span-5 lg:p-14">
          <Network className="absolute -right-12 -bottom-12 h-72 w-72 text-white/8" />

          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-foreground text-accent">
              <Layers className="h-5 w-5" />
            </div>
            <span className="font-display text-xs tracking-wider text-accent-foreground/50 uppercase">
              NLOGA.V4 // ARCH
            </span>
          </div>

          <div className="relative z-10 my-10">
            <span className="display-xl block leading-none text-accent-foreground">360°</span>
            <span className="mt-2 block display-md text-accent-foreground/70">
              Execution Velocity
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-accent-foreground/80">
              From idea to impact — faster, smarter. Chicago to Douala, we get it done.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative z-10 inline-flex items-center justify-center gap-2 rounded-xl bg-accent-foreground px-6 py-3.5 text-sm font-semibold text-accent shadow-lg transition-all hover:bg-white hover:shadow-xl"
          >
            Schedule a free discovery call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 7. FAQ ─────────── */

const HOME_FAQS = [
  {
    q: "How do I book a free discovery call with your team?",
    a: "You can head to our contact page and submit your project brief. We review each submission personally and follow up within 48 hours to schedule a discovery call.",
  },
  {
    q: "Do I need a complete project specification before contacting Nloga?",
    a: "No. You can come with an idea, a problem, a rough concept, an existing product, or even a situation you are trying to understand. The first conversation is about understanding where you are and what you actually need.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Nloga can work with clients and partners beyond Cameroon through remote collaboration.",
  },
  {
    q: "Which services does Nloga provide?",
    a: "We offer product and software development, UX/UI design, brand and creative design, and training. Our entities — Forgeware, CreativePics Art, and Now Just Create — can be engaged individually or together.",
  },
];

function FAQSection() {
  return (
    <section className="w-full bg-background px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
            Clarity &amp; Protocol
          </span>
          <h2 className="display-lg mt-3 text-foreground">Frequently Asked Questions</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Clear answers about our methodology, cross-disciplinary engagements, and team
            coordination.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {HOME_FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-6 text-left font-display text-base tracking-tight hover:no-underline lg:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ─────────── 8. FINAL CTA ─────────── */

function FinalCTA() {
  return (
    <section className="w-full bg-muted/40 px-6 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-foreground p-10 text-background shadow-2xl lg:p-20">
        {/* glow */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-16 h-64 w-64 rounded-full bg-accent/10 blur-2xl" />

        <div className="relative z-10 flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
          {/* left */}
          <div className="max-w-2xl">
            {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-display text-[11px] font-bold tracking-[0.22em] text-background/60 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get started
            </span> */}
            <h2 className="display-lg mt-6 text-background">
              Have an ambitious idea?
              <br />
              <span className="text-accent">Let's build it properly.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-background/60">
              Nloga is Africa's precision studio for strategy, design, and code. Whether an MVP or
              a full rebrand — we ship products that your audience will trust and remember.
            </p>

            {/* social proof row */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-background/70">Business-ready in weeks, not quarters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Star className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm text-background/70">Art &amp; tech under one house</span>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex w-full flex-col gap-3 lg:w-auto lg:shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-10 py-4 text-sm font-semibold text-accent-foreground shadow-xl shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-accent/40"
            >
              Start a project
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-10 py-4 text-sm font-medium text-background/80 transition-colors hover:bg-white/10"
            >
              Talk to us first
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}