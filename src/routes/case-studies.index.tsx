import { createFileRoute, Link } from "@tanstack/react-router";
import { CaseStudiesShell } from "@/components/CaseStudiesShell";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies · Sasha (Tanase) Luca" },
      {
        name: "description",
        content:
          "Selected UX research and design case studies by Sasha (Tanase) Luca — browse the Research and Design collections.",
      },
      { property: "og:title", content: "Case Studies · Sasha (Tanase) Luca" },
      {
        property: "og:description",
        content:
          "Selected UX research and design case studies by Sasha (Tanase) Luca — browse the Research and Design collections.",
      },
    ],
  }),
  component: CaseStudiesHub,
});

const SECTIONS = [
  {
    no: "01",
    title: "Research",
    href: "/case-studies/research" as const,
    description:
      "Diary studies, usability testing and generative interviews across Web3 infrastructure, bridges, and DeFi.",
    count: "6 studies",
  },
  {
    no: "02",
    title: "Design",
    href: "/case-studies/design" as const,
    description:
      "Product and interaction design work - flows, systems, and interfaces shaped by the research.",
    count: "3 STUDIES",
  },
];

function CaseStudiesHub() {
  return (
    <CaseStudiesShell>
      <section className="grid grid-cols-12 gap-6 py-10 md:py-12">
        <div className="col-span-12 md:col-span-2">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            § / Case Studies
          </div>
        </div>
        <div className="col-span-12 md:col-span-10">
          <h1 className="text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
            Case studies.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-xl">
            Every product has a story, and every user has a breaking point. Explore the work in two
            collections - the research that uncovered the reality, and the design that shaped the
            response.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 pb-16 md:grid-cols-2 md:pb-24">
        {SECTIONS.map((s) => (
          <Link
            key={s.no}
            to={s.href}
            className="group flex min-h-[360px] flex-col border border-border p-8 transition-colors hover:bg-foreground/[0.02] md:min-h-[520px] md:p-12"
          >
            <div className="mb-10 flex items-start justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:mb-16">
              <span className="text-foreground">{s.no}</span>
              <span>{s.count}</span>
            </div>

            <div className="flex flex-col">
              <h2 className="text-5xl font-medium leading-[1] tracking-tight transition-colors group-hover:text-red-600 sm:text-6xl md:text-7xl lg:text-8xl">
                {s.title}.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                {s.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </CaseStudiesShell>
  );
}
