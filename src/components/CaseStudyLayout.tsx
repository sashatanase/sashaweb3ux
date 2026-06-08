import { Link } from "@tanstack/react-router";
import { CursorDots } from "@/components/CursorDots";
import type { ReactNode } from "react";

export type CaseStudyMeta = { label: string; value: string };

export type CaseStudyLayoutProps = {
  no: string;
  kicker: string;
  year: string;
  title: string;
  synopsis: string;
  meta: CaseStudyMeta[];
  children?: ReactNode;
};

export function CaseStudyLayout({
  no,
  kicker,
  year,
  title,
  synopsis,
  meta,
  children,
}: CaseStudyLayoutProps) {
  const currentYear = new Date().getFullYear();

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
            Available · {currentYear}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-6 md:px-10">
        <section className="grid grid-cols-12 gap-6 border-b border-border py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              § / {kicker}
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-foreground">{no}</span>
              <span>·</span>
              <span>{year}</span>
            </div>
            <h1 className="mt-6 text-4xl font-medium leading-[1.02] tracking-tight md:text-6xl">
              {title}
            </h1>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-8 py-16 md:py-24">
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Synopsis
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
              {synopsis}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="border-t border-border pt-6">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-10">
                {meta.map((m) => (
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

        {children}

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
          <div className="col-span-6 md:col-span-3">© {currentYear} Sasha Luca</div>
          <div className="col-span-6 text-right md:col-span-9">
            <Link to="/" className="hover:text-accent transition-colors">← Back home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function CaseStudySection({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 gap-8 border-t border-border py-16 md:py-20">
      <div className="col-span-12 md:col-span-4">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </div>
        <h2 className="mt-4 text-2xl font-medium leading-tight tracking-tight md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="col-span-12 md:col-span-8">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}
