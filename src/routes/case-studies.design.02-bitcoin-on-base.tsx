import { createFileRoute } from "@tanstack/react-router";
import { DesignProjectLayout, DesignSection } from "@/components/DesignProjectLayout";

export const Route = createFileRoute("/case-studies/design/02-bitcoin-on-base")({
  head: () => ({
    meta: [
      { title: "Bitcoin On Base: Bringing native BTC liquidity to Base · Sasha (Tanase) Luca" },
      {
        name: "description",
        content:
          "Designing the Bitcoin On Base experience for Threshold Network — a bridging and liquidity flow that makes native BTC usable on Base without hiding the mechanism.",
      },
      {
        property: "og:title",
        content: "Bitcoin On Base: Bringing native BTC liquidity to Base · Sasha (Tanase) Luca",
      },
      {
        property: "og:description",
        content:
          "Designing the Bitcoin On Base experience for Threshold Network — a bridging and liquidity flow that makes native BTC usable on Base without hiding the mechanism.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesignProject02,
});

function DesignProject02() {
  return (
    <DesignProjectLayout
      no="02"
      year="2025"
      title="Bitcoin On Base: making native BTC usable on an L2."
      subtitle="Bitcoin On Base · Threshold Network · 2025"
      synopsis="Taking everything the tBTC Bridge taught me about trust and applying it to a new chain, a new audience, and a much shorter attention span."
      tags={["Product Designer", "UX Researcher", "L2", "Bitcoin DeFi"]}
      cover="linear-gradient(135deg, #111 0%, #1a1a1a 40%, #2a2a2a 100%)"
      coverAlt="Bitcoin On Base — cover"
    >
      <DesignSection number="01" title="The Problem - Where it started">
        <p>
          Base had users, apps, and liquidity. What it didn't have was a credible way to hold
          Bitcoin. The options were wrapped assets with custodial trust assumptions, or a
          multi-step journey across chains that most people abandoned somewhere in the middle.
        </p>
        <p>
          The brief was deceptively simple: let someone bring BTC onto Base and put it to work. The
          hard part was that every step of that journey involves a mechanism the user cannot see,
          cannot verify at a glance, and has no mental model for.
        </p>
      </DesignSection>

      <DesignSection number="02" title="Understanding the territory before touching the interface">
        <p>
          I started where I always start: with the assumptions the team held but hadn't tested. Who
          is actually holding BTC and looking at an L2? What do they believe about custody, about
          finality, about who can take their money?
        </p>
        <p>
          The pattern that came back was familiar from the tBTC work. People don't fear waiting.
          They fear not knowing. The absence of a clear signal is read as failure, and failure in
          this context is read as loss.
        </p>
      </DesignSection>

      <DesignSection number="03" title="The First Solution">
        <p>
          The first prototype treated the bridge as a narrated process rather than a transaction.
          Every protocol stage was surfaced in plain language, with the underlying transaction
          linked on its native explorer and an elapsed-time counter running throughout.
        </p>
      </DesignSection>

      <DesignSection number="04" title="What testing changed">
        <p>
          Testing sharpened two things: how much detail belongs on screen at once, and what happens
          when a deposit breaks. The recovery path mattered more than the happy path — the people
          most likely to churn were the ones who had already started.
        </p>
      </DesignSection>

      <DesignSection
        number="05"
        title="The Final Solution"
        subtitle="Shipped as part of Threshold's Base expansion"
      >
        <p>
          The shipped flow keeps three commitments: show the mechanism, never let the interface go
          silent, and give every deposit a receipt that can be resumed from any device.
        </p>
      </DesignSection>

      <DesignSection number="06" title="What I took from it">
        <p>
          Trust doesn't transfer between chains. Each new surface has to earn it again, with the
          same primitives: visibility of system status, verifiability, plain language, and letting
          people start small.
        </p>
      </DesignSection>
    </DesignProjectLayout>
  );
}
