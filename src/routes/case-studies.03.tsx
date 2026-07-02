import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseStudySection, CaseStudyQuote } from "@/components/CaseStudyLayout";
import reportAsset from "@/assets/tbtc-iterative-study.pdf.asset.json";

const TITLE = "tBTC Bridge: Redesigning the Cross-Chain Flow";
const SYNOPSIS =
  'Usability research on a non-custodial Bitcoin bridge, evaluating complex cryptographic safeguards against traditional user mental models and "bridge anxiety".';

export const Route = createFileRoute("/case-studies/03")({
  head: () => ({
    meta: [
      { title: `${TITLE} · Sasha (Tanase) Luca` },
      { name: "description", content: SYNOPSIS },
      { property: "og:title", content: `${TITLE} · Sasha (Tanase) Luca` },
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
      <CaseStudySection
        number="01"
        title="The Challenge: Overcoming the Smart Contract Defense Mechanism"
      >
        <p>
          For Bitcoin holders, self-custody on the native network is fundamentally viewed as the
          safest possible state. Moving assets to alternative chains introduces perceived
          smart-contract vulnerabilities, making cross-chain bridges an exceptionally high-anxiety
          product category. Once a bridge suffers an exploit, it is often permanently irredeemable
          in the eyes of the community.
        </p>
        <p>
          The Threshold Network engineered tBTC v2 to provide a decentralized, permissionless bridge
          controlled by cryptography rather than centralized custodians. However, achieving this
          security tier required a unique, multi-step flow, including per-user deposit address
          generation and a manual recovery file. My challenge was to determine whether this
          security-maximal architecture could align with standard Web3 user behavior, or whether the
          added cognitive complexity was alienating the target audience.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="The Approach: Dissecting the Bridging Loop">
        <p>
          To understand the underlying fears and functional patterns of cross-chain users, we needed
          a granular, step-by-step examination of the deposit and withdrawal flows.
        </p>
        <p>
          <strong>The Methodology:</strong> I designed 60-minute moderated usability sessions using
          interactive, clickable Figma prototypes. Participants walked through the full end-to-end
          minting and unminting flows using the think-out-loud technique, preceded by a deep-dive
          interview about their Bitcoin holdings, bridge history, and fears.
        </p>
        <p>
          <strong>The Participants:</strong> 6 crypto-native Bitcoin holders with previous
          experience using BTC-to-ETH bridges or holding wrapped assets such as WBTC, tBTC, or
          renBTC. Notably, even in this qualified sample, familiarity with the category was shallow.
        </p>
        <CaseStudyQuote attribution="Exchange from a usability session">
          "Have you ever used any other wrapped BTC tokens other than WBTC?" (researcher) — "What?
          Are there any others than WBTC?" (Participant 4)
        </CaseStudyQuote>
        <p>
          <strong>The Benchmarks:</strong> The two directions of the bridge scored very differently.
          Unminting was perceived as straightforward, rating 6 out of 7 on average. The unfamiliar
          patterns of the minting flow dropped its average rating to 4.75 out of 7, exposing a clear
          educational and architectural gap.
        </p>
      </CaseStudySection>

      <CaseStudySection number="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>
          The sessions revealed that the application's unique architectural safety nets were
          inadvertently operating as points of deep user confusion and psychological friction.
        </p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">The Minting Misnomer</h3>
        <p>
          <strong>The Expectation:</strong> Crypto natives would naturally understand that "minting"
          tokens is synonymous with completing a bridge transaction.
        </p>
        <p>
          <strong>The Reality:</strong> 4 out of 6 participants failed to correlate the
          developer-centric term "Mint" with the act of bridging. Users expected standard industry
          actions like "Deposit" or "Bridge," making the very first interaction feel unfamiliar and
          steepening the learning curve.
        </p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">
          The Intimidating Recovery Receipt
        </h3>
        <p>
          <strong>The Expectation:</strong> Providing a downloadable .json recovery file gives users
          peace of mind over fund safety in a worst-case scenario.
        </p>
        <p>
          <strong>The Reality:</strong> 5 out of 6 participants were frightened by the recovery
          message. Instead of calming them, the warning modal put them in a fight-or-flight state;
          they were confused about why they needed to keep a receipt at all and inferred that fund
          loss must be a regular occurrence. Bridges already carry a dark cloud of fear, and the
          dApp's own copy was amplifying it.
        </p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">
          The Human Intermediary Illusion
        </h3>
        <p>
          <strong>The Expectation:</strong> Exposing the system status breakdown, "Minters" and
          "Guardians" verifying transactions, reinforces transparency and proof-of-security.
        </p>
        <p>
          <strong>The Reality:</strong> Humanizing the protocol components backfired. Several
          participants assumed Minters and Guardians were real people manually transferring tokens,
          which read as a "manual bridge" and directly undermined the platform's core narrative of
          math-driven, decentralized trust. Others simply tuned the information out.
        </p>
        <CaseStudyQuote attribution="Study participant, on the Minters status panel">
          "I don't know who these people are, but I don't really care about them."
        </CaseStudyQuote>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">
          The Test-Small Instinct
        </h3>
        <p>
          <strong>The Expectation:</strong> Convinced users would bridge their intended amount once
          they understood the flow.
        </p>
        <p>
          <strong>The Reality:</strong> As in my previous studies, every participant described the
          same ritual when trying a new protocol: send a small, comfortable-to-lose amount first,
          watch what happens, and only then commit. Interestingly, once trust was established, the
          behavior inverted, users refused to fragment large deposits because of gas costs.
        </p>
        <CaseStudyQuote attribution="Study participant, on the deposit duration warning">
          "If I made it to here, it means that I believe in this product and I would not fragment my
          deposit to pay a lot of gas."
        </CaseStudyQuote>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">
          The Store-of-Value Wall
        </h3>
        <p>
          <strong>The Expectation:</strong> Bitcoin holders with DeFi experience are natural bridge
          users.
        </p>
        <p>
          <strong>The Reality:</strong> Every participant described their Bitcoin as a store of
          value, their "grey pound", funds they are extremely cautious with and would not touch.
          Most defaulted to swapping on centralized exchanges, knowingly paying higher fees as the
          price of ease of use, and considered the 2–3 hour bridging window itself a red flag: the
          longer a transaction hangs, the longer they live with the fear that the bridge has been
          hacked. Only a large yield could tempt them to bridge their core stash.
        </p>
      </CaseStudySection>

      <CaseStudySection number="04" title="The Impact: Rewriting the Cross-Chain Experience">
        <p>
          The study proved that technical safety must be matched with psychological comfort to
          survive in a high-stakes decentralized environment. I synthesized the friction points into
          an actionable roadmap for the design iteration that followed.
        </p>
        <p>
          <strong>Terminology Alignment:</strong> Shift the vocabulary from "Mint" and "Unmint" to
          the industry-standard "Deposit" and "Withdraw," matching the mental models users arrive
          with.
        </p>
        <p>
          <strong>Frictionless Recovery Handling:</strong> Remove the intimidating manual receipt
          download from the main transaction path. Store receipts for the user inside a "Resume
          Deposits" area and reveal recovery information gradually, only when it is actually needed.
        </p>
        <p>
          <strong>Automated System Clarification:</strong> Rewrite the Minters and Guardians copy to
          make explicit that these are automated software actors, not people approving transactions
          by hand, and support it with optimistic-minting diagrams instead of plain text.
        </p>
        <p>
          <strong>De-risking via a Sandbox:</strong> To work with, rather than against, the
          universal test-small ritual, I proposed an off-chain, tokenless "sandbox/demo" mode where
          users can rehearse the unfamiliar deposit-address flow without any fund risk.
        </p>
        <p>
          <strong>Fiat Fee Totals:</strong> Add a USD-denominated total of all fees on the success
          screen, requested by every single participant, and keep the elapsed-time counter, which
          was the flow's most-loved element.
        </p>
      </CaseStudySection>

      <CaseStudySection number="05" title="Impact & Outcomes">
        <h3 className="mt-2 mb-4 text-base font-semibold text-foreground">Research Outcomes</h3>
        <p>
          <strong>Roadmap Prioritization:</strong> The full set of findings, terminology, recovery
          handling, system-status copy, and fee display, was folded into the next design iteration
          of the tBTC dApp, with a follow-up round of usability testing scheduled to validate the
          changes.
        </p>
        <p>
          <strong>Pattern-Break Awareness:</strong> The study gave the team a clear-eyed view of
          where tBTC's architecture genuinely breaks the standard bridge pattern (deposit address
          generation, recovery receipts) and therefore where extra explanation, or account
          abstraction, would always be needed. I used this evidence to champion gas abstraction so
          users would no longer need the destination chain's native token to complete a bridge.
        </p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">Retrospective</h3>
        <p>
          Testing on a clickable prototype meant real waiting anxiety, the hours-long confirmation
          window, could only be discussed, not observed. Analytics later corroborated the biggest
          behavioral finding (users wait for full Bitcoin confirmations before initiating minting,
          even when they don't need to), which is the kind of triangulation I would design in from
          the start next time.
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
