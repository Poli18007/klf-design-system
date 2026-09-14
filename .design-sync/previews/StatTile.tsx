import React from 'react';
import { StatTile } from 'klf-design-system';

const Grid = ({ children, cols = 3 }: { children?: React.ReactNode; cols?: number }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: 'var(--space-4)', maxWidth: 760 }}>
    {children}
  </div>
);

/** The canonical use: one metric from the dispatch dashboard. */
export const Basic = () => (
  <div style={{ maxWidth: 260 }}>
    <StatTile label="Loads in transit" value="128" icon="truck" />
  </div>
);

/** `delta` plus `deltaTone` — the change indicator against last week. */
export const Deltas = () => (
  <Grid>
    <StatTile label="On-time delivery" value="94.2%" delta="+2.1 pts" deltaTone="success" icon="clock" />
    <StatTile label="Avg. detention" value="1h 48m" delta="+14m" deltaTone="warning" icon="gauge" />
    <StatTile label="Deadhead miles" value="9,412" delta="-6.3%" deltaTone="danger" icon="route" />
  </Grid>
);

/** `icon` takes any Lucide name — mono figures keep the column aligned. */
export const WithIcons = () => (
  <Grid>
    <StatTile label="Open loads" value="42" icon="package" />
    <StatTile label="Active carriers" value="87" icon="users" />
    <StatTile label="Revenue per mile" value="$2.41" icon="dollar-sign" />
  </Grid>
);

/** `inverse` for the dark portal chrome — shown on the brand black panel. */
export const Inverse = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: 'var(--space-4)',
      padding: 'var(--space-5)',
      maxWidth: 560,
      background: 'var(--bsg-black)',
      borderRadius: 'var(--radius-card)',
    }}
  >
    <StatTile inverse label="Trucks rolling" value="61" delta="+4" deltaTone="success" icon="navigation" />
    <StatTile inverse label="HOS violations" value="2" delta="+1" deltaTone="danger" icon="shield-check" />
  </div>
);

/** In place: the metric strip at the top of the dispatcher dashboard. */
export const DashboardStrip = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 760 }}>
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
      Week of 9 March
    </span>
    <Grid cols={4}>
      <StatTile label="Loads booked" value="214" delta="+18" deltaTone="success" icon="clipboard-check" />
      <StatTile label="Covered" value="196" delta="92%" deltaTone="success" icon="truck" />
      <StatTile label="At risk" value="7" delta="+3" deltaTone="warning" icon="triangle-alert" />
      <StatTile label="Claims open" value="1" delta="-2" deltaTone="success" icon="file-text" />
    </Grid>
  </div>
);
