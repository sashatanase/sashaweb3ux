import { Link } from "@tanstack/react-router";
import { CursorDots } from "@/components/CursorDots";
import type { ReactNode } from "react";

export type CaseStudyMeta = { label: string; value: string };

export type CaseStudyLayoutProps = {
  no: string;
  year: string;
  title: ReactNode;
  synopsis: ReactNode;
  meta: CaseStudyMeta[];
  kicker?: string;
  children?: ReactNode;
};

export function CaseStudyLayout({
  no,
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

      <main className="mx-auto max-w-[1280px] px-6 md:px-16">
        {/* Hero */}
        <section className="pt-16 pb-12 md:pt-32 md:pb-24">
          <div className="mx-auto max-w-[960px]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.22em]">
              <span className="inline-block h-px w-8 bg-foreground/60" />
              <span className="text-foreground">{no}</span>
              <span>·</span>
              <span>Case Study</span>
              <span>·</span>
              <span>{year}</span>
            </div>

            <h1 className="mt-8 text-3xl font-medium leading-[1.05] tracking-tight break-words sm:text-4xl md:text-6xl lg:text-7xl">
              {title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed tracking-tight text-foreground sm:text-xl md:mt-12 md:text-2xl">
              {synopsis}
            </p>
          </div>

          {/* Meta row */}
          <div className="mt-16 border-t border-foreground/30 pt-6 md:mt-24">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
              {meta.map((m) => (
                <div key={m.label} className="min-w-0">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:tracking-[0.22em]">
                    {m.label}
                  </dt>
                  <dd className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground break-words sm:tracking-[0.18em]">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="mx-auto max-w-[760px] pb-24">
          {children}
        </div>

        <section className="mx-auto max-w-[760px] border-t border-border py-16">
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
  number,
  label,
  title,
  children,
}: {
  number?: string;
  label?: string;
  title: string;
  children: ReactNode;
}) {
  const tag = number ?? label ?? "";
  return (
    <section className="pt-20 first:pt-0">
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        § {tag}
      </div>
      <h2 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="mt-10 space-y-6 text-base leading-[1.7] text-foreground md:text-[17px]">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-10 border-l border-foreground pl-6 text-[15px] leading-[1.7] text-foreground md:text-base">
      {children}
    </blockquote>
  );
}

export function CaseStudySubhead({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-10 mb-4 text-base font-semibold text-foreground">{children}</h3>
  );
}
