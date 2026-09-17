import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { CAPABILITIES } from "@/lib/site-data";

export const Route = createFileRoute("/capabilities/$slug")({
  loader: ({ params }) => {
    const capability = CAPABILITIES.find((c) => c.slug === params.slug);
    if (!capability) throw notFound();
    return { capability };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Nloga" }, { name: "robots", content: "noindex" }] };
    }
    const { capability } = loaderData;
    return {
      meta: [
        { title: `${capability.title} — Nloga` },
        { name: "description", content: capability.intro },
        { property: "og:title", content: `${capability.title} — Nloga` },
        { property: "og:description", content: capability.intro },
      ],
    };
  },
  component: CapabilityDetail,
});

function CapabilityDetail() {
  const { capability } = Route.useLoaderData();

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
        <Link
          to="/capabilities"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All capabilities
        </Link>
      </div>

      <PageHero eyebrow="Capability" title={capability.title} lede={capability.intro} />

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32">
          <Reveal>
            <p className="eyebrow">What we offer</p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="divide-y divide-border border-y border-border">
              {capability.offer.map((item) => (
                <li key={item} className="py-5 font-display text-lg tracking-tight text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="display-md mt-6 max-w-2xl text-foreground">
            Four steps, in this order, every time.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capability.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 70}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <span className="font-display text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-6 font-display text-xl tracking-tight text-foreground">{p.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="eyebrow">Other capabilities</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {CAPABILITIES.filter((c) => c.slug !== capability.slug).map((c) => (
              <Link
                key={c.slug}
                to="/capabilities/$slug"
                params={{ slug: c.slug }}
                className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
