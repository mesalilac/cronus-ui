import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLockOpen } from './IconInterfaceLockOpen';

const meta = {
    title: 'Icon/Interface/LockOpen',
    component: IconInterfaceLockOpen,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLockOpen>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLockOpen>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
