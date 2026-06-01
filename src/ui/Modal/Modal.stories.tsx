import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Description } from '~/ui/Description';

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
                        <Description>Modal Description</Description>
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

export const Sm: Story = {
    render: () => {
        const [open, setOpen] = createSignal(true);

        return (
            <Modal onOpenChange={setOpen} open={open()} size='sm'>
                <Modal.Trigger>Open al</Modal.Trigger>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>
                        <Modal.Title>Modal Title</Modal.Title>
                        <Description>Modal Description</Description>
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

export const Md: Story = {
    render: () => {
        const [open, setOpen] = createSignal(true);

        return (
            <Modal onOpenChange={setOpen} open={open()} size='md'>
                <Modal.Trigger>Open al</Modal.Trigger>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>
                        <Modal.Title>Modal Title</Modal.Title>
                        <Description>Modal Description</Description>
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

export const Lg: Story = {
    render: () => {
        const [open, setOpen] = createSignal(true);

        return (
            <Modal onOpenChange={setOpen} open={open()} size='lg'>
                <Modal.Trigger>Open al</Modal.Trigger>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>
                        <Modal.Title>Modal Title</Modal.Title>
                        <Description>Modal Description</Description>
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

export const Xl: Story = {
    render: () => {
        const [open, setOpen] = createSignal(true);

        return (
            <Modal onOpenChange={setOpen} open={open()} size='xl'>
                <Modal.Trigger>Open al</Modal.Trigger>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>
                        <Modal.Title>Modal Title</Modal.Title>
                        <Description>Modal Description</Description>
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
