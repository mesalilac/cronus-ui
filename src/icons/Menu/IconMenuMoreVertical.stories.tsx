import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuMoreVertical } from './IconMenuMoreVertical';

const meta = {
    title: 'Icon/Menu/MoreVertical',
    component: IconMenuMoreVertical,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuMoreVertical>;

export default meta;
type Story = StoryObj<typeof IconMenuMoreVertical>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
