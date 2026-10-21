# Sagara Films — Bali Wedding Films (Demo)

A premium, cinematic landing page concept for a Bali wedding videography and
video-editing studio. Built with Next.js 16 (App Router), React 19, TypeScript,
Tailwind CSS v4, Framer Motion, and Lucide icons.

The brand, films, services, and copy are **demo content**. They are intentionally
replaceable and must be confirmed with the client before launch.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run lint
npm run build
npm start
```

The project has no test runner. Verification was performed with the production
build, ESLint, and headless browser checks at 320, 390, 768, 1024, and 1440px
(no horizontal overflow, no console errors, working modal/form/menu behavior).

## What is implemented

- Fixed navigation with scroll state, mobile menu, focus trap, and keyboard support
- Full-bleed hero with a desktop-only background loop and a static mobile poster
- Four sample films with lazy-loaded playback in an accessible native dialog
- Editorial services list with a dark cinematic section
- Asymmetric about section with detail imagery and an editorial quote
- Four-step workflow section
- Demo inquiry form with client-side validation, pending state, duplicate-submit
  guard, and an honest "no message sent" success state
- SEO metadata, Open Graph image, robots.txt, sitemap.xml, and a favicon
- Reduced-motion support and local, optimized media

## Project structure

```
app/                  App Router entry, metadata, global design tokens
components/layout/    Navbar, Footer, Wordmark
components/media/     Film card, film dialog, desktop hero video
components/sections/  Hero, Films, Services, About, Workflow, Contact
components/ui/        Button, Container, Eyebrow, SectionHeading, Reveal
lib/                  Site config, content data, form validation, cn helper
public/images/        Optimized local photography
public/films/         Sample hero loop and four short demo films
docs/                 Project brief, theme, typography, credits, presentation
```

## Customizing the demo

- **Brand and contact details:** `lib/site.ts` (`name`, `tagline`, `location`,
  `email`, `socials`, `nav`). Social links are empty by design until the client
  supplies real accounts.
- **Films:** `lib/content.ts` (`films`). Replace `image`, `poster`, and `video`
  with client-approved assets. Keep titles/locations honest.
- **Services and workflow:** `lib/content.ts` (`services`, `workflow`).
- **Form field options:** `formServiceOptions` in `lib/content.ts`.
- **Design tokens and typography:** `app/globals.css` and `app/layout.tsx`.
- **Canonical URL / social preview:** copy `.env.example` to `.env.local` for
  local work, and set `NEXT_PUBLIC_SITE_URL` in the deployment environment. Then
  update `app/layout.tsx` metadata if the title or description changes.

All sample media can be replaced without touching components.

## Media

Photography is sourced from Unsplash under the Unsplash License. The four short
films and the hero loop are locally generated, silent Ken Burns-style edits made
from those stills. See [docs/CREDITS.md](docs/CREDITS.md) for the source list.

## Form delivery

The inquiry form deliberately does **not** send or store data. It demonstrates
validation and feedback only. To make it production-ready, add a server action or
route handler backed by an email service (for example Resend, Postmark, or a
form provider), then replace the simulated success message with real delivery
confirmation.

## Deploy to Vercel

1. Import `WenDEVLIFE/bali_wedding` at https://vercel.com/new, or run
   `npx vercel` after authenticating with `vercel login`.
2. Optionally set `NEXT_PUBLIC_SITE_URL` to the production URL (for example
   `https://your-project.vercel.app`). On Vercel, the app falls back to the
   project's production URL automatically.
3. Deploy, then verify the live URL on desktop and mobile, including the hero
   loop, film dialog playback, and form states.

The repository is deployment-ready; publishing requires Vercel authentication
and (optionally) a Git push to the connected remote.
