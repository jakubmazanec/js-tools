import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useTableHeaderTheme = createComponentTheme('TableHeader');

export type TableHeaderProps = PropsWithChildren<
  ComponentProps<typeof useTableHeaderTheme> & {
    className?: string;
  }
>;

export function TableHeader({className, children}: TableHeaderProps) {
  let theme = useTableHeaderTheme();

  return <thead className={theme(null, className)}>{children}</thead>;
}
