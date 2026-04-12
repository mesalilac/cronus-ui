import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddMinusSquare } from './IconEditAddMinusSquare';

const meta = {
    title: 'Icon/Edit/AddMinusSquare',
    component: IconEditAddMinusSquare,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditAddMinusSquare>;

export default meta;
type Story = StoryObj<typeof IconEditAddMinusSquare>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
