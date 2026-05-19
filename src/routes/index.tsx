import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const WORK = [
  {
    no: "01",
    year: "2025",
    title: "Northwind Analytics Platform",
    role: "Lead Product Engineer",
    description:
      "Rebuilt the reporting pipeline serving 40k daily users. Reduced query latency by 78% and shipped a new dashboard system used across four product teams.",
    tags: ["TypeScript", "React", "PostgreSQL"],
  },
  {
    no: "02",
    year: "2024",
    title: "Atlas Design System",
    role: "Founding Designer",
    description:
      "Designed and maintained a cross-platform component library adopted by 12 internal products. Established tokens, accessibility standards, and contribution model.",
    tags: ["Figma", "Storybook", "Design Ops"],
  },
  {
    no: "03",
    year: "2023",
    title: "Meridian Mobile App",
    role: "Frontend Engineer",
    description:
      "Launched a React Native app from zero to 100k installs in six months. Owned animation, offline sync, and onboarding flow.",
    tags: ["React Native", "Reanimated"],
  },
  {
    no: "04",
    year: "2022",
    title: "Helix Internal Tools",
    role: "Software Engineer",
    description:
      "Built operational tooling for the logistics team — saved an estimated 1,200 hours per quarter of manual coordination work.",
    tags: ["Node.js", "Next.js"],
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
            Your Name
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
              Designer &amp;<br />
              <span className="text-muted-foreground">software engineer</span>
              <br />
              based in <span className="text-accent">Zürich</span>.
            </h1>
            <div className="mt-12 grid grid-cols-12 gap-6">
              <p className="col-span-12 max-w-2xl text-base leading-relaxed md:col-span-8 md:text-lg">
                I build measured, useful products at the intersection of design
                and engineering. Currently open to senior engineering and
                design-engineering roles.
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
                  <div className="col-span-10 md:col-span-5">
                    <div className="text-xl font-medium tracking-tight md:text-2xl">
                      {p.title}
                    </div>
                    <div className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {p.role} · {p.year}
                    </div>
                  </div>
                  <p className="col-span-12 text-sm leading-relaxed text-muted-foreground md:col-span-4">
                    {p.description}
                  </p>
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
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Eight years building software that respects the people using it.
            </h2>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                I've worked across early-stage startups and established product
                teams — most recently leading frontend at Northwind, where I
                shipped the analytics platform now used by enterprise customers
                across Europe.
              </p>
              <p>
                My background sits between design and engineering. I'm fluent in
                React, TypeScript, and the modern frontend stack, and equally
                comfortable in Figma defining systems and motion.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <dl className="space-y-6 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.18em]">
              {[
                ["Based in", "Zürich, CH"],
                ["Years", "2017 — Present"],
                ["Tools", "React · TS · Figma"],
                ["Languages", "EN / DE / FR"],
                ["Status", "Open to roles"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 gap-4">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="grid grid-cols-12 gap-6 border-b border-border py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §04 / Writing
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
          <div className="col-span-6 md:col-span-4">© {year} Your Name</div>
          <div className="col-span-6 text-right md:col-span-4 md:text-center">Zürich · 47.3769° N</div>
          <div className="col-span-12 text-left md:col-span-4 md:text-right">Set in Inter &amp; JetBrains Mono</div>
        </div>
      </footer>
    </div>
  );
}
