import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseStudySection, CaseStudySubhead } from "@/components/CaseStudyLayout";
import reportAsset from "@/assets/tbtc-generative-user-research.pdf.asset.json";

const TITLE = "tBTC Bridge: Bridged/Wrapped BTC Holder User Study";
const SYNOPSIS =
  "Explorative user research on Bitcoin-to-Ethereum asset holders, mapping structural behavioral traits, systemic bridge anxieties, and the trade-offs of decentralized utility.";

export const Route = createFileRoute("/case-studies/04")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Sasha Luca` },
      { name: "description", content: SYNOPSIS },
      { property: "og:title", content: `${TITLE} — Sasha Luca` },
      { property: "og:description", content: SYNOPSIS },
    ],
  }),
  component: CaseStudy04,
});

function CaseStudy04() {
  return (
    <CaseStudyLayout
      no="04"
      kicker="Case Study 4"
      year="2022"
      title={TITLE}
      synopsis={SYNOPSIS}
      meta={[
        { label: "Client", value: "Threshold Network" },
        { label: "Sector", value: "Cross-Chain Bridge" },
        { label: "Year", value: "2022" },
        { label: "Method", value: "Exploratory In-Depth Interviews" },
        { label: "Sample", value: "12 participants" },
        { label: "Role", value: "Sole Researcher" },
      ]}
    >
      <CaseStudySection label="01" title="The Challenge: Piercing the Black Box of Cross-Chain Fear">
        <p>
          To a native cryptocurrency holder, the Bitcoin network represents an immutable, exploit-free storage vault. Crossing the chasm into decentralized finance requires wrapping or bridging that capital over to Ethereum, an environment users view as inherently fraught with smart contract vulnerabilities. In the minds of Web3 investors, cross-chain bridges are categorized as the most dangerous infrastructure in the space; a single public exploit permanently ruins a bridge's reputation beyond redemption.
        </p>
        <p>
          Following an Assumption Mapping workshop to isolate team blind spots, the Threshold Network needed to understand the foundational behavioral archetypes of non-maximalist Bitcoin holders. The core mission was to evaluate whether users genuinely cared about non-custodial, permissionless decentralization, or if the convenience and "too big to fail" market dominance of centralized wrapped alternatives had completely captured the market.
        </p>
      </CaseStudySection>

      <CaseStudySection label="02" title="The Approach: Unpacking Stated Opinions vs. Actual Actions">
        <p>
          Uncovering true user motivations required a structural look into past transaction behaviors, geographic tax setups, and compliance thresholds.
        </p>

        <CaseStudySubhead>The Methodology</CaseStudySubhead>
        <p>
          I conducted 60-minute remote explorative interviews paired with comprehensive empathy mapping. The sessions deliberately avoided theoretical future-casting, focusing instead on users' historical asset decisions, exact workaround behaviors, and past friction points across competing protocols like WBTC and Ren Bridge.
        </p>

        <CaseStudySubhead>The Participants</CaseStudySubhead>
        <p>
          12 highly sophisticated to upper-intermediate blockchain users who either actively managed Bitcoin-to-Ethereum bridges or intentionally swapped for wrapped assets on secondary markets to circumvent native bridge interfaces. The sample consisted predominantly of Ethereum-first DeFi participants.
        </p>

        <CaseStudySubhead>The Benchmark</CaseStudySubhead>
        <p>
          The research exposed a stark "Value-Action Gap". While users heavily championed the ideals of trustlessness, censorship resistance, and zero-KYC parameters, their actual capital placement was dictated by commercial market features. This insight reframed the product team's core benchmark: to achieve mass adoption, a decentralized bridge cannot merely be programmatically secure; it must match or exceed the liquidity depth and protocol convenience of centralized industry incumbents.
        </p>
      </CaseStudySection>

      <CaseStudySection label="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>
          The qualitative interview data disrupted several historical narratives the core team held regarding wrapped token selection and user risk mitigation.
        </p>

        <CaseStudySubhead>The Liquidity-Utility Blind Eye</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Web3 users would actively avoid centralized, multi-sig wrapped assets like WBTC due to systemic censorship risks and custodial concerns.
        </p>
        <p>
          <strong>The Reality:</strong> Users routinely turn a blind eye to centralized risks if an asset guarantees deep liquidity, proven longevity, and seamless integration across major lending blue-chips like Aave and Compound. Because WBTC had survived historical market cycles without a high-profile exploit, familiarity bias led users to categorize it as "too big to fail," leaving newer, fully decentralized options stranded due to capital isolation.
        </p>

        <CaseStudySubhead>The "Leap of Faith" Transfer Panic</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Users are comfortable following automated dashboard instructions directing them to send crypto to a newly generated deposit address.
        </p>
        <p>
          <strong>The Reality:</strong> Confronting a static, unfamiliar Bitcoin address triggers immense friction and anxiety. Users described this step as a blind "leap of faith," plagued by the fear that a compromised frontend or interface hack could silently redirect their life savings to a malicious actor's wallet.
        </p>

        <CaseStudySubhead>The Time-Locked Psychological Prison</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Multi-hour settlement delays ("sweeping batch times") are viewed simply as a minor technical limitation of native cross-chain settlement.
        </p>
        <p>
          <strong>The Reality:</strong> Long confirmation windows directly fuel active user panic. The anxiety stems not from missing a rapid trading opportunity, but from the terrifying unknown; if a transaction hangs for 3 to 6 hours without active UI feedback, users assume the bridge has failed or suffered a live exploit. This constraint forced users to sacrifice a full afternoon to sit frozen in front of their computers to shepherd a single transaction through.
        </p>

        <CaseStudySubhead>The Regulatory Ignorance Loop</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Strict cross-border crypto tax rules heavily dictate real-time on-chain actions and portfolio reallocation.
        </p>
        <p>
          <strong>The Reality:</strong> Tax implications are almost completely relegated to hindsight. Even in strict jurisdictions (such as the US, UK, and France), users find the lack of legal clarity so overwhelming that they execute actions first and worry about tracking capital gains later with their personal accountants.
        </p>

        <CaseStudySubhead>The Strategic Persona Shift: Recalibrating Product Alignment</CaseStudySubhead>
        <p>
          Rather than viewing cross-chain users through a single narrative, the research systematically divided the target user base into three core behavioral profiles:
        </p>
        <p>
          <strong>The Yield-Chasing Pragmatist:</strong> This persona is entirely Ethereum-first and views native Bitcoin as a dormant pool of capital that must be "put to work". They eagerly hunt for the highest available staking rewards and easy pool participation. They will happily choose convenience over technical decentralization, utilizing centralized shortcuts—such as market-swapping for wrapped tokens directly on central exchanges—purely to bypass long on-chain minting wait times.
        </p>
        <p>
          <strong>The Native Network Purist:</strong> This user describes themselves as a rational, non-toxic Bitcoin maximalist. They view the Bitcoin network as the only true financial safe haven and hold deep, unyielding skepticism toward external smart contracts. They will execute a cross-chain deposit to capture high short-term yield, but their standard behavior is to bridge back to native self-custody the absolute second their active yield strategies conclude, refusing to leave wrapped assets exposed on foreign networks.
        </p>
        <p>
          <strong>The Tactical Tax Arbitrageur:</strong> Spanning multiple geographical jurisdictions, this user treats wrapped Bitcoin assets as sophisticated leverage tools. They are deeply concerned about structural asset privacy and the security risks of data exposure through centralized KYC processes. To avoid triggering massive capital gains tax events, they intentionally use their bridged tokens as permanent collateral to borrow liquidity against their stack, creating a protective loop to escape state asset liquidation.
        </p>
      </CaseStudySection>

      <CaseStudySection label="04" title="The Impact: Re-Engineering the Trust Architecture">
        <p>
          This generative study completely altered the design direction of tBTC v2, proving that conquering bridge anxiety requires transforming the application from a technical "black box" into a continuous feedback loop. I converted these user requirements into distinct product and interface recommendations.
        </p>

        <CaseStudySubhead>Visual Trust Triggers</CaseStudySubhead>
        <p>
          Recommended integrating direct verification links to native Bitcoin blockchain explorers directly on the deposit screen, accompanied by transparent, readable documentation outlining the cryptographic math behind unique address generation.
        </p>

        <CaseStudySubhead>UX Feedback Loops</CaseStudySubhead>
        <p>
          Prioritized the inclusion of granular step-by-step status bars during the minting process, providing constant visual reassurances to actively soothe user panic during multi-hour transaction windows.
        </p>

        <CaseStudySubhead>The One-Click Architecture</CaseStudySubhead>
        <p>
          Championed the development of a compressed, one-click minting flow that eliminates the manual requirement of signing a exhausting chain of intermediate transactions, minimizing gas overhead and user fatigue.
        </p>

        <CaseStudySubhead>De-risking via "Test-Run" Patterns</CaseStudySubhead>
        <p>
          Documented a universal user pattern where investors intentionally deploy miniature, comfortable-to-lose sums to test a dApp's plumbing before committing serious volume, directly justifying the need for a non-custodial sandbox environment.
        </p>
      </CaseStudySection>

      <CaseStudySection label="05" title="Impact & Outcomes">
        <CaseStudySubhead>Research Outcomes</CaseStudySubhead>
        <p>
          <strong>Strategic Roadmap Realignment:</strong> The discovery that users will prioritize deep DeFi integration and composability over raw security shifted development goals, forcing the team to focus heavily on external protocol integrations (like Curve pools) to ensure immediate token utility post-launch.
        </p>
        <p>
          <strong>Marketing Message Overhaul:</strong> The insights allowed marketing to move past generic "decentralization" slogans, pivoting instead toward communicating real-world safety parameters: proven team historical behaviors, explicit contract auditing transparency, and robust fund recovery methods.
        </p>

        <CaseStudySubhead>Broader Outcomes</CaseStudySubhead>
        <p>
          By establishing these user behavioral guardrails early in the design cycle, subsequent product iterations successfully targeted the exact informational gaps that caused previous legacy bridge users to abandon the v1 platform. The structural shift toward continuous interface feedback directly lowered user entry barriers, creating a measurable foundation of trust that helped convert cautious cold-storage holders into active cross-chain participants.
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
