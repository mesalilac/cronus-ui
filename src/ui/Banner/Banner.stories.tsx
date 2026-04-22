import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Button } from '~/ui/Button';

import { Banner } from './Banner';

const meta = {
    title: 'Ui/Banner',
    component: Banner,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
    render: () => {
        return <Banner>Banner Content</Banner>;
    },
};

export const Success: Story = {
    render: () => {
        return <Banner variant='success'>Banner Content</Banner>;
    },
};

export const Warning: Story = {
    render: () => {
        return <Banner variant='warning'>Banner Content</Banner>;
    },
};

export const Danger: Story = {
    render: () => {
        return <Banner variant='danger'>Banner Content</Banner>;
    },
};

export const Info: Story = {
    render: () => {
        return <Banner variant='info'>Banner Content</Banner>;
    },
};

export const Top: Story = {
    render: () => {
        return <Banner placement='top'>Banner Content</Banner>;
    },
};

export const Bottom: Story = {
    render: () => {
        return <Banner placement='bottom'>Banner Content</Banner>;
    },
};

export const NotDismissible: Story = {
    render: () => {
        return <Banner dismissible={false}>Banner Content</Banner>;
    },
};

export const ExternalControl: Story = {
    render: () => {
        const [open, setOpen] = createSignal(false);
        const [position, setPosition] = createSignal<'top' | 'bottom'>('top');

        return (
            <div class='flex h-screen items-center justify-center align-middle'>
                <Banner
                    onOpenChange={setOpen}
                    open={open()}
                    placement={position()}
                >
                    Banner Content
                </Banner>
                <div class='flex items-center gap-1'>
                    <Button
                        onClick={() => setOpen((prev) => !prev)}
                        variant={open() ? 'secondary' : 'primary'}
                    >
                        Show Banner ({open() ? 'Hide' : 'Open'})
                    </Button>
                    <Button
                        onClick={() =>
                            setPosition((prev) =>
                                prev === 'top' ? 'bottom' : 'top',
                            )
                        }
                    >
                        Position ({position()})
                    </Button>
                </div>
            </div>
        );
    },
};

export const AutoDismiss: Story = {
    render: () => {
        const [open, setOpen] = createSignal(false);

        return (
            <div class='flex h-screen items-center justify-center align-middle'>
                <Banner
                    autoDismissMs={6000}
                    onOpenChange={setOpen}
                    open={open()}
                >
                    Auto Dismiss in 6s
                </Banner>
                <div class='flex items-center gap-1'>
                    <Button
                        onClick={() => setOpen((prev) => !prev)}
                        variant={open() ? 'secondary' : 'primary'}
                    >
                        Show Banner ({open() ? 'Hide' : 'Open'})
                    </Button>
                </div>
            </div>
        );
    },
};
