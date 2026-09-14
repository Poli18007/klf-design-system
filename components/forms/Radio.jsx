import React from 'react';

/** Single-choice control within a named group. */
export function Radio({ label, hint, checked, onChange, name, disabled, style, ...rest }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }}>
      <input type="radio" name={name} checked={!!checked} onChange={onChange} readOnly={!onChange} disabled={disabled} {...rest}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
        width: 20, height: 20, marginTop: 1, borderRadius: 999,
        background: 'var(--surface-card)',
        border: `1px solid ${checked ? 'var(--bsg-black)' : 'var(--border-strong)'}`,
        transition: 'var(--transition-control)',
      }}>{checked ? <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--bsg-black)' }} /> : null}</span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-heading)' }}>{label}</span>
        {hint ? <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>{hint}</span> : null}
      </span>
    </label>
  );
}
