# Channel sync checklist — resume as source of truth (2026-07)

The final resume (`resumerewritegithub.md`, with the 7 review fixes applied) is the canonical
version of every fact: name, titles, dates, years-of-experience, positioning. This checklist
lists every place the website and LinkedIn must change to match it. Work top to bottom;
each item says exactly where to make the change.

---

## A. Website (this repo)

### A1. Name → "Sasha (Tanase) Luca" (transitional name, per playbook)

| Where | File | What to change |
|---|---|---|
| Header wordmark | `src/routes/index.tsx` (~line 202) | "Sasha Luca" → "Sasha (Tanase) Luca" |
| Footer copyright | `src/routes/index.tsx` (~line 489) | "© {year} Sasha Luca" → "© {year} Sasha (Tanase) Luca" |
| Case-studies header + footer | `src/routes/case-studies.index.tsx` (~lines 157, 270) and `src/routes/case-studies.tsx` | same change |
| Page titles / OG meta | every `case-studies.0X.tsx` `head()` + `case-studies.index.tsx` | "— Sasha Luca" → "— Sasha (Tanase) Luca" |
| Portrait alt text | `src/routes/index.tsx` (~line 338) | "Portrait of Sasha Luca" → match chosen name |

### A2. Hero — single positioning (drop the PM hedge)

`src/routes/index.tsx` (~lines 244–247):
- Now: *"I help teams figure out who they're building for and why. Currently open to UXR and PM roles, full-time or contract."*
- Change to: *"I help teams figure out who they're building for and why. Currently open to Senior UX Researcher roles, full-time or contract."*
- (Resume headline is "Senior UX Researcher" — the site must make the same single claim.)

### A3. About section — years + framing

`src/routes/index.tsx`:
- ~line 320: "**Nine** years making sure teams build the right thing…" → "**Eight** years…" (resume says "eight years").
- ~lines 323–332 (two paragraphs): update to cover the present. Suggested first paragraph:
  *"I've worked across fast-moving web3 startups and decentralized protocols, most recently leading research at Mezo, where I built the insight repository that became the single source of truth for 15+ stakeholders. Since mid-2025 I run my research practice independently through Web3UX, and publish my full research reports openly on this site."*
  Add one high-stakes framing sentence (mirrors the resume summary): *"I work on products where a confused user doesn't just churn, they lose funds."*
  (All suggested copy is em-dash-free by request; keep it that way when adapting.)
- ~line 354, the `dl` facts list: "Roles — UX Researcher · Product Manager" → "Roles — Senior UX Researcher". Keep "Years — 2018 — Present" (consistent with "eight years"; the 2016–2018 design years live on the resume as Earlier Career).

### A4. Selected Work section — titles and entries to match resume

`src/routes/index.tsx`, the `WORK` array (~lines 60–117):
- Web3UX `role` (~line 65): "Co-Founder · Sole Owner" → "Founder & Independent UX Researcher".
- Web3UX `bullets`: replace with the final resume's merged bullets (platform line; public portfolio line; publications + EthCC[8]/EthPrague talks line).
- Thesis `role` (~line 76): "UX Research Manager / Ops" → "UX Research Lead → UX Research Manager".
- Mezo child `role` (~line 90): "UX Research & Product Strategist" → "UX Research Manager & Product Strategy".
- Threshold child `role` (~line 104): "UX Research & Product Design Lead" → "UX Research & Design Lead".
- **Recommended addition:** one more top-level WorkItem for brand recognition —
  "ConsenSys / Alethio — Head of Design & User Research · 2018 — 2020" with the two resume bullets. ConsenSys is your most recognizable employer and it's invisible on the site today.

### A5. Writing & talks section

`src/routes/index.tsx`, the `WRITING` array (~lines 119–141):
- Add "The Silent Villain in Your Data: Why Researcher Bias Beats AI Bias" (2026) with its URL.
- Add the EthPrague 2026 talk once a video/slides link exists.
- Add the name-change footnote under the section (small muted text), dateless — Sasha kept
  speaking as "Sasha Tanase" after her 2022 marriage, so a date-based cutoff would mislead:
  *"Some talks are published under Sasha Tanase, my pre-marriage name, which I continued using on stage."*
  Use the same wording on the resume (replacing "Talks before 2022…").

### A6. Replace the hosted resume PDF — critical

