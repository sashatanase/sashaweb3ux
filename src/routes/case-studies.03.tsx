import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseStudySection } from "@/components/CaseStudyLayout";

const TITLE = "tBTC Bridge: Redesigning the Cross-Chain Flow";
const SYNOPSIS =
  "Bridging native Bitcoin to Ethereum triggers severe user anxiety due to a industry-wide history of smart contract exploits and protocol hacks. To de-risk this environment, I led an iterative usability study with 6 veteran cross-chain users to trace real-time interaction loops across minting and unminting workflows. By uncovering deep friction points such as intimidating recovery warnings and automated protocol labels mistaken for centralized human intermediaries. I provided a direct structural roadmap to transition technical jargon into an intuitive, privacy-preserving, and trust-building bridging experience.";

export const Route = createFileRoute("/case-studies/03")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Sasha Luca` },
      { name: "description", content: SYNOPSIS },
      { property: "og:title", content: `${TITLE} — Sasha Luca` },
      { property: "og:description", content: SYNOPSIS },
    ],
  }),
  component: CaseStudy03,
});

function CaseStudy03() {
  return (
    <CaseStudyLayout
      no="03"
      kicker="Case Study 3"
      year="2023"
      title={TITLE}
      synopsis={SYNOPSIS}
      meta={[
        { label: "Client", value: "Threshold Network" },
        { label: "Sector", value: "Cross-Chain Bridge" },
        { label: "Year", value: "2023" },
        { label: "Method", value: "Qualitative Usability Testing & Deep-Dive Interviews" },
        { label: "Sample", value: "6 participants" },
        { label: "Role", value: "Sole Researcher" },
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
