import { useState, useEffect } from "react";

const CIRC = 2 * Math.PI * 65;
const SZ = 160;
const R = 65;

const STEPS = [
  { a: "Bitcoin", b: "checkpoint" },
  { a: "Minting", b: "initialized" },
  { a: "Guardian", b: "Check" },
  { a: "Minting", b: "Completed" },
];

interface TxLink {
  prefix: string;
  link: string;
}

interface MState {
  stepsDone: number;
  activeStep: number;
  isCheck: boolean;
  c1: string;
  c2: string;
  arc: number;
  title: string;
  desc: string;
  confirmText?: string;
  txLinks: TxLink[];
  footerText?: string;
  footerLink?: string;
  blogTitle: string;
}

const STATES: MState[] = [
  {
    stepsDone: 0,
    activeStep: 0,
    isCheck: false,
    c1: "#BD30FF",
    c2: "#7D00FF",
    arc: 0.5,
    title: "Waiting for the Bitcoin Network Confirmations...",
    desc: "The Bitcoin Deposit transaction needs to get 6 confirmations on the Bitcoin Network before the minting is initialised.",
    confirmText: "3/6 Bitcoin Network Confirmations",
    txLinks: [
      { prefix: "Reveal ", link: "transaction." },
      { prefix: "BTC confirmations ", link: "transactions." },
    ],
    footerText: "See transaction on",
    footerLink: "blockstream.",
    blogTitle: "6/6 Bitcoin Confirmations Requirement",
  },
  {
    stepsDone: 1,
    activeStep: -1,
    isCheck: true,
    c1: "#BD30FF",
    c2: "#7D00FF",
    arc: 1,
    title: "Waiting for the Bitcoin Network Confirmations...",
    desc: "The Bitcoin Deposit transaction needs to get 6 confirmations on the Bitcoin Network before the minting is initialised.",
    confirmText: "6/6 Bitcoin Network Confirmations",
    txLinks: [
      { prefix: "Reveal ", link: "transaction." },
      { prefix: "BTC confirmations ", link: "transactions." },
    ],
    footerText: "See transaction on",
    footerLink: "blockstream.",
    blogTitle: "6/6 Bitcoin Confirmations Requirement",
  },
  {
    stepsDone: 1,
    activeStep: 1,
    isCheck: false,
    c1: "#FAAD14",
    c2: "#F55B5B",
    arc: 0.35,
    title: "Minting Initialized",
    desc: "The minter is reviewing the minting initialisation. If everything is fine the minter will move the initialisation to the guardian.",
    txLinks: [
      { prefix: "Reveal ", link: "transaction." },
      { prefix: "BTC confirmations ", link: "transactions." },
      { prefix: "Minting initiation ", link: "transaction." },
    ],
    footerText: "See transaction on",
    footerLink: "etherscan.",
    blogTitle: "Minters and Guardians in Optimistic Minting",
  },
  {
    stepsDone: 2,
    activeStep: -1,
    isCheck: true,
    c1: "#FAAD14",
    c2: "#F55B5B",
    arc: 1,
    title: "Minting Initialized",
    desc: "The minter is reviewing the minting initialisation. If everything is fine the minter will move the initialisation to the guardian.",
    txLinks: [
      { prefix: "Reveal ", link: "transaction." },
      { prefix: "BTC confirmations ", link: "transactions." },
      { prefix: "Minting initiation ", link: "transaction." },
    ],
    footerText: "See transaction on",
    footerLink: "etherscan.",
    blogTitle: "Minters and Guardians in Optimistic Minting",
  },
  {
    stepsDone: 2,
    activeStep: 2,
    isCheck: false,
    c1: "#8FFF00",
    c2: "#48BB78",
    arc: 0.2,
    title: "Guardian Check",
    desc: "A guardian is reviewing the minting request forwarded by a minter. If everything is compliant the contract will move on to minting.",
    txLinks: [],
    blogTitle: "Minters and Guardians in Optimistic Minting",
  },
  {
    stepsDone: 3,
    activeStep: -1,
    isCheck: true,
    c1: "#8FFF00",
    c2: "#48BB78",
    arc: 1,
    title: "Guardian Check",
    desc: "A guardian is reviewing the minting request forwarded by a minter. If everything is compliant the contract will move on to minting.",
    txLinks: [],
    blogTitle: "Minters and Guardians in Optimistic Minting",
  },
  {
    stepsDone: 3,
    activeStep: 3,
    isCheck: false,
    c1: "#38BDF8",
    c2: "#BD30FF",
    arc: 0.25,
    title: "Minting in progress",
    desc: "The contract is minting your tBTC tokens.",
    txLinks: [
      { prefix: "Reveal ", link: "transaction." },
      { prefix: "BTC confirmations ", link: "transactions." },
      { prefix: "Minting initiation ", link: "transaction." },
      { prefix: "Minting completion ", link: "transaction." },
    ],
    footerText: "See transaction on",
    footerLink: "etherscan.",
    blogTitle: "Minters and Guardians in Optimistic Minting",
  },
  {
    stepsDone: 4,
    activeStep: -1,
    isCheck: true,
    c1: "#38BDF8",
    c2: "#BD30FF",
    arc: 1,
    title: "Minting in progress",
    desc: "The contract is minting your tBTC tokens.",
    txLinks: [
      { prefix: "Reveal ", link: "transaction." },
      { prefix: "BTC confirmations ", link: "transactions." },
      { prefix: "Minting initiation ", link: "transaction." },
      { prefix: "Minting completion ", link: "transaction." },
    ],
    footerText: "See transaction on",
    footerLink: "etherscan.",
    blogTitle: "Minters and Guardians in Optimistic Minting",
  },
];

