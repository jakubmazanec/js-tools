import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useCardTheme = createComponentTheme('Card');

export type CardProps = PropsWithChildren<
  ComponentProps<typeof useCardTheme> & {
    className?: string;
  }
>;

export function Card({className, children}: CardProps) {
  let theme = useCardTheme();

  return <div className={theme(null, className)}>{children}</div>;
}
