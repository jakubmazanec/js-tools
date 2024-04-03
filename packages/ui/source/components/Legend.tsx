import {Legend as HeadlessLegend} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useLegendTheme = createComponentTheme('Legend');

export type LegendProps = PropsWithChildren<
  ComponentProps<typeof useLegendTheme> & {
    className?: string | undefined;
  }
>;

export function Legend({className, children}: LegendProps) {
  let theme = useLegendTheme();

  return <HeadlessLegend className={theme(null, className)}>{children}</HeadlessLegend>;
}
