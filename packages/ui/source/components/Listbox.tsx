/* eslint-disable react/jsx-no-bind -- needed */
import {Listbox as HeadlessListbox} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {useCallback} from 'react';
import {Controller} from 'react-hook-form';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {useForm} from './internals.js';
import {useFieldName} from './useFieldName.js';

export const useListboxTheme = createComponentTheme('Listbox', {
  variants: {disabled: [true, false]},
  elements: ['root', 'label', 'icon', 'panel', 'items', 'item'],
});

type ListboxItem<T> = {
  value: T;
  label: string;
};

export type ListboxProps<T> = ComponentProps<typeof useListboxTheme> & {
  placeholder?: string;
  value?: T | undefined;
  items: Array<ListboxItem<T>>;
  onChange?: (selectedValue: T) => void;
  className?: string;
};

export function Listbox<T>({
  items,
  placeholder,
  onChange,
  value,
  disabled = false,
  className,
}: ListboxProps<T>) {
  let theme = useListboxTheme({disabled});
  let form = useForm();
  let fieldName = useFieldName();

  const handleChange = useCallback(
    (selectedValue: T) => {
      onChange?.(selectedValue);
    },
    [onChange],
  );

  if (fieldName && form) {
    return (
      <Controller
        name={fieldName}
        control={form.control}
        render={({field}) => {
          let selectedItem = items.find((item) => item.value === field.value);
          let handleChange = field.onChange;

          return (
            <HeadlessListbox disabled={disabled} value={field.value as T} onChange={handleChange}>
              <div className="relative">
                <HeadlessListbox.Button className={theme.root(null, className)}>
                  <span className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}>
                    {selectedItem?.label ?? placeholder ?? null}
                  </span>
                  <ChevronDownIcon className={theme.icon()} />
                </HeadlessListbox.Button>
                <HeadlessListbox.Options className={theme.panel()}>
                  <div className={theme.items()}>
                    {items.map((item) => (
                      <HeadlessListbox.Option
                        key={item.label}
                        value={item.value}
                        className={theme.item('cursor-pointer')}
                      >
                        {item.label}
                      </HeadlessListbox.Option>
                    ))}
                  </div>
                </HeadlessListbox.Options>
              </div>
            </HeadlessListbox>
          );
        }}
      />
    );
  }

  let selectedItem = items.find((item) => item.value === value);

  return (
    <HeadlessListbox disabled={disabled} value={value} onChange={handleChange}>
      <div className="relative">
        <HeadlessListbox.Button className={theme.root(null, className)}>
          <span className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}>
            {selectedItem?.label ?? placeholder ?? null}
          </span>
          <ChevronDownIcon className={theme.icon()} />
        </HeadlessListbox.Button>
        <HeadlessListbox.Options className={theme.panel()}>
          <div className={theme.items()}>
            {items.map((item) => (
              <HeadlessListbox.Option
                key={item.label}
                value={item.value}
                className={theme.item('cursor-pointer')}
              >
                {item.label}
              </HeadlessListbox.Option>
            ))}
          </div>
        </HeadlessListbox.Options>
      </div>
    </HeadlessListbox>
  );
}
