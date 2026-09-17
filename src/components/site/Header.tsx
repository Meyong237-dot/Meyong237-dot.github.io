import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site-data";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/images/Nloga%20Logo%201.png" alt="Nloga" className="h-9 w-auto object-contain" />
          <span className="sr-only">Nloga</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative inline-flex items-center rounded-full px-3 py-2 text-sm text-muted-foreground transition-all duration-300 after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-accent after:transition-all after:duration-300 hover:-translate-y-0.5 hover:bg-accent/10 hover:text-accent hover:after:w-1/2 data-[status=active]:bg-foreground data-[status=active]:text-background data-[status=active]:shadow-md data-[status=active]:after:hidden"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-2 text-xs font-medium tracking-[0.18em]">
            {(["EN", "FR"] as const).map((option, index) => (
              <span key={option} className="flex items-center gap-2">
                {index > 0 && <span className="text-border">|</span>}
                <button
                  type="button"
                  aria-pressed={language === option}
                  onClick={() => setLanguage(option)}
                  className={`transition-colors ${
                    language === option
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {option}
                </button>
              </span>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent"
          >
            {t("Start a project")}
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-border bg-background px-6 py-10 lg:hidden">
          <nav className="flex flex-col gap-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="display-md rounded-2xl px-4 py-2 text-foreground transition-all duration-300 hover:translate-x-1 hover:bg-accent/10 hover:text-accent data-[status=active]:bg-foreground data-[status=active]:text-background"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex items-center gap-3 text-xs font-medium tracking-[0.18em]">
            <span className="text-muted-foreground">{language === "FR" ? "LANGUE" : "LANGUAGE"}</span>
            {(["EN", "FR"] as const).map((option, index) => (
              <span key={option} className="flex items-center gap-3">
                {index > 0 && <span className="text-border">|</span>}
                <button
                  type="button"
                  aria-pressed={language === option}
                  onClick={() => setLanguage(option)}
                  className={`transition-colors ${
                    language === option
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {option}
                </button>
              </span>
            ))}
          </div>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
          >
            {t("Start a project")}
          </Link>
        </div>
      )}
    </header>
  );
}
