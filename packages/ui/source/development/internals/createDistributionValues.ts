import {DEFAULT_STOP, DEFAULT_STOPS} from './constants.js';

const MIN = 0;
const MAX = 100;

export function createDistributionValues(lightness: number, stop: number = DEFAULT_STOP) {
  let stops: number[] = [...DEFAULT_STOPS].sort() as unknown as number[];
  let newValues = [
    {stop: 0, value: MAX},
    {stop, value: lightness},
    {stop: 1000, value: MIN},
  ];
  let stopIndex = stops.indexOf(stop);
  let firstHalf = stops.slice(0, stopIndex + 1);
  let secondHalf = stops.slice(stopIndex);

  for (let stopValue of firstHalf) {
    if (stopValue !== 0 && stopValue !== stop) {
      let percentage = (stopValue - 0) / (stop - 0);
      let value = MAX - percentage * (MAX - lightness);

      newValues.push({stop: stopValue, value: Math.round(value)});
    }
  }

  for (let stopValue of secondHalf) {
    if (stopValue !== 1000 && stopValue !== stop) {
      let percentage = (stopValue - stop) / (1000 - stop);
      let value = lightness - percentage * (lightness - MIN);

      newValues.push({stop: stopValue, value: Math.round(value)});
    }
  }

  newValues.sort((a, b) => a.stop - b.stop);

  return newValues;
}
