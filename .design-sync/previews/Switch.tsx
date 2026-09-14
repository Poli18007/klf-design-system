import React from 'react';
import { Switch } from 'klf-design-system';

const Stack = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 380 }}>
    {children}
  </div>
);

/** Gold when on, neutral when off. */
export const OnAndOff = () => (
  <Stack>
    <Switch label="ELD tracking enabled" checked />
    <Switch label="Share driver phone with the shipper" />
  </Stack>
);

/** The toggle can stand alone when a nearby label already names it. */
export const Unlabelled = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
    <Switch checked />
    <Switch />
  </div>
);

/** A settings panel: each row flips one dispatch notification immediately. */
export const NotificationSettings = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxWidth: 420,
      padding: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <span style={{ fontSize: 'var(--text-3xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
      Dispatch alerts
    </span>
    <Switch label="Detention over 2 hours" checked />
    <Switch label="Missed pickup appointment" checked />
    <Switch label="Reefer temperature out of range" checked />
    <Switch label="Daily lane rate digest" />
  </div>
);

/** Disabled in both states, at 45% opacity. */
export const Disabled = () => (
  <Stack>
    <Switch label="Auto-tender to the routing guide" checked disabled />
    <Switch label="Allow carrier self-dispatch" disabled />
  </Stack>
);
