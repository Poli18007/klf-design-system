import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

/** Modal for confirmations and short forms. Scrim is black at 72%. */
export function Dialog({ open = true, title, description, footer, onClose, width = 460, children, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--overlay-scrim)', padding: 'var(--space-6)', zIndex: 50 }}>
      <div role="dialog" aria-modal="true" {...rest} style={{
        width: '100%', maxWidth: width, background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-panel)',
        boxShadow: 'var(--shadow-lg)', overflow: 'hidden',
        animation: 'bsg-fade-up var(--dur-base) var(--ease-out)', ...style,
      }}>
        <div style={{ height: 'var(--stripe-h)', background: 'var(--gradient-gold)' }} />
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', padding: 'var(--space-6) var(--space-6) var(--space-3)' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-heading)' }}>{title}</h3>
            {description ? <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>{description}</p> : null}
          </div>
          {onClose ? <IconButton icon="x" size="sm" label="Close" onClick={onClose} /> : null}
        </div>
        {children ? <div style={{ padding: '0 var(--space-6) var(--space-5)' }}>{children}</div> : null}
        {footer ? <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)', padding: 'var(--space-4) var(--space-6)', background: 'var(--surface-sunken)', borderTop: '1px solid var(--border-subtle)' }}>{footer}</div> : null}
      </div>
    </div>
  );
}
