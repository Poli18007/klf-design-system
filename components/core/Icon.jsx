import React from 'react';
import { ICON_DATA } from './icon-data.js';

const LUCIDE = 'https://unpkg.com/lucide-static@0.544.0/icons/';

/** Monochrome icon rendered from the Lucide static set, tinted with currentColor.
 *
 *  The common freight/dispatch glyphs are inlined by build-icons.mjs, so they
 *  render with no network at all. Any other Lucide name still resolves from the
 *  CDN — which is worth knowing, because that one will disappear wherever
 *  outside requests are blocked. Add it to build-icons.mjs to make it permanent. */
export function Icon({ name = 'truck', size = 20, strokeWidth, style, ...rest }) {
  const url = `url("${ICON_DATA[name] || LUCIDE + name + '.svg'}")`;
  return (
    <span
      aria-hidden="true"
      {...rest}
      style={{
        display: 'inline-block', width: size, height: size, flex: '0 0 auto',
        backgroundColor: 'currentColor',
        WebkitMaskImage: url, maskImage: url,
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center', maskPosition: 'center',
        WebkitMaskSize: 'contain', maskSize: 'contain',
        opacity: strokeWidth === 1 ? 0.8 : 1,
        ...style,
      }}
    />
  );
}
