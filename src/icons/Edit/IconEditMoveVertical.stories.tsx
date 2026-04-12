import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditMoveVertical as IconComp } from './IconEditMoveVertical';

const meta = {
    title: 'Icon/Edit/MoveVertical',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const MoveVertical: Story = {
    args: {
        size: '6rem',
    },
};
