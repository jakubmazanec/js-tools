import {type Meta, type StoryObj} from '@storybook/react';

import {Spinner} from '../source/main.js';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;

export const Small = {
  args: {size: 'small'},
} satisfies StoryObj<typeof meta>;

export const Medium = {
  args: {size: 'medium'},
} satisfies StoryObj<typeof meta>;

export const Large = {
  args: {size: 'large'},
} satisfies StoryObj<typeof meta>;

export const Surface = {
  args: {size: 'surface'},
} satisfies StoryObj<typeof meta>;
