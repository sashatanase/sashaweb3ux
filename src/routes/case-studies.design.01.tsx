import { createFileRoute } from "@tanstack/react-router";
import { DesignProjectLayout, DesignSection } from "@/components/DesignProjectLayout";
import tBTCCover from "@/assets/tBTC_Project_Cover.png.asset.json";
import tBTCv1Scary from "@/assets/tBTC_v1_scary.png.asset.json";
import bridgeComparison from "@/assets/bridge-comparison-full.png.asset.json";
import tBTCBridgeV2Sweep from "@/assets/tBTC-Bridge-v2-sweep-2.png.asset.json";

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
        <h3 className="text-lg font-medium tracking-tight text-foreground md:text-xl">
          The Eternal Spinner
        </h3>
        <p>
          tBTC turns Bitcoin into an ERC-20 token on Ethereum. I inherited the first version, which
          gave users no feedback at all. The moment someone deposited their funds they landed on a
          screen with a spinner, and it sat there for hours while they panicked that their money was
          gone.
        </p>
        <p>
          This consistent pattern I called <em>bridge anxiety</em>: users couldn&rsquo;t tell
          whether their transaction was progressing, stuck, or lost. The existing UI showed
          technical state but not human state.
        </p>
        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={tBTCv1Scary.url}
              alt="tBTC v1 bridge UI showing a spinner with no progress feedback after a Bitcoin deposit"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            tBTC v1 · Post-deposit state
          </figcaption>
        </figure>
        <p>Everything below comes back to that spinner.</p>
      </DesignSection>

      <DesignSection
        number="02"
        title="The Problems: What 12 people told me before I designed anything."
      >
        <blockquote className="border-l-2 border-foreground/20 pl-5 text-lg font-light italic leading-relaxed text-foreground md:text-xl">
          &ldquo;Sending your Bitcoin to an unknown address is a really scary thing, it&rsquo;s like
          a leap of faith.&rdquo;
        </blockquote>

        <div className="space-y-8 pt-2">
          <div>
            <h3 className="text-base font-medium tracking-tight text-foreground md:text-lg">
              The long wait reads as failure.
            </h3>
            <p className="mt-2 text-muted-foreground">
              Participants were not impatient. The longer a bridge took, the more certain they
              became that something had gone wrong with their funds.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium tracking-tight text-foreground md:text-lg">
              Decentralisation loses to liquidity.
            </h3>
            <p className="mt-2 text-muted-foreground">
              Almost everyone described WBTC as centralised. Almost everyone used it anyway. Being
              the most decentralised bridge was a reason to trust us, not a reason to switch.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium tracking-tight text-foreground md:text-lg">
              Bridging and swapping had collapsed into one idea.
            </h3>
            <p className="mt-2 text-muted-foreground">
              People arrived carrying a swap&rsquo;s expectations, seconds rather than hours. Some
              were already swapping WBTC into tBTC just to skip the mint.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium tracking-tight text-foreground md:text-lg">
              The wait could not be removed.
            </h3>
            <p className="mt-2 text-muted-foreground">
              Bitcoin confirmations and the sweep interval are protocol facts. So the design
              question was never how to make bridging faster. It was what a person should understand
              while a system they cannot influence does something irreversible with their money.
            </p>
          </div>
        </div>

        <figure className="pt-8 md:-mx-16 lg:-mx-[180px] xl:-mx-[260px]">
          <div className="relative w-full overflow-hidden">
            <img
              src={bridgeComparison.url}
              alt="Comparison diagram showing a typical bridge flow versus the tBTC bridge flow with additional unfamiliar steps"
              className="block h-auto w-full object-contain"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Bridge Flow Comparison
          </figcaption>
        </figure>
      </DesignSection>

      <DesignSection number="03" title="Iteration 1 → tested with 6 people">
        <p>
          Rated 5.8 / 7. I designed the prototype and ran the sessions, so everything below is me
          testing my own work.
        </p>

        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={tBTCBridgeV2Sweep.url}
              alt="tBTC Bridge v2 iteration 1 UI showing the next sweep countdown and minting timeline"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            tBTC Next Sweep Countdown
          </figcaption>
        </figure>

        <h3 className="text-base font-medium tracking-tight text-foreground md:text-lg">
          Findings, prioritised by how many of six participants raised them:
        </h3>

        <ul className="list-disc space-y-3 pl-5 pt-2 text-foreground marker:text-foreground/40">
          <li>
            6/6 could not tell which actions happened on Bitcoin and which on Ethereum.
          </li>
          <li>
            6/6 found the timeline the most useful thing on the page, and it was a column of plain
            text.
          </li>
          <li>
            4+ did not know what &ldquo;sweep&rdquo; meant, and the countdown attached to it
            created pressure.
          </li>
          <li>4+ wanted a signal that a mint was in progress, and a history.</li>
          <li>2/6 read the recovery address field as proof that errors were common here.</li>
        </ul>
      </DesignSection>

      <DesignSection number="04" title="Iteration 2 · tested May–June 2023, rated 4.75 and 6 / 7">
        <p>
          The wait became the design problem. Once the user hits [Initiate minting], their active
          role ends, and they enter a spectator state. So the interface started mirroring the
          protocol: Bitcoin Confirmations, Minter Check, Guardian Check, Minting Complete, each with
          an explanation, its transaction on the native explorer, and an elapsed time counter
          running throughout.
        </p>

        <figure className="py-4">
          <div className="flex aspect-[16/10] w-full items-center justify-center border border-dashed border-border bg-muted/30 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Image 4 — placeholder
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Visibility of System Status — three states side by side, elapsed time visible in each.
            The direct answer to the v1 spinner.
          </figcaption>
        </figure>

        <p>
          &ldquo;Sweep&rdquo; and its countdown went, replaced by a duration table tied to deposit
          size. Every timeline step got a chain label and an illustration. The ETH address
          autocompleted.
        </p>

        <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
          {[
            "Image 5 — timeline illustrations as a set",
            "Image 6 — Step 1 redesigned",
            "Image 7 — Step 2, the step no other bridge has",
            "Image 8 — the full minting flow end to end",
          ].map((label) => (
            <div
              key={label}
              className="flex aspect-[4/3] w-full items-center justify-center border border-dashed border-border bg-muted/30 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              {label}
            </div>
          ))}
        </div>

        <p>
          The recovery address became a deposit receipt, a file the user downloads and keeps until
          their tBTC arrives, with a Resume Deposit flow covering three ways a deposit actually
          breaks: a reveal that fails on low gas, a browser crash mid-flow, and a user who dismisses
          the modal twice.
        </p>

        <figure className="py-4">
          <div className="flex aspect-[16/10] w-full items-center justify-center border border-dashed border-border bg-muted/30 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Image 9 — placeholder
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Resume Deposit — three failure scenarios.
          </figcaption>
        </figure>
      </DesignSection>

      <DesignSection number="05" title="Solution.">
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

      <DesignSection number="06" title="Outcome.">
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
