import {Radio as HeadlessRadio} from '@headlessui/react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';

export const useRadioTheme = createComponentTheme('Radio', {
  variants: {
    disabled: [true, false],
  },
  elements: ['root', 'checked', 'unchecked', 'icon'],
});

export type RadioProps<T extends boolean | number | string> = ComponentProps<
  typeof useRadioTheme
> & {
  name?: string;
  className?: string;
  value: T;
};

export function Radio<T extends boolean | number | string>({
  name, // TODO: use it somehow
  className,
  disabled = false,
  value,
}: RadioProps<T>) {
  let theme = useRadioTheme({disabled});

  return (
    <HeadlessRadio className={theme.root('group relative', className)} value={value}>
      <div className={theme.checked()}>
        <svg
          className={theme.icon()}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.334 25.334"
          xmlSpace="preserve"
        >
          <path
            d="M25.334,12.667c0,6.996-5.672,12.667-12.668,12.667C5.672,25.334,0,19.663,0,12.667S5.672,0,12.666,0 C19.662,0,25.334,5.671,25.334,12.667z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className={theme.unchecked()} />
    </HeadlessRadio>
  );
}
