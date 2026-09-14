import React from 'react';
import { Input } from 'klf-design-system';

const Field = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: 360 }}>{children}</div>
);

const Stack = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 360 }}>
    {children}
  </div>
);

/** Canonical usage: uppercase label over the control. */
export const Basic = () => (
  <Field>
    <Input label="Load number" placeholder="KLF-48120" />
  </Field>
);

/** A filled value plus helper text under the field. */
export const WithValueAndHint = () => (
  <Stack>
    <Input label="Origin" value="Chicago, IL 60638" hint="City and ZIP as it appears on the BOL" readOnly />
    <Input label="Destination" value="Dallas, TX 75201" hint="Receiver confirmed the appointment" readOnly />
  </Stack>
);

/** `icon` renders a Lucide glyph inside the field. */
export const WithIcon = () => (
  <Stack>
    <Input icon="search" label="Find a load" placeholder="Load number, lane or carrier" />
    <Input icon="map-pin" label="Pickup facility" value="Elwood Crossdock, Elwood, IL" readOnly />
    <Input icon="dollar-sign" label="Line haul rate" value="2,450.00" hint="All-in, excluding fuel surcharge" readOnly />
  </Stack>
);

/** `error` replaces the hint and recolours the border. */
export const ErrorState = () => (
  <Stack>
    <Input label="MC number" value="MC-19x447" error="MC number must be six or seven digits" readOnly />
    <Input icon="calendar" label="Pickup window" value="09/14/2026 22:00" error="Pickup window is in the past" readOnly />
  </Stack>
);

/** `textarea` swaps in a multi-line field. */
export const Textarea = () => (
  <Field>
    <Input
      textarea
      rows={6}
      label="Dispatch notes"
      defaultValue={
        'Reefer set to 34F continuous. Driver must check in at guard shack on Baseline Rd with the PO number.\nLumper paid by receiver. No overnight parking on site.'
      }
      hint="Shared with the driver in the KLF driver app"
    />
  </Field>
);

/** Disabled fields sit on the sunken surface. */
export const Disabled = () => (
  <Stack>
    <Input label="Carrier" value="Midwest Freight Lines, LLC" disabled />
    <Input icon="lock" label="USDOT number" value="2 884 610" hint="Locked after carrier onboarding" disabled />
  </Stack>
);
