import {type Meta, type StoryObj} from '@storybook/react';

import {TableHeader} from '../source/main.js';

const meta = {
  title: 'Components/TableHeader',
  component: TableHeader,
} satisfies Meta<typeof TableHeader>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;
