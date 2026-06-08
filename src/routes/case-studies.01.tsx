import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseStudySection } from "@/components/CaseStudyLayout";

const TITLE = "tBTC and Random Beacon Client Code Diary Study.";
const SYNOPSIS =
  "This 6-day Diary Study evaluated how DevOps engineers configure tBTC nodes. While usability scored an above-average 73.125 (SUS), the research uncovered critical blind spots including misleading success cues, cryptic logs, and a high risk of users downgrading their hardware, which would trigger financial slashing. These insights provided the development team with an immediate blueprint to overhaul the product with a \"Default vs. Expert\" staking UI, better error diagnostics, and mandatory monitoring documentation.";

export const Route = createFileRoute("/case-studies/01")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Sasha Luca` },
      { name: "description", content: SYNOPSIS },
      { property: "og:title", content: `${TITLE} — Sasha Luca` },
      { property: "og:description", content: SYNOPSIS },
    ],
  }),
  component: CaseStudy01,
});

function CaseStudy01() {
  return (
    <CaseStudyLayout
      no="01"
      kicker="Case Study 1"
      year="2023"
      title={TITLE}
      synopsis={SYNOPSIS}
      meta={[
        { label: "Client", value: "Threshold Network" },
        { label: "Sector", value: "Network Infrastructure" },
        { label: "Year", value: "2023" },
        { label: "Method", value: "Diary Study" },
        { label: "Sample", value: "5" },
        { label: "Role", value: "Sole Researcher" },
      ]}
    >
      <CaseStudySection label="Context" title="The product and the people behind it.">
        <p>
          Add background on the Threshold Network, the tBTC product, and the DevOps
          engineers responsible for running nodes. Replace this placeholder with the real
          context when ready.
        </p>
      </CaseStudySection>

      <CaseStudySection label="Challenge" title="What we set out to learn.">
        <p>
          Describe the research questions, the risks the team was worried about, and the
          decisions the study needed to inform.
        </p>
      </CaseStudySection>

      <CaseStudySection label="Approach" title="A 6-day Diary Study with 5 operators.">
        <p>
          Outline the method, recruitment, study materials, and how data was captured day
          by day across the diary.
        </p>
      </CaseStudySection>

      <CaseStudySection label="Findings" title="Above-average SUS — with critical blind spots.">
        <p>
          Document the 73.125 SUS score, misleading success cues, cryptic logs, and the
          hardware-downgrade slashing risk uncovered in the study.
        </p>
      </CaseStudySection>

      <CaseStudySection label="Outcome" title="A blueprint for the next release.">
        <p>
          Summarize the recommendations adopted by the team: the Default vs. Expert
          staking UI, improved error diagnostics, and mandatory monitoring documentation.
        </p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
