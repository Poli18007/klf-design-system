import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Vertical load-progress trail: complete steps are gold, the current step is ringed. */
export function Timeline({ steps = [], style, ...rest }) {
  return (
    <ol {...rest} style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', ...style }}>
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        const done = s.state === 'done';
        const current = s.state === 'current';
        const color = done || current ? 'var(--bsg-gold)' : 'var(--border-default)';
        return (
          <li key={s.label} style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 22, height: 22, borderRadius: 999,
                background: done ? 'var(--bsg-gold)' : 'var(--surface-card)',
                border: '2px solid ' + color, color: 'var(--bsg-black)',
                boxShadow: current ? 'var(--ring-focus)' : 'none',
              }}>{done ? <Icon name="check" size={12} /> : null}</span>
              {!last ? <span style={{ width: 2, flex: 1, minHeight: 26, background: done ? 'var(--bsg-gold)' : 'var(--border-subtle)' }} /> : null}
            </div>
            <div style={{ paddingBottom: last ? 0 : 'var(--space-5)' }}>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: current || done ? 'var(--text-heading)' : 'var(--text-muted)' }}>{s.label}</div>
              {s.meta ? <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-muted)' }}>{s.meta}</div> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
