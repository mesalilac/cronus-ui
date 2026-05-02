import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { AlertDialog } from './AlertDialog';

type StoryComponent = typeof AlertDialog;

const meta = {
    title: 'Ui/AlertDialog',
    component: AlertDialog,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;
type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        const [open, setOpen] = createSignal(true);

        return (
            <AlertDialog onOpenChange={setOpen} open={open()}>
                <AlertDialog.Content>
                    <AlertDialog.Header>
                        <AlertDialog.Icon />
                        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
                    </AlertDialog.Header>
                    <AlertDialog.Body>Save Changes</AlertDialog.Body>
                    <AlertDialog.Footer>
                        <AlertDialog.Cancel />
                        <AlertDialog.Action />
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        );
    },
};

export const Warning: Story = {
    render: () => {
        const [open, setOpen] = createSignal(true);

        return (
            <AlertDialog onOpenChange={setOpen} open={open()} variant='warning'>
                <AlertDialog.Content>
                    <AlertDialog.Header>
                        <AlertDialog.Icon />
                        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                        Overwrite existing file?
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                        <AlertDialog.Cancel />
                        <AlertDialog.Action />
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        );
    },
};

export const Danger: Story = {
    render: () => {
        const [open, setOpen] = createSignal(true);

        return (
            <AlertDialog onOpenChange={setOpen} open={open()} variant='danger'>
                <AlertDialog.Content>
                    <AlertDialog.Header>
                        <AlertDialog.Icon />
                        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
                    </AlertDialog.Header>
                    <AlertDialog.Body>Delete your account?</AlertDialog.Body>
                    <AlertDialog.Footer>
                        <AlertDialog.Cancel />
                        <AlertDialog.Action />
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        );
    },
};
