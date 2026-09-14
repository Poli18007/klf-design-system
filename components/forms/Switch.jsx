import React from 'react';

/** Immediate on/off toggle — gold when on. */
export function Switch({ label, checked, onChange, disabled, style, ...rest }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }}>
      <input type="checkbox" role="switch" checked={!!checked} onChange={onChange} readOnly={!onChange} disabled={disabled} {...rest}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        position: 'relative', width: 44, height: 24, flex: '0 0 auto', borderRadius: 999,
        background: checked ? 'var(--bsg-gold)' : 'var(--neutral-800)',
        border: `1px solid ${checked ? 'var(--gold-500)' : 'var(--border-default)'}`,
        transition: 'var(--transition-control)',
      }}>
        <span style={{
          position: 'absolute', top: 2, left: checked ? 22 : 2, width: 18, height: 18, borderRadius: 999,
          background: checked ? 'var(--bsg-black)' : 'var(--bsg-white)', boxShadow: 'var(--shadow-xs)',
          transition: 'left var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
        }} />
      </span>
      {label ? <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-heading)' }}>{label}</span> : null}
    </label>
  );
}
