import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CAPABILITIES, ENTITIES, NAV, TAGLINE } from "@/lib/site-data";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        {/* Main statement */}
        <div className="max-w-2xl">
          <img src="/images/nloga-logo.jpg" alt="Nloga" className="h-10 w-auto object-contain" />
          <p className="mt-6 font-display text-2xl leading-snug tracking-tight text-foreground lg:text-3xl">
            {t("Building digital products and brands from strategy through execution.")}
          </p>
        </div>

        {/* Columns */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="eyebrow">{t("Navigate")}</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">{t("Capabilities")}</h3>
            <ul className="mt-5 space-y-3">
              {CAPABILITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/capabilities/$slug"
                    params={{ slug: c.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">{t("Ecosystem")}</h3>
            <ul className="mt-5 space-y-3">
              {ENTITIES.map((e) => (
                <li key={e.slug}>
                  <Link
                    to="/ecosystem/$slug"
                    params={{ slug: e.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">{t("Contact")}</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>www.nloga.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>680643244/693547773</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>Cameroon</span>
              </li>
            </ul>

            <h3 className="eyebrow mt-8">{t("Social")}</h3>
            <ul className="mt-5 flex items-center gap-3">
              <li>
                {/* TODO: replace # with real LinkedIn URL */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                </a>
              </li>
              <li>
                {/* TODO: replace # with real Facebook URL */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Facebook className="h-4 w-4" aria-hidden />
                </a>
              </li>
              <li>
                {/* TODO: replace # with real Instagram URL */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing tagline */}
        <div className="mt-16 border-t border-border pt-10">
          <p className="font-display text-lg tracking-tight text-foreground lg:text-xl">
            {t(TAGLINE)}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nloga. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {/* TODO: routes /privacy and /terms to be created */}
            <a href="#" className="transition-colors hover:text-foreground">
              {t("Privacy Policy")}
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              {t("Terms & Conditions")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}