import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLogOut } from './IconInterfaceLogOut';

const meta = {
    title: 'Icon/Interface/LogOut',
    component: IconInterfaceLogOut,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLogOut>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLogOut>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
