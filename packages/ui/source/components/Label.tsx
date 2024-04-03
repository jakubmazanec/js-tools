import {Label as HeadlessLabel} from '@headlessui/react';
import {type PropsWithChildren} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useLabelTheme = createComponentTheme('Label');

export type LabelProps = PropsWithChildren<
  ComponentProps<typeof useLabelTheme> & {
    className?: string;
  }
>;

export function Label({className, children}: LabelProps) {
  let theme = useLabelTheme();

  return <HeadlessLabel className={theme(null, className)}>{children}</HeadlessLabel>;
}
