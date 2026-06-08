import { createFileRoute, Link } from "@tanstack/react-router";
import { CursorDots } from "@/components/CursorDots";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Sasha Luca" },
      { name: "description", content: "Selected UX research and product case studies by Sasha Luca." },
      { property: "og:title", content: "Case Studies — Sasha Luca" },
      { property: "og:description", content: "Selected UX research and product case studies by Sasha Luca." },
    ],
  }),
  component: CaseStudiesPage,
});

type CaseStudyHref =
  | "/case-studies/01"
  | "/case-studies/02"
  | "/case-studies/03"
  | "/case-studies/04"
  | "/case-studies/05"
  | "/case-studies/06";

type CaseStudy = {
  no: string;
  kicker: string;
  year: string;
  title: React.ReactNode;
  description: string;
  href: CaseStudyHref;
  meta: { label: string; value: string }[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    no: "01",
    kicker: "Case Study 1",
    year: "2022",
    title: <>tBTC and Random Beacon Client Code Diary Study.</>,
    description:
      "Diary study on a Web3 node client setup, testing complex cryptographic infrastructure against the operational realities of node operators.",
    href: "/case-studies/01",
    meta: [
      { label: "Client", value: "Threshold Network" },
      { label: "Sector", value: "Network Infra" },
      { label: "Year", value: "2022" },
      { label: "Method", value: "Diary Study" },
      { label: "Sample", value: "5" },
      { label: "Role", value: "Sole Researcher" },
    ],
  },
  {
    no: "02",
    kicker: "Mezo Borrow and mUSD: Optimizing the Bitcoin Liquidity Portal",
    year: "2025",
      title: <>Mezo Borrow and mUSD: Optimizing the Bitcoin Liquidity Portal</>,
    description:
      "Usability research on a native Bitcoin borrowing protocol, testing real-world liquidity management against deep-seated counterparty anxiety.",
    href: "/case-studies/02",
    meta: [
      { label: "Client", value: "Mezo" },
      { label: "Sector", value: "Bitcoin DeFi" },
      { label: "Year", value: "2025" },
      { label: "Method", value: "Interviews & Usability Testing" },
      { label: "Sample", value: "8 participants" },
      { label: "Role", value: "Researcher Lead" },
    ],
  },
  {
    no: "03",
    kicker: "tBTC Bridge: Redesigning the Cross-Chain Flow",
    year: "2023",
    title: <>tBTC Bridge: Redesigning the Cross-Chain Flow</>,
    description:
      "Usability research on a non-custodial Bitcoin bridge, evaluating complex cryptographic safeguards against traditional user mental models and \"bridge anxiety\".",
    href: "/case-studies/03",
    meta: [
      { label: "Client", value: "Threshold Network" },
      { label: "Sector", value: "Cross-Chain Bridge" },
      { label: "Year", value: "2023" },
      { label: "Method", value: "Qualitative Usability Testing & Deep-Dive Interviews" },
      { label: "Sample", value: "6 participants" },
      { label: "Role", value: "Sole Researcher" },
    ],
  },
  {
    no: "04",
    kicker: "tBTC Bridge: Bridged/Wrapped BTC Holder User Study",
    year: "2022",
    title: <>tBTC Bridge: Bridged/Wrapped BTC Holder User Study</>,
    description:
      "Explorative user research on Bitcoin-to-Ethereum asset holders, mapping structural behavioral traits, systemic bridge anxieties, and the trade-offs of decentralized utility.",
    href: "/case-studies/04",
    meta: [
      { label: "Client", value: "Threshold Network" },
      { label: "Sector", value: "Cross-Chain Bridge" },
      { label: "Year", value: "2022" },
      { label: "Method", value: "Exploratory In-Depth Interviews" },
      { label: "Sample", value: "12 participants" },
      { label: "Role", value: "Sole Researcher" },
    ],
  },
  {
    no: "05",
    kicker: "Keep Network: Node Operators Explorative User Study",
    year: "2021",
    title: <>Keep Network: Node Operators Explorative User Study</>,
    description:
      "Exploratory user research on decentralized node operators, evaluating the operational balance between heavy technical workloads and financial liquidation risks.",
    href: "/case-studies/05",
    meta: [
      { label: "Client", value: "Keep Network" },
      { label: "Sector", value: "Node Infra & Staking" },
      { label: "Year", value: "2021" },
      { label: "Method", value: "Exploratory Interviews & Persona Mapping" },
      { label: "Sample", value: "8 participants" },
      { label: "Role", value: "Sole Researcher" },
    ],
  },
  {
    no: "06",
    kicker: "Keep Network Coverage Pool: Redesigning the Underwriting Experience",
    year: "2021",
    title: <>Keep Network Coverage Pool: Redesigning the Underwriting Experience</>,
    description:
      "Usability research on a decentralized network insurance layer, tracking complex yield mechanics, lockup timelines, and asset-wrapping paradigms against elite DeFi operators.",
    href: "/case-studies/06",
    meta: [
      { label: "Client", value: "Keep Network" },
      { label: "Sector", value: "DeFi Infra, Underwriting" },
      { label: "Year", value: "2021" },
      { label: "Method", value: "Qualitative Usability Testing, 5 Second Test, SEQ" },
      { label: "Sample", value: "8 participants" },
      { label: "Role", value: "Sole Researcher" },
    ],
  },
];

