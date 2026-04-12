import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCircleRight } from './IconArrowCircleRight';

const meta = {
    title: 'Icon/Arrow/CircleRight',
    component: IconArrowCircleRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCircleRight>;

export default meta;
type Story = StoryObj<typeof IconArrowCircleRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
