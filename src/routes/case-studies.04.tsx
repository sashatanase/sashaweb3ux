import { createFileRoute } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseStudySection,
  CaseStudyQuote,
  CaseStudySubhead,
} from "@/components/CaseStudyLayout";
import reportAsset from "@/assets/tbtc-generative-user-research.pdf.asset.json";

const TITLE = "tBTC Bridge: Bridged/Wrapped BTC Holder User Study";
const SYNOPSIS =
  "Explorative user research on Bitcoin-to-Ethereum asset holders, mapping structural behavioral traits, systemic bridge anxieties, and the trade-offs of decentralized utility.";

export const Route = createFileRoute("/case-studies/04")({
  head: () => ({
    meta: [
      { title: `${TITLE} · Sasha (Tanase) Luca` },
      { name: "description", content: SYNOPSIS },
      { property: "og:title", content: `${TITLE} · Sasha (Tanase) Luca` },
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
      <CaseStudySection
        label="01"
        title="The Challenge: Piercing the Black Box of Cross-Chain Fear"
      >
        <p>
          To a Bitcoin holder, the native network is an immutable, exploit-free vault. Crossing over
          into decentralized finance requires wrapping or bridging that capital to Ethereum, an
          environment users view as inherently fraught with smart-contract vulnerabilities. In the
          minds of Web3 investors, bridges sit in the most dangerous infrastructure category in the
          space, and a single public exploit ruins a bridge's reputation beyond redemption.
        </p>
        <CaseStudyQuote attribution="Participant 6">
          "Everybody knows that bridges are the most dangerous and most vulnerable things on the
          blockchain."
        </CaseStudyQuote>
        <CaseStudyQuote attribution="Participant 12">
          "Bridging experience is a scary thing, any bridge is the most dangerous thing."
        </CaseStudyQuote>
        <p>
          Following an Assumption Mapping workshop that surfaced the team's blind spots, the
          Threshold Network needed to understand the foundational behavioral archetypes of
          non-maximalist Bitcoin holders. The core mission: find out whether users genuinely care
          about non-custodial, permissionless decentralization, or whether the convenience and "too
          big to fail" market dominance of centralized wrapped alternatives had already captured the
          market.
        </p>
      </CaseStudySection>

      <CaseStudySection
        label="02"
        title="The Approach: Unpacking Stated Opinions vs. Actual Actions"
      >
        <p>
          Uncovering true user motivations required a structural look into past transaction
          behaviors, geographic tax setups, and compliance thresholds.
        </p>

        <CaseStudySubhead>The Methodology</CaseStudySubhead>
        <p>
          I conducted 60-minute remote explorative interviews paired with empathy mapping. The
          sessions deliberately avoided theoretical future-casting, focusing instead on users'
          historical asset decisions, exact workaround behaviors, and past friction points across
          competing protocols like WBTC and Ren Bridge.
        </p>

        <CaseStudySubhead>The Participants</CaseStudySubhead>
        <p>
          12 sophisticated-to-upper-intermediate blockchain users who either actively used
          Bitcoin-to-Ethereum bridges or deliberately swapped for wrapped assets on secondary
          markets to avoid bridge interfaces. The sample consisted predominantly of Ethereum-first
          DeFi participants.
        </p>

        <CaseStudySubhead>The Benchmark</CaseStudySubhead>
        <p>
          The research exposed a stark value-action gap. Users heavily championed the ideals of
          trustlessness, censorship resistance, and zero-KYC, yet their actual capital placement was
          dictated by liquidity and convenience. This reframed the product team's core benchmark: to
          win adoption, a decentralized bridge cannot merely be programmatically secure, it must
          match the liquidity depth and DeFi integrations of centralized incumbents.
        </p>
        <CaseStudyQuote attribution="Participant 9">
          "I don't trust bridges, this is why I chose WBTC. But if I were to use a bridge, I would
          choose a decentralized solution even though I don't know what that means for a bridge. The
          very first bridges were basically multisigs and I didn't like that, but I had no other
          choice."
        </CaseStudyQuote>
      </CaseStudySection>

      <CaseStudySection label="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>
          The interview data disrupted several narratives the core team held about wrapped-token
          selection and user risk mitigation.
        </p>

        <CaseStudySubhead>The Liquidity-Utility Blind Eye</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Web3 users would actively avoid centralized, multi-sig
          wrapped assets like WBTC due to censorship risks and custodial concerns.
        </p>
        <p>
          <strong>The Reality:</strong> Users routinely turn a blind eye to centralized risks if an
          asset guarantees deep liquidity, proven longevity, and seamless integration across major
          lending blue-chips like Aave and Compound. Because WBTC had survived market cycles without
          a high-profile exploit, familiarity bias led users to categorize it as "an established and
          reliable protocol", "too big to fail".
        </p>
        <CaseStudyQuote attribution="Participant 1, asked whether he considered alternatives to WBTC">
          "Not seriously. I'm not aware of anything that fulfills the need of both bridging larger
          quantities of BTC safely, allowing the transfer back and forth to BTC, and having access
          to lending, e.g. depositing WBTC on Aave, Compound etc."
        </CaseStudyQuote>
        <p>
          The motivation underneath was consistent: dormant Bitcoin feels like wasted capital, and
          holders want optionality more than ideology.
        </p>
        <CaseStudyQuote attribution="Participant 6">
          "I like to put my Bitcoin to work."
        </CaseStudyQuote>

        <CaseStudySubhead>The "Leap of Faith" Transfer Panic</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Users are comfortable following dashboard instructions
          directing them to send crypto to a newly generated deposit address.
        </p>
        <p>
          <strong>The Reality:</strong> Confronting a static, unfamiliar Bitcoin address triggers
          immense anxiety. Users fear that a compromised frontend could silently redirect their
          funds to a hacker's wallet, and they asked for explorer links, code-level explanations of
          how the address is generated, and recovery methods as preconditions for trust.
        </p>
        <CaseStudyQuote attribution="Participant 3">
          "Sending your Bitcoin to an unknown address is a really scary thing, it's like a leap of
          faith."
        </CaseStudyQuote>

        <CaseStudySubhead>The Time-Locked Psychological Prison</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Multi-hour settlement windows are a minor technical
          limitation users simply plan around.
        </p>
        <p>
          <strong>The Reality:</strong> Long confirmation windows actively fuel panic, not because
          of missed trading opportunities, but because silence reads as failure. If a transaction
          hangs for hours without UI feedback, users assume the bridge has been exploited. And when
          a flow demands active participation, a chain of transactions to sign, it holds users
          hostage at their desks.
        </p>
        <CaseStudyQuote attribution="Participant 7, on tBTC v1">
          "So you were forced to wait for sometimes hours for confirmations before you could leave.
          Therefore you have to put aside an entire afternoon to make some deposits or redemptions."
        </CaseStudyQuote>

        <CaseStudySubhead>The Regulatory Ignorance Loop</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Strict crypto tax rules heavily dictate on-chain actions
          and portfolio reallocation in real time.
        </p>
        <p>
          <strong>The Reality:</strong> Tax implications are almost completely relegated to
          hindsight. Even in strict jurisdictions (the US, UK, and France), users find the lack of
          legal clarity so overwhelming that they act first and reconcile capital gains later with
          their accountants. One notable workaround surfaced: some users borrow against their
          wrapped BTC instead of selling it, specifically to avoid triggering taxable events. KYC
          followed the same pattern, disliked, accepted as a necessary evil, but with real fear
          about data exposure.
        </p>
        <CaseStudyQuote attribution="Participant 5, on KYC data exposure">
          "I don't know if someone from Coinbase sees my portfolio and my address, and next thing I
          know he comes to the same supermarket, sees my wife and my children, and threatens me to
          give him my private keys. You never know who's looking over your data."
        </CaseStudyQuote>

        <CaseStudySubhead>
          The Strategic Persona Shift: Recalibrating Product Alignment
        </CaseStudySubhead>
        <p>
          Rather than viewing cross-chain users through a single narrative, the research divided the
          target base into three core behavioral profiles:
        </p>
        <p>
          <strong>The Yield-Chasing Pragmatist:</strong> Ethereum-first, views native Bitcoin as
          dormant capital that must be put to work. Hunts the deepest liquidity and the best DeFi
          integrations, and happily takes centralized shortcuts, like swapping WBTC for tBTC on a
          DEX, purely to skip hours of on-chain minting time.
        </p>
        <p>
          <strong>The Native Network Purist:</strong> A self-described rational, non-toxic Bitcoin
          maximalist. Views the Bitcoin network as the only true safe haven and holds deep
          skepticism toward external smart contracts. Will bridge for exceptional short-term yield,
          but bridges back to native self-custody the moment the strategy concludes.
        </p>
        <p>
          <strong>The Tactical Tax Arbitrageur:</strong> Treats wrapped Bitcoin as a leverage tool.
          Deeply concerned with privacy and the security risks of KYC data exposure, and uses
          bridged tokens as collateral to borrow against, unlocking liquidity without triggering
          capital gains.
        </p>
      </CaseStudySection>

      <CaseStudySection label="04" title="The Impact: Re-Engineering the Trust Architecture">
        <p>
          This generative study shaped the design direction of tBTC v2, proving that conquering
          bridge anxiety requires transforming the application from a technical black box into a
          continuous feedback loop. I converted the user requirements into distinct product and
          interface recommendations.
        </p>

        <CaseStudySubhead>Visual Trust Triggers</CaseStudySubhead>
        <p>
          Link the generated deposit address to a Bitcoin block explorer and publish a
          plain-language (and code-snippet) explanation of how deposit addresses are generated,
          converting the "leap of faith" into a verifiable step.
        </p>

        <CaseStudySubhead>UX Feedback Loops</CaseStudySubhead>
        <p>
          Provide constant, step-by-step system feedback during the multi-hour minting window,
          explaining what is happening and why at every stage, so silence never gets interpreted as
          catastrophe.
        </p>

        <CaseStudySubhead>The One-Click Architecture</CaseStudySubhead>
        <p>
          Compress the flow toward a seamless, one-click mint that eliminates the exhausting chain
          of intermediate signatures, and support bridging large amounts in a single pass, since
          fragmenting deposits multiplies both gas costs and anxiety.
        </p>

        <CaseStudySubhead>De-risking via "Test-Run" Patterns</CaseStudySubhead>
        <p>
          Documented the universal pattern of deploying miniature, comfortable-to-lose sums to test
          a dApp's plumbing before committing serious volume, evidence that later justified the
          sandbox/demo concept validated in the follow-up usability study.
        </p>
      </CaseStudySection>

      <CaseStudySection label="05" title="Impact & Outcomes">
        <CaseStudySubhead>Research Outcomes</CaseStudySubhead>
        <p>
          <strong>Strategic Roadmap Realignment:</strong> The finding that users prioritize deep
          DeFi integration and liquidity over raw decentralization shifted development goals toward
          external protocol integrations, ensuring immediate token utility at launch rather than
          treating it as a post-launch concern.
        </p>
        <p>
          <strong>Marketing Message Overhaul:</strong> The insights let marketing move past generic
          "decentralization" slogans toward the trust parameters users actually vet: team track
          record, audit transparency, hack history, and fund recovery methods.
        </p>
        <p>
          <strong>Research Pipeline:</strong> Per the study's next steps, the findings fed directly
          into the tBTC dApp clickable prototype and a follow-up usability study, the same prototype
          tested in Case Study 03.
        </p>

        <CaseStudySubhead>Retrospective</CaseStudySubhead>
        <p>
          A known bias in this sample: several tBTC v1 users were also node operators invested in
          the protocol's success, and they visibly softened their criticism of v1, even one who had
          lost significant funds in it. I flagged this "primed cohort" effect in the report and
          weighted the non-community participants' accounts accordingly.
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
