import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLockOpen as IconComp } from './IconInterfaceLockOpen';

const meta = {
    title: 'Icon/Interface/LockOpen',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const LockOpen: Story = {
    args: {
        size: '6rem',
    },
};
