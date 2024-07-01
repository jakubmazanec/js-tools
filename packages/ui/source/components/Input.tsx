import {Input as HeadlessInput} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/16/solid';
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

export const useInputTheme = createComponentTheme('Input', {
  variants: {
    disabled: [true, false],
  },
  elements: ['root', 'input', 'icon', 'clearButton'],
});

export type InputProps = ComponentProps<typeof useInputTheme> & {
  type?: 'number' | 'text' | undefined;
  name?: string | undefined;
  value?: number | string | undefined;
  className?: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
  icon?: ComponentType<any> | undefined;
  onChange?: ((value: string) => void) | undefined;
  onBlur?: ((value: string) => void) | undefined;
  placeholder?: string | undefined;
  showClearButton?: boolean | undefined;
};

export const Input = forwardRef(
  <T extends ElementType = 'input'>(
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
      showClearButton = false,
    }: InputProps,
    ref: Ref<T>,
  ) => {
    let theme = useInputTheme({disabled});
    let form = useForm();
    let fieldName = useFieldName();

    let handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
      },
      [onChange],
    );

    let handleBlur = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        onBlur?.(event.target.value);
      },
      [onBlur],
    );

    let handleClear = useCallback(() => {
      if (fieldName && form && !name) {
        form.setValue(fieldName, '');
      } else {
        onChange?.('');
      }
    }, [fieldName, form, name, onChange]);

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

    let iconProps: Record<string, unknown> = {
      className: theme.icon('absolute'),
    };

    let clearButtonProps: Record<string, unknown> = {
      className: theme.clearButton('absolute'),
    };

    if (Icon) {
      rootProps['data-headlessui-icon'] = '';
      inputProps['data-headlessui-icon'] = '';
      iconProps['data-headlessui-icon'] = '';
      clearButtonProps['data-headlessui-icon'] = '';
    }

    if (showClearButton) {
      rootProps['data-headlessui-clear-button'] = '';
      inputProps['data-headlessui-clear-button'] = '';
      iconProps['data-headlessui-clear-button'] = '';
      clearButtonProps['data-headlessui-clear-button'] = '';
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
          <HeadlessInput {...inputProps} />
          {Icon ?
            <Icon {...iconProps} />
          : null}
          {showClearButton ?
            <XMarkIcon {...clearButtonProps} onClick={handleClear} />
          : null}
        </span>
      );
    }

    return (
      <span {...rootProps}>
        <HeadlessInput
          name={name ?? ''}
          value={String(value ?? '')}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          {...inputProps}
        />
        {Icon ?
          <Icon {...iconProps} />
        : null}
        {showClearButton ?
          <XMarkIcon {...clearButtonProps} onClick={handleClear} />
        : null}
      </span>
    );
  },
);
