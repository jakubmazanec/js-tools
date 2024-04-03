import {useContext} from 'react';

import {type Theme} from '../Theme.js';
import {type ClassName} from './ClassName.js';
import {type ComponentTheme} from './ComponentTheme.js';
import {type ComponentThemeDefinition} from './ComponentThemeDefinition.js';
import {type ComponentThemeDefinitionElements} from './ComponentThemeDefinitionElements.js';
import {type ComponentThemeDefinitionVariants} from './ComponentThemeDefinitionVariants.js';
import {type ComponentThemeProps} from './ComponentThemeProps.js';
import {createUseComponentThemeReturn} from './createUseComponentThemeReturn.js';
import {themeContext} from './themeContext.js';
import {type UseComponentTheme} from './UseComponentTheme.js';

export function createComponentTheme<
  const N extends string,
  const D extends ComponentThemeDefinition | undefined = undefined,
>(themeName: N, themeDefinition?: NonNullable<D>): UseComponentTheme<N, D> {
  let useComponentTheme = (themeProps?: ComponentThemeProps<D>) => {
    let theme = useContext(themeContext);

    if (!theme) {
      throw new Error('No theme was found!');
    }

    let componentTheme = theme[themeName as keyof Theme] as unknown as
      | ComponentTheme<{
          variants: ComponentThemeDefinitionVariants;
          elements: ComponentThemeDefinitionElements;
        }>
      | ComponentTheme<{variants: ComponentThemeDefinitionVariants}>
      | undefined;

    if (!componentTheme) {
      throw new Error(`Theme for component "${themeName}" wasn't found!`);
    }

    let hasElements = Boolean(themeDefinition?.elements);

    if (!hasElements) {
      return createUseComponentThemeReturn(
        componentTheme as
          | ComponentTheme<{variants: ComponentThemeDefinitionVariants}>
          | ComponentTheme<undefined>,
        themeProps,
      );
    }

    let getClassNames: Record<string, (...args: ClassName[]) => string> = {};

    for (let element of themeDefinition?.elements ?? []) {
      getClassNames[element] = createUseComponentThemeReturn(
        componentTheme as
          | ComponentTheme<{variants: ComponentThemeDefinitionVariants}>
          | ComponentTheme<undefined>,
        themeProps,
        element,
      );
    }

    return getClassNames;
  };

  (useComponentTheme as UseComponentTheme<N, D>).themeDefinition = themeDefinition;
  (useComponentTheme as UseComponentTheme<N, D>).componentThemeName = themeName;

  return useComponentTheme as UseComponentTheme<N, D>;
}
