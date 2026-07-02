# Analytics Agent

A scheduled agent that reads **Google Analytics (GA4)** for `sasha.web3ux.org`
and turns the numbers into action:

- **Daily** — fetches a KPI snapshot and appends it to a history log
  (`docs/analytics-log/data/<YYYY-MM>.jsonl`). Lightweight, no AI.
- **Weekly** (Mondays) — pulls the full report, writes a dated **weekly review**
  to `docs/analytics-log/reports/`, and opens **one pull request** with concrete,
  data-driven site improvements (labeled `analytics-improvement`).

The site already loads GA4 (`gtag`, measurement id `G-TGFZKYVZ5Q`) in
`src/routes/__root.tsx`. The agent reads that data back via the **GA4 Data API**.

## What it reports

`report.md` (regenerated each run from [`fetch.mjs`](./fetch.mjs)) covers:

1. Headline KPIs with week-over-week change (users, new users, sessions, views,
   engagement/bounce rate, engagement time).
2. Most-viewed pages & time spent.
3. Acquisition — traffic by channel and by source/medium.
4. Where **new users (leads)** first discover the site (first-user source).
5. Locations and devices.
6. Drop-off signal — landing pages with bounce/engagement.
7. Events triggered.
8. **Section attention** — how far down the home page people get
   (`section_reached`) and where they linger (`section_view`).
9. **Most-clicked links & buttons** — outbound links and CTAs.

Sections 8–9 come from custom events emitted by the site (`src/lib/analytics.ts`,
`src/hooks/use-section-tracking.ts`).

## One-time setup (required to go live)

The `gtag` on the site only _sends_ data; reading it needs API access.

1. **Find the numeric property id.** GA4 Admin → Property Settings → _Property
   ID_ (a number like `123456789`). This is **not** the `G-TGFZKYVZ5Q`
   measurement id.
2. **Create a service account.** Google Cloud Console → enable the **Google
   Analytics Data API** → create a service account → create a **JSON key**.
3. **Grant it access.** GA4 Admin → Property Access Management → add the service
   account's email with the **Viewer** role.
4. **Add repo secrets** (Settings → Secrets and variables → Actions):
   - `GA4_PROPERTY_ID` — the numeric id from step 1.
   - `GA4_SERVICE_ACCOUNT_JSON` — the full contents of the JSON key from step 2.
   - `CLAUDE_CODE_OAUTH_TOKEN` — already present (used by `claude.yml`).

### Register custom dimensions (for sections 8–9)

Section/click breakdowns need their event **parameters** registered as **custom
dimensions** in GA4 Admin → Custom definitions → _Create custom dimension_
(scope: Event). Register these parameter names:

| Dimension name | Event parameter | Powers                 |
| -------------- | --------------- | ---------------------- |
| Section ID     | `section_id`    | section funnel + dwell |
| Link URL       | `link_url`      | outbound link ranking  |
| Link text      | `link_text`     | outbound link labels   |
| CTA ID         | `cta_id`        | CTA click ranking      |
| Location       | `location`      | where a click happened |

Until these are registered, the agent still runs — those tables just show a
note instead of data. (Custom dimensions only collect data going forward.)

## Run it now

Actions → **Analytics Agent** → _Run workflow_ → choose `daily` or `weekly`.

### Run the fetch locally

```bash
mkdir -p /tmp/ga && (cd /tmp/ga && npm init -y && npm i @google-analytics/data)
GA_REQUIRE_BASE=/tmp/ga/package.json \
GA4_PROPERTY_ID=123456789 \
GA4_SERVICE_ACCOUNT_JSON="$(cat service-account.json)" \
ANALYTICS_DAYS=7 \
  node .github/analytics-agent/fetch.mjs
# → analytics-capture/report.md, report.json, summary.json
```

## Tuning

- **Schedule:** the two `cron` lines in [`analytics.yml`](../workflows/analytics.yml).
- **Window:** `ANALYTICS_DAYS` (default 7 weekly, 1 daily).
- **What's analyzed / the bar for recommendations:** [`persona.md`](./persona.md).
- **Reports queried / dimensions:** [`fetch.mjs`](./fetch.mjs).
- **Events tracked on the site:** `src/lib/analytics.ts` and
  `src/hooks/use-section-tracking.ts`.
