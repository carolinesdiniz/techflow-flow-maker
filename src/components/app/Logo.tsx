type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        role="img"
        aria-label="AutoFlow"
        className="size-9 shrink-0"
      >
        <defs>
          <linearGradient id="autoflow-mark" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="40" height="40" rx="12" fill="url(#autoflow-mark)" />
        <path
          d="M11 27.5 L19 12.5 L27 27.5"
          fill="none"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6 22.5 H23.4"
          fill="none"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="30.5" cy="12" r="3.2" fill="white" fillOpacity="0.9" />
      </svg>

      {showWordmark && (
        <span className="text-lg font-extrabold tracking-tight text-foreground">
          Auto<span className="text-brand">Flow</span>
        </span>
      )}
    </span>
  );
}
