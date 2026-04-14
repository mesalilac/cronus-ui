import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronLeft as IconComp } from './IconArrowChevronLeft';

const meta = {
    title: 'Icon/Arrow/ChevronLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChevronLeft: Story = {
    name: 'ChevronLeft'
    args: {
        size: '6rem',
    },
};
