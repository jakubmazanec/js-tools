import {type FieldMetadata, type FieldName} from '@conform-to/react';
import {Field as HeadlessField} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {fieldContext, fieldNameContext} from './internals.js';

export const useCheckboxFieldTheme = createComponentTheme('CheckboxField');

export type CheckboxFieldProps = PropsWithChildren<
  ComponentProps<typeof useCheckboxFieldTheme> &
    (
      | {
          className?: string | undefined;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
          field?: FieldMetadata<any, any> | undefined;
          name?: undefined;
        }
      | {
          className?: string | undefined;
          field?: undefined;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
          name?: FieldName<any, any> | string | undefined;
        }
    )
>;

export function CheckboxField({field, name, className, children}: CheckboxFieldProps) {
  let theme = useCheckboxFieldTheme();

  if (field) {
    return (
      <fieldContext.Provider value={field}>
        <HeadlessField className={theme(null, className)}>{children}</HeadlessField>
      </fieldContext.Provider>
    );
  }

  if (name) {
    return (
      <fieldNameContext.Provider value={name}>
        <HeadlessField className={theme(null, className)}>{children}</HeadlessField>
      </fieldNameContext.Provider>
    );
  }

  return <HeadlessField className={theme(null, className)}>{children}</HeadlessField>;
}
