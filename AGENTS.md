# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project overview

A personal Web3 UX portfolio site for Sasha Tanase. It's a single-page-style
marketing/portfolio site built with **TanStack Start** (React 19 + TanStack
Router) and deployed to **Cloudflare** via Wrangler. Content is mostly static:
a home page and a set of case studies.

## Tech stack

- **Runtime / package manager:** [Bun](https://bun.sh) (see `bun.lock`, `bunfig.toml`)
- **Framework:** TanStack Start (`@tanstack/react-start`, `@tanstack/react-router`)
- **Build tool:** Vite 7
- **UI:** React 19, Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com) (New York style) + Radix primitives, lucide-react icons
- **Data/state:** TanStack Query
- **Forms/validation:** react-hook-form + zod
- **Deploy target:** Cloudflare (`wrangler.jsonc`, `@cloudflare/vite-plugin`)
- **Language:** TypeScript (strict mode)

## Commands

Use Bun for everything.

```bash
bun install          # install dependencies
bun run dev          # start the Vite dev server
bun run build        # production build
bun run build:dev    # build in development mode
bun run preview      # preview the production build
bun run lint         # ESLint over the repo
bun run format       # Prettier write over the repo
```

There is no test suite configured. Validate changes with `bun run lint` and a
local `bun run dev` / `bun run build`.

## Project structure

```
src/
  routes/            # File-based routes (TanStack Router)
    __root.tsx       # Root layout, 404 + error boundaries, <head> content
    index.tsx        # Home page
    case-studies.tsx # Case studies layout route
    case-studies.*.tsx       # Individual case studies (01–06) + index
  components/
    ui/              # shadcn/ui primitives — generated, prefer not to hand-edit
    *.tsx            # App-specific components (e.g. CaseStudyLayout, CursorDots)
  hooks/             # Custom React hooks
  lib/               # Utilities (utils.ts, error handling)
  assets/            # Asset manifest JSON (PDFs, images)
  router.tsx         # Router factory (createRouter)
  routeTree.gen.ts   # GENERATED — do not edit by hand
  styles.css         # Tailwind entry + CSS variables / theme tokens
  server.ts          # Cloudflare server entry
docs/                # UX audit reports and supporting docs
```

## Conventions

- **Path alias:** import from `@/*` (maps to `src/*`). e.g. `@/components/ui/button`,
  `@/lib/utils`.
- **Styling:** Tailwind utility classes; use the `cn()` helper from `@/lib/utils`
  to merge classes. Use theme tokens (`bg-background`, `text-foreground`,
  `text-muted-foreground`, etc.) rather than raw colors.
- **Components:** match the existing shadcn/ui patterns. Add new primitives via the
  shadcn CLI when possible rather than authoring from scratch.
- **Routing:** file-based. New routes are files under `src/routes/`. Never edit
  `routeTree.gen.ts` — it is regenerated automatically.
- **Formatting (Prettier):** 100 char print width, semicolons, double quotes,
  trailing commas everywhere. Run `bun run format` before committing.
- **TypeScript:** strict mode is on. Keep things typed; avoid `any`.

## Dependency policy

`bunfig.toml` enforces a 24-hour supply-chain guard (`minimumReleaseAge`):
packages published less than a day ago are skipped on install. Do **not** add
entries to `minimumReleaseAgeExcludes` without confirming with the user first.

## Git workflow

- Make focused commits with clear, descriptive messages.
- Do not create pull requests unless explicitly asked.
- Do not push to branches other than the one you've been assigned.
