import React from 'react';

/** Horizontal view switcher. Active tab carries a 2px gold underline. */
export function Tabs({ tabs = [], value, onChange, inverse, style, ...rest }) {
  const active = value ?? (tabs[0] && (tabs[0].value || tabs[0]));
  return (
    <div role="tablist" {...rest} style={{
      display: 'flex', gap: 'var(--space-6)', alignItems: 'stretch',
      borderBottom: '1px solid ' + (inverse ? 'var(--neutral-300)' : 'var(--border-subtle)'), ...style,
    }}>
      {tabs.map((t) => {
        const v = t.value || t;
        const label = t.label || t;
        const on = v === active;
        return (
          <button key={v} role="tab" aria-selected={on} onClick={() => onChange && onChange(v)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              background: 'none', border: 0, padding: '0 0 var(--space-3)', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 700,
              letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
              color: on ? (inverse ? 'var(--bsg-white)' : 'var(--text-heading)') : 'var(--text-muted)',
              boxShadow: on ? 'inset 0 -2px 0 0 var(--bsg-gold)' : 'none',
              transition: 'var(--transition-control)',
            }}>
            {label}
            {t.count != null ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', fontWeight: 500, color: 'var(--text-muted)' }}>{t.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
