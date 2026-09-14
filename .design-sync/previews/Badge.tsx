import React from 'react';
import { Badge } from 'klf-design-system';

const Row = ({ children }: { children?: React.ReactNode }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3)' }}>{children}</div>
);

/** The canonical use: load state on a dispatch board row. */
export const Basic = () => (
  <Row>
    <Badge tone="success">Delivered</Badge>
  </Row>
);

/** The `tone` axis — every status colour the dispatch board uses. */
export const Tones = () => (
  <Row>
    <Badge tone="neutral">Draft</Badge>
    <Badge tone="gold">Covered</Badge>
    <Badge tone="success">Delivered</Badge>
    <Badge tone="warning">Detention</Badge>
    <Badge tone="danger">Late</Badge>
    <Badge tone="info">In transit</Badge>
  </Row>
);

/** `dot` fronts the label with a filled status dot, for live load state. */
export const WithDot = () => (
  <Row>
    <Badge tone="info" dot>At shipper</Badge>
    <Badge tone="success" dot>Loaded</Badge>
    <Badge tone="warning" dot>Dwelling 2h 40m</Badge>
    <Badge tone="danger" dot>No ELD ping</Badge>
  </Row>
);

/** `icon` takes a Lucide name for compliance and document markers. */
export const WithIcon = () => (
  <Row>
    <Badge tone="success" icon="shield-check">MC 884201 active</Badge>
    <Badge tone="gold" icon="snowflake">Reefer 34&deg;F</Badge>
    <Badge tone="warning" icon="triangle-alert">HOS 1h 15m left</Badge>
    <Badge tone="danger" icon="octagon-alert">COI expired</Badge>
  </Row>
);

/** In place: badges trailing the lane and carrier on a load list. */
export const InLoadList = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      maxWidth: 620,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    {[
      { id: 'KLF-48120', lane: 'Chicago, IL → Dallas, TX', tone: 'info' as const, state: 'In transit', extra: 'ETA 14:20' },
      { id: 'KLF-48133', lane: 'Joliet, IL → Memphis, TN', tone: 'success' as const, state: 'Delivered', extra: 'POD on file' },
      { id: 'KLF-48147', lane: 'Gary, IN → Laredo, TX', tone: 'danger' as const, state: 'Late', extra: '3h behind' },
    ].map((l) => (
      <div key={l.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', width: 90 }}>
          {l.id}
        </span>
        <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-body)' }}>
          {l.lane}
        </span>
        <Badge tone={l.tone} dot>
          {l.state}
        </Badge>
        <Badge tone="neutral">{l.extra}</Badge>
      </div>
    ))}
  </div>
);
