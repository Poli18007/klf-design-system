import React from 'react';
import { IconButton } from 'klf-design-system';

const Row = ({ children }: { children?: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>{children}</div>
);

/** The canonical use: an icon-only control with an accessible name. */
export const Basic = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-3) var(--space-4)',
      maxWidth: 320,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <span
      style={{
        flex: 1,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-3xs)',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
      }}
    >
      Load board &middot; 42 open
    </span>
    <IconButton icon="refresh-cw" label="Refresh load board" />
  </div>
);

/** The `variant` axis: ghost for toolbars, primary for the gold action, outline for secondary. */
export const Variants = () => (
  <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
    {[
      { variant: 'ghost' as const, icon: 'search', label: 'Search loads' },
      { variant: 'primary' as const, icon: 'plus', label: 'Book a load' },
      { variant: 'outline' as const, icon: 'filter', label: 'Filter lanes' },
    ].map((v) => (
      <div key={v.variant} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
        <IconButton variant={v.variant} icon={v.icon} label={v.label} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', color: 'var(--text-muted)' }}>{v.variant}</span>
      </div>
    ))}
  </div>
);

/** `size` — sm in table rows, md in toolbars, lg for dialog chrome. */
export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-5)' }}>
    {(['sm', 'md', 'lg'] as const).map((s) => (
      <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
        <IconButton size={s} variant="outline" icon="map" label={`Open map (${s})`} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', color: 'var(--text-muted)' }}>{s}</span>
      </div>
    ))}
  </div>
);

/** `disabled` dims the control — here, actions locked until the load is covered. */
export const Disabled = () => (
  <Row>
    <IconButton icon="download" label="Download rate confirmation" disabled />
    <IconButton variant="outline" icon="pencil" label="Edit load" disabled />
    <IconButton variant="primary" icon="check" label="Mark delivered" disabled />
  </Row>
);

/** In place: the per-row action cluster on the load board. */
export const RowActions = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-3) var(--space-4)',
      maxWidth: 620,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', color: 'var(--text-muted)' }}>KLF-48120</span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--text-heading)' }}>
        Chicago, IL → Dallas, TX
      </span>
    </div>
    <IconButton size="sm" icon="map-pin" label="Track shipment" />
    <IconButton size="sm" icon="file-text" label="Open rate confirmation" />
    <IconButton size="sm" icon="message-circle" label="Message carrier" />
    <IconButton size="sm" variant="primary" icon="check" label="Mark delivered" />
  </div>
);
