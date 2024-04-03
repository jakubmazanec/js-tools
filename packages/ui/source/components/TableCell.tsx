import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useTableCellTheme = createComponentTheme('TableCell');

export type TableCellProps = PropsWithChildren<
  ComponentProps<typeof useTableCellTheme> & {
    className?: string;
  }
>;

export function TableCell({className, children}: TableCellProps) {
  let theme = useTableCellTheme();

  return <td className={theme(null, className)}>{children}</td>;
}
