import React from 'react';
import { Icon } from './Icon.jsx';

/** Single metric readout — mono figures, uppercase label. */
export function StatTile({ value, label, delta, deltaTone = 'success', icon, inverse, style, ...rest }) {
  const tone = deltaTone === 'danger' ? 'var(--status-danger)' : deltaTone === 'warning' ? 'var(--status-warning)' : 'var(--status-success)';
  return (
    <div {...rest} style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', padding: 'var(--space-5)',
      background: inverse ? 'var(--neutral-100)' : 'var(--surface-card)',
      border: `1px solid ${inverse ? 'var(--neutral-300)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-card)', ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: inverse ? 'var(--neutral-600)' : 'var(--text-muted)' }}>
        {icon ? <Icon name={icon} size={14} /> : null}
        <span style={{ fontSize: 'var(--text-3xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase' }}>{label}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-2xl)', letterSpacing: 'var(--tracking-tight)', color: inverse ? 'var(--bsg-white)' : 'var(--text-heading)' }}>{value}</span>
        {delta ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', fontWeight: 500, color: tone }}>{delta}</span> : null}
      </div>
    </div>
  );
}
