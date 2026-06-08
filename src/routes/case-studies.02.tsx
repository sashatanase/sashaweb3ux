import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseStudySection } from "@/components/CaseStudyLayout";

const TITLE = "Mezo Borrow and mUSD: Optimizing the Bitcoin Liquidity Portal";
const SYNOPSIS =
  "Long-term Bitcoin holders frequently regret selling native BTC for real-world expenses, yet navigating Web3 borrowing platforms triggers heavy cognitive strain and liquidation anxiety. To solve this, I conducted a usability study with 8 tech-savvy investors to analyze live interaction with collateral ratios and stablecoin mechanics. By replacing qualitative friction with concrete product upgrades, including dual USD pricing tags and primary-screen liquidation alerts, we re-engineered the loan loop to build verified user trust and confidence.";

export const Route = createFileRoute("/case-studies/02")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Sasha Luca` },
      { name: "description", content: SYNOPSIS },
      { property: "og:title", content: `${TITLE} — Sasha Luca` },
      { property: "og:description", content: SYNOPSIS },
    ],
  }),
  component: CaseStudy02,
});

function CaseStudy02() {
  return (
    <CaseStudyLayout
      no="02"
      kicker="Case Study 2"
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
          Bitcoin is fiercely guarded. To the vast majority of holders, native BTC is a long-term, untouchable hedge—digital gold gathering dust in cold storage. Yet, real-life expenses like tax bills, house deposits, and cash flow gaps inevitably force emotional sales that holders later deeply regret.
        </p>
        <p>
          Mezo designed a borrowing protocol to solve this paradox, allowing users to mint a Bitcoin-backed stablecoin (mUSD) to unlock liquidity without sacrificing their asset upside. But transitioning a conservative HODL community into active DeFi borrowing means battling historical counterparty trauma and complex financial interfaces. To evaluate the friction points of this transition, I conducted a usability study to observe exactly how tech-savvy Bitcoin holders navigate the high-stakes borrowing loop.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="The Approach: Simulating the Loan Loop">
        <p>We needed to see how users interact with collateral calculations and risk variables under realistic conditions.</p>
        <p><strong>The Methodology.</strong> I executed remote semi-structured interviews paired with interactive usability testing. Participants were dropped into the testnet environment and tasked with executing a specific financial maneuver: borrowing 5,000 mUSD using an available collateral pool of 0.1 BTC.</p>
        <p><strong>The Participants.</strong> 8 tech-savvy individuals aged 25–45 across the EU and North America. All earned €50K+ annually, possessed moderate-to-advanced DeFi literacy, and had held native Bitcoin for over a year.</p>
        <p><strong>The Benchmark.</strong> While the clean layout allowed every single participant to open a loan on their first try, qualitative friction capped the baseline Experience Rating at a mediocre 3.5 out of 5. The asset appeal itself landed at a cautious 3 out of 5. The numbers indicated a functional app, but hidden cognitive traps threatened to alienate users before they could even confirm their transactions.</p>
      </CaseStudySection>

      <CaseStudySection number="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>The testing sessions exposed major alignment gaps between user expectations and system presentation, revealing four core behavioral friction points.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">The Hidden Liquidation Price</h3>
        <p><strong>The Expectation:</strong> The system assumed explaining the collateralization ratio percentage was enough protection for the primary step.</p>
        <p><strong>The Reality:</strong> Percentages did not translate to real-world risk in the user's mind. Users could not calculate when they would actually face liquidation without opening external charting software like TradingView. Because the actual dollar liquidation price was hidden until the second review screen, users were trapped in a frustrating loop of constantly switching screens back and forth to re-adjust their numbers.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">The BTC Denomination Tax</h3>
        <p><strong>The Expectation:</strong> Displaying exact on-chain network fees in native crypto format satisfies standard Web3 transparency requirements.</p>
        <p><strong>The Reality:</strong> Forcing users to look at fees solely in BTC format (e.g., 0.0005 mBTC) induced immediate math fatigue. Users stopped the task to multiply numbers in their heads or pull out physical calculators just to determine if they were paying a reasonable dollar amount or a $50 fee.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">The "Loan Debt" Identity Crisis</h3>
        <p><strong>The Expectation:</strong> Displaying live calculations preserves total financial precision.</p>
        <p><strong>The Reality:</strong> Upon entering the loan tracking dashboard, users were immediately puzzled by the "Loan Debt" label, which displayed $5,005 instead of the $5,000 they had just borrowed. Lacking explicit micro-breakdowns on the main screen, users couldn't remember where the extra $5 came from, momentarily losing confidence in the accuracy of the platform's math.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">The Post-Borrow Utility Vacuum</h3>
        <p><strong>The Expectation:</strong> A stablecoin backed 1-for-1 by Bitcoin is inherently attractive.</p>
        <p><strong>The Reality:</strong> While users liked the backing mechanism, they hit a cognitive wall regarding post-borrow utility. Several users Googled mUSD mid-session and were immediately put off by an unrelated token with shallow liquidity on CoinGecko. Without clear visual pathways inside the dApp showing where to use, swap, or off-ramp the newly minted stablecoin, users felt stranded.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">The Strategic Persona Shift: Recalibrating the User Base</h3>
        <p>The core team initially designed the feature assuming a relatively uniform audience of typical Web3 users looking to tap into their Bitcoin. However, the research completely exploded this assumption, shifting how the team thought about positioning and messaging by uncovering that the target audience was actually fragmented into highly distinct behavioral profiles with radically different thresholds for risk, utility, and custody.</p>
        <p><strong>The Digital Gold Maxi:</strong> For these participants, Bitcoin is an untouchable long-term hedge to be left gathering digital dust in cold storage. They carry deep psychological trauma from historical centralized platform collapses and algorithmic stablecoin failures. They completely reject risk-chasing or unnecessary smart-contract exposure, and would only ever consider a borrowing protocol as an absolute emergency line of credit to avoid a forced asset liquidation.</p>
        <p><strong>The Pragmatic Borrower:</strong> This group views their stack as a vehicle to fund major life milestones, like a house down-payment, a car, or a significant tax bill. They are highly eager to access liquidity without triggering a taxable selling event, but they are intensely protective of their collateralization ratio and liquidation prices, requiring heavy on-screen risk visuals to borrow confidently.</p>
        <p><strong>The Yield Maximizer:</strong> These users treat native BTC as dormant capital and are already comfortable using wrapped alternatives on Ethereum or Solana. They have a high risk tolerance and demand hyper-liquid, composable stablecoin utility, deep liquidity pools, and seamless cross-chain bridging so they can immediately deploy their borrowed funds into high-yield yield-farming strategies.</p>
      </CaseStudySection>

      <CaseStudySection number="04" title="The Impact: Creating Confident Borrowers">
        <p>The study proved that visual clarity and immediate contextual data are the ultimate antidotes to Web3 liquidation anxiety. I converted these insights into clear product architecture adjustments to maximize trust and minimize user error.</p>
        <p><strong>Risk Interface Architecture:</strong> Moved the real-time dollar Liquidation Price directly onto the initial input screen alongside a safety slider, completely eliminating manual screen-hopping and external tool reliance.</p>
        <p><strong>Dual-Denomination Labeling:</strong> Introduced mandatory USD conversion tags next to all crypto-denominated fields, specifically for network fees and interest rates, offloading the user's cognitive conversion math.</p>
        <p><strong>Modal Framework Expansion:</strong> Redesigned cramped modal steps into expansive, layout-driven review pages to expose fee transparency and interest rules without forcing users through excessive vertical scrolling.</p>
        <p><strong>Utility Onboarding Pathways:</strong> Integrated direct links to integrated DEX/CEX liquidity pairs, fiat off-ramps, and active proof-of-reserves verification right into the dashboard to soothe historical counterparty scars.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">Impact & Outcomes</h3>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">Research Outcomes</h3>
        <p><strong>Audience Reframing:</strong> The discovery of these distinct behavioral personas fundamentally altered Mezo's product roadmap, forcing a transition away from generic, one-size-fits-all DeFi messaging to deeply targeted user flows that directly address either the hyper-utility needs of the Maximizer or the extreme security demands of the Gold Maxi.</p>
        <p><strong>Transparency as a Feature:</strong> Recognizing the intense skepticism of the Digital Gold Maxis pivoted the team's priorities; product management immediately bumped public proof-of-reserves calculators, 1-for-1 backing data, and third-party security audits to the top of the launch roadmap to build programmatic trust.</p>
        <p><strong>Resilient Value Proposition:</strong> Despite initial interface friction with complex collateral math, the fundamental value proposition of unlocking liquidity while keeping native BTC upside landed strongly across all target personas, proving market demand once the educational gaps are resolved.</p>

        <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">Broader Outcomes</h3>
        <p>Following the research, Mezo prioritized clarity upgrades around liquidation parameters and asset transparency to resolve the psychological barriers left by past protocol failures. In the subsequent testnet iterations, user navigation errors during loan creation dropped significantly, enabling every single participant to complete the borrowing flow successfully on their first attempt. While several systemic factors contribute to platform onboarding, this smooth progression closely aligned with the layout hierarchy improvements recommended by the research.</p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
