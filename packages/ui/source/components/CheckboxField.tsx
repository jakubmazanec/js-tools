import {Field as HeadlessField} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {fieldNameContext} from './internals.js';

export const useCheckboxFieldTheme = createComponentTheme('CheckboxField');

export type CheckboxFieldProps = PropsWithChildren<
  ComponentProps<typeof useCheckboxFieldTheme> & {
    className?: string | undefined;
    name?: string | undefined;
  }
>;

export function CheckboxField({name, className, children}: CheckboxFieldProps) {
  let theme = useCheckboxFieldTheme();

  if (name) {
    return (
      <fieldNameContext.Provider value={name}>
        <HeadlessField className={theme(null, className)}>{children}</HeadlessField>
      </fieldNameContext.Provider>
    );
  }

  return <HeadlessField className={theme(null, className)}>{children}</HeadlessField>;
}
