import React from 'react';

/** Hover label for icon-only controls and abbreviated table values. */
export function Tooltip({ label, placement = 'top', children, style, ...rest }) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom'
    ? { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' }
    : { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' };
  return (
    <span {...rest} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      style={{ position: 'relative', display: 'inline-flex', ...style }}>
      {children}
      {show ? (
        <span role="tooltip" style={{
          position: 'absolute', ...pos, zIndex: 40, whiteSpace: 'nowrap',
          padding: '6px 10px', background: 'var(--bsg-black)', color: 'var(--bsg-white)',
          border: '1px solid var(--neutral-300)', borderRadius: 'var(--radius-xs)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-3xs)', fontWeight: 600,
          letterSpacing: 'var(--tracking-wide)', boxShadow: 'var(--shadow-md)',
        }}>{label}</span>
      ) : null}
    </span>
  );
}
