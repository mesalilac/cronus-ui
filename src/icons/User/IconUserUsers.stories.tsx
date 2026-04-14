import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserUsers as IconComp } from './IconUserUsers';

const meta = {
    title: 'Icon/User/Users',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUsers: Story = {
    name: 'Users'
    args: {
        size: '6rem',
    },
};
