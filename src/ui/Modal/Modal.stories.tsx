import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Modal } from './Modal';

const meta = {
    title: 'Ui/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: () => {
        const [open, setOpen] = createSignal(true);

        return (
            <Modal onOpenChange={setOpen} open={open()}>
                <Modal.Trigger>Open al</Modal.Trigger>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>
                        <Modal.Title>Modal Title</Modal.Title>
                        <Modal.Description>Modal Description</Modal.Description>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Modal Content</p>
                    </Modal.Body>
                    <Modal.Footer>Footer</Modal.Footer>
                </Modal.Content>
            </Modal>
        );
    },
};
