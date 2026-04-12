import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleDownRight } from './IconArrowCircleDownRight';

const meta = {
    title: 'Icon/Arrow/CircleDownRight',
    component: IconArrowCircleDownRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCircleDownRight>;

export default meta;
type Story = StoryObj<typeof IconArrowCircleDownRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
