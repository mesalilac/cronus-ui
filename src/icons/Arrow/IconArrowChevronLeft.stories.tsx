import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronLeft } from './IconArrowChevronLeft';

const meta = {
    title: 'Icon/Arrow/ChevronLeft',
    component: IconArrowChevronLeft,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowChevronLeft>;

export default meta;
type Story = StoryObj<typeof IconArrowChevronLeft>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
