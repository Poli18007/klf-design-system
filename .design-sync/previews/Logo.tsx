import React from 'react';
import { Logo } from 'klf-design-system';

/* The artwork is a dark wordmark under an orange monogram, so every cell keeps
 * the mark on a light surface — `--surface-card`, never the black chrome. */

const LightPanel = ({ children, width = 420 }: { children?: React.ReactNode; width?: number }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-5)',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    {children}
  </div>
);

/** The canonical use: the supplied lockup at its default height. */
export const Basic = () => (
  <LightPanel width={280}>
    <Logo />
  </LightPanel>
);

/** `height` in px drives the mark; width scales with the artwork. */
export const Heights = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
    {[28, 40, 56, 80].map((h) => (
      <div key={h} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
        <Logo height={h} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', color: 'var(--text-muted)' }}>{h}px</span>
      </div>
    ))}
  </div>
);

/** In place: the portal header bar, on the light card surface. */
export const AppHeader = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      padding: 'var(--space-4) var(--space-5)',
      maxWidth: 620,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <Logo height={36} />
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
      {['Load board', 'Carriers', 'Settlements'].map((l) => (
        <span
          key={l}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-3xs)',
            fontWeight: 700,
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          {l}
        </span>
      ))}
    </div>
  </div>
);

/** In place: the rate-confirmation letterhead, mark over the document meta. */
export const DocumentLetterhead = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-6)',
      maxWidth: 480,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <Logo height={48} />
    <div style={{ height: 1, background: 'var(--bsg-gold)' }} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'var(--text-lg)',
          letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text-heading)',
        }}
      >
        Rate confirmation KLF-48120
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>
        Chicago, IL → Dallas, TX &middot; Dry van &middot; MC 884201
      </span>
    </div>
  </div>
);