`src/assets/resume.pdf.asset.json` points at the OLD resume. Export the final new resume to
PDF and replace the hosted asset, then verify the "Résumé (PDF)" link in the contact section
serves the new file. Until this is done, the site contradicts the source of truth.

### A7. Case-study collateral (from the report, still open)

Wire up `CaseStudyQuote` with real participant quotes; add a "Team / Stakeholders" meta row;
add retrospective paragraphs; add the Mezo PMF case study 07. (Report §4.2–4.4.)

---

## B. LinkedIn (field by field)

1. **Name:** keep "Sasha (Tanase) Luca". Set the **former name** field to "Tanase"
   (Edit intro → Additional name), visibility: everyone.
2. **Headline:** replace with:
   `Senior UX Researcher · Discovery, Research Ops & DevEx · 8 yrs in web3/fintech & high-stakes systems · ex-ConsenSys, Thesis · Speaker: DevCon, EthCC`
   (Removes "7 Years" — resume says eight — and the "& PM Roles" hedge.)
3. **About:** paste the resume summary paragraph ("One principle has guided my work for
   eight years…"), then one line: full research reports are public at sasha.web3ux.org;
   currently open to Senior UX Researcher roles (remote EU/US-overlap or hybrid Bucharest).
4. **Experience — align every entry to the resume:**
   - **Web3UX:** title "Founder & Independent UX Researcher", dates Apr 2022 – Present
     (mark "full-time since Jul 2025" in the description if you adopt that on the resume).
     Description = final resume bullets (platform, public portfolio, publications, talks).
   - **Thesis umbrella:** merge the two overlapping 2024–2025 sub-roles ("Research Manager"
     and "Research Manager/Ops and Product Strategist – Mezo" currently both show
     May 2024 – Jul 2025) into ONE: "UX Research Manager & Product Strategy — Mezo".
     Keep sub-roles: Threshold "UX Research & Design Lead" (2021–2024), Keep
     "UX Research & Design Lead" (2021). Paste the resume's metric bullets into each —
     current entries are 1–3 truncated lines.
   - **SelfKey:** retitle to match resume: "UX Researcher & Design Lead — SelfKey / KYC-Chain".
   - **ConsenSys / Alethio:** title already matches; paste the two resume bullets.
   - **GMP+WEBSTYLER** is the correct agency name (confirmed by Sasha). Check the LinkedIn
     entry and correct it there if it reads differently; dates 2016–2018 already match.
5. **Skills:** add User Research, UX Research, Usability Testing, Product Discovery,
   Research Ops, Jobs-to-be-Done; pin the top three; remove or demote Art Direction and
   Interactive Advertising (currently your two most-endorsed skills). Ask 3–4 close
   ex-colleagues to endorse the new ones.
6. **Featured:** delete the duplicate "The Future of Web3UX" card; pin in order:
   sasha.web3ux.org → EthCC[8] 2025 talk video → "The Silent Villain in Your Data" →
   AI-framework Medium article.
7. **Recommendations:** request 4–6 research-focused ones (Thesis/Mezo/Threshold PMs,
   founders, engineers) — same text doubles as website testimonials. The existing 2020
   design-praise recommendation can stay but shouldn't be the only voice.
8. **Open to work:** job titles "Senior UX Researcher, Lead UX Researcher, UX Research
   Manager" (drop Product Manager to match the resume's single positioning — re-add only if
   you truly want PM inbound); **add Remote** (EU/US-overlap) — currently it appears limited
   to Bucharest on-site/hybrid, which hides you from remote-filtering recruiters.
9. **Honors & awards:** trim the nine 2017 ADSTAR entries to the top 2–3.
10. **URL:** keep `linkedin.com/in/sasha-tanase-luca` — never change it.

---

## C. GitHub (from report §6, unchanged)

Bio → professional one-liner + site link; add profile README; pin `mezo-insights`, KeyFi
report, `UX-User-Research`; make `GitTutorial` and `Information-Unification` private.
Display name → match the chosen "Sasha (Tanase) Luca".

---

## D. Order of operations

1. Apply the 7 resume fixes → export final PDF.
2. Same day: replace the site's hosted resume PDF (A6) and make the website text changes (A1–A5).
3. Same day: LinkedIn fields (B1–B4, B8) — the facts must not disagree overnight.
4. This week: LinkedIn skills/featured/awards (B5, B6, B9), GitHub (C).
5. Ongoing: recommendations (B7), case-study collateral (A7).
