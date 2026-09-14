import React from 'react';
import { Badge, Button, SideNav, Tabs } from 'klf-design-system';

const Shell = ({ children }: { children?: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      height: 420,
      width: 720,
      background: 'var(--surface-page)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);

const Pane = ({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) => (
  <div style={{ flex: 1, padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
    <span
      style={{
        fontSize: 'var(--text-xs)',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
      }}
    >
      {eyebrow}
    </span>
    <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-xl)', color: 'var(--text-heading)' }}>
      {title}
    </h3>
    {children}
  </div>
);

/** The dispatcher portal rail: icons, counts, and the gold active rule. */
export const DispatchRail = () => (
  <Shell>
    <SideNav
      value="loads"
      header={
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'var(--text-sm)',
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            color: 'var(--bsg-white)',
          }}
        >
          KLF Dispatch
        </span>
      }
      items={[
        { value: 'board', label: 'Load board', icon: 'clipboard-list', count: 34 },
        { value: 'loads', label: 'Active loads', icon: 'truck', count: 12 },
        { value: 'lanes', label: 'Lanes', icon: 'route' },
        { value: 'carriers', label: 'Carriers', icon: 'users', count: 218 },
        { value: 'drivers', label: 'Drivers', icon: 'user', count: 46 },
        { value: 'billing', label: 'Billing', icon: 'receipt', count: 7 },
      ]}
    />
    <Pane eyebrow="Active loads" title="12 loads in transit">
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', maxWidth: 380 }}>
        Chicago, IL → Dallas, TX departed at 07:12 CT. Three reefers are holding setpoint; one flatbed is waiting on a
        tarp inspection in Gary, IN.
      </span>
    </Pane>
  </Shell>
);

/** With a `footer` for the account and sign-out row. */
export const WithFooter = () => (
  <Shell>
    <SideNav
      value="compliance"
      header={<Badge tone="gold" icon="shield-check">Safety portal</Badge>}
      items={[
        { value: 'compliance', label: 'ELD compliance', icon: 'gauge', count: 3 },
        { value: 'inspections', label: 'Inspections', icon: 'clipboard-check' },
        { value: 'documents', label: 'Documents', icon: 'file-check', count: 19 },
        { value: 'insurance', label: 'Insurance', icon: 'lock' },
        { value: 'incidents', label: 'Incidents', icon: 'triangle-alert', count: 1 },
      ]}
      footer={
        <Button size="sm" variant="ghost" inverse icon="log-out" fullWidth>
          Sign out
        </Button>
      }
    />
    <Pane eyebrow="ELD compliance" title="3 hours-of-service flags">
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', maxWidth: 380 }}>
        Units 214, 118 and 306 each logged a form-and-manner error this week. Unassigned drive time must be cleared
        within 14 days of the log date.
      </span>
    </Pane>
  </Shell>
);

/** Plain string items, no icons or counts. */
export const PlainItems = () => (
  <Shell>
    <SideNav
      value="Settlements"
      header={
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-sm)', color: 'var(--bsg-white)' }}>
          Carrier portal
        </span>
      }
      items={['Overview', 'My loads', 'Settlements', 'Documents', 'Payment method']}
    />
    <Pane eyebrow="Settlements" title="Week of 9 March">
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', maxWidth: 380 }}>
        Six loads settled for $14,210.00 net of a $312.00 fuel advance. Payment releases Friday on quick pay terms.
      </span>
    </Pane>
  </Shell>
);

/** Rail plus Tabs — how the two navigation levels sit together. */
export const WithContentTabs = () => (
  <Shell>
    <SideNav
      value="carriers"
      header={
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-sm)', color: 'var(--bsg-white)' }}>
          KLF Group
        </span>
      }
      items={[
        { value: 'board', label: 'Load board', icon: 'clipboard-list', count: 34 },
        { value: 'carriers', label: 'Carriers', icon: 'users', count: 218 },
        { value: 'map', label: 'Fleet map', icon: 'map' },
        { value: 'messages', label: 'Messages', icon: 'message-circle', count: 5 },
        { value: 'settings', label: 'Settings', icon: 'settings' },
      ]}
    />
    <div style={{ flex: 1, padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-xl)', color: 'var(--text-heading)' }}>
        Alvarez Trucking LLC
      </h3>
      <Tabs
        value="loads"
        tabs={[
          { value: 'profile', label: 'Profile' },
          { value: 'loads', label: 'Loads', count: 34 },
          { value: 'docs', label: 'Documents', count: 9 },
          { value: 'pay', label: 'Settlements' },
        ]}
      />
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', maxWidth: 360 }}>
        MC 884213 · DOT 2914477 · 18 power units. Hauling dry van and reefer out of the Joliet yard since 2021.
      </span>
    </div>
  </Shell>
);
