import {hslToRgb} from './hslToRgb.js';

export function hslToHex(h: number, s: number, l: number) {
  let {r, g, b} = hslToRgb(h, s, l);

  let rHex = r.toString(16);
  let gHex = g.toString(16);
  let bHex = b.toString(16);

  if (rHex.length === 1) {
    rHex = `0${rHex}`;
  }

  if (gHex.length === 1) {
    gHex = `0${gHex}`;
  }

  if (bHex.length === 1) {
    bHex = `0${bHex}`;
  }

  return `#${rHex}${gHex}${bHex}`;
}
