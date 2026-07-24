import { Link } from "@tanstack/react-router";
import { CursorDots } from "@/components/CursorDots";
import { trackNav } from "@/lib/analytics";
import type { ReactNode } from "react";

export type GalleryItem = {
  /** CSS background value (gradient or url("...")) used until real imagery is wired in. */
  media: string;
  caption?: string;
  /** Aspect ratio, e.g. "16/10", "4/5", "1/1". Defaults to "16/10". */
  ratio?: string;
  /** If true the tile spans both columns on desktop. */
  wide?: boolean;
};

export type DesignProjectLayoutProps = {
  no: string;
  year: string;
  title: ReactNode;
  subtitle: ReactNode;
  synopsis: ReactNode;
  tags: string[];
  cover?: string; // CSS background value (legacy/placeholder)
  coverImage?: string; // Absolute or relative image URL
  coverAlt?: string;
  children?: ReactNode;
  gallery?: GalleryItem[];
};

export function DesignProjectLayout({
  no,
  year,
  title,
  subtitle,
  synopsis,
  tags,
  cover,
  children,
  gallery,
}: DesignProjectLayoutProps) {
  const currentYear = new Date().getFullYear();

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
            Available · {currentYear}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Hero */}
        <section className="pt-16 pb-10 md:pt-28 md:pb-16">
          <div className="mx-auto max-w-[1120px]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.22em]">
              <span className="inline-block h-px w-8 bg-foreground/60" />
              <span className="text-foreground">{no}</span>
              <span>·</span>
              <span>Design</span>
              <span>·</span>
              <span>{year}</span>
            </div>

            <h1 className="mt-8 text-3xl font-medium leading-[1.05] tracking-tight break-words sm:text-4xl md:text-6xl lg:text-7xl">
              {title}
            </h1>

            <div className="mt-5 max-w-2xl text-xl font-light leading-snug text-muted-foreground sm:text-2xl md:mt-7 md:text-3xl">
              {subtitle}
            </div>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed tracking-tight text-foreground sm:text-xl md:mt-8 md:text-2xl">
              {synopsis}
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground sm:tracking-[0.18em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Cover image */}
        <section className="pb-16 md:pb-20">
          <div
            className="relative aspect-[16/10] w-full overflow-hidden border border-border"
            style={{ backgroundImage: cover }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
              }}
            />
          </div>
        </section>

        {/* Written sections (Context / Problem / Solution / Outcome) */}
        <div className="mx-auto max-w-[760px] pb-16 md:pb-24">{children}</div>

        {/* Gallery */}
        {gallery && gallery.length > 0 && (
          <section className="pb-20 md:pb-28">
            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              § Gallery
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {gallery.map((g, i) => (
                <figure key={i} className={g.wide ? "md:col-span-2" : ""}>
                  <div
                    className="relative w-full overflow-hidden border border-border"
                    style={{
                      aspectRatio: g.ratio ?? "16/10",
                      backgroundImage: g.media,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
                      }}
                    />
                  </div>
                  {g.caption && (
                    <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {g.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto max-w-[1120px] border-t border-border py-16">
          <Link
            to="/case-studies/design"
            onClick={() => trackNav("case-studies-design", `design-${no}-footer`)}
            className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm tracking-tight transition-colors hover:text-accent hover:border-accent"
          >
            ← Back to design
          </Link>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-10 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:px-10">
          <div className="col-span-6 md:col-span-3">© {currentYear} Sasha (Tanase) Luca</div>
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

export function DesignSection({
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
      <h2 className="mt-4 text-xl font-medium tracking-tight break-words sm:text-2xl md:text-3xl">
        {title}
      </h2>
      <div className="mt-10 space-y-6 text-base leading-[1.7] text-foreground md:text-[17px]">
        {children}
      </div>
    </section>
  );
}
