import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseStudySection } from "@/components/CaseStudyLayout";
import reportAsset from "@/assets/tbtc-iterative-study.pdf.asset.json";

const TITLE = "tBTC v2: Bridged/Wrapped BTC Asset User Study";
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
      kicker="tBTC Bridge: Redesigning the Cross-Chain Flow"
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
      <CaseStudySection number="01" title="The Challenge: Overcoming the Smart Contract Defense Mechanism">
        <p>
          For Bitcoin holders, self-custody on the native network is fundamentally viewed as the safest possible state. Moving assets to alternative chains introduces perceived smart-contract vulnerabilities, making cross-chain bridges an exceptionally high-anxiety product category. Once a bridge suffers an exploit, it is often permanently irredeemable in the eyes of the community.
        </p>
        <p>
          The Threshold Network engineered tBTC v2 to provide a decentralized, permissionless solution controlled entirely by mathematical cryptography rather than centralized custodians. However, achieving this high security tier required a unique, multi-step flow, including off-chain unique deposit address generation and manual recovery files. Our challenge was to determine whether this security-maximal architecture could align seamlessly with standard Web3 user behavior or if the added cognitive complexity was alienating the target audience.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="The Approach: Dissecting the Bridging Loop">
        <p>To understand the underlying fears and functional patterns of cross-chain users, we needed a granular, step-by-step examination of the deposit and withdrawal interfaces.</p>
        <p><strong>The Methodology:</strong> I designed 60-minute moderated usability testing sessions utilizing interactive, clickable Figma prototypes. Participants evaluated the full end-to-end minting and unminting flows while utilizing the "think-out-loud" technique to document real-time cognitive roadblocks.</p>
        <p><strong>The Participants:</strong> 6 active crypto native users with a clear technical background. All participants were validated Bitcoin holders with previous experience handling cross-chain assets or wrapping tokens (such as WBTC, tBTC, or renBTC).</p>
        <p><strong>The Benchmarks:</strong> The qualitative findings revealed a stark contrast between the two directions. The unminting loop was perceived as straightforward, achieving an Average Experience Rating of 6 out of 7. Conversely, the unfamiliar patterns of the minting process dropped its rating to a mediocre 4.75 out of 7, identifying a clear educational and architectural gap.</p>
      </CaseStudySection>

      <CaseStudySection number="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>The user sessions revealed that the application's unique architectural safety nets were inadvertently operating as points of deep user confusion and psychological friction.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">The Minting Misnomer</h3>
        <p><strong>The Expectation:</strong> Crypto natives would naturally understand that "minting" tokens is synonymous with completing a bridge transaction.</p>
        <p><strong>The Reality:</strong> 4 out of 6 participants entirely failed to correlate the developer-centric term "Mint" with the operational act of cross-chain bridging. Users expected standard industry actions like "Deposit" or "Bridge," making the initial interaction feel unfamiliar and steepening the platform's learning curve.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">The Intimidating Recovery Receipt</h3>
        <p><strong>The Expectation:</strong> Providing a downloadable .json recovery file gives users ultimate peace of mind over fund safety in a worst-case scenario.</p>
        <p><strong>The Reality:</strong> The explicit warning modal deeply frightened users, triggering a "fight or flight" response rather than calming them. Reading complex technical alerts regarding public keys and 9-month recovery timelocks made participants highly uncomfortable, leading them to assume that protocol errors and fund losses occur with regular frequency.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">The Human Intermediary Illusion</h3>
        <p><strong>The Expectation:</strong> Exposing the system status breakdown ("Minters" and "Guardians" verifying transactions) reinforces transparency and proof-of-security.</p>
        <p><strong>The Reality:</strong> Humanizing the protocol components backfired completely. Multiple participants assumed that "Minters" and "Guardians" referred to centralized teams of real people manually checking and approving their cross-chain transfers. This presentation directly undermined the platform's core narrative of math-driven, decentralized trust.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">The Linear Flow Disruption</h3>
        <p><strong>The Expectation:</strong> Users would intuitively follow a step-by-step timeline indicating that they do not need to wait for full Bitcoin confirmations to proceed.</p>
        <p><strong>The Reality:</strong> The interface failed to match users' deep-rooted mental models. Despite the instructions provided, participants routinely ignored timeline elements and stated they would still rigidly wait for historical Bitcoin miner confirmations before interacting with the destination chain, rendering the speed advantages of optimistic minting invisible.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">The Strategic Persona Shift: Fragmenting the Store of Value</h3>
        <p>The research completely reframed how the team categorized its user base. Rather than designing for a uniform class of Bitcoin holders, the study isolated three distinct behavioral personas with completely separate goals, risk parameters, and product alignment.</p>
        <p><strong>The Cold-Storage Store of Value Maxi:</strong> This profile views Bitcoin strictly as an untouchable, long-term retirement fund, their "grey pound". They are exceptionally cautious, fiercely protective of their native assets, and view all alternative blockchains as hotbeds for smart contract vulnerabilities. They heavily vet hack histories, team backgrounds, and protocol backers. They state that almost nothing on the market is worth the risk of touching their core stash, except for an extraordinarily high DeFi yield.</p>
        <p><strong>The Convenience CEX Swapper:</strong> This persona prefers holding assets in environments where they can easily view all their multi-chain balances at a single glance. They find traditional Web3 cross-chain bridges cumbersome and inherently unsafe. They deliberately default to centralized exchanges (CEXs) to execute swaps, consciously and willingly paying higher trading premiums simply as a tax for user convenience, rapid execution, and avoiding technical friction.</p>
        <p><strong>The Borderless Daily Utility User:</strong> Operating outside the speculative investor mindset, this user actively integrates Bitcoin into daily life transactions. They rely on peer-to-peer digital money specifically to bypass legacy financial networks, noting that traditional international bank wires are overly complicated, highly bureaucratic, and take far too long to settle. They frequently use cross-chain assets for practical real-world expenditures, such as paying living rent across international borders.</p>
      </CaseStudySection>

      <CaseStudySection number="04" title="The Impact: Rewriting the Cross-Chain Experience">
        <p>The study acted as a definitive structural playbook, proving that technical safety must be matched with psychological comfort to survive in high-stakes decentralized environments. I synthesized these behavioral friction points into an actionable roadmap to re-engineer user trust and interface learnability.</p>
        <p><strong>Terminology Alignment:</strong> Recommended shifting technical vocabulary from "Mint" and "Unmint" to standard industry patterns like "Deposit" and "Withdraw" to lower the entry barrier and match user mental models.</p>
        <p><strong>Frictionless Recovery Handling:</strong> Proposed completely removing the intimidating, manual recovery receipt download loop from the main transaction path. Instead, receipts are preserved natively inside a specialized "Resume Deposits" dashboard tab, utilizing gradual information reveal to avoid triggering unnecessary panic.</p>
        <p><strong>Automated System Clarification:</strong> Recommended rewriting the descriptive copy surrounding system verification actors to explicitly highlight that Minters and Guardians are automated, node-running software agents controlled by cryptography rather than human entities.</p>
        <p><strong>De-risking via Sandbox Environments:</strong> To accommodate the universal user behavior of sending micro "test transactions" to safely learn a new dApp, I championed the inclusion of an off-chain, tokenless "Sandbox Simulation Mode" allowing users to master unique deposit address creation risk-free.</p>
        <p><strong>Fiat Fee Conversions:</strong> Advised updating transaction confirmation screens to display a total breakdown of gas and network fees completely denominated in USD, eliminating manual mathematical conversions mid-flow.</p>
      </CaseStudySection>

      <CaseStudySection number="05" title="Impact & Outcomes">
        <h3 className="mt-2 mb-4 text-base font-semibold text-foreground">Research Outcomes</h3>
        <p><strong>Roadmap Prioritization:</strong> The complete collection of interface, instructional text, and layout findings was integrated into the core product team's engineering priorities, reshaping the dApp layout for the production launch.</p>
        <p><strong>Value Messaging Pivot:</strong> By isolating the distinct behaviors of Maxis, Swappers, and Utility users, the team successfully transitioned away from standard speculative marketing to programmatic trust parameters focusing on public audits, mathematical backing, and security visibility.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">Broader Outcomes</h3>
        <p>Following the implemental recommendations of this iterative study, the updated interface design significantly reduced user friction and address-recap confusion. By restructuring data visibility and removing intimidating download constraints, subsequent testing environments demonstrated a stark reduction in navigation errors, leading to smoother transaction speeds and an elevated user confidence profile prior to deploying capital onto the bridge.</p>

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
