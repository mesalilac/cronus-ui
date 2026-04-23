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
                    <Modal.Content.Header>
                        <Modal.Content.Header.Title>
                            Modal Title
                        </Modal.Content.Header.Title>
                        <Modal.Content.Header.Description>
                            Modal Description
                        </Modal.Content.Header.Description>
                    </Modal.Content.Header>
                    <Modal.Content.Body>
                        <p>Modal Content</p>
                    </Modal.Content.Body>
                    <Modal.Content.Footer>Footer</Modal.Content.Footer>
                </Modal.Content>
            </Modal>
        );
    },
};
