import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckBig } from './IconInterfaceCheckBig';

const meta = {
    title: 'Icon/Interface/CheckBig',
    component: IconInterfaceCheckBig,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceCheckBig>;

export default meta;
type Story = StoryObj<typeof IconInterfaceCheckBig>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
