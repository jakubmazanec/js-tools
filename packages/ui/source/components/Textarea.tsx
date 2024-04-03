import {Textarea as HeadlessTextarea} from '@headlessui/react';
import {
  type ChangeEvent,
  type ComponentType,
  type ElementType,
  type FocusEvent,
  forwardRef,
  type Ref,
  useCallback,
} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {useForm} from './internals.js';
import {useFieldName} from './useFieldName.js';

export const useTextareaTheme = createComponentTheme('Textarea', {
  variants: {
    disabled: [true, false],
  },
  elements: ['root', 'input', 'icon'],
});

export type TextareaProps = ComponentProps<typeof useTextareaTheme> & {
  type?: 'number' | 'text' | undefined;
  name?: string | undefined;
  value?: number | string | undefined;
  className?: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  icon?: ComponentType<any> | undefined;
  onChange?: ((value: string) => void) | undefined;
  onBlur?: ((value: string) => void) | undefined;
  placeholder?: string | undefined;
};

export const Textarea = forwardRef(
  <T extends ElementType = 'textarea'>(
    {
      type = 'text',
      name,
      value,
      className,
      disabled = false,
      icon: Icon,
      onChange,
      onBlur,
      placeholder,
    }: TextareaProps,
    ref: Ref<T>,
  ) => {
    let theme = useTextareaTheme({disabled});
    let form = useForm();
    let fieldName = useFieldName();

    let handleChange = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event.target.value);
      },
      [onChange],
    );

    let handleBlur = useCallback(
      (event: FocusEvent<HTMLTextAreaElement>) => {
        onBlur?.(event.target.value);
      },
      [onBlur],
    );

    let rootProps: Record<string, unknown> = {
      className: theme.root('relative', className),
      type,
      disabled,
    };

    let inputProps: Record<string, unknown> = {
      className: theme.input(null, className),
      type,
      disabled,
      placeholder,
      ref,
    };

    if (Icon) {
      rootProps['data-headlessui-icon'] = '';
      inputProps['data-headlessui-icon'] = '';
    }

    if (fieldName && form && !name) {
      if (ref) {
        let register = form.register(fieldName, {
          valueAsNumber: type === 'number',
        });

        inputProps = {
          ...inputProps,
          ...register,
        };
        inputProps.ref = (instance: unknown) => {
          if (typeof ref === 'function') {
            throw new TypeError("Ref can't be a function!");
          }

          // @ts-expect-error -- we need to assign, and it actually works
          // eslint-disable-next-line no-param-reassign -- needed
          ref.current = instance;

          register.ref(instance);
        };
      } else {
        inputProps = {
          ...inputProps,
          ...form.register(fieldName, {
            valueAsNumber: type === 'number',
          }),
        };
      }

      return (
        <span {...rootProps}>
          <HeadlessTextarea {...inputProps} />
          {Icon ?
            <Icon className={theme.icon('absolute')} />
          : null}
        </span>
      );
    }

    return (
      <span {...rootProps}>
        <HeadlessTextarea
          name={name ?? ''}
          value={String(value ?? '')}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          {...inputProps}
        />
        {Icon ?
          <Icon className={theme.icon('absolute')} />
        : null}
      </span>
    );
  },
);
