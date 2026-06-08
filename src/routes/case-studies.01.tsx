import { createFileRoute } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseStudySection,
  CaseStudyQuote,
  CaseStudySubhead,
} from "@/components/CaseStudyLayout";

const TITLE_PLAIN = "Tone of Voice App";
const SYNOPSIS_PLAIN =
  "Usability research on an AI brand voice generator, from Notion prototype to standalone product launch.";

export const Route = createFileRoute("/case-studies/01")({
  head: () => ({
    meta: [
      { title: `${TITLE_PLAIN} — Sasha Luca` },
      { name: "description", content: SYNOPSIS_PLAIN },
      { property: "og:title", content: `${TITLE_PLAIN} — Sasha Luca` },
      { property: "og:description", content: SYNOPSIS_PLAIN },
    ],
  }),
  component: CaseStudy01,
});

function CaseStudy01() {
  return (
    <CaseStudyLayout
      no="01"
      year="2024"
      title={
        <>
          Tone <em className="italic">of</em> Voice App
        </>
      }
      synopsis={
        <>
          Usability research on an AI brand voice generator, from Notion
          prototype to standalone product launch.
        </>
      }
      meta={[
        { label: "Client", value: "toneofvoice.app" },
        { label: "Sector", value: "AI / Branding" },
        { label: "Year", value: "2024" },
        { label: "Method", value: "Moderated Usability" },
        { label: "Sample", value: "6 Participants" },
        { label: "Role", value: "Sole Researcher" },
      ]}
    >
      <CaseStudySection number="01" title="Introduction">
        <p>
          Tone of Voice App is a tool for startups, small businesses and
          marketing teams to establish their brand tone of voice and in-house
          writing style. The app uses AI to create a tailored brand voice and
          writing guidelines in minutes, instead of days or weeks.
        </p>
        <p>
          The tool was created by Tahi Gichigi, a UX writer and tone-of-voice
          expert with 15 years of industry experience. He had built the tool as
          a Notion template and needed answers to three questions before
          committing to a standalone product: could people navigate the tool
          independently, did the generated content feel useful and specific
          enough, and where was friction slowing people down or causing them to
          disengage?
        </p>
        <p>
          I was brought in to plan and lead the usability research end to end,
          from the research plan to the final insights, so the founder had
          evidence-based direction for the product roadmap. I facilitated all
          six in-person usability sessions, analysed qualitative data,
          identified key themes, and delivered findings and actionable
          recommendations. Since we were tapping into the founder's network, we
          decided it was better for him to recruit users.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="User needs">
        <CaseStudyQuote>
          <span className="text-muted-foreground">As a</span> startup founder
          or marketing lead without a dedicated brand team
          <br />
          <span className="text-muted-foreground">I want to</span> quickly
          generate a brand voice and style guide tailored to my business
          <br />
          <span className="text-muted-foreground">so that I can</span>{" "}
          communicate consistently across all channels without hiring a
          specialist
        </CaseStudyQuote>
      </CaseStudySection>

      <CaseStudySection number="03" title="Research approach">
        <CaseStudySubhead>Planning and method selection</CaseStudySubhead>
        <p>
          I chose 1:1 moderated usability testing after ruling out two
          alternatives:
        </p>
        <ul className="ml-5 list-disc space-y-4 marker:text-muted-foreground">
          <li>
            <strong className="font-semibold">Surveys</strong> would have given
            broader reach, but the tool was a new concept with nuanced
            interaction patterns. We needed to observe real behaviour, not
            self-reported impressions. A survey wouldn't reveal why users were
            getting confused.
          </li>
          <li>
            <strong className="font-semibold">Unmoderated testing</strong>{" "}
            wasn't appropriate because the Notion prototype had quirks that
            required real-time management. The editable interface meant
            participants could accidentally delete parts of the UI, and the
            visible AI prompts caused confusion that needed in-the-moment
            intervention. Without a moderator, sessions would have broken down.
          </li>
        </ul>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
