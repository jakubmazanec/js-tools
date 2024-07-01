import {type Theme} from './Theme.js';

export const defaultTheme: Theme = {
  Button: {
    className: 'rounded flex items-center justify-center text-nowrap font-sans',
    variants: {
      variant: {
        solid: 'bg-blue-500 text-white hover:bg-blue-600',
        outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
        text: 'border border-transparent hover:border hover:border-blue-500 text-blue-500',
        icon: 'border border-transparent hover:border hover:border-blue-500',
      },
      size: {
        small: 'text-xs leading-6 px-2 py-0.5 h-7 gap-x-1.5',
        medium: 'text-sm leading-6 px-3 py-1 h-8 gap-x-1.5',
        large: 'text-base leading-6 px-4 py-2 h-10 gap-x-1.5',
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
        variant: 'text',
        size: 'small',
        className: 'px-[0.0625rem] py-[0.0625rem]',
      },
      {
        variant: 'text',
        size: 'medium',
        className: 'px-[0.1875rem] py-[0.1875rem]',
      },
      {
        variant: 'text',
        size: 'large',
        className: 'px-[0.4375rem] py-[0.4375rem]',
      },
      {
        variant: 'icon',
        size: 'small',
        className: 'px-[0.0625rem] py-[0.0625rem]',
      },
      {
        variant: 'icon',
        size: 'medium',
        className: 'px-[0.1875rem] py-[0.1875rem]',
      },
      {
        variant: 'icon',
        size: 'large',
        className: 'px-[0.4375rem] py-[0.4375rem]',
      },
      {
        variant: 'solid',
        disabled: true,
        className: 'bg-gray-200 text-white',
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
      {
        variant: 'icon',
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

  Listbox: {
    classNames: {
      root: 'flex w-full items-center justify-between rounded border border-solid border-gray-200 bg-white text-sm leading-6 px-[0.4375rem] py-[0.1875rem] h-7 text-gray-950',
      label: '',
      icon: 'h-6 w-6 text-gray-400',
      panel:
        'shadow absolute left-0 right-0 top-full z-10 m-0 mt-1 list-none rounded-lg border border-solid border-gray-200 bg-white p-0 text-left',
      items: 'max-h-40 overflow-hidden overflow-y-scroll',
      item: 'px-[0.4375rem] py-[0.1875rem] text-sm hover:bg-gray-50 ui-selected:bg-gray-100 ui-active:bg-gray-50',
    },
    variants: {
      disabled: {
        true: {
          root: 'border-gray-100 text-gray-200 cursor-not-allowed',
          label: '',
          icon: 'text-gray-200',
          panel: 'border-gray-100',
          items: '',
          item: 'text-gray-200 cursor-not-allowed',
        },
        false: {
          root: '',
          label: '',
          icon: '',
          panel: '',
          items: '',
          item: '',
        },
      },
    },
  },

  Combobox: {
    classNames: {
      root: 'flex w-full items-center justify-between rounded border border-solid border-gray-200 bg-white text-sm leading-6 px-[0.4375rem] py-[0.1875rem] h-7 text-gray-950',
      label: '',
      icon: 'h-6 w-6 text-gray-400',
      panel:
        'shadow absolute left-0 right-0 top-full z-10 m-0 mt-1 list-none rounded-lg border border-solid border-gray-200 bg-white p-0 text-left',
      items: 'max-h-32 overflow-hidden overflow-y-scroll',
      item: 'px-[0.4375rem] py-[0.1875rem] text-sm hover:bg-gray-50 ui-selected:bg-gray-100 ui-active:bg-gray-50',
      input:
        'flex w-[calc(100%-1rem)] items-center justify-between rounded border border-solid border-gray-200 bg-white text-sm leading-6 px-[0.4375rem] py-[0.1875rem] h-7 text-gray-950 focus-visible:outline-none m-2',
    },
    variants: {
      disabled: {
        true: {
          root: 'border-gray-100 text-gray-200 cursor-not-allowed',
          label: '',
          icon: 'text-gray-200',
          panel: '',
          items: 'border-gray-100',
          item: 'text-gray-200 cursor-not-allowed',
          input: '',
        },
        false: {
          root: '',
          label: '',
          icon: '',
          panel: '',
          items: '',
          item: '',
          input: '',
        },
      },
    },
  },

  Input: {
    classNames: {
      root: 'flex w-full items-center rounded border border-gray-200 text-sm leading-6 px-[0.4375rem] py-[0.1875rem] h-7 text-gray-950 bg-white',
      input:
        'p-0 focus-visible:outline-none w-full data-[headlessui-icon]:pl-6 data-[headlessui-clear-button]:pr-4',
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
      root: 'flex w-full items-center rounded border border-gray-200 text-sm leading-6 px-[0.4375rem] py-[0.1875rem] text-gray-950 bg-white',
      input: 'p-0 focus-visible:outline-none w-full data-[headlessui-icon]:pl-6',
      icon: 'w-6 h-6 left-0.5 top-0.5 text-gray-200',
    },
    variants: {
      disabled: {
        true: {
          root: 'border-gray-100 text-gray-200 cursor-not-allowed',
          input: '',
          icon: '',
        },
        false: {
          root: '',
          input: '',
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

  Label: {
    className: 'cursor-pointer',
  },

  CheckboxField: {
    className: 'flex',
  },

  RadioField: {
    className: 'flex',
  },

  RadioGroupField: {
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
      'shadow-1 relative flex w-full min-w-[300px] max-w-[900px] flex-col gap-y-4 rounded-xl bg-white p-6 max-h-[calc(100vh-3rem)] overflow-hidden overflow-y-auto',
  },

  DialogTitle: {
    className: 'text-xl font-bold',
  },

  ConfirmDialog: {
    classNames: {
      root: 'flex w-screen items-center justify-center p-4 z-30',
      backdrop: 'bg-black/30 z-30',
    },
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
    classNames: {
      root: '',
      table: 'grid',
    },
  },

  TableHeader: {
    className: '',
  },

  TableHeaderCell: {
    className: 'flex items-center p-1 text-xs font-bold bg-white z-20',
  },

  TableRow: {
    className: '',
  },

  TableCell: {
    className: 'flex items-center p-[2px] text-xs',
  },
};
