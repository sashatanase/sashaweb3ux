import { Link } from "@tanstack/react-router";
import tBTCThumbnail from "@/assets/tBTC-thumbnail.png.asset.json";
import bitcoinOnBaseThumbnail from "@/assets/bitcoin-on-base-thumbnail.png.asset.json";
import multiAppStakingThumbnail from "@/assets/multi-app-staking-thumbnail.png.asset.json";

export type KeepReadingEntry = {
  id: string;
  title: string;
  descriptor: string;
  /** Typed route path. Leave undefined when the slug is still to confirm. */
  to?:
    | "/case-studies/design/01-tbtc-bridge"
    | "/case-studies/design/02-bitcoin-on-base"
    | "/case-studies/design/03-slug-to-confirm";
  /** Image URL for the card cover. Leave undefined for [COVER TO CONFIRM]. */
  cover?: string;
};

/**
 * The one fixed sequence, shared by every design case study page.
 * Placeholders are intentional — fill in titles, slugs and covers as they land.
 */
export const CASE_STUDY_SEQUENCE: KeepReadingEntry[] = [
  {
    id: "01",
    title: "tBTC Bridge",
    descriptor: "Trust design in a Bitcoin bridge",
    to: "/case-studies/design/01-tbtc-bridge",
    cover: tBTCThumbnail.url,
  },
  {
    id: "02",
    title: "Bitcoin on Base",
    descriptor: "A validated bridge rebuilt as a native Base product",
    to: "/case-studies/design/02-bitcoin-on-base",
    cover: bitcoinOnBaseThumbnail.url,
  },
  {
    id: "03",
    title: "Multi-App Staking",
    descriptor: "Making shared-stake risk legible",
    to: "/case-studies/design/03-slug-to-confirm",
  },
  {
    id: "04",
    title: "[TITLE TO CONFIRM]",
    descriptor: "[DESCRIPTOR TO CONFIRM]",
  },
  {
    id: "05",
    title: "[TITLE TO CONFIRM]",
    descriptor: "[DESCRIPTOR TO CONFIRM]",
  },
  {
    id: "06",
    title: "[TITLE TO CONFIRM]",
    descriptor: "[DESCRIPTOR TO CONFIRM]",
  },
];

function otherExisting(currentId: string): KeepReadingEntry[] {
  return CASE_STUDY_SEQUENCE.filter((entry) => entry.id !== currentId && entry.to && entry.cover);
}

function CardInner({ entry }: { entry: KeepReadingEntry }) {
  return (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-border">
        {entry.cover ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
            style={{ backgroundImage: `url("${entry.cover}")` }}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-muted font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            [COVER TO CONFIRM]
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
        <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70 mix-blend-difference">
          {entry.id}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium tracking-tight md:text-xl">{entry.title}</h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {entry.descriptor}
        </p>
      </div>
    </>
  );
}

const cardClass =
  "group flex flex-col transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background";

export function KeepReading({ currentId }: { currentId: string }) {
  const entries = otherExisting(currentId);
  if (entries.length === 0) return null;

  return (
    <section className="mx-auto mt-24 max-w-[1120px] border-t border-border pt-12">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        Keep reading
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {entries.map((entry: KeepReadingEntry) =>
          entry.to ? (
            <Link key={entry.id} to={entry.to} className={cardClass}>
              <CardInner entry={entry} />
            </Link>
          ) : (
            <a
              key={entry.id}
              href="#"
              aria-disabled="true"
              onClick={(e) => e.preventDefault()}
              className={cardClass}
              title="[CASE STUDY LINK TO CONFIRM]"
            >
              <CardInner entry={entry} />
            </a>
          ),
        )}
      </div>
    </section>
  );
}
