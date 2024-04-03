import {type Meta, type StoryObj} from '@storybook/react';

import {Radio, RadioGroupField} from '../source/main.js';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  decorators: [
    (Story) => (
      <RadioGroupField>
        <Story />
      </RadioGroupField>
    ),
  ],
} satisfies Meta<typeof Radio>;

export default meta;

export const Default = {
  args: {value: ''},
} satisfies StoryObj<typeof meta>;
