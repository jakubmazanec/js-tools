import {
  ComboboxOption as HeadlessComboboxOption,
  type ComboboxOptionProps as HeadlessComboboxOptionProps,
} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
  type Ref,
} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {forwardRef} from './internals.js';

export const useComboboxOptionTheme = createComponentTheme('ComboboxOption', {
  variants: {disabled: [true, false]},
});

const LISTBOX_OPTION_ELEMENT = 'div';

export type ComboboxOptionProps<
  T extends ElementType,
  V extends boolean | number | string,
> = PropsWithChildren<
  ComponentProps<typeof useComboboxOptionTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      value: V;
      className?: string;
    }
>;

export const ComboboxOption = forwardRef(
  <
    T extends ElementType = typeof LISTBOX_OPTION_ELEMENT,
    V extends boolean | number | string = string,
  >(
    {
      disabled = false,
      as = LISTBOX_OPTION_ELEMENT as T,
      value,
      className,
      children,
      ...rest
    }: ComboboxOptionProps<T, V>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useComboboxOptionTheme({disabled});

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessComboboxOptionProps<any, any> = {
      as,
      ref,
      value,
      disabled,
      className: theme('cursor-pointer', className),
      ...rest,
    };

    return <HeadlessComboboxOption {...props}>{children}</HeadlessComboboxOption>;
  },
);
