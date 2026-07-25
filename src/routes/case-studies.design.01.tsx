import { createFileRoute } from "@tanstack/react-router";
import { DesignProjectLayout, DesignSection } from "@/components/DesignProjectLayout";

import tBTCCover from "@/assets/tBTC_Project_Cover.png.asset.json";
import tBTCv1Scary from "@/assets/tBTC_v1_scary.png.asset.json";
import bridgeComparison from "@/assets/bridge-comparison-full.png.asset.json";
import tBTCBridgeV2Sweep from "@/assets/tBTC-Bridge-v2-sweep-2.png.asset.json";
import mintingTimelineBeforeAfter from "@/assets/Minting_Timeline_Before_and_After.png.asset.json";
import resumeDepositScenarios from "@/assets/resume-deposit-scenarios.png.asset.json";
import mintFailSafe from "@/assets/Resume_Minting.png.asset.json";
import step2Image from "@/assets/Step_2.png.asset.json";
import step2Iteration from "@/assets/Step-2-1-2.png.asset.json";
import shippedBridge from "@/assets/Shipped_Bridge.png.asset.json";
import shippedBridge2 from "@/assets/Shipped_Bridge_2.png.asset.json";
import depositMintFlow from "@/assets/Deposit_and_mint_flow_-_tBTC.png.asset.json";

