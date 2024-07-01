import {type PropsWithChildren} from 'react';
import {type UseFormReturn} from 'react-hook-form';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {formContext} from './internals.js';

export const useFormTheme = createComponentTheme('Form');

export type FormProps<D> = PropsWithChildren<
  ComponentProps<typeof useFormTheme> & {
    className?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    form: UseFormReturn<any>;
    onSubmit: (data: D) => void;
  }
>;

export function Form<D>({className, form, onSubmit, children}: FormProps<D>) {
  let theme = useFormTheme();

  let handleSubmit = form.handleSubmit(onSubmit);

  return (
    <formContext.Provider value={form}>
      <form className={theme(null, className)} onSubmit={handleSubmit}>
        {children}
      </form>
    </formContext.Provider>
  );
}
