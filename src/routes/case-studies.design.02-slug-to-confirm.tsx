import { createFileRoute } from "@tanstack/react-router";
import { DesignProjectLayout, DesignSection } from "@/components/DesignProjectLayout";

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

function Placeholder({ label, note }: { label: string; note?: string }) {
  return (
    <figure className="py-4">
      <div className="flex min-h-[220px] w-full items-center justify-center border border-dashed border-border px-6 py-12 md:min-h-[320px]">
        <span className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
      </div>
      {note && (
        <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {note}
        </figcaption>
      )}
    </figure>
  );
}

function BitcoinOnBase() {
  return (
    <DesignProjectLayout
      no="02"
      year="2023"
      title="Bitcoin on Base"
      subtitle="On · [CLIENT TO CONFIRM]"
      synopsis="A validated Bitcoin bridge experience, rebuilt from the ground up in a new brand language so it reads as a native Base product rather than a transplanted network dashboard."
      tags={["Product Designer", "Visual Design", "Brand Application"]}
      coverAlt="Bitcoin on Base — cover"
      cover="linear-gradient(135deg, #e9e9e6 0%, #d5d4cf 100%)"
    >
      <DesignSection number="01" title="Problem">
        <p>
          Base was opening a new space that promised the reach of web2 with the guarantees of web3,
          and it was open to almost everyone. Bitcoin holders were the exception, because they could
          not take part without first swapping their BTC into another asset and giving up the thing
          they most wanted to hold. tBTC was invited by Base to close that gap and bring the first
          native, fully decentralized Bitcoin representation to the network, letting holders keep
          their Bitcoin while gaining access to the Ethereum L1 and L2 ecosystem. The bridging flow
          itself was already proven from the tBTC bridge I had designed and validated on the
          Threshold dashboard, so the problem was not the flow. The problem was that this proven
          experience was locked to Threshold&rsquo;s design system and buried inside a governance
          dashboard, so it would never read as a native Base product.
        </p>
        <Placeholder
          label="[IMAGE PATH TO CONFIRM] — hero shot of the finished main screen in the On interface"
        />
      </DesignSection>

      <DesignSection number="02" title="Discovery">
        <p>
          There was no new research round here, and I would rather say that plainly than dress
          reasoning up as findings. What I was designing against was a set of fixed constraints. The
          UX was already settled and the pain points from the earlier tBTC rounds were already
          understood and already solved in the flows, so I was not free to touch that and had no
          reason to want to. That left the visual language as the real variable, bounded by two
          things. Base had its own art direction that the product needed to feel part of, and
          Base&rsquo;s audience would judge a standalone tool against every other app in that suite
          rather than against a web3 governance dashboard. The harder constraint was internal to me.
          I had designed the bridge this was built on, which meant my own defaults were the first
          thing likely to seep back in.
        </p>
      </DesignSection>

      <DesignSection number="03" title="Solution">
        <p>
          The team broke from the Threshold style guide completely and stood up a new brand identity,
          On, drawn from Bitcoin on Base. My work sat in the interface. Because the product no longer
          had to live inside a dashboard and stood on its own, I had room to rebuild it from the
          ground up in that new language rather than reskin the old one. The platform was also meant
          to be more than a bridge, surfacing staking pools and onchain campaigns alongside the flow,
          so the shell had to work as a product home rather than a single tool. I kept the flows
          deliberately intact, since reworking a validated experience would have thrown away hard
          evidence for no reason, which let me spend my time where the value actually was, on the
          visual cues and the styling. Two heuristics carried the work. Consistency and standards
          meant aligning to Base&rsquo;s art direction so the bridge sat inside the suite as a peer
          rather than a transplant. Match between the system and the real world meant designing to
          what Base&rsquo;s users already expected a native tool to look and behave like. To keep my
          own patterns out, I treated every element as a project I had never worked on before and
          styled it fresh rather than reaching for what had worked on Threshold.
        </p>
        <Placeholder
          label="[IMAGE PATH TO CONFIRM] — before and after: same screen in Threshold styling vs the rebuilt On interface"
        />
        <Placeholder label="[DIAGRAM TO CONFIRM] — inherited vs rebuilt (paste SVG markup here)" />
      </DesignSection>

      <DesignSection number="04" title="Outcome">
        <p>
          The interface was rebuilt in full and the product reached a working prototype, with the
          whole app designed and ready to hand off. I do not have adoption or completion figures to
          point to from the time, and I would rather leave that honest than borrow a number. The
          product is no longer live today, and the name now belongs to an unrelated project I had no
          part in.
        </p>
        <Placeholder label="[GALLERY TO CONFIRM] — 3 to 5 key screens: overview, main bridge step, success state, staking and campaign surfaces" />
        <Placeholder label="[GALLERY TO CONFIRM] — craft details: close crops of components, iconography, layout" />
      </DesignSection>

      <DesignSection number="05" title="Takeaway">
        <p>
          The discipline I carried forward was treating the familiar as unfamiliar. When you have
          solved a problem once, the reflex is to solve it the same way again, and that reflex is
          exactly what a new brand and a new audience cannot afford. Forcing myself to approach every
          element as if I had never designed it before was what let the interface belong to Base
          instead of quietly still belonging to Threshold.
        </p>
      </DesignSection>
    </DesignProjectLayout>
  );
}
