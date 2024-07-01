/* eslint-disable react/jsx-no-bind -- needed */
import {Checkbox as HeadlessCheckbox} from '@headlessui/react';
import {CheckIcon} from '@heroicons/react/16/solid';
import {useCallback} from 'react';
import {Controller} from 'react-hook-form';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {useForm} from './internals.js';
import {useFieldName} from './useFieldName.js';

export const useCheckboxTheme = createComponentTheme('Checkbox', {
  variants: {
    disabled: [true, false],
  },
  elements: ['root', 'checked', 'unchecked', 'icon'],
});

export type CheckboxProps = ComponentProps<typeof useCheckboxTheme> & {
  name?: string;
  className?: string;
  value?: boolean;
  onChange?: ((value: boolean) => void) | undefined;
};

export function Checkbox({name, className, disabled = false, onChange, value}: CheckboxProps) {
  let theme = useCheckboxTheme({disabled});
  let form = useForm();
  let fieldName = useFieldName();

  let handleChange = useCallback(() => {
    onChange?.(!value);
  }, [onChange, value]);

  if (fieldName && form) {
    return (
      <Controller
        name={fieldName}
        control={form.control}
        render={({field}) => {
          let handleChange = field.onChange;
          let handleBlur = field.onBlur;

          return (
            <HeadlessCheckbox
              className={theme.root('group relative', className)}
              name={fieldName}
              checked={Boolean(field.value)}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <div className={theme.checked()}>
                <CheckIcon className={theme.icon()} />
              </div>
              <div className={theme.unchecked()} />
            </HeadlessCheckbox>
          );
        }}
      />
    );
  }

  // TODO: what to do with name being undefined?
  return (
    <HeadlessCheckbox
      className={theme.root('group relative', className)}
      name={name ?? ''}
      checked={Boolean(value)}
      onChange={handleChange}
    >
      <div className={theme.checked()}>
        <CheckIcon className={theme.icon()} />
      </div>
      <div className={theme.unchecked()} />
    </HeadlessCheckbox>
  );
}
