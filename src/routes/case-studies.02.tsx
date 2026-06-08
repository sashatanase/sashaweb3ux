import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseStudySection } from "@/components/CaseStudyLayout";

const TITLE = "Mezo Borrow and mUSD: Optimizing the Bitcoin Liquidity Portal";
const SYNOPSIS =
  "Long-term Bitcoin holders frequently regret selling native BTC for real-world expenses, yet navigating Web3 borrowing platforms triggers heavy cognitive strain and liquidation anxiety. To solve this, I conducted a usability study with 8 tech-savvy investors to analyze live interaction with collateral ratios and stablecoin mechanics. By replacing qualitative friction with concrete product upgrades, including dual USD pricing tags and primary-screen liquidation alerts, we re-engineered the loan loop to build verified user trust and confidence.";

export const Route = createFileRoute("/case-studies/02")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Sasha Luca` },
      { name: "description", content: SYNOPSIS },
      { property: "og:title", content: `${TITLE} — Sasha Luca` },
      { property: "og:description", content: SYNOPSIS },
    ],
  }),
  component: CaseStudy02,
});

function CaseStudy02() {
  return (
    <CaseStudyLayout
      no="02"
      kicker="Case Study 2"
      year="2025"
      title={TITLE}
      synopsis={SYNOPSIS}
      meta={[
        { label: "Client", value: "Mezo" },
        { label: "Sector", value: "Bitcoin DeFi" },
        { label: "Year", value: "2025" },
        { label: "Method", value: "Interviews & Usability Testing" },
        { label: "Sample", value: "8 participants" },
        { label: "Role", value: "Researcher Lead" },
      ]}
    >
      <CaseStudySection label="Context" title="Project background.">
        <p>Replace this placeholder with the real context for this case study.</p>
      </CaseStudySection>
      <CaseStudySection label="Challenge" title="What we set out to learn.">
        <p>Describe the research questions and the decisions the work informed.</p>
      </CaseStudySection>
      <CaseStudySection label="Approach" title="How the research was run.">
        <p>Outline the method, recruitment, and how data was collected and analyzed.</p>
      </CaseStudySection>
      <CaseStudySection label="Findings" title="Key insights.">
        <p>Document the most important insights surfaced by the study.</p>
      </CaseStudySection>
      <CaseStudySection label="Outcome" title="What changed.">
        <p>Summarize the recommendations and the impact on the product.</p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
