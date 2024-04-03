import {type ComponentThemeDefinition} from './ComponentThemeDefinition.js';
import {type ComponentThemeDefinitionVariants} from './ComponentThemeDefinitionVariants.js';

export type ComponentThemeProps<D extends ComponentThemeDefinition | undefined> =
  D extends ComponentThemeDefinition ?
    D['variants'] extends ComponentThemeDefinitionVariants ?
      {
        [J in keyof D['variants']]: D['variants'][J][number];
      }
    : NonNullable<unknown>
  : NonNullable<unknown>;
