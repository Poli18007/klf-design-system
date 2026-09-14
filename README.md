# KLF Group Inc — Design System

20 React components and the CSS custom-property token set behind the KLF Group
freight site, dispatcher portal and driver app. Extracted from the `klf-group`
repo so it can be imported on its own, and packaged for **Claude Design**
(claude.ai/design) so design work is built out of these real components rather
than generic ones.

## What is here

| Path | What it is |
|---|---|
| `components/` | The 20 components, plain JSX, grouped by `core` / `data` / `feedback` / `forms` / `navigation` |
| `tokens/` | The design tokens as CSS custom properties — colours, type, spacing, radii, elevation, motion |
| `index.js` | Barrel entry: every component, one import |
| `styles.css` | Imports every token file; the one stylesheet a consumer needs |
| `assets/` | Brand artwork (the KLF lockup) |
| `dist/global.css` | Generated: the element resets and keyframes the components rely on |
| `components/core/icon-data.js` | Generated: the Lucide glyphs, inlined as data URIs |
| `.design-sync/` | Claude Design sync inputs — config, per-component preview stories, notes |

## Components

**core** — Badge, Button, Card, Icon, IconButton, Logo, StatTile, Tag
**data** — DataTable, Timeline
**feedback** — Dialog, Toast, Tooltip
**forms** — Checkbox, Input, Radio, Select, Switch
**navigation** — SideNav, Tabs

## Using it in an app

```jsx
import { Button, Card, DataTable } from 'klf-design-system';
import 'klf-design-system/styles.css';

<Card stripe eyebrow="Dry van" title="Chicago, IL → Dallas, TX" icon="truck">
  968 miles, picking up Thursday 06:00.
</Card>
```

There is no provider or theme wrapper — components read their colours straight
from the CSS custom properties, so the only requirement is that `styles.css`
(or the token files it imports) is loaded on the page.

### Styling idiom

Components are styled with **inline styles driven by CSS custom properties**, not
class names. To style your own layout around them, use the same tokens:

```jsx
<div style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-6)',
              background: 'var(--surface-card)', borderRadius: 'var(--radius-card)' }}>
```

Every component also takes a `style` prop, which is spread last and wins.

### Dark surfaces

The palette ships a light default and a `.bsg-dark` scope. Several components take
an `inverse` prop (Card, StatTile, Tabs, Button) that recolours them for the black
portal chrome; `SideNav` and `Toast` are dark by design.

## Regenerating the two build artifacts

```sh
node build-icons.mjs   # components/core/icon-data.js — inlined Lucide glyphs
node build-css.mjs     # dist/global.css — resets + keyframes
```

Both are committed, so a plain `npm install` consumer needs neither. Re-run
`build-icons.mjs` after adding an icon name to its list.

## Syncing to Claude Design

`.design-sync/` holds everything the `/design-sync` skill needs: `config.json`
(component map, prop contracts, card layout overrides), `previews/` (the story
file behind each component's preview card) and `NOTES.md` (gotchas worth knowing
before the next sync). Re-running the sync rebuilds `ds-bundle/` and uploads it.
