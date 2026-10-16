import { FIGURES, type FigureName } from '@/data/ksef/figures';

const src = (name: string, layout: 'w' | 'n') => `/ksef/figures/${name}-${layout}.webp`;

// A guide diagram: the wide 16:9 layout on desktop, the tall layout on phones. White, like a document page.
// Width and height come from the generated manifest, so the image reserves its space before it loads.
export function Figure({ name, priority = false }: { name: FigureName; priority?: boolean }) {
  const f = FIGURES[name];
  return (
    <figure className="fk-figure">
      <picture>
        <source media="(max-width: 640px)" srcSet={src(name, 'n')} width={f.n.width} height={f.n.height} />
        <img
          src={src(name, 'w')}
          width={f.w.width}
          height={f.w.height}
          alt={f.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </picture>
      <figcaption>{f.caption}</figcaption>
    </figure>
  );
}

export const figureUrl = (name: FigureName) => src(name, 'w');
