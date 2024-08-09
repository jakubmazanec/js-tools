import {Button as HeadlessButton, type ButtonProps as HeadlessButtonProps} from '@headlessui/react';
import {
  Children,
  cloneElement,
  type ComponentPropsWithoutRef,
  type ElementType,
  isValidElement,
  type Ref,
} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {Icon} from './Icon.js';
import {forwardRef} from './internals.js';
import {Spinner} from './Spinner.js';

export const useButtonTheme = createComponentTheme('Button', {
  variants: {
    variant: ['solid', 'outline', 'text'],
    size: ['small', 'medium', 'large'],
    disabled: [true, false],
  },
});

const BUTTON_ELEMENT = 'button';

export type ButtonProps<T extends ElementType> = ComponentProps<typeof useButtonTheme> &
  ComponentPropsWithoutRef<T> & {
    as?: T | undefined;
    submit?: boolean | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    children?: HeadlessButtonProps['children'] | undefined; // sadly, we cannot use `T`'s children type, because Headless UI always, if `children` is function, calls it with its own render props documented here: https://headlessui.com/react/button#using-render-props
  };

export const Button = forwardRef(
  <T extends ElementType = typeof BUTTON_ELEMENT>(
    {
      variant = 'solid',
      size = 'medium',
      disabled = false,
      as = BUTTON_ELEMENT as T,
      submit = false,
      className,
      children,
      ...rest
    }: ButtonProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useButtonTheme({variant, size, disabled});

    let props: Record<string, unknown> = {
      as,
      ref,
      className: theme(null, className),
      disabled,
      ...rest,
    };

    if (as === BUTTON_ELEMENT) {
      props.type = 'button';
    }

    if (submit) {
      props.type = 'submit';
    }

    if (typeof children === 'function') {
      return <HeadlessButton {...props}>{children}</HeadlessButton>;
    }

    let enhancedChildren = Children.map(children, (child) => {
      if (isValidElement(child) && (child.type === Icon || child.type === Spinner)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
        return cloneElement<any>(child, {'data-icon': ''});
      }

      return child;
    });

    return <HeadlessButton {...props}>{enhancedChildren}</HeadlessButton>;
  },
);
