import {CloudArrowUpIcon} from '@heroicons/react/16/solid';
import {type Meta, type StoryObj} from '@storybook/react';

import {Button} from '../source/main.js';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default = {
  args: {children: 'Default'},
} satisfies StoryObj<typeof meta>;

export const Small = {
  args: {children: 'Small', size: 'small'},
} satisfies StoryObj<typeof meta>;

export const WithIcon = {
  args: {children: [<CloudArrowUpIcon key="0" />, 'Icon!']},
} satisfies StoryObj<typeof meta>;
