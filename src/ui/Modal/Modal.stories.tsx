import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Button } from '~/ui/Button';

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
        const [isOpen, setIsOpen] = createSignal(false);

        return (
            <>
                <Button
                    onClick={() => setIsOpen((prev) => !prev)}
                    type='button'
                    variant='outline'
                >
                    Open Modal
                </Button>
                <Modal onOpenChange={setIsOpen} open={isOpen()}>
                    <Modal.Content>
                        awdawdaw
                        <div class='overflow-y-auto'>
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
                        </div>
                        <Modal.Footer>x</Modal.Footer>
                    </Modal.Content>
                </Modal>
            </>
        );
    },
};
