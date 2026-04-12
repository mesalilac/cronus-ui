import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditCloseSquare } from './IconEditCloseSquare';

const meta = {
    title: 'Icon/Edit/CloseSquare',
    component: IconEditCloseSquare,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditCloseSquare>;

export default meta;
type Story = StoryObj<typeof IconEditCloseSquare>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
