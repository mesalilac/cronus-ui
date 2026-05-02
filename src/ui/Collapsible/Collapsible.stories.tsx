import { createSignal, type VoidComponent } from 'solid-js';
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

const PlaceholderContent: VoidComponent = () => {
    return (
        <>
            Id tempor labore tempor in nisi eiusmod laborum veniam enim
            consectetur cillum sunt eu. Cillum laborum ex irure amet aliquip
            labore id anim ex dolor magna occaecat amet dolore. Deserunt fugiat
            duis do nostrud nisi magna non exercitation ad culpa mollit enim
            labore in. Officia aliquip id non labore minim labore amet velit
            reprehenderit eu anim ad. Eu non eiusmod aliquip velit officia
            consequat sunt. Aute reprehenderit exercitation nulla excepteur non
            irure irure quis nostrud. Sunt eu ullamco eiusmod elit nisi
            consectetur consectetur cupidatat. Quis consequat laboris labore
            aliquip dolor velit adipisicing ea officia magna. Qui laboris
            consectetur voluptate nostrud deserunt voluptate. Quis deserunt ad
            aliquip incididunt non anim consectetur magna quis adipisicing
            officia. Eu minim magna sit esse consequat aliqua ut officia
            reprehenderit incididunt et tempor pariatur.
        </>
    );
};

export const Default: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Collapsible>
                    <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>
                    <Collapsible.Content>
                        <PlaceholderContent />
                    </Collapsible.Content>
                </Collapsible>
            </div>
        );
    },
};

export const ExternalControl: Story = {
    render: () => {
        const [isOpen, setIsOpen] = createSignal(false);

        return (
            <div class='flex size-96 flex-col gap-2'>
                <Button
                    onClick={() => setIsOpen((prev) => !prev)}
                    variant='primary'
                >
                    External Control
                </Button>

                <Collapsible onOpenChange={setIsOpen} open={isOpen()}>
                    <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>
                    <Collapsible.Content>
                        <PlaceholderContent />
                    </Collapsible.Content>
                </Collapsible>
            </div>
        );
    },
};

export const OpenByDefault: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Collapsible defaultOpen>
                    <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>
                    <Collapsible.Content>
                        <PlaceholderContent />
                    </Collapsible.Content>
                </Collapsible>
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Collapsible disabled>
                    <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>
                    <Collapsible.Content>
                        <PlaceholderContent />
                    </Collapsible.Content>
                </Collapsible>
            </div>
        );
    },
};
