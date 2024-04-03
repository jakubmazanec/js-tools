import {type FormMetadata, FormProvider} from '@conform-to/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {formIdContext} from './internals.js';

export const useFormTheme = createComponentTheme('Form');

export type FormProps = PropsWithChildren<
  ComponentProps<typeof useFormTheme> & {
    className?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    form: FormMetadata<any, any>;
  }
>;

export function Form({className, form, children}: FormProps) {
  let theme = useFormTheme();

  let handleSubmit = form.onSubmit;

  return (
    <formIdContext.Provider value={form.id}>
      <FormProvider context={form.context}>
        <form className={theme(null, className)} method="post" id={form.id} onSubmit={handleSubmit}>
          {children}
        </form>
      </FormProvider>
    </formIdContext.Provider>
  );
}
