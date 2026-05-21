import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheck } from '~/icons';

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

export const Sizes: Story = {
    render: () => {
        return (
            <div class='flex flex-col items-start gap-4'>
                <Badge size='sm'>Sm</Badge>
                <Badge size='md'>Md</Badge>
                <Badge size='lg'>Lg</Badge>
                <Badge size='icon'>Icon</Badge>
            </div>
        );
    },
};

export const WithIcon: Story = {
    render: () => {
        return (
            <Badge size='icon' variant='success'>
                <IconInterfaceCheck />
            </Badge>
        );
    },
};
