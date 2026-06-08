import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CursorDots } from "@/components/CursorDots";

type CaseStudy = {
  no: string;
  kicker: string;
  year: string;
  title: string;
  description: string;
  meta: { label: string; value: string }[];
};

const CASE_STUDIES: Record<string, CaseStudy> = {
  "01": {
    no: "01",
    kicker: "Case Study 1",
    year: "2023",
    title: "tBTC and Random Beacon Client Code Diary Study.",
    description:
      "This 6-day Diary Study evaluated how DevOps engineers configure tBTC nodes. While usability scored an above-average 73.125 (SUS), the research uncovered critical blind spots including misleading success cues, cryptic logs, and a high risk of users downgrading their hardware, which would trigger financial slashing. These insights provided the development team with an immediate blueprint to overhaul the product with a \"Default vs. Expert\" staking UI, better error diagnostics, and mandatory monitoring documentation.",
    meta: [
      { label: "Client", value: "Threshold Network" },
      { label: "Sector", value: "Network Infrastructure" },
      { label: "Year", value: "2023" },
      { label: "Method", value: "Diary Study" },
      { label: "Sample", value: "5" },
      { label: "Role", value: "Sole Researcher" },
    ],
  },
  "02": {
    no: "02",
    kicker: "Case Study 2",
    year: "2024",
    title: "Case study title two.",
    description:
      "A short synopsis of the project — the problem, the research approach, and the outcome. Replace this placeholder with the real summary when the case study is ready.",
    meta: [
      { label: "Client", value: "Client name" },
      { label: "Sector", value: "Sector" },
      { label: "Year", value: "2024" },
      { label: "Method", value: "Method" },
      { label: "Sample", value: "Sample" },
      { label: "Role", value: "Role" },
    ],
  },
  "03": {
    no: "03",
    kicker: "Case Study 3",
    year: "2023",
    title: "Case study title three.",
    description:
      "A short synopsis of the project — the problem, the research approach, and the outcome. Replace this placeholder with the real summary when the case study is ready.",
    meta: [
      { label: "Client", value: "Client name" },
      { label: "Sector", value: "Sector" },
      { label: "Year", value: "2023" },
      { label: "Method", value: "Method" },
      { label: "Sample", value: "Sample" },
      { label: "Role", value: "Role" },
    ],
  },
  "04": {
    no: "04",
    kicker: "Case Study 4",
    year: "2023",
    title: "Case study title four.",
    description:
      "A short synopsis of the project — the problem, the research approach, and the outcome. Replace this placeholder with the real summary when the case study is ready.",
    meta: [
      { label: "Client", value: "Client name" },
      { label: "Sector", value: "Sector" },
      { label: "Year", value: "2023" },
      { label: "Method", value: "Method" },
      { label: "Sample", value: "Sample" },
      { label: "Role", value: "Role" },
    ],
  },
  "05": {
    no: "05",
    kicker: "Case Study 5",
    year: "2022",
    title: "Case study title five.",
    description:
      "A short synopsis of the project — the problem, the research approach, and the outcome. Replace this placeholder with the real summary when the case study is ready.",
    meta: [
      { label: "Client", value: "Client name" },
      { label: "Sector", value: "Sector" },
      { label: "Year", value: "2022" },
      { label: "Method", value: "Method" },
      { label: "Sample", value: "Sample" },
      { label: "Role", value: "Role" },
    ],
  },
};

export const Route = createFileRoute("/case-studies/$id")({
  loader: ({ params }) => {
    const cs = CASE_STUDIES[params.id];
    if (!cs) throw notFound();
    return { cs };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.cs.title} — Sasha Luca` },
          { name: "description", content: loaderData.cs.description },
          { property: "og:title", content: `${loaderData.cs.title} — Sasha Luca` },
          { property: "og:description", content: loaderData.cs.description },
        ]
      : [{ title: "Case Study — Sasha Luca" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">404</p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight">Case study not found.</h1>
        <Link to="/case-studies" className="mt-8 inline-block border-b border-foreground pb-1 text-sm">
          ← Back to case studies
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="text-center">
        <h1 className="text-2xl font-medium tracking-tight">Something went wrong.</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => reset()} className="mt-6 border-b border-foreground pb-1 text-sm">
          Retry
        </button>
      </div>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { cs } = Route.useLoaderData();
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
              § / {cs.kicker}
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-foreground">{cs.no}</span>
              <span>·</span>
              <span>{cs.year}</span>
            </div>
            <h1 className="mt-6 text-4xl font-medium leading-[1.02] tracking-tight md:text-6xl">
              {cs.title}
            </h1>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-8 py-16 md:py-24">
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Synopsis
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              {cs.description}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="border-t border-border pt-6">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-10">
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
        </section>

        <section className="border-t border-border py-16">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm tracking-tight transition-colors hover:text-accent hover:border-accent"
          >
            ← Back to all case studies
          </Link>
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
