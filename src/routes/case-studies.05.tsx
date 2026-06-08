import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseStudySection, CaseStudySubhead } from "@/components/CaseStudyLayout";
import reportAsset from "@/assets/keep-generative-user-research.pdf.asset.json";

const TITLE = "Keep Network: Node Operators Explorative User Study";
const SYNOPSIS =
  "Exploratory user research on decentralized node operators, evaluating the operational balance between heavy technical workloads and financial liquidation risks.";

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
      year="2021"
      title={TITLE}
      synopsis={SYNOPSIS}
      meta={[
        { label: "Client", value: "Keep Network" },
        { label: "Sector", value: "Node Infra & Staking" },
        { label: "Year", value: "2021" },
        { label: "Method", value: "Exploratory Interviews & Persona Mapping" },
        { label: "Sample", value: "8 participants" },
        { label: "Role", value: "Sole Researcher" },
      ]}
    >
      <CaseStudySection label="01" title="The Challenge: Surviving the High-Stakes Staking Puzzle">
        <p>
          For infrastructure operators in the Web3 space, running a node is rarely an automated "set-and-forget" task. In complex ecosystem networks, operators must maintain continuous machine uptime while locking up highly volatile capital to back programmatic data verification. If local infrastructure drops or network peers fail to coordinate properly, operators face immediate capital slashing and irreversible protocol liquidations.
        </p>
        <p>
          While the internal product team assumed technical document updates on developer platforms were sufficient to guide their target community, network operators were actively losing funds to communication gaps. The Keep Network launched this generative research project to systematically chart how independent node operators navigate these abstract technical networks and evaluate their psychological threshold for systemic smart contract and governance risks.
        </p>
      </CaseStudySection>

      <CaseStudySection label="02" title="The Approach: Rooting Out Systemic Blind Spots">
        <p>
          Uncovering the true operational workload of network node managers required moving past standard developer feedback to target direct user behaviors.
        </p>

        <CaseStudySubhead>The Methodology</CaseStudySubhead>
        <p>
          I conducted 60-minute remote qualitative interviews backed by continuous data capture using Dovetail and Miro empathy mapping boards. The question architecture centered on past discovery vectors, active node tracking behaviors, real-world liquidation events, and user sentiment surrounding active governance protocol mergers.
        </p>

        <CaseStudySubhead>The Participants</CaseStudySubhead>
        <p>
          Highly sophisticated, entrepreneurial, and tech-savvy individuals with an intermediate-to-advanced understanding of financial abstractions. Every participant had extensive experience setting up testnet networks and managing live infrastructure nodes.
        </p>

        <CaseStudySubhead>The Benchmark</CaseStudySubhead>
        <p>
          The user sessions shattered the stakeholder assumption that node operators closely track core code repositories. The research established a new operational benchmark: node operators are motivated by passive wealth accumulation and automated peace of mind. When forced to choose between complex, manually managed open-source platforms and integrated third-party custodial services, users universally defected to outsourced infrastructure providers to protect their time and capital.
        </p>
      </CaseStudySection>

      <CaseStudySection label="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>
          The qualitative findings exposed significant misalignments between the platform's technical architecture and the everyday realities of live node management.
        </p>

        <CaseStudySubhead>The GitHub Communication Fallacy</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Node operators are deeply embedded developers who natively monitor GitHub commits to implement network updates.
        </p>
        <p>
          <strong>The Reality:</strong> Not a single participant reviewed GitHub for protocol changes. Instead, operators relied entirely on filtered Discord chats or blog posts to catch system updates. This communication gap led directly to severe financial penalties, as operators missed unannounced network adjustments and suffered slashing events purely due to poor documentation distribution.
        </p>

        <CaseStudySubhead>The Active Desktop Prison</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Protocol parameters naturally give operators complete economic control over their collateral allocation.
        </p>
        <p>
          <strong>The Reality:</strong> Operators felt entirely helpless and out of control. The network lacked mobile monitoring tools or dedicated alert integrations, turning node operation into a grueling desktop job. Users lived in constant anxiety, forced to manually check dashboards at their desks to ensure their collateral ratios didn't slip past critical 125% liquidation thresholds.
        </p>

        <CaseStudySubhead>The Peer-Slashing Helplessness</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Decentralized multi-node verification groups ensure bulletproof network trust and security.
        </p>
        <p>
          <strong>The Reality:</strong> Multi-operator dynamics induced immense psychological stress. Good-acting operators felt vulnerable because the protocol's architecture bundled their financial safety with unknown third parties. If their random peers went offline or failed to respond, the entire group faced liquidation, sparking intense frustration over shared penalties.
        </p>

        <CaseStudySubhead>The Testnet Validation Mirage</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Running an open testnet provides operators with an accurate mental model of mainnet configuration and risk management.
        </p>
        <p>
          <strong>The Reality:</strong> Testnet performance created a false sense of security. Operators viewed the testnet as a lightweight game where slashing wasn't "real". Once they transitioned to the mainnet, the immediate reality of hard financial loss caused many to abandon native configurations entirely and opt for third-party staking providers.
        </p>

        <CaseStudySubhead>The Strategic Persona Shift: From Devs to Wealth Collaborators</CaseStudySubhead>
        <p>
          The research forced the engineering team to reframe node operators not as pure developers, but as sophisticated financial participants who cluster together to optimize capital efficiency.
        </p>
        <p>
          <strong>The Inquisitive Solo Tech:</strong> Driven by intrinsic curiosity, this user treats new network deployment as a personal intellectual puzzle. They are tech-savvy operators who enjoy assembling technical architecture and tracking runtime logs purely for the challenge. However, their patience breaks if base code samples fail, causing them to stall and look elsewhere if developer documentation is poorly structured.
        </p>
        <p>
          <strong>The Out-Sourced Staker:</strong> This user cares exclusively about capital preservation and yield optimization. While they possess the technical ability to launch a testnet node, they refuse to take on the active daily workload of mainnet maintenance. They deliberately outsource operations to professional third-party staking providers, happily paying a premium to guarantee flawless uptime and secure peaceful sleep.
        </p>
        <p>
          <strong>The Wealth Cluster Node:</strong> Highly strategic, non-developer investors who view node operations as a long-term enterprise. To handle steep protocol entrance fees and reduce personal downside risk, they form tight inner trust circles or "Squad Goals" to split financial allocation and share real-time maintenance duties among trusted friends.
        </p>
      </CaseStudySection>

      <CaseStudySection label="04" title="The Impact: Automating the Infrastructure Layer">
        <p>
          This exploratory research triggered an internal design shift, proving that scaling infrastructure requires reducing cognitive load and building automated fallback systems. I translated these structural operator anxieties into a definitive set of product requirements.
        </p>

        <CaseStudySubhead>Centralized Status Truth</CaseStudySubhead>
        <p>
          Formulated plans to replace fragmented Discord chats with a single, dedicated platform dashboard for all updates and critical network updates, ensuring a reliable source of truth for non-developer operators.
        </p>

        <CaseStudySubhead>Automated Collateral Safety</CaseStudySubhead>
        <p>
          Championed the introduction of automated balance top-ups and programmatic pool mechanisms to let nodes auto-defend against liquidation during extreme market drops.
        </p>

        <CaseStudySubhead>Mobile Risk Alerting</CaseStudySubhead>
        <p>
          Spearheaded the development of targeted push notification protocols across email and mobile channels, relieving users from constant desktop monitoring.
        </p>

        <CaseStudySubhead>Reward Path Streamlining</CaseStudySubhead>
        <p>
          Initiated a total rework of the rewards panel to allow direct, single-click claims and auto-compounding options into blue-chip assets like BTC and ETH, removing third-party dependencies.
        </p>
      </CaseStudySection>

      <CaseStudySection label="05" title="Impact & Outcomes">
        <CaseStudySubhead>Research Outcomes</CaseStudySubhead>
        <p>
          <strong>The Core Roadmap Pivot:</strong> The identification of widespread user dropouts due to configuration complexity forced a major product transition, moving design priorities toward automated processes and an optimized developer experience.
        </p>
        <p>
          <strong>The Documentation Rehaul:</strong> The discovery that third-party Staking Providers bore the brunt of technical slashing redefined the platform's documentation strategy, shifting focus toward deep framework testing and reliable code samples.
        </p>

        <CaseStudySubhead>Broader Outcomes</CaseStudySubhead>
        <p>
          Following this study, the engineering team launched specialized prioritization workshops to streamline the node management pipeline. By removing technical bottlenecks and addressing the structural lack of control, the next iteration of the protocol directly reduced systemic user errors, providing node managers with a significantly more secure operational environment before mainnet capital deployment.
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
