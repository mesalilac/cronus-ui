import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronDown } from './IconArrowChevronDown';

const meta = {
    title: 'Icon/Arrow/ChevronDown',
    component: IconArrowChevronDown,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowChevronDown>;

export default meta;
type Story = StoryObj<typeof IconArrowChevronDown>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
