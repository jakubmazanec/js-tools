import {Radio as HeadlessRadio, type RadioProps as HeadlessRadioProps} from '@headlessui/react';
import {type ComponentPropsWithoutRef, type ElementType, type Ref} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {forwardRef} from './internals.js';

export const useRadioTheme = createComponentTheme('Radio', {
  variants: {
    disabled: [true, false],
  },
  elements: ['root', 'checked', 'unchecked', 'icon'],
});

const RADIO_ELEMENT = 'span';

export type RadioProps<T extends ElementType, V extends boolean | number | string> = ComponentProps<
  typeof useRadioTheme
> &
  ComponentPropsWithoutRef<T> & {
    as?: T | undefined;
    value: V;
    autoFocus?: boolean | undefined;
    className?: string;
  };

export const Radio = forwardRef(
  <T extends ElementType = typeof RADIO_ELEMENT, V extends boolean | number | string = string>(
    {
      disabled = false,
      as = RADIO_ELEMENT as T,
      value,
      autoFocus,
      className,
      ...rest
    }: RadioProps<T, V>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useRadioTheme({disabled});

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessRadioProps<any, V> = {
      as,
      ref,
      value,
      disabled,
      autoFocus,
      className: theme.root('group relative', className),
      ...rest,
    };

    return (
      <HeadlessRadio {...props}>
        <div className={theme.checked()}>
          <svg
            className={theme.icon()}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.334 25.334"
            xmlSpace="preserve"
          >
            <path
              d="M25.334,12.667c0,6.996-5.672,12.667-12.668,12.667C5.672,25.334,0,19.663,0,12.667S5.672,0,12.666,0 C19.662,0,25.334,5.671,25.334,12.667z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={theme.unchecked()} />
      </HeadlessRadio>
    );
  },
);
