import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserGroup } from './IconUserGroup';

const meta = {
    title: 'Icon/User/Group',
    component: IconUserGroup,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUserGroup>;

export default meta;
type Story = StoryObj<typeof IconUserGroup>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