function CaseStudiesPage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorDots />
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-6 px-6 py-5 md:px-10">
          <Link to="/" className="col-span-6 font-mono text-xs uppercase tracking-[0.18em] md:col-span-3">
            Sasha Luca
          </Link>
          <nav className="col-span-6 hidden justify-start gap-8 font-mono text-xs uppercase tracking-[0.18em] md:col-span-6 md:flex">
            <Link to="/" hash="work" className="hover:text-accent transition-colors">Work</Link>
            <Link to="/" hash="about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
            <Link to="/" hash="writing" className="hover:text-accent transition-colors">Articles & Talks</Link>
            <Link to="/" hash="contact" className="hover:text-accent transition-colors">Contact</Link>
          </nav>
          <div className="col-span-6 text-right font-mono text-xs uppercase tracking-[0.18em] md:col-span-3">
            Available · {year}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-6 md:px-10">
        <section className="grid grid-cols-12 gap-6 border-b border-border py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              § / Case Studies
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
              Case studies.
            </h1>
            <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-xl">
              Every product has a story, and every user has a breaking point. Here is a closer look at selected projects: the messy realities I uncovered, the critical pivots I made, and the impact of those decisions.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <ul className="flex flex-col gap-8">
            {CASE_STUDIES.map((cs) => (
              <li key={cs.no}>
                <article className="group border border-border bg-background p-6 transition-colors hover:border-foreground/40 sm:p-8 md:p-12">
                  <div className="grid grid-cols-12 gap-8">
                    {/* Left: title + description */}
                    <div className="col-span-12 md:col-span-8">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]">
                        <span className="text-foreground">{cs.no}</span>
                        <span>·</span>
                        <span className="break-words">{cs.kicker}</span>
                        <span>·</span>
                        <span>{cs.year}</span>
                      </div>

                      <h2 className="mt-6 text-2xl font-medium leading-[1.1] tracking-tight break-words sm:text-3xl md:text-4xl lg:text-5xl">
                        <Link
                          to={cs.href}
                          className="transition-colors hover:text-accent"
                        >
                          {cs.title}
                        </Link>
                      </h2>

                      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                        {cs.description}
                      </p>

                      <div className="mt-10">
                        <Link
                          to={cs.href}
                          className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm tracking-tight transition-colors hover:text-accent hover:border-accent"
                        >
                          Read the <span className="text-accent">full case study</span>
                          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                      </div>
                    </div>

                    {/* Right: meta grid */}
                    <div className="col-span-12 md:col-span-4">
                      <div className="border-t border-border pt-6 md:border-t-0 md:pt-0">
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-y-10">
                          {cs.meta.map((m) => (
                            <div key={m.label} className="min-w-0">
                              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                                {m.label}
                              </dt>
                              <dd className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] break-words">
                                {m.value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-10 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:px-10">
          <div className="col-span-6 md:col-span-3">© {year} Sasha Luca</div>
          <div className="col-span-6 text-right md:col-span-9">
            <Link to="/" className="hover:text-accent transition-colors">← Back home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
