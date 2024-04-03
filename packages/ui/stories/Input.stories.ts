import {type Meta, type StoryObj} from '@storybook/react';

import {Input} from '../source/main.js';

const meta = {
  title: 'Components/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;
