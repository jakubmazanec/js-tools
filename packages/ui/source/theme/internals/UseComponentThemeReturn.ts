import {type ClassName} from './ClassName.js';
import {type ComponentThemeDefinition} from './ComponentThemeDefinition.js';
import {type ComponentThemeDefinitionElements} from './ComponentThemeDefinitionElements.js';

export type UseComponentThemeReturn<D extends ComponentThemeDefinition | undefined> =
  D extends ComponentThemeDefinition ?
    D['elements'] extends ComponentThemeDefinitionElements ?
      {
        [K in D['elements'][number]]: (
          baseClassName?: ClassName,
          overrideClassName?: ClassName,
        ) => string;
      }
    : (baseClassName?: ClassName, overrideClassName?: ClassName) => string
  : (baseClassName?: ClassName, overrideClassName?: ClassName) => string;
