import React from 'react';

/** Dense load/lane table. Mono figures, uppercase header, hairline row rules. */
export function DataTable({ columns = [], rows = [], onRowClick, style, ...rest }) {
  const [hover, setHover] = React.useState(-1);
  return (
    <div {...rest} style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-card)', overflow: 'hidden', overflowX: 'auto', background: 'var(--surface-card)', ...style }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={{
                textAlign: c.align || 'left', padding: 'var(--space-3) var(--space-4)',
                background: 'var(--surface-sunken)', borderBottom: '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-3xs)', fontWeight: 700,
                letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)',
                whiteSpace: 'nowrap',
              }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id || i}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}
              onClick={() => onRowClick && onRowClick(r)}
              style={{ background: hover === i ? 'var(--surface-sunken)' : 'transparent', cursor: onRowClick ? 'pointer' : 'default', transition: 'background var(--dur-fast) var(--ease-out)' }}>
              {columns.map((c) => (
                <td key={c.key} style={{
                  textAlign: c.align || 'left', padding: 'var(--space-4)',
                  borderBottom: '1px solid var(--border-subtle)',
                  fontFamily: c.mono ? 'var(--font-mono)' : 'var(--font-body)',
                  fontSize: c.mono ? 'var(--text-2xs)' : 'var(--text-sm)',
                  fontWeight: c.strong ? 700 : 500,
                  letterSpacing: c.mono ? 'var(--tracking-wide)' : 'var(--tracking-normal)',
                  color: c.strong ? 'var(--text-heading)' : 'var(--text-body)',
                  whiteSpace: 'nowrap',
                }}>{c.render ? c.render(r) : r[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
