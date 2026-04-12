import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronRightMd } from './IconArrowChevronRightMd';

const meta = {
    title: 'Icon/Arrow/ChevronRightMd',
    component: IconArrowChevronRightMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowChevronRightMd>;

export default meta;
type Story = StoryObj<typeof IconArrowChevronRightMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
