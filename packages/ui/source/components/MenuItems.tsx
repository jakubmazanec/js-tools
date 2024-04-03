import {MenuItems as HeadlessMenuItems} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useMenuItemsTheme = createComponentTheme('MenuItems');

export type MenuItemsProps = PropsWithChildren<
  ComponentProps<typeof useMenuItemsTheme> & {
    className?: string;
  }
>;

export function MenuItems({className, children}: MenuItemsProps) {
  let theme = useMenuItemsTheme();

  return <HeadlessMenuItems className={theme(null, className)}>{children}</HeadlessMenuItems>;
}
