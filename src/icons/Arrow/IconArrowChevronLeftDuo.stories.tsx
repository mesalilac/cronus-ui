import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronLeftDuo as IconComp } from './IconArrowChevronLeftDuo';

const meta = {
    title: 'Icon/Arrow/ChevronLeftDuo',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChevronLeftDuo: Story = {
    name: 'ChevronLeftDuo',
    args: {
        size: '6rem',
    },
};
