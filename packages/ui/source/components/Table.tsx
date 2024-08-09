import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useTableTheme = createComponentTheme('Table');

export type TableProps = PropsWithChildren<
  ComponentProps<typeof useTableTheme> & {
    gridTemplateColumns?: string;
    className?: string;
  }
>;

export function Table({gridTemplateColumns, className, children}: TableProps) {
  let theme = useTableTheme();

  return <table className={theme(null, className)}>{children}</table>;
}
