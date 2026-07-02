import { createFileRoute } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseStudySection,
  CaseStudyQuote,
  CaseStudySubhead,
} from "@/components/CaseStudyLayout";
import reportAsset from "@/assets/keep-coverage-pools-usability-round-2.pdf.asset.json";

const TITLE = "Keep Network Coverage Pool: Redesigning the Underwriting Experience";
const SYNOPSIS =
  "Usability research on a decentralized network insurance layer, tracking complex yield mechanics, lockup timelines, and asset-wrapping paradigms against elite DeFi operators.";

export const Route = createFileRoute("/case-studies/06")({
  head: () => ({
    meta: [
      { title: `${TITLE} · Sasha (Tanase) Luca` },
      { name: "description", content: SYNOPSIS },
      { property: "og:title", content: `${TITLE} · Sasha (Tanase) Luca` },
      { property: "og:description", content: SYNOPSIS },
    ],
  }),
  component: CaseStudy06,
});

function CaseStudy06() {
  return (
    <CaseStudyLayout
      no="06"
      kicker="Case Study 6"
      year="2021"
      title={TITLE}
      synopsis={SYNOPSIS}
      meta={[
        { label: "Client", value: "Keep Network" },
        { label: "Sector", value: "DeFi Infra, Underwriting" },
        { label: "Year", value: "2021" },
        { label: "Method", value: "Qualitative Usability Testing, Learnability Task, SEQ" },
        { label: "Sample", value: "8 participants" },
        { label: "Role", value: "Sole Researcher" },
      ]}
    >
      <CaseStudySection
        label="01"
        title="The Challenge: Simplifying the Economics of Network Insurance"
      >
        <p>
          A coverage pool functions as a form of financial insurance, securing the network against
          black-swan undercollateralization events while rewarding depositors with protocol yields.
          But acting as an underwriter introduces a steep learning curve: users must navigate strict
          timelines, understand a token-wrapping relationship (deposit KEEP, receive covKEEP), and
          explicitly consent to their capital taking a hit in a coverage event.
        </p>
        <p>
          Because the system relies on unforgiving mechanics, a mandatory 21-day cooldown followed
          by a narrow 2-day claim window, and a floating KEEP/covKEEP exchange rate, the team needed
          to know the interface could carry users through without accidental capital lockups. In
          this second usability round, I tested a live build to find exactly where the layout
          conflicted with user mental models before mainnet.
        </p>
      </CaseStudySection>

      <CaseStudySection label="02" title="The Approach: Testing Live Flows with Non-Primed Users">
        <p>
          We needed to move past static design feedback and measure how experienced DeFi investors
          interact with real smart-contract timelines.
        </p>

        <CaseStudySubhead>The Methodology</CaseStudySubhead>
        <p>
          I ran remote, 45-minute usability sessions on a live build deployed to the Ropsten
          testnet. To capture unprimed reactions, I deliberately recruited non-Keep users alongside
          community members. Each participant was funded in advance with 22,000 Ropsten KEEP and 0.2
          Ropsten ETH, with a tutorial for adding the custom token to their wallets, so sessions ran
          on real transactions, not simulations. The protocol covered three tasks: a pool deposit, a
          from-memory recall of the protocol timeline (learnability), and a partial withdrawal, with
          each flow rated on the Single Ease Question (1–7).
        </p>

        <CaseStudySubhead>The Participants</CaseStudySubhead>
        <p>
          8 of 10 scheduled participants completed the study: highly technical, active DeFi users,
          developers, auditors, data scientists, researchers, and finance professionals from
          organizations like Barnbridge, FiatDAO, Consensys Diligence, and Reflexer Finance, trading
          between $2.5K and over $50K.
        </p>

        <CaseStudySubhead>The Benchmarks</CaseStudySubhead>
        <p>
          The interface demonstrated strong foundational learnability: 6 of 8 users recalled every
          protocol step, including the time periods, after a single reading. The deposit flow scored
          an average SEQ of 5.8/7 and the withdrawal flow 6.2/7, with ratings climbing as users
          learned the system. But underneath the healthy scores, the think-aloud data exposed design
          flaws that left even this elite cohort confused about what they were underwriting.
        </p>
      </CaseStudySection>

      <CaseStudySection label="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>
          Forcing sophisticated industry participants through a functional build uncovered
          behavioral misalignment across four major design boundaries.
        </p>

        <CaseStudySubhead>The Comprehension Illusion</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> DeFi natives would seamlessly parse what it means to
          "cover for a hit" and digest the technical explanation of liquidation triggers.
        </p>
        <p>
          <strong>The Reality:</strong> Most participants claimed they fully understood coverage
          pools, and then their own questions gave them away. Session after session surfaced the
          same tells:
        </p>
        <CaseStudyQuote attribution="Participants' questions during the How-it-Works walkthrough">
          "What are these triggers?" · "Who is the underwriter?" · "How many pools are there?"
        </CaseStudyQuote>
        <p>
          The phrase "cover for a hit" proved too abstract to grasp in an instant, and the trigger
          mechanics were written in developer language. Users needed humanized wording and a visual
          diagram, not denser text, to evaluate their underwriter exposure honestly.
        </p>

        <CaseStudySubhead>The Disappearing Modal Blind Spot</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Users would patiently wait through wallet confirmations
          while keeping the interface's context in mind.
        </p>
        <p>
          <strong>The Reality:</strong> On testnet, block confirmations could take 10–20 minutes,
          and the dApp's modals vanished the moment MetaMask was triggered. With zero persistent
          progress feedback, users forgot which action they had initiated and got lost mid-flow, in
          a real-money context, exactly the moment trust evaporates.
        </p>

        <CaseStudySubhead>The 21-Day Memory Tax</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Clearly stating the 21-day cooldown and 2-day claim
          window up front was sufficient for compliance.
        </p>
        <p>
          <strong>The Reality:</strong> All 8 participants said they would forget to come back in 21
          days to claim their tokens, and missing the 2-day window silently returns the funds to the
          pool. Every single one asked for a reminder or alerting system. This was the study's most
          unanimous finding.
        </p>

        <CaseStudySubhead>Breaking the Standard Approval UX</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Asking users to approve a custom spending limit on every
          interaction is a security-first best practice.
        </p>
        <p>
          <strong>The Reality:</strong> The dApp was challenging a learned Web3 pattern: max
          approval by default. Users complained that repeated re-approvals cost them real gas on
          every interaction, and the withdrawal flow compounded the surprise by requiring two
          transactions with no upfront warning or gas estimate.
        </p>

        <CaseStudySubhead>The Capital Allocation Profiles</CaseStudySubhead>
        <p>
          The sessions also mapped how this audience deploys capital, three strategies that directly
          shape how lockups are tolerated:
        </p>
        <p>
          <strong>More Money, More Patience:</strong> The larger the position, the more tolerant
          users are of long cooldowns, provided returns stay strong. Large depositors in established
          protocols shrugged at the 21-day period.
        </p>
        <p>
          <strong>The Two-Wallet Strategy:</strong> Many users maintain big deposits in proven
          protocols alongside a strictly bounded $500–$1,000 "experimentation fund" for new
          platforms, meaning a new protocol's first impression is always judged on small amounts,
          where a 0%-rounded pool share reads as failure.
        </p>
        <p>
          <strong>Always Be First:</strong> Yield rotators deposit large sums at launch to farm peak
          APY and exit fast. For them, cooldown constraints are a core decision factor, not fine
          print.
        </p>
      </CaseStudySection>

      <CaseStudySection label="04" title="The Impact: Streamlining the Underwriter Journey">
        <p>
          I converted the qualitative friction points into precise design changes, an exact roadmap
          for the interface ahead of mainnet.
        </p>

        <CaseStudySubhead>Persistent Pending Modals</CaseStudySubhead>
        <p>
          Keep transaction modals on screen in an explicit "pending" state whenever the wallet is
          triggered, preserving context through multi-minute confirmation waits in both deposit and
          withdrawal flows.
        </p>

        <CaseStudySubhead>Calendar Alert Integration</CaseStudySubhead>
        <p>
          Add an "Add to Calendar" action to the pending-withdrawal screen so users can capture
          their claim window in one click, directly answering the 8/8 demand for reminders.
        </p>

        <CaseStudySubhead>Max Approval Defaulting</CaseStudySubhead>
        <p>
          Offer max approval as the default, matching learned industry patterns and saving gas,
          while informing users upfront that withdrawal requires two transactions, with estimates.
        </p>

        <CaseStudySubhead>Legible Numbers</CaseStudySubhead>
        <p>
          Display the KEEP/covKEEP exchange rate wherever the wrapped balance appears, label
          balances unambiguously ("Your Pool Balance"), and show at least three decimals on pool
          share so small-batch experimenters never see a demoralizing "0%".
        </p>

        <CaseStudySubhead>Humanized Risk Copy</CaseStudySubhead>
        <p>
          Rework "cover for a hit" and the trigger explanations into plain language supported by
          visual diagrams, extending the pattern from the protocol timeline, the element that scored
          best in the learnability task.
        </p>
      </CaseStudySection>

      <CaseStudySection label="05" title="Impact & Outcomes">
        <CaseStudySubhead>Research Outcomes</CaseStudySubhead>
        <p>
          <strong>A Prioritized Fix List:</strong> The findings were reported page-by-page against
          the live build, giving the team a screen-level punch list, modals, approvals, decimals,
          labels, copy, that fed directly into the prioritization workshop planning the next
          iteration.
        </p>
        <p>
          <strong>Validated Learnability:</strong> The visual protocol timeline was proven to work
          (6/8 full recall) and became the model for explaining the rest of the system's mechanics
          visually rather than textually.
        </p>

        <CaseStudySubhead>Retrospective</CaseStudySubhead>
        <p>
          Testing on live Ropsten transactions bought realism at the price of testnet slowness, but
          that "flaw" produced the study's most valuable finding: the disappearing-modal problem
          only exists when confirmations are slow, which is exactly what mainnet congestion looks
          like. I have deliberately tested on live builds over prototypes wherever possible since.
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
