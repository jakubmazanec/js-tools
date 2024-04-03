/* eslint-disable react/jsx-no-bind -- needed */
import {RadioGroup as HeadlessRadioGroup} from '@headlessui/react';
import {type PropsWithChildren, useCallback} from 'react';
import {Controller} from 'react-hook-form';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {fieldNameContext, useForm} from './internals.js';

export const useRadioGroupFieldTheme = createComponentTheme('RadioGroupField', {
  variants: {
    disabled: [true, false],
  },
});

export type RadioGroupFieldProps<T extends boolean | number | string> = PropsWithChildren<
  ComponentProps<typeof useRadioGroupFieldTheme> & {
    name?: string;
    className?: string;
    value?: T;
    defaultValue?: T;
    onChange?: ((value: T) => void) | undefined;
  }
>;

export function RadioGroupField<T extends boolean | number | string>({
  name,
  className,
  disabled = false,
  onChange,
  value,
  defaultValue,
  children,
}: RadioGroupFieldProps<T>) {
  let theme = useRadioGroupFieldTheme({disabled});
  let form = useForm();

  let handleChange = useCallback(
    (value: T) => {
      onChange?.(value);
    },
    [onChange],
  );

  if (name && form) {
    return (
      <Controller
        name={name}
        control={form.control}
        render={({field}) => {
          let handleChange = field.onChange;
          let handleBlur = field.onBlur;

          return (
            <fieldNameContext.Provider value={name}>
              <HeadlessRadioGroup
                className={theme(null, className)}
                name={name}
                value={field.value as T}
                defaultValue={defaultValue as T}
                disabled={disabled}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {children}
              </HeadlessRadioGroup>
            </fieldNameContext.Provider>
          );
        }}
      />
    );
  }

  if (name) {
    return (
      <fieldNameContext.Provider value={name}>
        <HeadlessRadioGroup
          className={theme(null, className)}
          name={name}
          value={value as T}
          defaultValue={defaultValue as T}
          disabled={disabled}
          onChange={handleChange}
        >
          {children}
        </HeadlessRadioGroup>
      </fieldNameContext.Provider>
    );
  }

  return (
    <HeadlessRadioGroup
      className={theme(null, className)}
      value={value as T}
      defaultValue={defaultValue as T}
      disabled={disabled}
      onChange={handleChange}
    >
      {children}
    </HeadlessRadioGroup>
  );
}
