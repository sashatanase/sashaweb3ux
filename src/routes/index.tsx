import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/sasha-luca-portrait.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Research & Talks", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

type WorkItem = {
  no: string;
  year: string;
  title: string;
  role: string;
  description?: string;
  bullets?: string[];
  tags: string[];
};

const WORK: WorkItem[] = [
  {
    no: "01",
    year: "\n2022 — 2025",
    title: "Web3UX",
    role: "Co-Founder",
    bullets: [
      "Co-founded Web3UX, a user testing platform built specifically for web3 native users.",
      "Created to solve one of the core problems in decentralized product development: access to the right research participants. The platform connected web3 projects with real users for usability testing, discovery research, and behavioral studies.",
    ],
    tags: ["Founder", "Web3", "Research Ops"],
  },
  {
    no: "02",
    year: "\n2021 — 2024",
    title: "Thesis*",
    role: "UX Research & Product Design Lead",
    bullets: [
      "Led research focused on PMF across Mezo Network, Acre, and the BitcoinFi Accelerator, including discovery, segmentation, and value-prop validation.",
      "Guided product teams with actionable insights that shaped roadmap priorities.",
      "Built and maintained the company-wide research repository, serving as the connective tissue between contracting researchers and internal teams.",
      "Ran JTBD analyses, PMF surveys and interviews, and iterative discovery to identify high-fit user segments.",
    ],
    tags: ["PMF", "JTBD", "Research Ops"],
  },
  {
    no: "03",
    year: "\n2022 — 2025",
    title: "Mezo",
    role: "Co-Founder",
    bullets: [
      "Led research with a focus on PMF: discovery, segmentation, and value-prop validation.",
      "Guided product teams with insights that shaped roadmap priorities.",
      "Coordinated cross-functional teams and built the insight repository used across the company.",
      "Ran JTBD, PMF surveys and interviews, and iterative discovery to identify high-fit segments.",
    ],
    tags: ["Product Strategy", "PMF", "BitcoinFi"],
  },
  {
    no: "04",
    year: "\n2021 — 2024",
    title: "Threshold Network",
    role: "UX Research & Product Design Lead",
    bullets: [
      "Built staking and provider experiences end to end, aligning direction with PMF insights.",
      "Validated flows through testing and user research, refining features by segment.",
      "Improved developer experience by reducing integration friction on client code.",
      "Drove alignment with stakeholders and prioritized the roadmap based on user value.",
      "Led product work for the tBTC bridge from concept to iterative improvement.",
    ],
    tags: ["UX Research", "Product Design", "tBTC"],
  },
];

const WRITING = [
  { date: "2025.03", title: "On building durable interfaces" },
  { date: "2024.11", title: "Notes on type as infrastructure" },
  { date: "2024.06", title: "Why I still write CSS by hand" },
];

