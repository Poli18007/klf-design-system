import React from 'react';
import { Badge, Button, Dialog, Input, Select, Timeline } from 'klf-design-system';

const Stage = ({ children }: { children?: React.ReactNode }) => (
  <div
    style={{
      position: 'relative',
      height: 420,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);

/** The canonical confirmation: a short question, two Buttons in the footer. */
export const Confirmation = () => (
  <Stage>
    <Dialog
      title="Tender KLF-48120 to Alvarez Trucking?"
      description="Chicago, IL → Dallas, TX · Dry van · Pickup Thu 06:00–10:00. The carrier is notified and the rate confirmation is sent for signature."
      footer={
        <>
          <Button size="sm" variant="ghost">
            Cancel
          </Button>
          <Button size="sm" icon="check">
            Tender load
          </Button>
        </>
      }
    />
  </Stage>
);

/** A destructive confirmation — `onClose` adds the close control. */
export const Destructive = () => (
  <Stage>
    <Dialog
      title="Cancel load KLF-47905?"
      description="Midwest Produce Co. will be notified and the lane returns to the open board."
      onClose={() => {}}
      footer={
        <>
          <Button size="sm" variant="outline">
            Keep load
          </Button>
          <Button size="sm" icon="trash-2">
            Cancel load
          </Button>
        </>
      }
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          padding: 'var(--space-3)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-control)',
        }}
      >
        <Badge tone="warning" icon="triangle-alert">
          Driver en route
        </Badge>
        <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>
          R. Alvarez is 42 miles from the shipper — TONU may apply.
        </span>
      </div>
    </Dialog>
  </Stage>
);

/** A short form in the body, at a wider `width`. */
export const ShortForm = () => (
  <Stage>
    <Dialog
      width={520}
      title="Assign a driver"
      description="Load KLF-48120 · Reefer · 42,000 lbs · Set to 34°F"
      onClose={() => {}}
      footer={
        <>
          <Button size="sm" variant="ghost">
            Back
          </Button>
          <Button size="sm" icon="truck">
            Assign
          </Button>
        </>
      }
    >
      <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
        <Select
          label="Driver"
          options={['R. Alvarez — Unit 214', 'D. Whitfield — Unit 118', 'T. Okafor — Unit 306']}
          hint="Only drivers with 11 hours of drive time remaining are listed."
        />
        <Input label="Dispatch note" placeholder="Gate code 4417, check in at door 12" icon="clipboard-list" />
      </div>
    </Dialog>
  </Stage>
);

/** Status detail: the dialog body carries another DS component. */
export const LoadStatus = () => (
  <Stage>
    <Dialog
      width={480}
      title="KLF-48120 status"
      description="Alvarez Trucking · MC 884213 · Unit 214"
      onClose={() => {}}
      footer={
        <>
          <Button size="sm" variant="outline" icon="file-text">
            Rate con
          </Button>
          <Button size="sm" icon="map-pin">
            Track
          </Button>
        </>
      }
    >
      <Timeline
        steps={[
          { label: 'Dispatched', meta: 'Mar 12 · 05:41 CT', state: 'done' },
          { label: 'Loaded at shipper', meta: 'Mar 12 · 08:26 CT', state: 'done' },
          { label: 'In transit', meta: '412 mi remaining · ETA Mar 13 04:10', state: 'current' },
          { label: 'Delivered', meta: 'Dallas, TX · appt 06:00', state: 'todo' },
        ]}
      />
    </Dialog>
  </Stage>
);
