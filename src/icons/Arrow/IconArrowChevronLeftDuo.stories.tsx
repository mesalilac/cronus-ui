import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowChevronLeftDuo } from './IconArrowChevronLeftDuo';

const meta = {
    title: 'Icon/Arrow/ChevronLeftDuo',
    component: IconArrowChevronLeftDuo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowChevronLeftDuo>;

export default meta;
type Story = StoryObj<typeof IconArrowChevronLeftDuo>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
