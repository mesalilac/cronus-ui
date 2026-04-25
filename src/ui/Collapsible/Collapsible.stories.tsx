import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Button } from '~/ui/Button';

import { Collapsible } from './Collapsible';

const meta = {
    title: 'Ui/Collapsible',
    component: Collapsible,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
    render: () => {
        return (
            <Collapsible>
                <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>
                <Collapsible.Content>Collapsible Content</Collapsible.Content>
            </Collapsible>
        );
    },
};

export const ExternalControl: Story = {
    render: () => {
        const [isOpen, setIsOpen] = createSignal(false);

        return (
            <div class='flex flex-col gap-2'>
                <Button
                    onClick={() => setIsOpen((prev) => !prev)}
                    variant='primary'
                >
                    External Control
                </Button>

                <Collapsible onOpenChange={setIsOpen} open={isOpen()}>
                    <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>
                    <Collapsible.Content>
                        Collapsible Content
                    </Collapsible.Content>
                </Collapsible>
            </div>
        );
    },
};

export const OpenByDefault: Story = {
    render: () => {
        return (
            <Collapsible defaultOpen>
                <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>
                <Collapsible.Content>Collapsible Content</Collapsible.Content>
            </Collapsible>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        return (
            <Collapsible disabled>
                <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>
                <Collapsible.Content>Collapsible Content</Collapsible.Content>
            </Collapsible>
        );
    },
};