export const Route = createFileRoute("/case-studies/design/01")({
  head: () => ({
    meta: [
      { title: "tBTC Bridge: Trust design in a Bitcoin bridge→20% conversion. · Sasha (Tanase) Luca" },
      {
        name: "description",
        content:
          "Designing for trust in the tBTC Bridge cross-chain flow — reducing bridge anxiety through clearer state, status, and recovery affordances.",
      },
      {
        property: "og:title",
        content: "tBTC Bridge: Trust design in a Bitcoin bridge→20% conversion. · Sasha (Tanase) Luca",
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
      title="tBTC Bridge: Trust design in a Bitcoin bridge→20% conversion."
      subtitle="tBTC v2 · Threshold Network · 2022 – 2024"
      synopsis="Three studies, 24 participants, three design iterations, and an ~20% lift in successful bridge completion. This is the story of how each one led to the next."
      tags={["Product Designer", "UX Researcher", "3 studies", "3 iterations"]}
      coverImage={tBTCCover.url}
      coverAlt="tBTC Bridge v2 — selected UI screens showing the deposit flow, bridging process, and completion state"
    >
      <DesignSection number="01" title="Where it started">
        <h3 className="text-lg font-medium tracking-tight text-foreground md:text-xl">
          Tested May 2022
        </h3>
        <p>
          tBTC turns Bitcoin into an ERC-20 token so it can be used on Ethereum. When I picked up
          the product, v1 had already shipped and already had a reputation problem, and the
          reputation was earned.
          <br />
          <br />
          &nbsp;After depositing funds, users landed on a spinner. No states, no progress, no
          estimate. It could sit there for six hours. People weren't waiting; they were watching a
          screen that gave them no evidence their money still existed.
        </p>
        <p>{"\n"}</p>
        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={tBTCv1Scary.url}
              alt="tBTC v1 bridge UI showing a spinner with no progress feedback after a Bitcoin deposit"
              className="h-auto w-full"
            />
          </div>
          <div className="mx-auto max-w-[760px]">
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              tBTC v1 · Post-deposit state
            </figcaption>
          </div>
        </figure>
        <p>
          This is about as pure a violation of visibility of system status as you'll find, and in
          most products it costs you a support ticket. In a bridge it costs you the user. The stakes
          of that heuristic scale with the stakes of the transaction, and here the transaction was
          someone's Bitcoin.
        </p>
      </DesignSection>

      <DesignSection number="02" title="Understanding the territory before touching the interface">
        <blockquote className="border-l-2 border-foreground/20 pl-5 text-lg font-light italic leading-relaxed text-foreground md:text-xl">
          &ldquo;Sending your Bitcoin to an unknown address is a really scary thing, it&rsquo;s like
          a leap of faith.&rdquo;
        </blockquote>

        <p>
          I didn't start with screens. I started with a generative study: 12 participants who held
          or had bridged wrapped Bitcoin. I did this because I suspected the problem wasn't
          usability in the narrow sense, and I wanted the team's assumptions on the table before we
          invested in a direction. We ran an assumption mapping workshop first; the interview guide
          came out of what we realised we were guessing about.
          <br />
          <br />
          Three things reshaped how I framed the work.
        </p>

        <div className="space-y-8 pt-2">
          <div>
            <h3 className="text-base font-medium tracking-tight text-foreground md:text-lg">
              The wait wasn't the problem. The silence was.
            </h3>
            <p className="mt-2 text-muted-foreground">
              Participants didn't experience a long bridge as slow, they experienced it as failing.
              Duration without feedback reads as breakdown. That distinction matters, because you
              can't design away a wait that lives at the protocol level, but you can absolutely
              design away silence.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium tracking-tight text-foreground md:text-lg">
              Users' mental model was a swap.
            </h3>
            <p className="mt-2 text-muted-foreground">
              Bridging and swapping had collapsed into one category for most participants. They
              arrived expecting seconds, met hours, and drew the reasonable conclusion that
              something was wrong. Some had even built their own workaround: swapping WBTC into tBTC
              to skip the mint entirely. When users construct a workaround, they're prototyping the
              product you should have built. I filed that away; it comes back at the end.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium tracking-tight text-foreground md:text-lg">
              Decentralisation persuades nobody on its own.
            </h3>
            <div className="mt-2 text-muted-foreground">
              <p>
                Nearly everyone described WBTC as centralised, and nearly everyone used it anyway,
                because liquidity and integrations won. Our differentiator was real but it wasn't a
                motivator. It was a trust signal, not a selling point.
              </p>
              <p className="mt-6">
                <span className="block font-medium text-foreground">The silent constraint</span>
                And underneath all of it, the constraint: the smart contract dictated the flow. The
                deposit receipt, the confirmation windows, the order of operations; protocol facts.
                My job wasn't to shorten the journey. It was to decide what a person should
                understand at every point of a journey they couldn't control.
              </p>
            </div>
          </div>
        </div>

        <figure className="pt-8">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={bridgeComparison.url}
              alt="Comparison diagram showing a typical bridge flow versus the tBTC bridge flow with additional unfamiliar steps"
              className="block h-auto w-full object-contain"
            />
          </div>
          <div className="mx-auto max-w-[760px]">
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Bridge Flow Comparison
            </figcaption>
          </div>
        </figure>
      </DesignSection>

      <DesignSection number="03" title={"Iteration 1 · establishing the baseline\n"}>
        <p>
          Tested May 2022&nbsp;&middot;&nbsp;6
          participants&nbsp;&nbsp;&middot;&nbsp;&nbsp;think-aloud through minting and unminting
          flows
          <br />I designed the first prototype, then tested it myself. At the end of each session I
          asked participants to rate the ease of the flow from 1 to 7; the average landed at 5.8,
          and everyone was asked to motivate their score.
        </p>

        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={tBTCBridgeV2Sweep.url}
              alt="tBTC Bridge v2 iteration 1 UI showing the next sweep countdown and minting timeline"
              className="h-auto w-full"
            />
          </div>
          <div className="mx-auto max-w-[760px]">
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              tBTC Next Sweep Countdown
            </figcaption>
          </div>
        </figure>

        <h3 className="text-base font-medium tracking-tight text-foreground md:text-lg">
          The findings clustered in a way I found more interesting than the score:
        </h3>

        <ul className="list-disc space-y-3 pl-5 pt-2 text-foreground marker:text-foreground/40">
          <li>
            6/6&nbsp; lost track of which chain they were acting on. Bitcoin and Ethereum fail
            differently and cost differently, and the interface never said which one you were
            touching.
          </li>
          <li>
            6/6&nbsp;leaned on the step timeline. This was the most-used element on the page, and it
            was a column of undifferentiated text.
          </li>
          <li>
            4+ &quot;Sweep&quot; meant nothing to anyone. Worse, the countdown attached to it
            manufactured urgency where none existed. Protocol vocabulary had leaked into the
            interface and brought protocol anxiety with it.
          </li>
          <li>
            4+ wanted some way of signal that a mint was in progress, and they also requested a
            transaction history.
          </li>
          <li>
            2/6 read the recovery address field as an admission: if there&apos;s a recovery
            mechanism, things must go wrong here a lot. Both were v1 users. The ones who&apos;d
            never touched v1 found the same field reassuring. Same component, opposite meanings,
            depending on what the user had lived through.
          </li>
        </ul>

        <blockquote className="mt-8 border-l-2 border-foreground/20 pl-6 text-xl font-medium italic leading-relaxed text-foreground md:text-2xl">
          if there&apos;s a recovery mechanism, things must go wrong here a lot.
        </blockquote>

        <p className="pt-6">
          That last one taught me something I&apos;ve carried since: a safety feature is only
          reassuring to people who haven&apos;t been burned. For everyone else it&apos;s a trigger,
          and you have to design its disclosure, not just its existence.
        </p>
      </DesignSection>

      <DesignSection number="04" title="Iteration 2 · designing the wait">
        <p>
          Tested May-June 2023&nbsp; 6 participants&nbsp;
        </p>
        <p>
          At the end of each session I asked participants to rate the ease of the flow from 1 to 7;
          the average landed at 4.7 for minting and 6 for unminting.
          <br />
          <br />
          <strong>
            The redesign was organised around one idea: the moment a user initiates minting, their
            active role ends.
          </strong>
          <br />
          <br />
          They become a spectator. So the interface should behave like a narrator, mirroring the
          protocol's actual stages rather than hiding them behind a loader.
          <br />
          <br />
          Minting became four visible states: Bitcoin Confirmations, Minter Check, Guardian Check,
          Minting Complete. Each with a plain-language explanation, its transaction linked on the
          native explorer, and an elapsed-time counter running throughout.
          <br />
          <br />
          Visibility of system status, applied literally: don't summarise the machine, show it. The
          explorer links mattered as much as the states. In crypto, users don't want your
          reassurance; they want the receipts.
        </p>

        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <iframe
              src="https://sashatanase.github.io/sashaweb3ux/"
              title="tBTC minting demo"
              loading="lazy"
              style={{ width: "100%", height: "760px", border: 0, borderRadius: "12px" }}
            />
          </div>
          <div className="mx-auto max-w-[760px]">
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              tBTC minting demo
            </figcaption>
          </div>
        </figure>

        <p>
          Around that core: &quot;sweep&quot; and its countdown were cut, replaced with a duration table
          keyed to deposit size, so expectations get set before commitment instead of pressure
          arriving after it.
        </p>
        <p>
          Each timeline step got a chain label and a small illustration, giving the timeline the
          visual hierarchy its usage had earned. The ETH address autocompleted from the connected
          wallet. Recognition over recall, and no reason to make someone paste a 42-character string
          we already had.
        </p>

        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={mintingTimelineBeforeAfter.url}
              alt="Before and after comparison of the tBTC minting timeline redesign"
              className="h-auto w-full"
            />
          </div>
          <div className="mx-auto max-w-[760px]">
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Before and After — Minting Timeline
            </figcaption>
          </div>
        </figure>

        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={step2Iteration.url}
              alt="tBTC Bridge Step 2 iteration showing the minting process with duration table and timeline"
              className="h-auto w-full"
            />
          </div>
          <div className="mx-auto max-w-[760px]">
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Step 2 iteration — minting process, duration table, and timeline
            </figcaption>
          </div>
        </figure>

        <p>
          Around that core: &quot;sweep&quot; and its countdown were cut, replaced with a duration table
          keyed to deposit size, so expectations get set before commitment instead of pressure
          arriving after it.
        </p>
        <p>
          Each timeline step got a chain label and a small illustration, giving the timeline the
          visual hierarchy its usage had earned. The ETH address autocompleted from the connected
          wallet. Recognition over recall, and no reason to make someone paste a 42-character string
          we already had.
        </p>

        <p>
          The recovery address became a downloadable deposit receipt with a Resume Deposit flow
          behind it, covering the three ways a reveal actually dies: gas set too low, a crash
          mid-flow, or a user dismissing the modal and losing the thread.
        </p>

        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={resumeDepositScenarios.url}
              alt="Resume Deposit diagram showing three failure scenarios and one recovery path via the deposit receipt"
              className="h-auto w-full"
            />
          </div>
          <div className="mx-auto max-w-[760px]">
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Resume Deposit — three failure scenarios, one recovery path
            </figcaption>
          </div>
        </figure>

        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={mintFailSafe.url}
              alt="tBTC Resume Minting flow showing the recovery receipt upload and minting fail-safe screens"
              className="h-auto w-full"
            />
          </div>
          <div className="mx-auto max-w-[760px]">
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Minting fail-safe
            </figcaption>
          </div>
        </figure>

        <p>
          <strong>Testing it was humbling in the specific way that&apos;s useful.</strong> The
          elapsed-time counter was the most appreciated element in the study, the wait, once
          narrated, stopped reading as failure.
        </p>
        <p>
          But the receipt modal frightened five of six participants. I'd solved a two-person problem
          and manufactured a five-person one. My fix had the same flaw as the field it replaced: it
          front-loaded worst-case information at the exact moment the product needed to be building
          calm.
        </p>
        <p>
          The right answer was progressive disclosure: so I proposed to save the receipt in the
          dashboard, surface it only when something has actually gone wrong. This fix was added in
          the final iteration.
        </p>

        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={step2Image.url}
              alt="tBTC Step 2 — Make your BTC deposit, with recovery receipt file download"
              className="h-auto w-full"
            />
          </div>
          <div className="mx-auto max-w-[760px]">
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Step 2 — The not so usual bridge step
            </figcaption>
          </div>
        </figure>

        <p>
          Three other fixes had a different problem. The chain labels, the duration table and the
          restructured How It Works page were all correct, and all of them went unnoticed.
          Participants walked past information that was sitting right there on the page.
        </p>
        <p>
          That took me a while to accept, because I had answered each finding on its own terms and
          each answer was right. What I had missed is that they were placement problems dressed up
          as content problems. I had been adding information to a layout without asking where
          attention actually goes in it. People work down the column where the action is, and
          anything parked in the right rail reads as furniture.
        </p>
        <p>
          The How It Works page had it worse: it lived behind an onboarding modal that half the
          participants never got past, so the best explanatory work in the product was gated behind
          a thing they were trying to dismiss.
        </p>
        <p>
          The lesson stuck. Adding the right content to the wrong position is indistinguishable,
          from the user's side, from not doing the work at all.
        </p>
      </DesignSection>

      <DesignSection number="05" title="The Solution - Iteration 3 · what shipped">
        <p>
          The last pass took the Round 2 evidence and applied it without sentiment. &quot;Mint&quot;
          became &quot;Deposit&quot;, which is match between the system and the real world. Four of
          six participants never connected minting to bridging, so the protocol&apos;s word lost.
          <br />
          <br />
          Chain labels moved off the timeline and onto the step cards, into the line of reading. The
          duration panel moved next to the amount decision.
          <br />
          <br />
          Fees got totalled in USD, which every participant had asked for. The progress bar and time
          counters stayed untouched, because they&apos;d earned it.
          <br />
          <br />
          The receipt was saved in the dashboard, surfaced only when something has actually gone
          wrong.
        </p>
        <p>{"\n"}</p>

        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={shippedBridge.url}
              alt="Shipped tBTC bridge — deposit address generation, QR code, and emission steps"
              className="block h-auto w-full"
            />
            <img
              src={shippedBridge2.url}
              alt="Shipped tBTC bridge — minting progress, Minter/Guardian checks, and completion summary"
              className="-mt-px block h-auto w-full"
            />
          </div>
          <div className="mx-auto max-w-[760px]">
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Last shipped iteration
            </figcaption>
          </div>
        </figure>

        <figure className="py-4">
          <div className="relative w-full overflow-hidden border border-border">
            <img
              src={depositMintFlow.url}
              alt="Deposit and mint flow diagram showing the complete tBTC bridging process from deposit to mint"
              className="block h-auto w-full"
            />
          </div>
          <div className="mx-auto max-w-[760px]">
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Deposit and mint flow
            </figcaption>
          </div>
        </figure>

        <div className="py-4">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src="https://embed.figma.com/proto/X9u1z67oBm7WuoZkHj112Y/tBTC-Final---prototype?page-id=0%3A1&node-id=1-8479&viewport=-72%2C-404%2C0.39&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A8479&embed-host=share"
            allowFullScreen
            title="tBTC Figma prototype"
            loading="lazy"
          />
        </div>

      </DesignSection>

      <DesignSection number="06" title="Outcome.">
        <p>
          Tested May 2022
          <br />
          Completion went up by roughly 20 percent.
          <br />
          <br />
          <br />
          My headline UX metric was task success rate, and I triangulated it across three sources
          rather than trusting any one of them:
          <br />
          <br />
          → PostHog, for how people moved through the interface
          <br />
          → The Graph, for what actually settled on-chain
          <br />
          → TVL, for whether value was accruing
          <br />
          <br />
          Between them I could watch the number of new mints, the growth in TVL, and the count of
          unique wallet addresses touching the bridge, so a lift in success rate was corroborated by
          real deposits from real addresses rather than resting on interface events alone.
          <br />
          <br />
          The definition of the metric mattered as much as the number. I only counted a session as a
          bounce when the protocol had genuinely not registered the BTC deposit, meaning the smart
          contract never triggered Step 3. That kept the rate honest: someone who completed a
          deposit and closed the tab was not a failure, and I didn&apos;t let a drop-off in the UI
          count against the design when the on-chain reality said the bridge had done its job.
        </p>
        <p>{"\n"}</p>
      </DesignSection>
    </DesignProjectLayout>
  );
}
