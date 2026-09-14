import React from 'react';
import { Icon } from './Icon.jsx';

const S = { sm: 34, md: 44, lg: 54 };

/** Square icon-only control for toolbars, table rows and dialog dismissals. */
export function IconButton({ icon = 'x', size = 'md', variant = 'ghost', label, disabled, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const d = S[size] || S.md;
  const filled = variant === 'primary';
  return (
    <button
      type="button" aria-label={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: d, height: d, borderRadius: 'var(--radius-control)', cursor: disabled ? 'not-allowed' : 'pointer',
        background: filled ? 'var(--bsg-gold)' : hover ? 'var(--surface-sunken)' : 'transparent',
        color: filled ? 'var(--text-on-accent)' : 'var(--text-heading)',
        border: variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent',
        opacity: disabled ? 0.38 : 1, transition: 'var(--transition-control)', ...style,
      }}
    >
      <Icon name={icon} size={d <= 34 ? 16 : d <= 44 ? 18 : 20} />
    </button>
  );
}
