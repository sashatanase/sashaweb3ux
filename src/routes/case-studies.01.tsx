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
      { title: `${TITLE_PLAIN} · Sasha (Tanase) Luca` },
      { name: "description", content: SYNOPSIS_PLAIN },
      { property: "og:title", content: `${TITLE_PLAIN} · Sasha (Tanase) Luca` },
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
          Diary study on a Web3 node client setup, testing complex cryptographic infrastructure
          against the operational realities of node operators.
        </>
      }
      meta={[
        { label: "Client", value: "Threshold Network" },
        { label: "Sector", value: "Network Infra" },
        { label: "Year", value: "2022" },
        { label: "Method", value: "Diary Study, Interview, SUS" },
        { label: "Sample", value: "5 participants" },
        { label: "Role", value: "Sole Researcher" },
      ]}
    >
      <CaseStudySection
        number="01"
        title="The Challenge: Uncovering the Reality of the tBTC Node Setup"
      >
        <p>
          The client code is the heartbeat of the Threshold Network, enabling DevOps engineers and
          independent operators to run tBTC nodes. But setting up a node is a high-stakes,
          technically demanding process. While the core team had mapped out the user journey, those
          maps were built entirely on stakeholder assumptions. No one knew what the actual,
          unpolished operator experience looked like in the wild.
        </p>
        <p>
          To bridge the gap between assumption and reality, I designed a mixed-methods study to
          track how users truly interacted with the client code across a multi-day configuration
          process.
        </p>
        <CaseStudyQuote attribution="Participant 4, post-study interview">
          "From all the nodes that I've set up, tBTC is in the top 3 most difficult nodes. My top 3
          is: 1. Ethereum 2.0, 2. PRE, 3. tBTC &amp; Random Beacon."
        </CaseStudyQuote>
      </CaseStudySection>

      <CaseStudySection number="02" title="The Approach: Capturing Friction in the Wild">
        <p>
          We needed to see the setup process through the eyes of the operators as it happened, not
          just hear about it after the fact.
        </p>
        <CaseStudySubhead>The Methodology</CaseStudySubhead>
        <p>
          I launched a 6-day longitudinal diary study. Using GitHub Gists, participants logged their
          real-time progress, commands, and frustrations using "Write-Along" and "Snippet" tracking
          techniques. When this part was finished, I followed up with 60-minute deep-dive interviews
          to unpack their diary entries.
        </p>
        <CaseStudySubhead>The Participants</CaseStudySubhead>
        <p>
          5 highly technical users. These were not beginners; they had extensive Linux, server
          configuration, and prior protocol node setup experience. All of them were already running
          PRE nodes on mainnet. The actual configuration work took them 2.6 hours on average, spread
          across the study's 4 working days.
        </p>
        <CaseStudySubhead>The Benchmark</CaseStudySubhead>
        <p>
          To quantify the qualitative chaos, I administered a Post-Setup System Usability Scale
          (SUS) survey via Typeform. The score landed at 73.125/100. While technically "above
          average" (68), the diary entries painted a much more vulnerable picture: the system was
          functional, but the risk of user error was alarmingly high.
        </p>
      </CaseStudySection>

      <CaseStudySection number="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>
          The diary logs and interviews revealed that real-world operator behavior was drastically
          different from what the team had anticipated.
        </p>
        <CaseStudySubhead>The Trust Gap: "I Would Not Run This on Mainnet"</CaseStudySubhead>
        <p>
          The most severe finding: 4 out of 5 participants stated they would not run a node on
          mainnet yet. Not because the setup failed, but because the documentation offered no
          monitoring tooling or metrics, and none of them knew what a successful, healthy node
          actually looked like. For operators staking real funds, that opacity translated directly
          into a risk of loss they were not willing to take.
        </p>
        <CaseStudySubhead>The Hardware Downgrade Risk</CaseStudySubhead>
        <p>
          <span className="text-muted-foreground">The Assumption:</span> We expected operators to
          follow the high-resource server recommendations.
        </p>
        <p>
          <span className="text-muted-foreground">The Reality:</span> Because the initial CPU and
          RAM usage idled below 5%, participants immediately concluded the system was over-specced
          and planned to downgrade their hardware. This exposed a critical blind spot: downgrading
          would put them at risk of catastrophic network slashing once modular features scaled up
          and load increased.
        </p>
        <CaseStudyQuote attribution="Participant 2, diary entry on machine requirements">
          "Beside the first 16 hours or so, with a CPU usage of around 75%, the rest of the time the
          peak CPU usage has been of 5%, and the max RAM used the whole time has not reached even
          30%. That would mean that with these same conditions a node with 1vCPU and 1GB RAM would
          also meet the needs. I think adjusting the requirements is important."
        </CaseStudyQuote>
        <CaseStudySubhead>The False Sensation of Success</CaseStudySubhead>
        <p>
          The client was designed to display a stylized ASCII art banner when the Docker container
          successfully launched. Users saw this visual cue, assumed their setup was flawless, and
          walked away. In reality, that banner masked severe downstream connectivity warnings,
          leaving broken nodes unattended. All participants reported frustration and confusion at
          this stage; some said the system made them "feel stupid" because they could not verify
          their own success.
        </p>
        <CaseStudyQuote attribution="Participant 2, diary entry">
          "After following the logs a few more minutes it is still unclear if the node is running
          correctly or not. Even though it's not stopping I assume it's still not running correctly.
          I don't know how to test if the node runs correctly or not and have no idea what to do
          next."
        </CaseStudyQuote>
        <CaseStudySubhead>The Address Overwhelm</CaseStudySubhead>
        <p>
          The staking dashboard offered a 3-address setup (Provider, Authorizer, Beneficiary) to
          give enterprise users maximum flexibility. Instead, it caused severe cognitive overload.
          To bypass the friction, almost all users simply copied the exact same wallet address into
          all three fields, completely neutralizing the intended security architecture.
        </p>
        <CaseStudyQuote attribution="Participant 2, post-study interview">
          "I had some issues with the three addresses. I did not know why they were all displayed if
          they were pre-filled anyway. I still do not understand very well what's the relationship
          with them. I wish I'd have some tooltips in the Stake Details about them."
        </CaseStudyQuote>
        <CaseStudySubhead>Cryptic Client Logging</CaseStudySubhead>
        <p>
          System logs routinely mislabeled severe bootstrap warnings as harmless "INFO" messages.
          When errors did occur, the logs failed to communicate whether the failure was local (the
          user's fault) or global (network-wide), completely stalling the troubleshooting process.
        </p>
        <CaseStudyQuote attribution="Participant 2, post-study interview">
          "The warning messages were really cryptic, technical and hard to understand. Maybe the
          team understands what's happening but I for one had no clue where the problem was. Was it
          on my end or their end?"
        </CaseStudyQuote>
        <CaseStudySubhead>What Held Up Under Pressure</CaseStudySubhead>
        <p>
          Not everything broke. The documentation itself performed well: most participants completed
          the setup without hunting for external guides, and the bundled Docker script drew genuine
          enthusiasm. The gaps were specific, missing Monitoring and Troubleshooting sections, not
          systemic.
        </p>
        <CaseStudyQuote attribution="Participant 5, post-study interview">
          "The documentation was really good and straightforward. Far better than the official one
          for PRE. When I actually set up my PRE node I used an unofficial guide that was so well
          written and so easy to follow that I did not even bother to read the official one any
          more."
        </CaseStudyQuote>
      </CaseStudySection>

      <CaseStudySection number="04" title="The Impact: Rewriting the Developer Experience">
        <p>
          This research acted as a wake-up call, proving that an "above average" SUS score isn't
          enough to prevent catastrophic user errors in Web3 infrastructure. I synthesized these
          insights into an "Information Radiator" blueprint, giving the core team an exact roadmap
          for what to fix before the mainnet launch.
        </p>
        <CaseStudySubhead>Strategic Recommendations Delivered</CaseStudySubhead>
        <ul className="ml-5 list-disc space-y-4 marker:text-muted-foreground">
          <li>
            <strong className="font-semibold">Product Architecture:</strong> Split the staking UI
            into a "Default" mode for standard operators and an "Expert" mode, shielding standard
            users from the 3-address cognitive overload while retaining advanced parameters for
            enterprise teams.
          </li>
          <li>
            <strong className="font-semibold">Documentation Strategy:</strong> Add dedicated
            "Monitoring &amp; Troubleshooting" sections built directly from the participants'
            requested checklist (peer count alerts, bootstrap connectivity, ETH balance triggers,
            node health endpoints, a plug-and-play Grafana dashboard), and explain explicitly why
            the high machine requirements exist, to defuse the downgrade-and-get-slashed scenario.
          </li>
          <li>
            <strong className="font-semibold">Developer Experience (DX):</strong> Re-engineer the
            client logging hierarchy with correct severity grades and verbose error messaging that
            differentiates between user-level and network-level failures, and gate the "success"
            banner on actual network connectivity.
          </li>
        </ul>
        <p>
          The team committed to all three tracks, documentation, node messaging, and UI, as the
          direct next steps out of this study, folding the monitoring checklist into the official
          node docs ahead of the mainnet push.
        </p>
        <CaseStudySubhead>Retrospective</CaseStudySubhead>
        <p>
          With five expert participants, this study traded breadth for depth: it captured rich,
          honest longitudinal data but could not quantify how often each failure occurs across the
          wider operator base. The self-hosting finding in particular (this cohort defaulted to
          self-hosted machines despite recommendations against it) deserved a follow-up survey with
          a larger operator sample.
        </p>
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
