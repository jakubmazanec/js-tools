import {type Meta, type StoryObj} from '@storybook/react';

import {TableHeaderCell} from '../source/main.js';

const meta = {
  title: 'Components/TableHeaderCell',
  component: TableHeaderCell,
} satisfies Meta<typeof TableHeaderCell>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;
