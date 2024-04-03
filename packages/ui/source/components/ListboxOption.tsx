import {
  ListboxOption as HeadlessListboxOption,
  type ListboxOptionProps as HeadlessListboxOptionProps,
} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
  type Ref,
} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {forwardRef} from './internals.js';

export const useListboxOptionTheme = createComponentTheme('ListboxOption', {
  variants: {disabled: [true, false]},
});

const LISTBOX_OPTION_ELEMENT = 'div';

export type ListboxOptionProps<
  T extends ElementType,
  V extends boolean | number | string,
> = PropsWithChildren<
  ComponentProps<typeof useListboxOptionTheme> &
    ComponentPropsWithoutRef<T> & {
      as?: T | undefined;
      value: V;
      className?: string;
    }
>;

export const ListboxOption = forwardRef(
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
    }: ListboxOptionProps<T, V>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useListboxOptionTheme({disabled});

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessListboxOptionProps<any, any> = {
      as,
      ref,
      value,
      disabled,
      className: theme('cursor-pointer', className),
      ...rest,
    };

    return <HeadlessListboxOption {...props}>{children}</HeadlessListboxOption>;
  },
);
