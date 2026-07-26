import { createFileRoute } from "@tanstack/react-router";
import { DesignProjectLayout, DesignSection } from "@/components/DesignProjectLayout";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BitcoinOnBaseDiagram } from "@/components/BitcoinOnBaseDiagram";
import { ImageLightbox } from "@/components/ImageLightbox";
import { LoopingVideo } from "@/components/LoopingVideo";
import stakingFlowVideo from "@/assets/bitcoin-on-base-staking-flow.mp4.asset.json";
import stakingFlowPoster from "@/assets/on-timeline-1-of-4-poster.png.asset.json";
import bitcoinOnBaseCover from "@/assets/Bitcoin_on_Base_cover.png.asset.json";
import thresholdTimeline from "@/assets/tBTC_v2_Minting_Timeline.jpg.asset.json";
import onTimeline from "@/assets/Bitcoin_On_Base_Minting_Timeline.png.asset.json";
import tbtcBridgeDiagram from "@/assets/tBTC_bridge_diagram_-_protocol_and_user_flow.png.asset.json";
import onStep1 from "@/assets/on_Step1.png.asset.json";
import onStep2 from "@/assets/on_Step_2_-_Make_a_BTC_deposit.png.asset.json";
import onStep3 from "@/assets/on_Step_3.png.asset.json";
import onTimeline1 from "@/assets/on_Timeline_1_of_4.png.asset.json";
import onTimeline4 from "@/assets/on_Timeline_4_of_4.png.asset.json";
import onSuccess from "@/assets/on_Success.png.asset.json";

const gallery = [
  { src: onStep1.url, alt: "Step 1 — provide a deposit address" },
  { src: onStep2.url, alt: "Step 2 — make a BTC deposit" },
  { src: onStep3.url, alt: "Step 3 — initiate minting" },
  { src: onTimeline1.url, alt: "Minting timeline — minter check" },
  { src: onTimeline4.url, alt: "Minting timeline — completing deposit" },
  { src: onSuccess.url, alt: "Mint completed success state" },
];





// [SLUG TO CONFIRM] — this route file is named with a placeholder slug.
// Rename the file (and the createFileRoute string) once the final slug is decided.

