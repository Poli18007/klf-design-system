import React from 'react';
import { Badge, Button, IconButton, Tooltip } from 'klf-design-system';

/**
 * The tooltip label is a hover-only layer, so these cells show the *triggers*
 * as they sit at rest. The row toolbar above a load table.
 */
export const IconToolbar = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: 'var(--space-3)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <Tooltip label="Track live position">
      <IconButton icon="map-pin" label="Track live position" />
    </Tooltip>
    <Tooltip label="Send a check call">
      <IconButton icon="phone" label="Send a check call" />
    </Tooltip>
    <Tooltip label="Open rate confirmation">
      <IconButton icon="file-text" label="Open rate confirmation" />
    </Tooltip>
    <Tooltip label="Duplicate this load">
      <IconButton icon="copy" label="Duplicate this load" />
    </Tooltip>
    <Tooltip label="Cancel load" placement="bottom">
      <IconButton icon="trash-2" label="Cancel load" />
    </Tooltip>
  </div>
);

/** Anchored to an abbreviated table value — the full lane lives in the label. */
export const TruncatedValue = () => (
  <div
    style={{
      display: 'grid',
      gap: 'var(--space-3)',
      width: 300,
      padding: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>Lane</span>
      <Tooltip label="Chicago, IL → Dallas, TX · 968 mi">
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-heading)', borderBottom: '1px dotted var(--border-default)' }}>
          CHI → DAL
        </span>
      </Tooltip>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>Carrier</span>
      <Tooltip label="Alvarez Trucking LLC · MC 884213 · DOT 2914477">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-body)', borderBottom: '1px dotted var(--border-default)' }}>
          MC 884213
        </span>
      </Tooltip>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>Equipment</span>
      <Tooltip label="53 ft reefer, setpoint 34°F, continuous">
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-body)', borderBottom: '1px dotted var(--border-default)' }}>
          R53 · 34°F
        </span>
      </Tooltip>
    </div>
  </div>
);

/** Explaining a status chip that has no room for its own caption. */
export const OnBadge = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
    <Tooltip label="Detention billing starts at 2h 30m on the dock">
      <Badge tone="warning" icon="clock">
        Detention 2:04
      </Badge>
    </Tooltip>
    <Tooltip label="FMCSA authority active, insurance on file through 30 Sep">
      <Badge tone="success" icon="shield-check">
        Carrier cleared
      </Badge>
    </Tooltip>
    <Tooltip label="ELD has not reported a position in 46 minutes" placement="bottom">
      <Badge tone="danger" dot>
        Stale ping
      </Badge>
    </Tooltip>
  </div>
);

/** Wrapping a full Button when the action needs a consequence spelled out. */
export const OnButton = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
    <Tooltip label="Notifies the carrier and sends the rate confirmation">
      <Button size="sm" icon="check">
        Tender load
      </Button>
    </Tooltip>
    <Tooltip label="Posts KLF-48120 back to the open load board">
      <Button size="sm" variant="outline" icon="refresh-cw">
        Re-post lane
      </Button>
    </Tooltip>
  </div>
);
