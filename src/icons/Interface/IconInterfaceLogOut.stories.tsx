import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLogOut as IconComp } from './IconInterfaceLogOut';

const meta = {
    title: 'Icon/Interface/LogOut',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const LogOut: Story = {
    args: {
        size: '6rem',
    },
};
