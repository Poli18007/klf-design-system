import React from 'react';
import { Button } from 'klf-design-system';

const Row = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      padding: dark ? 'var(--space-5)' : 0,
      background: dark ? 'var(--bsg-black)' : undefined,
      borderRadius: dark ? 'var(--radius-card)' : undefined,
    }}
  >
    {children}
  </div>
);

/** The four variants. Orange is the one commit action per view. */
export const Variants = () => (
  <Row>
    <Button variant="primary">Book this load</Button>
    <Button variant="solid">Save draft</Button>
    <Button variant="outline">View details</Button>
    <Button variant="ghost">Cancel</Button>
  </Row>
);

export const Sizes = () => (
  <Row>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </Row>
);

export const WithIcons = () => (
  <Row>
    <Button icon="truck">Dispatch driver</Button>
    <Button variant="outline" icon="file-text">
      Rate confirmation
    </Button>
    <Button variant="solid" iconAfter="arrow-right">
      Continue
    </Button>
  </Row>
);

/** `inverse` recolours outline and ghost for dark surfaces. */
export const OnDarkSurface = () => (
  <Row dark>
    <Button variant="primary">Accept load</Button>
    <Button variant="outline" inverse>
      Decline
    </Button>
    <Button variant="ghost" inverse>
      Ask a question
    </Button>
  </Row>
);

export const Disabled = () => (
  <Row>
    <Button disabled>Book this load</Button>
    <Button variant="outline" disabled>
      View details
    </Button>
  </Row>
);

export const FullWidth = () => (
  <div style={{ maxWidth: 320 }}>
    <Button fullWidth icon="check">
      Confirm pickup
    </Button>
  </div>
);
