import { createFileRoute } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseStudySection,
  CaseStudyQuote,
  CaseStudySubhead,
} from "@/components/CaseStudyLayout";
import reportAsset from "@/assets/tbtc-diary-study.pdf.asset.json";

const TITLE_PLAIN = "Diary of a Node Operator: Redesigning the tBTC Setup Experience";
const SYNOPSIS_PLAIN =
  "Diary study on a Web3 node client setup, testing complex cryptographic infrastructure against the operational realities of node operators.";

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
      year="2022"
      title="Diary of a Node Operator: Redesigning the tBTC Setup Experience"
      synopsis={
        <>
          Diary study on a Web3 node client setup, testing complex
          cryptographic infrastructure against the operational realities
          of node operators.
        </>
      }
      meta={[
        { label: "Client", value: "Threshold Network", parent: "Thesis*" },
        { label: "Sector", value: "Network Infra" },
        { label: "Year", value: "2022" },
        { label: "Method", value: "Diary Study, Interview, SUS" },
        { label: "Sample", value: "5 participants" },
        { label: "Role", value: "Sole Researcher" },
      ]}
    >
      <CaseStudySection number="01" title="The Challenge: Uncovering the Reality of the tBTC Node Setup">
        <p>
          The client code is the heartbeat of the Threshold Network, enabling
          DevOps engineers and independent operators to run tBTC nodes. But
          setting up a node is a high-stakes, technically demanding process.
          While the core team had mapped out the user journey, those maps were
          built entirely on stakeholder assumptions. No one knew what the actual,
          unpolished operator experience looked like in the wild.
        </p>
        <p>
          To bridge the gap between assumption and reality, I designed a
          mixed-methods study to track how users truly interacted with the
          client code across a multi-day configuration process.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="The Approach: Capturing Friction in the Wild">
        <p>
          We needed to see the setup process through the eyes of the operators
          as it happened, not just hear about it after the fact.
        </p>
        <CaseStudySubhead>The Methodology</CaseStudySubhead>
        <p>
          I launched a 6-day longitudinal diary study. Using GitHub Gists,
          participants logged their real-time progress, commands, and
          frustrations using "Write-Along" and "Snippet" tracking techniques.
          When this part was finished, I followed up with 60-minute deep-dive
          interviews to unpack their diary entries.
        </p>
        <CaseStudySubhead>The Participants</CaseStudySubhead>
        <p>
          5 highly technical users. These were not beginners; they had
          extensive Linux, server configuration, and prior protocol node setup
          experience.
        </p>
        <CaseStudySubhead>The Benchmark</CaseStudySubhead>
        <p>
          To quantify the qualitative chaos, I administered a Post-Setup System
          Usability Scale (SUS) survey via Typeform. The score landed at
          73.125/100. While technically "above average" (68), the diary entries
          painted a much more vulnerable picture: the system was functional,
          but the risk of user error was alarmingly high.
        </p>
      </CaseStudySection>

      <CaseStudySection number="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>
          The diary logs and interviews revealed that real-world operator
          behavior was drastically different from what the team had anticipated.
          The study uncovered three massive strategic pivots.
        </p>
        <CaseStudySubhead>The Hardware Downgrade Risk</CaseStudySubhead>
        <p>
          <span className="text-muted-foreground">The Assumption:</span> We
          expected operators to follow the high-resource server recommendations.
        </p>
        <p>
          <span className="text-muted-foreground">The Reality:</span> Because
          the initial CPU and RAM usage idled below 5%, participants
          immediately concluded the system was over-specced and planned to
          downgrade their hardware. This exposed a critical blind spot:
          downgrading would put them at risk of catastrophic network slashing
          once modular features scaled up and load increased.
        </p>
        <CaseStudySubhead>The False Sensation of Success</CaseStudySubhead>
        <p>
          The client was designed to display a stylized ASCII art banner when
          the Docker container successfully launched. Users saw this visual cue,
          assumed their setup was flawless, and walked away. In reality, that
          banner masked severe downstream connectivity warnings, leaving broken
          nodes unattended.
        </p>
        <CaseStudySubhead>The Address Overwhelm</CaseStudySubhead>
        <p>
          The staking dashboard offered a 3-address setup (Provider, Authorizer,
          Beneficiary) to give enterprise users maximum flexibility. Instead,
          it caused severe cognitive overload. To bypass the friction, almost
          all users simply copied the exact same wallet address into all three
          fields, completely neutralizing the intended security architecture.
        </p>
        <CaseStudySubhead>Cryptic Client Logging</CaseStudySubhead>
        <p>
          System logs routinely mislabeled severe bootstrap warnings as
          harmless "INFO" messages. When errors did occur, the logs failed to
          communicate whether the failure was local (the user's fault) or
          global (network-wide), completely stalling the troubleshooting
          process.
        </p>
      </CaseStudySection>

      <CaseStudySection number="04" title="The Impact: Rewriting the Developer Experience">
        <p>
          This research acted as a wake-up call, proving that an "above
          average" SUS score isn't enough to prevent catastrophic user errors
          in Web3 infrastructure. I synthesized these insights into an
          "Information Radiator" blueprint, giving the core team an exact
          roadmap for what to fix before the mainnet launch.
        </p>
        <CaseStudySubhead>Strategic Recommendations Delivered</CaseStudySubhead>
        <ul className="ml-5 list-disc space-y-4 marker:text-muted-foreground">
          <li>
            <strong className="font-semibold">Product Architecture:</strong>{" "}
            We split the staking UI into a "Default" mode for standard
            operators and an "Expert" mode, shielding standard users from the
            3-address cognitive overload while retaining advanced parameters
            for enterprise teams.
          </li>
          <li>
            <strong className="font-semibold">Documentation Strategy:</strong>{" "}
            We introduced mandatory "Monitoring & Troubleshooting" sections.
            This explicitly detailed why high-resource specs were required,
            successfully preventing the node downgrade behavior.
          </li>
          <li>
            <strong className="font-semibold">Developer Experience (DX):</strong>{" "}
            We completely re-engineered the client logging hierarchy, injecting
            explicit severity grades and verbose error messaging to
            differentiate between user-level and network-level failures.
          </li>
        </ul>
        <div className="mt-12">
          <a
            href={reportAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            Read the full report ↗
          </a>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
