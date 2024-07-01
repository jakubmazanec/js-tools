import {Field as HeadlessField} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {fieldNameContext} from './internals.js';

export const useFieldTheme = createComponentTheme('Field');

export type FieldProps = PropsWithChildren<
  ComponentProps<typeof useFieldTheme> & {
    className?: string | undefined;
    name?: string | undefined;
  }
>;

export function Field({name, className, children}: FieldProps) {
  let theme = useFieldTheme();

  if (name) {
    return (
      <fieldNameContext.Provider value={name}>
        <HeadlessField className={theme(null, className)}>{children}</HeadlessField>
      </fieldNameContext.Provider>
    );
  }

  return <HeadlessField className={theme(null, className)}>{children}</HeadlessField>;
}
