import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useTableTheme = createComponentTheme('Table', {
  elements: ['root', 'table'],
});

export type TableProps = PropsWithChildren<
  ComponentProps<typeof useTableTheme> & {
    gridTemplateColumns: string;
    className?: string;
  }
>;

export function Table({gridTemplateColumns, className, children}: TableProps) {
  let theme = useTableTheme();

  return (
    <div className={theme.root(null, className)}>
      <div
        className={theme.table(null, className)}
        style={{
          gridTemplateColumns,
        }}
      >
        {children}
      </div>
    </div>
  );
}
