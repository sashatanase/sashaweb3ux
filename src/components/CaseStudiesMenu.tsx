import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, X } from "lucide-react";
import { trackNav } from "@/lib/analytics";

const RESEARCH = [
  {
    no: "01",
    title: "Diary of a Node Operator: Redesigning the tBTC Setup Experience",
    href: "/case-studies/01",
  },
  {
    no: "02",
    title: "Mezo Borrow & mUSD: Optimizing the Bitcoin Liquidity Portal",
    href: "/case-studies/02",
  },
  { no: "03", title: "tBTC Bridge: Redesigning the Cross-Chain Flow", href: "/case-studies/03" },
  {
    no: "04",
    title: "tBTC Bridge: Bridged/Wrapped BTC Holder User Study",
    href: "/case-studies/04",
  },
  {
    no: "05",
    title: "Keep Network: Node Operators Explorative User Study",
    href: "/case-studies/05",
  },
  {
    no: "06",
    title: "Keep Network Coverage Pool: Redesigning the Underwriting Experience",
    href: "/case-studies/06",
  },
] as const;

const DESIGN: { no: string; title: string; href: string }[] = [];

export function CaseStudiesMenu({ source }: { source: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-1 hover:text-accent transition-colors"
      >
        Case Studies
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-background text-foreground"
          role="dialog"
          aria-modal="true"
          aria-label="Case studies menu"
        >
          <div className="mx-auto flex h-full max-w-[1400px] flex-col px-6 py-6 md:px-10 md:py-8">
            <div className="flex items-center justify-between">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Case Studies
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] hover:text-accent transition-colors"
              >
                Close <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <div className="mt-10 grid flex-1 grid-cols-1 gap-12 overflow-y-auto md:mt-16 md:grid-cols-2 md:gap-16">
              {/* Research */}
              <section>
                <header className="flex items-baseline justify-between border-b border-border pb-4">
                  <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Research</h2>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {String(RESEARCH.length).padStart(2, "0")}
                  </span>
                </header>
                <ul className="mt-6 space-y-1">
                  {RESEARCH.map((cs) => (
                    <li key={cs.no}>
                      <Link
                        to={cs.href}
                        onClick={() => {
                          trackNav(cs.href, `case-studies-menu-${source}`);
                          setOpen(false);
                        }}
                        className="group grid grid-cols-[auto_1fr] items-baseline gap-4 border-b border-border/60 py-4 hover:text-accent transition-colors"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-accent">
                          {cs.no}
                        </span>
                        <span className="text-base font-medium tracking-tight md:text-lg">
                          {cs.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    to="/case-studies"
                    onClick={() => {
                      trackNav("/case-studies", `case-studies-menu-all-${source}`);
                      setOpen(false);
                    }}
                    className="inline-flex items-center gap-2 border-b border-foreground pb-1 font-mono text-[11px] uppercase tracking-[0.18em] hover:text-accent hover:border-accent transition-colors"
                  >
                    View all research →
                  </Link>
                </div>
              </section>

              {/* Design */}
              <section>
                <header className="flex items-baseline justify-between border-b border-border pb-4">
                  <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Design</h2>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {DESIGN.length === 0 ? "Soon" : String(DESIGN.length).padStart(2, "0")}
                  </span>
                </header>
                {DESIGN.length === 0 ? (
                  <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                    Design case studies are on the way. Check back soon for product design work
                    alongside the research.
                  </p>
                ) : (
                  <ul className="mt-6 space-y-1">
                    {DESIGN.map((cs) => (
                      <li key={cs.no}>
                        <Link
                          to={cs.href}
                          onClick={() => {
                            trackNav(cs.href, `case-studies-menu-${source}`);
                            setOpen(false);
                          }}
                          className="group grid grid-cols-[auto_1fr] items-baseline gap-4 border-b border-border/60 py-4 hover:text-accent transition-colors"
                        >
                          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-accent">
                            {cs.no}
                          </span>
                          <span className="text-base font-medium tracking-tight md:text-lg">
                            {cs.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
