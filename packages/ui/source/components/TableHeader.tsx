import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useTableHeaderTheme = createComponentTheme('TableHeader');

export type TableHeaderProps = PropsWithChildren<
  ComponentProps<typeof useTableHeaderTheme> & {
    className?: string;
  }
>;

export function TableHeader({className, children}: TableHeaderProps) {
  // let theme = useTableHeaderTheme();

  // eslint-disable-next-line react/jsx-no-useless-fragment -- false positive
  return <>{children}</>;
  // return <div className={theme(null, className)}>{children}</div>;
}