export const Route = createFileRoute("/case-studies/design/02-slug-to-confirm")({
  head: () => ({
    meta: [
      { title: "Bitcoin on Base · Sasha (Tanase) Luca" },
      {
        name: "description",
        content:
          "Rebuilding a validated Bitcoin bridge experience in a new brand language so it reads as a native Base product.",
      },
      { property: "og:title", content: "Bitcoin on Base · Sasha (Tanase) Luca" },
      {
        property: "og:description",
        content:
          "Rebuilding a validated Bitcoin bridge experience in a new brand language so it reads as a native Base product.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BitcoinOnBase,
});

function BitcoinOnBase() {
  return (
    <DesignProjectLayout
      no="02"
      year="2023"
      title="Bitcoin on Base"
      subtitle="tBTC on Base · Threshold Network ·  2024"
      synopsis="A validated Bitcoin bridge experience, rebuilt from the ground up in a new brand language so it reads as a native Base product rather than a transplanted network dashboard."
      tags={["Product Design Lead", "Design Strategy", "Web Application", "Design Team Of 3"]}
      coverAlt="Bitcoin on Base — cover"
      coverImage={bitcoinOnBaseCover.url}
    >
      <DesignSection number="01" title="Problem">
        <p>
          Base was opening a space that folded the reach of consumer web into the guarantees of
          onchain infrastructure, and it was open to nearly everyone. Bitcoin holders were the
          exception. To take part they had to swap their BTC into something else first, which asked
          them to give up the one asset they were least willing to part with.
          <br />
          <br />
          <br />
          <br />
          tBTC was invited by Base to remove that tax and bring the first native, fully
          decentralized Bitcoin representation to the network, so holders could stay in Bitcoin and
          still reach the Ethereum L1 and L2 economy. The UX flow itself was settled, since I had
          already designed and validated that bridging experience for tBTC on the Threshold
          dashboard.
          <br />
          <br />
          <br />
          <br />
          What did not translate was the context around it. A proven flow bound to Threshold's
          design system and parked inside a network dashboard would never read as a first-class Base
          product, and on Base that gap is the whole game.
        </p>
        <figure className="py-4">
          <img
            src={tbtcBridgeDiagram.url}
            alt="tBTC Bridge Deposit diagram — protocol and user flow"
            className="w-full"
            loading="lazy"
          />
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            tBTC Bridge Deposit diagram — protocol and user flow
          </figcaption>
        </figure>
      </DesignSection>

      <DesignSection number="02" title="Discovery">
        <p>
          There was no new research round here, and I would rather say that plainly than dress
          reasoning up as findings. What I was designing against was a set of fixed constraints. The
          UX was already settled and the pain points from the earlier tBTC rounds were already
          understood and already solved in the flows, so my team and I were not free to touch that
          and had no reason to want to.
          <br />
          <br />
          That left the visual language as the real variable, bounded by two things. Base had its
          own art direction that the product needed to feel part of, and Base&rsquo;s audience would
          judge a standalone tool against every other app in that suite rather than against a web3
          network dashboard.
          <br />
          <br />
          The harder constraint was internal to me. I had designed the bridge this was built on,
          which meant my own defaults were the first thing likely to seep back in.
        </p>
      </DesignSection>

      <DesignSection number="03" title="Solution">
        <p>
          The team broke from the Threshold style guide completely and stood up a new brand
          identity, On, drawn from Bitcoin on Base. Our work sat in the interface. Because the
          product no longer had to live inside a dashboard and stood on its own, my team and I had
          room to rebuild it from the ground up in that new language rather than reskin the old one.
          <br />
          <br />
          The platform was also meant to be more than a bridge, surfacing staking pools and on-chain
          campaigns alongside the flow, so the shell had to work as a product home rather than a
          single tool.
          <br />
          <br />
          I kept the flows deliberately intact, since reworking a validated experience would have
          thrown away hard evidence for no reason, which let me spend my time where the value
          actually was, on the visual cues and the styling.
          <br />
          <br />
          &nbsp;Two heuristics carried the work.. Consistency and standards meant aligning to
          Base&rsquo;s art direction so the bridge sat inside the suite as a peer rather than a
          transplant. Match between the system and the real world meant designing to what
          Base&rsquo;s users already expected a native tool to look and behave like.
          <br />
          <br />
          To keep my own patterns out, I treated every element as a project I had never worked on
          before and styled it fresh rather than reaching for what had worked on Threshold.
        </p>
        
        <BitcoinOnBaseDiagram />
      </DesignSection>

      <div className="mt-16 w-full">
        <BeforeAfterSlider
          beforeSrc={thresholdTimeline.url}
          afterSrc={onTimeline.url}
          beforeAlt="Minting timeline in the Threshold dashboard styling"
          afterAlt="Minting timeline rebuilt in the On interface"
          caption="Drag to compare. The same minting timeline in two design languages, Threshold's dashboard on the left and the rebuilt On interface on the right."
        />
      </div>

      <div className="mt-16 w-full">
        <LoopingVideo
          src={stakingFlowVideo.url}
          poster={stakingFlowPoster.url}
          label="Bitcoin on Base staking flow prototype recording"
          caption="Prototype recording — the staking flow in the On interface"
        />
      </div>





      <DesignSection number="04" title="Outcome">
        <p>
          The app shipped in its new visual language and stood on its own as a product. What came
          next is the ordinary arc of infrastructure work at this layer.
          <br />
          <br />
          Threshold consolidated its Bitcoin tooling, and the standalone apps gave way to a single
          unified bridge that mints, moves assets across chains, and handles staking in one place,
          which is the live product now. Native Bitcoin-to-Base movement, the thing this project set
          out to solve, sits inside it.
          <br />
          <br />
          Somewhere along the way I stopped judging a project by whether its original shell survived
          and started judging it by whether the work held up once someone else inherited it. This
          one did. The interface carried into the consolidation intact.
          <br />
          <br />
          Takeaway. What I kept was the discipline of treating the familiar as unfamiliar. Solve a
          problem once and the reflex is to reach for the same answer, and that reflex is precisely
          what a new brand and a new audience cannot afford.
          <br />
          <br />
          Forcing each element to prove itself again, as if I had no history with it, is what let the
          product belong to Base instead of quietly still belonging to Threshold. It is the habit I
          trust most now when I move between contexts, because the work that travels well is the
          work that was never on autopilot.
        </p>
        <figure className="py-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {gallery.map((item) => (
              <ImageLightbox key={item.src} src={item.src} alt={item.alt}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full transition-opacity hover:opacity-90"
                  loading="lazy"
                />
              </ImageLightbox>
            ))}
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Shipped screens in the On interface — deposit, minting timeline and success states
          </figcaption>
        </figure>
      </DesignSection>
    </DesignProjectLayout>
  );
}
