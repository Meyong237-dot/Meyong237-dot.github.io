import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code,
  Brush,
  GraduationCap,
  Lightbulb,
  Eye,
  Gem,
  Target,
  BookOpen,
  Shield,
  MapPin,
  Globe,
  Star,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ENTITIES, MISSION_PILLARS, VALUES } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nloga — Build. Design. Enable." },
      {
        name: "description",
        content:
          "Nloga is a multidisciplinary company combining technology, design, strategy, creativity and learning to build useful, human-centered solutions.",
      },
      { property: "og:title", content: "About Nloga" },
      {
        property: "og:description",
        content: "Our mission, vision and values — Build. Design. Enable.",
      },
    ],
  }),
  component: About,
});

/* ─── Team stats ─── */
const TEAM_STATS = [
  { name: "Nloga Christ", role: "Founder & Creative Director", label: "Strategy & Vision" },
  { name: "Emeline Nloga", role: "HR Manager", label: "Human Ressource Manager" },
  { name: "Ongou Bolo", role: "Professional Interns", label: "Novice" },
  { name: "Meyong Yves", role: "Professional Interns", label: "Novice" },
];

const ENTITY_IMAGES: Record<string, string> = {
  forgeware: "/images/forgeware.jpg",
  "creativepics-art": "/images/creativepics-art.jpg",
  "now-just-create": "/images/now-just-create.jpg",
};

const ABOUT_FAQS = [
  {
    q: "How do I book a free consultation with your team?",
    a: "Head to our contact page and submit a brief. We review every submission personally and follow up within 48 hours.",
  },
  {
    q: "Do you work with clients outside of Cameroon?",
    a: "Yes. Nloga works remotely with organisations beyond Cameroon. Our vision is not limited to one market.",
  },
  {
    q: "Can you handle both design and development?",
    a: "Yes. One of the core advantages of the Nloga model is the direct connection between product design and software engineering — they share the same desk.",
  },
  {
    q: "Which services does Nloga provide?",
    a: "Product & software development, UX/UI design, brand & creative design, and training programmes — through our three entities: Forgeware, CreativePics Art, and Now Just Create.",
  },
];

const MISSION_PILLAR_ICONS: Record<string, React.ReactNode> = {
  Technology: <Code className="h-4 w-4" />,
  Design: <Brush className="h-4 w-4" />,
  Strategy: <Target className="h-4 w-4" />,
  Creativity: <Lightbulb className="h-4 w-4" />,
  Learning: <BookOpen className="h-4 w-4" />,
};

const VALUE_ICONS: Record<string, React.ReactNode> = {
  Curiosity: <Lightbulb className="h-5 w-5" />,
  Clarity: <Eye className="h-5 w-5" />,
  Craft: <Gem className="h-5 w-5" />,
  Purpose: <Target className="h-5 w-5" />,
  "Continuous Learning": <BookOpen className="h-5 w-5" />,
  Responsibility: <Shield className="h-5 w-5" />,
};

function About() {
  return (
    <>
      <AboutHero />
      <TriadArchitecture />
      <StudioSplit />
      <MissionPillarsFull />
      <VisionQuote />
      <CoreValues />
      <CameroonRoots />
      <ReadyCTA />
      <AboutFAQ />
      <FinalCTADark />
    </>
  );
}

