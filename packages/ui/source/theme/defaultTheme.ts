import {type Theme} from './Theme.js';

// TODO: move each component's theme to that component's file (co-location is better when styling single component), and then this object will just merge those component themes into one big theme object here
export const defaultTheme: Theme = {
  Button: {
    className: 'rounded flex items-center justify-center text-nowrap font-sans font-medium',
    variants: {
      variant: {
        solid: 'bg-blue-500 text-white hover:bg-blue-600',
        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50',
        text: 'border border-transparent hover:border hover:border-blue-500 text-blue-500',
      },
      size: {
        small: 'text-xs leading-6 px-2 h-8 gap-x-2',
        medium: 'text-sm leading-6 px-3 h-9 gap-x-2',
        large: 'text-base leading-6 px-4 h-10 gap-x-2',
      },
      disabled: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        size: 'small',
        className: 'px-[0.4375rem] py-[0.0625rem]',
      },
      {
        variant: 'outline',
        size: 'medium',
        className: 'px-[0.6875rem] py-[0.1875rem]',
      },
      {
        variant: 'outline',
        size: 'large',
        className: 'px-[0.9375rem] py-[0.4375rem]',
      },
      {
        variant: 'solid',
        disabled: true,
        className: 'bg-gray-200 text-white hover:bg-gray-200',
      },
      {
        variant: 'outline',
        disabled: true,
        className: 'border-gray-200 text-gray-200',
      },
      {
        variant: 'text',
        disabled: true,
        className: 'hover:border-transparent text-gray-200',
      },
    ],
  },

  Checkbox: {
    classNames: {
      root: 'flex items-center text-gray-95',
      checked:
        'mr-2 flex hidden h-5 w-5 items-center justify-center rounded bg-blue-500 text-white group-data-[checked]:flex',
      unchecked:
        'mr-2 flex h-5 w-5 items-center justify-center rounded border border-gray-200 bg-white group-data-[checked]:hidden',
      icon: 'h-4 w-4',
    },
    variants: {
      disabled: {
        true: {
          root: 'text-gray-200',
          checked: 'bg-gray-500 opacity-50',
          unchecked: 'border-gray-100',
          icon: '',
        },
        false: {
          root: '',
          checked: '',
          unchecked: '',
          icon: '',
        },
      },
    },
  },

  Radio: {
    classNames: {
      root: 'flex items-center text-gray-95',
      checked:
        'mr-2 flex hidden h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white group-data-[checked]:flex',
      unchecked:
        'mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 bg-white group-data-[checked]:hidden',
      icon: 'h-[9px] w-[9px]',
    },
    variants: {
      disabled: {
        true: {
          root: 'text-gray-200',
          checked: 'bg-gray-500',
          unchecked: 'border-gray-100',
          icon: '',
        },
        false: {
          root: '',
          checked: '',
          unchecked: '',
          icon: '',
        },
      },
    },
  },

  Icon: {
    className: 'inline-block *:w-full *:h-full data-[icon]:-mx-1',
    variants: {
      size: {
        small: 'size-4',
        medium: 'size-5',
        large: 'size-6',
      },
    },
  },

  Listbox: {
    classNames: {
      root: 'relative flex w-full min-w-32 items-center rounded border border-solid border-gray-200 bg-white text-sm leading-6 px-[0.4375rem] py-[0.1875rem] h-7 text-gray-950 pr-9 gap-x-2',
      label: 'flex gap-x-2',
      icon: 'absolute inset-y-0 right-0 flex size-7 items-center justify-center',
      options:
        'shadow absolute left-0 right-0 top-full z-10 list-none rounded border border-solid border-gray-200 bg-white p-0 text-left w-[var(--button-width)] [--anchor-gap:theme(spacing.1)] [--anchor-padding:theme(spacing.2)] [scrollbar-width:thin]',
      filter: 'p-2',
    },
    variants: {
      disabled: {
        true: {
          root: 'border-gray-100 text-gray-200 cursor-not-allowed',
          label: '',
          icon: 'text-gray-200',
          options: 'border-gray-100',
          filter: '',
        },
        false: {
          root: '',
          label: '',
          icon: '',
          options: '',
          filter: '',
        },
      },
      invalid: {
        true: {
          root: '',
          label: '',
          icon: '',
          options: '',
          filter: '',
        },
        false: {
          root: '',
          label: '',
          icon: '',
          options: '',
          filter: '',
        },
      },
    },
  },

  ListboxOption: {
    className:
      'px-[0.4375rem] py-[0.1875rem] text-sm hover:bg-gray-50 data-[selected]:bg-gray-100 data-[active]:bg-gray-50 empty:invisible',
    variants: {
      disabled: {
        true: 'text-gray-200 cursor-not-allowed',
        false: '',
      },
    },
  },

  Combobox: {
    classNames: {
      root: 'relative w-full min-w-32',
      input:
        'flex w-full items-center rounded border border-solid border-gray-200 bg-white text-sm leading-6 px-[0.4375rem] py-[0.1875rem] h-7 text-gray-950 pr-9 gap-x-2 focus-visible:outline-none',
      icon: 'absolute inset-y-0 right-0 flex size-7 items-center justify-center',
      options:
        'shadow absolute left-0 right-0 top-full z-10 list-none rounded border border-solid border-gray-200 bg-white p-0 text-left w-[var(--input-width)] [--anchor-gap:theme(spacing.1)] [--anchor-padding:theme(spacing.2)] empty:invisible',
    },
    variants: {
      disabled: {
        true: {
          root: 'border-gray-100 text-gray-200 cursor-not-allowed',
          icon: 'text-gray-200',
          options: '',
          input: '',
        },
        false: {
          root: '',
          icon: '',
          options: '',
          input: '',
        },
      },
      invalid: {
        true: {
          root: '',
          icon: '',
          options: '',
          input: '',
        },
        false: {
          root: '',
          icon: '',
          options: '',
          input: '',
        },
      },
    },
  },

  ComboboxOption: {
    className:
      'w-full px-[0.4375rem] py-[0.1875rem] text-sm hover:bg-gray-50 data-[selected]:bg-gray-100 data-[active]:bg-gray-50 empty:invisible',
    variants: {
      disabled: {
        true: 'text-gray-200 cursor-not-allowed',
        false: '',
      },
    },
  },

  Input: {
    classNames: {
      root: 'group flex w-full items-center rounded border border-gray-200 text-sm leading-6 px-[0.4375rem] py-[0.1875rem] h-7 text-gray-950 bg-white',
      input:
        'p-0 focus-visible:outline-none w-full group-data-[icon]:pl-6 group-data-[clear-button]:pr-4',
      icon: 'w-6 h-6 left-0.5 top-0.5 text-gray-200',
      clearButton: 'text-gray-500 w-4 h-4 right-1 cursor-pointer',
    },
    variants: {
      disabled: {
        true: {
          root: 'border-gray-100 text-gray-200 cursor-not-allowed',
          input: '',
          icon: '',
          clearButton: '',
        },
        false: {
          root: '',
          input: '',
          icon: '',
          clearButton: '',
        },
      },
    },
  },

  Textarea: {
    classNames: {
      root: 'group flex w-full items-center rounded border border-gray-200 text-sm leading-6 px-[0.4375rem] py-[0.1875rem] text-gray-950 bg-white',
      textarea: 'p-0 focus-visible:outline-none w-full group-data-[icon]:pl-6',
      icon: 'w-6 h-6 left-0.5 top-0.5 text-gray-200',
    },
    variants: {
      disabled: {
        true: {
          root: 'border-gray-100 text-gray-200 cursor-not-allowed',
          textarea: '',
          icon: '',
        },
        false: {
          root: '',
          textarea: '',
          icon: '',
        },
      },
    },
  },

  Form: {
    className: 'flex flex-col gap-y-4',
  },

  Field: {
    className: '',
  },

  Fieldset: {
    className: 'flex flex-col gap-y-4',
    variants: {
      disabled: {
        true: '',
        false: '',
      },
    },
  },

  Legend: {
    className: 'font-bold text-lg',
  },

  Label: {
    className: 'cursor-pointer',
  },

  CheckboxField: {
    className: 'flex gap-x-4',
  },

  RadioField: {
    className: 'flex',
  },

  RadioGroup: {
    className: '',
    variants: {
      disabled: {
        true: '',
        false: '',
      },
    },
  },

  Error: {
    className: 'flex text-danger-500',
  },

  Dialog: {
    classNames: {
      root: 'flex w-screen items-center justify-center p-4 z-30',
      backdrop: 'bg-black/30 z-30',
    },
  },

  DialogPanel: {
    className:
      'shadow-1 relative flex w-full min-w-[300px] max-w-[900px] flex-col gap-y-4 rounded bg-white p-6 max-h-[calc(100vh-3rem)] overflow-hidden overflow-y-auto',
  },

  DialogTitle: {
    className: 'text-xl font-bold',
  },

  Popover: {
    className: '',
  },

  PopoverButton: {
    className: 'focus-visible:outline-none',
  },

  PopoverPanel: {
    className:
      'rounded bg-white border p-2 border-gray-200 absolute z-10 left-0 top-[calc(100%+0.25rem)]',
  },

  Menu: {
    className: '',
  },

  MenuButton: {
    className: '',
  },

  MenuItems: {
    className: '',
  },

  MenuItem: {
    className: '',
  },

  Table: {
    className: '',
  },

  TableHeader: {
    className: '',
  },

  TableHeaderCell: {
    className: 'p-1 text-xs font-bold bg-white z-20',
  },

  TableRow: {
    className: '',
  },

  TableCell: {
    className: 'p-[2px] text-xs',
  },

  Card: {
    className: 'rounded border border-gray-100 p-4',
  },

  Spinner: {
    classNames: {
      root: 'inline-flex items-center justify-center fill-gray-900 text-gray-200 data-[icon]:-mx-1',
      icon: 'animate-spin',
    },
    variants: {
      size: {
        small: {
          root: '',
          icon: 'w-4 h-4',
        },
        medium: {
          root: '',
          icon: 'w-5 h-5',
        },
        large: {
          root: '',
          icon: 'w-6 h-6',
        },
        surface: {
          root: 'flex',
          icon: 'w-12 h-12',
        },
      },
    },
  },
};
