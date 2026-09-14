import React from 'react';
import { Select } from 'klf-design-system';

const Stack = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 360 }}>
    {children}
  </div>
);

const EQUIPMENT = ['Dry van 53\'', 'Reefer 53\'', 'Flatbed 48\'', 'Step deck', 'Power only'];

/** Canonical usage: plain string options. */
export const Basic = () => (
  <Stack>
    <Select label="Equipment" options={EQUIPMENT} defaultValue="Reefer 53'" />
  </Stack>
);

/** `{value, label}` pairs plus helper text. */
export const WithHint = () => (
  <Stack>
    <Select
      label="Assigned driver"
      options={[
        { value: 'd-104', label: 'Marcus Webb — Tractor 1142' },
        { value: 'd-118', label: 'Alicia Romero — Tractor 1187' },
        { value: 'd-131', label: 'Dwayne Foster — Tractor 1203' },
      ]}
      defaultValue="d-118"
      hint="Only drivers with available HOS are listed"
    />
    <Select
      label="Load status"
      options={[
        { value: 'tendered', label: 'Tendered' },
        { value: 'covered', label: 'Covered' },
        { value: 'in-transit', label: 'In transit' },
        { value: 'delivered', label: 'Delivered' },
      ]}
      defaultValue="in-transit"
      hint="Last tracking ping 14 minutes ago"
    />
  </Stack>
);

/** `error` recolours the border and replaces the hint. */
export const ErrorState = () => (
  <Stack>
    <Select
      label="Carrier"
      options={[
        { value: '', label: 'Select a carrier…' },
        { value: 'mfl', label: 'Midwest Freight Lines (MC-449120)' },
        { value: 'rrt', label: 'Red River Transport (MC-771034)' },
      ]}
      defaultValue=""
      error="Pick a carrier before tendering this load"
    />
    <Select
      label="Accessorial billing"
      options={['Detention', 'Lumper', 'Layover', 'TONU']}
      defaultValue="Layover"
      error="Layover is not approved on this customer contract"
    />
  </Stack>
);

/** Disabled select on the sunken surface. */
export const Disabled = () => (
  <Stack>
    <Select label="Lane" options={['Chicago, IL -> Dallas, TX']} disabled />
    <Select
      label="Billing terms"
      options={['Net 30', 'Net 45', 'Quick pay 2%']}
      defaultValue="Net 30"
      hint="Set on the customer record"
      disabled
    />
  </Stack>
);

/** Selects line up with each other in a dispatch filter bar. */
export const FilterRow = () => (
  <div
    style={{
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      padding: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <Select style={{ width: 180 }} label="Origin state" options={['Illinois', 'Texas', 'Georgia', 'Ohio']} defaultValue="Illinois" />
    <Select style={{ width: 180 }} label="Equipment" options={EQUIPMENT} defaultValue="Dry van 53'" />
    <Select style={{ width: 180 }} label="Pickup" options={['Today', 'Tomorrow', 'Next 7 days']} defaultValue="Next 7 days" />
  </div>
);
