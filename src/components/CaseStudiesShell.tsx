import { Link } from "@tanstack/react-router";
import { CursorDots } from "@/components/CursorDots";
import type { ReactNode } from "react";

export function CaseStudiesShell({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorDots />
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-6 px-6 py-5 md:px-10">
          <Link
            to="/"
            className="col-span-6 font-mono text-xs uppercase tracking-[0.18em] md:col-span-3"
          >
            Sasha (Tanase) Luca
          </Link>
          <nav className="col-span-6 hidden justify-start gap-8 font-mono text-xs uppercase tracking-[0.18em] md:col-span-6 md:flex">
            <Link to="/" hash="work" className="hover:text-accent transition-colors">
              Work
            </Link>
            <Link to="/" hash="about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/case-studies" className="hover:text-accent transition-colors">
              Case Studies
            </Link>
            <Link to="/" hash="writing" className="hover:text-accent transition-colors">
              Articles & Talks
            </Link>
            <Link to="/" hash="contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
          <div className="col-span-6 text-right font-mono text-xs uppercase tracking-[0.18em] md:col-span-3">
            Available · {year}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-6 md:px-10">{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-10 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:px-10">
          <div className="col-span-6 md:col-span-3">© {year} Sasha (Tanase) Luca</div>
          <div className="col-span-6 text-right md:col-span-9">
            <Link to="/" className="hover:text-accent transition-colors">
              ← Back home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
