/* eslint-disable unicorn/consistent-destructuring -- destructuring leads to messy code because of complicated types */
import {booleanToString} from './booleanToString.js';
import {type ClassName} from './ClassName.js';
import {type ComponentTheme} from './ComponentTheme.js';
import {type ComponentThemeDefinitionElements} from './ComponentThemeDefinitionElements.js';
import {type ComponentThemeDefinitionVariants} from './ComponentThemeDefinitionVariants.js';
import {type ComponentThemeProps} from './ComponentThemeProps.js';
import {cx} from './cx.js';
import {pickPropertyIfExists} from './pickPropertyIfExists.js';

export function createUseComponentThemeReturn(
  componentTheme:
    | ComponentTheme<{
        variants: ComponentThemeDefinitionVariants;
        elements: ComponentThemeDefinitionElements;
      }>
    | ComponentTheme<{elements: ComponentThemeDefinitionElements}>
    | ComponentTheme<{variants: ComponentThemeDefinitionVariants}>
    | ComponentTheme<undefined>,
  themeProps?:
    | ComponentThemeProps<{variants: ComponentThemeDefinitionVariants}>
    | ComponentThemeProps<undefined>,
  elementName?: string,
) {
  if (!themeProps || !('variants' in componentTheme)) {
    return (baseClassName: ClassName, overrideClassName: ClassName) =>
      cx(
        baseClassName,
        'classNames' in componentTheme ?
          pickPropertyIfExists(componentTheme.classNames, elementName)
        : 'className' in componentTheme ? componentTheme.className
        : undefined,
        overrideClassName,
      );
  }

  let {variants, compoundVariants} = componentTheme;
  let getVariantClassNames = Object.keys(variants).map((variant) => {
    let variantProp = themeProps[variant as keyof typeof themeProps] as boolean | string;
    let variantKey = booleanToString(variantProp);

    return pickPropertyIfExists(variants[variant]?.[variantKey as 'false' | 'true'], elementName);
  });
  let getCompoundVariantClassNames: ClassName[] = [];

  if (compoundVariants) {
    for (let compoundVariant of compoundVariants) {
      let {className, classNames, ...rest} = compoundVariant;
      let matchesAllSelectors = true;

      for (let [cvKey, cvSelector] of Object.entries(rest)) {
        let selector = themeProps[cvKey as keyof typeof themeProps];

        if (Array.isArray(cvSelector)) {
          if (!cvSelector.includes(selector as string)) {
            matchesAllSelectors = false;

            break;
          }
        } else if (selector !== cvSelector) {
          matchesAllSelectors = false;

          break;
        }
      }

      if (matchesAllSelectors) {
        getCompoundVariantClassNames.push(
          ('classNames' in compoundVariant ?
            pickPropertyIfExists(classNames as Record<string, ClassName>, elementName)
          : className) as ClassName,
        );
      }
    }
  }

  return (baseClassName: ClassName, overrideClassName: ClassName) =>
    cx(
      baseClassName,
      'classNames' in componentTheme ? pickPropertyIfExists(componentTheme.classNames, elementName)
      : 'className' in componentTheme ? componentTheme.className
      : undefined,
      getVariantClassNames,
      getCompoundVariantClassNames,
      overrideClassName,
    );
}
