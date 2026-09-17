import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { useLanguage } from "@/components/site/LanguageProvider";
import { ARTICLES } from "@/lib/site-data";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Nloga" },
      { name: "description", content: "Writing from the Nloga team on product, design and learning." },
      { property: "og:title", content: "Insights — Nloga" },
      {
        property: "og:description",
        content: "Writing from the Nloga team on product, design and learning.",
      },
    ],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  const { t } = useLanguage();

  return (
    <>
      <section className="w-full border-b border-border bg-background px-6 pt-6 pb-20 lg:px-10 lg:pt-12 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_420px] lg:items-stretch">
          <Reveal>
            <div className="flex h-full min-h-[320px] flex-col justify-center">
              <p className="eyebrow">{t("Insights")}</p>
              <h1 className="display-lg mt-6 max-w-4xl text-foreground lg:text-[4.5rem]">
                {t("Thinking, written down.")}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("Notes on product, design, brand and learning. The entries below are placeholders.")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="group relative h-full min-h-[320px] overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/work-1.jpg"
                alt="Selected Nloga work"
                className="h-full w-full object-cover opacity-85 transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/40" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-0 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={i * 60}>
              <Link
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="group flex h-full flex-col justify-between bg-background p-10 transition-colors hover:bg-card lg:p-12"
              >
                <div>
                  <span className="eyebrow">{a.topic}</span>
                  <h2 className="mt-6 font-display text-2xl leading-tight tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {a.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                </div>
                <span className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Read <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
