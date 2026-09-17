import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { CASE_STUDIES } from "@/lib/site-data";

const SECTIONS = [
  { title: "Context", body: "Placeholder. The background to the project will be described here." },
  { title: "Challenge", body: "Placeholder. The problem the project had to solve will be described here." },
  { title: "Approach", body: "Placeholder. The work carried out and the decisions behind it will be described here." },
  { title: "Outcome", body: "Placeholder. What the project produced will be described here." },
];

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = CASE_STUDIES.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Nloga" }, { name: "robots", content: "noindex" }] };
    }
    const { study } = loaderData;
    return {
      meta: [
        { title: `${study.title} — Nloga Work` },
        { name: "description", content: study.summary },
        { property: "og:title", content: `${study.title} — Nloga` },
        { property: "og:description", content: study.summary },
      ],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { study } = Route.useLoaderData();

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>
      </div>

      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 lg:pt-28">
        <Reveal>
          <p className="eyebrow">{study.discipline}</p>
          <h1 className="display-lg mt-8 text-foreground">{study.title}</h1>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{study.summary}</p>
        </Reveal>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:py-28">
          <div className="grid-texture aspect-[16/9] w-full rounded-3xl border border-border" aria-hidden />
          <div className="mt-16 space-y-14">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="rule-brand" />
                <h2 className="display-md mt-6 text-foreground">{s.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <p className="eyebrow">More work</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {CASE_STUDIES.filter((c) => c.slug !== study.slug).map((c) => (
            <Link
              key={c.slug}
              to="/work/$slug"
              params={{ slug: c.slug }}
              className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {c.title}
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
