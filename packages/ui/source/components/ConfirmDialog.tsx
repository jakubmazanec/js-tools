import {Dialog as HeadlessDialog} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {Button} from './Button.js';
import {DialogPanel} from './DialogPanel.js';
import {DialogTitle} from './DialogTitle.js';

export const useConfirmDialogTheme = createComponentTheme('ConfirmDialog', {
  elements: ['root', 'backdrop'],
});

export type ConfirmDialogProps = PropsWithChildren<
  ComponentProps<typeof useConfirmDialogTheme> & {
    open: boolean;
    className?: string;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    confirmMessage?: string;
    enableBackdropClick?: boolean;
    cancelText?: string;
    confirmText?: string;
  }
>;

export function ConfirmDialog({
  open,
  className,
  onClose,
  onConfirm,
  confirmMessage,
  title,
  enableBackdropClick,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
}: ConfirmDialogProps) {
  let theme = useConfirmDialogTheme();

  const handleBackdropClick = () => {
    if (enableBackdropClick) {
      onClose();
    }
  };

  return (
    <HeadlessDialog open={open} onClose={handleBackdropClick}>
      <div className={theme.backdrop('fixed inset-0')} aria-hidden="true" />
      <div className={theme.root('fixed inset-0', className)}>
        <DialogPanel className="max-w-[500px]">
          {title ?
            <DialogTitle className="font-normal">{title}</DialogTitle>
          : null}
          {confirmMessage ?
            <div>{confirmMessage}</div>
          : null}
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={onClose}>
              {cancelText}
            </Button>
            <Button onClick={onConfirm}>{confirmText}</Button>
          </div>
        </DialogPanel>
      </div>
    </HeadlessDialog>
  );
}
