import {Field as HeadlessField} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
// import {fieldNameContext} from './fieldNameContext.js';
// import {useForm} from './useForm.js';

export const useRadioFieldTheme = createComponentTheme('RadioField');

export type RadioFieldProps = PropsWithChildren<
  ComponentProps<typeof useRadioFieldTheme> & {
    className?: string;
    // name?: string | undefined;
  }
>;

export function RadioField({/*name,*/ className, children}: RadioFieldProps) {
  let theme = useRadioFieldTheme();
  // let form = useForm();

  // if (form && name) {
  //   return (
  //     <form.Field name={name} validators={validators}>
  //       {(field) => (
  //         <fieldNameContext.Provider value={field.name}>
  //           <HeadlessField className={theme(null, className)}>{children}</HeadlessField>
  //         </fieldNameContext.Provider>
  //       )}
  //     </form.Field>
  //   );
  // }

  return <HeadlessField className={theme(null, className)}>{children}</HeadlessField>;
}
