# Recruiter Agent

A daily agent that **builds and runs the portfolio app locally**, then reviews
it the way a real technical recruiter sourcing a **Senior UX Researcher (web3)**
would — by actually rendering the running app in a browser — then commits to
**one** outcome:

- **CONTACT** — if the live site earns it, the agent opens a GitHub **issue**
  with a personalized outreach message (labeled `recruiter-outreach`). That's
  the recruiter "reaching out" to Sasha.
- **IMPROVE** — if it's not yet convinced, it opens a **pull request** with
  concrete, implementable site improvements that would move the decision toward
  "contact" (labeled `recruiter-improvement`).

Either way, it appends a dated verdict to `docs/recruiter-log/<YYYY-MM>.md`.

## The daily routine

The workflow ([`.github/workflows/recruiter.yml`](../workflows/recruiter.yml))
runs every day at **13:00 UTC** (and on demand via _Run workflow_):

1. **Check out** the repo and install dependencies.
2. **Validate:** `bun run lint`, the `test` script if one exists (there is none
   today — see AGENTS.md), and `bun run build`. A failing gate is itself a
   hireability red flag.
3. **Install Playwright** (Chromium) transiently — it is _not_ a project
   dependency, so the site's `package.json`/lockfile stay untouched.
4. **Run the app locally:** serve the production build with `vite preview`
   (falling back to `vite dev` if preview doesn't come up under the
   Cloudflare/Lovable config), and wait until it answers on `127.0.0.1:4173`.
5. **Capture the running app** with [`capture.mjs`](./capture.mjs): full-page
   **desktop + mobile** screenshots of the home page and all case studies, the
   rendered text of each page, console errors, failed requests, and a
   **broken-link** report — written to `recruiter-capture/` (gitignored).
6. **Review as the recruiter:** the agent adopts the persona, looks at the
   screenshots and report (what a human actually sees), and scores the site
   against the rubric.
7. **Decide & act:** open an outreach **issue** (CONTACT) or an improvement
   **PR** (IMPROVE) — never both — with idempotency guards so it doesn't spam.
8. **Log** the dated verdict to `docs/recruiter-log/`, then stop the local app.

## Why render the running app (not just the source)?

The repo source isn't what a recruiter sees: the served app is built and
hydrated HTML. Running it locally lets the agent judge the real first
impression, scannability, mobile layout, console health, and broken links —
the things that actually decide whether a recruiter reaches out.

## Requirements

- The `CLAUDE_CODE_OAUTH_TOKEN` repository secret (already used by
  `.github/workflows/claude.yml`).
- No extra secrets: the agent uses the workflow's `GITHUB_TOKEN` to open
  issues/PRs.

## Tuning

- **Schedule:** change the `cron` in `recruiter.yml`.
- **Strictness / target role:** edit [`persona.md`](./persona.md).
- **Port / pages:** the port is the `PORT`/`RECRUITER_SITE_URL` env; the page
  list lives in `ROUTES` in `capture.mjs` (it also auto-discovers internal
  links).
- **Run it now:** Actions → _Recruiter Agent_ → _Run workflow_.

## Run the capture locally

```bash
# 1. Serve the app
bun install && bun run build && bun run preview -- --port 4173 --host 127.0.0.1 &

# 2. Install Playwright (kept out of the project deps) and capture
mkdir -p /tmp/pw && (cd /tmp/pw && npm init -y && npm i playwright && npx playwright install chromium)
PW_REQUIRE_BASE=/tmp/pw/package.json RECRUITER_SITE_URL=http://127.0.0.1:4173 \
  node .github/recruiter-agent/capture.mjs
# → screenshots, text, and report.md under ./recruiter-capture/
```

## Want real email/Slack on a CONTACT day?

The agent runs in GitHub Actions, so "contacting you" is an outreach **issue**
you're notified about. To get an email/Slack ping, add a notify step to the
workflow keyed on the `recruiter-outreach` label — the decision logic stays the
same.
