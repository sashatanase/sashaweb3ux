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
  | "/case-studies/05";

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
      "This 6-day Diary Study evaluated how DevOps engineers configure tBTC nodes. While usability scored an above-average 73.125 (SUS), the research uncovered critical blind spots including misleading success cues, cryptic logs, and a high risk of users downgrading their hardware, which would trigger financial slashing. These insights provided the development team with an immediate blueprint to overhaul the product with a \"Default vs. Expert\" staking UI, better error diagnostics, and mandatory monitoring documentation.",
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
      "Long-term Bitcoin holders frequently regret selling native BTC for real-world expenses, yet navigating Web3 borrowing platforms triggers heavy cognitive strain and liquidation anxiety. To solve this, I conducted a usability study with 8 tech-savvy investors to analyze live interaction with collateral ratios and stablecoin mechanics. By replacing qualitative friction with concrete product upgrades, including dual USD pricing tags and primary-screen liquidation alerts, we re-engineered the loan loop to build verified user trust and confidence.",
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
    kicker: "Case Study 3",
    year: "2023",
    title: <>tBTC Bridge: Redesigning the Cross-Chain Flow</>,
    description:
      "Bridging native Bitcoin to Ethereum triggers severe user anxiety due to a industry-wide history of smart contract exploits and protocol hacks. To de-risk this environment, I led an iterative usability study with 6 veteran cross-chain users to trace real-time interaction loops across minting and unminting workflows. By uncovering deep friction points such as intimidating recovery warnings and automated protocol labels mistaken for centralized human intermediaries. I provided a direct structural roadmap to transition technical jargon into an intuitive, privacy-preserving, and trust-building bridging experience.",
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
    kicker: "Case Study 4",
    year: "2023",
    title: <>Case study title four.</>,
    description:
      "A short synopsis of the project — the problem, the research approach, and the outcome. Replace this placeholder with the real summary when the case study is ready.",
    href: "/case-studies/04",
    meta: [
      { label: "Client", value: "Client name" },
      { label: "Sector", value: "Sector" },
      { label: "Year", value: "2023" },
      { label: "Method", value: "Method" },
      { label: "Sample", value: "Sample" },
      { label: "Role", value: "Role" },
    ],
  },
  {
    no: "05",
    kicker: "Case Study 5",
    year: "2022",
    title: <>Case study title five.</>,
    description:
      "A short synopsis of the project — the problem, the research approach, and the outcome. Replace this placeholder with the real summary when the case study is ready.",
    href: "/case-studies/05",
    meta: [
      { label: "Client", value: "Client name" },
      { label: "Sector", value: "Sector" },
      { label: "Year", value: "2022" },
      { label: "Method", value: "Method" },
      { label: "Sample", value: "Sample" },
      { label: "Role", value: "Role" },
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
            <h1 className="text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">
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
                <article className="group border border-border bg-background p-8 transition-colors hover:border-foreground/40 md:p-12">
                  <div className="grid grid-cols-12 gap-8">
                    {/* Left: title + description */}
                    <div className="col-span-12 md:col-span-8">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        <span className="text-foreground">{cs.no}</span>
                        <span>·</span>
                        <span>{cs.kicker}</span>
                        <span>·</span>
                        <span>{cs.year}</span>
                      </div>

                      <h2 className="mt-6 text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl">
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
                        <dl className="grid grid-cols-3 gap-x-4 gap-y-10">
                          {cs.meta.map((m) => (
                            <div key={m.label}>
                              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                {m.label}
                              </dt>
                              <dd className="mt-2 font-mono text-xs uppercase tracking-[0.18em]">
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
