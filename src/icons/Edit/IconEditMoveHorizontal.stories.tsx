import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditMoveHorizontal as IconComp } from './IconEditMoveHorizontal';

const meta = {
    title: 'Icon/Edit/MoveHorizontal',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const MoveHorizontal: Story = {
    args: {
        size: '6rem',
    },
};
