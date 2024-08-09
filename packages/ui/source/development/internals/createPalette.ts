import {DEFAULT_STOP, type DEFAULT_STOPS} from './constants.js';
import {createDisplayColor} from './createDisplayColor.js';
import {createSwatches} from './createSwatches.js';

export type CreatePaletteOptions<N extends string> = {
  name: N;
  swatches: Array<{hex: string; stop: number}>;
  hueShift: number;
  saturationShift: number;
};

export type CreatePaletteReturn<N extends string> = {
  [K in N]: {[J in (typeof DEFAULT_STOPS)[number]]: string};
};

export function createPalette<const N extends string>({
  name,
  swatches,
  hueShift,
  saturationShift,
}: CreatePaletteOptions<N>): CreatePaletteReturn<N> {
  let defaultSwatch = swatches.find((swatch) => swatch.stop === DEFAULT_STOP);

  if (!defaultSwatch) {
    throw new Error(`Swatches are missing color for stop "${DEFAULT_STOP}"!`);
  }

  let allSwatches = createSwatches({
    value: defaultSwatch.hex,
    valueStop: DEFAULT_STOP,
    h: hueShift,
    s: saturationShift,
  });
  let palette = {};

  allSwatches
    .filter((swatch) => ![0, 1000].includes(swatch.stop))
    .forEach((newSwatch) => {
      let existingSwatch = swatches.find((swatch) => swatch.stop === newSwatch.stop);

      if (existingSwatch) {
        Object.assign(palette, {
          [existingSwatch.stop]: createDisplayColor(existingSwatch.hex, true),
        });
      } else {
        Object.assign(palette, {[newSwatch.stop]: createDisplayColor(newSwatch.hex, true)});
      }
    });

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- false positive
  return {
    [name]: palette,
  } as CreatePaletteReturn<N>;
}
