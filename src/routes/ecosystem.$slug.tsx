import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { ENTITIES } from "@/lib/site-data";

const ENTITY_IMAGES: Record<string, string> = {
  forgeware: "/images/forgeware.jpg",
  "creativepics-art": "/images/creativepics-art.jpg",
  "now-just-create": "/images/now-just-create.jpg",
};

export const Route = createFileRoute("/ecosystem/$slug")({
  loader: ({ params }) => {
    const entity = ENTITIES.find((e) => e.slug === params.slug);
    if (!entity) throw notFound();
    return { entity };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Nloga" }, { name: "robots", content: "noindex" }] };
    }
    const { entity } = loaderData;
    return {
      meta: [
        { title: `${entity.name} — Nloga Ecosystem` },
        { name: "description", content: entity.intro },
        { property: "og:title", content: `${entity.name} — Nloga` },
        { property: "og:description", content: entity.intro },
      ],
    };
  },
  component: EntityDetail,
});

function EntityDetail() {
  const { entity } = Route.useLoaderData();
  const accent = entity.accentVar;

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4 lg:px-10">
        <Link
          to="/ecosystem"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Ecosystem
        </Link>
      </div>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-20 lg:grid-cols-[1fr_380px] lg:items-center lg:px-10 lg:pt-24 lg:pb-28">
          <Reveal>
            <span className="font-display text-xs tracking-[0.22em] uppercase" style={{ color: accent }}>
              {entity.role}
            </span>
            <h1 className="display-lg mt-8 max-w-3xl text-foreground">{entity.name}</h1>
            <p className="mt-6 font-display text-2xl tracking-tight" style={{ color: accent }}>
              {entity.line}
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{entity.intro}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl lg:aspect-square" style={{ background: accent }}>
              <img
                src={ENTITY_IMAGES[entity.slug]}
                alt={`${entity.name} visual identity`}
                className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/35" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32">
          <Reveal>
            <p className="eyebrow">Focus</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full items-center">
              <ul className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {entity.focus.map((f, index) => (
                <Reveal key={f} delay={140 + index * 90}>
                  <li className="group flex min-h-44 h-full items-center justify-center rounded-2xl border border-border bg-card p-7 text-center font-display text-lg tracking-tight text-foreground shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl">
                    {f}
                  </li>
                </Reveal>
              ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <p className="eyebrow">Elsewhere in the ecosystem</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ENTITIES.filter((e) => e.slug !== entity.slug).map((e) => (
            <Link
              key={e.slug}
              to="/ecosystem/$slug"
              params={{ slug: e.slug }}
              className="group flex items-center justify-between rounded-3xl border border-border bg-card p-8 transition-colors hover:border-accent"
            >
              <span>
                <span className="font-display text-xl tracking-tight text-foreground">{e.name}</span>
                <span className="mt-2 block text-sm text-muted-foreground">{e.line}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
