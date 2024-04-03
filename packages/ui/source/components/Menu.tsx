import {Menu as HeadlessMenu} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useMenuTheme = createComponentTheme('Menu');

export type MenuProps = PropsWithChildren<
  ComponentProps<typeof useMenuTheme> & {
    className?: string;
  }
>;

export function Menu({className, children}: MenuProps) {
  let theme = useMenuTheme();

  // @ts-expect-error - `className` should exist on the `MenuItem` from Headless UI, and it actually works; search for more info
  return <HeadlessMenu className={theme(null, className)}>{children}</HeadlessMenu>;
}
