import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronUp as IconComp } from './IconArrowChevronUp';

const meta = {
    title: 'Icon/Arrow/ChevronUp',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChevronUp: Story = {
    name: 'ChevronUp',
    args: {
        size: '6rem',
    },
};
