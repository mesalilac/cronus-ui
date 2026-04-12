import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditMoveHorizontal } from './IconEditMoveHorizontal';

const meta = {
    title: 'Icon/Edit/MoveHorizontal',
    component: IconEditMoveHorizontal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditMoveHorizontal>;

export default meta;
type Story = StoryObj<typeof IconEditMoveHorizontal>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
