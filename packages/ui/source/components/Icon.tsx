import * as icons16 from '@heroicons/react/16/solid';
import * as icons20 from '@heroicons/react/20/solid';
import * as icons24 from '@heroicons/react/24/outline';
import {
  type ComponentPropsWithoutRef,
  createElement,
  type ElementType,
  type PropsWithChildren,
  type ReactNode,
  type Ref,
} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {forwardRef} from './internals.js';

export const useIconTheme = createComponentTheme('Icon', {
  variants: {
    size: ['small', 'medium', 'large'],
  },
});

const ICON_ELEMENT = 'span';

export type IconProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<typeof useIconTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      name?: string | undefined;
      className?: string | undefined;
    }
>;

export const Icon = forwardRef(
  <T extends ElementType = typeof ICON_ELEMENT>(
    {
      size = 'medium',
      as: Component = ICON_ELEMENT as T,
      name,
      className,
      children,
      ...rest
    }: IconProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useIconTheme({size});
    let props: Record<string, unknown> = {
      ref,
      className: theme(null, className),
      ...rest,
    };
    let Child: ElementType | undefined;
    let resolvedName = `${name}Icon`;

    if (
      size === 'medium' &&
      resolvedName &&
      (icons20[resolvedName as keyof typeof icons20] as unknown)
    ) {
      Child = icons20[resolvedName as keyof typeof icons20] as ElementType;
    }

    if (
      size === 'small' &&
      resolvedName &&
      (icons16[resolvedName as keyof typeof icons16] as unknown)
    ) {
      Child = icons16[resolvedName as keyof typeof icons16] as ElementType;
    }

    if (
      size === 'large' &&
      resolvedName &&
      (icons24[resolvedName as keyof typeof icons24] as unknown)
    ) {
      Child = icons24[resolvedName as keyof typeof icons24] as ElementType;
    }

    return createElement(Component, props, (Child ? <Child /> : children) as ReactNode);
  },
);