function StepBar({ stepsDone, activeStep }: { stepsDone: number; activeStep: number }) {
  return (
    <div className="flex items-start justify-between gap-2">
      {STEPS.map((step, i) => {
        const done = i < stepsDone;
        const active = i === activeStep;
        const isLast = i === STEPS.length - 1;
        return (
          <div key={i} className="flex flex-1 flex-col items-center">
            <div className="flex w-full items-center">
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-medium ${
                  done
                    ? "border-emerald-500 bg-emerald-500 text-black"
                    : active
                      ? "border-white bg-white text-black"
                      : "border-white/25 bg-transparent text-white/50"
                }`}
              >
                {done ? (
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                    <path
                      d="M2 6.5L5 9.5L10 3.5"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              {!isLast && (
                <div className={`mx-2 h-px flex-1 ${done ? "bg-emerald-500" : "bg-white/15"}`} />
              )}
            </div>
            <div className="mt-2 self-start text-left">
              <div className="text-[11px] leading-tight text-white/80">{step.a}</div>
              <div className="text-[11px] leading-tight text-white/50">{step.b}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CenterCircle({ s, idx }: { s: MState; idx: number }) {
  const arcLen = CIRC * s.arc;
  const gid = `mg${idx}`;
  return (
    <div className="relative flex items-center justify-center">
      <svg width={SZ} height={SZ} viewBox={`0 0 ${SZ} ${SZ}`}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={s.c1} />
            <stop offset="100%" stopColor={s.c2} />
          </linearGradient>
        </defs>
        <circle
          cx={SZ / 2}
          cy={SZ / 2}
          r={R}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="6"
        />
        <circle
          cx={SZ / 2}
          cy={SZ / 2}
          r={R}
          fill="none"
          stroke={`url(#${gid})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${arcLen} ${CIRC}`}
          transform={`rotate(-90 ${SZ / 2} ${SZ / 2})`}
          style={{ transition: "stroke-dasharray 0.6s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {s.isCheck ? (
          <svg viewBox="0 0 32 32" className="h-8 w-8 text-emerald-400" fill="none">
            <path
              d="M6 17l6 6L26 9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <>
            <div className="text-2xl font-semibold text-white">{Math.round(s.arc * 100)}%</div>
            <div className="mt-0.5 text-[10px] uppercase tracking-widest text-white/50">
              in progress
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex justify-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1 rounded-full transition-all ${
            i === current ? "w-6 bg-white" : "w-1.5 bg-white/25"
          }`}
        />
      ))}
    </div>
  );
}

export default function MintingDemo() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % STATES.length), 2800);
    return () => clearInterval(t);
  }, []);
  const s = STATES[idx];

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0f] shadow-2xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#141419] px-3 py-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1 rounded-md bg-black/40 px-3 py-1 text-[11px] text-white/50">
            app.threshold.network/tbtc/mint
          </div>
        </div>

        <div className="p-5 sm:p-6">
          {/* Tabs */}
          <div className="mb-5 flex gap-6 border-b border-white/10">
            <div className="border-b-2 border-white pb-2 text-sm font-medium text-white">Mint</div>
            <div className="pb-2 text-sm text-white/40">Unmint</div>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
            {/* Left panel */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                tBTC – Minting process
              </div>

              <div className="flex items-baseline justify-between">
                <div className="text-sm text-white/60">Minting - In progress...</div>
                <div className="text-lg font-semibold text-white">1.2 tBTC</div>
              </div>

              <StepBar stepsDone={s.stepsDone} activeStep={s.activeStep} />

              <div key={idx} className="fade-up flex items-start gap-5 pt-2">
                <CenterCircle s={s} idx={idx} />
                <div className="flex-1 space-y-2">
                  <div className="text-base font-medium text-white">{s.title}</div>
                  {s.confirmText && (
                    <div className="inline-block rounded border border-white/15 px-2 py-1 text-[10px] uppercase tracking-widest text-white/70">
                      {s.confirmText}
                    </div>
                  )}
                  <p className="text-xs leading-relaxed text-white/60">{s.desc}</p>
                  {s.footerText && s.footerLink ? (
                    <div className="text-[11px] text-white/50">
                      {s.footerText}{" "}
                      <span className="text-white/80 underline underline-offset-2">
                        {s.footerLink}
                      </span>
                    </div>
                  ) : s.txLinks.length === 0 ? (
                    <div className="text-[11px] text-white/40">No transaction</div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="space-y-4">
              <div className="rounded-md border border-white/10 bg-white/[0.02] p-4">
                <div className="mb-1 text-[11px] uppercase tracking-widest text-white/50">
                  Transaction History
                </div>
                <div className="mb-3 text-[11px] text-white/40">~3 hours minting time</div>
                <div key={`tx-${idx}`} className="fade-up space-y-1.5">
                  {s.txLinks.length === 0 ? (
                    <div className="text-[11px] text-white/40">No transaction</div>
                  ) : (
                    s.txLinks.map((tx, i) => (
                      <div key={i} className="text-[11px] text-white/70">
                        {tx.prefix}
                        <span className="text-white underline underline-offset-2">{tx.link}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div
                key={`blog-${idx}`}
                className="fade-up rounded-md border border-white/10 bg-white/[0.02] p-4"
              >
                <div className="mb-1 text-[11px] uppercase tracking-widest text-white/40">
                  From the blog
                </div>
                <div className="text-sm font-medium leading-snug text-white">{s.blogTitle}</div>
                <p className="mt-2 text-[11px] leading-relaxed text-white/50">
                  Amazing body copy of the new update, feature, code or design improvement.
                </p>
                <div className="mt-3 text-[11px] text-white/70 underline underline-offset-2">
                  Read more
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <ProgressDots total={STATES.length} current={idx} />
          </div>
        </div>
      </div>
    </div>
  );
}
