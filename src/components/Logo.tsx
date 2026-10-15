import Link from "next/link";

type LogoProps = {
  tone?: "dark" | "light";
};

export function Logo({ tone = "dark" }: LogoProps) {
  const light = tone === "light";
  const word = light ? "#f4f7fa" : "#0e2744";
  const ring = light ? "#8fd4de" : "#0f7f8c";
  const dot = light ? "#f4f7fa" : "#0e2744";

  return (
    <Link href="/" aria-label="AmeriList" className="inline-flex min-w-0 items-center gap-2 rounded-sm sm:gap-2.5">
      <svg viewBox="0 0 36 36" aria-hidden="true" className="h-8 w-8 shrink-0">
        <circle
          cx="18"
          cy="18"
          r="13"
          fill="none"
          stroke={ring}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="72 12"
          transform="rotate(-72 18 18)"
        />
        <circle cx="18" cy="18" r="3" fill={dot} />
      </svg>
      <span className="whitespace-nowrap text-[1.05rem] font-semibold tracking-tight sm:text-[1.15rem]" style={{ color: word }}>
        Ameri<span style={{ color: ring }}>List</span>
      </span>
    </Link>
  );
}
