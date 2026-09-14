import React from 'react';
import { Badge, Card, Timeline } from 'klf-design-system';

/** A load in flight: completed steps are gold, the current step is ringed. */
export const InTransit = () => (
  <div style={{ width: 340 }}>
    <Timeline
      steps={[
        { label: 'Dispatched', meta: 'MAR 12 · 05:41 CT', state: 'done' },
        { label: 'At pickup — Joliet, IL', meta: 'MAR 12 · 07:12 CT', state: 'done' },
        { label: 'Loaded, 42,000 lbs', meta: 'BOL 77-4419 · sealed', state: 'done' },
        { label: 'In transit', meta: '412 MI REMAINING · ETA MAR 13 04:10', state: 'current' },
        { label: 'Delivered — Dallas, TX', meta: 'APPT 06:00–08:00', state: 'todo' },
      ]}
    />
  </div>
);

/** Every step complete — the trail a settled load leaves behind. */
export const Delivered = () => (
  <div style={{ width: 340 }}>
    <Timeline
      steps={[
        { label: 'Dispatched', meta: 'MAR 08 · 04:50 CT', state: 'done' },
        { label: 'Loaded — Gary, IN', meta: 'MAR 08 · 06:35 CT', state: 'done' },
        { label: 'Delivered — Memphis, TN', meta: 'MAR 08 · 18:22 CT', state: 'done' },
        { label: 'POD uploaded', meta: '3 PAGES · CLEAN', state: 'done' },
        { label: 'Invoiced', meta: '$2,480.00 · NET 30', state: 'done' },
      ]}
    />
  </div>
);

/** A tender that has not moved yet: one step done, the rest ahead. */
export const NotStarted = () => (
  <div style={{ width: 340 }}>
    <Timeline
      steps={[
        { label: 'Tendered to Alvarez Trucking', meta: 'MAR 14 · 15:02 CT', state: 'done' },
        { label: 'Rate confirmation signed', state: 'current' },
        { label: 'Driver assigned', state: 'todo' },
        { label: 'At pickup — Chicago, IL', state: 'todo' },
        { label: 'Delivered — Dallas, TX', state: 'todo' },
      ]}
    />
  </div>
);

/** Carrier onboarding, with the trail set inside a Card. */
export const InCard = () => (
  <div style={{ width: 380 }}>
    <Card
      eyebrow="Carrier packet"
      title="Redline Freight LLC"
      icon="shield-check"
      footer={<Badge tone="warning">2 items outstanding</Badge>}
    >
      <Timeline
        style={{ marginTop: 'var(--space-2)' }}
        steps={[
          { label: 'W-9 received', meta: 'MC 771049 · DOT 3218804', state: 'done' },
          { label: 'Authority verified (FMCSA)', meta: 'ACTIVE SINCE 2019', state: 'done' },
          { label: 'Certificate of insurance', meta: 'AWAITING $100K CARGO', state: 'current' },
          { label: 'Carrier agreement signed', state: 'todo' },
        ]}
      />
    </Card>
  </div>
);

/** Steps with no `meta` — the compact form. */
export const LabelsOnly = () => (
  <div style={{ width: 280 }}>
    <Timeline
      steps={[
        { label: 'Load booked', state: 'done' },
        { label: 'Driver check call', state: 'done' },
        { label: 'At the receiver', state: 'current' },
        { label: 'Detention review', state: 'todo' },
      ]}
    />
  </div>
);
