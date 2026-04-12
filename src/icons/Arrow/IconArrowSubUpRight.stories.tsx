import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubUpRight } from './IconArrowSubUpRight';

const meta = {
    title: 'Icon/Arrow/SubUpRight',
    component: IconArrowSubUpRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowSubUpRight>;

export default meta;
type Story = StoryObj<typeof IconArrowSubUpRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
