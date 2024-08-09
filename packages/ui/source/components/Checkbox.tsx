import {
  Checkbox as HeadlessCheckbox,
  type CheckboxProps as HeadlessCheckboxProps,
} from '@headlessui/react';
import {CheckIcon} from '@heroicons/react/16/solid';
import {type ComponentPropsWithoutRef, type ElementType, type Ref, useCallback} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {forwardRef, useFormId} from './internals.js';
import {useField} from './useField.js';
import {useFieldName} from './useFieldName.js';

export const useCheckboxTheme = createComponentTheme('Checkbox', {
  variants: {
    disabled: [true, false],
  },
  elements: ['root', 'checked', 'unchecked', 'icon'],
});

const CHECKBOX_ELEMENT = 'span';

export type CheckboxProps<T extends ElementType> = ComponentProps<typeof useCheckboxTheme> &
  ComponentPropsWithoutRef<T> & {
    as?: T | undefined;
    checked?: boolean | undefined;
    indeterminate?: boolean | undefined;
    autoFocus?: boolean | undefined;
    name?: string;
    className?: string;
    onChange?: ((checked: boolean) => void) | undefined;
  };

export const Checkbox = forwardRef(
  <T extends ElementType = typeof CHECKBOX_ELEMENT>(
    {
      disabled = false,
      as = CHECKBOX_ELEMENT as T,
      checked,
      indeterminate,
      autoFocus,
      name,
      className,
      onChange,
      ...rest
    }: CheckboxProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useCheckboxTheme({disabled});
    let fieldName = useFieldName();
    let field = useField();
    let formId = useFormId();

    let handleChange = useCallback(() => {
      onChange?.(!checked);
    }, [checked, onChange]);

    if (field || fieldName) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
      let props: HeadlessCheckboxProps<any> = {
        as,
        ref,
        form: formId,
        name: field?.name ?? fieldName,
        indeterminate,
        autoFocus,
        className: theme.root('group relative', className),
        ...rest,
      };

      return (
        <HeadlessCheckbox {...props}>
          <div className={theme.checked()}>
            <CheckIcon className={theme.icon()} />
          </div>
          <div className={theme.unchecked()} />
        </HeadlessCheckbox>
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessCheckboxProps<any> = {
      as,
      ref,
      checked: Boolean(checked),
      name,
      indeterminate,
      autoFocus,
      className: theme.root('group relative', className),
      onChange: handleChange,
      ...rest,
    };

    return (
      <HeadlessCheckbox {...props}>
        <div className={theme.checked()}>
          <CheckIcon className={theme.icon()} />
        </div>
        <div className={theme.unchecked()} />
      </HeadlessCheckbox>
    );
  },
);
