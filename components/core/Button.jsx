import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { h: 'var(--control-h-sm)', px: 'var(--space-4)', fs: 'var(--text-2xs)', icon: 14 },
  md: { h: 'var(--control-h-md)', px: 'var(--space-6)', fs: 'var(--text-xs)', icon: 16 },
  lg: { h: 'var(--control-h-lg)', px: 'var(--space-8)', fs: 'var(--text-sm)', icon: 18 },
};

const VARIANTS = {
  primary: { background: 'var(--bsg-gold)', color: 'var(--text-on-accent)', border: '1px solid var(--bsg-gold)' },
  solid: { background: 'var(--bsg-black)', color: 'var(--bsg-white)', border: '1px solid var(--bsg-black)' },
  outline: { background: 'transparent', color: 'var(--text-heading)', border: '1px solid var(--border-strong)' },
  ghost: { background: 'transparent', color: 'var(--text-heading)', border: '1px solid transparent' },
};

const HOVER = {
  primary: { background: 'var(--gold-500)', borderColor: 'var(--gold-500)' },
  solid: { background: 'var(--neutral-200)', borderColor: 'var(--neutral-200)' },
  outline: { background: 'var(--surface-sunken)', borderColor: 'var(--bsg-black)' },
  ghost: { background: 'var(--surface-sunken)' },
};

/* `inverse` — outline and ghost buttons sitting on a dark surface.
 *
 * These need a different colour in BOTH states, not just at rest, and that is
 * the part that is easy to get wrong. Callers used to hand-roll the rest state
 * with `style={{color:'var(--bsg-white)'}}`, but `style` is spread last so it
 * also overrode the hover colour: the fill went light while the label stayed
 * white, and the button read as blank on hover. Keeping both states together
 * here is the only way they cannot drift apart. */
const VARIANTS_INVERSE = {
  outline: { background: 'transparent', color: 'var(--bsg-white)', border: '1px solid var(--neutral-400)' },
  ghost: { background: 'transparent', color: 'var(--bsg-white)', border: '1px solid transparent' },
};

const HOVER_INVERSE = {
  outline: { background: 'var(--bsg-white)', color: 'var(--bsg-black)', borderColor: 'var(--bsg-white)' },
  ghost: { background: 'rgba(255,255,255,.12)', color: 'var(--bsg-white)' },
};

/** Primary action control. Gold = the one commit action per view.
 *  `inverse` recolours outline/ghost for dark surfaces. */
export function Button({ variant = 'primary', size = 'md', icon, iconAfter, fullWidth, disabled, inverse, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      {...rest}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
        // A button label is never a paragraph — keep it on one line and don't let
        // a crowded flex row squeeze the control until the text wraps.
        whiteSpace: 'nowrap', flexShrink: 0,
        height: s.h, padding: `0 ${s.px}`, fontFamily: 'var(--font-body)', fontSize: s.fs,
        fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
        borderRadius: 'var(--radius-control)', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-control), transform var(--dur-instant) var(--ease-out)',
        opacity: disabled ? 0.38 : 1,
        transform: press && !disabled ? 'var(--transform-press)' : 'none',
        boxShadow: variant === 'primary' && hover && !disabled ? 'var(--shadow-gold)' : 'none',
        ...(inverse && VARIANTS_INVERSE[variant] ? VARIANTS_INVERSE[variant] : VARIANTS[variant]),
        ...(hover && !disabled
          ? (inverse && HOVER_INVERSE[variant] ? HOVER_INVERSE[variant] : HOVER[variant])
          : null),
        ...style,
      }}
    >
      {icon ? <Icon name={icon} size={s.icon} /> : null}
      {children}
      {iconAfter ? <Icon name={iconAfter} size={s.icon} /> : null}
    </button>
  );
}
