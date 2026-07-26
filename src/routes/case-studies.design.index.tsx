import { createFileRoute, Link } from "@tanstack/react-router";
import { CaseStudiesShell } from "@/components/CaseStudiesShell";
import tBTCThumbnail from "@/assets/tBTC-thumbnail.png.asset.json";

export const Route = createFileRoute("/case-studies/design/")({
  head: () => ({
    meta: [
      { title: "Design Case Studies · Sasha (Tanase) Luca" },
      {
        name: "description",
        content: "Selected product and interaction design case studies by Sasha (Tanase) Luca.",
      },
      { property: "og:title", content: "Design Case Studies · Sasha (Tanase) Luca" },
      {
        property: "og:description",
        content: "Selected product and interaction design case studies by Sasha (Tanase) Luca.",
      },
    ],
  }),
  component: DesignPage,
});

type DesignProject = {
  no: string;
  title: string;
  client: string;
  year: string;
  tags: string;
  cover: string; // CSS background or image url()
  status?: "Coming soon" | "In progress";
  href?: "/case-studies/design/01-tbtc-bridge" | "/case-studies/design/02-bitcoin-on-base";
};

const PROJECTS: DesignProject[] = [
  {
    no: "01",
    title: "tBTC Bridge",
    client: "Threshold Network",
    year: "2023",
    tags: "Product · Cross-chain",
    cover: `url("${tBTCThumbnail.url}")`,
    href: "/case-studies/design/01-tbtc-bridge",
  },
  {
    no: "02",
    title: "Bitcoin on Base",
    client: "THRESHOLD NETWORK",
    year: "2024",
    tags: "Product · Visual design",
    cover: "linear-gradient(135deg, #e9e9e6 0%, #d5d4cf 100%)",
    href: "/case-studies/design/02-bitcoin-on-base",
  },
  {
    no: "03",
    title: "Threshold Financial Dashboard",
    client: "Threshold Network",
    year: "2023",
    tags: "Onboarding · Ops",
    cover: "repeating-linear-gradient(45deg, #ececea 0 12px, #dedcd6 12px 24px)",
    status: "Coming soon",
  },
  {
    no: "04",
    title: "Coverage Pools",
    client: "Keep Network",
    year: "2021",
    tags: "DeFi · Underwriting",
    cover: "linear-gradient(180deg, #e8564c 0%, #b83e36 100%)",
    status: "Coming soon",
  },
  {
    no: "05",
    title: "Threshold Network Website",
    client: "Threshold Network",
    year: "2024",
    tags: "AI · Branding",
    cover: "conic-gradient(from 210deg at 60% 40%, #f4f4f2, #d9d8d3, #b7b6b0, #f4f4f2)",
    status: "Coming soon",
  },
  {
    no: "06",
    title: "Design System",
    client: "Thesis*",
    year: "2024",
    tags: "System · Tokens",
    cover: "linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 60%, #0f0f0f 100%)",
    status: "Coming soon",
  },
];

function DesignPage() {
  return (
    <CaseStudiesShell>
      <section className="grid grid-cols-12 gap-6 py-10 md:py-12">
        <div className="col-span-12 md:col-span-2">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            § / Design
          </div>
        </div>
        <div className="col-span-12 md:col-span-10">
          <h1 className="text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
            Design.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-xl">
            The products where I shaped the interface, not just the research behind it. Web3 design
            for high-stakes, invisible-mechanism work: bridges, wallets, staking. Written to be
            read, not skimmed.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-x-6 gap-y-12 pb-20 sm:grid-cols-2 md:pb-28 lg:grid-cols-3">
        {PROJECTS.map((p) => {
          const tileInner = (
            <>
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-border">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                  style={{ backgroundImage: p.cover }}
                />

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
                  }}
                />

                <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70 mix-blend-difference">
                  {p.no}
                </div>

                {p.status && (
                  <div className="absolute right-4 top-4 border border-foreground/30 bg-background/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-foreground backdrop-blur">
                    {p.status}
                  </div>
                )}

                <div className="absolute inset-0 bg-purple-600 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-background/95 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
                  <div className="flex items-center justify-between">
                    <span>{p.tags}</span>
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="text-lg font-medium tracking-tight md:text-xl">
                    {p.title}
                  </h2>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {p.client}
                  </p>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.year}
                </span>
              </div>
            </>
          );

          if (p.href) {
            return (
              <Link key={p.no} to={p.href} className="group flex flex-col">
                {tileInner}
              </Link>
            );
          }

          return (
            <a
              key={p.no}
              href="#"
              aria-disabled="true"
              onClick={(e) => e.preventDefault()}
              className="group flex flex-col"
            >
              {tileInner}
            </a>
          );
        })}
      </section>
    </CaseStudiesShell>
  );
}
