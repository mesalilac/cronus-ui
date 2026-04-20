import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditShow } from '~/icons';

import { Alert } from './Alert';

const meta = {
    title: 'Ui/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

// variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';

export const Default: Story = {
    render: () => {
        return (
            <Alert
                description='Alert Description'
                title='Alert Title'
                variant='default'
            >
                <Alert.Action onClick={(dismiss) => dismiss()}>
                    <IconEditShow /> Show more
                </Alert.Action>
            </Alert>
        );
    },
};

export const Success: Story = {
    render: () => {
        return (
            <Alert
                description='Alert Description'
                title='Alert Title'
                variant='success'
            >
                <Alert.Action onClick={(dismiss) => dismiss()}>
                    <IconEditShow /> Show more
                </Alert.Action>
            </Alert>
        );
    },
};

export const Warning: Story = {
    render: () => {
        return (
            <Alert
                description='Alert Description'
                title='Alert Title'
                variant='warning'
            >
                <Alert.Action onClick={(dismiss) => dismiss()}>
                    <IconEditShow /> Show more
                </Alert.Action>
            </Alert>
        );
    },
};

export const Danger: Story = {
    render: () => {
        return (
            <Alert
                description='Alert Description'
                title='Alert Title'
                variant='danger'
            >
                <Alert.Action onClick={(dismiss) => dismiss()}>
                    <IconEditShow /> Show more
                </Alert.Action>
            </Alert>
        );
    },
};

export const Info: Story = {
    render: () => {
        return (
            <Alert
                description='Alert Description'
                title='Alert Title'
                variant='info'
            >
                <Alert.Action onClick={(dismiss) => dismiss()}>
                    <IconEditShow /> Show more
                </Alert.Action>
            </Alert>
        );
    },
};
