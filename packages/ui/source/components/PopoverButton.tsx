import {Popover as HeadlessPopover} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  forwardRef,
  type PropsWithChildren,
  type Ref,
} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const usePopoverButtonTheme = createComponentTheme('PopoverButton');

export type PopoverButtonProps<T extends ElementType> = ComponentProps<
  typeof usePopoverButtonTheme
> &
  ComponentPropsWithoutRef<T> & {
    className?: string;
    as?: T | undefined;
    onPointerEnter?: () => void;
    onPointerLeave?: () => void;
  };

export const PopoverButton = forwardRef(
  <T extends ElementType = 'button'>(
    {
      className,
      as,
      children,
      onPointerEnter,
      onPointerLeave,
    }: PropsWithChildren<PopoverButtonProps<T>>,
    ref: Ref<T>,
  ) => {
    let theme = usePopoverButtonTheme();

    let props: Record<string, unknown> = {
      className: theme(null, className),
      as: as ?? 'button',
      ref,
      onPointerEnter,
      onPointerLeave,
    };

    return <HeadlessPopover.Button {...props}>{children}</HeadlessPopover.Button>;
  },
);
