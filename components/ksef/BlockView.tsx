import { Figure } from '@/components/ksef/Figure';
import { Icon } from '@/components/ksef/Icon';
import { RichText } from '@/components/ksef/RichText';
import type { Block } from '@/data/ksef/guides';

export function BlockView({ b }: { b: Block }) {
  if ('p' in b) return <p><RichText text={b.p} /></p>;
  if ('h3' in b) return <h3>{b.h3}</h3>;
  if ('ul' in b) return <ul>{b.ul.map((li) => <li key={li}><RichText text={li} /></li>)}</ul>;
  if ('ol' in b) return <ol>{b.ol.map((li) => <li key={li}><RichText text={li} /></li>)}</ol>;
  if ('figure' in b) return <Figure name={b.figure} />;
  if ('note' in b) return <aside className="fk-note"><Icon name="info" size={20} /><p><RichText text={b.note} /></p></aside>;
  return (
    <figure className="fk-table">
      <div className="fk-table-scroll">
        <table>
          <thead><tr>{b.table.head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
          <tbody>
            {b.table.rows.map((r, i) => (
              <tr key={i}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row"><RichText text={c} /></th> : <td key={j} data-label={b.table.head[j]}><RichText text={c} /></td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>
      {b.table.caption && <figcaption>{b.table.caption}</figcaption>}
    </figure>
  );
}
