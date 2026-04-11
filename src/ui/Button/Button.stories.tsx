import { fn } from 'storybook/test';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSettings } from '~/icons';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Text',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Text',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: 'Text',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Text',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Text',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Text',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Text',
    },
};

export const Icon: Story = {
    args: {
        variant: 'icon',
        children: <IconInterfaceSettings />,
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Text',
    },
};

export const Label: Story = {
    args: {
        variant: 'secondary',
        label: 'Label Text',
        children: 'Text',
    },
};

export const Loading: Story = {
    args: {
        variant: 'primary',
        loading: true,
        children: 'Text',
    },
};

export const Disabled: Story = {
    args: {
        variant: 'primary',
        disabled: true,
        children: 'Text',
    },
};
