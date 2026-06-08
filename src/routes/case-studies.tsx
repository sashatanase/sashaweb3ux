import { createFileRoute, Link } from "@tanstack/react-router";
import { CursorDots } from "@/components/CursorDots";

export const Route = createFileRoute("/case-studies")({
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

const CASE_STUDIES = [
  { no: "01", title: "Case Study 1", href: "/case-studies/1" },
  { no: "02", title: "Case Study 2", href: "/case-studies/2" },
  { no: "03", title: "Case Study 3", href: "/case-studies/3" },
  { no: "04", title: "Case Study 4", href: "/case-studies/4" },
  { no: "05", title: "Case Study 5", href: "/case-studies/5" },
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
        <section className="grid grid-cols-12 gap-6 border-b border-border py-20 md:py-32">
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
              A closer look at selected projects — the research, the decisions, and what we learned.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-6 py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Index
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <ul className="border-t border-border">
              {CASE_STUDIES.map((cs) => (
                <li key={cs.no} className="border-b border-border py-6">
                  <a href={cs.href} className="grid grid-cols-12 items-baseline gap-6 transition-colors hover:text-accent">
                    <span className="col-span-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-1">
                      {cs.no}
                    </span>
                    <span className="col-span-10 text-xl font-medium tracking-tight md:col-span-11 md:text-2xl">
                      {cs.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
