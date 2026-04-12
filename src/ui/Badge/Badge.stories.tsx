import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Badge } from './Badge';

const meta = {
    title: 'Ui/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        variant: 'default',
        children: 'Badge Label',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Badge Label',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Badge Label',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Badge Label',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Badge Label',
    },
};
