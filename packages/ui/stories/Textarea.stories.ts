import {type Meta, type StoryObj} from '@storybook/react';

import {Textarea} from '../source/main.js';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;

export const Disabled = {
  args: {disabled: true},
} satisfies StoryObj<typeof meta>;
