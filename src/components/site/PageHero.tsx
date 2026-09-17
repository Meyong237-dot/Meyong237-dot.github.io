import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { useLanguage } from "./LanguageProvider";

export function PageHero({
  eyebrow,
  title,
  lede,
  compact = false,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  compact?: boolean;
  children?: ReactNode;
}) {
  const { t } = useLanguage();

  return (
    <section
      className={`mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24 ${
        compact ? "pt-6 lg:pt-12" : "pt-20 lg:pt-32"
      }`}
    >
      <Reveal>
        <p className="eyebrow">{t(eyebrow)}</p>
        <h1 className="display-lg mt-8 max-w-4xl text-foreground">{t(title)}</h1>
        {lede && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t(lede)}</p>
        )}
        {children}
      </Reveal>
    </section>
  );
}
