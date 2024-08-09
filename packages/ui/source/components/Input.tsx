import {getInputProps} from '@conform-to/react';
import {Input as HeadlessInput} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/16/solid';
import {
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ElementType,
  type Ref,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';

import {type ComponentProps, createComponentTheme} from '../theme/internals.js';
import {forwardRef} from './internals.js';
import {useField} from './useField.js';
import {useFieldName} from './useFieldName.js';

export const useInputTheme = createComponentTheme('Input', {
  variants: {
    disabled: [true, false],
  },
  elements: ['root', 'input', 'icon', 'clearButton'],
});

const INPUT_ELEMENT = 'input';

export type InputProps<T extends ElementType> = ComponentProps<typeof useInputTheme> &
  ComponentPropsWithoutRef<T> & {
    as?: T | undefined;
    name?: string | undefined;
    className?: string | undefined;
    icon?: ComponentType<object> | undefined;
    showClearButton?: boolean | undefined;
  };

export const Input = forwardRef(
  <T extends ElementType = typeof INPUT_ELEMENT>(
    {
      disabled = false,
      as = INPUT_ELEMENT as T,
      name,
      className,
      icon: Icon,
      showClearButton = false,
      ...rest
    }: InputProps<T>,
    ref: Ref<HTMLElement>,
  ) => {
    let theme = useInputTheme({disabled});
    let fieldName = useFieldName();
    let field = useField();
    let inputRef = useRef<HTMLInputElement>();

    useImperativeHandle(ref, () => {
      if (inputRef.current) {
        return inputRef.current;
      }

      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- false positive
      return {} as HTMLElement;
    });

    let handleClear = useCallback(() => {
      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.dispatchEvent(new Event('input', {bubbles: true}));
      }
    }, []);

    let rootProps: Record<string, unknown> = {
      className: theme.root('relative', className),
    };
    let inputProps: Record<string, unknown> = {
      as,
      ref: inputRef,
      disabled,
      name: field?.name ?? fieldName ?? name,
      className: theme.input(null, className),
      size: 1, // so the input default width without styling is small
      ...rest,
    };
    let iconProps: Record<string, unknown> = {
      className: theme.icon('absolute'),
    };
    let clearButtonProps: Record<string, unknown> = {
      className: theme.clearButton('absolute'),
    };

    if (Icon) {
      rootProps['data-icon'] = '';
    }

    if (showClearButton) {
      rootProps['data-clear-button'] = '';
    }

    if (field) {
      let {key, ...restProps} = getInputProps(field, {type: 'text'});

      inputProps = {...restProps, ...inputProps};
    }

    return (
      <span {...rootProps}>
        <HeadlessInput {...inputProps} />
        {Icon ?
          <Icon {...iconProps} />
        : null}
        {showClearButton ?
          <XMarkIcon {...clearButtonProps} onClick={handleClear} />
        : null}
      </span>
    );
  },
);
