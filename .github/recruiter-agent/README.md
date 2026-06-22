# Recruiter Agent

A daily agent that reviews this portfolio site the way a real technical
recruiter sourcing a **Senior UX Researcher (web3)** would — then commits to
**one** outcome:

- **CONTACT** — if the site earns it, the agent opens a GitHub **issue** with a
  personalized outreach message (labeled `recruiter-outreach`). That's the
  recruiter "reaching out" to Sasha.
- **IMPROVE** — if it's not yet convinced, it opens a **pull request** with
  concrete, implementable site improvements that would move the decision toward
  "contact" (labeled `recruiter-improvement`).

Either way, it appends a dated verdict to `docs/recruiter-log/<YYYY-MM>.md`.

## How it works

- **Workflow:** [`.github/workflows/recruiter.yml`](../workflows/recruiter.yml)
  runs daily at 13:00 UTC (`schedule`) and can be run on demand
  (`workflow_dispatch`).
- **Persona & rubric:** [`persona.md`](./persona.md) defines the recruiter
  ("Morgan Vale") and exactly how a portfolio is scored. Edit this to change how
  picky the recruiter is or what role they're hiring for.
- **Engine:** the existing `anthropics/claude-code-action` (same one used by the
  `@claude` workflow), driven by an unattended `prompt`.

## Requirements

- The `CLAUDE_CODE_OAUTH_TOKEN` repository secret (already used by
  `.github/workflows/claude.yml`).
- No extra secrets: the agent uses the workflow's `GITHUB_TOKEN` to open
  issues/PRs.

## Tuning

- **Schedule:** change the `cron` in `recruiter.yml`.
- **Strictness / role:** edit `persona.md`.
- **Test it now:** Actions → *Recruiter Agent* → *Run workflow*.

## Why no email?

The agent runs in GitHub Actions, so "contacting you" takes the form of an
outreach **issue** you'll be notified about. If you later want real email/Slack
delivery, add a notify step to the workflow (e.g. an email or Slack action keyed
on the `recruiter-outreach` label) — the decision logic stays the same.
