# Nloga Brand Foundation

Build a production-quality multi-page marketing website for NLOGA, a real Cameroonian multidisciplinary company (digital products, UX/UI design, brand/creative, training). Use React + Tailwind, Supabase backend (contact form only, no auth). Use the attached flyer images as brand/visual reference.

PAGES (build all): / Home, /about, /capabilities (+4 subpages: product-software, ux-ui-design, brand-creative, training), /work (+case study template), /ecosystem (+3 subpages: forgeware, creativepics-art, now-just-create), /insights (+article template), /contact. Shared: Header/Nav, Footer, FAQ accordion, final CTA banner.

CONTENT RULES: Use the exact copy pasted below for headlines/CTAs — do not invent testimonials, stats, case studies, or client names. Where content says "placeholder" or "example," use it as-is, don't expand it.

KEY COPY TO USE VERBATIM:

Nav: Home, About, Capabilities, Work, Ecosystem, Insights, Contact

Hero headline: "Ideas are everywhere. We turn the right ones into something real."

Hero sub: "At Nloga, we bring strategy, product design, technology, and creative thinking together to build digital products and brands that people can understand, use, trust, and remember."

Primary CTA: "Start a project" / Secondary: "Explore our capabilities"

3 entities: FORGEWARE ("Digital products & software" — technology/product-building), CREATIVEPICS ART ("Brand, visual & creative design"), NOW JUST CREATE ("Learning, training & development")

Mission: "Build. Design. Enable." — combining Technology to build, Design to simplify, Strategy to guide, Creativity to differentiate, Learning to enable.

Vision: "To become a trusted force for building useful, human-centered solutions from Africa and beyond."

Values: Curiosity, Clarity, Craft, Purpose, Continuous Learning, Responsibility

Footer tagline: "Think deeply. Design intentionally. Build properly."

Contact form fields: Full Name, Email, Company/Organization, "What do you need help with?" (dropdown: Product/Software, UX/UI Design, Brand/Creative, Training, Digital Strategy, Other), Project description (textarea), Budget range (dropdown: Not sure yet / Under 500,000 FCFA / 500,000–1,500,000 FCFA / 1,500,000–3,000,000 FCFA / 3,000,000+ FCFA / Let's discuss), Timeline (dropdown: ASAP / Within 1 month / 1–3 months / 3–6 months / Flexible). Submit button: "Send project enquiry". Success message: "Thank you. We've received your message and will review your project details before getting back to you."

VOICE & FEELING (important — this is what the site should feel like, not just look like): NLOGA is confident, not corporate. It should feel like a company that thinks deeply before it moves, not one performing busyness. Big bold typography is a statement of conviction, not decoration — let headlines breathe with generous white space around them rather than crowding the page. Restraint is the personality: color used sparingly hits harder than color used everywhere. The site should feel calm and deliberate, never loud or cluttered, the way someone speaks when they're genuinely sure of what they're saying. The three entities (Forgeware, CreativePics Art, Now Just Create) should feel like distinct voices in the same family — like three people who clearly grew up together but each have their own personality — not three copy-pasted templates with swapped colors. Avoid generic startup-website tropes (stock gradients, floating 3D blobs, cliché "innovation" imagery); every visual choice should feel intentional and specific to NLOGA, not borrowed from a template library.

DESIGN SYSTEM: Black + white base, electric blue accent (~#2B4EFF, matches NLOGA logo). Blue used only for accents/interactive elements/hero moments, never full backgrounds. Bold condensed display headline font (Space Grotesk-style), clean sans body (Inter-style). Entity color tints: Forgeware = cooler/darker blue, CreativePics Art = warm accent (orange), Now Just Create = core brand blue. Rounded-corner cards. Subtle grid-texture only at section breaks. Hero: scattered faint word/dot fragments drifting behind a sharp, centered, still headline. Restrained scroll fade/slide-up animations; one signature animated connector line linking the 3 entities on the homepage ecosystem section.

BACKEND: Supabase table contact_submissions (name, email, company, service_type, project_description, budget_range, timeline, created_at). Contact form inserts a row on submit. No auth, no other database use.

DELIVERABLE: Full working site, all pages linked and functional, ready to export as source code (React project, not just preview). NB: Use the images, above when needed

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bf7be21c-b321-42e0-b4d4-030f9aaf59e4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
