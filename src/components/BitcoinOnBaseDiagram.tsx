import { useRef, useState } from "react";
import { toPng } from "html-to-image";

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M6.5 1v7M6.5 8l-2.5-2.5M6.5 8l2.5-2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1.5 10.5h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="animate-spin">
      <circle
        cx="6.5"
        cy="6.5"
        r="5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="20 12"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SANS = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;

const L_CARD = "#FAF9F6";
const L_BORDER = "#DDD9D0";
const L_BADGE = "rgba(120,95,45,0.09)";
const L_BADGE_T = "#6B5010";
const L_ITEM = "#F2EFE8";
const L_ITEM_B = "#D4CFBF";
const L_TITLE = "#2C2C2A";
const L_DESC = "#8A8070";
const L_DOT = "#BCA860";

const R_CARD = "#EFF6FF";
const R_BORDER = "#A8CAE8";
const R_BADGE = "rgba(24,95,165,0.09)";
const R_BADGE_T = "#185FA5";
const R_ITEM = "#E2EEF8";
const R_ITEM_B = "#A4C4E2";
const R_TITLE = "#042C53";
const R_DESC = "#3870A8";
const R_DOT = "#5090CC";

export function BitcoinOnBaseDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  async function handleDownload() {
    if (!diagramRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(diagramRef.current, {
        backgroundColor: "#ffffff",
        pixelRatio: 3,
      });
      const link = document.createElement("a");
      link.download = "bitcoin-on-base-comparison.png";
      link.href = dataUrl;
      link.click();
    } finally {
      setExporting(false);
    }
  }

  const VW = 740;
  const VH = 348;
  const COL_Y = 44;
  const COL_H = 288;
  const COL_W = 308;
  const L_X = 28;
  const R_X = L_X + COL_W + 48;
  const MX = 16;
  const IW = COL_W - MX * 2;
  const IH = 56;
  const IGAP = 8;
  const IY0 = COL_Y + 82;
  const iy = (i: number) => IY0 + i * (IH + IGAP);

  const lItems = [
    { title: "Bridging flows", desc: "Deposit and withdraw paths" },
    { title: "Step structure and IA", desc: "Order, timing, receipts" },
    { title: "Pain-point fixes", desc: "Known issues already solved" },
  ];
  const rItems = [
    { title: "UI system", desc: "Components, type, layout" },
    { title: "Visual language", desc: "Aligned to Base direction" },
    { title: "Standalone shell", desc: "No dashboard, own product" },
  ];

  return (
    <figure className="py-4">
      <div className="w-full space-y-4 rounded-sm border border-border/40 bg-white p-6">
        <div className="flex justify-end">
          <button
            onClick={handleDownload}
            disabled={exporting}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-medium transition-colors hover:opacity-80"
            style={{
              color: exporting ? "#A78BFA" : "#7B3FE4",
              background: "rgba(123,63,228,0.07)",
              border: "1px solid rgba(123,63,228,0.18)",
              cursor: exporting ? "default" : "pointer",
            }}
          >
            {exporting ? (
              <>
                <Spinner />
                Exporting…
              </>
            ) : (
              <>
                <DownloadIcon />
                Download PNG
              </>
            )}
          </button>
        </div>

        <div ref={diagramRef} className="bg-white">
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            width="100%"
            style={{ fontFamily: SANS, display: "block" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="shadow" x="-8%" y="-8%" width="116%" height="130%">
                <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="rgba(0,0,0,0.07)" />
              </filter>
              <filter id="ishadow" x="-4%" y="-8%" width="108%" height="125%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="rgba(0,0,0,0.05)" />
              </filter>
            </defs>

            <text
              x={VW / 2}
              y="22"
              textAnchor="middle"
              fontSize="13"
              fontWeight="600"
              fill="#1E293B"
              fontFamily={SANS}
            >
              What carried over vs. what was rebuilt — Bitcoin on Base
            </text>

            {/* Left column */}
            <rect
              x={L_X}
              y={COL_Y}
              width={COL_W}
              height={COL_H}
              rx="13"
              fill={L_CARD}
              stroke={L_BORDER}
              strokeWidth="1"
              filter="url(#shadow)"
            />
            <rect x={L_X + MX} y={COL_Y + 16} width="88" height="17" rx="4" fill={L_BADGE} />
            <text
              x={L_X + MX + 7}
              y={COL_Y + 28}
              fontSize="9"
              fontWeight="700"
              fill={L_BADGE_T}
              letterSpacing="0.13em"
              fontFamily={SANS}
            >
              KEPT INTACT
            </text>
            <text
              x={L_X + MX}
              y={COL_Y + 52}
              fontSize="10.5"
              fill={L_DESC}
              fontFamily={SANS}
            >
              Already validated on tBTC
            </text>
            <line
              x1={L_X + MX}
              y1={COL_Y + 64}
              x2={L_X + COL_W - MX}
              y2={COL_Y + 64}
              stroke={L_BORDER}
              strokeWidth="0.75"
            />

            {lItems.map((item, i) => (
              <g key={i}>
                <rect
                  x={L_X + MX}
                  y={iy(i)}
                  width={IW}
                  height={IH}
                  rx="9"
                  fill={L_ITEM}
                  stroke={L_ITEM_B}
                  strokeWidth="0.8"
                  filter="url(#ishadow)"
                />
                <circle cx={L_X + MX + 14} cy={iy(i) + 22} r="3.5" fill={L_DOT} opacity="0.8" />
                <text
                  x={L_X + MX + 26}
                  y={iy(i) + 26}
                  dominantBaseline="central"
                  fontSize="12.5"
                  fontWeight="500"
                  fill={L_TITLE}
                  fontFamily={SANS}
                >
                  {item.title}
                </text>
                <text
                  x={L_X + MX + 14}
                  y={iy(i) + 44}
                  dominantBaseline="central"
                  fontSize="10.5"
                  fill={L_DESC}
                  fontFamily={SANS}
                >
                  {item.desc}
                </text>
              </g>
            ))}

            {/* Right column */}
            <rect
              x={R_X}
              y={COL_Y}
              width={COL_W}
              height={COL_H}
              rx="13"
              fill={R_CARD}
              stroke={R_BORDER}
              strokeWidth="1"
              filter="url(#shadow)"
            />
            <rect x={R_X + MX} y={COL_Y + 16} width="134" height="17" rx="4" fill={R_BADGE} />
            <text
              x={R_X + MX + 7}
              y={COL_Y + 28}
              fontSize="9"
              fontWeight="700"
              fill={R_BADGE_T}
              letterSpacing="0.13em"
              fontFamily={SANS}
            >
              REBUILT FROM SCRATCH
            </text>
            <text
              x={R_X + MX}
              y={COL_Y + 52}
              fontSize="10.5"
              fill={R_DESC}
              fontFamily={SANS}
            >
              My interface work
            </text>
            <line
              x1={R_X + MX}
              y1={COL_Y + 64}
              x2={R_X + COL_W - MX}
              y2={COL_Y + 64}
              stroke={R_BORDER}
              strokeWidth="0.75"
            />

            {rItems.map((item, i) => (
              <g key={i}>
                <rect
                  x={R_X + MX}
                  y={iy(i)}
                  width={IW}
                  height={IH}
                  rx="9"
                  fill={R_ITEM}
                  stroke={R_ITEM_B}
                  strokeWidth="0.8"
                  filter="url(#ishadow)"
                />
                <circle cx={R_X + MX + 14} cy={iy(i) + 22} r="3.5" fill={R_DOT} opacity="0.8" />
                <text
                  x={R_X + MX + 26}
                  y={iy(i) + 26}
                  dominantBaseline="central"
                  fontSize="12.5"
                  fontWeight="500"
                  fill={R_TITLE}
                  fontFamily={SANS}
                >
                  {item.title}
                </text>
                <text
                  x={R_X + MX + 14}
                  y={iy(i) + 44}
                  dominantBaseline="central"
                  fontSize="10.5"
                  fill={R_DESC}
                  fontFamily={SANS}
                >
                  {item.desc}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </figure>
  );
}
