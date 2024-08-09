import {type Meta, type StoryObj} from '@storybook/react';

import {Button, Icon, Spinner} from '../source/main.js';

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

export const Outline = {
  args: {children: 'Outline', variant: 'outline'},
} satisfies StoryObj<typeof meta>;

export const Text = {
  args: {children: 'Text', variant: 'text'},
} satisfies StoryObj<typeof meta>;

export const Small = {
  args: {children: 'Small', size: 'small'},
} satisfies StoryObj<typeof meta>;

export const Large = {
  args: {children: 'Large', size: 'large'},
} satisfies StoryObj<typeof meta>;

export const Disabled = {
  args: {children: 'Disabled', disabled: true},
} satisfies StoryObj<typeof meta>;

export const WithIcon = {
  args: {
    children: [<Icon key="0" name="CloudArrowUp" size="large" />, 'Icon!'],
  },
} satisfies StoryObj<typeof meta>;

export const WithOnlyIcon = {
  args: {
    children: [<Icon key="0" name="CloudArrowUp" size="large" />],
  },
} satisfies StoryObj<typeof meta>;

export const OutlineWithOnlyIcon = {
  args: {
    variant: 'outline',
    children: [<Icon key="0" name="CloudArrowUp" size="large" />],
  },
} satisfies StoryObj<typeof meta>;

export const TextWithOnlyIcon = {
  args: {
    variant: 'text',
    children: [<Icon key="0" name="CloudArrowUp" size="large" />],
  },
} satisfies StoryObj<typeof meta>;

export const WithSpinner = {
  args: {
    children: [<Spinner key="0" />, 'Spinner!'],
  },
} satisfies StoryObj<typeof meta>;

export const CustomElement = {
  args: {children: 'Custom Element', as: 'a', href: 'https://mazanec.dev'},
} satisfies StoryObj<typeof meta>;
