import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Button } from '~/ui/Button';

import { Modal } from './Modal';

type Component = typeof Modal;

const meta = {
    title: 'Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<Component>;

export default meta;
type Story = StoryObj<Component>;

export const Default: Story = {
    render: () => {
        const [open, isOpen] = createSignal(false);

        return (
            <>
                <Button
                    onClick={() => isOpen(true)}
                    type='button'
                    variant='outline'
                >
                    Open Modal
                </Button>
                <Modal onOpenChange={isOpen} open={open()}>
                    <Modal.Content>hi</Modal.Content>
                    <Modal.Footer>
                        <Modal.Footer.Cancel />
                    </Modal.Footer>
                </Modal>
            </>
        );
    },
};
