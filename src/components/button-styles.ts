const base =
  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-semibold tracking-tight transition-colors duration-150";

export const buttonClass = {
  primary: `${base} bg-blue text-white hover:bg-blue-dark`,
  secondary: `${base} border border-line bg-white text-navy hover:border-navy/30 hover:bg-mist`,
  inverse: `${base} bg-white text-navy hover:bg-mist`,
  ghostLight: `${base} border border-white/30 text-white hover:bg-white/10`,
} as const;

export const textLinkClass =
  "inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark";
