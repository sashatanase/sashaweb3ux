import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseStudySection, CaseStudySubhead } from "@/components/CaseStudyLayout";
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
        { label: "Method", value: "Qualitative Usability Testing, 5 Second Test, SEQ" },
        { label: "Sample", value: "8 participants" },
        { label: "Role", value: "Sole Researcher" },
      ]}
    >
      <CaseStudySection
        label="01"
        title="The Challenge: Simplifying the Economics of Network Insurance"
      >
        <p>
          A coverage pool functions as an essential form of financial insurance, securing the
          blockchain network against black-swan undercollateralization events while rewarding
          depositors with structural protocol yields. However, acting as an underwriter introduces a
          steep learning curve. Users must navigate strict timelines, understand complex asset
          relationships (depositing native tokens to receive a share-representative token), and
          explicitly consent to capital risk scenarios.
        </p>
        <p>
          The Keep Network core team built a coverage pool dashboard to manage this architecture.
          Yet, because the system relies on highly specific timelines including a mandatory 21-day
          cooldown period and a volatile token exchange rate, the team needed to ensure the
          interface could reliably support users without exposing them to accidental capital lockups
          or unexpected loss. I conducted an iterative usability testing study to identify where the
          layout conflicted with user mental models and how to secure programmatic clarity before
          deployment.
        </p>
      </CaseStudySection>

      <CaseStudySection label="02" title="The Approach: Testing Live Flows with Non-Primed Users">
        <p>
          We needed to move past static design feedback to measure how experienced crypto investors
          interact with live smart contract timelines under realistic conditions.
        </p>

        <CaseStudySubhead>The Methodology</CaseStudySubhead>
        <p>
          I executed remote, 45-minute usability sessions using a live deployed testnet build on the
          Ropsten Network. To prevent biased results, I explicitly recruited non-Keep users to
          capture unprimed behavior. Before testing, participants were given an explicit tutorial to
          add custom token addresses to their browser wallets, and we funded their addresses with
          22,000 Ropsten KEEP and 0.2 Ropsten ETH to support actual test transactions. The study
          tested three core actions: completing a pool deposit, recalling the system timeline from
          memory to test learnability, and completing a multi-step partial withdrawal.
        </p>

        <CaseStudySubhead>The Participants</CaseStudySubhead>
        <p>
          8 highly technical active DeFi users, including smart contract developers, security
          auditors, data scientists, user researchers, and crypto finance professionals from leading
          entities like Barnbridge, FiatDAO, Consensys Diligence, and Reflexer Finance.
        </p>

        <CaseStudySubhead>The Benchmarks</CaseStudySubhead>
        <p>
          The interface demonstrated strong foundational learnability; 75% of users successfully
          recalled every step of the timeline and its exact time rules after a single reading. The
          deposit workflow scored an average Single Ease Question (SEQ) rating of 5.8 out of 7. As
          users gained familiarity over the course of the test, the partial withdrawal flow scored
          even higher, landing at an average SEQ rating of 6.2 out of 7. However, underneath these
          positive scores, qualitative tracking exposed subtle design flaws that left users feeling
          anxious or confused.
        </p>
      </CaseStudySection>

      <CaseStudySection label="03" title="The Plot Twists: Assumptions vs. Reality">
        <p>
          By forcing highly sophisticated industry participants through a functional testing build,
          we uncovered deep behavioral misalignment across four major design boundaries.
        </p>

        <CaseStudySubhead>The Cryptic "Hit" & Technical Triggers</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> DeFi natives would seamlessly understand what it means
          to "cover for a hit" and easily digest technical text explaining liquidation triggers.
        </p>
        <p>
          <strong>The Reality:</strong> Phrasing like "cover for a hit" proved highly abstract and
          difficult for participants to grasp instantly. Furthermore, detailing triggers through
          pure developer language (such as "undercollateralized deposit enters liquidation state
          when no buyer takes the signer bonds auction") left users confused. Users required a more
          humanized description or visual diagram to cleanly evaluate their underwriter exposure.
        </p>

        <CaseStudySubhead>The Disappearing Modal Blind Spot</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Users would patiently wait for browser wallet
          confirmation popups while keeping an eye on the core interface.
        </p>
        <p>
          <strong>The Reality:</strong> On the testnet environment, block confirmations frequently
          took 10 to 20 minutes to settle on-chain. During this window, the dApp's transaction
          modals vanished completely, leaving zero on-screen progress indicators. Lacking constant
          feedback, users forgot what action they had initially triggered, assumed the dApp had
          broken, and felt disoriented in the process.
        </p>

        <CaseStudySubhead>The 21-Day Memory Tax</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Explaining the strict 21-day cooldown period and
          subsequent 2-day claim window on the initial confirmation card was sufficient to ensure
          compliance.
        </p>
        <p>
          <strong>The Reality:</strong> Every single participant (8/8) openly admitted that they
          would completely forget to return to the app in exactly 21 days to finish claiming their
          funds. Because missing the narrow 2-day claim window meant their assets would
          automatically return to the risk pool, users explicitly requested a native notification or
          calendar reminder integration to offload this severe psychological burden.
        </p>

        <CaseStudySubhead>Breaking the Standard Approval UX</CaseStudySubhead>
        <p>
          <strong>The Expectation:</strong> Prompting users to approve a custom spending limit for
          every separate interaction is an ideal security-first practice.
        </p>
        <p>
          <strong>The Reality:</strong> The implementation broke established Web3 behavior patterns.
          Users highly disliked that the dApp failed to offer "Max Approval" as a default option.
          Forcing them to repeatedly re-approve transactions manually wasted valuable time and left
          them complaining about paying excessive, repetitive gas fees.
        </p>

        <CaseStudySubhead>
          The Capital Allocation Profiles: Mapping Investor Intentions
        </CaseStudySubhead>
        <p>
          The research redefined how the team modeled user investment behavior. Rather than viewing
          depositors as uniform liquidity providers, the data revealed separate behavioral
          strategies driven entirely by capital size and risk tolerance:
        </p>
        <p>
          <strong>The High-Volume Stasher (More Money, More Patience):</strong> This profile
          controls a substantial financial portfolio and prioritizes passive accumulation. They
          deposit large sums into trusted protocols strictly to put their assets to work and earn
          compound interest over time. Because they are stashing capital long-term, they are
          completely unbothered by multi-week cooldown delays as long as the underlying protocol
          returns remain high and steady.
        </p>
        <p>
          <strong>The High-Yield Rotator (Always Be First):</strong> This highly aggressive user
          pursues short-term, rapid gains. They deploy large tranches of capital into fresh
          protocols the exact moment an incentivized pool launches to capture temporary high APYs.
          The second rewards begin to compress, they trigger immediate withdrawals and rotate their
          funds into the next market pool, treating cooldown constraints as a major threat to their
          capital velocity.
        </p>
        <p>
          <strong>The Small-Batch Experimenter:</strong> Operating with a strict conservative
          boundary, this user dedicates a localized "sandbox" fund of $500 to $1,000 strictly for
          testing unproven or complex platforms. They run deep background checks on developer
          documentation, audit tracks, and social consensus. They trade away personal due diligence
          by leaning heavily on the recommendations of trusted inner circles ("Squad Walls") or
          direct interactions with founders on Discord.
        </p>
      </CaseStudySection>

      <CaseStudySection label="04" title="The Impact: Streamlining the Underwriter Journey">
        <p>
          By converting qualitative friction points into precise engineering tickets, this research
          provided an exact roadmap for optimizing the application's interface layout prior to
          mainnet distribution.
        </p>

        <CaseStudySubhead>Persistent Pending Modals</CaseStudySubhead>
        <p>
          Redesigned the transaction architecture to ensure deposit and withdrawal modals remain
          fixed on screen in a visible "Pending" state whenever a browser wallet interaction is
          triggered, preventing user disorientation.
        </p>

        <CaseStudySubhead>Calendar Alert Integration</CaseStudySubhead>
        <p>
          Added an explicit "Add to Calendar" button directly onto the pending withdrawal screen,
          allowing users to save their automated claim windows with a single click.
        </p>

        <CaseStudySubhead>Max Approval Defaulting</CaseStudySubhead>
        <p>
          Adjusted wallet integration parameters to provide "Max Approval" capabilities as the
          default layout option, matching common industry patterns and preserving user gas.
        </p>

        <CaseStudySubhead>Decimal Detail Enhancement</CaseStudySubhead>
        <p>
          Updated dashboard pools to show at least three decimal points for share percentages
          (preventing low-volume experimenters from seeing an discouraging "0%" pool share balance)
          and explicitly brought exchange rate pairs into the withdrawal flow cards.
        </p>

        <CaseStudySubhead>Humanized Trigger Copy</CaseStudySubhead>
        <p>
          Restructured technical system triggers and phrases like "cover for a hit" into clear,
          diagram-supported visual elements to explain security models without relying on deep
          developer jargon.
        </p>
      </CaseStudySection>

      <CaseStudySection label="05" title="Impact & Outcomes">
        <CaseStudySubhead>Research Outcomes</CaseStudySubhead>
        <p>
          <strong>Layout Optimization:</strong> Every major instructional, layout, and visual
          contrast issue uncovered during testing was accepted by the engineering team, driving a
          total rework of the dApp's form fields and confirmation states.
        </p>
        <p>
          <strong>Strategic Persona Positioning:</strong> Identifying the distinct requirements of
          high-volume stashers versus small-batch experimenters enabled the design team to
          prioritize explicit documentation links directly inside the transactional panels to
          validate structural trust.
        </p>

        <CaseStudySubhead>Broader Outcomes</CaseStudySubhead>
        <p>
          Following the system-wide application of these usability enhancements, the platform solved
          the core information gaps that historically compromised user retention. In subsequent
          mainnet deployments, clarifying transaction expectations and automating layout reassurance
          allowed underwriters to navigate lockup complexities smoothly, directly resulting in an
          error-free, conversion-friendly network staking portal.
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
