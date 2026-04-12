import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditMoveVertical } from './IconEditMoveVertical';

const meta = {
    title: 'Icon/Edit/MoveVertical',
    component: IconEditMoveVertical,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditMoveVertical>;

export default meta;
type Story = StoryObj<typeof IconEditMoveVertical>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
