import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

const TONES = { info: ['var(--status-info)', 'info'], success: ['var(--status-success)', 'check-circle'], warning: ['var(--status-warning)', 'triangle-alert'], danger: ['var(--status-danger)', 'octagon-alert'] };

/** Transient confirmation, bottom-right. Black panel, tone-colored left rule. */
export function Toast({ tone = 'success', title, message, onClose, style, ...rest }) {
  const [color, icon] = TONES[tone] || TONES.info;
  return (
    <div role="status" {...rest} style={{
      display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)',
      minWidth: 300, maxWidth: 400, padding: 'var(--space-4)',
      background: 'var(--bsg-black)', color: 'var(--neutral-800)',
      border: '1px solid var(--neutral-300)', borderLeft: '3px solid ' + color,
      borderRadius: 'var(--radius-control)', boxShadow: 'var(--shadow-lg)',
      animation: 'bsg-fade-up var(--dur-base) var(--ease-out)', ...style,
    }}>
      <Icon name={icon} size={18} style={{ color, marginTop: 1 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--bsg-white)' }}>{title}</span>
        {message ? <span style={{ fontSize: 'var(--text-2xs)', lineHeight: 'var(--leading-normal)' }}>{message}</span> : null}
      </div>
      {onClose ? <IconButton icon="x" size="sm" label="Dismiss" onClick={onClose} style={{ color: 'var(--neutral-700)' }} /> : null}
    </div>
  );
}
