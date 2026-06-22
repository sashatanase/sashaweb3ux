// Recruiter Agent — local-app capture.
//
// Renders the LOCALLY-SERVED app with Playwright (Chromium) so the recruiter
// reviews what a human actually sees, not the source. The workflow builds and
// serves the app first, then points this script at the local server via
// RECRUITER_SITE_URL. Produces, under recruiter-capture/:
//   - screenshots/<route>-<viewport>.png   full-page desktop + mobile shots
//   - text/<route>.txt                      rendered innerText of each page
//   - report.json                           structured findings
//   - report.md                             human/agent-readable summary
//
// Playwright is resolved via createRequire so it can be installed transiently
// (e.g. in CI under $RUNNER_TEMP) without being a project dependency. Point
// PW_REQUIRE_BASE at a package.json inside that install.

import { createRequire } from "node:module";
import { mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";

const requireBase = process.env.PW_REQUIRE_BASE || path.join(process.cwd(), "package.json");
const require = createRequire(path.resolve(requireBase));
const { chromium } = require("playwright");

const SITE = (process.env.RECRUITER_SITE_URL || "http://127.0.0.1:4173").replace(/\/+$/, "");
const OUT = process.env.RECRUITER_CAPTURE_DIR || path.join(process.cwd(), "recruiter-capture");

// The known routes of the site. Discovered internal links are merged in too,
// so this list just guarantees the important pages are always captured.
const ROUTES = [
  { name: "home", path: "/" },
  { name: "case-studies-index", path: "/case-studies" },
  { name: "case-study-01", path: "/case-studies/01" },
  { name: "case-study-02", path: "/case-studies/02" },
  { name: "case-study-03", path: "/case-studies/03" },
  { name: "case-study-04", path: "/case-studies/04" },
  { name: "case-study-05", path: "/case-studies/05" },
  { name: "case-study-06", path: "/case-studies/06" },
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const slug = (s) => s.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "page";

async function checkLink(url) {
  // HEAD first; some hosts reject HEAD, so fall back to a ranged GET.
  for (const method of ["HEAD", "GET"]) {
    try {
      const res = await fetch(url, {
        method,
        redirect: "follow",
        headers: method === "GET" ? { Range: "bytes=0-0" } : undefined,
      });
      return { url, status: res.status, ok: res.ok || res.status === 206 };
    } catch (err) {
      if (method === "GET") return { url, status: 0, ok: false, error: String(err) };
    }
  }
  return { url, status: 0, ok: false };
}

async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(path.join(OUT, "screenshots"), { recursive: true });
  await mkdir(path.join(OUT, "text"), { recursive: true });

  const report = {
    site: SITE,
    capturedAt: new Date().toISOString(),
    pages: [],
    discoveredRoutes: [],
    links: [],
    errors: [],
  };

  const browser = await chromium.launch();
  try {
    // Pass 1 — capture each known route at each viewport, gather links.
    const allLinks = new Set();
    const internalPaths = new Set(ROUTES.map((r) => r.path));

    for (const route of ROUTES) {
      const pageInfo = { name: route.name, path: route.path, consoleErrors: [], failedRequests: [] };
      for (const vp of VIEWPORTS) {
        const context = await browser.newContext({
          viewport: { width: vp.width, height: vp.height },
        });
        const page = await context.newPage();
        page.on("console", (msg) => {
          if (msg.type() === "error") pageInfo.consoleErrors.push(msg.text());
        });
        page.on("requestfailed", (req) => {
          pageInfo.failedRequests.push(`${req.method()} ${req.url()} — ${req.failure()?.errorText}`);
        });
        const target = SITE + route.path;
        try {
          const res = await page.goto(target, { waitUntil: "networkidle", timeout: 45000 });
          pageInfo.httpStatus = res?.status();
          await page.waitForTimeout(800); // let fonts/animations settle
          const shot = path.join(OUT, "screenshots", `${route.name}-${vp.name}.png`);
          await page.screenshot({ path: shot, fullPage: true });

          if (vp.name === "desktop") {
            pageInfo.title = await page.title();
            const text = await page.evaluate(() => document.body.innerText);
            await writeFile(path.join(OUT, "text", `${route.name}.txt`), text);
            const hrefs = await page.evaluate(() =>
              Array.from(document.querySelectorAll("a[href]")).map((a) => a.href),
            );
            for (const h of hrefs) allLinks.add(h);
          }
        } catch (err) {
          pageInfo.error = String(err);
          report.errors.push(`${route.name} (${vp.name}): ${err}`);
        } finally {
          await context.close();
        }
      }
      report.pages.push(pageInfo);
    }

    // Note any internal links we found that aren't in the known route list.
    for (const link of allLinks) {
      try {
        const u = new URL(link);
        if (u.origin === SITE && !internalPaths.has(u.pathname) && !u.hash) {
          report.discoveredRoutes.push(u.pathname);
        }
      } catch {
        /* ignore non-URL hrefs */
      }
    }
    report.discoveredRoutes = [...new Set(report.discoveredRoutes)].sort();

    // Pass 2 — health-check every link (broken links are a recruiter red flag).
    const linkResults = await Promise.all([...allLinks].sort().map(checkLink));
    report.links = linkResults;
  } finally {
    await browser.close();
  }

  await writeFile(path.join(OUT, "report.json"), JSON.stringify(report, null, 2));
  await writeFile(path.join(OUT, "report.md"), renderMarkdown(report));

  const broken = report.links.filter((l) => !l.ok);
  console.log(
    `Captured ${report.pages.length} pages from ${SITE}. ` +
      `${report.links.length} links checked, ${broken.length} broken. ` +
      `Output: ${OUT}`,
  );
}

function renderMarkdown(report) {
  const lines = [];
  lines.push(`# Live-site capture — ${report.site}`);
  lines.push("");
  lines.push(`Captured at: ${report.capturedAt}`);
  lines.push("");
  lines.push("This is what a recruiter actually sees in the browser. Review the");
  lines.push("screenshots (desktop + mobile) alongside this report.");
  lines.push("");

  lines.push("## Pages");
  lines.push("");
  for (const p of report.pages) {
    lines.push(`### ${p.name} — \`${p.path}\``);
    lines.push(`- HTTP status: ${p.httpStatus ?? "n/a"}`);
    lines.push(`- Title: ${p.title ?? "n/a"}`);
    lines.push(`- Screenshots: \`screenshots/${p.name}-desktop.png\`, \`screenshots/${p.name}-mobile.png\``);
    lines.push(`- Rendered text: \`text/${p.name}.txt\``);
    if (p.consoleErrors?.length) {
      lines.push(`- ⚠️ Console errors (${p.consoleErrors.length}):`);
      for (const e of p.consoleErrors.slice(0, 10)) lines.push(`  - ${e}`);
    }
    if (p.failedRequests?.length) {
      lines.push(`- ⚠️ Failed requests (${p.failedRequests.length}):`);
      for (const e of p.failedRequests.slice(0, 10)) lines.push(`  - ${e}`);
    }
    if (p.error) lines.push(`- ❌ Capture error: ${p.error}`);
    lines.push("");
  }

  if (report.discoveredRoutes.length) {
    lines.push("## Internal routes discovered (not in known list)");
    lines.push("");
    for (const r of report.discoveredRoutes) lines.push(`- \`${r}\``);
    lines.push("");
  }

  const broken = report.links.filter((l) => !l.ok);
  lines.push(`## Links (${report.links.length} checked, ${broken.length} broken)`);
  lines.push("");
  if (broken.length) {
    lines.push("### ❌ Broken / unreachable");
    lines.push("");
    for (const l of broken) lines.push(`- [${l.status || "ERR"}] ${l.url}${l.error ? ` (${l.error})` : ""}`);
    lines.push("");
  } else {
    lines.push("All links reachable. ✅");
    lines.push("");
  }

  if (report.errors.length) {
    lines.push("## Capture errors");
    lines.push("");
    for (const e of report.errors) lines.push(`- ${e}`);
    lines.push("");
  }
  return lines.join("\n");
}

main().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