function Index() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-6 px-6 py-5 md:px-10">
          <a href="#top" className="col-span-6 font-mono text-xs uppercase tracking-[0.18em] md:col-span-3">
            Sasha Luca
          </a>
          <nav className="col-span-6 hidden justify-start gap-8 font-mono text-xs uppercase tracking-[0.18em] md:col-span-6 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-accent transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="col-span-6 text-right font-mono text-xs uppercase tracking-[0.18em] md:col-span-3">
            Available · {year}
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-6 border-b border-border py-20 md:py-32">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §01 / Index
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl lg:text-[8rem]">
              UX researcher<br />
              <span className="text-muted-foreground">who makes products</span>
              <br />
              <span className="text-accent">make sense</span>.
            </h1>
            <div className="mt-12 grid grid-cols-12 gap-6">
              <p className="col-span-12 max-w-2xl text-base font-medium leading-relaxed tracking-tight md:col-span-8 md:text-2xl">
                I help teams figure out who they're building for and why.
                Currently open to UXR and PM roles, full-time or contract.
              </p>
              <div className="col-span-12 flex items-end justify-start gap-4 md:col-span-4 md:justify-end">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background transition-colors hover:bg-background hover:text-foreground"
                >
                  Get in touch ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="grid grid-cols-12 gap-6 border-b border-border py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §02 / Work
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="mb-12 text-3xl font-medium tracking-tight md:text-4xl">
              Selected work
            </h2>
            <ul className="border-t border-border">
              {WORK.map((p) => (
                <li
                  key={p.no}
                  className="group grid grid-cols-12 gap-6 border-b border-border py-8 transition-colors hover:bg-secondary/40"
                >
                  <div className="col-span-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-1">
                    {p.no}
                  </div>
                  <div className="col-span-10 md:col-span-3">
                    <div className="text-xl font-medium tracking-tight md:text-2xl">
                      {p.title}
                    </div>
                    <div className="mt-1 whitespace-pre-line font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {p.role} · {p.year}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">

                    {p.description && (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                    )}
                    {p.bullets && (
                      <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span aria-hidden className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="col-span-12 flex flex-wrap items-start gap-2 md:col-span-2 md:justify-end">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section id="about" className="grid grid-cols-12 gap-6 border-b border-border py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §03 / About
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-8">
                <h2 className="max-w-[560px] text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Seven years making sure teams build the right thing for the right people.
                </h2>
                <div className="mt-10 max-w-[560px] space-y-6 text-base leading-relaxed text-muted-foreground">
                  <p>
                    I've worked across fast-moving web3 startups and decentralized
                    protocols, most recently at Mezo Network, where I built the
                    insight repository that became the single source of truth for
                    15+ stakeholders.
                  </p>
                  <p>
                    My background sits between research and product. I'm fluent in
                    discovery, JTBD, and usability testing, and equally comfortable
                    shaping roadmaps and aligning the people who build from them.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <img
                  src={portrait}
                  alt="Portrait of Sasha Luca"
                  className="w-full grayscale"
                  loading="lazy"
                />
              </div>
            </div>
            <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.18em]">
              {[
                ["Specialization", "Web3 / Crypto / Bitcoin · Ethereum"],
                ["Methods", "Discovery · JTBD · PMF Validation · Usability Testing · Qualitative Research · Stakeholder Alignment"],
                ["Roles", "UX Researcher · Product Manager"],
                ["Years", "2017 — Present"],
                ["Status", "Open to roles"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[160px_1fr] gap-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="whitespace-nowrap">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="grid grid-cols-12 gap-6 border-b border-border py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §04 / Research & Talks
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="mb-12 text-3xl font-medium tracking-tight md:text-4xl">
              Recent writing
            </h2>
            <ul className="border-t border-border">
              {WRITING.map((w) => (
                <li
                  key={w.title}
                  className="grid grid-cols-12 items-baseline gap-6 border-b border-border py-6 transition-colors hover:text-accent"
                >
                  <div className="col-span-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-2">
                    {w.date}
                  </div>
                  <div className="col-span-9 text-lg font-medium tracking-tight md:col-span-9 md:text-xl">
                    {w.title}
                  </div>
                  <div className="col-span-12 text-right font-mono text-xs md:col-span-1">↗</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="grid grid-cols-12 gap-6 py-20 md:py-32">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §05 / Contact
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="text-4xl font-medium leading-[1.05] tracking-tight md:text-7xl">
              Let's work<br />together —{" "}
              <a
                href="mailto:hello@yourname.com"
                className="text-accent underline decoration-1 underline-offset-[10px] hover:no-underline"
              >
                hello@yourname.com
              </a>
            </h2>
            <div className="mt-16 grid grid-cols-12 gap-6 border-t border-border pt-8 font-mono text-xs uppercase tracking-[0.18em]">
              <a href="https://linkedin.com" className="col-span-6 hover:text-accent md:col-span-3">
                LinkedIn ↗
              </a>
              <a href="https://github.com" className="col-span-6 hover:text-accent md:col-span-3">
                GitHub ↗
              </a>
              <a href="https://twitter.com" className="col-span-6 hover:text-accent md:col-span-3">
                Twitter ↗
              </a>
              <a href="/resume.pdf" className="col-span-6 hover:text-accent md:col-span-3">
                Résumé (PDF) ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:px-10">
          <div className="col-span-6 md:col-span-4">© {year} Sasha Luca</div>
          <div className="col-span-6 text-right md:col-span-4 md:text-center">Zürich · 47.3769° N</div>
          <div className="col-span-12 text-left md:col-span-4 md:text-right">Set in Inter &amp; JetBrains Mono</div>
        </div>
      </footer>
    </div>
  );
}
