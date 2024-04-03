import {Dialog as HeadlessDialog} from '@headlessui/react';
import {type PropsWithChildren, useCallback} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useDialogTheme = createComponentTheme('Dialog', {
  elements: ['root', 'backdrop'],
});

export type DialogProps = PropsWithChildren<
  ComponentProps<typeof useDialogTheme> & {
    open: boolean;
    className?: string;
    onClose?: () => void;
    enableBackdropClick?: boolean;
  }
>;

export function Dialog({open, className, onClose, children, enableBackdropClick}: DialogProps) {
  let theme = useDialogTheme();

  let handleBackdropClick = useCallback(() => {
    if (enableBackdropClick) {
      onClose?.();
    }
  }, [enableBackdropClick, onClose]);

  return (
    <HeadlessDialog open={open} onClose={handleBackdropClick}>
      <div className={theme.backdrop('fixed inset-0')} aria-hidden="true" />
      <div className={theme.root('fixed inset-0', className)}>{children}</div>
    </HeadlessDialog>
  );
}
