import { createFileRoute } from "@tanstack/react-router";
import { DesignProjectLayout, DesignSection } from "@/components/DesignProjectLayout";
import { KeepReading } from "@/components/KeepReading";
import masCover from "@/assets/mas-cover.png.asset.json";
import operatorAddressMapping from "@/assets/operator-address-mapping.png.asset.json";
import masFlow from "@/assets/mas-flow.png.asset.json";
import stakingCards from "@/assets/staking-cards---applications.png.asset.json";
import stakeConfiguration from "@/assets/stake-configuration.png.asset.json";
import newStakerFlow from "@/assets/new-staker.png.asset.json";
import multiStakeFlow from "@/assets/staker-with-more-than-one-stake.png.asset.json";

// [SLUG TO CONFIRM] — this route file uses a placeholder slug.
// Rename the file (and the createFileRoute string) once the final slug is decided.

export const Route = createFileRoute("/case-studies/design/03-slug-to-confirm")({
  head: () => ({
    meta: [
      { title: "Multi-App Staking · Sasha (Tanase) Luca" },
      {
        name: "description",
        content:
          "One stake, several applications, and a counterintuitive shared-risk model made legible for 267 stakers on Threshold Network.",
      },
      { property: "og:title", content: "Multi-App Staking · Sasha (Tanase) Luca" },
      {
        property: "og:description",
        content:
          "One stake, several applications, and a counterintuitive shared-risk model made legible for 267 stakers on Threshold Network.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MultiAppStaking,
});

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <figure className="py-4">
      <div className="grid min-h-[240px] w-full place-items-center border border-dashed border-border bg-muted/40 px-6 py-16 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </figure>
  );
}

function MultiAppStaking() {
  return (
    <DesignProjectLayout
      no="03"
      year="2022 – 2023"
      title="Multi-App Staking: making shared-stake risk legible → the mechanism the network ran on."
      subtitle="Threshold Network Dashboard · Threshold Network · 2022 – 2023"
      synopsis="One stake, several applications, and a counterintuitive risk model to make safe. I led design and research through a discovery that rewrote the solution, when 199 of 267 stakers broke the assumption it was built on."
      tags={["Design Lead", "UX Researcher", "267 stakers", "3 applications"]}
      coverImage={masCover.url}
      coverAlt="Multi App Staking — the mechanism the network ran on: authorisation and stake-configuration screens"
    >
      <DesignSection number="01" title="Problem">
        <p>
          When Keep and NuCypher merged into Threshold, a staker&rsquo;s tokens stopped backing a
          single job. The same stake could now be put to work across several independent
          applications on the network, each with its own duties and its own power to slash that
          stake if a node misbehaved.
          <br />
          <br />
          That created a problem no staking interface I knew of solved well. A person had to decide
          how much of one stake to authorise to each application, understand that each app could
          penalise them independently, and manage that exposure over time. The novelty was not the
          applications themselves, which stakers already ran. It was authorising a single stake
          across several of them at once and holding a different level of risk in each.
        </p>
      </DesignSection>

      <DesignSection number="02" title="Discovery">
        <p>
          I led the design and research on this, and the most useful thing I learned came from being
          wrong. My first solution rested on an assumption I was confident in, that most stakers ran
          through a dedicated staking provider, so the address that owned the stake and the address
          that operated the node would belong to different people. The interface was built around
          that separation.
          <br />
          <br />
          When I checked it against the real staker set, the assumption collapsed. 199 of 267
          stakers used the same address for both roles, which meant the model I had designed around
          did not describe who these people actually were. That correction reshaped the product.
          Because so many stakers ran their own nodes, often from hardware wallets, I had to bring
          operator address mapping into the dashboard itself rather than pushing those users out to
          Etherscan or the command line to do something the product should own.
          <br />
          <br />
          The second discovery was conceptual. The mechanism under multi-app staking is genuinely
          counterintuitive. You are not slicing a stake into portions. The same stake fully backs
          every application you authorise it for, and each application can slash up to the amount
          you grant it, so one hundred thousand tokens can be authorised in full to three different
          apps at once. That is powerful and efficient, and it is also easy to misread, since the
          natural assumption is that authorising more apps divides your stake rather than layering
          shared risk on top of it.
        </p>

        <figure className="py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 680 452"
            width="100%"
            role="img"
            aria-labelledby="mas-t mas-d"
            className="mx-auto h-auto w-full max-w-[680px]"
            style={{
              fontFamily:
                "'Anthropic Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif",
            }}
          >
            <title id="mas-t">How multi-app staking allocates a stake</title>
            <desc id="mas-d">
              Two panels. The top panel shows the intuitive but wrong assumption that authorizing
              three apps splits a 100k T stake into three 33k portions. The bottom panel shows how
              it actually works: the same 100k T fully backs all three apps at once, and each app
              can slash only up to the amount you authorize.
            </desc>

            <text x="40" y="28" fontSize="14" fontWeight="600" fill="#2C2C2A">
              What people expect: more apps split the stake
            </text>
            <text x="40" y="46" fontSize="12" fill="#5F5E5A">
              A natural assumption, and the wrong one
            </text>

            <line x1="160" y1="103" x2="400" y2="80" stroke="#C9C6BC" strokeWidth="1.5" />
            <line x1="160" y1="103" x2="400" y2="122" stroke="#C9C6BC" strokeWidth="1.5" />
            <line x1="160" y1="103" x2="400" y2="164" stroke="#C9C6BC" strokeWidth="1.5" />

            <rect
              x="40"
              y="68"
              width="120"
              height="70"
              rx="10"
              fill="#F1EFE8"
              stroke="#5F5E5A"
              strokeWidth="0.75"
            />
            <text x="100" y="98" textAnchor="middle" fontSize="12" fill="#5F5E5A">
              Your stake
            </text>
            <text x="100" y="118" textAnchor="middle" fontSize="14" fontWeight="600" fill="#2C2C2A">
              100k T
            </text>

            <rect
              x="400"
              y="62"
              width="240"
              height="36"
              rx="8"
              fill="#F1EFE8"
              stroke="#5F5E5A"
              strokeWidth="0.75"
            />
            <text x="414" y="85" fontSize="13" fill="#2C2C2A">
              PRE
            </text>
            <text x="626" y="85" textAnchor="end" fontSize="12" fill="#5F5E5A">
              33k T
            </text>

            <rect
              x="400"
              y="104"
              width="240"
              height="36"
              rx="8"
              fill="#F1EFE8"
              stroke="#5F5E5A"
              strokeWidth="0.75"
            />
            <text x="414" y="127" fontSize="13" fill="#2C2C2A">
              Random Beacon
            </text>
            <text x="626" y="127" textAnchor="end" fontSize="12" fill="#5F5E5A">
              33k T
            </text>

            <rect
              x="400"
              y="146"
              width="240"
              height="36"
              rx="8"
              fill="#F1EFE8"
              stroke="#5F5E5A"
              strokeWidth="0.75"
            />
            <text x="414" y="169" fontSize="13" fill="#2C2C2A">
              tBTC
            </text>
            <text x="626" y="169" textAnchor="end" fontSize="12" fill="#5F5E5A">
              33k T
            </text>

            <line x1="40" y1="212" x2="640" y2="212" stroke="#E5E3DB" strokeWidth="1" />

            <text x="40" y="248" fontSize="14" fontWeight="600" fill="#042C53">
              How multi-app staking works: one stake backs every app
            </text>
            <text x="40" y="266" fontSize="12" fill="#185FA5">
              Authorizing more apps layers shared risk, it does not divide your tokens
            </text>

            <line x1="160" y1="325" x2="400" y2="300" stroke="#9EC4E8" strokeWidth="1.75" />
            <line x1="160" y1="325" x2="400" y2="342" stroke="#9EC4E8" strokeWidth="1.75" />
            <line x1="160" y1="325" x2="400" y2="384" stroke="#9EC4E8" strokeWidth="1.75" />

            <rect
              x="40"
              y="290"
              width="120"
              height="70"
              rx="10"
              fill="#E6F1FB"
              stroke="#185FA5"
              strokeWidth="0.75"
            />
            <text x="100" y="320" textAnchor="middle" fontSize="12" fill="#185FA5">
              Your stake
            </text>
            <text x="100" y="340" textAnchor="middle" fontSize="14" fontWeight="600" fill="#042C53">
              100k T
            </text>

            <rect
              x="400"
              y="282"
              width="240"
              height="36"
              rx="8"
              fill="#E6F1FB"
              stroke="#185FA5"
              strokeWidth="0.75"
            />
            <text x="414" y="305" fontSize="13" fill="#042C53">
              PRE
            </text>
            <text x="626" y="305" textAnchor="end" fontSize="12" fill="#185FA5">
              up to 100k T
            </text>

            <rect
              x="400"
              y="324"
              width="240"
              height="36"
              rx="8"
              fill="#E6F1FB"
              stroke="#185FA5"
              strokeWidth="0.75"
            />
            <text x="414" y="347" fontSize="13" fill="#042C53">
              Random Beacon
            </text>
            <text x="626" y="347" textAnchor="end" fontSize="12" fill="#185FA5">
              up to 100k T
            </text>

            <rect
              x="400"
              y="366"
              width="240"
              height="36"
              rx="8"
              fill="#E6F1FB"
              stroke="#185FA5"
              strokeWidth="0.75"
            />
            <text x="414" y="389" fontSize="13" fill="#042C53">
              tBTC
            </text>
            <text x="626" y="389" textAnchor="end" fontSize="12" fill="#185FA5">
              up to 100k T
            </text>

            <text x="40" y="432" fontSize="12" fill="#5F5E5A">
              The same 100k T backs all three. Each app can slash only up to the amount you
              authorize, so you set your risk per app.
            </text>
          </svg>
          <figcaption className="mx-auto max-w-[760px] pt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            The same stake fully backs every authorised application. Each app can only slash up to
            the amount you grant it.
          </figcaption>
        </figure>

        <figure className="py-4">
          <img
            src={operatorAddressMapping.url}
            alt="Operator address mapping screens: mapped state on the dashboard, mapping modal, and confirmation state"
            className="mx-auto h-auto w-full"
            loading="lazy"
          />
          <figcaption className="mx-auto max-w-[760px] pt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Operator address mapping brought into the dashboard, so self-operated stakers could
            finish the flow without leaving the app.
          </figcaption>
        </figure>
      </DesignSection>

      <DesignSection number="03" title="Solution">
        <p>
          The design job was to make that layered-risk model legible and safe, inside a flow a
          first-time staker could actually finish. I led the work to a three-step spine:
          <br />
          →&nbsp; deposit your tokens
          <br />
          →&nbsp; authorise and configure how much each application can draw on
          <br />
          →&nbsp; then set up the node.
          <br />
          <br />
          <br />
          <strong>
            I put node setup last on purpose, because it is a separate technical step, done on the
            command line and sometimes handed to a third-party provider, so a staker could commit
            their stake and set their per-app risk on the dashboard before touching any node
            infrastructure.
          </strong>
        </p>

        <figure className="my-12">
          <img
            src={masFlow.url}
            alt="The three-step staking flow: stake tokens, authorize apps, set up node"
            className="mx-auto h-auto w-full"
            loading="lazy"
          />
          <figcaption className="mx-auto max-w-[760px] pt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            The three-step spine: deposit, authorise, set up node.
          </figcaption>
        </figure>

        <p>
          The heart of it was treating per-app authorisation as a risk control, not a form field.
          Setting how much an application could slash was really the staker deciding their exposure
          to that application, so the interface had to present it as a deliberate choice. I leaned
          on progressive disclosure to keep each step from overwhelming the user, and on recognition
          over recall so the state of each application, authorised or not, node running or not,
          lived on the cards instead of in the user&rsquo;s memory.
        </p>

        <figure className="my-12">
          <img
            src={stakingCards.url}
            alt="Staking cards showing per-application authorisation percentage, node status and increase or decrease controls"
            className="mx-auto h-auto w-full"
            loading="lazy"
          />
          <figcaption className="mx-auto max-w-[760px] pt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Each application card carries its own state: authorised amount, node status, and the
            controls to change exposure.
          </figcaption>
        </figure>

        <p>
          The authorisation step was where the counterintuitive model had to become something you
          could see and act on, not a concept to explain. Each application sat on its own card, and
          you set how much of your stake it could use, up to the full amount, with the minimum and
          your remaining balance shown right there.
          <br />
          <br />
          Because the same stake could back every app at once, a staker could authorise their entire
          balance to tBTC and their entire balance to Random Beacon from one stake, and the
          interface showed exactly that instead of asking them to reason it out. PRE, which could
          not slash, was marked as not requiring authorisation, so no one spent a decision on it.
          The button that committed the choice read &ldquo;Authorize Selected Apps,&rdquo; naming
          what it actually did when only some apps were chosen.
        </p>

        <figure className="my-12">
          <img
            src={stakeConfiguration.url}
            alt="Stake configuration screens: staking overview, staking applications and staking providers tabs"
            className="mx-auto h-auto w-full"
            loading="lazy"
          />
          <figcaption className="mx-auto max-w-[760px] pt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Configuration split across overview, applications and providers, so each decision had
            its own place.
          </figcaption>
        </figure>

        <figure className="my-12">
          <img
            src={newStakerFlow.url}
            alt="Service blueprint for a new Threshold staker"
            className="mx-auto h-auto w-full"
            loading="lazy"
          />
          <figcaption className="mx-auto max-w-[760px] pt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            The new-staker flow, mapped end to end including error and interrupted states.
          </figcaption>
        </figure>

        <figure className="my-12">
          <img
            src={multiStakeFlow.url}
            alt="Flow for a staker with one or more existing stakes and PRE node setup"
            className="mx-auto h-auto w-full"
            loading="lazy"
          />
          <figcaption className="mx-auto max-w-[760px] pt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            The returning staker with one or more stakes, including legacy and native paths.
          </figcaption>
        </figure>
      </DesignSection>

      <DesignSection number="04" title="Outcome">
        <p>
          Multi-app staking shipped as the second phase of the Threshold staking process. The result
          I stand behind is not a number I can honestly pin on the interface alone, so I will not
          borrow one. It is that the hardest thing in the product to explain became the mechanism
          the network ran on. Authorising a stake across applications was not a feature sitting
          beside Threshold, it was how Threshold worked, and stakers from both legacy networks came
          to do it through a single dashboard rather than two. Making a high-stakes,
          counterintuitive decision legible enough that people made it confidently, with real money,
          is the outcome I care about most.
        </p>

        <ImagePlaceholder label="[IMAGE — PRIORITY 6, OPTIONAL: INCREASE/DECREASE AUTHORISATION SCREEN (EXPOSURE MANAGED OVER TIME). TO ADD]" />
      </DesignSection>

      <DesignSection number="05" title="Takeaway">
        <p>
          What I carried forward is to pressure-test the assumption your whole solution rests on
          before you build on it. I was confident about how these stakers operated, I was wrong in a
          way that touched every screen, and I only found out because I checked against{" "}
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            [TAKEAWAY ENDING TO CONFIRM]
          </span>
        </p>
      </DesignSection>

      <KeepReading currentId="03" />
    </DesignProjectLayout>
  );
}
