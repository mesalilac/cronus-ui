import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronRightDuo as IconComp } from './IconArrowChevronRightDuo';

const meta = {
    title: 'Icon/Arrow/ChevronRightDuo',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconChevronRightDuo: Story = {
    name: 'ChevronRightDuo'
    args: {
        size: '6rem',
    },
};
