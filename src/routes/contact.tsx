import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { submitEnquiry, contactSchema } from "@/lib/contact.functions";
import { BUDGET_OPTIONS, SERVICE_OPTIONS, TIMELINE_OPTIONS } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a project — Nloga" },
      {
        name: "description",
        content:
          "Tell Nloga about your project: product and software, UX/UI design, brand and creative, training or digital strategy.",
      },
      { property: "og:title", content: "Start a project with Nloga" },
      {
        property: "og:description",
        content: "Send a project enquiry and we will review the details before getting back to you.",
      },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground hover:border-accent/50 hover:shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20";

function Contact() {
  const send = useServerFn(submitEnquiry);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      service_type: String(form.get("service_type") ?? ""),
      project_description: String(form.get("project_description") ?? ""),
      budget_range: String(form.get("budget_range") ?? ""),
      timeline: String(form.get("timeline") ?? ""),
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }

    setStatus("sending");
    try {
      await send({ data: parsed.data });
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("idle");
      setError("Your enquiry could not be sent. Please try again.");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a project."
        lede="Tell us what you are trying to build, change or learn. The more specific you are, the more useful our first reply will be."
        compact
      />

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
          {status === "done" ? (
            <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-xl lg:p-14">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="h-6 w-6" />
              </span>
              <p className="mt-8 font-display text-2xl leading-snug tracking-tight text-foreground">
                Thank you. We've received your message and will review your project details before
                getting back to you.
              </p>
            </div>
          ) : (
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="relative space-y-8 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl shadow-foreground/5 sm:p-8 lg:p-12"
                noValidate
              >
                <div className="border-b border-border pb-8">
                  <p className="eyebrow text-accent">Project intake</p>
                  <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground">
                    A clear brief makes a better start.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    Share the context, constraints, and ambition behind your project. We will use it to prepare a more useful first conversation.
                  </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow">
                      Full Name
                    </label>
                    <input id="name" name="name" required maxLength={100} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="eyebrow">
                    Company/Organization
                  </label>
                  <input id="company" name="company" maxLength={150} className={fieldClass} />
                </div>

                <div>
                  <label htmlFor="service_type" className="eyebrow">
                    What do you need help with?
                  </label>
                  <select id="service_type" name="service_type" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select an option
                    </option>
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="project_description" className="eyebrow">
                    Project description
                  </label>
                  <textarea
                    id="project_description"
                    name="project_description"
                    rows={7}
                    required
                    maxLength={3000}
                    className={fieldClass}
                  />
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="budget_range" className="eyebrow">
                      Budget range
                    </label>
                    <select id="budget_range" name="budget_range" required defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select an option
                      </option>
                      {BUDGET_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="eyebrow">
                      Timeline
                    </label>
                    <select id="timeline" name="timeline" required defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select an option
                      </option>
                      {TIMELINE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:shadow-xl disabled:cursor-wait disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send project enquiry"}
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      <FAQAccordion />
    </>
  );
}
