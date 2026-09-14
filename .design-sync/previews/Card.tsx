import React from 'react';
import { Badge, Button, Card } from 'klf-design-system';

/** The default container: hairline border, 10px radius. */
export const Basic = () => (
  <div style={{ maxWidth: 360 }}>
    <Card
      eyebrow="Dry van"
      title="Chicago, IL → Dallas, TX"
      icon="truck"
    >
      968 miles, picking up Thursday 06:00. Live load, no-touch freight, 42,000 lbs.
    </Card>
  </div>
);

/** `stripe` marks a featured card with the brand gradient. */
export const Featured = () => (
  <div style={{ maxWidth: 360 }}>
    <Card
      stripe
      eyebrow="Featured lane"
      title="Power only, drop and hook"
      icon="container"
      footer={<Button size="sm">Request this lane</Button>}
    >
      Recurring Monday and Thursday departures out of the Joliet yard.
    </Card>
  </div>
);

/** `inverse` for the dark portal surfaces. */
export const Inverse = () => (
  <div style={{ maxWidth: 360 }}>
    <Card
      inverse
      eyebrow="Compliance"
      title="ELD inspection due"
      icon="shield-check"
      footer={<Badge tone="warning">Due in 6 days</Badge>}
    >
      Unit 214 is scheduled for its annual inspection at the Gary terminal.
    </Card>
  </div>
);

export const WithFooter = () => (
  <div style={{ maxWidth: 360 }}>
    <Card
      title="Rate confirmation #48120"
      footer={
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Button size="sm">Sign</Button>
          <Button size="sm" variant="outline">
            Download
          </Button>
        </div>
      }
    >
      Sent to Midwest Produce Co. on 12 March. Awaiting signature.
    </Card>
  </div>
);

/** `interactive` adds the hover lift and pointer cursor. */
export const Interactive = () => (
  <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: '1fr 1fr', maxWidth: 640 }}>
    <Card interactive icon="map-pin" title="Track a shipment">
      Live position and ETA for any active load.
    </Card>
    <Card interactive icon="receipt" title="Settlements">
      Weekly driver pay statements and deductions.
    </Card>
  </div>
);
