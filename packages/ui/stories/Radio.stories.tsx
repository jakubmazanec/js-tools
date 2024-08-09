import {type Meta, type StoryObj} from '@storybook/react';

import {Radio, RadioGroup} from '../source/main.js';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  decorators: [
    (Story) => (
      <RadioGroup>
        <Story />
      </RadioGroup>
    ),
  ],
} satisfies Meta<typeof Radio>;

export default meta;

export const Default = {
  args: {value: ''},
} satisfies StoryObj<typeof meta>;

export const Disabled = {
  args: {value: '', disabled: true},
} satisfies StoryObj<typeof meta>;
