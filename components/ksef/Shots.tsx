import { SHOT_SIZE, type Shot, shotSrc, shotSrcSet } from '@/data/ksef/screenshots';

interface ShotProps {
  shot: Shot;
  /** Dark-mode version shown when the visitor uses a dark system theme. */
  dark?: Shot;
  sizes: string;
  priority?: boolean;
}

function ShotImg({ shot, dark, sizes, priority, style }: ShotProps & { style?: React.CSSProperties }) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element -- pre-sized WebP with srcset, no optimizer needed
    <img
      src={shotSrc(shot)}
      srcSet={shotSrcSet(shot)}
      sizes={sizes}
      width={SHOT_SIZE.width}
      height={SHOT_SIZE.height}
      alt={shot.alt}
      title={shot.title}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      style={style}
    />
  );
  if (!dark) return img;
  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet={shotSrcSet(dark)} sizes={sizes} />
      {img}
    </picture>
  );
}

/** A full app screen inside a thin device frame. */
export function PhoneFrame({ className, ...props }: ShotProps & { className?: string }) {
  return (
    <div className={className ? `fk-phone ${className}` : 'fk-phone'}>
      <ShotImg {...props} />
    </div>
  );
}

/**
 * Part of a screen, cut from the same file: `from`/`to` are fractions of the screenshot height
 * (0 = top, 1 = bottom). Shows a detail at readable size without extra image files.
 */
export function ShotCrop({ from, to, className, ...props }: ShotProps & { from: number; to: number; className?: string }) {
  const aspect = `${SHOT_SIZE.width} / ${Math.round(SHOT_SIZE.height * (to - from))}`;
  return (
    <div className={className ? `fk-crop ${className}` : 'fk-crop'} style={{ aspectRatio: aspect }}>
      <ShotImg {...props} style={{ transform: `translateY(-${(from * 100).toFixed(2)}%)` }} />
    </div>
  );
}
