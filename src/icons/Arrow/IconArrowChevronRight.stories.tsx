import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronRight } from './IconArrowChevronRight';

const meta = {
    title: 'Icon/Arrow/ChevronRight',
    component: IconArrowChevronRight,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowChevronRight>;

export default meta;
type Story = StoryObj<typeof IconArrowChevronRight>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
