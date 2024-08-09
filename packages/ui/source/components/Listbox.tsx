// TODO: fix somehow
/* eslint-disable complexity -- TODO */
import {
  Listbox as HeadlessListbox,
  ListboxButton as HeadlessListboxButton,
  ListboxOptions as HeadlessListboxOptions,
  type ListboxProps as HeadlessListboxProps,
} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {
  type ChangeEvent,
  Children,
  type ComponentPropsWithoutRef,
  type ElementType,
  Fragment,
  type PropsWithChildren,
  type ReactNode,
  type Ref,
  useCallback,
  useState,
} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {Icon} from './Icon.js';
import {Input} from './Input.js';
import {forwardRef, useFormId} from './internals.js';
import {ListboxOption} from './ListboxOption.js';
import {useField} from './useField.js';
import {useFieldName} from './useFieldName.js';

export const useListboxTheme = createComponentTheme('Listbox', {
  variants: {disabled: [true, false], invalid: [true, false]},
  elements: ['root', 'label', 'icon', 'options', 'filter'],
});

const LISTBOX_ELEMENT = Fragment;

export type ListboxItem<T> = {
  value: T;
  label: string;
};

export type ListboxProps<
  T extends ElementType,
  V extends boolean | number | string,
> = PropsWithChildren<
  ComponentProps<typeof useListboxTheme> &
    ComponentPropsWithoutRef<T> &
    (
      | {
          as?: T | undefined;
          value?: V | undefined;
          defaultValue?: V | undefined;
          multiple?: false | undefined;
          hideSelected?: never; // must be here so the type of props is correct
          items?: Array<ListboxItem<V>> | undefined;
          placeholder?: string;
          name?: string | undefined;
          className?: string | undefined;
          showFilter?: boolean | undefined;
          onChange?: (selectedValue: V) => void;
        }
      | {
          as?: T | undefined;
          value?: V[] | undefined;
          defaultValue?: V[] | undefined;
          multiple: true;
          hideSelected?:
            | {
                limit: number;
                message?: string | undefined;
              }
            | undefined;
          items?: Array<ListboxItem<V>> | undefined;
          placeholder?: string;
          name?: string | undefined;
          className?: string | undefined;
          showFilter?: boolean | undefined;
          onChange?: (selectedValue: V[]) => void;
        }
    )
>;

