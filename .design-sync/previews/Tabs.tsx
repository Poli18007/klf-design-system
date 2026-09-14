import React from 'react';
import { Tabs } from 'klf-design-system';

/** The default view switcher. The first tab is active when no `value` is set. */
export const Basic = () => (
  <div style={{ width: 460 }}>
    <Tabs tabs={['Active loads', 'Tendered', 'Delivered', 'Cancelled']} />
  </div>
);

/** `count` puts the queue depth beside each label. */
export const WithCounts = () => (
  <div style={{ width: 380 }}>
    <Tabs
      value="tendered"
      tabs={[
        { value: 'active', label: 'Active', count: 12 },
        { value: 'tendered', label: 'Tendered', count: 5 },
        { value: 'delivered', label: 'Delivered', count: 41 },
        { value: 'billing', label: 'Billing', count: 2 },
      ]}
    />
  </div>
);

/** `inverse` recolours the active label for the dark portal surfaces. */
export const Inverse = () => (
  <div style={{ padding: 'var(--space-5)', background: 'var(--bsg-black)', borderRadius: 'var(--radius-card)', width: 520 }}>
    <Tabs
      inverse
      value="reefer"
      tabs={[
        { value: 'van', label: 'Dry van', count: 24 },
        { value: 'reefer', label: 'Reefer', count: 11 },
        { value: 'flatbed', label: 'Flatbed', count: 6 },
        { value: 'power', label: 'Power only', count: 3 },
      ]}
    />
  </div>
);

/** Driving a panel below it — the tab row with its content. */
export const WithPanel = () => (
  <div
    style={{
      width: 520,
      padding: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <Tabs
      value="stops"
      tabs={[
        { value: 'summary', label: 'Summary' },
        { value: 'stops', label: 'Stops', count: 2 },
        { value: 'docs', label: 'Documents', count: 4 },
        { value: 'notes', label: 'Check calls', count: 7 },
      ]}
    />
    <div style={{ display: 'grid', gap: 'var(--space-3)', paddingTop: 'var(--space-5)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-heading)' }}>
          1 · Pickup — Joliet, IL
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
          THU 06:00–10:00
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-heading)' }}>
          2 · Delivery — Dallas, TX
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
          FRI 06:00–08:00
        </span>
      </div>
    </div>
  </div>
);

/** A two-tab switcher, the narrowest useful form. */
export const TwoUp = () => (
  <div style={{ width: 300 }}>
    <Tabs
      value="carriers"
      tabs={[
        { value: 'drivers', label: 'Company drivers', count: 46 },
        { value: 'carriers', label: 'Carriers', count: 218 },
      ]}
    />
  </div>
);
