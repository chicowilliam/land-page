/** Planta de um café: decoração fora do fluxo, sem criar scroll. */
export function BackgroundPlan() {
  return (
    <div className="site-plan" aria-hidden="true">
      <svg
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
        preserveAspectRatio="xMaxYMin slice"
        className="absolute inset-0 h-full w-full max-h-full max-w-full"
      >
        <g stroke="currentColor" strokeWidth="1.2" className="text-border">
          <rect x="80" y="70" width="1040" height="660" rx="8" />
          <path d="M80 200h180v-80h80" />
          <rect x="80" y="480" width="220" height="250" />
          <path d="M80 560h220" />
          <rect x="860" y="70" width="260" height="90" />
          <path d="M860 115h260" />
        </g>

        <g stroke="currentColor" strokeWidth="1.15" className="text-border">
          <circle cx="420" cy="280" r="36" />
          <circle cx="560" cy="280" r="36" />
          <circle cx="700" cy="280" r="36" />
          <circle cx="420" cy="430" r="36" />
          <circle cx="560" cy="430" r="36" />
          <circle cx="700" cy="430" r="36" />
          <circle cx="420" cy="580" r="36" />
          <circle cx="560" cy="580" r="36" />
        </g>

        <g stroke="currentColor" strokeWidth="1" className="text-border">
          <rect x="392" y="232" width="16" height="12" rx="2" />
          <rect x="432" y="232" width="16" height="12" rx="2" />
          <rect x="532" y="232" width="16" height="12" rx="2" />
          <rect x="572" y="232" width="16" height="12" rx="2" />
          <rect x="672" y="232" width="16" height="12" rx="2" />
          <rect x="712" y="232" width="16" height="12" rx="2" />
        </g>

        <path
          className="plan-path"
          d="M160 730 C160 640, 280 620, 360 540 S500 400, 640 360 S860 300, 980 160"
          stroke="var(--color-primary)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        <circle cx="160" cy="730" r="4" fill="var(--color-primary)" />
        <circle cx="980" cy="160" r="5" fill="var(--color-primary)" />
      </svg>
    </div>
  );
}
