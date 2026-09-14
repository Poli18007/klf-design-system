import React from 'react';
import { Icon } from 'klf-design-system';

const Cell = ({ name, children }: { name: string; children?: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: 'var(--space-3)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      color: 'var(--text-heading)',
    }}
  >
    <Icon name={name} size={22} />
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', color: 'var(--text-muted)' }}>{children ?? name}</span>
  </div>
);

/** The canonical use: a Lucide name, tinted with the inherited text colour. */
export const Basic = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', color: 'var(--text-heading)' }}>
    <Icon name="truck" size={24} />
    <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-heading)' }}>
      Dry van &middot; 53&apos;
    </span>
  </div>
);

/** `size` is the edge length in px — the sizes used across the portal chrome. */
export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-5)', color: 'var(--text-heading)' }}>
    {[12, 14, 16, 20, 24, 32, 44].map((s) => (
      <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
        <Icon name="container" size={s} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', color: 'var(--text-muted)' }}>{s}</span>
      </div>
    ))}
  </div>
);

/** The freight glyph set: equipment, lanes, facilities, paperwork. */
export const FreightGlyphs = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: 'var(--space-3)', maxWidth: 680 }}>
    {['truck', 'container', 'package', 'warehouse', 'fuel', 'weight', 'snowflake', 'route', 'map-pin', 'navigation', 'clipboard-check', 'receipt'].map((n) => (
      <Cell key={n} name={n} />
    ))}
  </div>
);

/** Icons inherit `currentColor`, so status tones come from the wrapper. */
export const StatusTones = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-5)' }}>
    {[
      { name: 'circle-check', color: 'var(--status-success)', label: 'POD received' },
      { name: 'triangle-alert', color: 'var(--status-warning)', label: 'Detention risk' },
      { name: 'octagon-alert', color: 'var(--status-danger)', label: 'Load late' },
      { name: 'info', color: 'var(--status-info)', label: 'Appointment set' },
    ].map((s) => (
      <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: s.color }}>
        <Icon name={s.name} size={18} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600 }}>{s.label}</span>
      </div>
    ))}
  </div>
);

/** `strokeWidth={1}` renders at 80% opacity for secondary metadata. */
export const Muted = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      maxWidth: 420,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    {[
      { name: 'map-pin', text: 'Pickup — Joliet, IL 60432' },
      { name: 'calendar', text: 'Thursday 12 March, 06:00–10:00' },
      { name: 'user', text: 'Driver: Marcus Whitfield, unit 214' },
    ].map((r) => (
      <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', color: 'var(--text-muted)' }}>
        <Icon name={r.name} size={16} strokeWidth={1} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>{r.text}</span>
      </div>
    ))}
  </div>
);
