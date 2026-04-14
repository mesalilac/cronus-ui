import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronDown as IconComp } from './IconArrowChevronDown';

const meta = {
    title: 'Icon/Arrow/ChevronDown',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChevronDown: Story = {
    name: 'ChevronDown',
    args: {
        size: '6rem',
    },
};
