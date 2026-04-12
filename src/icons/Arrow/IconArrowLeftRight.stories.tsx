import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowLeftRight } from './IconArrowLeftRight';

const meta = {
    title: 'Icon/Arrow/LeftRight',
    component: IconArrowLeftRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowLeftRight>;

export default meta;
type Story = StoryObj<typeof IconArrowLeftRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
