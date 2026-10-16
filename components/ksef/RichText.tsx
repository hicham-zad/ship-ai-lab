import Link from 'next/link';
import { Fragment } from 'react';

// Renders a string with [text](href) links. Internal paths use next/link, external URLs open in a new tab.
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const [, label, href] = m;
        return href.startsWith('/') ? (
          <Link key={i} href={href}>{label}</Link>
        ) : (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
        );
      })}
    </>
  );
}
