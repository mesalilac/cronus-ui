import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowShrink } from './IconArrowShrink';

const meta = {
    title: 'Icon/Arrow/Shrink',
    component: IconArrowShrink,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowShrink>;

export default meta;
type Story = StoryObj<typeof IconArrowShrink>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
