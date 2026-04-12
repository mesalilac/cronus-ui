import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuMoreHorizontal } from './IconMenuMoreHorizontal';

const meta = {
    title: 'Icon/Menu/MoreHorizontal',
    component: IconMenuMoreHorizontal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuMoreHorizontal>;

export default meta;
type Story = StoryObj<typeof IconMenuMoreHorizontal>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
