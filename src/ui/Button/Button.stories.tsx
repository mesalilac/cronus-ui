import { fn } from 'storybook/test';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSettings } from '~/icons';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Ui/Button',
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
    render: () => {
        return (
            <div class='*:mb-4'>
                <Button appearance='primary' variant='solid'>
                    Solid
                </Button>
                <Button appearance='primary' variant='soft'>
                    Soft
                </Button>
                <Button appearance='primary' variant='outline'>
                    Outline
                </Button>
                <Button appearance='primary' variant='ghost'>
                    Ghost
                </Button>
                <Button appearance='primary' variant='link'>
                    Link
                </Button>
            </div>
        );
    },
};

export const Secondary: Story = {
    render: () => {
        return (
            <div class='*:mb-4'>
                <Button appearance='secondary' variant='solid'>
                    Solid
                </Button>
                <Button appearance='secondary' variant='soft'>
                    Soft
                </Button>
                <Button appearance='secondary' variant='outline'>
                    Outline
                </Button>
                <Button appearance='secondary' variant='ghost'>
                    Ghost
                </Button>
                <Button appearance='secondary' variant='link'>
                    Link
                </Button>
            </div>
        );
    },
};

export const Success: Story = {
    render: () => {
        return (
            <div class='*:mb-4'>
                <Button appearance='success' variant='solid'>
                    Solid
                </Button>
                <Button appearance='success' variant='soft'>
                    Soft
                </Button>
                <Button appearance='success' variant='outline'>
                    Outline
                </Button>
                <Button appearance='success' variant='ghost'>
                    Ghost
                </Button>
                <Button appearance='success' variant='link'>
                    Link
                </Button>
            </div>
        );
    },
};

export const Warning: Story = {
    render: () => {
        return (
            <div class='*:mb-4'>
                <Button appearance='warning' variant='solid'>
                    Solid
                </Button>
                <Button appearance='warning' variant='soft'>
                    Soft
                </Button>
                <Button appearance='warning' variant='outline'>
                    Outline
                </Button>
                <Button appearance='warning' variant='ghost'>
                    Ghost
                </Button>
                <Button appearance='warning' variant='link'>
                    Link
                </Button>
            </div>
        );
    },
};

export const Danger: Story = {
    render: () => {
        return (
            <div class='*:mb-4'>
                <Button appearance='danger' variant='solid'>
                    Solid
                </Button>
                <Button appearance='danger' variant='soft'>
                    Soft
                </Button>
                <Button appearance='danger' variant='outline'>
                    Outline
                </Button>
                <Button appearance='danger' variant='ghost'>
                    Ghost
                </Button>
                <Button appearance='danger' variant='link'>
                    Link
                </Button>
            </div>
        );
    },
};

export const Icon: Story = {
    args: {
        variant: 'ghost',
        size: 'icon',
        children: <IconInterfaceSettings />,
    },
};

export const Label: Story = {
    args: {
        appearance: 'secondary',
        label: 'Label Text',
        children: 'Text',
    },
};

export const Loading: Story = {
    args: {
        appearance: 'primary',
        loading: true,
        children: 'Text',
    },
};

export const Disabled: Story = {
    args: {
        appearance: 'primary',
        disabled: true,
        children: 'Text',
    },
};
