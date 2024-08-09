import {DEFAULT_STOP, DEFAULT_STOPS} from './constants.js';

export function createHueScale(tweak = 0, stop: number = DEFAULT_STOP) {
  let stops: number[] = DEFAULT_STOPS as unknown as number[];
  let index = stops.indexOf(stop);

  if (index === -1) {
    throw new Error(`Invalid parameter value: ${stop}`);
  }

  return stops.map((stop) => {
    let diff = Math.abs(stops.indexOf(stop) - index);
    let tweakValue = tweak ? diff * tweak : 0;

    return {stop, tweak: tweakValue};
  });
}
