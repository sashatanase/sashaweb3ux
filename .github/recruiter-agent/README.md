# Recruiter Agent

A daily agent that reviews the **live** portfolio site
(<https://sasha.web3ux.org/>) the way a real technical recruiter sourcing a
**Senior UX Researcher (web3)** would — by actually rendering it in a browser —
then commits to **one** outcome:

- **CONTACT** — if the live site earns it, the agent opens a GitHub **issue**
  with a personalized outreach message (labeled `recruiter-outreach`). That's
  the recruiter "reaching out" to Sasha.
- **IMPROVE** — if it's not yet convinced, it opens a **pull request** with
  concrete, implementable site improvements that would move the decision toward
  "contact" (labeled `recruiter-improvement`).

Either way, it appends a dated verdict to `docs/recruiter-log/<YYYY-MM>.md`.

## The daily routine

The workflow ([`.github/workflows/recruiter.yml`](../workflows/recruiter.yml))
runs every day at **13:00 UTC** (and on demand via *Run workflow*):

1. **Check out** the repo (the site's source) and install dependencies.
2. **Install Playwright** (Chromium) transiently — it is *not* a project
   dependency, so the site's `package.json`/lockfile stay untouched.
3. **Capture the live site** with
   [`capture.mjs`](./capture.mjs): full-page **desktop + mobile** screenshots of
   the home page and all case studies, the rendered text of each page, console
   errors, failed requests, and a **broken-link** report — written to
   `recruiter-capture/` (gitignored).
4. **Review as the recruiter:** the agent adopts the persona, looks at the
   screenshots and report (what a human actually sees), and scores the site
   against the rubric.
5. **Decide & act:** open an outreach **issue** (CONTACT) or an improvement
   **PR** (IMPROVE) — never both — with idempotency guards so it doesn't spam.
6. **Log** the dated verdict to `docs/recruiter-log/`.

## Why render the live site (not just the source)?

The repo source isn't what a recruiter sees: the live URL serves built/hydrated
HTML, the résumé PDF and images are hosted externally (only pointers live in
git), and the site is deployed by Lovable on its own pipeline — so the repo and
the URL can drift. Rendering the live site judges the real thing.

## Requirements

- The `CLAUDE_CODE_OAUTH_TOKEN` repository secret (already used by
  `.github/workflows/claude.yml`).
- No extra secrets: the agent uses the workflow's `GITHUB_TOKEN` to open
  issues/PRs.

## Tuning

- **Schedule:** change the `cron` in `recruiter.yml`.
- **Strictness / target role:** edit [`persona.md`](./persona.md).
- **Which URL / pages:** the URL is the `RECRUITER_SITE_URL` env (overridable
  per run via *Run workflow*); the page list lives in `ROUTES` in `capture.mjs`
  (it also auto-discovers internal links).
- **Run it now:** Actions → *Recruiter Agent* → *Run workflow*.

## Run the capture locally

```bash
mkdir -p /tmp/pw && (cd /tmp/pw && npm init -y && npm i playwright && npx playwright install chromium)
PW_REQUIRE_BASE=/tmp/pw/package.json RECRUITER_SITE_URL=https://sasha.web3ux.org/ \
  node .github/recruiter-agent/capture.mjs
# → screenshots, text, and report.md under ./recruiter-capture/
```

## Want real email/Slack on a CONTACT day?

The agent runs in GitHub Actions, so "contacting you" is an outreach **issue**
you're notified about. To get an email/Slack ping, add a notify step to the
workflow keyed on the `recruiter-outreach` label — the decision logic stays the
same.
