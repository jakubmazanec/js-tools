import {type Meta, type StoryObj} from '@storybook/react';

import {TableRow} from '../source/main.js';

const meta = {
  title: 'Components/TableRow',
  component: TableRow,
} satisfies Meta<typeof TableRow>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;
