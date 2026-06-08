import { createFileRoute } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseStudySection,
  CaseStudyQuote,
  CaseStudySubhead,
} from "@/components/CaseStudyLayout";

const TITLE_PLAIN = "Diary of a Node Operator: Redesigning the tBTC Setup Experience";
const SYNOPSIS_PLAIN =
  "Usability research on a Web3 node setup client, from stakeholder-assumed journey maps to an optimized developer experience launch.";

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
      year="2023"
      title="Optimizing the tBTC Node Setup Experience"
      synopsis={
        <>
          Usability research on a Web3 node setup client, from
          stakeholder-assumed journey maps to an optimized developer
          experience launch.
        </>
      }
      meta={[
        { label: "Client", value: "Threshold Network" },
        { label: "Sector", value: "Network Infra" },
        { label: "Year", value: "2023" },
        { label: "Method", value: "Diary Study, Interview, SUS" },
        { label: "Sample", value: "5 participants" },
        { label: "Role", value: "Sole Researcher" },
      ]}
    >
      <CaseStudySection number="01" title="Introduction">
        <p>
          tBTC is a decentralized Bitcoin bridge that lets users deposit and
          redeem BTC on Ethereum without relying on intermediaries. The Threshold
          Network runs the nodes that power this bridge, and node operators earn
          rewards for keeping the network secure.
        </p>
        <p>
          Setting up a tBTC node was notoriously complex. The documentation
          assumed deep technical knowledge, the CLI commands were opaque, and
          operators frequently got stuck at configuration steps. The Threshold
          team had built journey maps based on stakeholder assumptions, but
          real-world behavior didn't match. They needed to understand where
          operators were actually dropping off and why.
        </p>
        <p>
          I was brought in to run a mixed-methods study: a two-week diary study
          to capture pain points in the wild, followed by in-depth interviews
          and a System Usability Scale (SUS) survey to quantify the experience.
          I recruited five active and aspiring node operators, facilitated all
          sessions, analyzed qualitative and quantitative data, and delivered
          actionable recommendations that shaped the next iteration of the setup
          flow.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="User needs">
        <CaseStudyQuote>
          <span className="text-muted-foreground">As a</span> node operator
          or aspiring staker in the Threshold Network
          <br />
          <span className="text-muted-foreground">I want to</span> set up
          and maintain a tBTC node without needing a DevOps background
          <br />
          <span className="text-muted-foreground">so that I can</span>{" "}
          earn rewards and contribute to network security without spending
          days troubleshooting
        </CaseStudyQuote>
      </CaseStudySection>

      <CaseStudySection number="03" title="Research approach">
        <CaseStudySubhead>Planning and method selection</CaseStudySubhead>
        <p>
          I designed a three-phase study to balance breadth and depth:
        </p>
        <ul className="ml-5 list-disc space-y-4 marker:text-muted-foreground">
          <li>
            <strong className="font-semibold">Diary Study</strong> gave us
            a continuous view of the setup process as it happened. Operators
            logged screenshots, error messages, and mood ratings over two weeks.
            This captured friction that would have been forgotten in a retrospective
            interview.
          </li>
          <li>
            <strong className="font-semibold">In-depth Interviews</strong>{" "}
            followed the diary period. I probed on the most severe pain points
            and validated assumptions from the stakeholder journey maps.
            Operators walked me through their actual workflows, not idealized ones.
          </li>
          <li>
            <strong className="font-semibold">System Usability Scale (SUS)</strong>{" "}
            provided a benchmark score for the existing setup experience and
            a metric to measure improvement after redesign. The baseline SUS
            score was well below industry average, confirming qualitative findings.
          </li>
        </ul>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
