import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleUpRight } from './IconArrowCircleUpRight';

const meta = {
    title: 'Icon/Arrow/CircleUpRight',
    component: IconArrowCircleUpRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCircleUpRight>;

export default meta;
type Story = StoryObj<typeof IconArrowCircleUpRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
