import {Field as HeadlessField} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useRadioFieldTheme = createComponentTheme('RadioField');

export type RadioFieldProps = PropsWithChildren<
  ComponentProps<typeof useRadioFieldTheme> & {
    className?: string;
  }
>;

export function RadioField({className, children}: RadioFieldProps) {
  let theme = useRadioFieldTheme();

  return <HeadlessField className={theme(null, className)}>{children}</HeadlessField>;
}