export const Listbox = forwardRef(
  <T extends ElementType = typeof LISTBOX_ELEMENT, V extends boolean | number | string = string>(
    {
      disabled = false,
      invalid = false,
      as = LISTBOX_ELEMENT as unknown as T,
      value,
      defaultValue,
      multiple,
      hideSelected,
      items,
      placeholder,
      name,
      className,
      showFilter,
      onChange,
      children,
      ...rest
    }: ListboxProps<T, V>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useListboxTheme({disabled, invalid});
    let formId = useFormId();
    let field = useField();
    let fieldName = useFieldName();
    let [query, setQuery] = useState('');

    let handleChange = useCallback(
      (selectedValue: V) => {
        onChange?.(selectedValue as V & V[]);
      },
      [onChange],
    );

    let handleQueryChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    }, []);

    if (items && children) {
      throw new Error('Combobox accepts only either `items` prop, or children!');
    }

    let filteredItems =
      query ?
        items?.filter((item) =>
          item.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )
      : items;
    let filteredChildren =
      query ?
        Children.toArray(children).filter((child) => {
          if (
            typeof child === 'object' &&
            'props' in child &&
            typeof child.props === 'object' &&
            typeof (child.props as {children?: unknown[] | string}).children === 'string' &&
            (child.props as {children: string}).children
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          ) {
            return true;
          }

          return false;
        })
      : children;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
    let props: HeadlessListboxProps<any, any> = {
      as,
      ref,
      name: field?.name ?? fieldName ?? name,
      value,
      defaultValue,
      multiple,
      disabled,
      invalid,
      form: formId,
      onChange: handleChange,
      ...rest,
    };

    return (
      <HeadlessListbox {...props} ref={null}>
        <HeadlessListboxButton className={theme.root(null, className)}>
          {({value: selectedValue}) => {
            if (!items && !multiple) {
              let selectedItem: ReactNode;

              Children.forEach(filteredChildren, (child) => {
                if (!child) {
                  return;
                }

                if (
                  typeof child === 'object' &&
                  'props' in child &&
                  typeof child.props === 'object' &&
                  (child.props as Record<string, unknown>).value === selectedValue
                ) {
                  selectedItem = (child.props as Record<string, unknown>).children as ReactNode;
                }
              });

              return (
                <>
                  <span className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}>
                    {selectedItem ?? placeholder ?? null}
                  </span>
                  <span className={theme.icon()}>
                    <Icon size="small">
                      <ChevronDownIcon />
                    </Icon>
                  </span>
                </>
              );
            } else if (!items && multiple) {
              let itemsHidden = false;
              let selectedItems: ReactNode[] = [];

              Children.forEach(filteredChildren, (child) => {
                if (!child) {
                  return;
                }

                if (
                  typeof child === 'object' &&
                  'props' in child &&
                  typeof child.props === 'object' &&
                  (selectedValue as unknown[]).includes(
                    (child.props as Record<string, unknown>).value,
                  )
                ) {
                  selectedItems.push(
                    (child.props as Record<string, unknown>).children as ReactNode,
                  );
                }
              });

              if (hideSelected && selectedItems.length > hideSelected.limit) {
                selectedItems = selectedItems.slice(0, hideSelected.limit);
                itemsHidden = true;
              }

              return (
                <>
                  {selectedItems.length ?
                    selectedItems.map((selectedItem, index) => (
                      <span
                        // eslint-disable-next-line react/no-array-index-key -- needed
                        key={index}
                        className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}
                      >
                        {selectedItem}
                      </span>
                    ))
                  : placeholder ?? null}
                  {itemsHidden && hideSelected?.message ?
                    <span
                      data-ellipsis
                      className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}
                    >
                      {hideSelected.message ?? '…'}
                    </span>
                  : null}
                  <span className={theme.icon()}>
                    <Icon size="small">
                      <ChevronDownIcon />
                    </Icon>
                  </span>
                </>
              );
            } else if (items && multiple) {
              let itemsHidden = false;
              let selectedItems =
                filteredItems?.filter((item) =>
                  (selectedValue as unknown[] | undefined)?.includes(item.value),
                ) ?? [];

              if (hideSelected && selectedItems.length > hideSelected.limit) {
                selectedItems = selectedItems.slice(0, hideSelected.limit);
                itemsHidden = true;
              }

              return (
                <>
                  {selectedItems.length ?
                    selectedItems.map((selectedItem, index) => (
                      <span
                        // eslint-disable-next-line react/no-array-index-key -- needed
                        key={index}
                        className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}
                      >
                        {selectedItem.label}
                      </span>
                    ))
                  : placeholder ?? null}
                  {itemsHidden && hideSelected?.message ?
                    <span
                      data-ellipsis
                      className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}
                    >
                      {hideSelected.message ?? '…'}
                    </span>
                  : null}
                  <span className={theme.icon()}>
                    <Icon size="small">
                      <ChevronDownIcon />
                    </Icon>
                  </span>
                </>
              );
            }

            let selectedItem = filteredItems?.find((item) => item.value === selectedValue);

            return (
              <>
                <span className={theme.label('overflow-hidden text-ellipsis whitespace-nowrap')}>
                  {selectedItem?.label ?? placeholder ?? null}
                </span>
                <span className={theme.icon()}>
                  <Icon size="small">
                    <ChevronDownIcon />
                  </Icon>
                </span>
              </>
            );
          }}
        </HeadlessListboxButton>
        <HeadlessListboxOptions className={theme.options()} anchor="bottom start">
          {showFilter ?
            <div className={theme.filter()}>
              <Input value={query} onChange={handleQueryChange} showClearButton />
            </div>
          : null}
          {items ?
            filteredItems?.map((item) => (
              <ListboxOption key={item.label} value={item.value}>
                {item.label}
              </ListboxOption>
            ))
          : filteredChildren}
        </HeadlessListboxOptions>
      </HeadlessListbox>
    );
  },
);
