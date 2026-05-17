import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { StatusDot } from './StatusDot';

type StoryComponent = typeof StatusDot;

const meta = {
    title: 'Ui/StatusDot',
    component: StatusDot,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        return <StatusDot />;
    },
};

export const Primary: Story = {
    render: () => {
        return <StatusDot variant='primary' />;
    },
};

export const Secondary: Story = {
    render: () => {
        return <StatusDot variant='secondary' />;
    },
};

export const Info: Story = {
    render: () => {
        return <StatusDot variant='info' />;
    },
};

export const Success: Story = {
    render: () => {
        return <StatusDot variant='success' />;
    },
};

export const Warning: Story = {
    render: () => {
        return <StatusDot variant='warning' />;
    },
};

export const Danger: Story = {
    render: () => {
        return <StatusDot variant='danger' />;
    },
};

export const PingAnimation: Story = {
    render: () => {
        return (
            <div class='flex flex-col gap-2'>
                <StatusDot ping variant='primary' />
                <StatusDot ping variant='secondary' />
                <StatusDot ping variant='info' />
                <StatusDot ping variant='success' />
                <StatusDot ping variant='warning' />
                <StatusDot ping variant='danger' />
            </div>
        );
    },
};

export const Size: Story = {
    render: () => {
        return (
            <div class='flex flex-col gap-2'>
                <StatusDot size='sm' />
                <StatusDot size='md' />
                <StatusDot size='lg' />
            </div>
        );
    },
};
