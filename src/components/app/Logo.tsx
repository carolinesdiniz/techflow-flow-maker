import { useId } from "react";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  const gradientId = useId().replace(/:/g, "");

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 58 48"
        role="img"
        aria-label="AutoFlow"
        className="h-10 w-12 shrink-0"
      >
        <defs>
          <linearGradient id={gradientId} x1="7" y1="6" x2="51" y2="43" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--accent-cyan)" />
            <stop offset="38%" stopColor="var(--accent-violet)" />
            <stop offset="70%" stopColor="var(--brand)" />
            <stop offset="100%" stopColor="var(--accent-cyan)" />
          </linearGradient>
        </defs>
        <path
          d="M7 17.5 12.5 8l14-3.5 8 8.5-3.5 13-13.5 3z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="m33 4.5 14-3 7 7.5-3.5 14-13 3-7-8z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="m27.5 25.5 12.5 4 3.5 12-8 6-11-6.5-2-10z"
          fill={`url(#${gradientId})`}
        />
      </svg>

      {showWordmark && (
        <span className="text-xl font-bold text-foreground">
          AutoFlow
        </span>
      )}
    </span>
  );
}
