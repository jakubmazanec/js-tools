import {MenuItem as HeadlessMenuItem} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useMenuItemTheme = createComponentTheme('MenuItem');

export type MenuItemProps = PropsWithChildren<
  ComponentProps<typeof useMenuItemTheme> & {
    className?: string;
  }
>;

export function MenuItem({className, children}: MenuItemProps) {
  let theme = useMenuItemTheme();

  // @ts-expect-error - `className` should exist on the `MenuItem` from Headless UI, and it actually works; search for more info
  return <HeadlessMenuItem className={theme(null, className)}>{children}</HeadlessMenuItem>;
}
