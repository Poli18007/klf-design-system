import React from 'react';
import { LOGO_DATA } from './logo-data.js';

/* The KLF Group Inc lockup. Never redraw or retype it — always the supplied artwork.
 *
 * The brand artwork is a single full-colour lockup: the orange KLF monogram above a
 * charcoal "KLF GROUP INC" wordmark. The wordmark is dark, so the mark is built for
 * LIGHT surfaces — on the near-black portal chrome it loses contrast. Place it on
 * `--surface-card` / `--surface-page`, or supply a reversed cut before putting it on
 * a dark panel.
 *
 * `variant` is kept as the component's API, but the repo ships one cut of the
 * artwork today, so every variant resolves to it. Drop the other cuts into assets/
 * and extend SRC when they exist:
 *   lockup  — the complete mark, monogram + wordmark (what ships today).
 *   compact — monogram only, for tight chrome like a 76px header.
 *   dark    — reversed wordmark, for dark surfaces.
 */
const SRC = {
  lockup: 'assets/klf-logo.png',
  compact: 'assets/klf-logo.png',
  light: 'assets/klf-logo.png',
  dark: 'assets/klf-logo.png',
};

/* `basePath` switches from the inlined artwork to a hosted file, for apps that
 * serve their own copy of assets/. Without it the mark is self-contained, which
 * is what makes it render inside a preview card or a design with no asset
 * hosting at all. */
export function Logo({ variant = 'compact', height = 40, basePath = '', style, ...rest }) {
  return (
    <span {...rest} style={{ display: 'inline-flex', ...style }}>
      <img
        src={basePath ? basePath + (SRC[variant] || SRC.lockup) : LOGO_DATA}
        alt="KLF Group Inc"
        style={{ height, width: 'auto', display: 'block' }}
      />
    </span>
  );
}
