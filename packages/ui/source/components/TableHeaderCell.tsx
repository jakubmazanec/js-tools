import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useTableHeaderCellTheme = createComponentTheme('TableHeaderCell');

export type TableHeaderCellProps = PropsWithChildren<
  ComponentProps<typeof useTableHeaderCellTheme> & {
    className?: string;
  }
>;

export function TableHeaderCell({className, children}: TableHeaderCellProps) {
  let theme = useTableHeaderCellTheme();

  return <th className={theme(null, className)}>{children}</th>;
}
