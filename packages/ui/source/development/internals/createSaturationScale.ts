import {DEFAULT_STOP, DEFAULT_STOPS} from './constants.js';

export function createSaturationScale(tweak = 0, stop: number = DEFAULT_STOP) {
  let stops: number[] = DEFAULT_STOPS as unknown as number[];
  let index = stops.indexOf(stop);

  if (index === -1) {
    throw new Error(`Invalid key value: ${stop}`);
  }

  return stops.map((stop) => {
    let diff = Math.abs(stops.indexOf(stop) - index);
    let tweakValue = tweak ? Math.round((diff + 1) * tweak * (1 + diff / 10)) : 0;

    if (tweakValue > 100) {
      return {stop, tweak: 100};
    }

    return {stop, tweak: tweakValue};
  });
}
