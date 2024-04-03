import {Dialog as HeadlessDialog} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useDialogPanelTheme = createComponentTheme('DialogPanel');

export type DialogPanelProps = PropsWithChildren<
  ComponentProps<typeof useDialogPanelTheme> & {
    className?: string;
  }
>;

export function DialogPanel({className, children}: DialogPanelProps) {
  let theme = useDialogPanelTheme();

  return <HeadlessDialog.Panel className={theme(null, className)}>{children}</HeadlessDialog.Panel>;
}
