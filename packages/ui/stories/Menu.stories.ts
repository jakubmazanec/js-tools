import {type Meta, type StoryObj} from '@storybook/react';

import {Menu} from '../source/main.js';

const meta = {
  title: 'Components/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;
