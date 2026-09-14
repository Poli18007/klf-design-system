import React from 'react';
import { Icon } from './Icon.jsx';

/** Removable descriptor for equipment types, lanes and filters. */
export function Tag({ children, onRemove, selected, style, ...rest }) {
  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      height: 30, padding: '0 var(--space-3)', borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--bsg-black)' : 'var(--surface-card)',
      color: selected ? 'var(--bsg-white)' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--bsg-black)' : 'var(--border-default)'}`,
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-normal)', whiteSpace: 'nowrap', ...style,
    }}>
      {children}
      {onRemove ? (
        <button onClick={onRemove} aria-label="Remove" style={{ display: 'inline-flex', background: 'none', border: 0, padding: 0, cursor: 'pointer', color: 'inherit', opacity: 0.6 }}>
          <Icon name="x" size={12} />
        </button>
      ) : null}
    </span>
  );
}
