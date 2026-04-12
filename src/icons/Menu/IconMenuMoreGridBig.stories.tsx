import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuMoreGridBig } from './IconMenuMoreGridBig';

const meta = {
    title: 'Icon/Menu/MoreGridBig',
    component: IconMenuMoreGridBig,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMenuMoreGridBig>;

export default meta;
type Story = StoryObj<typeof IconMenuMoreGridBig>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
