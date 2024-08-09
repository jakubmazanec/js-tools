import {type Meta, type StoryObj} from '@storybook/react';

import {Popover} from '../source/main.js';

const meta = {
  title: 'Components/Popover',
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;
