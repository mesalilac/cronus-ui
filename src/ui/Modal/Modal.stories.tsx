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
        return (
            <Modal>
                <Modal.Trigger>Open Modal</Modal.Trigger>
                <Modal.Content>
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
