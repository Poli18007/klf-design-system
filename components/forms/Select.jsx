import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Native select styled to match Input. */
export function Select({ label, hint, error, options = [], disabled, style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return (
    <label htmlFor={fid} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label ? <span style={{ fontSize: 'var(--text-3xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span> : null}
      <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select
          id={fid} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          {...rest}
          style={{
            width: '100%', height: 'var(--control-h-md)', padding: '0 40px 0 var(--space-4)',
            appearance: 'none', background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
            color: 'var(--text-heading)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500,
            border: `1px solid ${error ? 'var(--status-danger)' : focus ? 'var(--bsg-gold)' : 'var(--border-default)'}`,
            borderRadius: 'var(--radius-control)', outline: 'none',
            boxShadow: focus ? 'var(--ring-focus)' : 'none', transition: 'var(--transition-control)',
          }}
        >
          {options.map((o) => {
            const v = typeof o === 'string' ? o : o.value;
            const l = typeof o === 'string' ? o : o.label;
            return <option key={v} value={v}>{l}</option>;
          })}
        </select>
        <Icon name="chevron-down" size={16} style={{ position: 'absolute', right: 'var(--space-4)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
      </span>
      {error || hint ? <span style={{ fontSize: 'var(--text-2xs)', color: error ? 'var(--status-danger)' : 'var(--text-muted)' }}>{error || hint}</span> : null}
    </label>
  );
}
