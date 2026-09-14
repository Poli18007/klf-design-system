import React from 'react';
import { Toast } from 'klf-design-system';

const Stack = ({ children }: { children?: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: 400 }}>{children}</div>
);

/** The default tone: a dispatch action that landed. */
export const Success = () => (
  <Toast tone="success" title="Load booked" message="KLF-48120 assigned to R. Alvarez, Unit 214. Rate confirmation sent." />
);

/** `info` for background work the dispatcher did not trigger. */
export const Info = () => (
  <Toast
    tone="info"
    title="ELD position updated"
    message="Unit 306 checked in near Texarkana, AR. ETA to Dallas moved up 24 minutes."
  />
);

/** `warning` and `danger` carry the tone-coloured left rule. */
export const WarningAndDanger = () => (
  <Stack>
    <Toast
      tone="warning"
      title="Detention started"
      message="KLF-47905 has been at Midwest Produce Co. for 2h 04m. Billing begins at 2h 30m."
    />
    <Toast
      tone="danger"
      title="Carrier authority revoked"
      message="Redline Freight LLC (MC 771049) failed the FMCSA check. Two tendered loads need re-covering."
    />
  </Stack>
);

/** `onClose` renders the dismiss control. */
export const Dismissible = () => (
  <Toast
    tone="success"
    title="Rate confirmation signed"
    message="Alvarez Trucking signed KLF-48120 at 09:14 CT."
    onClose={() => {}}
  />
);

/** How a run of toasts stacks in the bottom-right corner. */
export const StackedFeed = () => (
  <Stack>
    <Toast tone="success" title="POD uploaded" message="KLF-47812 · 3 pages · Dallas, TX" onClose={() => {}} />
    <Toast tone="info" title="New lane posted" message="Joliet, IL → Memphis, TN · Flatbed · $2,480 all-in" onClose={() => {}} />
    <Toast tone="warning" title="Reefer temp drift" message="Unit 118 reading 39°F against a 34°F setpoint." onClose={() => {}} />
  </Stack>
);

/** Title-only, for the terse confirmations. */
export const TitleOnly = () => <Toast tone="success" title="Check call logged — 14:20 CT" />;
