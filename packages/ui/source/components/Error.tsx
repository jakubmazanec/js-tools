import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {useField} from './useField.js';

export const useErrorTheme = createComponentTheme('Error');

export type ErrorProps = PropsWithChildren<
  ComponentProps<typeof useErrorTheme> & {
    className?: string;
  }
>;

export function Error({className, children}: ErrorProps) {
  let theme = useErrorTheme();
  let field = useField();

  if (field) {
    return (
      <div className={theme(null, className)}>
        <p>{field.state.error?.message}</p>
      </div>
    );
  }

  return <div className={theme(null, className)}>{children}</div>;
}
