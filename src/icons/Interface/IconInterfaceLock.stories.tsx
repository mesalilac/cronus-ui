import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLock } from './IconInterfaceLock';

const meta = {
    title: 'Icon/Interface/Lock',
    component: IconInterfaceLock,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLock>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLock>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
