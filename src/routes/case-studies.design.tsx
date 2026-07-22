import { createFileRoute, Link } from "@tanstack/react-router";
import { CaseStudiesShell } from "@/components/CaseStudiesShell";

export const Route = createFileRoute("/case-studies/design")({
  head: () => ({
    meta: [
      { title: "Design Case Studies · Sasha (Tanase) Luca" },
      {
        name: "description",
        content:
          "Selected product and interaction design case studies by Sasha (Tanase) Luca.",
      },
      { property: "og:title", content: "Design Case Studies · Sasha (Tanase) Luca" },
      {
        property: "og:description",
        content:
          "Selected product and interaction design case studies by Sasha (Tanase) Luca.",
      },
    ],
  }),
  component: DesignPage,
});

function DesignPage() {
  return (
    <CaseStudiesShell>
      <section className="grid grid-cols-12 gap-6 border-b border-border py-20 md:py-28">
        <div className="col-span-12 md:col-span-2">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Link to="/case-studies" className="hover:text-accent transition-colors">
              § / Case Studies
            </Link>
            <span className="text-foreground"> / Design</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-10">
          <h1 className="text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
            Design.
          </h1>
          <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-xl">
            Product and interaction design case studies — coming soon.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="flex flex-col items-start gap-8">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            In progress
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-foreground md:text-xl">
            Design case studies are being written up. In the meantime, browse the research
            collection to see the thinking that shapes the work.
          </p>
          <Link
            to="/case-studies/research"
            className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm tracking-tight transition-colors hover:text-accent hover:border-accent"
          >
            Explore research
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </CaseStudiesShell>
  );
}
