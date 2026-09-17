import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { ARTICLES } from "@/lib/site-data";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Nloga" }, { name: "robots", content: "noindex" }] };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — Nloga Insights` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All insights
        </Link>
      </div>

      <article className="mx-auto max-w-3xl px-6 pt-20 pb-24 lg:pt-28">
        <Reveal>
          <p className="eyebrow">{article.topic}</p>
          <h1 className="display-lg mt-8 text-foreground">{article.title}</h1>
          <div className="rule-brand mt-10" />
          <div className="mt-10 space-y-6">
            {article.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </article>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="eyebrow">Keep reading</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {ARTICLES.filter((a) => a.slug !== article.slug).map((a) => (
              <Link
                key={a.slug}
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {a.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
