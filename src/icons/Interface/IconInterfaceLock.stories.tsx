import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLock as IconComp } from './IconInterfaceLock';

const meta = {
    title: 'Icon/Interface/Lock',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconLock: Story = {
    name: 'Lock'
    args: {
        size: '6rem',
    },
};
