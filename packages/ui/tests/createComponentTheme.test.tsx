import {cleanup, render} from '@testing-library/react';
import {afterEach, describe, expect, test} from 'vitest';

import {type Theme, ThemeProvider} from '../source/main.js';
import {type ComponentProps, createComponentTheme} from '../source/theme/internals.js';

describe('createComponentTheme', () => {
  afterEach(cleanup);

  describe('no elements', () => {
    let useTheme = createComponentTheme('Button', {
      variants: {
        type: ['solid', 'outline', 'text'],
        size: ['small', 'medium', 'large'],
        enabled: [true, false],
      },
    });
    let componentTheme = {
      className: 'text-black p-4',
      variants: {
        type: {
          solid: 'bg-primary-50 text-white',
          outline: 'border border-primary-500',
          text: 'hover:border hover:border-primary-500',
        },
        size: {
          small: 'h-5',
          medium: 'h-6',
          large: 'h-7',
        },
        enabled: {
          true: 'opacity-100',
          false: 'opacity-50',
        },
      },
      compoundVariants: [
        {
          size: ['medium', 'large'],
          enabled: false,
          className: 'opacity-40',
        },
        {
          type: 'solid',
          size: 'small',
          className: 'h-4 p-2',
        },
      ],
    };

    type AppProps = ComponentProps<typeof useTheme>;

    function App({type = 'solid', size = 'medium', enabled = true}: AppProps) {
      let theme = useTheme({type, size, enabled});

      return (
        <div className={theme()} data-testid="root">
          Hello, world!
        </div>
      );
    }

    describe.each([
      [{type: 'solid'} as const, 'p-4 bg-primary-50 text-white h-6 opacity-100'],
      [{size: 'medium'} as const, 'p-4 bg-primary-50 text-white h-6 opacity-100'],
      [{enabled: true} as const, 'p-4 bg-primary-50 text-white h-6 opacity-100'],
      [{enabled: false} as const, 'p-4 bg-primary-50 text-white h-6 opacity-40'],
      [
        {type: 'solid', size: 'medium', enabled: false} as const,
        'p-4 bg-primary-50 text-white h-6 opacity-40',
      ],
      [
        {type: 'solid', size: 'small', enabled: false} as const,
        'bg-primary-50 text-white opacity-50 h-4 p-2',
      ],
    ])('%o', (options, expected) => {
      test(`returns ${expected}`, () => {
        let {getByTestId} = render(
          <ThemeProvider theme={{Button: componentTheme} as unknown as Theme}>
            <App {...options} />
          </ThemeProvider>,
        );

        expect(getByTestId('root').className).toBe(expected);
      });
    });
  });

  describe('with elements', () => {
    let useTheme = createComponentTheme('Button', {
      variants: {
        type: ['solid', 'outline', 'text'],
        size: ['small', 'medium', 'large'],
        enabled: [true, false],
      },
      elements: ['root', 'icon'],
    });
    let componentTheme = {
      classNames: {
        root: 'text-black p-4',
        icon: 'absolute',
      },
      variants: {
        type: {
          solid: {
            root: 'bg-primary-50 text-white',
            icon: 'bg-white text-primary-50',
          },
          outline: {
            root: 'border border-primary-500',
            icon: 'border border-primary-500',
          },
          text: {
            root: 'hover:border hover:border-primary-500',
            icon: 'hover:border hover:border-primary-500',
          },
        },
        size: {
          small: {
            root: 'h-5',
            icon: 'top-1',
          },
          medium: {
            root: 'h-6',
            icon: 'top-2',
          },
          large: {
            root: 'h-7',
            icon: 'top-3',
          },
        },
        enabled: {
          true: {
            root: 'opacity-100',
            icon: 'opacity-100',
          },
          false: {
            root: 'opacity-50',
            icon: 'opacity-50',
          },
        },
      },
      compoundVariants: [
        {
          size: ['medium', 'large'],
          enabled: false,
          classNames: {
            root: 'opacity-40',
            icon: 'opacity-40',
          },
        },
        {
          type: 'solid',
          size: 'small',
          classNames: {
            root: 'h-4 p-2',
            icon: 'top-4',
          },
        },
      ],
    };

    type AppProps = ComponentProps<typeof useTheme>;

    function App({type = 'solid', size = 'medium', enabled = true}: AppProps) {
      let theme = useTheme({type, size, enabled});

      return (
        <div className={theme.root()} data-testid="root">
          Hello,
          <span className={theme.icon()} data-testid="icon">
            world
          </span>
          !
        </div>
      );
    }

    describe.each([
      [
        {type: 'solid'} as const,
        [
          'p-4 bg-primary-50 text-white h-6 opacity-100',
          'absolute bg-white text-primary-50 top-2 opacity-100',
        ],
      ],
      [
        {size: 'medium'} as const,
        [
          'p-4 bg-primary-50 text-white h-6 opacity-100',
          'absolute bg-white text-primary-50 top-2 opacity-100',
        ],
      ],
      [
        {enabled: true} as const,
        [
          'p-4 bg-primary-50 text-white h-6 opacity-100',
          'absolute bg-white text-primary-50 top-2 opacity-100',
        ],
      ],
      [
        {enabled: false} as const,
        [
          'p-4 bg-primary-50 text-white h-6 opacity-40',
          'absolute bg-white text-primary-50 top-2 opacity-40',
        ],
      ],
      [
        {type: 'solid', size: 'medium', enabled: false} as const,
        [
          'p-4 bg-primary-50 text-white h-6 opacity-40',
          'absolute bg-white text-primary-50 top-2 opacity-40',
        ],
      ],
      [
        {type: 'solid', size: 'small', enabled: false} as const,
        [
          'bg-primary-50 text-white opacity-50 h-4 p-2',
          'absolute bg-white text-primary-50 opacity-50 top-4',
        ],
      ],
    ])('%o', (options, [root, icon]) => {
      test(`returns ${root} and ${icon}`, () => {
        let {getByTestId} = render(
          <ThemeProvider theme={{Button: componentTheme} as unknown as Theme}>
            <App {...options} />
          </ThemeProvider>,
        );

        expect(getByTestId('root').className).toBe(root);
        expect(getByTestId('icon').className).toBe(icon);
      });
    });
  });
});
