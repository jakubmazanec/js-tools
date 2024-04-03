import {MagnifyingGlassIcon} from '@heroicons/react/24/solid';
import {type Meta, type StoryObj} from '@storybook/react';

import {Input} from '../source/main.js';

const meta = {
  title: 'Components/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

export const Default = {
  args: {},
} satisfies StoryObj<typeof meta>;

export const Disabled = {
  args: {disabled: true},
} satisfies StoryObj<typeof meta>;

export const WithIcon = {
  args: {icon: MagnifyingGlassIcon},
} satisfies StoryObj<typeof meta>;

export const WithClearButton = {
  args: {showClearButton: true},
} satisfies StoryObj<typeof meta>;
