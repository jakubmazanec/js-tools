import {
  Popover as HeadlessPopover,
  type PopoverPanelProps as HeadlessPopoverPanelProps,
} from '@headlessui/react';
import {type ReactElement, type ReactNode} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const usePopoverPanelTheme = createComponentTheme('PopoverPanel');

export type PopoverPanelProps = ComponentProps<typeof usePopoverPanelTheme> & {
  anchor?: HeadlessPopoverPanelProps['anchor'] | undefined;
  className?: string | undefined;
  children: ReactNode | ((renderProps: {close: () => void}) => ReactElement) | undefined;
  static?: boolean | undefined;
};

export function PopoverPanel({
  static: isStatic = false,
  anchor,
  className,
  children,
}: PopoverPanelProps) {
  let theme = usePopoverPanelTheme();

  // this is done this way because Headless UI's Popover doesn't accept `undefined` for `anchor` with `exactOptionalProperties: true`
  let props: Record<string, unknown> = {
    className: theme(null, className),
    anchor,
  };

  if (isStatic) {
    props.static = true;
  }

  return <HeadlessPopover.Panel {...props}>{children}</HeadlessPopover.Panel>;
}
