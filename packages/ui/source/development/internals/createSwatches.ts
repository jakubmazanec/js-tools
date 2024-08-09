import {clamp} from './clamp.js';
import {createDistributionValues} from './createDistributionValues.js';
import {createHueScale} from './createHueScale.js';
import {createSaturationScale} from './createSaturationScale.js';
import {hexToHsl} from './hexToHsl.js';
import {hslToHex} from './hslToHex.js';
import {type PaletteConfig} from './PaletteConfig.js';
import {unsignedModulo} from './unsignedModulo.js';

export function createSwatches(palette: PaletteConfig) {
  let hueScale = createHueScale(palette.h, palette.valueStop);
  let saturationScale = createSaturationScale(palette.s, palette.valueStop);
  let {h, s, l} = hexToHsl(palette.value);
  let distributionScale = createDistributionValues(l, palette.valueStop);

  let swatches = hueScale.map(({stop}, stopIndex) => {
    let newH = unsignedModulo(h + hueScale[stopIndex]!.tweak, 360);
    let newS = clamp(s + saturationScale[stopIndex]!.tweak, 0, 100);
    let newL = clamp(distributionScale[stopIndex]!.value, 0.1, 99.9); // this is to make sure the first two or last two swatches (the first being total white and the last being total black) aren't the same lightness
    let newHex = hslToHex(newH, newS, newL);

    return {
      stop,
      hex: stop === palette.valueStop ? palette.value.toUpperCase() : newHex.toUpperCase(),
      h: newH,
      hScale: ((unsignedModulo(hueScale[stopIndex]!.tweak + 180, 360) - 180) / 180) * 50,
      s: newS,
      sScale: newS - 50,
      l: newL,
    };
  });

  return swatches;
}
