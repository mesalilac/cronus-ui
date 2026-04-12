import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserSGroup } from './IconUserSGroup';

const meta = {
    title: 'Icon/User/SGroup',
    component: IconUserSGroup,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUserSGroup>;

export default meta;
type Story = StoryObj<typeof IconUserSGroup>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
