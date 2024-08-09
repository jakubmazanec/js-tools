import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useTableRowTheme = createComponentTheme('TableRow');

export type TableRowProps = PropsWithChildren<
  ComponentProps<typeof useTableRowTheme> & {
    className?: string;
  }
>;

export function TableRow({className, children}: TableRowProps) {
  let theme = useTableRowTheme();

  return <tr className={theme(null, className)}>{children}</tr>;
}
