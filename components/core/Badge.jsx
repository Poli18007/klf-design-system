import React from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  neutral: ['var(--surface-sunken)', 'var(--text-body)', 'var(--border-subtle)'],
  gold: ['var(--gold-100)', 'var(--gold-700)', 'var(--gold-300)'],
  success: ['var(--status-success-soft)', 'var(--status-success)', 'var(--status-success)'],
  warning: ['var(--status-warning-soft)', 'var(--status-warning)', 'var(--status-warning)'],
  danger: ['var(--status-danger-soft)', 'var(--status-danger)', 'var(--status-danger)'],
  info: ['var(--status-info-soft)', 'var(--status-info)', 'var(--status-info)'],
};

/** Status marker for load state, compliance and lane metadata. */
export function Badge({ tone = 'neutral', icon, dot, children, style, ...rest }) {
  const [bg, fg, br] = TONES[tone] || TONES.neutral;
  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      height: 24, padding: '0 var(--space-3)', background: bg, color: fg,
      border: `1px solid ${br}`, borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-3xs)', fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', whiteSpace: 'nowrap', ...style,
    }}>
      {dot ? <span style={{ width: 6, height: 6, borderRadius: 999, background: fg }} /> : null}
      {icon ? <Icon name={icon} size={12} /> : null}
      {children}
    </span>
  );
}
