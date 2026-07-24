import { createFileRoute } from "@tanstack/react-router";
import { DesignProjectLayout, DesignSection } from "@/components/DesignProjectLayout";
import tBTCCover from "@/assets/tBTC_Project_Cover.png.asset.json";
import tBTCv1Scary from "@/assets/tBTC_v1_scary.png.asset.json";

export const Route = createFileRoute("/case-studies/design/01")({
  head: () => ({
    meta: [
      { title: "tBTC Bridge: Designing for trust in a Bitcoin bridge · Sasha (Tanase) Luca" },
      {
        name: "description",
        content:
          "Designing for trust in the tBTC Bridge cross-chain flow — reducing bridge anxiety through clearer state, status, and recovery affordances.",
      },
      {
        property: "og:title",
        content: "tBTC Bridge: Designing for trust in a Bitcoin bridge · Sasha (Tanase) Luca",
      },
      {
        property: "og:description",
        content:
          "Designing for trust in the tBTC Bridge cross-chain flow — reducing bridge anxiety through clearer state, status, and recovery affordances.",
      },
      { property: "og:image", content: tBTCCover.url },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: tBTCCover.url },
    ],
  }),
  component: DesignProject01,
});

function DesignProject01() {
  return (
    <DesignProjectLayout
      no="01"
      year="2023"
      title="tBTC Bridge: Designing for trust in a Bitcoin bridge"
      subtitle="tBTC v2 · Threshold Network · 2022–2023"
      synopsis="I ran three studies with 24 participants and designed three iterations of the tBTC bridge, working alongside the smart-contract engineers. Successful bridge completion improved by around 18%."
      tags={["Product Designer", "UX Researcher", "3 studies", "3 iterations"]}
      coverImage={tBTCCover.url}
      coverAlt="tBTC Bridge v2 — selected UI screens showing the deposit flow, bridging process, and completion state"
      gallery={[
        {
          media: "linear-gradient(135deg, #ececea 0%, #d9d8d3 100%)",
          ratio: "16/10",
          caption: "01 · Deposit flow — before / after",
          wide: true,
        },
        {
          media: "linear-gradient(160deg, #111 0%, #2a2a2a 100%)",
          ratio: "4/5",
          caption: "02 · Status system",
        },
        {
          media: "radial-gradient(circle at 70% 30%, #e8564c 0%, #b83e36 100%)",
          ratio: "4/5",
          caption: "03 · Recovery states",
        },
        {
          media: "repeating-linear-gradient(45deg, #ececea 0 12px, #dedcd6 12px 24px)",
          ratio: "16/10",
          caption: "04 · Component library",
          wide: true,
        },
      ]}
    >
      <DesignSection number="01" title="Context.">
        <p>
          tBTC is a decentralized way to bring Bitcoin onto Ethereum. The bridge is the moment users
          hand over real BTC and wait — sometimes hours — for the corresponding tBTC to appear on
          the other side. That waiting window is where trust is either built or lost.
        </p>
        <p>
          Prior research surfaced a consistent pattern we called <em>bridge anxiety</em>: users
          couldn&rsquo;t tell whether their transaction was progressing, stuck, or lost. The
          existing UI showed technical state but not human state.
        </p>
      </DesignSection>

      <DesignSection number="02" title="Problem.">
        <p>
          The bridge asked users to reason about deposit addresses, minting phases, confirmations,
          relayers, and finality windows — all at once. New users bounced at the deposit screen.
          Returning users refreshed the page compulsively during the wait.
        </p>
        <p>
          The design brief: keep the underlying protocol untouched, but redesign the surface so that
          at any moment a user could answer three questions in under five seconds —{" "}
          <em>
            Where is my BTC? What&rsquo;s happening next? What do I do if something goes wrong?
          </em>
        </p>
      </DesignSection>

      <DesignSection number="03" title="Solution.">
        <p>
          The redesign centered on a single vertical timeline that mapped every protocol phase to a
          human-readable step, with live status, expected duration, and a clear recovery path if a
          step stalled. Deposit addresses were treated as a first-class object with copy, verify,
          and QR affordances. Confirmations were surfaced as progress, not raw numbers.
        </p>
        <p>
          A shared status system — pending, confirming, minting, complete, needs-attention — was
          promoted into a component library used across the bridge, wallet, and staking surfaces so
          the whole product spoke one language.
        </p>
      </DesignSection>

      <DesignSection number="04" title="Outcome.">
        <p>
          Post-launch, support tickets tagged &ldquo;is my bridge stuck?&rdquo; dropped
          meaningfully, completion rate on first-time deposits improved, and the status system was
          adopted by adjacent teams as the default pattern for long-running on-chain flows.
        </p>
        <p>
          The bigger win was internal: engineering, product, and design converged on a shared
          vocabulary for bridge state — which made every subsequent iteration cheaper to design,
          build, and explain.
        </p>
      </DesignSection>
    </DesignProjectLayout>
  );
}
