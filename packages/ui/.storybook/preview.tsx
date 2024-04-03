import {useArgs} from '@storybook/preview-api';
import {type Preview} from '@storybook/react';

import {defaultTheme, ThemeProvider} from '../source/main.js';

import './tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
    (Story, context) => {
      let [, setArgs] = useArgs<typeof context.args>();

      if (context.argTypes.value && context.argTypes.onChange) {
        let onChange = (value: string) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- `any` comes from Storybook, cannot be changed
          context.args.onChange?.(value);

          setArgs({value});
        };

        return <Story args={{...context.args, onChange}} />;
      }

      return <Story />;
    },
  ],
};

export default preview;
