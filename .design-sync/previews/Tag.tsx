import React from 'react';
import { Tag } from 'klf-design-system';

const Row = ({ children }: { children?: React.ReactNode }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3)' }}>{children}</div>
);

/** The canonical use: an equipment descriptor. */
export const Basic = () => (
  <Row>
    <Tag>Dry van</Tag>
  </Row>
);

/** Unselected equipment and service descriptors. */
export const Default = () => (
  <Row>
    <Tag>Dry van</Tag>
    <Tag>Reefer</Tag>
    <Tag>Flatbed</Tag>
    <Tag>Power only</Tag>
    <Tag>Drop &amp; hook</Tag>
    <Tag>Hazmat</Tag>
  </Row>
);

/** `selected` inverts the pill to the brand black — the active filter state. */
export const Selected = () => (
  <Row>
    <Tag selected>Reefer</Tag>
    <Tag selected>Midwest → Texas</Tag>
    <Tag>Flatbed</Tag>
    <Tag>Power only</Tag>
  </Row>
);

/** `onRemove` adds the dismiss affordance used for applied search filters. */
export const Removable = () => (
  <Row>
    <Tag onRemove={() => {}}>Chicago, IL → Dallas, TX</Tag>
    <Tag onRemove={() => {}}>Pickup this week</Tag>
    <Tag selected onRemove={() => {}}>Reefer</Tag>
  </Row>
);

/** In place: the applied-filter bar above the load board. */
export const FilterBar = () => (
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
    <span
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-3xs)',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
      }}
    >
      Filtering 42 open loads
    </span>
    <Row>
      <Tag selected onRemove={() => {}}>Reefer</Tag>
      <Tag onRemove={() => {}}>Origin: Chicago, IL</Tag>
      <Tag onRemove={() => {}}>Rate ≥ $2.40/mi</Tag>
      <Tag onRemove={() => {}}>Carrier: Prairie Logistics LLC</Tag>
      <Tag>+ Add filter</Tag>
    </Row>
  </div>
);
