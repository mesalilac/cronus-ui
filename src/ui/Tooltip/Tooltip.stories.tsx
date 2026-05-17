import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Badge } from '~/ui/Badge';

import { Tooltip } from './Tooltip';

type StoryComponent = typeof Tooltip;

const meta = {
    title: 'Ui/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        return (
            <Tooltip>
                <Tooltip.Trigger>Trigger</Tooltip.Trigger>
                <Tooltip.Content>tooltip content</Tooltip.Content>
            </Tooltip>
        );
    },
};

export const Placement: Story = {
    render: () => {
        return (
            <div class='flex flex-col gap-8'>
                <Tooltip>
                    <Tooltip.Trigger>Top</Tooltip.Trigger>
                    <Tooltip.Content placement='top'>
                        tooltip content
                    </Tooltip.Content>
                </Tooltip>
                <Tooltip>
                    <Tooltip.Trigger>Right</Tooltip.Trigger>
                    <Tooltip.Content placement='right'>
                        tooltip content
                    </Tooltip.Content>
                </Tooltip>
                <Tooltip>
                    <Tooltip.Trigger>Bottom</Tooltip.Trigger>
                    <Tooltip.Content placement='bottom'>
                        tooltip content
                    </Tooltip.Content>
                </Tooltip>
                <Tooltip>
                    <Tooltip.Trigger>Left</Tooltip.Trigger>
                    <Tooltip.Content placement='left'>
                        tooltip content
                    </Tooltip.Content>
                </Tooltip>
            </div>
        );
    },
};

export const CustomTrigger: Story = {
    render: () => {
        return (
            <Tooltip>
                <Tooltip.Trigger
                    as='div'
                    class='w-64 rounded-default bg-surface-2 p-2'
                >
                    Trigger
                </Tooltip.Trigger>
                <Tooltip.Content>tooltip content</Tooltip.Content>
            </Tooltip>
        );
    },
};

export const TriggerEvents: Story = {
    render: () => {
        return (
            <div class='flex gap-4'>
                <Tooltip triggerEvent='any'>
                    <Tooltip.Trigger>
                        Any <Badge>All</Badge>
                    </Tooltip.Trigger>
                    <Tooltip.Content>tooltip content</Tooltip.Content>
                </Tooltip>
                <Tooltip triggerEvent='hover'>
                    <Tooltip.Trigger>
                        Hover <Badge>Default</Badge>
                    </Tooltip.Trigger>
                    <Tooltip.Content>tooltip content</Tooltip.Content>
                </Tooltip>
                <Tooltip triggerEvent='click'>
                    <Tooltip.Trigger>Click</Tooltip.Trigger>
                    <Tooltip.Content>tooltip content</Tooltip.Content>
                </Tooltip>
            </div>
        );
    },
};
