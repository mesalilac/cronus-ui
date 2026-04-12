import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronLeftMd } from './IconArrowChevronLeftMd';

const meta = {
    title: 'Icon/Arrow/ChevronLeftMd',
    component: IconArrowChevronLeftMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowChevronLeftMd>;

export default meta;
type Story = StoryObj<typeof IconArrowChevronLeftMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
