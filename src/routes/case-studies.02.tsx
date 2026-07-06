import { createFileRoute } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseStudySection,
  CaseStudyQuote,
  CaseStudySubhead,
} from "@/components/CaseStudyLayout";
import reportAsset from "@/assets/mezo-borrow-study.pdf.asset.json";

const TITLE = "Mezo Borrow and mUSD: Optimizing the Bitcoin Liquidity Portal";
const SYNOPSIS =
  "Usability research on a native Bitcoin borrowing protocol, testing real-world liquidity management against deep-seated counterparty anxiety.";

export const Route = createFileRoute("/case-studies/02")({
  head: () => ({
    meta: [
      { title: `${TITLE} · Sasha (Tanase) Luca` },
      { name: "description", content: SYNOPSIS },
      { property: "og:title", content: `${TITLE} · Sasha (Tanase) Luca` },
      { property: "og:description", content: SYNOPSIS },
    ],
  }),
  component: CaseStudy02,
});

function CaseStudy02() {
  return (
    <CaseStudyLayout
      no="02"
      kicker="Mezo Borrow and mUSD: Optimizing the Bitcoin Liquidity Portal"
      year="2025"
      title={TITLE}
      synopsis={SYNOPSIS}
      meta={[
        { label: "Client", value: "Mezo" },
        { label: "Sector", value: "Bitcoin DeFi" },
        { label: "Year", value: "2025" },
        { label: "Method", value: "Interviews & Usability Testing" },
        { label: "Sample", value: "8 participants" },
        { label: "Role", value: "Lead Researcher" },
      ]}
    >
      <CaseStudySection number="01" title="The Challenge: Uncovering the Reality of the BTC Stack">
        <p>
          Bitcoin is fiercely guarded. To the vast majority of holders, native BTC is a long-term,
          untouchable hedge, digital gold gathering dust in cold storage. Yet real-life expenses
          like tax bills, house deposits, and cash flow gaps inevitably force sales that holders
          later deeply regret.
        </p>
        <CaseStudyQuote attribution="Study participant, discovery interview">
          "My Bitcoin's the one thing I never touch. It's strictly a long-term, digital-gold stash."
        </CaseStudyQuote>
        <CaseStudyQuote attribution="Study participant, discovery interview">
          "I sold some Bitcoin once, paid for a king-size bed, and I still kick myself for doing it
          so early."
        </CaseStudyQuote>
        <p>
          Mezo designed a borrowing protocol to solve this paradox, allowing users to mint a
          Bitcoin-backed stablecoin (mUSD) to unlock liquidity without sacrificing their asset
          upside. But transitioning a conservative HODL community into active DeFi borrowing means
          battling historical counterparty trauma and complex financial interfaces. To evaluate the
          friction points of this transition, I led a study combining discovery interviews with
          usability testing to observe exactly how tech-savvy Bitcoin holders navigate the
          high-stakes borrowing loop.
        </p>
        <CaseStudyQuote attribution="Study participant, on borrowing against BTC">
          "I would be concerned about what happened with Celsius and BlockFi. There's a ton of
          counterparty risk."
        </CaseStudyQuote>
      </CaseStudySection>

      <CaseStudySection number="02" title="The Approach: Simulating the Loan Loop">
        <p>
          We needed to see how users interact with collateral calculations and risk variables under
          realistic conditions.
        </p>
        <p>
          <strong>The Methodology.</strong> I ran remote semi-structured interviews paired with
          interactive usability testing. After a discovery conversation about how they manage BTC
          liquidity, participants explored Mezo's website and were tasked with executing a specific
          financial maneuver: borrowing 5,000 mUSD against 0.1 BTC of available collateral, then
          viewing, partially repaying, and adjusting the live loan.
        </p>
        <p>
          <strong>The Participants.</strong> 8 tech-savvy individuals aged 25–45 across the EU and
          North America. All earned €50K+ annually, had moderate-to-advanced DeFi literacy, and had
          held Bitcoin for over a year.
        </p>
        <p>
          <strong>The Benchmark.</strong> The step-by-step flow meant every participant opened a
          loan on their first attempt, and the clean layout let them find primary actions quickly.
          Yet qualitative friction capped the overall experience rating at a middling 3.5, and
          mUSD's appeal landed at a cautious 3. The numbers indicated a functional app whose main
          source of friction was missing or unclear information, cognitive traps that threatened to
          alienate users before they could confirm a transaction.
        </p>
      </CaseStudySection>

      <CaseStudySection number="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>
          The testing sessions exposed major alignment gaps between user expectations and system
          presentation, revealing four core friction points.
        </p>

        <CaseStudySubhead>The Hidden Liquidation Price</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> The collateralization-ratio percentage was assumed to be
          enough risk information on the primary input step. It turned out to be the point of
          highest cognitive load and error in the whole flow.
        </p>
        <p>
          <strong>The Reality:</strong> Percentages did not translate to real-world risk in the
          user's mind. Users could not tell when they would actually face liquidation without
          reaching for external tools, and because the dollar liquidation price only appeared on the
          second review screen, they were trapped in a loop of switching back and forth to re-adjust
          their numbers.
        </p>
        <CaseStudyQuote attribution="Study participant, usability session">
          "I'm glad to get the liquidation price. It would have been nice to see that on the other
          screen so I wouldn't have to go back and forth."
        </CaseStudyQuote>
        <p>
          Several users were already planning their own defenses, setting Bitcoin price alerts in
          external charting tools, and explicitly asked for native email or Telegram risk
          notifications instead.
        </p>
        <CaseStudyQuote attribution="Study participant, usability session">
          "I'd put something in my chart where it says, your loan is getting liquidated. Or use a
          trading alert for that."
        </CaseStudyQuote>

        <CaseStudySubhead>The BTC Denomination Tax</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Displaying exact on-chain network fees in native crypto
          format satisfies standard Web3 transparency requirements.
        </p>
        <p>
          <strong>The Reality:</strong> Forcing users to read fees solely in BTC format (e.g.,
          0.0005 mBTC) induced immediate math fatigue. Users stopped the task to run mental
          conversions just to determine whether they were paying a reasonable amount.
        </p>
        <CaseStudyQuote attribution="Study participant, usability session">
          "I would also just calculate this, like, Bitcoin is 100,000, what's my fee I'm paying?
          Like a $50 network fee."
        </CaseStudyQuote>

        <CaseStudySubhead>The "Loan Debt" Identity Crisis</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Displaying live, precise calculations preserves
          financial trust.
        </p>
        <p>
          <strong>The Reality:</strong> Upon entering the loan dashboard, users were puzzled by the
          "Loan Debt" label showing $5,005 instead of the $5,000 they had just borrowed. Without a
          visible breakdown, they guessed at where the extra $5 came from, momentarily losing
          confidence in the platform's math, and immediately wondered where they would even acquire
          extra mUSD to cover the interest at payoff time.
        </p>
        <CaseStudyQuote attribution="Study participant, usability session">
          "I don't know where this $5 comes from. Yeah, I'm just guessing."
        </CaseStudyQuote>
        <CaseStudyQuote attribution="Study participant, usability session">
          "It's kind of a dumb question, but I'm assuming this is interest I'm paying to Mezo. But
          yeah, not 100% sure."
        </CaseStudyQuote>

        <CaseStudySubhead>The Post-Borrow Utility Vacuum</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> A stablecoin backed by Bitcoin is inherently attractive.
        </p>
        <p>
          <strong>The Reality:</strong> Users liked the backing mechanism and the low borrow rate,
          but hit a wall on post-borrow utility. Several Googled mUSD mid-session, found an
          unrelated token with the same ticker and shallow liquidity, and were immediately put off.
          Without clear pathways showing where to use, swap, or off-ramp the newly minted
          stablecoin, users felt stranded, and the ghosts of failed algorithmic stablecoins made
          them demand proof before trust.
        </p>
        <CaseStudyQuote attribution="Study participant, on mUSD">
          "I don't know what I can use it for. I don't know what the liquidity is like."
        </CaseStudyQuote>
        <CaseStudyQuote attribution="Study participant, on what would unlock adoption">
          "Let me see the reserves and how those reserves are calculated. Proof of reserves is a big
          topic."
        </CaseStudyQuote>

        <CaseStudySubhead>
          The Strategic Persona Shift: Recalibrating the User Base
        </CaseStudySubhead>
        <p>
          The core team initially designed the feature assuming a relatively uniform audience of
          Web3 users looking to tap into their Bitcoin. The research broke that assumption apart:
          the target audience fragmented into four distinct behavioral profiles with radically
          different thresholds for risk, utility, and custody.
        </p>
        <p>
          <strong>The Digital Gold Maxi:</strong> Bitcoin is an untouchable long-term vault kept in
          cold storage. They carry scars from centralized platform collapses, reject yield-chasing,
          and would only consider borrowing in an emergency, as an alternative to a forced sale.
        </p>
        <CaseStudyQuote attribution="Study participant, Digital Gold Maxi profile">
          "Taking a big loan out of it, if I would need it mainly in an emergency, so I wouldn't
          have to sell it."
        </CaseStudyQuote>
        <p>
          <strong>The Pragmatic Borrower:</strong> Prefers to keep stacking but is open to accessing
          the stack for big life costs: a tax bill, a house down-payment, a wedding. Eager for
          liquidity without a taxable sale, but intensely protective of their collateral ratio and
          liquidation price.
        </p>
        <p>
          <strong>The Yield Maximizer:</strong> Treats native BTC as dormant capital and already
          borrows against wrapped BTC on Aave or Solana DeFi. High risk tolerance; demands
          composable stablecoin utility, deep liquidity, and easy swaps or bridges so borrowed funds
          can be deployed immediately.
        </p>
        <p>
          <strong>The Spender:</strong> Spends BTC frequently, via Lightning, gift cards, or BTC
          Maps, and wants to push adoption. Would borrow if it let them quickly access liquidity and
          spend it in real life.
        </p>
        <CaseStudyQuote attribution="Study participant, Spender profile">
          "Whenever I'm at a conference or in a new city, I open BTC Maps, find places that take
          Bitcoin, and spend it there."
        </CaseStudyQuote>
      </CaseStudySection>

      <CaseStudySection number="04" title="The Impact: Creating Confident Borrowers">
        <p>
          The study showed that visual clarity and immediate contextual data are the antidotes to
          liquidation anxiety. I converted the findings into concrete product recommendations aimed
          at maximizing trust and minimizing user error.
        </p>
        <p>
          <strong>Risk Interface Architecture:</strong> Surface the real-time dollar liquidation
          price directly on the initial input screen, next to the collateral-ratio field where the
          decision is actually made, eliminating the screen-hopping loop and external tool reliance.
        </p>
        <p>
          <strong>Dual-Denomination Labeling:</strong> Pair every crypto-denominated value, network
          fees, interest, collateral, with a USD conversion, offloading the user's mental math.
        </p>
        <p>
          <strong>Proactive Risk Alerts:</strong> Offer native email or Telegram notifications for
          collateral health, meeting the monitoring behavior users were already improvising with
          external charting tools.
        </p>
        <p>
          <strong>Utility Onboarding Pathways:</strong> Integrate visible routes to swap, spend,
          bridge, and off-ramp mUSD, plus proof-of-reserves and peg-mechanism explanations, directly
          into the product, answering the "what can I do with it?" question before it becomes an
          exit point.
        </p>
      </CaseStudySection>

      <CaseStudySection number="05" title="Impact & Outcomes">
        <h3 className="mt-2 mb-4 text-base font-semibold text-foreground">Research Outcomes</h3>
        <p>
          <strong>Audience Reframing:</strong> The four behavioral personas gave Mezo a shared
          vocabulary for positioning and messaging, replacing one-size-fits-all DeFi messaging with
          flows and copy targeted at the distinct needs of Maxis, Pragmatic Borrowers, Yield
          Maximizers, and Spenders.
        </p>
        <p>
          <strong>Transparency as a Feature:</strong> The consistency with which participants
          demanded reserve proofs, audits, and track record, before touching a new stablecoin,
          elevated proof-of-reserves visibility and third-party audits from marketing afterthoughts
          to product priorities.
        </p>
        <p>
          <strong>Resilient Value Proposition:</strong> Despite the interface friction, the core
          proposition, unlocking liquidity while keeping BTC upside, landed across every persona.
          The blockers identified were informational, not conceptual, which made them fixable.
        </p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">Retrospective</h3>
        <p>
          Task success was high (8/8 loans opened on the first attempt), so the value of this study
          came from the think-aloud data rather than failure rates. With more time I would have
          added a longitudinal component tracking real loans through a full repay cycle, since
          several anxieties surfaced here (interest accrual, liquidation monitoring) only fully
          materialize while a loan is live.
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
