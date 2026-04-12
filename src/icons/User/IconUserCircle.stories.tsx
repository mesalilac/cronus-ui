import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserCircle } from './IconUserCircle';

const meta = {
    title: 'Icon/User/Circle',
    component: IconUserCircle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUserCircle>;

export default meta;
type Story = StoryObj<typeof IconUserCircle>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
