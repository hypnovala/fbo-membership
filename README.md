# FBO Membership Funnel (Vercel-Ready Next.js)

This repository contains a Tailwind + Next.js App Router implementation for a two-page membership funnel:

- `/` (`app/page.tsx`) — homepage with high-conversion messaging, tier overview, and CTA links.
- `/membership-details` (`app/membership-details/page.tsx`) — detailed tier breakdown and email capture section.

## Membership and Messaging Rules

- Incentive: **40% off first month**.
- Two tiers:
  - **Tier 1 — Digital Membership**: `$39/month`
  - **Tier 2 — Coaching Membership**: `$149/month` (no bodywork) or `$89/month` (if planning separate bodywork bookings)
- Global rule shown on pages:
  - **All membership tiers unlock access to private Houston bodywork sessions. Bodywork is booked separately and not included in monthly pricing.**
- Primary conversion target: email capture / membership details request.

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Framework preset should auto-detect as **Next.js** (also pinned in `vercel.json`).
4. Deploy.

## Included Project Files

- `app/layout.tsx`
- `app/globals.css`
- `app/page.tsx`
- `app/membership-details/page.tsx`
- `homepage.md`
- `membership-details.md`
- Tailwind/Next.js config files (`tailwind.config.ts`, `postcss.config.js`, `next.config.ts`, `tsconfig.json`)
