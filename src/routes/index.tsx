import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/sasha-luca-portrait.png";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { CursorDots } from "@/components/CursorDots";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Articles & Talks", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const CASE_STUDIES = [
  { no: "01", title: "Case Study 1", href: "#case-study-1" },
  { no: "02", title: "Case Study 2", href: "#case-study-2" },
  { no: "03", title: "Case Study 3", href: "#case-study-3" },
  { no: "04", title: "Case Study 4", href: "#case-study-4" },
  { no: "05", title: "Case Study 5", href: "#case-study-5" },
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
    year: "\n2024 — 2025",
    title: "Mezo",
    role: "UX Research & Product Strategist",
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
  { date: "2026.05", title: "From Fear to Empowerment: How to Supercharge UX Research with AI — a framework", url: "https://medium.com/@sashagabrielatanase/from-fear-to-empowerment-how-to-supercharge-ux-research-with-ai-a-framework-d576e39d1774" },
  { date: "2025.06", title: "Designing for Trust in Web3: Lessons from the User Research Field", url: "https://www.youtube.com/watch?v=Wndk1Ic5t8U" },
  { date: "2023.07", title: "Elevating Developer Experience (DX) in web3 - a framework", url: "https://www.youtube.com/watch?v=ZPoqwAbMWTE" },
  { date: "2022.10", title: "The Future of Web3UX - a Paradigm Shift for a Better Collaboration between Design and Development", url: "https://www.youtube.com/watch?v=gOiHwmL0VUg" },
];

function Index() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorDots />
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-6 px-6 py-5 md:px-10">
          <a href="#top" className="col-span-6 font-mono text-xs uppercase tracking-[0.18em] md:col-span-3">
            Sasha Luca
          </a>
          <nav className="col-span-6 hidden justify-start gap-8 font-mono text-xs uppercase tracking-[0.18em] md:col-span-6 md:flex">
            <a href="#work" className="hover:text-accent transition-colors">Work</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 bg-transparent hover:text-accent transition-colors focus:outline-none cursor-pointer">
                Case Studies <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="font-mono text-xs uppercase tracking-[0.18em]">
                {CASE_STUDIES.map((cs) => (
                  <DropdownMenuItem key={cs.href} asChild>
                    <a href={cs.href} className="cursor-pointer">{cs.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#writing" className="hover:text-accent transition-colors">Articles & Talks</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
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
                  href="mailto:sasha@web3ux.org"
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
                  Nine years making sure teams build the right thing for the right people.
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

        {/* Case Studies */}
        <section id="case-studies" className="grid grid-cols-12 gap-6 border-b border-border py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §04 / Case Studies
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="mb-12 text-3xl font-medium tracking-tight md:text-4xl">
              Case studies
            </h2>
            <ul className="border-t border-border">
              {CASE_STUDIES.map((cs) => (
                <li key={cs.no} className="border-b border-border py-6">
                  <a href={cs.href} className="grid grid-cols-12 items-baseline gap-6 transition-colors hover:text-accent">
                    <div className="col-span-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {cs.no}
                    </div>
                    <div className="col-span-10 text-lg font-medium tracking-tight md:text-xl">
                      {cs.title}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="grid grid-cols-12 gap-6 border-b border-border py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §05 / Articles & Talks
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="mb-12 text-3xl font-medium tracking-tight md:text-4xl">
              Recent writing
            </h2>
            <ul className="border-t border-border">
              {WRITING.map((w) => (
                <li key={w.title}>
                  <a
                    href={w.url}
                    target={w.url.startsWith('http') ? '_blank' : undefined}
                    rel={w.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="grid grid-cols-12 items-baseline gap-6 border-b border-border py-6 transition-colors hover:text-accent"
                  >
                    <div className="col-span-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-2">
                      {w.date}
                    </div>
                    <div className="col-span-9 text-lg font-medium tracking-tight md:col-span-9 md:text-xl">
                      {w.title}
                    </div>
                    <div className="col-span-12 text-right font-mono text-xs md:col-span-1">↗</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="grid grid-cols-12 gap-6 py-20 md:py-32">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §06 / Contact
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="text-4xl font-medium leading-[1.05] tracking-tight md:text-7xl">
              Let's talk —{" "}
              <a
                href="mailto:sasha@web3ux.org"
                className="text-accent underline decoration-1 underline-offset-[10px] hover:no-underline"
              >
                sasha@web3ux.org
              </a>
            </h2>
            <div className="mt-16 grid grid-cols-12 gap-6 border-t border-border pt-8 font-mono text-xs uppercase tracking-[0.18em]">
              <a href="https://www.linkedin.com/in/sasha-tanase-luca/" target="_blank" rel="noopener noreferrer" className="col-span-6 hover:text-accent md:col-span-3">
                LinkedIn ↗
              </a>
              <a href="https://github.com/sashatanase" target="_blank" rel="noopener noreferrer" className="col-span-6 hover:text-accent md:col-span-3">
                GitHub ↗
              </a>
              <a href="https://x.com/sasha_tanase" target="_blank" rel="noopener noreferrer" className="col-span-6 hover:text-accent md:col-span-3">
                Twitter ↗
              </a>
              <a href={resumeAsset.url} target="_blank" rel="noopener noreferrer" className="col-span-6 hover:text-accent md:col-span-3">
                Résumé (PDF) ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:px-10">
          <div className="col-span-6 md:col-span-4">© {year} Sasha Luca</div>
          <div className="col-span-6 text-right md:col-span-4 md:text-center">Bucharest · 44.4268° N</div>
          <div className="col-span-12 text-left md:col-span-4 md:text-right">AI-assisted, human-obsessed, coffee-fueled</div>
        </div>
      </footer>
    </div>
  );
}
