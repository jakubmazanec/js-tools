import {Fieldset as HeadlessFieldset} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useFieldsetTheme = createComponentTheme('Fieldset', {
  variants: {
    disabled: [true, false],
  },
});

export type FieldsetProps = PropsWithChildren<
  ComponentProps<typeof useFieldsetTheme> & {
    className?: string | undefined;
  }
>;

export function Fieldset({disabled = false, className, children}: FieldsetProps) {
  let theme = useFieldsetTheme({disabled});

  return (
    <HeadlessFieldset className={theme(null, className)} disabled={disabled}>
      {children}
    </HeadlessFieldset>
  );
}
