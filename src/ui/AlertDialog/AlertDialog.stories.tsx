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
                    <AlertDialog.Body>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
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
