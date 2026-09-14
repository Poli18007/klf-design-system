import React from 'react';
import { Badge, DataTable, Tag } from 'klf-design-system';

const COLUMNS = [
  { key: 'load', label: 'Load', mono: true, strong: true },
  { key: 'lane', label: 'Lane' },
  { key: 'equipment', label: 'Equipment' },
  { key: 'pickup', label: 'Pickup', mono: true },
  { key: 'rate', label: 'Rate', mono: true, align: 'right' as const },
];

const ROWS = [
  { id: 1, load: 'KLF-48120', lane: 'Chicago, IL → Dallas, TX', equipment: 'Dry van', pickup: '03/12 06:00', rate: '$2,840' },
  { id: 2, load: 'KLF-48121', lane: 'Joliet, IL → Kansas City, MO', equipment: 'Reefer', pickup: '03/12 14:30', rate: '$1,975' },
  { id: 3, load: 'KLF-48122', lane: 'Gary, IN → Columbus, OH', equipment: 'Power only', pickup: '03/13 08:15', rate: '$1,240' },
  { id: 4, load: 'KLF-48123', lane: 'Dallas, TX → Memphis, TN', equipment: 'Dry van', pickup: '03/14 07:00', rate: '$2,110' },
];

/** The dense load board: mono figures, uppercase header, hairline row rules. */
export const LoadBoard = () => <DataTable columns={COLUMNS} rows={ROWS} />;

/** A `render` function puts any component in a cell. */
export const WithStatusColumn = () => (
  <DataTable
    columns={[
      { key: 'load', label: 'Load', mono: true, strong: true },
      { key: 'lane', label: 'Lane' },
      {
        key: 'status',
        label: 'Status',
        render: (row: Record<string, any>) => <Badge tone={row.tone} dot>{row.status}</Badge>,
      },
      { key: 'driver', label: 'Driver' },
      { key: 'eta', label: 'ETA', mono: true, align: 'right' as const },
    ]}
    rows={[
      { id: 1, load: 'KLF-48118', lane: 'Chicago, IL → Atlanta, GA', status: 'In transit', tone: 'info', driver: 'R. Alvarez', eta: '03/12 18:40' },
      { id: 2, load: 'KLF-48119', lane: 'Detroit, MI → Nashville, TN', status: 'Delivered', tone: 'success', driver: 'T. Okafor', eta: '03/11 09:05' },
      { id: 3, load: 'KLF-48120', lane: 'Joliet, IL → Denver, CO', status: 'Detained', tone: 'danger', driver: 'S. Whitfield', eta: '03/13 11:20' },
    ]}
  />
);

/** Equipment tags inside a cell, and a clickable row. */
export const Interactive = () => (
  <DataTable
    onRowClick={() => {}}
    columns={[
      { key: 'carrier', label: 'Carrier', strong: true },
      { key: 'mc', label: 'MC #', mono: true },
      { key: 'equipment', label: 'Equipment', render: (row: Record<string, any>) => <Tag>{row.equipment}</Tag> },
      { key: 'lanes', label: 'Lanes', mono: true, align: 'right' as const },
    ]}
    rows={[
      { id: 1, carrier: 'Midwest Produce Co.', mc: 'MC-884201', equipment: 'Reefer', lanes: '12' },
      { id: 2, carrier: 'Great Lakes Freight', mc: 'MC-771903', equipment: 'Dry van', lanes: '8' },
      { id: 3, carrier: 'Prairie Haulers LLC', mc: 'MC-650118', equipment: 'Flatbed', lanes: '5' },
    ]}
  />
);