/* ─────────── 1. HERO ─────────── */
function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background px-6 pt-12 pb-14 lg:pt-16 lg:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_380px] lg:items-stretch">
        <div>
        {/* eyebrow */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
            About &amp; our story
          </span>
        </div>

        {/* headline */}
        <h1 className="display-lg mt-4 max-w-4xl text-foreground">
          Think deeply.{" "}
          <span className="text-accent">Design intentionally.</span>
          <br />
          Build properly.
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          At Nloga, we bring strategy, product design, technology, and creative solutions tailored to
          your needs. Our creative strategy, design and technology help brands and people communicate
          meaningfully, building businesses.
        </p>

        {/* Team stat cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_STATS.map((m, i) => (
            <Reveal key={m.name} delay={i * 80} className="h-full">
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center rounded-xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <span className="block font-display text-sm font-bold tracking-tight text-foreground">
                  {m.name}
                </span>
                <span className="mt-1 block whitespace-nowrap text-[10px] leading-4 tracking-tight text-muted-foreground">
                  {m.role}
                </span>
                <span
                  className="mt-6 inline-flex h-6 shrink-0 items-center whitespace-nowrap rounded-full px-2.5 font-display text-[10px] font-bold tracking-wider uppercase"
                  style={{ background: "var(--accent)", color: "white", opacity: 0.9 }}
                >
                  {m.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        </div>
        <Reveal delay={120}>
          <div className="group relative h-full min-h-[360px] overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/work-2.jpg"
              alt="Selected Nloga brand work"
              className="h-full w-full object-cover opacity-85 transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/40" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
/* ─────────── 2. TRIAD ARCHITECTURE ─────────── */
function TriadArchitecture() {
  const entityIcons = [
    <Code className="h-5 w-5 text-white" />,
    <Brush className="h-5 w-5 text-white" />,
    <GraduationCap className="h-5 w-5 text-white" />,
  ];

  return (
    <section className="w-full bg-muted/40 px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
              Our structure
            </span>
            <h2 className="display-lg mt-3 text-foreground">The Triad Architecture</h2>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-accent hover:underline"
            >
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <p className="mb-10 max-w-2xl text-base text-muted-foreground">
          We blend technology and design to build digital products, spaces and experiences that serve
          people and businesses. Our three entities are organised yet interlocked.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {ENTITIES.map((e, i) => (
            <Reveal key={e.slug} delay={i * 90}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                {/* colored header */}
                <div
                  className="relative flex h-40 items-end overflow-hidden p-6"
                  style={{ background: e.accentVar }}
                >
                  <img
                    src={ENTITY_IMAGES[e.slug]}
                    alt={`${e.name} visual identity`}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-70"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/25 transition-colors duration-700 group-hover:bg-black/10" />
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-black/20">
                    {entityIcons[i]}
                  </div>
                  <div>
                    <span className="font-display text-[10px] font-bold tracking-widest text-white/50 uppercase">
                      {`0${i + 1} // ENTITY`}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold leading-tight tracking-tight text-white">
                      {e.name}
                    </h3>
                  </div>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-6">
                  <span
                    className="mb-3 block font-display text-sm font-semibold"
                    style={{ color: e.accentVar }}
                  >
                    {e.line}
                  </span>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{e.intro}</p>
                  <Link
                    to="/ecosystem/$slug"
                    params={{ slug: e.slug }}
                    className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold transition-all group-hover:gap-2.5"
                    style={{ color: e.accentVar }}
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 3. STUDIO SPLIT ─────────── */
function StudioSplit() {
  const tags = ["Research", "Learn", "Build"];

  return (
    <section className="w-full overflow-hidden bg-background px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* left */}
          <Reveal>
            <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
              Our approach
            </span>
            <h2 className="display-md mt-4 text-foreground">
              From Studio Exploration to Classrooms and Production Cloud
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We map deeply through all our research, applying learning and creative solutions
              into real-world results. From concept to blueprint, prototype to launch — each idea
              is tested across disciplines and learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-muted px-4 py-2 font-display text-xs font-semibold text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {/* right — dark photo panel */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl bg-foreground p-10 min-h-[320px] flex flex-col justify-between shadow-2xl">
              {/* decorative shapes */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 left-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />

              <div className="relative z-10 flex items-center gap-3">
                <span className="font-display text-sm font-bold tracking-tight text-background/80">
                  nloga<span className="text-accent">.</span>
                </span>
                <span className="rounded-full bg-accent px-3 py-1 font-display text-[10px] font-bold tracking-widest text-white uppercase">
                  Studio
                </span>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="mb-6 flex gap-3">
                  {["Strategy", "Learning"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1.5 font-display text-xs font-medium text-background/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-display text-2xl font-bold leading-tight tracking-tight text-background">
                  Consulting at the intersection of all disciplines.
                </p>
                <p className="mt-3 text-sm text-background/60">
                  Business strategy, design, technology and learning working as one.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 4. MISSION PILLARS FULL ─────────── */
function MissionPillarsFull() {
  // Add a 6th pillar to make 2-col × 3-row or 3-col × 2-row grid
  const pillars = [
    ...MISSION_PILLARS,
    { key: "Strategy", verb: "to guide your direction" },
  ];

  return (
    <section className="w-full border-y border-border bg-muted/30 px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
              Our mission
            </span>
            <h2 className="display-lg mt-3 text-foreground">Build. Design. Enable.</h2>
          </div>
          <p className="max-w-md text-base text-muted-foreground">
            Six disciplines that work in concert — each one purposeful, each one connected.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={`${p.key}-${i}`} delay={i * 70}>
              <div className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/30 hover:shadow-lg">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {MISSION_PILLAR_ICONS[p.key] ?? <Target className="h-4 w-4" />}
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                  {p.key} {p.verb}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We help you {p.verb.replace("to ", "")} — from first principles to final delivery.
                </p>
                <div className="mt-6 flex items-center gap-1.5 font-display text-xs font-semibold text-accent">
                  <ArrowRight className="h-3.5 w-3.5" />
                  Explore this area
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 5. VISION QUOTE ─────────── */
function VisionQuote() {
  const team = TEAM_STATS;

  return (
    <section className="w-full bg-background px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
          Our vision
        </span>

        <div className="mt-8 overflow-hidden rounded-2xl bg-foreground p-10 shadow-2xl lg:p-16">
          <div className="relative">
            {/* big quote mark */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-4 -left-2 select-none font-display text-[8rem] leading-none text-white/5 font-black"
            >
              "
            </span>
            <p className="relative z-10 font-display text-2xl font-bold leading-snug tracking-tight text-background lg:text-3xl">
              "To become a trusted force for building useful, human-centered solutions from Africa
              and beyond."
            </p>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center">
            {/* team grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {team.map((m) => (
                <div key={m.name} className="flex flex-col gap-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-white">
                    {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <span className="block font-display text-xs font-bold text-background/80">
                      {m.name.split(" ")[0]}
                    </span>
                    <span className="block text-[10px] text-background/40">{m.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="shrink-0">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-display text-xs font-medium text-background/60">
                Nloga leadership team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 6. CORE VALUES ─────────── */
function CoreValues() {
  return (
    <section className="w-full bg-muted/40 px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
            Our principles
          </span>
          <h2 className="display-lg mt-3 text-foreground">Core Values</h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Six things we refuse to treat as optional. These are the things that guide us — our
            team, our process, and every decision we make.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.name} delay={i * 70}>
              <div className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/30 hover:shadow-lg">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {VALUE_ICONS[v.name] ?? <Star className="h-5 w-5" />}
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                  {v.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {v.note}
                </p>
                <div className="mt-6 flex items-center gap-1.5 font-display text-xs font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowRight className="h-3.5 w-3.5" />
                  Guiding principle
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 7. CAMEROON ROOTS ─────────── */
function CameroonRoots() {
  const presence = [
    { city: "Douala", country: "Cameroon", role: "HQ & Studio", active: true },
    { city: "Yaoundé", country: "Cameroon", role: "Operations", active: false },
    { city: "Remote", country: "Global", role: "Client Delivery", active: false },
    { city: "New York", country: "USA", role: "Future expansion", active: false },
  ];

  return (
    <section className="w-full overflow-hidden bg-background px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* left */}
          <Reveal>
            <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
              Our roots
            </span>
            <h2 className="display-lg mt-4 text-foreground">
              Cameroon Roots.
              <br />
              <span className="text-accent">Global Standards.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Built in Africa for the world. Our work reflects local insight and international
              engineering discipline — shipping products that compete globally from Douala.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2">
                <Globe className="h-4 w-4 text-accent" />
                <span className="font-display text-xs font-semibold text-foreground">Global delivery</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-display text-xs font-semibold text-foreground">Douala, CM</span>
              </div>
            </div>
          </Reveal>

          {/* right — presence list */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md">
              <div className="mb-5 flex items-center gap-2">
                <span className="font-display text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  Presence
                </span>
              </div>
              <div className="space-y-3">
                {presence.map((p) => (
                  <div
                    key={p.city}
                    className="flex items-center justify-between rounded-xl border border-border bg-muted/50 px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ background: p.active ? "var(--accent)" : "var(--muted-foreground)" }}
                      />
                      <div>
                        <span className="block font-display text-sm font-bold text-foreground">
                          {p.city}
                        </span>
                        <span className="text-xs text-muted-foreground">{p.country}</span>
                      </div>
                    </div>
                    <span className="rounded-full bg-background px-3 py-1 font-display text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
                      {p.role}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-border pt-4 text-center">
                <span className="font-display text-xs text-muted-foreground">
                  Local insight · Global reach · Online delivery
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 8. READY CTA ─────────── */
function ReadyCTA() {
  return (
    <section className="w-full bg-accent px-6 py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent-foreground/60 uppercase">
            Let's work together
          </span>
          <h2 className="display-lg mt-3 text-accent-foreground">
            Ready to build something real together?
          </h2>
          <p className="mt-4 text-base text-accent-foreground/80">
            Tell us what you are trying to make real — we read every message carefully before we reply.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-foreground px-8 py-4 text-sm font-semibold text-accent shadow-lg transition-all hover:bg-white"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent-foreground/20 bg-accent-foreground/10 px-8 py-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-foreground/20"
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 9. FAQ ─────────── */
function AboutFAQ() {
  return (
    <section className="w-full bg-background px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="font-display text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
            Questions
          </span>
          <h2 className="display-lg mt-3 text-foreground">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {ABOUT_FAQS.map((item, i) => (
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

/* ─────────── 10. FINAL CTA DARK ─────────── */
function FinalCTADark() {
  return (
    <section className="w-full bg-muted/40 px-6 py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-foreground p-10 text-background shadow-2xl lg:p-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-16 h-64 w-64 rounded-full bg-accent/10 blur-2xl" />

        <div className="relative z-10 flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-display text-[11px] font-bold tracking-[0.22em] text-background/50 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get started
            </span>
            <h2 className="display-lg mt-6 text-background">
              Have an ambitious idea?
              <br />
              <span className="text-accent">Let's build it properly.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-background/60">
              Business strategy in development, technology &amp; design in production. Start your
              project today — it's always the right time to build something that matters.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-background/50">
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-accent" /> Business Design Studio
              </span>
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-accent" /> Art &amp; Tech under one house
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 lg:w-auto lg:shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-10 py-4 text-sm font-semibold text-accent-foreground shadow-xl shadow-accent/25 transition-all hover:bg-accent/90"
            >
              Start a project <ArrowRight className="h-5 w-5" />
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
