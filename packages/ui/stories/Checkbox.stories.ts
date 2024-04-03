import {type Meta, type StoryObj} from '@storybook/react';

import {Checkbox} from '../source/main.js';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;

export const Disabled = {
  args: {disabled: true},
} satisfies StoryObj<typeof meta>;

export const Indeterminate = {
  args: {indeterminate: true},
} satisfies StoryObj<typeof meta>;
