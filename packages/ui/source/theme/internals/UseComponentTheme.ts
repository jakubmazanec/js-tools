import {type ComponentThemeDefinition} from './ComponentThemeDefinition.js';
import {type ComponentThemeDefinitionElements} from './ComponentThemeDefinitionElements.js';
import {type ComponentThemeDefinitionVariants} from './ComponentThemeDefinitionVariants.js';
import {type ComponentThemeProps} from './ComponentThemeProps.js';
import {type UseComponentThemeReturn} from './UseComponentThemeReturn.js';

export type UseComponentTheme<N extends string, D extends ComponentThemeDefinition | undefined> =
  D extends ComponentThemeDefinition ?
    D['variants'] extends ComponentThemeDefinitionVariants ?
      D['elements'] extends ComponentThemeDefinitionElements ?
        ((themeProps: ComponentThemeProps<D>) => UseComponentThemeReturn<D>) & {
          componentThemeName: N;
          themeDefinition: D;
        }
      : ((themeProps: ComponentThemeProps<D>) => UseComponentThemeReturn<D>) & {
          componentThemeName: N;
          themeDefinition: D;
        }
    : D['elements'] extends ComponentThemeDefinitionElements ?
      (() => UseComponentThemeReturn<D>) & {componentThemeName: N; themeDefinition: D}
    : (() => UseComponentThemeReturn<D>) & {componentThemeName: N; themeDefinition: D}
  : (() => UseComponentThemeReturn<D>) & {componentThemeName: N; themeDefinition: D};
