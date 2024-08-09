import {type Meta, type StoryObj} from '@storybook/react';

import {Icon} from '../source/main.js';

const meta = {
  title: 'Components/Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

export const Small = {
  args: {name: 'CloudArrowDown', size: 'small'},
} satisfies StoryObj<typeof meta>;

export const Medium = {
  args: {name: 'CloudArrowDown', size: 'medium'},
} satisfies StoryObj<typeof meta>;

export const Large = {
  args: {name: 'CloudArrowDown', size: 'large'},
} satisfies StoryObj<typeof meta>;
