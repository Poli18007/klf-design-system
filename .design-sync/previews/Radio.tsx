import React from 'react';
import { Radio } from 'klf-design-system';

const Stack = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 380 }}>
    {children}
  </div>
);

/** Selected is a black dot in a black ring; the rest stay outlined. */
export const Basic = () => (
  <Stack>
    <Radio name="klf-equipment" label="Dry van" checked />
    <Radio name="klf-equipment" label="Reefer" />
    <Radio name="klf-equipment" label="Flatbed" />
  </Stack>
);

/** One choice per group, with hints explaining the trade-off. */
export const TenderMethod = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      maxWidth: 400,
      padding: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <span style={{ fontSize: 'var(--text-3xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
      How should this load be tendered?
    </span>
    <Radio name="klf-tender" label="Direct tender" hint="Goes to Midwest Freight Lines only" checked />
    <Radio name="klf-tender" label="Routing guide waterfall" hint="Offers to each contracted carrier in rate order" />
    <Radio name="klf-tender" label="Post to the load board" hint="Open to any carrier with active authority" />
  </div>
);

/** A horizontal group for a short set of options. */
export const InlineGroup = () => (
  <div style={{ display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
    <Radio name="klf-rate-type" label="Flat rate" checked />
    <Radio name="klf-rate-type" label="Per mile" />
    <Radio name="klf-rate-type" label="Spot quote" />
  </div>
);

/** Disabled options the dispatcher cannot pick. */
export const Disabled = () => (
  <Stack>
    <Radio name="klf-payment" label="Quick pay — 2% fee" hint="Funds in 24 hours" checked disabled />
    <Radio name="klf-payment" label="Standard net 30" hint="Unavailable until the carrier packet is signed" disabled />
  </Stack>
);
