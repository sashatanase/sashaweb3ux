import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseStudySection } from "@/components/CaseStudyLayout";

const TITLE = "Case study title five.";
const SYNOPSIS =
  "A short synopsis of the project — the problem, the research approach, and the outcome. Replace this placeholder with the real summary when the case study is ready.";

export const Route = createFileRoute("/case-studies/05")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Sasha Luca` },
      { name: "description", content: SYNOPSIS },
      { property: "og:title", content: `${TITLE} — Sasha Luca` },
      { property: "og:description", content: SYNOPSIS },
    ],
  }),
  component: CaseStudy05,
});

function CaseStudy05() {
  return (
    <CaseStudyLayout
      no="05"
      kicker="Case Study 5"
      year="2022"
      title={TITLE}
      synopsis={SYNOPSIS}
      meta={[
        { label: "Client", value: "Client name" },
        { label: "Sector", value: "Sector" },
        { label: "Year", value: "2022" },
        { label: "Method", value: "Method" },
        { label: "Sample", value: "Sample" },
        { label: "Role", value: "Role" },
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
