# Building with the KLF Group design system

A freight/logistics system: dispatcher portal, load boards, driver-facing screens,
and the public marketing site. Brand orange `#F5820A` on near-black and cool greys.

## Setup — there is no provider

Import the components and load the stylesheet. That is the whole setup:

```jsx
import { Button, Card, DataTable } from 'klf-design-system';
import 'klf-design-system/styles.css';
```

Components read every colour, size and font from CSS custom properties, so the only
hard requirement is that `styles.css` (or the token files it imports) is on the page.
**There is no ThemeProvider and no context** — a component rendered without the
stylesheet still mounts, it just renders unstyled, which is the failure to watch for.

## The styling idiom: inline styles + CSS custom properties, never class names

This system has **no utility classes and no CSS modules**. Components style themselves
with inline `style` objects whose values are `var(--token)` references. Style your own
layout glue the same way — never invent class names, and never hardcode a hex colour:

```jsx
<div style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-6)',
              background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-card)' }}>
```

Every component takes `style`, spread **last**, so it wins over the component's own
values. Use it for layout (width, margin, grid placement), not to repaint the component.

### The token vocabulary

| Family | Names |
|---|---|
| Brand | `--bsg-gold` (the orange), `--bsg-black`, `--bsg-white`, `--bsg-charcoal` |
| Orange ramp | `--gold-100` … `--gold-800` (`--gold-400` is the brand orange) |
| Neutrals | `--neutral-0` … `--neutral-1000` (0 = black, 1000 = white) |
| Surfaces | `--surface-page`, `--surface-card`, `--surface-sunken`, `--surface-inverse`, `--surface-accent` |
| Text | `--text-heading`, `--text-body`, `--text-muted`, `--text-inverse`, `--text-on-accent`, `--text-accent` |
| Borders | `--border-subtle`, `--border-default`, `--border-strong`, `--border-accent` |
| Status | `--status-success`, `--status-warning`, `--status-danger`, `--status-info`, each with a `-soft` fill |
| Spacing | `--space-0,1,2,3,4,5,6,8,10,12,16,20,24,32` |
| Type size | `--text-3xs` … `--text-6xl` |
| Type face | `--font-display` (headings), `--font-body`, `--font-mono` (all figures: rates, IDs, times) |
| Weight / tracking | `--weight-regular…black`, `--tracking-tight…widest`, `--leading-tight…relaxed` |
| Radii | `--radius-xs,sm,md,lg,xl`, plus `--radius-control`, `--radius-card`, `--radius-panel`, `--radius-pill` |
| Elevation | `--shadow-xs,sm,md,lg`, `--shadow-gold`, `--ring-focus` |
| Controls | `--control-h-sm,md,lg`, `--transition-control`, `--overlay-scrim`, `--stripe-h`, `--gradient-gold` |

### House rules the components already encode

- **Orange is the single commit action per view.** `<Button variant="primary">` is the
  one gold button on screen; everything else is `solid`, `outline` or `ghost`.
- **Figures are mono.** Load numbers, MC/DOT numbers, rates, ETAs, timestamps and
  mileage use `--font-mono` — `DataTable` does it per column via `mono: true`.
- **Labels are uppercase** with wide tracking: buttons, table headers, eyebrows, field
  labels. Body copy is not.
- **Dark surfaces are a scope, not a theme.** `Card`, `StatTile`, `Tabs` and `Button`
  take `inverse` for use on `--bsg-black`; `SideNav` and `Toast` are dark by design.
  Wrapping a region in `className="bsg-dark"` re-points the surface/text tokens.

## Icons

`<Icon name="truck" />` takes a **Lucide** name. 75 freight-relevant glyphs are inlined
in the bundle (truck, container, package, warehouse, route, map-pin, fuel, gauge,
weight, snowflake, clipboard-check, file-text, receipt, shield-check, dollar-sign,
circle-check, triangle-alert, octagon-alert, and the usual chrome). `Button`, `Card`,
`Badge`, `StatTile`, `Input` and `IconButton` all take an `icon` prop that takes the
same names. Any other Lucide name falls back to a CDN fetch and will not render
offline, so prefer the inlined set.

## Where the truth lives

- `_ds/<folder>/styles.css` and the `tokens/*.css` it imports — the real token values.
  Read them before choosing a colour; they are short.
- `components/<group>/<Name>/<Name>.d.ts` — the prop contract for each component.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage.

## A worked example

```jsx
<div style={{ display: 'grid', gap: 'var(--space-5)', padding: 'var(--space-6)',
              background: 'var(--surface-page)' }}>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)',
                 color: 'var(--text-heading)', margin: 0 }}>Active loads</h2>
    <Button variant="primary" icon="plus">Add load</Button>
  </div>

  <DataTable
    columns={[
      { key: 'load', label: 'Load', mono: true, strong: true },
      { key: 'lane', label: 'Lane' },
      { key: 'status', label: 'Status', render: (r) => <Badge tone={r.tone} dot>{r.status}</Badge> },
      { key: 'rate', label: 'Rate', mono: true, align: 'right' },
    ]}
    rows={[{ id: 1, load: 'KLF-48120', lane: 'Chicago, IL → Dallas, TX',
             status: 'In transit', tone: 'info', rate: '$2,840' }]}
  />
</div>
```
