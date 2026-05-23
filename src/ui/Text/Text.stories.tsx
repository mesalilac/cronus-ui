import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Text } from './Text';

type StoryComponent = typeof Text;

const meta = {
    title: 'Ui/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        return (
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue malesuada blandit.
            </Text>
        );
    },
};

export const Accent: Story = {
    render: () => {
        return (
            <Text variant='accent'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue malesuada blandit.
            </Text>
        );
    },
};

export const Primary: Story = {
    render: () => {
        return (
            <Text variant='primary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue malesuada blandit.
            </Text>
        );
    },
};

export const Secondary: Story = {
    render: () => {
        return (
            <Text variant='secondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue malesuada blandit.
            </Text>
        );
    },
};

export const Muted: Story = {
    render: () => {
        return (
            <Text variant='muted'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue malesuada blandit.
            </Text>
        );
    },
};

export const Info: Story = {
    render: () => {
        return (
            <Text variant='info'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue malesuada blandit.
            </Text>
        );
    },
};

export const Success: Story = {
    render: () => {
        return (
            <Text variant='success'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue malesuada blandit.
            </Text>
        );
    },
};

export const Warning: Story = {
    render: () => {
        return (
            <Text variant='warning'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue malesuada blandit.
            </Text>
        );
    },
};

export const Danger: Story = {
    render: () => {
        return (
            <Text variant='danger'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue malesuada blandit.
            </Text>
        );
    },
};
