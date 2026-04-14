import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserGroup as IconComp } from './IconUserGroup';

const meta = {
    title: 'Icon/User/Group',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconGroup: Story = {
    name: 'Group',
    args: {
        size: '6rem',
    },
};
