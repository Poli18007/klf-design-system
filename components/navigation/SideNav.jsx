import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Dark portal sidebar. Active item is a gold left rule with a charcoal fill. */
export function SideNav({ items = [], value, onChange, header, footer, style, ...rest }) {
  return (
    <nav {...rest} style={{
      display: 'flex', flexDirection: 'column', width: 232, flex: '0 0 232px',
      background: 'var(--bsg-black)', borderRight: '1px solid var(--neutral-300)', ...style,
    }}>
      {header ? <div style={{ padding: 'var(--space-5) var(--space-5)', borderBottom: '1px solid var(--neutral-300)' }}>{header}</div> : null}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 'var(--space-4) var(--space-3)', flex: 1 }}>
        {items.map((it) => {
          const v = it.value || it;
          const on = v === value;
          return (
            <button key={v} onClick={() => onChange && onChange(v)} style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-3)', width: '100%',
              height: 40, padding: '0 var(--space-3)', border: 0, cursor: 'pointer', textAlign: 'left',
              background: on ? 'var(--neutral-200)' : 'transparent',
              boxShadow: on ? 'inset 2px 0 0 0 var(--bsg-gold)' : 'none',
              color: on ? 'var(--bsg-white)' : 'var(--neutral-700)',
              borderRadius: 'var(--radius-xs)', fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)', fontWeight: on ? 700 : 500,
              transition: 'var(--transition-control)',
            }}>
              {it.icon ? <Icon name={it.icon} size={16} /> : null}
              <span style={{ flex: 1 }}>{it.label || it}</span>
              {it.count != null ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', color: 'var(--neutral-600)' }}>{it.count}</span> : null}
            </button>
          );
        })}
      </div>
      {footer ? <div style={{ padding: 'var(--space-4) var(--space-5)', borderTop: '1px solid var(--neutral-300)' }}>{footer}</div> : null}
    </nav>
  );
}
