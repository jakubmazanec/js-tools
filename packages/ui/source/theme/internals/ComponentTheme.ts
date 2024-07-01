import {type ClassName} from './ClassName.js';
import {type ComponentThemeCompoundVariants} from './ComponentThemeCompoundVariants.js';
import {type ComponentThemeDefinition} from './ComponentThemeDefinition.js';
import {type ComponentThemeDefinitionElements} from './ComponentThemeDefinitionElements.js';
import {type ComponentThemeDefinitionVariants} from './ComponentThemeDefinitionVariants.js';
import {type ComponentThemeVariants} from './ComponentThemeVariants.js';

export type ComponentTheme<D extends ComponentThemeDefinition | undefined> =
  D extends ComponentThemeDefinition ?
    D['elements'] extends ComponentThemeDefinitionElements ?
      D['variants'] extends ComponentThemeDefinitionVariants ?
        {
          classNames?: {
            [K in D['elements'][number]]: ClassName;
          };
          variants: ComponentThemeVariants<D['variants'], D['elements']>;
          compoundVariants?: ComponentThemeCompoundVariants<D['variants'], D['elements']>;
        }
      : {
          classNames: {
            [K in D['elements'][number]]: ClassName;
          };
        }
    : D['variants'] extends ComponentThemeDefinitionVariants ?
      {
        className?: ClassName;
        variants: ComponentThemeVariants<D['variants'], undefined>;
        compoundVariants?: ComponentThemeCompoundVariants<D['variants'], undefined>;
      }
    : {className: ClassName}
  : {
      className: ClassName;
    };
