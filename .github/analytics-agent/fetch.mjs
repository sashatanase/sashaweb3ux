// Analytics Agent — GA4 Data API fetch.
//
// Pulls the reports behind the weekly review from the Google Analytics Data API
// (GA4) and writes them to `analytics-capture/` (gitignored):
//   - report.json   structured results for every query
//   - report.md     human/agent-readable summary with tables
//   - summary.json  compact KPI snapshot (used by the daily history log)
//
// Auth: a Google Cloud service account that has Viewer access to the GA4
// property. Provide its JSON key via GA4_SERVICE_ACCOUNT_JSON (raw JSON) or
// GOOGLE_APPLICATION_CREDENTIALS (path), and the numeric property id via
// GA4_PROPERTY_ID. The @google-analytics/data client is resolved via
// createRequire so it can be installed transiently (point GA_REQUIRE_BASE at a
// package.json inside that install) without becoming a project dependency.

import { createRequire } from "node:module";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const requireBase = process.env.GA_REQUIRE_BASE || path.join(process.cwd(), "package.json");
const require = createRequire(path.resolve(requireBase));
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

const PROPERTY_ID = (process.env.GA4_PROPERTY_ID || "").replace(/^properties\//, "").trim();
const DAYS = Number(process.env.ANALYTICS_DAYS || 7);
const OUT = process.env.ANALYTICS_CAPTURE_DIR || path.join(process.cwd(), "analytics-capture");

if (!PROPERTY_ID) {
  console.error(
    "Missing GA4_PROPERTY_ID (the numeric GA4 property id, not the G-XXXX measurement id).",
  );
  process.exit(1);
}

async function loadCredentials() {
  const raw = process.env.GA4_SERVICE_ACCOUNT_JSON;
  if (raw && raw.trim().startsWith("{")) return JSON.parse(raw);
  const file = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (file) return JSON.parse(await readFile(file, "utf8"));
  throw new Error(
    "Missing service account: set GA4_SERVICE_ACCOUNT_JSON or GOOGLE_APPLICATION_CREDENTIALS.",
  );
}

// Date ranges: the current window and the immediately-preceding one (for WoW deltas).
const ranges = {
  current: { startDate: `${DAYS}daysAgo`, endDate: "yesterday", name: "current" },
  previous: { startDate: `${DAYS * 2}daysAgo`, endDate: `${DAYS + 1}daysAgo`, name: "previous" },
};

const client = new BetaAnalyticsDataClient({ credentials: await loadCredentials() });
const property = `properties/${PROPERTY_ID}`;

// Run one report; on failure (e.g. an unregistered custom dimension) capture the
// error instead of crashing so the rest of the report still renders.
async function runReport(label, request) {
  try {
    const [res] = await client.runReport({ property, ...request });
    const dims = (res.dimensionHeaders || []).map((h) => h.name);
    const mets = (res.metricHeaders || []).map((h) => h.name);
    const rows = (res.rows || []).map((r) => ({
      dimensions: (r.dimensionValues || []).map((v) => v.value),
      metrics: (r.metricValues || []).map((v) => v.value),
    }));
    return { label, ok: true, dims, mets, rows };
  } catch (err) {
    return { label, ok: false, error: String(err?.message || err) };
  }
}

const orderByMetric = (name, desc = true) => [{ metric: { metricName: name }, desc }];

async function main() {
  await mkdir(OUT, { recursive: true });

  const reports = {};

  // 1. KPI overview, current vs previous window.
  reports.kpis = await runReport("KPIs (current vs previous period)", {
    dateRanges: [
      { startDate: ranges.current.startDate, endDate: ranges.current.endDate, name: "current" },
      { startDate: ranges.previous.startDate, endDate: ranges.previous.endDate, name: "previous" },
    ],
    metrics: [
      { name: "totalUsers" },
      { name: "newUsers" },
      { name: "sessions" },
      { name: "screenPageViews" },
      { name: "engagementRate" },
      { name: "bounceRate" },
      { name: "averageSessionDuration" },
      { name: "userEngagementDuration" },
    ],
  });

  const cur = [{ startDate: ranges.current.startDate, endDate: ranges.current.endDate }];

  // 2. Most-viewed pages + time spent.
  reports.topPages = await runReport("Most-viewed pages", {
    dateRanges: cur,
    dimensions: [{ name: "pagePath" }, { name: "pageTitle" }],
    metrics: [
      { name: "screenPageViews" },
      { name: "totalUsers" },
      { name: "userEngagementDuration" },
      { name: "averageSessionDuration" },
      { name: "engagementRate" },
    ],
    orderBys: orderByMetric("screenPageViews"),
    limit: 25,
  });

  // 3. Acquisition — how sessions arrive (channels, source/medium).
  reports.channels = await runReport("Traffic by channel", {
    dateRanges: cur,
    dimensions: [{ name: "sessionDefaultChannelGroup" }],
    metrics: [
      { name: "sessions" },
      { name: "totalUsers" },
      { name: "engagedSessions" },
      { name: "engagementRate" },
    ],
    orderBys: orderByMetric("sessions"),
    limit: 25,
  });
  reports.sources = await runReport("Traffic by source / medium", {
    dateRanges: cur,
    dimensions: [{ name: "sessionSource" }, { name: "sessionMedium" }],
    metrics: [{ name: "sessions" }, { name: "totalUsers" }, { name: "engagementRate" }],
    orderBys: orderByMetric("sessions"),
    limit: 25,
  });

  // 4. Where leads first discover the site (first-user acquisition).
  reports.firstUser = await runReport("Where new users come from (first-user source)", {
    dateRanges: cur,
    dimensions: [{ name: "firstUserDefaultChannelGroup" }, { name: "firstUserSource" }],
    metrics: [{ name: "newUsers" }, { name: "totalUsers" }],
    orderBys: orderByMetric("newUsers"),
    limit: 25,
  });

  // 5. Geography.
  reports.geo = await runReport("Top locations", {
    dateRanges: cur,
    dimensions: [{ name: "country" }, { name: "city" }],
    metrics: [{ name: "totalUsers" }, { name: "sessions" }],
    orderBys: orderByMetric("totalUsers"),
    limit: 20,
  });

  // 6. Devices.
  reports.devices = await runReport("Devices", {
    dateRanges: cur,
    dimensions: [{ name: "deviceCategory" }],
    metrics: [{ name: "totalUsers" }, { name: "sessions" }, { name: "engagementRate" }],
    orderBys: orderByMetric("totalUsers"),
    limit: 10,
  });

  // 7. Landing pages + engagement (drop-off proxy: where sessions start and how
  //    engaged they are).
  reports.landing = await runReport("Landing pages (entry + engagement)", {
    dateRanges: cur,
    dimensions: [{ name: "landingPagePlusQueryString" }],
    metrics: [
      { name: "sessions" },
      { name: "bounceRate" },
      { name: "engagementRate" },
      { name: "averageSessionDuration" },
    ],
    orderBys: orderByMetric("sessions"),
    limit: 20,
  });

  // 8. All events (clicks, section events, downloads…).
  reports.events = await runReport("Events triggered", {
    dateRanges: cur,
    dimensions: [{ name: "eventName" }],
    metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
    orderBys: orderByMetric("eventCount"),
    limit: 40,
  });

  // 9–11. Custom-dimension breakdowns. These require the matching custom
  // dimensions to be registered in GA4 Admin (see README). They fail gracefully.
  reports.sectionReach = await runReport("Sections reached (drop-off funnel)", {
    dateRanges: cur,
    dimensions: [{ name: "customEvent:section_id" }],
    metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
    dimensionFilter: {
      filter: { fieldName: "eventName", stringFilter: { value: "section_reached" } },
    },
    orderBys: orderByMetric("eventCount"),
    limit: 25,
  });
  reports.sectionTime = await runReport("Section dwell time (section_view events)", {
    dateRanges: cur,
    dimensions: [{ name: "customEvent:section_id" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: { fieldName: "eventName", stringFilter: { value: "section_view" } },
    },
    orderBys: orderByMetric("eventCount"),
    limit: 25,
  });
  reports.outbound = await runReport("Most-clicked outbound links", {
    dateRanges: cur,
    dimensions: [{ name: "customEvent:link_url" }, { name: "customEvent:link_text" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: { fieldName: "eventName", stringFilter: { value: "outbound_click" } },
    },
    orderBys: orderByMetric("eventCount"),
    limit: 25,
  });
  reports.ctas = await runReport("Most-clicked CTAs", {
    dateRanges: cur,
    dimensions: [{ name: "customEvent:cta_id" }, { name: "customEvent:location" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: { fieldName: "eventName", stringFilter: { value: "cta_click" } },
    },
    orderBys: orderByMetric("eventCount"),
    limit: 25,
  });

  const output = {
    property,
    days: DAYS,
    ranges,
    generatedAt: new Date().toISOString(),
    reports,
  };

  await writeFile(path.join(OUT, "report.json"), JSON.stringify(output, null, 2));
  await writeFile(path.join(OUT, "report.md"), renderMarkdown(output));
  await writeFile(path.join(OUT, "summary.json"), JSON.stringify(buildSummary(output), null, 2));

  const failed = Object.values(reports).filter((r) => !r.ok);
  console.log(
    `Fetched ${Object.keys(reports).length} reports for ${property} ` +
      `(${DAYS}d window). ${failed.length} failed. Output: ${OUT}`,
  );
}

// --- Rendering helpers ---------------------------------------------------------

function table(report, dimLabels, metLabels) {
  if (!report) return "_(report missing)_\n";
  if (!report.ok) return `> ⚠️ Could not fetch: ${report.error}\n`;
  if (!report.rows.length) return "_No data for this period._\n";
  const header = [...dimLabels, ...metLabels];
  const lines = [`| ${header.join(" | ")} |`, `| ${header.map(() => "---").join(" | ")} |`];
  for (const row of report.rows.slice(0, 20)) {
    const cells = [...row.dimensions, ...row.metrics.map(fmt)];
    lines.push(`| ${cells.map((c) => String(c ?? "").replace(/\|/g, "\\|")).join(" | ")} |`);
  }
  return lines.join("\n") + "\n";
}

function fmt(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return v;
  if (n > 0 && n < 1) return `${(n * 100).toFixed(1)}%`;
  return n % 1 === 0 ? String(n) : n.toFixed(1);
}

function pct(curr, prev) {
  const a = Number(curr);
  const b = Number(prev);
  if (!b) return "—";
  const d = ((a - b) / b) * 100;
  return `${d >= 0 ? "▲" : "▼"} ${Math.abs(d).toFixed(1)}%`;
}

function buildSummary(output) {
  const k = output.reports.kpis;
  const summary = { date: new Date().toISOString().slice(0, 10), days: output.days };
  if (k?.ok && k.rows.length) {
    const current = k.rows[0]?.metrics || [];
    k.mets.forEach((m, i) => (summary[m] = current[i]));
  }
  return summary;
}

function renderMarkdown(output) {
  const r = output.reports;
  const L = [];
  L.push(`# Analytics report — ${output.property}`);
  L.push("");
  L.push(
    `Window: last **${output.days} days** (ending yesterday) · generated ${output.generatedAt}`,
  );
  L.push("");

  L.push("## 1. Headline KPIs (vs previous period)");
  L.push("");
  if (r.kpis?.ok && r.kpis.rows.length >= 1) {
    const cur = r.kpis.rows[0].metrics;
    const prev = r.kpis.rows[1]?.metrics || [];
    L.push("| Metric | Current | Previous | Change |");
    L.push("| --- | --- | --- | --- |");
    r.kpis.mets.forEach((m, i) => {
      L.push(`| ${m} | ${fmt(cur[i])} | ${fmt(prev[i] ?? "")} | ${pct(cur[i], prev[i])} |`);
    });
    L.push("");
  } else {
    L.push(table(r.kpis, [], []));
  }

  L.push("## 2. Most-viewed pages & time spent");
  L.push("");
  L.push(
    table(
      r.topPages,
      ["Path", "Title"],
      ["Views", "Users", "Engagement (s)", "Avg session (s)", "Engagement rate"],
    ),
  );

  L.push("## 3. Where visitors come from");
  L.push("");
  L.push("**By channel**");
  L.push("");
  L.push(
    table(r.channels, ["Channel"], ["Sessions", "Users", "Engaged sessions", "Engagement rate"]),
  );
  L.push("");
  L.push("**By source / medium**");
  L.push("");
  L.push(table(r.sources, ["Source", "Medium"], ["Sessions", "Users", "Engagement rate"]));

  L.push("## 4. Where new users (leads) first discover the site");
  L.push("");
  L.push(table(r.firstUser, ["First channel", "First source"], ["New users", "Total users"]));

  L.push("## 5. Locations");
  L.push("");
  L.push(table(r.geo, ["Country", "City"], ["Users", "Sessions"]));

  L.push("## 6. Devices");
  L.push("");
  L.push(table(r.devices, ["Device"], ["Users", "Sessions", "Engagement rate"]));

  L.push("## 7. Drop-off signal — landing pages & engagement");
  L.push("");
  L.push(
    table(
      r.landing,
      ["Landing page"],
      ["Sessions", "Bounce rate", "Engagement rate", "Avg session (s)"],
    ),
  );

  L.push("## 8. Events triggered");
  L.push("");
  L.push(table(r.events, ["Event"], ["Count", "Users"]));

  L.push("## 9. Section attention (custom events)");
  L.push("");
  L.push("**Sections reached** — drop-off funnel; counts should fall the further down the page.");
  L.push("");
  L.push(table(r.sectionReach, ["Section"], ["Reaches", "Users"]));
  L.push("");
  L.push("**Section dwell** — how often each section held the viewport.");
  L.push("");
  L.push(table(r.sectionTime, ["Section"], ["section_view events"]));

  L.push("## 10. Most-clicked links & buttons (custom events)");
  L.push("");
  L.push("**Outbound links**");
  L.push("");
  L.push(table(r.outbound, ["URL", "Text"], ["Clicks"]));
  L.push("");
  L.push("**CTAs**");
  L.push("");
  L.push(table(r.ctas, ["CTA", "Location"], ["Clicks"]));

  const failed = Object.values(r).filter((x) => x && !x.ok);
  if (failed.length) {
    L.push("## Notes");
    L.push("");
    L.push(
      "Some reports failed. Custom-dimension reports (sections, links, CTAs) need the " +
        "matching custom dimensions registered in GA4 Admin — see " +
        "`.github/analytics-agent/README.md`.",
    );
    L.push("");
    for (const f of failed) L.push(`- **${f.label}**: ${f.error}`);
    L.push("");
  }

  return L.join("\n");
}

main().catch((err) => {
  console.error("Fetch failed:", err);
  process.exit(1);
});
