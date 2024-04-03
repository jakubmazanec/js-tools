import {MenuButton as HeadlessMenuButton} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useMenuButtonTheme = createComponentTheme('MenuButton');

export type MenuButtonProps = PropsWithChildren<
  ComponentProps<typeof useMenuButtonTheme> & {
    className?: string;
  }
>;

export function MenuButton({className, children}: MenuButtonProps) {
  let theme = useMenuButtonTheme();

  return <HeadlessMenuButton className={theme(null, className)}>{children}</HeadlessMenuButton>;
}
