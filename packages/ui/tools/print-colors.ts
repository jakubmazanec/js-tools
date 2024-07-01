import {formatHex, parse} from 'culori';

import {createTailwindConfig} from '../source/development.js';
import {DEFAULT_STOPS} from '../source/development/internals/constants.js';

console.log(
  JSON.stringify(
    (() => {
      let tailwindConfigColors = createTailwindConfig().theme?.colors;

      let result = {
        name: 'Custom palette',
        hues: [] as unknown[],
        tones: DEFAULT_STOPS.filter((stop) => stop !== 0 && stop !== 1000),
      };

      if (!tailwindConfigColors) {
        return result;
      }

      for (let key of Object.keys(tailwindConfigColors).filter(
        (key) => typeof (tailwindConfigColors as Record<string, object | string>)[key] === 'object',
      )) {
        result.hues.push({
          name: key,
          colors: Object.values((tailwindConfigColors as Record<string, object>)[key]!)
            .map((value) => (value as string).replace('<alpha-value>', '100'))
            .map(parse)
            .map(formatHex),
        });
      }

      return result;
    })(),
  ),
);
