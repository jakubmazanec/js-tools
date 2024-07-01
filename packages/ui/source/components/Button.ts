import {Button as HeadlessButton} from '@headlessui/react';
import {
  type ComponentPropsWithoutRef,
  createElement,
  type ElementType,
  type PropsWithChildren,
  type Ref,
  useCallback,
} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {forwardRefWithAs, useForm} from './internals.js';

export const useButtonTheme = createComponentTheme('Button', {
  variants: {
    variant: ['solid', 'outline', 'text', 'icon'],
    size: ['small', 'medium', 'large'],
    disabled: [true, false],
  },
});

export type ButtonProps<T extends ElementType> = ComponentProps<typeof useButtonTheme> &
  ComponentPropsWithoutRef<T> & {
    className?: string | undefined;
    submit?: boolean | undefined;
    as?: T | undefined;
    onClick?: (() => void) | undefined;
    'aria-label'?: string | undefined;
  };

export const Button = forwardRefWithAs(
  <T extends ElementType = 'button'>(
    {
      as,
      className,
      variant = 'solid',
      size = 'medium',
      disabled = false,
      submit = false,
      children,
      onClick,
      ...rest
    }: PropsWithChildren<ButtonProps<T>>,
    ref: Ref<T>,
  ) => {
    let theme = useButtonTheme({variant, size, disabled});
    let form = useForm();

    let handleClick = useCallback(() => {
      onClick?.();
    }, [onClick]);

    let props: Record<string, unknown> = {
      as: as ?? 'button',
      className: theme(null, className),
      onClick: handleClick,
      disabled,
      ...rest,
      ref,
    };

    if (as === 'button') {
      props.type = 'button';
    }

    if (form && submit) {
      props.type = 'submit';
    }

    return createElement(HeadlessButton, props, children);
  },
);
