import {extendTailwindMerge, twMerge} from 'tailwind-merge';
import {type Config as TailwindConfig} from 'tailwindcss';

const THEME_SCALES = [
  'colors',
  'spacing',
  'blur',
  'brightness',
  'borderColor',
  'borderRadius',
  'borderSpacing',
  'borderWidth',
  'contrast',
  'grayscale',
  'hueRotate',
  'invert',
  'gap',
  'gradientColorStops',
  'gradientColorStopPositions',
  'inset',
  'margin',
  'opacity',
  'padding',
  'saturate',
  'scale',
  'sepia',
  'skew',
  'space',
  'translate',
];

export function createTailwindMerge(tailwindConfig: TailwindConfig) {
  if (!tailwindConfig.theme) {
    return twMerge;
  }

  let tailwindMergeConfig: Parameters<typeof extendTailwindMerge>[0] = {
    override: {theme: {}},
    extend: {theme: {}},
  };

  for (let scale of THEME_SCALES) {
    if (!tailwindMergeConfig.override?.theme || !tailwindMergeConfig.extend?.theme) {
      throw new Error('Creating Tailwind merge failed!');
    }

    if (tailwindConfig.theme[scale]) {
      let tailwindConfigScale = tailwindConfig.theme[scale] as Record<
        string,
        Record<string, string | unknown> | unknown
      >;
      let keys = Object.keys(tailwindConfigScale);
      let combinedKeys = [];

      for (let key of keys) {
        if (
          tailwindConfigScale[key] !== undefined &&
          tailwindConfigScale[key] !== null &&
          typeof tailwindConfigScale[key] === 'object'
        ) {
          combinedKeys.push(
            ...Object.keys(tailwindConfigScale[key] as object)
              .filter((value) => value !== 'DEFAULT')
              .map((value) => `${key}-${value}`),
          );
        } else {
          combinedKeys.push(key);
        }
      }

      tailwindMergeConfig.override.theme[scale] = combinedKeys;
    } else if (tailwindConfig.theme.extend?.[scale]) {
      let tailwindConfigScale = tailwindConfig.theme.extend[scale] as Record<
        string,
        Record<string, string | unknown> | unknown
      >;
      let keys = Object.keys(tailwindConfigScale);
      let combinedKeys = [];

      for (let key of keys) {
        if (
          tailwindConfigScale[key] !== undefined &&
          tailwindConfigScale[key] !== null &&
          typeof tailwindConfigScale[key] === 'object'
        ) {
          combinedKeys.push(
            ...Object.keys(tailwindConfigScale[key] as object)
              .filter((value) => value !== 'DEFAULT')
              .map((value) => `${key}-${value}`),
          );
        } else {
          combinedKeys.push(key);
        }
      }

      tailwindMergeConfig.extend.theme[scale] = combinedKeys;
    }
  }

  return extendTailwindMerge(tailwindMergeConfig);
}
