import {type ComponentThemeDefinitionElements} from './ComponentThemeDefinitionElements.js';
import {type ComponentThemeDefinitionVariants} from './ComponentThemeDefinitionVariants.js';

export type ComponentThemeDefinition = {
  variants?: ComponentThemeDefinitionVariants;
  elements?: ComponentThemeDefinitionElements;
};
