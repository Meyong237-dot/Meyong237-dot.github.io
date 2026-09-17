import { Link } from "@tanstack/react-router";

export function CTABanner({
  title = "Have an idea worth building properly?",
  body = "Tell us what you are trying to make real. We will read it carefully before we reply.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-border">
      <div className="grid-texture">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <div className="rule-brand" />
            <h2 className="display-lg mt-8 text-foreground">{title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{body}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-foreground"
              >
                Start a project
              </Link>
              <Link
                to="/capabilities"
                className="inline-flex items-center rounded-full border border-foreground px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Explore our capabilities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
