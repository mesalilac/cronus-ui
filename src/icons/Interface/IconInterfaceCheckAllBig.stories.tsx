import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckAllBig } from './IconInterfaceCheckAllBig';

const meta = {
    title: 'Icon/Interface/CheckAllBig',
    component: IconInterfaceCheckAllBig,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceCheckAllBig>;

export default meta;
type Story = StoryObj<typeof IconInterfaceCheckAllBig>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
