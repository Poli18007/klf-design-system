import React from 'react';
import { Checkbox } from 'klf-design-system';

const Stack = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 380 }}>
    {children}
  </div>
);

/** Checked is black with a white check; unchecked is an outlined box. */
export const Basic = () => (
  <Stack>
    <Checkbox label="Hazmat placarded" checked />
    <Checkbox label="Team drivers required" />
  </Stack>
);

/** A multi-select group of load requirements. */
export const RequirementGroup = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      maxWidth: 380,
      padding: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <span style={{ fontSize: 'var(--text-3xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
      Load requirements
    </span>
    <Checkbox label="Driver assist unload" checked />
    <Checkbox label="Pallet exchange" checked />
    <Checkbox label="TWIC card required" />
    <Checkbox label="Tanker endorsement" />
  </div>
);

/** `hint` adds a second line under the label. */
export const WithHints = () => (
  <Stack>
    <Checkbox
      label="Require temperature download"
      hint="Driver uploads the reefer printout at delivery"
      checked
    />
    <Checkbox
      label="Allow carrier to relay this load"
      hint="Trailer may change hands at a relay terminal"
    />
  </Stack>
);

/** Disabled in both states, at 45% opacity. */
export const Disabled = () => (
  <Stack>
    <Checkbox label="Carrier insurance on file" hint="Verified by compliance on 08/22/2026" checked disabled />
    <Checkbox label="Smartway certified" hint="Not reported by this carrier" disabled />
  </Stack>
);
