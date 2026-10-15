import Link from "next/link";
import type { ReactNode } from "react";

const linkPattern = /\[([^\]]+)\]\(((?:https?:\/\/|\/)[^)\s]+)\)/g;

export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(linkPattern)) {
    const index = match.index ?? 0;
    if (index > lastIndex) nodes.push(text.slice(lastIndex, index));

    const label = match[1];
    const href = match[2];
    const external = href.startsWith("http");

    nodes.push(
      external ? (
        <a key={`${href}-${index}`} href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue underline decoration-blue/30 underline-offset-2 hover:text-blue-dark">
          {label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <Link key={`${href}-${index}`} href={href} className="font-semibold text-blue underline decoration-blue/30 underline-offset-2 hover:text-blue-dark">
          {label}
        </Link>
      ),
    );

    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));

  return <>{nodes}</>;
}
