import { createFileRoute } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseStudySection,
  CaseStudyQuote,
  CaseStudySubhead,
} from "@/components/CaseStudyLayout";
import reportAsset from "@/assets/keep-generative-user-research.pdf.asset.json";

const TITLE = "Keep Network: Node Operators Explorative User Study";
const SYNOPSIS =
  "Exploratory user research on decentralized node operators, evaluating the operational balance between heavy technical workloads and financial liquidation risks.";

export const Route = createFileRoute("/case-studies/05")({
  head: () => ({
    meta: [
      { title: `${TITLE} · Sasha (Tanase) Luca` },
      { name: "description", content: SYNOPSIS },
      { property: "og:title", content: `${TITLE} · Sasha (Tanase) Luca` },
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
      year="2021"
      title={TITLE}
      synopsis={SYNOPSIS}
      meta={[
        { label: "Client", value: "Keep Network" },
        { label: "Sector", value: "Node Infra & Staking" },
        { label: "Year", value: "2021" },
        { label: "Method", value: "Exploratory Interviews & Persona Mapping" },
        { label: "Sample", value: "3 participants" },
        { label: "Role", value: "Sole Researcher" },
      ]}
    >
      <CaseStudySection label="01" title="The Challenge: Surviving the High-Stakes Staking Puzzle">
        <p>
          For infrastructure operators in the Web3 space, running a node is rarely an automated
          "set-and-forget" task. Keep Network operators must balance two full-time jobs at once,
          maintaining continuous machine uptime while managing highly volatile locked collateral. If
          local infrastructure drops, or even if the random peers they are grouped with misbehave,
          operators face capital slashing and irreversible liquidations.
        </p>
        <p>
          The internal team assumed it understood how operators discover the protocol, keep up with
          updates, and manage risk. This generative study was launched to probe those assumptions:
          to chart how independent node operators actually navigate the network, and to find where
          the protocol's cognitive and financial load was quietly pushing them away.
        </p>
        <CaseStudyQuote attribution="Participant 1, on why he started running a node">
          "It was like a test for myself. Spinning up a node and running it and getting to know all
          the facts around that. It was like a quiz for me, like a test, and I liked that. In the
          first month it wasn't about money, it was about this puzzle and putting it together."
        </CaseStudyQuote>
      </CaseStudySection>

      <CaseStudySection label="02" title="The Approach: Rooting Out Systemic Blind Spots">
        <p>
          Uncovering the true operational workload of node operators required moving past
          stakeholder assumptions to direct user evidence.
        </p>

        <CaseStudySubhead>The Methodology</CaseStudySubhead>
        <p>
          Starting from stakeholder interviews and an assumption-gathering phase, I designed and
          facilitated 60-minute remote qualitative interviews, captured in Miro, transcribed, and
          synthesized into empathy maps and a low-level report in Dovetail. Topics ran from crypto
          discovery and DeFi risk profiles through the full node-running arc: learning, setup,
          monitoring, and liquidation events, plus sentiment on the upcoming Keep × NuCypher merger.
        </p>

        <CaseStudySubhead>The Participants</CaseStudySubhead>
        <p>
          3 self-operating node runners, out of 8 scheduled; recruiting this niche, time-poor
          audience proved brutal and most dropped out. All three were sophisticated,
          entrepreneurial, tech-savvy users, exactly the profile the protocol demands, since
          operating a Keep node requires balancing heavy technical work against live financial risk.
        </p>

        <CaseStudySubhead>The Benchmark</CaseStudySubhead>
        <p>
          The sessions overturned a core stakeholder belief: that operators track protocol changes
          through GitHub. None of them did. The study established a different operational baseline,
          operators are motivated by curiosity and yield, but on mainnet they all defected to
          third-party staking providers, because testnet slashing is theoretical and mainnet
          slashing is real money.
        </p>
      </CaseStudySection>

      <CaseStudySection label="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>
          The interviews exposed significant misalignments between the platform's technical
          architecture and the everyday realities of live node management.
        </p>

        <CaseStudySubhead>The GitHub Communication Fallacy</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Node operators are deeply embedded developers who
          natively monitor GitHub to catch network updates.
        </p>
        <p>
          <strong>The Reality:</strong> No participant used GitHub for updates; most operators are
          not developers at all. They pieced together protocol changes from Discord threads, Medium
          and blog posts, a noisy, unreliable pipeline they themselves called "bad communication".
          Some had been slashed or lost funds purely because an update never reached them. The need
          was unambiguous: a single source of truth for releases and protocol changes.
        </p>

        <CaseStudySubhead>The Active Desktop Prison</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Protocol parameters give operators sufficient economic
          control over their collateral.
        </p>
        <p>
          <strong>The Reality:</strong> Liquidation was the operators' single biggest fear, and they
          felt helpless against it. With no alerting tools, they had to sit at their desktops
          watching collateral ratios, on their toes the moment the ratio dropped toward the 125%
          threshold. Some over-collateralized just to buy peace of mind; others noted that fellow
          operators would have avoided liquidation entirely "if they were paying attention". What
          was sold as passive income was, in practice, an active job.
        </p>
        <CaseStudyQuote attribution="Participant 1, on what would change the game">
          "If you have some service of automated liquidity, avoiding liquidation, redeeming an
          automatic deposit, a redeeming pool or whatever, this would make everything easier for all
          node operators."
        </CaseStudyQuote>

        <CaseStudySubhead>The Peer-Slashing Helplessness</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Decentralized multi-node verification groups ensure
          bulletproof network trust.
        </p>
        <p>
          <strong>The Reality:</strong> Multi-operator dynamics induced real psychological stress.
          Good actors felt vulnerable because the protocol bundled their financial safety with
          strangers: if the other two operators in a signing group misbehaved or went offline,
          everyone was slashed. Being competent was not enough to be safe.
        </p>

        <CaseStudySubhead>The Squad Wall: Social Proof as Due Diligence</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Operators discover and vet protocols through
          documentation, audits, and whitepapers.
        </p>
        <p>
          <strong>The Reality:</strong> Investment decisions ran through what I named the "squad
          wall", a small trusted circle that shares information, splits research effort, and often
          pools capital. Vouches from friends, direct access to the team on Discord, and the
          founders' perceived competence mattered more than any document.
        </p>
        <CaseStudyQuote attribution="Participant 2">
          "Most of the projects that I look at, they're referred to me through someone I trust."
        </CaseStudyQuote>
        <CaseStudyQuote attribution="Participant 2, on vetting Keep">
          "I spent quite a bit of time talking to the team, so I understood the white paper and what
          it actually did. As I got to know Matt, I was like, he's a pretty smart guy. You know,
          back people that are smarter than yourself and things tend to work out pretty well."
        </CaseStudyQuote>

        <CaseStudySubhead>The Automation Preference</CaseStudySubhead>
        <p>
          Across their wider DeFi lives, all participants gravitated to protocols that quietly do
          jobs for them, self-repaying loans on Alchemix, auto-rebalancing pools on Balancer, and
          they wanted their rewards accessible and convertible into BTC and ETH, the assets they
          actually trust. The insight for Keep: every micro-job a product lifts off the user's
          shoulders is a retention feature, and complexity erodes the relationship.
        </p>

        <CaseStudySubhead>The Persona Set: From Devs to Wealth Collaborators</CaseStudySubhead>
        <p>
          The research reframed node operators not as pure developers but as financial participants
          with distinct operating modes: the <strong>Inquisitive Solo Tech</strong>, who runs nodes
          for the intellectual puzzle first and the money second; the{" "}
          <strong>Out-Sourced Staker</strong>, who can set up a testnet node but delegates mainnet
          operations to professional staking providers to protect capital and sleep; and the{" "}
          <strong>Wealth Cluster Investor</strong>, who splits costs, risk, and maintenance duties
          across a trusted inner circle.
        </p>
      </CaseStudySection>

      <CaseStudySection label="04" title="The Impact: Automating the Infrastructure Layer">
        <p>
          The findings converted structural operator anxieties into a concrete set of product
          directions, centered on reducing cognitive load and building automated fallbacks.
        </p>

        <CaseStudySubhead>A Single Source of Truth</CaseStudySubhead>
        <p>
          Replace the Discord-digging ritual with one dedicated place for updates, releases, and
          protocol changes, with redundant distribution across channels so every operator profile is
          reached.
        </p>

        <CaseStudySubhead>Automated Collateral Safety</CaseStudySubhead>
        <p>
          Pursue automated liquidation-avoidance mechanisms, alerting, easier monitoring, and top-up
          flows, so operators can defend their positions without living at their desks.
        </p>

        <CaseStudySubhead>Accessible Rewards</CaseStudySubhead>
        <p>
          Make rewards easy to claim and convert into the blue-chip assets operators actually hold,
          removing the friction between earning and storing value.
        </p>

        <CaseStudySubhead>A Prioritized Research Pipeline</CaseStudySubhead>
        <p>
          The study closed by mapping five candidate research directions, documentation, node
          operation process, user growth, developer experience, and liquidity pools, feeding
          directly into the team's ideation and prioritization workshops.
        </p>
      </CaseStudySection>

      <CaseStudySection label="05" title="Impact & Outcomes">
        <CaseStudySubhead>Research Outcomes</CaseStudySubhead>
        <p>
          <strong>The Communication Fix:</strong> Exposing the GitHub fallacy, and the funds lost to
          it, gave the team hard evidence that update distribution was a product problem, not a
          community-management nuisance, and reset the documentation and communication strategy.
        </p>
        <p>
          <strong>The Roadmap Pivot:</strong> The liquidation-helplessness findings pushed
          monitoring, alerting, and automation up the priority list, and the persona set gave the
          team a durable model of who actually operates nodes, informing both this protocol's next
          iteration and my later node-operator research (Case Study 01).
        </p>

        <CaseStudySubhead>Retrospective</CaseStudySubhead>
        <p>
          This study's honest constraint is its sample: 3 of 8 scheduled operators showed up. I
          treated the output as directional, strong for hypothesis generation, insufficient for
          quantified claims, and it earned its keep by killing false stakeholder assumptions early
          and setting the agenda for the larger studies that followed. It also taught me to
          over-recruit aggressively for niche technical audiences.
        </p>

        <div className="mt-10">
          <a
            href={reportAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black px-6 py-4 font-mono text-xs uppercase tracking-[0.22em] text-white transition-transform hover:-translate-y-0.5"
          >
            Read the full report
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
