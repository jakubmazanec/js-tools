import {type Meta, type StoryObj} from '@storybook/react';

import {TableCell} from '../source/main.js';

const meta = {
  title: 'Components/TableCell',
  component: TableCell,
} satisfies Meta<typeof TableCell>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;
