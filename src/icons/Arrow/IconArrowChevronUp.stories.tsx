import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronUp } from './IconArrowChevronUp';

const meta = {
    title: 'Icon/Arrow/ChevronUp',
    component: IconArrowChevronUp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowChevronUp>;

export default meta;
type Story = StoryObj<typeof IconArrowChevronUp>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
