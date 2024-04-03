import {Popover as HeadlessPopover} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const usePopoverTheme = createComponentTheme('Popover');

export type PopoverProps = PropsWithChildren<
  ComponentProps<typeof usePopoverTheme> & {
    className?: string;
  }
>;

export function Popover({className, children}: PopoverProps) {
  let theme = usePopoverTheme();

  return <HeadlessPopover className={theme('relative', className)}>{children}</HeadlessPopover>;
}
