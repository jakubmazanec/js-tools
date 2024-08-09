import {type Meta, type StoryObj} from '@storybook/react';

import {Combobox} from '../source/main.js';

const items = [
  {label: '🍎 Apples', value: 'apples'},
  {label: '🍌 Bananas', value: 'bananas'},
  {label: '🥦 Broccoli', value: 'broccoli'},
  {label: '🥕 Carrots', value: 'carrots'},
  {label: '🍫 Chocolate', value: 'chocolate'},
];

const manyItems = Array.from({length: 1000}, (_, i) => ({value: `${i + 1}`, label: `#${i + 1}`}));

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export default meta;

export const Default = {
  args: {items},
} satisfies StoryObj<typeof meta>;

export const NotImmediate = {
  args: {immediate: false, items},
} satisfies StoryObj<typeof meta>;

export const Disabled = {
  args: {disabled: true, items},
} satisfies StoryObj<typeof meta>;

export const Virtual = {
  args: {virtual: true, items: manyItems},
} satisfies StoryObj<typeof meta>;

export const AllowedCustomValue = {
  args: {customValue: true, items},
} satisfies StoryObj<typeof meta>;
