import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Text field with label, helper and error states. */
export function Input({ label, hint, error, icon, textarea, disabled, style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const Tag = textarea ? 'textarea' : 'input';
  const border = error ? 'var(--status-danger)' : focus ? 'var(--bsg-gold)' : 'var(--border-default)';
  return (
    <label htmlFor={fid} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label ? <span style={{ fontSize: 'var(--text-3xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span> : null}
      <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && !textarea ? <Icon name={icon} size={16} style={{ position: 'absolute', left: 'var(--space-4)', color: 'var(--text-muted)' }} /> : null}
        <Tag
          id={fid} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          {...rest}
          style={{
            width: '100%', height: textarea ? undefined : 'var(--control-h-md)', minHeight: textarea ? 104 : undefined,
            padding: textarea ? 'var(--space-3) var(--space-4)' : `0 var(--space-4) 0 ${icon ? '40px' : 'var(--space-4)'}`,
            background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
            color: 'var(--text-heading)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500,
            border: `1px solid ${border}`, borderRadius: 'var(--radius-control)', outline: 'none',
            boxShadow: focus ? 'var(--ring-focus)' : 'none', resize: textarea ? 'vertical' : undefined,
            transition: 'var(--transition-control)',
          }}
        />
      </span>
      {error || hint ? <span style={{ fontSize: 'var(--text-2xs)', color: error ? 'var(--status-danger)' : 'var(--text-muted)' }}>{error || hint}</span> : null}
    </label>
  );
}
