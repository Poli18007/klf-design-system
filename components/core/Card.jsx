import React from 'react';
import { Icon } from './Icon.jsx';

/** Content container. Hairline border + 10px radius; the gold stripe marks a featured card. */
export function Card({ title, eyebrow, icon, stripe, inverse, interactive, footer, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column',
        background: inverse ? 'var(--bsg-black)' : 'var(--surface-card)',
        color: inverse ? 'var(--neutral-700)' : 'var(--text-body)',
        border: `1px solid ${inverse ? 'var(--neutral-300)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-card)',
        boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default', ...style,
      }}
    >
      {stripe ? <div style={{ height: 'var(--stripe-h)', background: 'var(--gradient-gold)' }} /> : null}
      <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flex: 1 }}>
        {icon ? <Icon name={icon} size={24} style={{ color: 'var(--bsg-gold)' }} /> : null}
        {eyebrow ? <span style={{ fontSize: 'var(--type-eyebrow-size)', fontWeight: 700, letterSpacing: 'var(--type-eyebrow-tracking)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>{eyebrow}</span> : null}
        {title ? <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-lg)', letterSpacing: 'var(--tracking-tight)', color: inverse ? 'var(--bsg-white)' : 'var(--text-heading)' }}>{title}</h3> : null}
        {children ? <div style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>{children}</div> : null}
      </div>
      {footer ? <div style={{ padding: 'var(--space-4) var(--space-6)', borderTop: `1px solid ${inverse ? 'var(--neutral-300)' : 'var(--border-subtle)'}` }}>{footer}</div> : null}
    </div>
  );
}
