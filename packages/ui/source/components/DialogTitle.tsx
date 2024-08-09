import {Dialog as HeadlessDialog} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useDialogTitleTheme = createComponentTheme('DialogTitle');

export type DialogTitleProps = PropsWithChildren<
  ComponentProps<typeof useDialogTitleTheme> & {
    className?: string;
  }
>;

export function DialogTitle({className, children}: DialogTitleProps) {
  let theme = useDialogTitleTheme();

  return <HeadlessDialog.Title className={theme(null, className)}>{children}</HeadlessDialog.Title>;
}
