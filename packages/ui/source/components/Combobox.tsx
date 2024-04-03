/* eslint-disable react/jsx-no-bind -- needed */
import {Combobox as HeadlessCombobox} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {useCallback, useState} from 'react';
import {Controller} from 'react-hook-form';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {useForm} from './internals.js';
import {useFieldName} from './useFieldName.js';

export const useComboboxTheme = createComponentTheme('Combobox', {
  variants: {disabled: [true, false]},
  elements: ['root', 'label', 'icon', 'panel', 'items', 'item', 'input'],
});

type ComboboxItem<T> = {
  value: T;
  label: string;
};

export type ComboboxProps<T> = ComponentProps<typeof useComboboxTheme> & {
  placeholder?: string;
  value?: T | undefined;
  items: Array<ComboboxItem<T>>;
  onChange?: (selectedValue: T) => void;
  className?: string;
};

export function Combobox<T>({
  items,
  placeholder,
  onChange,
  value,
  disabled = false,
  className,
}: ComboboxProps<T>) {
  let theme = useComboboxTheme({disabled});
  let form = useForm();
  let fieldName = useFieldName();
  const [query, setQuery] = useState('');

  const handleChange = useCallback(
    (selectedValue: ComboboxItem<T>) => {
      onChange?.(selectedValue.value);
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
          let filteredItems =
            query ?
              items.filter((item) =>
                item.label
                  .toLowerCase()
                  .replace(/\s+/g, '')
                  .includes(query.toLowerCase().replace(/\s+/g, '')),
              )
            : items;

          // TODO: `HeadlessCombobox.Button` sets its `tabindex` to `-1`, and is not thus focusable; fidn the way to fix it, setting `tabindex` or `tabIndex` doesn't work.
          return (
            <HeadlessCombobox
              disabled={disabled}
              value={(selectedItem ?? {}) as ComboboxItem<T>}
              by="value"
              onChange={(item) => {
                if (item) {
                  field.onChange(item.value);
                }
              }}
            >
              <div className="relative">
                <HeadlessCombobox.Button className={theme.root(null, className)}>
                  <span className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}>
                    {selectedItem?.label ?? placeholder ?? null}
                  </span>
                  <ChevronDownIcon className={theme.icon()} />
                </HeadlessCombobox.Button>

                <HeadlessCombobox.Options className={theme.panel()} modal={false}>
                  <HeadlessCombobox.Input
                    className={theme.input(null, className)}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <div className={theme.items()}>
                    {filteredItems.length ?
                      filteredItems.map((item) => (
                        <HeadlessCombobox.Option
                          key={String(item.value)}
                          value={item}
                          className={theme.item('cursor-pointer')}
                        >
                          {item.label}
                        </HeadlessCombobox.Option>
                      ))
                    : <span className={theme.item('cursor-pointer')}>―</span>}
                  </div>
                </HeadlessCombobox.Options>
              </div>
            </HeadlessCombobox>
          );
        }}
      />
    );
  }

  let selectedItem = items.find((item) => item.value === value);
  let filteredItems =
    query ?
      items.filter((item) =>
        item.label
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, '')),
      )
    : items;

  return (
    <HeadlessCombobox
      disabled={disabled}
      value={(selectedItem ?? {}) as ComboboxItem<T>}
      by="value"
      onChange={handleChange}
    >
      <div className="relative">
        <HeadlessCombobox.Button className={theme.root(null, className)}>
          <span className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}>
            {selectedItem?.label ?? placeholder ?? null}
          </span>
          <ChevronDownIcon className={theme.icon()} />
        </HeadlessCombobox.Button>

        <HeadlessCombobox.Options className={theme.panel()} modal={false}>
          <HeadlessCombobox.Input
            className={theme.input(null, className)}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className={theme.items()}>
            {filteredItems.length ?
              filteredItems.map((item) => (
                <HeadlessCombobox.Option
                  key={String(item.value)}
                  value={item}
                  className={theme.item('cursor-pointer')}
                >
                  {item.label}
                </HeadlessCombobox.Option>
              ))
            : <span className={theme.item('cursor-pointer')}>―</span>}
          </div>
        </HeadlessCombobox.Options>
      </div>
    </HeadlessCombobox>
  );
}
