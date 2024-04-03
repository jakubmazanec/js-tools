import {oklch} from 'culori';

import {isHex} from './isHex.js';
import {round} from './round.js';

export function createDisplayColor(hexColor: string, alphaPlaceholder?: boolean): string | null {
  if (!hexColor || !isHex(hexColor)) {
    return null;
  }

  let display = null;
  let oklchColor = oklch(hexColor);

  if (!oklchColor) {
    throw new Error(`Couldn't convert "${hexColor}" to OKLCH!`);
  }

  let {l, c, h = 0} = oklchColor;

  display = `oklch(${[
    `${round(l * 100, 2)}%`,
    round(c, 3),
    round(h, 2),
    `/`,
    alphaPlaceholder ? `<alpha-value>` : 1,
  ].join(` `)})`;

  return display;
}
