import {type Meta, type StoryObj} from '@storybook/react';

import {Card} from '../source/main.js';

const meta = {
  title: 'Components/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;
