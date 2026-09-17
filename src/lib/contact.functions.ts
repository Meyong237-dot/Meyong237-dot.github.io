import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { BUDGET_OPTIONS, SERVICE_OPTIONS, TIMELINE_OPTIONS } from "@/lib/site-data";

export const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your full name" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service_type: z.enum(SERVICE_OPTIONS as [string, ...string[]]),
  project_description: z
    .string()
    .trim()
    .min(10, { message: "Please describe your project in a little more detail" })
    .max(3000),
  budget_range: z.enum(BUDGET_OPTIONS as [string, ...string[]]),
  timeline: z.enum(TIMELINE_OPTIONS as [string, ...string[]]),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"]!;
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;

    const supabase = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company ? data.company : null,
      service_type: data.service_type,
      project_description: data.project_description,
      budget_range: data.budget_range,
      timeline: data.timeline,
    });

    if (error) throw new Error("Your enquiry could not be sent. Please try again.");

    return { ok: true as const };
  });
