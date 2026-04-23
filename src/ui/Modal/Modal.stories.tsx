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
                <Modal.Trigger>Open Modal Trigger</Modal.Trigger>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Header.Title>Modal Title</Modal.Header.Title>
                        <Modal.Header.Description>
                            Modal Description
                        </Modal.Header.Description>
                    </Modal.Header>
                    <Modal.Content.Body>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                        <p>Modal Content</p>
                    </Modal.Content.Body>
                    <Modal.Footer>x</Modal.Footer>
                </Modal.Content>
            </Modal>
        );
    },
};
