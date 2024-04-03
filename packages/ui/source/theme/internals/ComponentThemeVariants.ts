import {type ClassName} from './ClassName.js';
import {type ComponentThemeDefinitionElements} from './ComponentThemeDefinitionElements.js';
import {type ComponentThemeDefinitionVariants} from './ComponentThemeDefinitionVariants.js';

export type ComponentThemeVariants<
  V extends ComponentThemeDefinitionVariants,
  E extends ComponentThemeDefinitionElements | undefined,
> = {
  [J in keyof V]: V[J] extends string[] ?
    {
      [K in V[J][number]]: E extends ComponentThemeDefinitionElements ?
        {
          [L in E[number]]: ClassName;
        }
      : ClassName;
    }
  : {
      [K in 'false' | 'true']: E extends ComponentThemeDefinitionElements ?
        {
          [L in E[number]]: ClassName;
        }
      : ClassName;
    };
};
